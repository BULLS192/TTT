import { generateText } from 'ai';
import { TESSA_KNOWLEDGE, TESSA_KNOWLEDGE_VERSION } from '../../../../lib/tessa/knowledge';
import { inferTessaDomain, rankTessaKnowledge } from '../../../../lib/tessa/matcher';
import { callPublicRpc } from '../../../../lib/server/tttPublicApi';
import { logTessaQuestion, scrubTelemetry } from '../../../../lib/server/tessaTelemetry';

const MODEL='openai/gpt-6-luna';
const FALLBACK='That is more specific than the approved answers I have right now, and I do not want to guess. I can collect a few details and have the TTT team follow up with you.';

async function loadKnowledge(){
  try{
    const rows=await callPublicRpc('get_tessa_knowledge_runtime',{});
    if(Array.isArray(rows)&&rows.length) return rows;
  }catch{}
  return TESSA_KNOWLEDGE;
}
function jsonFromText(text=''){
  const cleaned=String(text).trim().replace(/^\`\`\`(?:json)?/i,'').replace(/\`\`\`$/,'').trim();
  try{return JSON.parse(cleaned);}catch{
    const start=cleaned.indexOf('{'),end=cleaned.lastIndexOf('}');
    if(start>=0&&end>start){try{return JSON.parse(cleaned.slice(start,end+1));}catch{}}
  }
  return null;
}
function selectCandidates(question,path,entries){
  const ranked=rankTessaKnowledge(question,{path,knowledge:entries},40);
  const domain=inferTessaDomain(question);
  const selected=new Map();
  for(const item of ranked.slice(0,16)) selected.set(item.id,item);
  if(domain){
    for(const item of entries){
      if(item.service===domain || item.category===domain) selected.set(item.id,item);
      if(selected.size>=38) break;
    }
  }else{
    for(const item of entries){
      if(['General','Pricing','Process','Service Area'].includes(item.category)) selected.set(item.id,item);
      if(selected.size>=34) break;
    }
  }
  return Array.from(selected.values()).slice(0,40);
}

export async function GET(){
  return Response.json({
    ok:true,
    model:MODEL,
    mode:'grounded-hybrid'
  });
}

export async function POST(request){
  const started=Date.now();
  try{
    const body=await request.json();
    const question=scrubTelemetry(body?.question);
    if(question.length<2) return Response.json({ok:false,error:'Question required.'},{status:400});
    const entries=await loadKnowledge();
    const rankedFallback=rankTessaKnowledge(question,{path:String(body?.pagePath||''),knowledge:entries},1)[0]||null;
    const candidates=selectCandidates(question,String(body?.pagePath||''),entries);
    const candidateMap=new Map(candidates.map(x=>[x.id,x]));
    const compact=candidates.map(x=>({
      id:x.id,
      category:x.category,
      service:x.service||'',
      mode:x.mode,
      questions:(x.questions||[]).slice(0,5),
      answer:x.answer,
      followUp:x.followUp||x.follow_up||''
    }));
    const history=Array.isArray(body?.history)?body.history.slice(-6).map(m=>({
      role:m?.role==='assistant'?'assistant':'user',
      text:scrubTelemetry(m?.text)
    })).filter(m=>m.text):[];

    const prompt=[
      'Customer question: '+question,
      'Current website path: '+String(body?.pagePath||''),
      history.length?'Recent conversation: '+JSON.stringify(history):'',
      'Approved TTT knowledge candidates: '+JSON.stringify(compact),
      '',
      'Return ONLY JSON in this exact shape:',
      '{"answer":"string","intentIds":["id"],"confidence":0.0,"handoff":false}',
      'Rules: Use only facts contained in the approved candidates. You may paraphrase or combine up to three compatible entries. Do not invent pricing, product availability, hours, warranties, legal limits, diagnoses, or capabilities. If the candidates do not support a useful answer, set handoff=true, intentIds=[], confidence below 0.5, and use a brief handoff answer. Ask at most one useful follow-up question, and only when supported by the approved knowledge.'
    ].filter(Boolean).join('\n');

    let parsed=null;
    let aiCompleted=false;
    try{
      const result=await generateText({
        model:MODEL,
        system:'You are Tessa, the customer-facing virtual assistant for Thompson Transportation Technologies (TTT). Be concise, warm and practical. Ground every factual claim in the supplied approved TTT knowledge. Never pretend that an unsupported fact is known.',
        prompt,
        maxOutputTokens:350,
        providerOptions:{gateway:{user:String(body?.visitorId||'anonymous'),tags:['tessa','website','grounded-rag']}}
      });
      parsed=jsonFromText(result.text);
      aiCompleted=Boolean(parsed);
    }catch(error){
      console.error('Tessa AI Gateway call failed',error);
    }

    if(!aiCompleted && rankedFallback?.score>=0.56){
      const answer=rankedFallback.answer+(rankedFallback.followUp||rankedFallback.follow_up?' '+(rankedFallback.followUp||rankedFallback.follow_up):'');
      const latencyMs=Date.now()-started;
      await logTessaQuestion({
        sessionId:body?.sessionId,
        visitorId:body?.visitorId,
        websiteSessionId:body?.websiteSessionId,
        question,
        matched:true,
        matchedIntentId:rankedFallback.id,
        confidence:rankedFallback.score,
        category:rankedFallback.category||'',
        service:rankedFallback.service||'',
        mode:rankedFallback.mode||'answer',
        answer,
        pagePath:body?.pagePath,
        referrer:body?.referrer,
        knowledgeVersion:TESSA_KNOWLEDGE_VERSION,
        responseSource:'deterministic-fallback',
        modelName:'',
        latencyMs
      });
      return Response.json({
        ok:true,
        answer,
        matched:true,
        matchedIntentId:rankedFallback.id,
        matchedIntentIds:[rankedFallback.id],
        confidence:rankedFallback.score,
        category:rankedFallback.category||'',
        service:rankedFallback.service||'',
        mode:rankedFallback.mode||'answer',
        source:'deterministic-fallback',
        model:'',
        latencyMs
      });
    }

    const validIds=Array.isArray(parsed?.intentIds)
      ? parsed.intentIds.map(String).filter(id=>candidateMap.has(id)).slice(0,3)
      : [];
    const first=validIds.length?candidateMap.get(validIds[0]):null;
    const confidence=Number.isFinite(Number(parsed?.confidence))?Math.max(0,Math.min(1,Number(parsed.confidence))):0;
    const grounded=Boolean(first)&&confidence>=0.5&&!parsed?.handoff;
    const answer=grounded&&typeof parsed?.answer==='string'&&parsed.answer.trim()
      ? parsed.answer.trim().slice(0,1500)
      : FALLBACK;
    const latencyMs=Date.now()-started;

    await logTessaQuestion({
      sessionId:body?.sessionId,
      visitorId:body?.visitorId,
      websiteSessionId:body?.websiteSessionId,
      question,
      matched:grounded,
      matchedIntentId:first?.id||'',
      confidence,
      category:first?.category||'',
      service:first?.service||'',
      mode:grounded?(first?.mode||'answer'):'handoff',
      answer,
      pagePath:body?.pagePath,
      referrer:body?.referrer,
      knowledgeVersion:TESSA_KNOWLEDGE_VERSION,
      responseSource:grounded?'model-grounded':'model-handoff',
      modelName:MODEL,
      latencyMs
    });

    return Response.json({
      ok:true,
      answer,
      matched:grounded,
      matchedIntentId:first?.id||'',
      matchedIntentIds:validIds,
      confidence,
      category:first?.category||'',
      service:first?.service||'',
      mode:grounded?(first?.mode||'answer'):'handoff',
      source:grounded?'model-grounded':'model-handoff',
      model:MODEL,
      latencyMs
    });
  }catch(error){
    console.error('Tessa hybrid answer failed',error);
    return Response.json({ok:true,answer:FALLBACK,matched:false,confidence:0,source:'fallback',model:'',latencyMs:Date.now()-started});
  }
}
