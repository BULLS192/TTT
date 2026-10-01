'use client';

import { useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const defs={
 'Factory security':'Baseline factory protection and access control.',
 'Immobilization':'Adds an independent barrier to unauthorized starting or driving.',
 'Tracking':'Adds location and history after a vehicle moves.',
 'Alerts':'Adds supported movement, ignition or power notifications.'
};

export default function SecurityLab(){
 const[layers,setLayers]=useState(['Factory security']);
 const{addItem,setOpen}=useTTTBuild();
 const toggle=layer=>{if(layer==='Factory security')return;setLayers(c=>c.includes(layer)?c.filter(x=>x!==layer):[...c,layer])};
 const aside=<><div className="lab-readout"><small>Active layers</small><strong>{layers.length}</strong><p>{layers.map(x=>x.replace('Factory security','Factory')).join(' · ')}</p></div><div className="security-coverage">{[['Deter',layers.length>0],['Immobilize',layers.includes('Immobilization')],['Alert',layers.includes('Alerts')],['Locate',layers.includes('Tracking')]].map(([x,on])=><span className={on?'is-on':''} key={x}>{x}</span>)}</div><p className="lab-note">No combination makes a vehicle theft-proof. The goal is to add useful layers without creating new electrical problems.</p><button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:layers.filter(x=>x!=='Factory security').join(' + ')||'Security consultation',detail:'Layered security concept'});setOpen(true)}}>Add to My TTT Build →</button></>;
 return <ExperienceShell eyebrow="TTT Security Layers" title="Harder to take. Easier to find." description="Build a conceptual security stack and see which moment each layer covers." aside={aside}>
   <div className="security-scene">
    <div className="security-car">CONCEPT ONE</div>
    {Object.keys(defs).map((layer,i)=><div key={layer} className={'security-ring ring-'+i+' '+(layers.includes(layer)?'is-on ':'')+(layer==='Factory security'?'is-base':'')}><span>{layer}</span></div>)}
   </div>
   <div className="security-controls">{Object.keys(defs).map(layer=><button key={layer} aria-pressed={layers.includes(layer)} className={(layers.includes(layer)?'is-active ':'')+(layer==='Factory security'?'is-base':'')} onClick={()=>toggle(layer)}><strong>{layer}</strong><span>{defs[layer]}</span></button>)}</div>
 </ExperienceShell>;
}
