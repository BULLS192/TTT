const TTT_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://qvqxcjmplyjgcbxlveec.supabase.co';
const TTT_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cXhjam1wbHlqZ2NieGx2ZWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyOTQ2MjEsImV4cCI6MjEwNTg3MDYyMX0.TujhTkm7XYCOGZeUtwm2TxfHbsVUJONCW4MSJ0SPQ90';

export async function callPublicRpc(name, payload={}) {
  const response=await fetch(`${TTT_SUPABASE_URL}/rest/v1/rpc/${name}`,{
    method:'POST',
    headers:{
      apikey:TTT_SUPABASE_ANON_KEY,
      Authorization:`Bearer ${TTT_SUPABASE_ANON_KEY}`,
      'Content-Type':'application/json'
    },
    body:JSON.stringify(payload),
    cache:'no-store'
  });
  if(!response.ok){
    const body=await response.text().catch(()=> '');
    throw new Error(`TTT Supabase RPC ${name} failed: ${response.status} ${body.slice(0,300)}`);
  }
  const text=await response.text();
  if(!text) return null;
  try{return JSON.parse(text);}catch{return text;}
}
