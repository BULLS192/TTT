import { TESSA_KNOWLEDGE } from './knowledge';

const STOP = new Set(['a','an','and','are','be','can','could','do','does','for','how','i','in','is','it','me','my','of','on','or','the','to','what','will','with','you','your']);

function normalize(value='') {
  return String(value)
    .toLowerCase()
    .replace(/signal\s*trace/g, 'signaltrace')
    .replace(/dash\s*cam/g, 'dashcam')
    .replace(/kill\s*switch/g, 'killswitch')
    .replace(/3d\s*print(?:ing)?/g, '3dprinting')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function tokens(value) {
  return normalize(value).split(' ').filter((token) => token.length > 1 && !STOP.has(token));
}

function serviceFromPath(path='') {
  const p=String(path).toLowerCase();
  if(p.includes('window-tint')) return 'Window tint';
  if(p.includes('/audio')) return 'Audio & DSP';
  if(p.includes('/security')) return 'Security / kill switch';
  if(p.includes('/tracking')) return 'GPS & tracking';
  if(p.includes('signaltrace')) return 'SignalTrace™ diagnostics';
  if(p.includes('/cameras')) return 'Cameras';
  if(p.includes('/electronics')) return 'Electronics';
  if(p.includes('custom-fabrication')) return 'Custom fabrication';
  return '';
}

function scoreVariant(query, variant) {
  const q=normalize(query), v=normalize(variant);
  if(!q || !v) return 0;
  if(q===v) return 1;
  if(v.length>=5 && q.includes(v)) return 0.94;
  if(q.length>=5 && v.includes(q)) return 0.88;

  const qTokens=tokens(q), vTokens=tokens(v);
  if(!qTokens.length || !vTokens.length) return 0;
  const qSet=new Set(qTokens), vSet=new Set(vTokens);
  let intersect=0;
  for(const token of qSet) if(vSet.has(token)) intersect++;
  if(!intersect) return 0;

  const coverage=intersect/Math.min(qSet.size,vSet.size);
  const union=new Set([...qSet,...vSet]).size;
  const jaccard=intersect/union;
  const specificity=Math.min(1,intersect/2);
  return (coverage*0.55)+(jaccard*0.30)+(specificity*0.15);
}

export function normalizeTessaQuestion(value='') {
  return normalize(value);
}

export function matchTessaQuestion(query, context={}) {
  const pageService=serviceFromPath(context.path);
  let best=null;
  for(const entry of (context.knowledge || TESSA_KNOWLEDGE)){
    let score=0;
    for(const variant of entry.questions) score=Math.max(score,scoreVariant(query,variant));
    if(pageService && entry.service===pageService) score=Math.min(1,score+0.06);
    if(!best || score>best.score) best={...entry,score};
  }
  if(!best || best.score<0.56) return null;
  return best;
}
