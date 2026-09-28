import { TESSA_KNOWLEDGE, TESSA_KNOWLEDGE_VERSION } from '../../../../lib/tessa/knowledge';

export async function GET(){
  const url=process.env.SUPABASE_URL;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(url&&key){
    try{
      const response=await fetch(`${url}/rest/v1/tessa_knowledge_entries?active=eq.true&approved=eq.true&select=id,category,service,mode,questions,answer,follow_up&order=sort_order.asc,id.asc`,{
        headers:{apikey:key,Authorization:`Bearer ${key}`},
        cache:'no-store'
      });
      if(response.ok){
        const rows=await response.json();
        if(Array.isArray(rows)&&rows.length){
          return Response.json({ok:true,version:TESSA_KNOWLEDGE_VERSION,entries:rows.map((x)=>({...x,followUp:x.follow_up||''}))});
        }
      }
    }catch(error){console.error('Tessa knowledge load failed',error);}
  }
  return Response.json({ok:true,version:TESSA_KNOWLEDGE_VERSION,entries:TESSA_KNOWLEDGE});
}
