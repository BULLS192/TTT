'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
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
  const visual=index<=1?'fabricationHero':index===5?'fabricationExamples':'fabricationProcess';

  const choose=k=>{setCaseKey(k);setIndex(0);setFitChecked(false)};
  const go=i=>{setIndex(i);if(i!==3)setFitChecked(false)};
  const aside=<>
    <div className="lab-readout fabrication3a__readout"><small>{c.label}</small><strong>{step[0]}</strong><p>{index===0?c.problem:step[1]}</p></div>
    <div className="fabrication3a__meta"><Readout label="Capture method" value={c.capture}/><Readout label="Current artifact" value={index<2?'Vehicle space':index<3?'CAD concept':index<5?'Prototype':'Final part'}/></div>
    <p className="lab-note">Conceptual workflow. Real material, tolerances, scan method and manufacturing process depend on the vehicle and application.</p>
    <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:c.label,detail:'Capture → design → fit → manufacture'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Fabrication Lab" title="Start with the fitment problem—not the printer." description="Real fabrication imagery now carries the experience; the interactive overlays show only the design data, scan, fit and revision logic that matters." aside={aside}>
    <div className={'fabrication3a fabrication3a--stage-'+index}>
      <AssetMedia visual={visual} className="fabrication3a__photo"/>
      <div className="fabrication3a__shade"/>
      {index===1?<div className="fabrication3a__scan-sweep"><i/><span>{c.capture.toUpperCase()}</span></div>:null}
      <div className="fabrication3a__cad-panel">
        <div className="fabrication3a__cad-head"><small>{String(index+1).padStart(2,'0')} / 06</small><strong>{c.label}</strong><span>{step[0]}</span></div>
        <div className="fabrication3a__part-view">
          <PartGlyph type={caseKey} state={fitChecked&&index===3?'collision':index>=4?'verified':'normal'}/>
          <div className="fabrication3a__datum"><span>DATUM A</span><span>KEEP-OUT</span><span>SERVICE ACCESS</span></div>
          {fitChecked&&index===3?<div className="fabrication3a__collision">INTERFERENCE FOUND</div>:null}
          {index>=4?<div className="fabrication3a__verified">CLEARANCE VERIFIED</div>:null}
        </div>
        <div className="fabrication3a__constraints">{c.constraints.map(x=><span key={x}>{x}</span>)}</div>
      </div>
      <div className="fabrication3a__story"><strong>{step[0]}</strong><span>{index===0?c.problem:index===1?'Turn the real vehicle into usable design input.':index===2?'Create only enough geometry to solve the installation problem.':index===3?(fitChecked?'The first article exposed a collision. The design now has a reason to change.':'Run the prototype fit check in the actual packaging envelope.'):index===4?'Revise the geometry around the interference and verify access.':'The finished component solves the fitment problem and becomes part of the installation.'}</span></div>
    </div>

    {index===3?<div className="fabrication3a__fit-action"><button className="button" disabled={fitChecked} onClick={()=>setFitChecked(true)}>{fitChecked?'Fit check complete':'Run fit check →'}</button><span>{fitChecked?'Prototype interference found. Continue to Refine to correct it.':'The first prototype should be allowed to reveal what the CAD model missed.'}</span></div>:null}

    <div className="fabrication3a__steps">{steps.map((s,i)=><button type="button" key={s[0]} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>go(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong><span>{s[1]}</span></button>)}</div>
    <div className="lab-controls fabrication3a__controls"><Control label="Project example">{Object.keys(cases).map(k=><button key={k} className={caseKey===k?'is-active':''} aria-pressed={caseKey===k} onClick={()=>choose(k)}>{cases[k].label}</button>)}</Control></div>
    <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>go(index-1)}>← Back</button><button className="button" disabled={index===steps.length-1} onClick={()=>go(index+1)}>Next stage →</button></div>
  </ExperienceShell>;
}

function PartGlyph({type,state}){
  const path=type==='dash'?'M20 58 C28 30 72 26 82 52 L74 72 C61 66 42 68 25 75 Z':type==='subwoofer'?'M18 30 H82 V78 H18 Z M36 54 A14 14 0 1 0 64 54 A14 14 0 1 0 36 54':'M16 35 H84 V70 H16 Z M25 45 H75 V60 H25 Z';
  return <svg className={'fabrication3a__glyph is-'+state} viewBox="0 0 100 100" aria-hidden="true"><path d={path}/><circle cx="20" cy="80" r="3"/><circle cx="80" cy="80" r="3"/><path className="fabrication3a__glyph-guide" d="M8 18 H92 M50 8 V92"/></svg>
}
function Readout({label,value}){return <div><small>{label}</small><strong>{value}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
