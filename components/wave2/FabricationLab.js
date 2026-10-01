'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const steps=[
 ['DEFINE','The equipment is right. The mounting solution does not exist yet.','SPACE + REQUIREMENT'],
 ['DESIGN','Build the bracket around the vehicle, equipment and service access.','CAD INTENT'],
 ['PROTOTYPE','Create a first version to test dimensions and interfaces.','FIRST ARTICLE'],
 ['FIT','Place it in the actual space and expose what needs revision.','VEHICLE CHECK'],
 ['REFINE','Adjust geometry, clearances and mounting points.','REVISION'],
 ['PRODUCE','Make the final part and install it as part of the system.','FINAL PART']
];

export default function FabricationLab(){
 const[index,setIndex]=useState(0);
 const{addItem,setOpen}=useTTTBuild();
 const aside=<>
  <div className="lab-readout fabrication2b__readout"><small>Development stage</small><strong>{steps[index][0]}</strong><p>{steps[index][1]}</p></div>
  <div className="fabrication2b__status"><small>Current artifact</small><strong>{steps[index][2]}</strong></div>
  <p className="lab-note">Conceptual fabrication sequence. Material, tolerances and manufacturing process depend on the actual vehicle and application.</p>
  <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:'Custom mount / interface',detail:'Define → design → prototype → fit → refine → produce'});setOpen(true)}}>Add to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT Fabrication Lab" title="Go from impossible fit to intentional part." description="Move a mounting problem through definition, CAD intent, prototype, vehicle fit, revision and final production." aside={aside}>
  <div className={'fabrication2b fabrication2b--'+index}>
   <AssetMedia visual="fabricationHero" className="fabrication2b__image"/>
   <div className="fabrication2b__shade"/>
   <div className="fabrication2b__cad">
    <div className="fabrication2b__part"><i/><i/><i/><span/></div>
    <em>DATUM A</em><em>CLEARANCE</em><em>REV {index<2?'A':index<5?'B':'C'}</em>
   </div>
   <div className="fabrication2b__artifact"><small>{String(index+1).padStart(2,'0')} / 06</small><strong>{steps[index][2]}</strong><span>{steps[index][0]}</span></div>
  </div>
  <div className="fabrication2b__steps">{steps.map((s,i)=><button type="button" onClick={()=>setIndex(i)} className={i===index?'is-active':i<index?'is-complete':''} key={s[0]}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong><span>{s[2]}</span></button>)}</div>
  <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Back</button><button className="button" disabled={index===steps.length-1} onClick={()=>setIndex(i=>Math.min(steps.length-1,i+1))}>Next stage →</button></div>
 </ExperienceShell>;
}