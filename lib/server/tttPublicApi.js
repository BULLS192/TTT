const TTT_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://qvqxcjmplyjgcbxlveec.supabase.co';
const TTT_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_CwrZgPD-RJVvmdNR4YABQg_cRttvE_e';

const RPC_ACTIONS = Object.freeze({
  get_tessa_knowledge_runtime: 'knowledge',
  log_tessa_question_v2: 'tessa-question',
  log_website_event_v2: 'website-event',
  submit_tessa_project_request: 'project-request',
  submit_customer_intake: 'customer-intake'
});

export async function callPublicRpc(name, payload={}) {
  const action=RPC_ACTIONS[name];
  if(!action) throw new Error(`Unsupported public TTT action: ${name}`);
  const response=await fetch(`${TTT_SUPABASE_URL}/functions/v1/ttt-public-api`,{
    method:'POST',
    headers:{
      apikey:TTT_SUPABASE_KEY,
      'Content-Type':'application/json'
    },
    body:JSON.stringify({action,payload}),
    cache:'no-store'
  });
  const result=await response.json().catch(()=>null);
  if(!response.ok||!result?.ok){
    throw new Error(`TTT public API ${name} failed: ${response.status} ${result?.error||'request_failed'}`);
  }
  return result.data ?? null;
}
