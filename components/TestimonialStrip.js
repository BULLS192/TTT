import { testimonials } from '../lib/testimonials';

export default function TestimonialStrip(){
  if(!testimonials.length) return null;
  return <section className="section section--soft"><div className="shell"><p className="eyebrow">Client feedback</p><div className="card-grid card-grid--3">{testimonials.map((t)=><blockquote className="feature-card" key={`${t.name}-${t.quote}`}><p>“{t.quote}”</p><footer><b>{t.name}</b>{t.vehicle?<span>{t.vehicle}</span>:null}</footer></blockquote>)}</div></div></section>;
}
