'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const defs={
 'Factory security':{n:'01',moment:'Baseline',copy:'Factory locks, access logic and original security behavior remain the foundation.'},
 'Immobilization':{n:'02',moment:'Interrupt',copy:'Adds an independent barrier to unauthorized starting or driving.'},
 'Tracking':{n:'03',moment:'Locate',copy:'Adds location and trip history after a vehicle moves.'},
 'Alerts':{n:'04',moment:'Notify',copy:'Adds supported movement, ignition or power notifications.'}
};

export default function SecurityLab(){
 const[layers,setLayers]=useState(['Factory security']);
 const[focus,setFocus]=useState('Factory security');
 const{addItem,setOpen}=useTTTBuild();
 const toggle=layer=>{setFocus(layer);if(layer==='Factory security')return;setLayers(c=>c.includes(layer)?c.filter(x=>x!==layer):[...c,layer])};
 const aside=<>
  <div className="lab-readout security2b__readout"><small>Security architecture</small><strong>{layers.length} active layer{layers.length===1?'':'s'}</strong><p>{defs[focus].copy}</p></div>
  <div className="security2b__coverage">{Object.entries(defs).map(([name,d])=><div key={name} className={layers.includes(name)?'is-on':''}><span>{d.n}</span><strong>{d.moment}</strong><small>{name}</small></div>)}</div>
  <p className="lab-note">No combination makes a vehicle theft-proof. The goal is useful layers that preserve reliable vehicle operation and serviceability.</p>
  <button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:layers.filter(x=>x!=='Factory security').join(' + ')||'Security consultation',detail:'Layered security concept'});setOpen(true)}}>Add to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT Security Layers" title="Layer control without turning the car into a science project." description="Build the stack around four moments: baseline protection, interruption, notification and location." aside={aside}>
  <div className="security2b">
   <AssetMedia visual="securityHero" className="security2b__image"/>
   <div className="security2b__shade"/>
   <div className="security2b__vehicle"><span>CONCEPT ONE</span><strong>{defs[focus].moment}</strong></div>
   {Object.keys(defs).map((layer,i)=><button type="button" key={layer} className={'security2b__ring security2b__ring--'+i+' '+(layers.includes(layer)?'is-on ':'')+(focus===layer?'is-focus':'')} onClick={()=>toggle(layer)} aria-pressed={layers.includes(layer)} aria-label={layer}><span>{defs[layer].n}</span></button>)}
   <div className="security2b__legend"><span>FACTORY BASELINE</span><i/> <span>ADDED TTT LAYERS</span></div>
  </div>
  <div className="security2b__controls">{Object.keys(defs).map(layer=><button type="button" key={layer} className={(layers.includes(layer)?'is-active ':'')+(layer==='Factory security'?'is-base':'')} aria-pressed={layers.includes(layer)} onClick={()=>toggle(layer)}><small>{defs[layer].n} · {defs[layer].moment}</small><strong>{layer}</strong><span>{defs[layer].copy}</span></button>)}</div>
 </ExperienceShell>;
}