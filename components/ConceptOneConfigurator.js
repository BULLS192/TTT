'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import AssetMedia from './AssetMedia';
import VehicleSelector from './VehicleSelector';
import { useTTTBuild, vehicleSummary } from './wave2/TTTBuildContext';
import { trackWebsiteEvent } from '../lib/visitor';

const goals=['Heat & glare','Sound quality','Security','Connected awareness','Factory-like integration','Electrical reliability','Custom fitment'];
const steps=[
 {id:'exterior',n:'01',label:'Exterior',kicker:'Reference vehicle',visual:'homeHeroTechnical',category:'Concept One',title:'Exterior planning',copy:'Start with the vehicle as a whole. Every added system should respect how it looks, functions and is serviced.',options:['OEM+ appearance','Minimal visible hardware','Future-ready planning']},
 {id:'glass',n:'02',label:'Glass',kicker:'Thermal + optical',visual:'tintHero',category:'Window Tint',title:'Glass package',copy:'Choose the film family and shade as separate decisions. Performance comes from the product; appearance comes from the shade and vehicle.',options:['70% Ceramic','50% Ceramic','35% Ceramic','20% Ceramic','5% Ceramic']},
 {id:'cabin',n:'03',label:'Cabin',kicker:'Driver experience',visual:'technologyHero',category:'OEM Integration',title:'Cabin integration',copy:'Preserve familiar controls and keep new technology visually disciplined inside the cabin.',options:['Factory controls retained','Hidden hardware','Serviceable access']},
 {id:'audio',n:'04',label:'Audio',kicker:'Acoustic system',visual:'audioHero',category:'Automotive Audio',title:'Audio system',copy:'Build the signal path as one system—from source and interface through processing, amplification and speakers.',options:['Speaker upgrade','Amplified system','DSP tuned system']},
 {id:'electronics',n:'05',label:'Electronics',kicker:'Factory interface',visual:'technologyDetail',category:'OEM Integration',title:'Electronics integration',copy:'Map factory functions, data, power and control before adding modules. Integration comes before installation.',options:['Factory-first integration','Interface mapping','Module coexistence']},
 {id:'security',n:'06',label:'Security',kicker:'Layered control',visual:'securityHero',category:'Vehicle Security',title:'Security layers',copy:'Treat factory security as the baseline, then add independent layers for interruption, awareness and recovery information.',options:['Immobilization','Alerts','Immobilization + Alerts']},
 {id:'tracking',n:'07',label:'Tracking',kicker:'Connected awareness',visual:'gpsHero',category:'GPS Tracking',title:'Tracking package',copy:'Choose the information you actually need: location, geofence events, movement awareness or trip history.',options:['Live location','Geofence + alerts','Location + geofence + history']},
 {id:'wiring',n:'08',label:'Wiring',kicker:'Hidden architecture',visual:'signalNetwork',category:'Electrical Integration',title:'Wiring standard',copy:'Power protection, grounds, routing, interfaces and documentation determine whether added technology remains reliable and serviceable.',options:['Protected + documented','Service loops + labels','Full integration record']},
 {id:'fabrication',n:'09',label:'Fabrication',kicker:'Physical integration',visual:'fabricationHero',category:'Custom Fabrication',title:'Custom fitment',copy:'Use custom parts only where they solve a real fitment or integration problem, then prototype and verify before final production.',options:['Mount / bracket','Adapter / interface','Enclosure / trim integration']},
 {id:'summary',n:'10',label:'Summary',kicker:'Project handoff',visual:'homeHeroNight',category:'',title:'',copy:'Review the vehicle, goals and selected systems as one project before you hand the context to Tessa or request a quote.',options:[]}
];

const defaults={
 exterior:'OEM+ appearance',glass:'35% Ceramic',cabin:'Factory controls retained',audio:'DSP tuned system',
 electronics:'Factory-first integration',security:'Immobilization + Alerts',tracking:'Geofence + alerts',
 wiring:'Protected + documented',fabrication:'Mount / bracket'
};

