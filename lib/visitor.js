'use client';

const VISITOR_KEY='ttt_visitor_id';
const SESSION_KEY='ttt_site_session_id';

function makeId(prefix){
  const token=(typeof crypto!=='undefined'&&crypto.randomUUID)
    ? crypto.randomUUID()
    : Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  return prefix+'-'+token;
}

export function getVisitorContext(){
  if(typeof window==='undefined') return {visitorId:'',websiteSessionId:'',referrer:'',utmSource:'',utmMedium:'',utmCampaign:''};
  let visitorId=localStorage.getItem(VISITOR_KEY);
  if(!visitorId){visitorId=makeId('VIS');localStorage.setItem(VISITOR_KEY,visitorId);}
  let websiteSessionId=sessionStorage.getItem(SESSION_KEY);
  if(!websiteSessionId){websiteSessionId=makeId('WEB');sessionStorage.setItem(SESSION_KEY,websiteSessionId);}
  const params=new URLSearchParams(window.location.search);
  return {
    visitorId,
    websiteSessionId,
    referrer:document.referrer||'',
    utmSource:params.get('utm_source')||'',
    utmMedium:params.get('utm_medium')||'',
    utmCampaign:params.get('utm_campaign')||''
  };
}

export function getTessaSessionId(){
  if(typeof window==='undefined') return '';
  let id=sessionStorage.getItem('ttt-tessa-session');
  if(!id){id=makeId('TS');sessionStorage.setItem('ttt-tessa-session',id);}
  return id;
}

export async function trackWebsiteEvent(eventType,eventName='',metadata={}){
  if(typeof window==='undefined') return;
  const ctx=getVisitorContext();
  try{
    await fetch('/api/analytics/event',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        ...ctx,
        eventType,
        eventName,
        path:window.location.pathname+window.location.search,
        metadata
      }),
      keepalive:true
    });
  }catch{}
}
