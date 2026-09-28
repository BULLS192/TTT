import { createHash } from 'crypto';
import { callPublicRpc } from '../../../../lib/server/tttPublicApi';

function clean(value,max=500){return typeof value==='string'?value.trim().slice(0,max):''}
function decodeHeader(value){
  try{return decodeURIComponent(clean(value,160));}catch{return clean(value,160);}
}
function clientIp(request){
  const forwarded=clean(request.headers.get('x-forwarded-for'),300);
  return (forwarded.split(',')[0]||clean(request.headers.get('x-real-ip'),100)).trim();
}
function ipHash(request){
  const ip=clientIp(request);
  const secret=process.env.IP_HASH_SALT || process.env.VERCEL_OIDC_TOKEN || '';
  if(!ip||!secret) return '';
  return createHash('sha256').update(secret+'|'+ip).digest('hex');
}

export async function POST(request){
  try{
    const body=await request.json();
    const visitorId=clean(body?.visitorId,100);
    const sessionId=clean(body?.websiteSessionId,100);
    const eventType=clean(body?.eventType,80);
    if(!visitorId||!sessionId||!eventType) return Response.json({ok:false},{status:400});
    await callPublicRpc('log_website_event',{
      p_visitor_id:visitorId,
      p_session_id:sessionId,
      p_event_type:eventType,
      p_event_name:clean(body?.eventName,120),
      p_path:clean(body?.path,400),
      p_referrer:clean(body?.referrer,500),
      p_utm_source:clean(body?.utmSource,160),
      p_utm_medium:clean(body?.utmMedium,160),
      p_utm_campaign:clean(body?.utmCampaign,200),
      p_country:clean(request.headers.get('x-vercel-ip-country'),80),
      p_region:clean(request.headers.get('x-vercel-ip-country-region'),120),
      p_city:decodeHeader(request.headers.get('x-vercel-ip-city')),
      p_ip_hash:ipHash(request),
      p_user_agent:clean(request.headers.get('user-agent'),500),
      p_metadata:(body?.metadata&&typeof body.metadata==='object'&&!Array.isArray(body.metadata))?body.metadata:{}
    });
    return Response.json({ok:true,persisted:true});
  }catch(error){
    console.error('TTT website analytics failed',error);
    return Response.json({ok:true,persisted:false});
  }
}