export default function ConceptOneConfigurator(){
 const{items,addItem,removeItem,profile,updateProfile,toggleGoal,setOpen}=useTTTBuild();
 const[activeId,setActiveId]=useState('exterior');
 const[selections,setSelections]=useState(defaults);
 const active=useMemo(()=>steps.find(x=>x.id===activeId)||steps[0],[activeId]);
 const selectedIds=useMemo(()=>new Set(items.filter(x=>String(x.id||'').startsWith('concept-one-')).map(x=>String(x.id).replace('concept-one-',''))),[items]);
 const included=selectedIds.has(activeId);
 const vehicle=vehicleSummary(profile);

 const choose=(id,value)=>{
  setSelections(current=>({...current,[id]:value}));
  const step=steps.find(x=>x.id===id);
  if(selectedIds.has(id)&&step&&id!=='summary'){
   addItem({id:'concept-one-'+id,category:step.category,title:step.title,detail:value,summary:step.label+': '+value});
  }
  trackWebsiteEvent('concept_one','change_setting',{layer:id,value});
 };

 const toggleLayer=(step)=>{
  if(step.id==='summary')return;
  if(selectedIds.has(step.id)){
   removeItem('concept-one-'+step.id);
   trackWebsiteEvent('concept_one','remove_layer',{layer:step.id});
  }else{
   addItem({id:'concept-one-'+step.id,category:step.category,title:step.title,detail:selections[step.id],summary:step.label+': '+selections[step.id]});
   trackWebsiteEvent('concept_one','include_layer',{layer:step.id});
  }
 };

 const go=(id)=>{
  setActiveId(id);
  trackWebsiteEvent('concept_one','view_layer',{layer:id});
 };

 const askTessa=()=>{
  const selected=steps.filter(s=>selectedIds.has(s.id)).map(s=>s.label+': '+selections[s.id]).join('; ');
  const prompt=['Please review my Concept One build.',vehicle?'Vehicle: '+vehicle+'.':'',profile.goals.length?'Goals: '+profile.goals.join(', ')+'.':'',selected?'Selected systems: '+selected+'.':''].filter(Boolean).join(' ');
  window.dispatchEvent(new CustomEvent('ttt:tessa-open',{detail:{prompt}}));
  trackWebsiteEvent('concept_one','handoff_tessa',{layers:selectedIds.size,goalCount:profile.goals.length});
 };

 return <div className="concept2c">
  <div className="concept2c__project">
   <div className="concept2c__project-head"><div><small>PROJECT CONTEXT</small><strong>{vehicle||'Choose the vehicle you are planning'}</strong></div><span>{selectedIds.size} SYSTEM{selectedIds.size===1?'':'S'} SELECTED</span></div>
   <VehicleSelector compact initialValue={profile} onChange={updateProfile}/>
   <div className="concept2c__goals"><small>What matters most?</small><div>{goals.map(goal=><button type="button" key={goal} className={profile.goals.includes(goal)?'is-active':''} aria-pressed={profile.goals.includes(goal)} onClick={()=>toggleGoal(goal)}>{goal}</button>)}</div></div>
  </div>

  <div className="concept2c__nav" role="tablist" aria-label="Concept One configurator layers">
   {steps.map(step=><button type="button" role="tab" aria-selected={activeId===step.id} key={step.id} className={(activeId===step.id?'is-active ':'')+(selectedIds.has(step.id)?'is-selected':'')} onClick={()=>go(step.id)}><small>{step.n}</small><strong>{step.label}</strong><i/></button>)}
  </div>

  <div className={'concept2c__workspace concept2c__workspace--'+active.id}>
   <div className="concept2c__visual">
    <AssetMedia visual={active.visual} className="concept2c__media"/>
    <div className="concept2c__shade"/>
    <div className="concept2c__grid" aria-hidden="true"/>
    {active.id!=='summary'?<div className="concept2c__system-map" aria-hidden="true"><span/><span/><span/><i/></div>:null}
    <div className="concept2c__visual-copy"><small>{active.n} / 10 · {active.kicker}</small><strong>{active.label}</strong><span>{active.id==='summary'?'PROJECT OVERVIEW':selectedIds.has(active.id)?'INCLUDED IN BUILD':'EXPLORING'}</span></div>
   </div>

   <aside className="concept2c__panel">
    {active.id==='summary'?<Summary steps={steps} selections={selections} selectedIds={selectedIds} profile={profile} vehicle={vehicle} askTessa={askTessa} setOpen={setOpen}/>:<>
     <div><p className="eyebrow">{active.kicker}</p><h2>{active.title}</h2><p>{active.copy}</p></div>
     <div className="concept2c__options" aria-label={active.label+' options'}>{active.options.map(value=><button type="button" key={value} aria-pressed={selections[active.id]===value} className={selections[active.id]===value?'is-active':''} onClick={()=>choose(active.id,value)}><i/><span><strong>{value}</strong><small>{optionNote(active.id,value)}</small></span></button>)}</div>
     <button type="button" className={'concept2c__include '+(included?'is-included':'')} onClick={()=>toggleLayer(active)}>{included?'✓ Included in My TTT Build':'＋ Include this layer in My TTT Build'}</button>
     <p className="concept2c__caveat">{caveat(active.id)}</p>
    </>}
   </aside>
  </div>

  <div className="concept2c__footer">
   <button type="button" disabled={active.n==='01'} onClick={()=>go(steps[Math.max(0,steps.findIndex(x=>x.id===activeId)-1)].id)}>← Previous layer</button>
   <div><span>{vehicle||'Reference vehicle'}</span><strong>{profile.goals.length?profile.goals.join(' · '):'Add your priorities above'}</strong></div>
   <button type="button" disabled={active.id==='summary'} onClick={()=>go(steps[Math.min(steps.length-1,steps.findIndex(x=>x.id===activeId)+1)].id)}>Next layer →</button>
  </div>
 </div>;
}

