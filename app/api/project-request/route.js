import { NextResponse } from 'next/server';

function reference(){return `TTT-R-${Date.now().toString(36).toUpperCase().slice(-6)}`}
export async function POST(request){
  try{
    const body=await request.json();
    if(!body?.name || !body?.email || !body?.type) return NextResponse.json({ok:false,error:'Missing required project information.'},{status:400});
    const record={...body,reference:reference(),source:'ttt-website',created_at:new Date().toISOString()};
    const url=process.env.SUPABASE_URL; const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
    if(url&&key){
      const res=await fetch(`${url}/rest/v1/project_requests`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(record),cache:'no-store'});
      if(!res.ok){const detail=await res.text(); console.error('TTT Supabase project request failed',detail); return NextResponse.json({ok:false,error:'Project request could not be saved.'},{status:502});}
      return NextResponse.json({ok:true,reference:record.reference,persisted:true});
    }
    return NextResponse.json({ok:true,reference:record.reference,persisted:false,message:'Project brief validated. Production CRM storage is not configured yet.'});
  }catch(error){console.error(error);return NextResponse.json({ok:false,error:'Invalid project request.'},{status:400});}
}
