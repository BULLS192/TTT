import { NextResponse } from 'next/server';
import { deliverLead } from '../../../lib/server/leadDelivery';
import { callPublicRpc } from '../../../lib/server/tttPublicApi';

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
      name,email,phone:clean(body?.phone,80),consent_at:new Date().toISOString(),created_at:new Date().toISOString(),
      visitor_id:clean(body?.visitorId,100)||null,website_session_id:clean(body?.websiteSessionId,100)||null,
      page_path:clean(body?.pagePath,300)||null,referrer:clean(body?.referrer,500)||null,
      utm_source:clean(body?.utmSource,160)||null,utm_medium:clean(body?.utmMedium,160)||null,utm_campaign:clean(body?.utmCampaign,200)||null
    };

    let crm=null;
    let persisted=false;
    try{
      crm=await callPublicRpc('submit_tessa_project_request',{
        p_reference:record.reference,
        p_name:name,
        p_email:email,
        p_phone:record.phone||null,
        p_service:record.services[0]||null,
        p_year:record.year||null,
        p_make:record.make||null,
        p_model:record.model||null,
        p_trim:record.trim||null,
        p_priority:'medium',
        p_budget:record.budget||null,
        p_timeline:record.timeline||null,
        p_details:clean(body?.details,1600)||record.notes||null,
        p_transcript:clean(body?.transcript,8000)||record.notes||null,
        p_visitor_id:record.visitor_id,
        p_website_session_id:record.website_session_id,
        p_page_path:record.page_path,
        p_referrer:record.referrer,
        p_utm_source:record.utm_source,
        p_utm_medium:record.utm_medium,
        p_utm_campaign:record.utm_campaign,
        p_preferred_contact_method:clean(body?.preferredContact,40)||null,
        p_consent:true
      });
      persisted=Boolean(crm?.ok);
    }catch(error){
      console.error('TTT native CRM routing failed',error);
    }

    let delivery={persisted:false,notified:false,delivered:false};
    if(persisted){
      delivery=await deliverLead({table:'project_requests',event:'project_request.created',record,persist:false});
    }else{
      delivery=await deliverLead({table:'project_requests',event:'project_request.created',record});
      persisted=delivery.persisted;
    }

    if(!persisted&&!delivery.notified) return NextResponse.json({ok:false,error:'Online project routing is temporarily unavailable. Please try again shortly.'},{status:503});

    return NextResponse.json({
      ok:true,
      reference:record.reference,
      persisted,
      notified:delivery.notified,
      crmLeadId:crm?.leadId||null,
      crmContactId:crm?.contactId||null,
      leadDeduped:Boolean(crm?.leadDeduped)
    });
  }catch(error){
    console.error('TTT project request failed',error);
    return NextResponse.json({ok:false,error:'Invalid project request.'},{status:400});
  }
}
