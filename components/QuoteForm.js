'use client';
import { useEffect, useMemo, useState } from 'react';

const stepNames=['Contact','Vehicle','Service','Details','Photos','Follow-up'];
const serviceOptions=[
  ['Window Tint','Heat, glare, UV and privacy','tint'],
  ['Audio','Upgrades, amplifiers, subwoofers, tuning','audio'],
  ['GPS Tracking','Location and alerts','gps'],
  ['Kill Switch / Immobilization','Added theft deterrence','kill-switch'],
  ['SignalTrace™ Diagnostics','Electrical problems and faults','signaltrace'],
  ['Custom Fabrication','Parts made to fit','fabrication'],
  ['Fleet or Dealership','Several vehicles or business work','fleet'],
  ['Not sure','Tell us what’s going on','not-sure']
];

const blank={firstName:'',lastName:'',email:'',phone:'',year:'',make:'',model:'',color:'',plate:'',plateState:'',services:[],details:'',tintWindows:[],tintExisting:'',audioGoal:'',factoryScreen:'',gpsCount:'',gpsUse:'',securityHistory:'',signalStart:'',signalFrequency:'',signalTrigger:'',signalPrevious:'',fabricationNeed:'',fleetCompany:'',fleetCount:'',preferredContact:'Email',bestTime:'Any time',timing:'Just exploring',notes:'',authorizedTracking:false,website:''};

