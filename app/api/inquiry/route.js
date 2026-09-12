import { deliverLead } from '../../../lib/server/leadDelivery';

function reference(){return `TTT-I-${Date.now().toString(36).toUpperCase().slice(-6)}`}
function clean(value,max=5000){return typeof value==='string'?value.trim().slice(0,max):''}

export async function POST(request) {
  try {
    const body = await request.json();
    if(clean(body?.website,200)) return Response.json({ok:true,message:'Thank you. Your message has been received.'});

    const firstName=clean(body?.firstName,80);
    const lastName=clean(body?.lastName,80);
    const email=clean(body?.email,180).toLowerCase();
    const message=clean(body?.message,5000);
    if(!firstName||!lastName||!email||!message||body?.consent!=='yes') return Response.json({ok:false,message:'Please complete the required fields.'},{status:400});
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ok:false,message:'Please enter a valid email address.'},{status:400});

    const record={reference:reference(),source:'ttt-website',inquiry_type:clean(body?.inquiryType,80)||'general',topic:clean(body?.topic,120),first_name:firstName,last_name:lastName,email,phone:clean(body?.phone,80),company:clean(body?.company,160),message,consent_at:new Date().toISOString(),created_at:new Date().toISOString()};
    const delivery=await deliverLead({table:'inquiries',event:'inquiry.created',record});

    if(!delivery.delivered) return Response.json({ok:false,message:'Online message routing is temporarily unavailable. Please try again shortly.'},{status:503});
    return Response.json({ok:true,reference:record.reference,message:`Thank you. Your message has been received. Reference ${record.reference}.`});
  } catch (error) {
    console.error('Inquiry submission failed', error);
    return Response.json({ ok: false, message: 'We could not send your message. Please try again later.' }, { status: 500 });
  }
}
