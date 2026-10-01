'use client';

import { useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const stages=[
 ['SCAN','Read the history, stored codes and live data.','Three systems deserve a closer look.'],
 ['ISOLATE','Separate the systems involved from those that are not.','The drain remains on the body-electronics branch.'],
 ['TRACE','Follow power, grounds and module behavior.','One module stays awake after the vehicle should sleep.'],
 ['VERIFY','Reproduce the condition and measure it again.','Current remains high only while that module is active.'],
 ['RESOLVE','Correct the confirmed cause, then retest.','The vehicle now enters sleep state normally.']
];

export default function SignalTraceLab(){
 const[index,setIndex]=useState(0);
 const{addItem,setOpen}=useTTTBuild();
 const current=stages[index];
 const aside=<><div className="lab-readout"><small>Case 001 · battery drain</small><strong>{current[0]}</strong><p>{current[1]}</p></div><div className="signal-finding"><small>Evidence</small><p>{current[2]}</p></div><p className="lab-note">This is a conceptual diagnostic story, not a diagnostic instruction set for a specific vehicle.</p><button className="button" onClick={()=>{addItem({id:'signaltrace',category:'TTT SignalTrace™',title:'Electrical diagnostic intake',detail:'Battery drain / intermittent electrical fault'});setOpen(true)}}>Add SignalTrace to My Build →</button></>;
 return <ExperienceShell eyebrow="TTT SignalTrace™" title="Codes point. Evidence narrows. Testing confirms." description="Work through a simplified battery-drain case using the same five-stage logic as SignalTrace." aside={aside}>
  <div className="signal-case">
    <div className="signal-case__vehicle"><span>CONCEPT ONE</span><b>12.4V</b><small>{index<4?'ABNORMAL DRAW':'SLEEP STATE VERIFIED'}</small></div>
    <div className="signal-network">
      <Node label="Battery" active/><Wire active/>
      <Node label="Fuse" active/><Wire active={index>=1}/>
      <Node label="Body module" active={index>=1} fault={index>=2&&index<4}/><Wire active={index>=2}/>
      <Node label="Accessory branch" active={index>=2} fault={index===2||index===3}/><Wire active={index>=3}/>
      <Node label={index===4?'Resolved':'Ground / sleep'} active={index>=3} verified={index===4}/>
    </div>
  </div>
  <div className="signal-steps">{stages.map((s,i)=><button key={s[0]} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setIndex(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s[0]}</strong></button>)}</div>
  <div className="signal-next"><button className="button button--ghost" disabled={index===0} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Back</button><button className="button" disabled={index===stages.length-1} onClick={()=>setIndex(i=>Math.min(stages.length-1,i+1))}>Next stage →</button></div>
 </ExperienceShell>;
}
function Node({label,active,fault,verified}){return <div className={'signal-node '+(active?'is-active ':'')+(fault?'is-fault ':'')+(verified?'is-verified':'')}><span/>{label}</div>}
function Wire({active}){return <i className={'signal-wire '+(active?'is-active':'')}/>}
