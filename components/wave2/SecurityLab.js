'use client';

import { useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const systems={
  'Factory Only':{tracking:false,immobilize:false,copy:'OEM protections remain the baseline. This TTT demonstration adds no location or remote immobilization functions.'},
  'Tracking Added':{tracking:true,immobilize:false,copy:'Adds awareness: movement, location and supported alerts. The vehicle can still continue moving in this comparison.'},
  'Tracking + Immobilization':{tracking:true,immobilize:true,copy:'Adds an authorized immobilization request path. This concept never depicts an unsafe instant shutdown while the vehicle is moving.'}
};
const stages=[
  {label:'Parked',speed:0,ignition:'OFF',x:18,y:73,event:'Vehicle parked inside Home geofence.'},
  {label:'Unexpected start',speed:0,ignition:'ON',x:18,y:73,event:'Unexpected vehicle activity begins.'},
  {label:'Moving away',speed:36,ignition:'ON',x:49,y:54,event:'Vehicle has left Home and is moving.'},
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
    <div className="lab-readout security3a__readout"><small>Unauthorized-use scenario</small><strong>{system}</strong><p>{cfg.copy}</p></div>
    <div className="security3a__capabilities"><Capability label="Movement awareness" on={cfg.tracking}/><Capability label="Vehicle location" on={cfg.tracking}/><Capability label="Immobilization request" on={cfg.immobilize}/></div>
    <p className="lab-note">Concept only pending Derek/Amjad confirmation of the exact TTT hardware and safeguards. We do not assume a moving vehicle can or should be shut down instantly.</p>
    <button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:system,detail:'Unauthorized-use response concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Vehicle Security" title="What happens when the vehicle moves without you?" description="The scenario now plays against a real automotive security visual, with the tracking and immobilization controls presented as a premium response dashboard instead of a schematic." aside={aside}>
    <div className="security3a">
      <AssetMedia visual="securityHero" className="security3a__backdrop"/>
      <div className="security3a__shade"/>
      <div className="security3a__incident">
        <div className="security3a__incident-head"><small>INCIDENT SCENARIO</small><strong>{stage.label}</strong><span>{stage.event}</span></div>
        <div className="security3a__route-card">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <rect width="100" height="100" rx="5" fill="#0b131a"/>
            <g className="security3a__streets"><path d="M0 64 C22 60 34 55 48 52 S73 37 100 40"/><path d="M47 0 C51 25 49 46 53 60 S61 83 63 100"/><path d="M0 30h100M0 82h100M23 0v100M81 0v100"/></g>
            <circle cx="18" cy="73" r="16" className="security3a__home-ring"/>
            <path d="M18 73 C34 65 43 59 49 54 S64 43 76 38" className="security3a__route"/>
          </svg>
          <span className="security3a__home-label">HOME</span>
          {cfg.tracking?<div className="security3a__vehicle" style={{left:stage.x+'%',top:stage.y+'%'}}><i/><span>{stage.speed?stage.speed+' mph':'STOPPED'}</span></div>:<div className="security3a__no-location"><strong>LOCATION UNAVAILABLE</strong><span>No TTT tracking layer in this comparison.</span></div>}
        </div>
      </div>
      <div className="security3a__phone">
        <div className="security3a__phone-head"><span>VEHICLE SECURITY</span><i className={index>0?'is-alert':''}/></div>
        <div className={'security3a__status '+(index>0?'is-alert':'')}><small>{index>0?'UNAUTHORIZED ACTIVITY':'SYSTEM STATUS'}</small><strong>{status}</strong></div>
        <div className="security3a__facts"><span>Ignition <b>{stage.ignition}</b></span><span>Speed <b>{cfg.tracking?stage.speed+' mph':'—'}</b></span><span>Location <b>{cfg.tracking?(index<2?'Home':'Visible'):'—'}</b></span></div>
        <button type="button" className="security3a__kill" disabled={!cfg.immobilize||requested||index<2} onClick={()=>setRequested(true)}>{requested?'IMMOBILIZATION REQUESTED':'REQUEST IMMOBILIZATION'}</button>
        {cfg.immobilize&&requested?<div className="security3a__request-state"><i/><span>{index<3?'REQUEST ARMED · WAITING FOR STOP':index===3?'IMMOBILIZATION ACTIVE':'RESTART PREVENTED'}</span></div>:null}
      </div>
    </div>

    <div className="security3a__steps">{stages.map((s,i)=><button type="button" key={s.label} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setStage(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s.label}</strong><span>{s.event}</span></button>)}</div>
    <div className="lab-controls security3a__controls"><Control label="Compare system">{Object.keys(systems).map(v=><button key={v} className={system===v?'is-active':''} aria-pressed={system===v} onClick={()=>{setSystem(v);setIndex(0);setRequested(false)}}>{v}</button>)}</Control></div>
    <div className="signal-next"><button className="button button--ghost" disabled={!index} onClick={()=>setStage(index-1)}>← Back</button><button className="button" disabled={index===stages.length-1} onClick={()=>setStage(index+1)}>Next event →</button></div>
  </ExperienceShell>;
}
function Capability({label,on}){return <div className={on?'is-on':''}><i/><span>{label}</span><strong>{on?'AVAILABLE':'NOT ADDED'}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
