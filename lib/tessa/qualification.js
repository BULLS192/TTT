export const EMPTY_TESSA_CONTEXT = Object.freeze({
  service:'',
  year:'',
  make:'',
  model:'',
  trim:'',
  color:'',
  serviceDetail:'',
  projectGoal:'',
  symptom:''
});

export const TESSA_QUALIFICATION = Object.freeze({
  'Window tint': {
    detailKey:'serviceDetail',
    question:'For the tint, what matters most to you: heat rejection, privacy, appearance, night visibility, or a combination?'
  },
  'Audio & DSP': {
    detailKey:'serviceDetail',
    question:'What are you trying to improve most: clarity, bass, overall volume, factory integration, or the whole system?'
  },
  'Security / kill switch': {
    detailKey:'serviceDetail',
    question:'What is your biggest security concern: theft prevention, alerts, immobilization, recovery/tracking, or layered protection?'
  },
  'GPS & tracking': {
    detailKey:'serviceDetail',
    question:'Is this for one vehicle or a fleet, and what do you most need to monitor or report?'
  },
  'SignalTrace™ diagnostics': {
    detailKey:'symptom',
    question:'Describe the symptom and when it happens. If anything was recently installed or changed, include that too.'
  },
  'Cameras': {
    detailKey:'serviceDetail',
    question:'What camera coverage do you want: front only, front and rear, parking mode, cabin/fleet coverage, or something else?'
  },
  'Electronics': {
    detailKey:'projectGoal',
    question:'What function, accessory, or electrical issue do you want TTT to add, improve, or fix?'
  },
  'Custom fabrication': {
    detailKey:'projectGoal',
    question:'What part, mounting, fitment, or fabrication problem are you trying to solve?'
  }
});

export function sanitizeTessaContext(value={}){
  const source=value&&typeof value==='object'?value:{};
  const clean=(key,max=240)=>typeof source[key]==='string'?source[key].trim().slice(0,max):'';
  return {
    service:clean('service',120),
    year:clean('year',4),
    make:clean('make',100),
    model:clean('model',100),
    trim:clean('trim',100),
    color:clean('color',80),
    serviceDetail:clean('serviceDetail',500),
    projectGoal:clean('projectGoal',500),
    symptom:clean('symptom',500)
  };
}

export function mergeTessaContext(current={},updates={}){
  const a=sanitizeTessaContext(current);
  const b=sanitizeTessaContext(updates);
  const merged={...a};
  for(const key of Object.keys(merged)) if(b[key]) merged[key]=b[key];
  return merged;
}

export function extractBasicContextFromText(text='',current={}){
  const base=sanitizeTessaContext(current);
  const value=String(text||'').trim();
  const updates={};
  const yearMatch=value.match(/\b(19\d{2}|20\d{2})\b/);
  if(yearMatch && !base.year) updates.year=yearMatch[1];

  if(yearMatch && (!base.make || !base.model)){
    const tail=value.slice((yearMatch.index||0)+yearMatch[0].length)
      .replace(/^[\s,;:.-]+/,'')
      .trim();
    const parts=tail.split(/\s+/).filter(Boolean);
    if(parts.length>=2){
      if(!base.make) updates.make=parts[0].replace(/[^A-Za-z0-9&.-]/g,'').slice(0,100);
      if(!base.model) updates.model=parts.slice(1,4).join(' ').replace(/[?!.]+$/,'').slice(0,100);
    }
  }
  return mergeTessaContext(base,updates);
}

export function nextQualificationQuestion(context={}){
  const c=sanitizeTessaContext(context);
  if(!c.service) return {field:'service',question:'Absolutely. Which TTT service are you interested in?'};
  if(!c.year||!c.make||!c.model) return {field:'vehicle',question:'What vehicle is this for? Please send the year, make and model — for example, 2024 Ford F-150.'};
  const config=TESSA_QUALIFICATION[c.service];
  if(config && !c[config.detailKey]) return {field:config.detailKey,question:config.question};
  return {field:'complete',question:''};
}

export function contextToLeadDetails(context={}){
  const c=sanitizeTessaContext(context);
  const detail=c.symptom||c.serviceDetail||c.projectGoal;
  return {
    service:c.service,
    year:c.year,
    make:c.make,
    model:c.model,
    details:detail
  };
}
