import { callPublicRpc } from './tttPublicApi';

export function cleanTelemetry(value,max=1000){return typeof value==='string'?value.trim().slice(0,max):''}
export function scrubTelemetry(value){
  return cleanTelemetry(value,1500)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,'[email]')
    .replace(/(?:\+?\d[\d\s().-]{7,}\d)/g,'[phone]');
}
export function normalizeTelemetry(value){
  return String(value||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}

export async function logTessaQuestion(input){
  const question=scrubTelemetry(input.question);
  if(question.length<2) return false;
  try{
    await callPublicRpc('log_tessa_question_v2',{
      p_session_id:cleanTelemetry(input.sessionId,100)||null,
      p_visitor_id:cleanTelemetry(input.visitorId,100)||null,
      p_website_session_id:cleanTelemetry(input.websiteSessionId,100)||null,
      p_question:question,
      p_normalized_question:normalizeTelemetry(question).slice(0,1000)||null,
      p_matched:Boolean(input.matched),
      p_matched_intent_id:cleanTelemetry(input.matchedIntentId,160)||null,
      p_confidence:Number.isFinite(Number(input.confidence))?Math.max(0,Math.min(1,Number(input.confidence))):null,
      p_category:cleanTelemetry(input.category,120)||null,
      p_service:cleanTelemetry(input.service,120)||null,
      p_mode:cleanTelemetry(input.mode,40)||null,
      p_answer:scrubTelemetry(input.answer)||null,
      p_page_path:cleanTelemetry(input.pagePath,300)||null,
      p_referrer:cleanTelemetry(input.referrer,500)||null,
      p_knowledge_version:cleanTelemetry(input.knowledgeVersion,80)||null,
      p_response_source:cleanTelemetry(input.responseSource,60)||null,
      p_model_name:cleanTelemetry(input.modelName,120)||null,
      p_latency_ms:Number.isFinite(Number(input.latencyMs))?Math.round(Number(input.latencyMs)):null
    });
    return true;
  }catch(error){
    console.error('Tessa question persistence failed',error);
    return false;
  }
}