function Summary({steps,selections,selectedIds,profile,vehicle,askTessa,setOpen}){
 const selected=steps.filter(step=>selectedIds.has(step.id));
 return <div className="concept2c__summary">
  <p className="eyebrow">Project handoff</p><h2>{vehicle||'Your Concept One build'}</h2>
  <p>{profile.goals.length?'Priorities: '+profile.goals.join(', ')+'.':'Add priorities above if you want Tessa and the quote request to carry more context.'}</p>
  <div className="concept2c__summary-list">{selected.length?selected.map(step=><div key={step.id}><small>{step.label}</small><strong>{selections[step.id]}</strong></div>):<div><small>NO SYSTEMS YET</small><strong>Go back through the layers and include the systems you want to discuss.</strong></div>}</div>
  <div className="concept2c__summary-actions">
   <button type="button" className="button button--ghost" onClick={()=>setOpen(true)}>Open My TTT Build</button>
   <button type="button" className="button button--ghost" onClick={askTessa}>Ask Tessa about this build →</button>
   <Link className="button" href="/quote?from=concept-one">Request a Quote →</Link>
  </div>
  <p className="concept2c__caveat">This is a planning brief, not a compatibility confirmation or final scope. TTT still verifies the actual vehicle, hardware and installation requirements.</p>
 </div>;
}

function optionNote(id,value){
 const notes={
  glass:{'70% Ceramic':'Very light appearance with ceramic-film intent.','50% Ceramic':'Light tint concept balancing visibility and appearance.','35% Ceramic':'Moderate tint concept for a darker OEM+ character.','20% Ceramic':'Dark tint concept; legality and visibility must be checked.','5% Ceramic':'Very dark tint concept; legality and application must be checked.'},
  audio:{'Speaker upgrade':'Improve drivers while preserving a simple signal path.','Amplified system':'Add clean power and stronger control.','DSP tuned system':'Coordinate level, timing and frequency response from the listening position.'},
  security:{'Immobilization':'Add an independent interruption layer.','Alerts':'Add supported awareness events.','Immobilization + Alerts':'Combine prevention and awareness as separate layers.'},
  tracking:{'Live location':'Focus on current vehicle position.','Geofence + alerts':'Focus on boundary and movement awareness.','Location + geofence + history':'Combine current position, events and trip history.'}
 };
 return notes[id]?.[value]||'Planning preference; exact implementation depends on the vehicle and selected hardware.';
}

function caveat(id){
 const map={
  glass:'Film appearance is illustrative. Verify exact film specifications and applicable tint laws before installation.',
  security:'No security system makes a vehicle theft-proof. Layering changes resistance and awareness, not certainty.',
  tracking:'Tracking features depend on the selected platform, subscription, coverage and authorized use.',
  wiring:'The diagram represents planning principles, not a wiring instruction for a specific vehicle.'
 };
 return map[id]||'Reference concept only. Exact locations, interfaces and component choices depend on the vehicle.';
}
