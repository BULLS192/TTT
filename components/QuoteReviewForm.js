'use client';
import { useState } from 'react';
import VehicleSelector from './VehicleSelector';

const services=[
  ['Window Tint','Heat, glare, UV and privacy'],
  ['Audio','Upgrades, amplifiers, subwoofers and tuning'],
  ['GPS Tracking','Location and alerts'],
  ['Kill Switch / Immobilization','Added theft deterrence'],
  ['SignalTrace™ Diagnostics','Electrical problems and faults'],
  ['Custom Fabrication','Parts made to fit'],
  ['Fleet or Dealership','Several vehicles or business work'],
  ['Not sure','Tell us what is going on']
];
const initial={firstName:'',lastName:'',email:'',phone:'',year:'',make:'',model:'',trim:'',services:[],details:'',preferredContact:'Email',timeline:'',consent:false,website:''};

export default function QuoteReviewForm(){
 const [step,setStep]=useState(0); const [form,setForm]=useState(initial); const [error,setError]=useState(''); const [busy,setBusy]=useState(false); const [result,setResult]=useState(null);
 const steps=['Contact','Vehicle','Service','Details','Photos','Follow-up'];
 const update=(k,v)=>setForm(c=>({...c,[k]:v}));
 const toggle=(v)=>update('services',form.services.includes(v)?form.services.filter(x=>x!==v):[...form.services,v]);
 const valid=()=>{ if(step===0&&(!form.firstName||(!form.email&&!form.phone)))return 'Add your first name and either an email or phone number.'; if(step===2&&!form.services.length)return 'Choose at least one service, or Not sure.'; if(step===3&&!form.details.trim())return 'Tell us a little about what you need or what is happening.'; if(step===5&&!form.consent)return 'Please confirm TTT may use these details to respond.'; return ''; };
 const next=()=>{const e=valid();setError(e);if(!e)setStep(s=>Math.min(5,s+1));};
 const submit=async()=>{const e=valid();if(e){setError(e);return;} setBusy(true);setError(''); try{
   const notes=[form.details, form.timeline ? 'Timing: '+form.timeline : ''].filter(Boolean).join('\n');
   const response=await fetch('/api/project-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
     type:'Personal vehicle',year:form.year,make:form.make,model:form.model,trim:form.trim,services:form.services,
     priority:'',budget:'',timeline:form.timeline,notes,name:[form.firstName,form.lastName].filter(Boolean).join(' '),
     email:form.email||'contact-by-phone@placeholder.invalid',phone:form.phone,preferredContact:form.preferredContact,consent:form.consent,website:form.website
   })});
   const json=await response.json(); if(!response.ok)throw new Error(json.error||'Unable to send your request.'); setResult(json);
 }catch(err){setError(err.message)}finally{setBusy(false)}};
 if(result)return <div className="quote-success"><p className="eyebrow">Request received</p><h2>Thanks, {form.firstName}. Your request is in.</h2><p>Your TTT reference is <strong>{result.reference}</strong>. The team can use the vehicle and service details you submitted as the starting point for follow-up.</p><a className="button" href="/">Return home →</a></div>;
 return <div className="quote-review">
  <div className="quote-progress"><span>Step {step+1} of 6: {steps[step]}</span><div><i style={{width:(((step+1)/6)*100)+'%'}}/></div><small>Requesting a quote does not commit you to anything.</small></div>
  {step===0&&<div className="quote-panel"><p className="eyebrow">Contact</p><h2>How can we reach you?</h2><p>We will use these details only to respond about your request.</p><div className="form-grid form-grid--2"><label>First name *<input value={form.firstName} onChange={e=>update('firstName',e.target.value)}/></label><label>Last name<input value={form.lastName} onChange={e=>update('lastName',e.target.value)}/></label><label>Email<input type="email" value={form.email} onChange={e=>update('email',e.target.value)}/></label><label>Mobile phone<input value={form.phone} onChange={e=>update('phone',e.target.value)}/></label></div></div>}
  {step===1&&<div className="quote-panel"><p className="eyebrow">Vehicle</p><h2>Tell us about your vehicle.</h2><p>Year, make and model help identify which parts, film patterns and wiring apply.</p><VehicleSelector compact onChange={v=>setForm(c=>({...c,...v}))}/><p className="form-note">License plate is optional and is not required in this review form.</p></div>}
  {step===2&&<div className="quote-panel"><p className="eyebrow">Service</p><h2>What are you interested in?</h2><p>Choose one or more. Not sure? Choose “Not sure” and describe what is happening next.</p><div className="quote-choice-grid">{services.map(([name,body])=><button type="button" key={name} className={form.services.includes(name)?'is-selected':''} onClick={()=>toggle(name)}><strong>{name}</strong><span>{body}</span><b>{form.services.includes(name)?'✓':'+'}</b></button>)}</div></div>}
  {step===3&&<div className="quote-panel"><p className="eyebrow">Details</p><h2>Tell us more.</h2><p>Plain language is perfect. There are no wrong answers.</p><label>What would you like done, or what is happening? *<textarea rows="8" value={form.details} onChange={e=>update('details',e.target.value)} placeholder="For example: I want ceramic tint on the side and rear windows, or my battery dies if I do not drive for two days."/></label></div>}
  {step===4&&<div className="quote-panel"><p className="eyebrow">Photos</p><h2>Add photos when they help.</h2><p>Photos of the glass, dashboard, cargo area, warning lights or the space where a fabricated part will go can make the first reply more useful.</p><div className="review-notice"><strong>Review build</strong><p>Direct photo upload is intentionally not enabled here until the production storage limit and retention policy are confirmed. You can still submit the request now.</p></div></div>}
  {step===5&&<div className="quote-panel"><p className="eyebrow">Follow-up</p><h2>How and when should we follow up?</h2><div className="form-grid form-grid--2"><label>Contact method<select value={form.preferredContact} onChange={e=>update('preferredContact',e.target.value)}><option>Email</option><option>Call</option><option>Text</option></select></label><label>Timing<select value={form.timeline} onChange={e=>update('timeline',e.target.value)}><option value="">Select if useful</option><option>As soon as possible</option><option>Within 2 weeks</option><option>Within a month</option><option>Just exploring</option></select></label></div><label className="consent-check"><input type="checkbox" checked={form.consent} onChange={e=>update('consent',e.target.checked)}/><span>I agree that TTT may use the information I submit to respond to this request. See the <a href="/privacy">Privacy Policy</a>.</span></label><label aria-hidden="true" style={{position:'absolute',left:-10000}}><input tabIndex="-1" value={form.website} onChange={e=>update('website',e.target.value)}/></label></div>}
  {error?<p className="validation-note" role="alert">{error}</p>:null}
  <div className="quote-actions"><button className="button button--ghost" type="button" disabled={step===0||busy} onClick={()=>{setError('');setStep(s=>Math.max(0,s-1))}}>Back</button>{step===5?<button className="button" type="button" disabled={busy} onClick={submit}>{busy?'Sending…':'Send Quote Request →'}</button>:<button className="button" type="button" onClick={next}>Continue →</button>}</div>
 </div>;
}
