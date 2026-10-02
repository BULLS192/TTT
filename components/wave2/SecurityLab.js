'use client';

import { useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const systems={
  'Factory Only':{tracking:false,immobilize:false,copy:'OEM protections remain the baseline. This TTT demonstration adds no location or remote immobilization functions.'},
  'Tracking Added':{tracking:true,immobilize:false,copy:'Adds awareness: movement, location and supported alerts. The vehicle can still continue moving in this comparison.'},
  'Tracking + Immobilization':{tracking:true,immobilize:true,copy:'Adds an authorized immobilization request path. This concept never depicts an unsafe instant shutdown while the vehicle is moving.'}
};
const stages=[
  {label:'Parked',speed:0,ignition:'OFF',x:18,y:72,event:'Vehicle parked inside Home geofence.'},
  {label:'Unexpected start',speed:0,ignition:'ON',x:18,y:72,event:'Unexpected vehicle activity begins.'},
  {label:'Moving away',speed:36,ignition:'ON',x:50,y:53,event:'Vehicle has left Home and is moving.'},
  {label:'Stopped',speed:0,ignition:'OFF',x:76,y:38,event:'Vehicle has stopped.'},
  {label:'Restart attempt',speed:0,ignition:'OFF',x:76,y:38,event:'A restart is attempted after the stop.'}
];

export default function SecurityLab(){
  const[system,setSystem]=useState('Tracking + Immobilization');
  const[index,setIndex]=useState(0);
  const[requested,setRequested]=useState(false);
  const{addItem,setOpen}=useTTTBuild();
  const cfg=systems[system],stage=stages[index];

  const status=useMemo(()=>{
    if(!cfg.tracking&&index>0)return 'No TTT location data in this comparison.';
    if(cfg.immobilize&&requested&&index<3)return 'Immobilization requested · waiting for the simulated safe stopped condition.';
    if(cfg.immobilize&&requested&&index===3)return 'Immobilization active after vehicle stop.';
    if(cfg.immobilize&&requested&&index===4)return 'Restart prevented in this conceptual flow.';
    if(index===0)return 'Vehicle secure at Home.';
    if(index===1)return cfg.tracking?'Alert · unexpected activity detected.':'Factory-only state · no TTT alert shown.';
    if(index===2)return cfg.tracking?'Location visible · vehicle moving away.':'No TTT tracking location available.';
    return cfg.tracking?'Vehicle location retained.':'Factory-only state.';
  },[cfg,index,requested]);

  const setStage=i=>setIndex(Math.max(0,Math.min(stages.length-1,i)));
  const aside=<>
    <div className="lab-readout security2e__readout"><small>Unauthorized-use scenario</small><strong>{system}</strong><p>{cfg.copy}</p></div>
    <div className="security2e__capabilities">
      <Capability label="Movement awareness" on={cfg.tracking}/>
      <Capability label="Vehicle location" on={cfg.tracking}/>
      <Capability label="Immobilization request" on={cfg.immobilize}/>
    </div>
    <p className="lab-note">Concept only pending Derek/Amjad confirmation of the exact TTT hardware and safeguards. We do not assume a moving vehicle can or should be shut down instantly.</p>
    <button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:system,detail:'Unauthorized-use response concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Vehicle Security" title="What happens when the vehicle moves without you?" description="Compare factory-only protection, tracking awareness and a conceptual immobilization response in the same unauthorized-use scenario." aside={aside}>
    <div className="security2e">
      <div className="security2e__map">
        <div className="security2e__road"/>
        <div className="security2e__home"><span>HOME</span></div>
        {cfg.tracking?<div className="security2e__car" style={{left:stage.x+'%',top:stage.y+'%'}}><i/><span>{stage.speed?stage.speed+' mph':'STOPPED'}</span></div>:<div className="security2e__unknown"><strong>LOCATION NOT AVAILABLE</strong><span>Tracking is not installed in this comparison.</span></div>}
      </div>
      <div className="security2e__phone">
        <small>VEHICLE SECURITY</small>
        <strong>{stage.label}</strong>
        <p>{status}</p>
        <div className="security2e__facts"><span>Ignition <b>{stage.ignition}</b></span><span>Speed <b>{cfg.tracking?stage.speed+' mph':'—'}</b></span><span>Location <b>{cfg.tracking?(index<2?'Home':'Visible'):'—'}</b></span></div>
        <button type="button" className="security2e__kill" disabled={!cfg.immobilize||requested||index<2} onClick={()=>setRequested(true)}>{requested?'IMMOBILIZATION REQUESTED':'REQUEST IMMOBILIZATION'}</button>
        {cfg.immobilize&&index===2&&!requested?<small className="security2e__hint">Requesting now will arm the conceptual response; it will not depict an instant moving shutdown.</small>:null}
      </div>
    </div>

    <div className="security2e__steps">{stages.map((s,i)=><button type="button" key={s.label} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setStage(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s.label}</strong><span>{s.event}</span></button>)}</div>

    <div className="lab-controls security2e__controls">
      <Control label="Compare system">{Object.keys(systems).map(v=><button key={v} className={system===v?'is-active':''} aria-pressed={system===v} onClick={()=>{setSystem(v);setIndex(0);setRequested(false)}}>{v}</button>)}</Control>
    </div>
    <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>setStage(index-1)}>← Back</button><button className="button" disabled={index===stages.length-1} onClick={()=>setStage(index+1)}>Next event →</button></div>
  </ExperienceShell>;
}
function Capability({label,on}){return <div className={on?'is-on':''}><i/><span>{label}</span><strong>{on?'AVAILABLE':'NOT ADDED'}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
