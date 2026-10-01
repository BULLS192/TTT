'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';
import { trackWebsiteEvent } from '../../lib/visitor';

const configs={
 premium:{
  eyebrow:'Premium Vehicle Composer',title:'One vehicle experience, assembled as one plan.',
  description:'Combine comfort, sound and technology layers and see why sequencing matters.',
  options:['Window Tint','Automotive Audio','Sound Treatment','GPS Tracking'],
  initial:['Window Tint','Automotive Audio'],category:'Premium Vehicle Experience',visual:'solutionPremium',
  notes:{'Window Tint':'Heat, glare, UV and privacy.','Automotive Audio':'Sound quality while factory functions stay useful.','Sound Treatment':'Quieter panels and a stronger foundation for audio.','GPS Tracking':'Optional connected awareness for a vehicle worth protecting.'}
 },
 security:{
  eyebrow:'Vehicle Security Composer',title:'Build coverage across more than one moment.',
  description:'Combine prevention, awareness and recovery information without treating one device as the whole answer.',
  options:['Immobilization','GPS Tracking','Alerts','SignalTrace'],initial:['Immobilization','GPS Tracking'],category:'Vehicle Security',visual:'solutionSecurity',
  notes:{Immobilization:'Independent resistance to unauthorized use.','GPS Tracking':'Location and trip history after movement.',Alerts:'Supported ignition, movement or power notifications.',SignalTrace:'Diagnose faults or conflicts in existing security electronics.'}
 },
 connected:{
  eyebrow:'Connected Vehicle Composer',title:'Choose the information worth receiving.',
  description:'Build a simple connected-vehicle information path around the events that actually matter to you.',
  options:['Live Location','Geofence','Trip History','Movement Alerts'],initial:['Live Location','Geofence'],category:'Connected Vehicle',visual:'solutionConnected',
  notes:{'Live Location':'Current vehicle location when the platform supports it.',Geofence:'Virtual boundaries for arrival and departure awareness.','Trip History':'Where the vehicle went and when.','Movement Alerts':'Selected supported events delivered to the right user.'}
 },
 fleet:{
  eyebrow:'Fleet Program Composer',title:'Pilot once. Repeat with evidence.',
  description:'Scale one approved installation standard into a repeatable vehicle program.',
  options:['Install Standard','Vehicle Record','Verification','Reusable Parts'],initial:['Install Standard','Vehicle Record','Verification'],category:'Fleet & Dealership',visual:'solutionFleet',
  notes:{'Install Standard':'Placement, hardware and connections agreed before rollout.','Vehicle Record':'VIN or unit ID, hardware, settings and dates stored per vehicle.',Verification:'Every unit checked before release.','Reusable Parts':'Mounts or interfaces designed once and reproduced where appropriate.'}
 },
 custom:{
  eyebrow:'Custom Integration Composer',title:'Build the architecture before building the hardware.',
  description:'Map the requirement, power, interface, physical fit and validation path before the project becomes wiring.',
  options:['Requirement','Power','Factory Interface','Fabrication','Validation'],initial:['Requirement','Power','Factory Interface'],category:'Custom Integration',visual:'solutionCustom',
  notes:{Requirement:'Define what the vehicle needs to do.',Power:'Decide how the added system is powered and protected.','Factory Interface':'Preserve the factory functions that matter.',Fabrication:'Create the mount or interface that off-the-shelf parts cannot provide.',Validation:'Test the new system and the factory functions it touches.'}
 }
};

export default function SolutionComposer({type}){
 const cfg=configs[type];
 const[selected,setSelected]=useState(cfg?.initial||[]);
 const[focus,setFocus]=useState(cfg?.initial?.[0]||cfg?.options?.[0]||'');
 const[count,setCount]=useState(5);
 const{addItem,setOpen}=useTTTBuild();
 if(!cfg)return null;

 const toggle=x=>{
  setFocus(x);
  setSelected(current=>{
   const on=current.includes(x);
   trackWebsiteEvent('wave2_solution',on?'remove_layer':'add_layer',{type,layer:x});
   return on?current.filter(v=>v!==x):[...current,x];
  });
 };
 const add=()=>{
  addItem({id:'solution-'+type,category:cfg.category,title:selected.join(' + ')||cfg.category,detail:type==='fleet'?count+'-vehicle concept':'Solution concept'});
  trackWebsiteEvent('wave2_solution','add_to_build',{type,layers:selected.length,count:type==='fleet'?count:undefined});
  setOpen(true);
 };
 const aside=<>
  <div className="lab-readout solution2b__readout"><small>{cfg.category}</small><strong>{type==='fleet'?count+' vehicles':selected.length+' selected'}</strong><p>{selected.join(' · ')||'Choose a starting layer.'}</p></div>
  <div className="solution2b__focus"><small>Focused layer</small><strong>{focus}</strong><p>{cfg.notes[focus]}</p></div>
  <div className="signal-finding"><small>Integration guidance</small><p>{selected.length>1?'Plan the selected layers together before installation order, interfaces and access are fixed.':'Add another layer to expose the interactions between systems.'}</p></div>
  <p className="lab-note">Planning concept only. Final scope depends on the vehicle, hardware, fitment and actual requirement.</p>
  <button className="button" onClick={add}>Add solution to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow={cfg.eyebrow} title={cfg.title} description={cfg.description} aside={aside}>
  <div className={'solution2b solution2b--'+type}>
   <AssetMedia visual={cfg.visual} className="solution2b__image"/>
   <div className="solution2b__shade"/>
   <div className="solution2b__architecture">
    <div className="solution2b__core"><small>TTT SYSTEM PLAN</small><strong>{cfg.category}</strong><span>{type==='fleet'?count+' VEHICLES':'ONE VEHICLE / ONE PLAN'}</span></div>
    <div className="solution2b__bus" aria-hidden="true"/>
    <div className="solution2b__layers">{cfg.options.map((x,i)=><button type="button" key={x} className={(selected.includes(x)?'is-active ':'')+(focus===x?'is-focus':'')} aria-pressed={selected.includes(x)} onClick={()=>toggle(x)}>
     <span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><i/>
    </button>)}</div>
   </div>
   <div className="solution2b__caption"><small>ARCHITECTURE VIEW</small><strong>{focus}</strong></div>
  </div>
  {type==='fleet'?<div className="lab-controls"><div className="lab-control"><small>Program size</small><div>{[1,5,10,25].map(n=><button aria-pressed={count===n} className={count===n?'is-active':''} key={n} onClick={()=>{setCount(n);trackWebsiteEvent('wave2_solution','fleet_size',{count:n})}}>{n} vehicle{n===1?'':'s'}</button>)}</div></div></div>:null}
 </ExperienceShell>;
}