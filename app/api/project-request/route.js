import { NextResponse } from 'next/server';
import { deliverLead } from '../../../lib/server/leadDelivery';

function reference(){return `TTT-R-${Date.now().toString(36).toUpperCase().slice(-6)}`}
function clean(value,max=5000){return typeof value==='string'?value.trim().slice(0,max):''}

export async function POST(request){
  try{
    const body=await request.json();
    if(clean(body?.website,200)) return NextResponse.json({ok:true,reference:reference()});

    const name=clean(body?.name,160);
    const email=clean(body?.email,180).toLowerCase();
    const type=clean(body?.type,120);
    if(!name||!email||!type||!body?.consent) return NextResponse.json({ok:false,error:'Missing required project information.'},{status:400});
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ok:false,error:'Please enter a valid email address.'},{status:400});

    const record={
      reference:reference(),source:'ttt-website',type,
      year:clean(body?.year,20),make:clean(body?.make,100),model:clean(body?.model,100),trim:clean(body?.trim,100),vin:clean(body?.vin,32),
      services:Array.isArray(body?.services)?body.services.slice(0,12).map((x)=>clean(x,100)).filter(Boolean):[],
      priority:clean(body?.priority,120),budget:clean(body?.budget,120),timeline:clean(body?.timeline,160),notes:clean(body?.notes,5000),
      name,email,phone:clean(body?.phone,80),consent_at:new Date().toISOString(),created_at:new Date().toISOString()
    };

    const delivery=await deliverLead({table:'project_requests',event:'project_request.created',record});
    if(!delivery.delivered) return NextResponse.json({ok:false,error:'Online project routing is temporarily unavailable. Please try again shortly.'},{status:503});

    return NextResponse.json({ok:true,reference:record.reference,persisted:delivery.persisted,notified:delivery.notified});
  }catch(error){
    console.error('TTT project request failed',error);
    return NextResponse.json({ok:false,error:'Invalid project request.'},{status:400});
  }
}
