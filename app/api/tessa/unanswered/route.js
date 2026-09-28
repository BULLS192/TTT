import { deliverLead } from '../../../../lib/server/leadDelivery';

function clean(value,max=500){return typeof value==='string'?value.trim().slice(0,max):''}
function scrub(value){
  return clean(value,500)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,'[email]')
    .replace(/(?:\+?\d[\d\s().-]{7,}\d)/g,'[phone]');
}
function normalize(value){
  return value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}

export async function POST(request){
  try{
    const body=await request.json();
    const question=scrub(body?.question);
    if(question.length<2) return Response.json({ok:true});
    const record={
      question,
      normalized_question:normalize(question).slice(0,500),
      page_path:clean(body?.pagePath,300),
      referrer:clean(body?.referrer,500),
      knowledge_version:clean(body?.knowledgeVersion,80),
      status:'new',
      matched_intent_id:null,
      created_at:new Date().toISOString()
    };
    await deliverLead({table:'tessa_unanswered_questions',event:'tessa.unanswered',record});
    return Response.json({ok:true});
  }catch(error){
    console.error('Tessa unanswered-question logging failed',error);
    return Response.json({ok:true});
  }
}
