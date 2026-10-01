'use client';

import { useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const steps=[
 ['DEFINE','The equipment is right. The mounting solution does not exist yet.'],
 ['DESIGN','Build the bracket around the vehicle, equipment and service access.'],
 ['PROTOTYPE','Create a first version to test dimensions and interfaces.'],
 ['FIT','Place it in the actual space and expose what needs revision.'],
 ['REFINE','Adjust geometry, clearances and mounting points.'],
 ['PRODUCE','Make the final part and install it as part of the system.']
];

export default function FabricationLab(){
 const[index,setIndex]=useState(0);
 const{addItem,setOpen}=useTTTBuild();
 const aside=<><div className="lab-readout"><small>Development stage</small><strong>{steps[index][0]}</strong><p>{steps[index][1]}</p></div><p className="lab-note">This visual is a conceptual fabrication sequence. Material and manufacturing method depend on the actual application.</p><button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:'Custom mount / interface',detail:'Define → design → prototype → fit → refine → produce'});setOpen(true)}}>Add to My TTT Build →</button></>;
 return <ExperienceShell eyebrow="TTT Fabrication Lab" title="Make the part that does not exist." description="Move a mounting problem from rough requirement to fitted component." aside={aside}>
  <div className={'fab-stage stage-'+index}>
    <div className="fab-vehicle"><span>VEHICLE SPACE</span><div className="fab-equipment">EQUIPMENT</div><div className="fab-bracket"><i/><i/><i/></div></div>
    <div className="fab-blueprint"><span>DATUM A</span><span>CLEARANCE</span><span>REV B</span></div>
    <div className="fab-status">{steps[index][0]}</div>
  </div>
  <div className="fab-steps">{steps.map((s,i)=><button onClick={()=>setIndex(i)} className={i===index?'is-active':i<index?'is-complete':''} key={s[0]}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong></button>)}</div>
  <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Back</button><button className="button" disabled={index===steps.length-1} onClick={()=>setIndex(i=>Math.min(steps.length-1,i+1))}>Next stage →</button></div>
 </ExperienceShell>;
}
