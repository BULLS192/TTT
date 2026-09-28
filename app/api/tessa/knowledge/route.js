import { TESSA_KNOWLEDGE, TESSA_KNOWLEDGE_VERSION } from '../../../../lib/tessa/knowledge';
import { callPublicRpc } from '../../../../lib/server/tttPublicApi';

export async function GET(){
  try{
    const rows=await callPublicRpc('get_tessa_knowledge_runtime',{});
    if(Array.isArray(rows)&&rows.length){
      return Response.json({ok:true,version:TESSA_KNOWLEDGE_VERSION,entries:rows});
    }
  }catch(error){
    console.error('Tessa runtime knowledge load failed',error);
  }
  return Response.json({ok:true,version:TESSA_KNOWLEDGE_VERSION,entries:TESSA_KNOWLEDGE});
}
