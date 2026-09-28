import { logTessaQuestion, scrubTelemetry } from '../../../../lib/server/tessaTelemetry';

export async function POST(request){
  try{
    const body=await request.json();
    const persisted=await logTessaQuestion({
      sessionId:body?.sessionId,
      visitorId:body?.visitorId,
      websiteSessionId:body?.websiteSessionId,
      question:scrubTelemetry(body?.question),
      matched:body?.matched,
      matchedIntentId:body?.matchedIntentId,
      confidence:body?.confidence,
      category:body?.category,
      service:body?.service,
      mode:body?.mode,
      answer:body?.answer,
      pagePath:body?.pagePath,
      referrer:body?.referrer,
      knowledgeVersion:body?.knowledgeVersion,
      responseSource:body?.responseSource||'deterministic',
      modelName:body?.modelName,
      latencyMs:body?.latencyMs
    });
    return Response.json({ok:true,persisted});
  }catch(error){
    console.error('Tessa question logging failed',error);
    return Response.json({ok:true,persisted:false});
  }
}
