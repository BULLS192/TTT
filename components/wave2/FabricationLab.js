'use client';

import { useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const cases={
  amplifier:{label:'Amplifier mount',problem:'The amplifier fits electrically, but there is no secure, serviceable factory mounting location.',capture:'Measured geometry',component:'AMPLIFIER',constraints:['Trim clearance','Service access','Cable routing']},
  dash:{label:'Dash device mount',problem:'A controller or display needs an OEM-like position without blocking vents, controls or sightlines.',capture:'3D scan',component:'DISPLAY',constraints:['Vent clearance','Viewing angle','Factory controls']},
  subwoofer:{label:'Subwoofer solution',problem:'The customer wants useful low-frequency output without surrendering the entire cargo area.',capture:'3D scan + volume',component:'SUBWOOFER',constraints:['Cargo space','Panel geometry','Service access']}
};
const steps=[
  ['PROBLEM','Off-the-shelf fitment fails.'],
  ['CAPTURE','Measure or scan the vehicle geometry.'],
  ['DESIGN','Build the part around the vehicle and equipment.'],
  ['PROTOTYPE','Test the first article in the actual packaging space.'],
  ['REFINE','Correct interference and verify clearance.'],
  ['INSTALLED','Manufacture and install the finished solution.']
];

export default function FabricationLab(){
  const[caseKey,setCaseKey]=useState('amplifier');
  const[index,setIndex]=useState(0);
  const[fitChecked,setFitChecked]=useState(false);
  const{addItem,setOpen}=useTTTBuild();
  const c=cases[caseKey],step=steps[index];

  const choose=k=>{setCaseKey(k);setIndex(0);setFitChecked(false)};
  const go=i=>{setIndex(i);if(i!==3)setFitChecked(false)};
  const aside=<>
    <div className="lab-readout fabrication2e__readout"><small>{c.label}</small><strong>{step[0]}</strong><p>{index===0?c.problem:step[1]}</p></div>
    <div className="fabrication2e__meta"><Readout label="Capture method" value={c.capture}/><Readout label="Current artifact" value={index<2?'Vehicle space':index<3?'CAD concept':index<5?'Prototype':'Final part'}/></div>
    <p className="lab-note">Conceptual workflow. Real material, tolerances, scan method and manufacturing process depend on the vehicle and application.</p>
    <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:c.label,detail:'Capture → design → fit → manufacture'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Fabrication Lab" title="Start with the fitment problem—not the printer." description="Choose a real integration challenge, capture the vehicle space, design around the constraints, test the fit and refine the part before installation." aside={aside}>
    <div className={'fabrication2e fabrication2e--stage-'+index}>
      <div className="fabrication2e__workspace">
        <div className="fabrication2e__vehicle-space">
          <span className="fabrication2e__trim">VEHICLE SURFACE</span>
          <div className="fabrication2e__component"><small>CUSTOMER EQUIPMENT</small><strong>{c.component}</strong></div>
          <div className={'fabrication2e__part '+(fitChecked&&index===3?'is-collision':'')}><small>TTT PART</small><strong>{index<2?'—':index===3&&!fitChecked?'PROTOTYPE':index===3?'REV A':'REV B'}</strong></div>
          {index===1?<div className="fabrication2e__scan"><i/><i/><i/><i/><i/><i/><span>{c.capture.toUpperCase()}</span></div>:null}
          {index>=2?<div className="fabrication2e__dimensions"><span>DATUM</span><span>CLEARANCE</span><span>MOUNT</span></div>:null}
          {fitChecked&&index===3?<div className="fabrication2e__collision">INTERFERENCE FOUND</div>:null}
          {index>=4?<div className="fabrication2e__verified">CLEARANCE VERIFIED</div>:null}
        </div>
        <div className="fabrication2e__constraints"><small>PACKAGING CONSTRAINTS</small>{c.constraints.map(x=><span key={x}>{x}</span>)}</div>
      </div>
      <div className="fabrication2e__story"><strong>{step[0]}</strong><span>{index===0?c.problem:index===1?'Turn the real vehicle into usable design input.':index===2?'Create only enough geometry to solve the installation problem.':index===3?(fitChecked?'The first article exposed a collision. The design now has a reason to change.':'Run the prototype fit check in the actual packaging envelope.'):index===4?'Revise the geometry around the interference and verify access.':'The finished component solves the fitment problem and becomes part of the installation.'}</span></div>
    </div>

    {index===3?<div className="fabrication2e__fit-action"><button className="button" disabled={fitChecked} onClick={()=>setFitChecked(true)}>{fitChecked?'Fit check complete':'Run fit check →'}</button><span>{fitChecked?'Prototype interference found. Continue to Refine to correct it.':'The first prototype should be allowed to reveal what the CAD model missed.'}</span></div>:null}

    <div className="fabrication2e__steps">{steps.map((s,i)=><button type="button" key={s[0]} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>go(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong><span>{s[1]}</span></button>)}</div>
    <div className="lab-controls fabrication2e__controls"><Control label="Project example">{Object.keys(cases).map(k=><button key={k} className={caseKey===k?'is-active':''} aria-pressed={caseKey===k} onClick={()=>choose(k)}>{cases[k].label}</button>)}</Control></div>
    <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>go(index-1)}>← Back</button><button className="button" disabled={index===steps.length-1} onClick={()=>go(index+1)}>Next stage →</button></div>
  </ExperienceShell>;
}
function Readout({label,value}){return <div><small>{label}</small><strong>{value}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
