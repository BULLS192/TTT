'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const stages=[
 ['SCAN','Read the history, stored codes and live data.','Three systems deserve a closer look.','SYSTEM SURVEY'],
 ['ISOLATE','Separate the systems involved from those that are not.','The drain remains on the body-electronics branch.','BRANCH ISOLATED'],
 ['TRACE','Follow power, grounds and module behavior.','One module stays awake after the vehicle should sleep.','WAKE CONDITION'],
 ['VERIFY','Reproduce the condition and measure it again.','The abnormal condition remains only while that module is active.','EVIDENCE REPEATED'],
 ['RESOLVE','Correct the confirmed cause, then retest.','The vehicle now enters sleep state normally.','NORMAL STATE VERIFIED']
];

const nodes=[['Battery',20,67],['Distribution',38,54],['Body module',58,43],['Accessory branch',73,55],['Sleep state',84,35]];

export default function SignalTraceLab(){
 const[index,setIndex]=useState(0);
 const{addItem,setOpen}=useTTTBuild();
 const current=stages[index];
 const aside=<>
  <div className="lab-readout signal2b__readout"><small>Case 001 · battery drain</small><strong>{current[0]}</strong><p>{current[1]}</p></div>
  <div className="signal-finding"><small>Evidence</small><p>{current[2]}</p></div>
  <p className="lab-note">Conceptual diagnostic story only. It demonstrates the reasoning sequence, not a repair procedure for a specific vehicle.</p>
  <button className="button" onClick={()=>{addItem({id:'signaltrace',category:'TTT SignalTrace™',title:'Electrical diagnostic intake',detail:'Battery drain / intermittent electrical fault'});setOpen(true)}}>Add SignalTrace to My Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT SignalTrace™" title="Turn a symptom into evidence." description="Watch the case narrow from a broad electrical complaint to a repeatable condition and verified resolution." aside={aside}>
  <div className={'signal2b signal2b--stage-'+index}>
   <AssetMedia visual="signalNetwork" className="signal2b__image"/>
   <div className="signal2b__shade"/>
   <div className="signal2b__scanline"/>
   <div className="signal2b__case"><small>CASE 001 / BATTERY DRAIN</small><strong>{current[3]}</strong><span>{index<4?'CONDITION ACTIVE':'VERIFIED NORMAL'}</span></div>
   <svg className="signal2b__trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M20 67 L38 54 L58 43 L73 55 L84 35"/></svg>
   {nodes.map(([label,x,y],i)=><div key={label} className={'signal2b__node '+(i<=index?'is-active ':'')+(i===index?'is-focus ':'')+(index===4&&i===4?'is-verified':'')} style={{left:x+'%',top:y+'%'}}><i/><span>{label}</span></div>)}
  </div>
  <div className="signal2b__steps">{stages.map((s,i)=><button type="button" key={s[0]} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setIndex(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong><span>{s[3]}</span></button>)}</div>
  <div className="signal-next"><button className="button button--ghost" disabled={index===0} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Back</button><button className="button" disabled={index===stages.length-1} onClick={()=>setIndex(i=>Math.min(stages.length-1,i+1))}>Next stage →</button></div>
 </ExperienceShell>;
}