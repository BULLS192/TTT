'use client';

import { useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const configs={
 premium:{
  eyebrow:'Premium Vehicle Composer',title:'One vehicle experience, assembled as one plan.',
  description:'Combine comfort, sound and technology layers and see why sequencing matters.',
  options:['Window Tint','Automotive Audio','Sound Treatment','GPS Tracking'],
  initial:['Window Tint','Automotive Audio'],category:'Premium Vehicle Experience',
  notes:{'Window Tint':'Heat, glare, UV and privacy.','Automotive Audio':'Sound quality while factory functions stay useful.','Sound Treatment':'Quieter panels and a stronger foundation for audio.','GPS Tracking':'Optional connected awareness for a vehicle worth protecting.'}
 },
 security:{
  eyebrow:'Vehicle Security Composer',title:'Build coverage across more than one moment.',
  description:'Combine prevention, awareness and recovery information without treating one device as the whole answer.',
  options:['Immobilization','GPS Tracking','Alerts','SignalTrace'],initial:['Immobilization','GPS Tracking'],category:'Vehicle Security',
  notes:{Immobilization:'Independent resistance to unauthorized use.','GPS Tracking':'Location and trip history after movement.',Alerts:'Supported ignition, movement or power notifications.',SignalTrace:'Diagnose faults or conflicts in existing security electronics.'}
 },
 connected:{
  eyebrow:'Connected Vehicle Composer',title:'Choose the information worth receiving.',
  description:'Build a simple connected-vehicle information path around the events that actually matter to you.',
  options:['Live Location','Geofence','Trip History','Movement Alerts'],initial:['Live Location','Geofence'],category:'Connected Vehicle',
  notes:{'Live Location':'Current vehicle location when the platform supports it.',Geofence:'Virtual boundaries for arrival and departure awareness.','Trip History':'Where the vehicle went and when.','Movement Alerts':'Selected supported events delivered to the right user.'}
 },
 fleet:{
  eyebrow:'Fleet Program Composer',title:'Pilot once. Repeat with evidence.',
  description:'Scale one approved installation standard into a repeatable vehicle program.',
  options:['Install Standard','Vehicle Record','Verification','Reusable Parts'],initial:['Install Standard','Vehicle Record','Verification'],category:'Fleet & Dealership',
  notes:{'Install Standard':'Placement, hardware and connections agreed before rollout.','Vehicle Record':'VIN or unit ID, hardware, settings and dates stored per vehicle.',Verification:'Every unit checked before release.','Reusable Parts':'Mounts or interfaces designed once and reproduced where appropriate.'}
 },
 custom:{
  eyebrow:'Custom Integration Composer',title:'Build the architecture before building the hardware.',
  description:'Map the requirement, power, interface, physical fit and validation path before the project becomes wiring.',
  options:['Requirement','Power','Factory Interface','Fabrication','Validation'],initial:['Requirement','Power','Factory Interface'],category:'Custom Integration',
  notes:{Requirement:'Define what the vehicle needs to do.',Power:'Decide how the added system is powered and protected.','Factory Interface':'Preserve the factory functions that matter.',Fabrication:'Create the mount or interface that off-the-shelf parts cannot provide.',Validation:'Test the new system and the factory functions it touches.'}
 }
};

export default function SolutionComposer({type}){
 const cfg=configs[type];const[selected,setSelected]=useState(cfg?.initial||[]);const[count,setCount]=useState(5);
 const{addItem,setOpen}=useTTTBuild();
 if(!cfg)return null;
 const toggle=x=>setSelected(c=>c.includes(x)?c.filter(v=>v!==x):[...c,x]);
 const completeness=Math.round(selected.length/cfg.options.length*100);
 const aside=<>
  <div className="lab-readout"><small>{cfg.category}</small><strong>{type==='fleet'?count+' vehicles':selected.length+' layers'}</strong><p>{selected.join(' · ')||'Choose a starting layer.'}</p></div>
  <div className="lab-meters"><Meter label="Plan coverage" value={completeness}/><Meter label="Integration" value={Math.min(96,35+selected.length*14)}/><Meter label="Repeatability" value={type==='fleet'?Math.min(96,35+count*2.2):Math.min(90,42+selected.length*11)}/></div>
  <p className="lab-note">Conceptual planning tool. Final scope depends on the vehicle, hardware and actual requirement.</p>
  <button className="button" onClick={()=>{addItem({id:'solution-'+type,category:cfg.category,title:selected.join(' + ')||cfg.category,detail:type==='fleet'?count+'-vehicle concept':'Solution concept'});setOpen(true)}}>Add solution to My TTT Build →</button>
 </>;
 return <ExperienceShell eyebrow={cfg.eyebrow} title={cfg.title} description={cfg.description} aside={aside}>
  <div className={'solution-composer solution-composer--'+type}>
    <div className="solution-composer__core"><small>TTT</small><strong>{cfg.category}</strong><span>{type==='fleet'?count+' VEHICLES':'ONE PLAN'}</span></div>
    <div className="solution-composer__orbit">{cfg.options.map((x,i)=><button key={x} className={(selected.includes(x)?'is-active ':'')+'orbit-'+i} onClick={()=>toggle(x)}><i/><strong>{x}</strong><small>{cfg.notes[x]}</small></button>)}</div>
  </div>
  {type==='fleet'?<div className="lab-controls"><div className="lab-control"><small>Program size</small><div>{[1,5,10,25].map(n=><button className={count===n?'is-active':''} key={n} onClick={()=>setCount(n)}>{n} vehicle{n===1?'':'s'}</button>)}</div></div></div>:null}
  <div className="solution-composer__legend">{cfg.options.map(x=><button key={x} className={selected.includes(x)?'is-active':''} onClick={()=>toggle(x)}><span>{selected.includes(x)?'✓':'+'}</span><div><strong>{x}</strong><small>{cfg.notes[x]}</small></div></button>)}</div>
 </ExperienceShell>;
}
function Meter({label,value}){return <div className="lab-meter"><span>{label}</span><i><b style={{width:value+'%'}}/></i><strong>{value}%</strong></div>}