export default function QuoteForm(){
 const [step,setStep]=useState(0),[form,setForm]=useState(blank),[error,setError]=useState(''),[sending,setSending]=useState(false),[result,setResult]=useState(null);
 useEffect(()=>{const p=new URLSearchParams(window.location.search).get('service');if(p&&serviceOptions.some(x=>x[2]===p))setForm(f=>({...f,services:[p]}));},[]);
 const progress=useMemo(()=>((step+1)/stepNames.length)*100,[step]);
 const set=(k,v)=>setForm(f=>({...f,[k]:v}));
 const toggleService=(v)=>setForm(f=>({...f,services:f.services.includes(v)?f.services.filter(x=>x!==v):[...f.services,v]}));
 const validate=()=>{
  if(step===0&&(!form.firstName||!form.lastName||!form.email)) return 'Please enter your name and email so we can reply.';
  if(step===1&&(!form.year||!form.make||!form.model)) return 'Please add the vehicle year, make and model.';
  if(step===2&&!form.services.length) return 'Please choose at least one service, or “Not sure.”';
  if(step===2&&form.services.includes('gps')&&!form.authorizedTracking) return 'Please confirm you are authorized to request tracking on this vehicle.';
  if(step===3&&!form.details) return 'Please tell us what you would like done or what is happening.';
  return '';
 };
 const next=()=>{const e=validate();setError(e);if(!e)setStep(s=>Math.min(5,s+1));};
 const submit=async()=>{
  const e=validate(); if(e){setError(e);return;}
  setSending(true);setError('');
  const extra=[
    form.tintWindows.length?'Tint windows: '+form.tintWindows.join(', '):'',
    form.tintExisting?'Existing tint: '+form.tintExisting:'',
    form.audioGoal?'Audio goal: '+form.audioGoal:'',
    form.factoryScreen?'Keep factory screen: '+form.factoryScreen:'',
    form.gpsCount?'GPS vehicle count: '+form.gpsCount:'',
    form.gpsUse?'GPS use: '+form.gpsUse:'',
    form.securityHistory?'Security history: '+form.securityHistory:'',
    form.signalStart?'SignalTrace started: '+form.signalStart:'',
    form.signalFrequency?'SignalTrace frequency: '+form.signalFrequency:'',
    form.signalTrigger?'SignalTrace trigger: '+form.signalTrigger:'',
    form.signalPrevious?'Previous tests/repairs: '+form.signalPrevious:'',
    form.fabricationNeed?'Fabrication need: '+form.fabricationNeed:'',
    form.fleetCompany?'Company: '+form.fleetCompany:'',
    form.fleetCount?'Fleet count: '+form.fleetCount:'',
    form.notes
  ].filter(Boolean).join('\n');
  try{
    const body={type:'Website quote',year:form.year,make:form.make,model:form.model,trim:'',services:form.services,priority:'',budget:'',timeline:form.timing,notes:extra,name:(form.firstName+' '+form.lastName).trim(),email:form.email,phone:form.phone,consent:true,preferredContact:form.preferredContact,details:form.details,website:form.website};
    const r=await fetch('/api/project-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    const j=await r.json(); if(!r.ok)throw new Error(j.error||'We could not send your request.');
    setResult(j);
  }catch(err){setError(err.message||'We could not send your request. Please try again.');}finally{setSending(false);}
 };
 if(result)return <div className="intake-success"><p className="eyebrow">Quote request received</p><h2>Thanks, {form.firstName}. Your request is in.</h2><p>We’ve received your request for {form.services.map(s=>serviceOptions.find(x=>x[2]===s)?.[0]||s).join(', ')} on your {form.year} {form.make} {form.model}. Our team will review it and reply by {form.preferredContact.toLowerCase()}.</p><p><strong>Reference:</strong> {result.reference}</p><div className="button-row"><a className="button" href="/portfolio">Browse our work</a><a className="button button--ghost" href="/faq">Read common questions</a></div></div>;
 return <div className="intake">
   <div className="intake__top"><span>Step {step+1} of 6</span><strong>{stepNames[step]}</strong></div><div className="progress"><span style={{width:progress+'%'}}/></div>
   <p className="save-note" style={{padding:'0 28px'}}>Requesting a quote doesn’t commit you to anything.</p>
   {step===0&&<div className="intake__panel"><p className="eyebrow">Contact</p><h2>How can we reach you?</h2><p>We’ll use these details only to respond about your request.</p><div className="field-grid field-grid--2"><label>First name *<input value={form.firstName} onChange={e=>set('firstName',e.target.value)}/></label><label>Last name *<input value={form.lastName} onChange={e=>set('lastName',e.target.value)}/></label><label>Email *<input type="email" value={form.email} onChange={e=>set('email',e.target.value)}/></label><label>Mobile phone<input value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="Include area code"/></label></div></div>}
   {step===1&&<div className="intake__panel"><p className="eyebrow">Vehicle</p><h2>Tell us about your vehicle</h2><p>Year, make and model tell us which parts, film patterns and wiring apply.</p><div className="field-grid field-grid--2"><label>Year *<input value={form.year} onChange={e=>set('year',e.target.value)} inputMode="numeric"/></label><label>Make *<input value={form.make} onChange={e=>set('make',e.target.value)} placeholder="e.g. Toyota"/></label><label>Model *<input value={form.model} onChange={e=>set('model',e.target.value)} placeholder="e.g. Tacoma"/></label><label>Color<input value={form.color} onChange={e=>set('color',e.target.value)}/></label><label>License plate<input value={form.plate} onChange={e=>set('plate',e.target.value.toUpperCase())}/></label><label>Plate state<input value={form.plateState} onChange={e=>set('plateState',e.target.value)}/></label></div></div>}
   {step===2&&<div className="intake__panel"><p className="eyebrow">Service</p><h2>What are you interested in?</h2><p>Choose one or more. Not sure? Pick “Not sure” and explain in the next step.</p><div className="choice-grid">{serviceOptions.map(([label,desc,val])=><button type="button" key={val} className={form.services.includes(val)?'choice is-selected':'choice'} onClick={()=>toggleService(val)}><span><strong>{label}</strong><small style={{display:'block'}}>{desc}</small></span><span>{form.services.includes(val)?'✓':'+'}</span></button>)}</div>{form.services.includes('gps')?<label className="consent-check" style={{marginTop:20}}><input type="checkbox" checked={form.authorizedTracking} onChange={e=>set('authorizedTracking',e.target.checked)}/><span>I confirm I own this vehicle or am authorized to request tracking on it.</span></label>:null}</div>}
   {step===3&&<div className="intake__panel"><p className="eyebrow">Details</p><h2>Tell us more</h2><p>Plain language is perfect. There are no wrong answers.</p><label>What would you like done, or what’s happening? *<textarea value={form.details} onChange={e=>set('details',e.target.value)} placeholder='e.g. “I want ceramic tint on the side and rear windows” or “My battery dies if I don’t drive for two days.”'/></label>
    {form.services.includes('tint')?<div className="field-grid field-grid--2"><label>Which windows?<input value={form.tintWindows.join(', ')} onChange={e=>set('tintWindows',e.target.value.split(',').map(x=>x.trim()).filter(Boolean))} placeholder="Front sides, rear sides, rear windshield..."/></label><label>Existing tint?<select value={form.tintExisting} onChange={e=>set('tintExisting',e.target.value)}><option value="">Select</option><option>Yes</option><option>No</option><option>Not sure</option></select></label></div>:null}
    {form.services.includes('audio')?<div className="field-grid field-grid--2"><label>What would you like to improve?<select value={form.audioGoal} onChange={e=>set('audioGoal',e.target.value)}><option value="">Select</option><option>Clarity</option><option>Volume</option><option>Bass</option><option>Everything</option></select></label><label>Keep the factory screen?<select value={form.factoryScreen} onChange={e=>set('factoryScreen',e.target.value)}><option value="">Select</option><option>Yes</option><option>No</option><option>Not sure</option></select></label></div>:null}
    {form.services.includes('gps')?<div className="field-grid field-grid--2"><label>How many vehicles?<input value={form.gpsCount} onChange={e=>set('gpsCount',e.target.value)}/></label><label>Personal or business use?<select value={form.gpsUse} onChange={e=>set('gpsUse',e.target.value)}><option value="">Select</option><option>Personal</option><option>Business</option></select></label></div>:null}
    {form.services.includes('kill-switch')?<label>Has the vehicle been stolen or tampered with before?<select value={form.securityHistory} onChange={e=>set('securityHistory',e.target.value)}><option value="">Select</option><option>Yes</option><option>No</option><option>Prefer to discuss</option></select><small>Please don’t describe existing hidden security features here. We’ll discuss them privately.</small></label>:null}
    {form.services.includes('signaltrace')?<div className="field-grid field-grid--2"><label>When did the problem start?<input value={form.signalStart} onChange={e=>set('signalStart',e.target.value)}/></label><label>How often does it happen?<select value={form.signalFrequency} onChange={e=>set('signalFrequency',e.target.value)}><option value="">Select</option><option>Every time</option><option>Daily</option><option>Weekly</option><option>Rarely</option><option>Not sure</option></select></label><label>Anything that seems to trigger it?<input value={form.signalTrigger} onChange={e=>set('signalTrigger',e.target.value)} placeholder="Heat, rain, time parked, bumps..."/></label><label>What has already been tested or replaced?<input value={form.signalPrevious} onChange={e=>set('signalPrevious',e.target.value)}/></label></div>:null}
    {form.services.includes('fabrication')?<label>What should the part do, and where does it go?<textarea value={form.fabricationNeed} onChange={e=>set('fabricationNeed',e.target.value)}/></label>:null}
    {form.services.includes('fleet')?<div className="field-grid field-grid--2"><label>Company name<input value={form.fleetCompany} onChange={e=>set('fleetCompany',e.target.value)}/></label><label>Approximate number of vehicles<input value={form.fleetCount} onChange={e=>set('fleetCount',e.target.value)}/></label></div>:null}
   </div>}
   {step===4&&<div className="intake__panel"><p className="eyebrow">Photos</p><h2>Add photos (optional)</h2><p>Photos help us understand the setup or the problem before we reply.</p><div className="validation-note"><strong>Preview note:</strong> the new copy calls for photo uploads here. The current website lead endpoint does not yet store files, so this preview keeps the step visible without pretending an upload was received. We’ll connect storage before this version is promoted to production.</div></div>}
   {step===5&&<div className="intake__panel"><p className="eyebrow">Follow-up</p><h2>How and when should we follow up?</h2><div className="field-grid field-grid--2"><label>How should we reply?<select value={form.preferredContact} onChange={e=>set('preferredContact',e.target.value)}><option>Call</option><option>Text</option><option>Email</option></select></label><label>Best time to reach you<select value={form.bestTime} onChange={e=>set('bestTime',e.target.value)}><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any time</option></select></label><label>When are you hoping to have the work done?<select value={form.timing} onChange={e=>set('timing',e.target.value)}><option>As soon as possible</option><option>Within 2 weeks</option><option>Within a month</option><option>Just exploring</option></select></label><label>Anything else?<textarea value={form.notes} onChange={e=>set('notes',e.target.value)}/></label></div><p>This helps us plan. It isn’t a booked appointment. We’ll confirm a time with you.</p><label className="consent-check"><input type="checkbox" checked readOnly/><span>By submitting, you agree to be contacted about this request. See our <a href="/privacy">Privacy Policy</a>.</span></label><label aria-hidden="true" style={{position:'absolute',left:'-10000px'}}>Website<input value={form.website} onChange={e=>set('website',e.target.value)} tabIndex="-1" autoComplete="off"/></label></div>}
   {error?<p className="validation-note" role="alert" style={{margin:'0 28px'}}>{error}</p>:null}
   <div className="intake__actions"><button className="button button--ghost" type="button" disabled={step===0||sending} onClick={()=>{setError('');setStep(s=>Math.max(0,s-1))}}>Back</button>{step===5?<button className="button" type="button" disabled={sending} onClick={submit}>{sending?'Sending…':'Send Quote Request'}</button>:<button className="button" type="button" onClick={next}>Continue</button>}</div>
 </div>;
}
