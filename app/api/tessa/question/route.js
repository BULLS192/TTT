import { deliverLead } from '../../../../lib/server/leadDelivery';

const TTT_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qvqxcjmplyjgcbxlveec.supabase.co';
const TTT_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cXhjam1wbHlqZ2NieGx2ZWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyOTQ2MjEsImV4cCI6MjEwNTg3MDYyMX0.TujhTkm7XYCOGZeUtwm2TxfHbsVUJONCW4MSJ0SPQ90';

function clean(value,max=1000){return typeof value==='string'?value.trim().slice(0,max):''}
function scrub(value){
  return clean(value,1000)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,'[email]')
    .replace(/(?:\+?\d[\d\s().-]{7,}\d)/g,'[phone]');
}
function normalize(value){
  return value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}

async function persistViaPublicRpc(record){
  const response=await fetch(`${TTT_SUPABASE_URL}/rest/v1/rpc/log_tessa_question`,{
    method:'POST',
    headers:{
      apikey:TTT_SUPABASE_ANON_KEY,
      Authorization:`Bearer ${TTT_SUPABASE_ANON_KEY}`,
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      p_session_id:record.session_id||null,
      p_question:record.question,
      p_normalized_question:record.normalized_question||null,
      p_matched:Boolean(record.matched),
      p_matched_intent_id:record.matched_intent_id||null,
      p_confidence:record.confidence,
      p_category:record.category||null,
      p_service:record.service||null,
      p_mode:record.mode||null,
      p_answer:record.answer||null,
      p_page_path:record.page_path||null,
      p_referrer:record.referrer||null,
      p_knowledge_version:record.knowledge_version||null
    }),
    cache:'no-store'
  });
  if(!response.ok){
    const body=await response.text().catch(()=> '');
    throw new Error(`Tessa RPC persistence failed: ${response.status} ${body.slice(0,300)}`);
  }
  return true;
}

export async function POST(request){
  try{
    const body=await request.json();
    const question=scrub(body?.question);
    if(question.length<2) return Response.json({ok:true,persisted:false,reason:'empty'});
    const answer=scrub(body?.answer);
    const record={
      session_id:clean(body?.sessionId,100),
      question,
      normalized_question:normalize(question).slice(0,1000),
      matched:Boolean(body?.matched),
      matched_intent_id:clean(body?.matchedIntentId,160)||null,
      confidence:Number.isFinite(Number(body?.confidence))?Math.max(0,Math.min(1,Number(body.confidence))):null,
      category:clean(body?.category,120)||null,
      service:clean(body?.service,120)||null,
      mode:clean(body?.mode,40)||null,
      answer:answer||null,
      page_path:clean(body?.pagePath,300),
      referrer:clean(body?.referrer,500),
      knowledge_version:clean(body?.knowledgeVersion,80),
      created_at:new Date().toISOString()
    };

    const delivery=await deliverLead({table:'tessa_question_log',event:'tessa.question',record});
    let persisted=Boolean(delivery?.persisted);
    if(!persisted){
      try{
        persisted=await persistViaPublicRpc(record);
      }catch(error){
        console.error('Tessa question fallback persistence failed',error);
      }
    }
    if(!persisted) console.error('Tessa question was not persisted',record.normalized_question);
    return Response.json({ok:true,persisted});
  }catch(error){
    console.error('Tessa question logging failed',error);
    return Response.json({ok:true,persisted:false});
  }
}
