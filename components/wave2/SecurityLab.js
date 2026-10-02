'use client';

import { useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const stages=[
  {label:'Parked',time:'10:14 PM',speed:0,ignition:'OFF',x:16,y:76,event:'Vehicle is parked inside Home.'},
  {label:'Unauthorized Start',time:'10:16 PM',speed:0,ignition:'ON',x:16,y:76,event:'Unexpected ignition activity begins.'},
  {label:'Leaves Home',time:'10:20 PM',speed:24,ignition:'ON',x:34,y:64,event:'Vehicle crosses the Home geofence.'},
  {label:'Moving Away',time:'10:24 PM',speed:42,ignition:'ON',x:55,y:51,event:'Vehicle continues away from Home.'},
  {label:'Owner Responds',time:'10:25 PM',speed:42,ignition:'ON',x:61,y:47,event:'Owner reviews the alert and location.'},
  {label:'Vehicle Stops',time:'10:29 PM',speed:0,ignition:'OFF',x:76,y:37,event:'Vehicle reaches a stopped condition.'},
  {label:'Restart Attempt',time:'10:30 PM',speed:0,ignition:'OFF',x:76,y:37,event:'A restart is attempted after the stop.'}
];

export default function SecurityLab(){
  const[index,setIndex]=useState(0);
  const[requested,setRequested]=useState(false);
  const{addItem,setOpen}=useTTTBuild();
  const stage=stages[index];

  const tttStatus=useMemo(()=>{
    if(index===0)return {tone:'normal',title:'Vehicle secure at Home',copy:'TTT monitoring is standing by.'};
    if(index===1)return {tone:'alert',title:'Unexpected ignition detected',copy:'Owner receives an activity alert.'};
    if(index===2)return {tone:'alert',title:'Home geofence exited',copy:'Live location continues updating.'};
    if(index===3)return {tone:'alert',title:'Vehicle moving away',copy:'Owner can review the route and current speed.'};
    if(index===4&&!requested)return {tone:'action',title:'Response available',copy:'Request immobilization if the installed system and operating safeguards support it.'};
    if(index===4&&requested)return {tone:'pending',title:'Request armed',copy:'The demonstration waits for a safe stopped condition.'};
    if(index===5&&requested)return {tone:'success',title:'Immobilization active',copy:'Conceptual response activates only after the simulated stop.'};
    if(index===6&&requested)return {tone:'success',title:'Restart prevented',copy:'The conceptual flow blocks the next restart attempt.'};
    if(index>=5)return {tone:'normal',title:'Vehicle stopped',copy:'Location remains available in the tracking layer.'};
    return {tone:'normal',title:'Monitoring active',copy:'Vehicle status is available.'};
  },[index,requested]);

  const factoryStatus=useMemo(()=>{
    if(index===0)return {title:'OEM baseline active',copy:'Factory protections remain the baseline.'};
    if(index===1)return {title:'Vehicle has started',copy:'This comparison does not add TTT movement alerts or location awareness.'};
    if(index>=2&&index<5)return {title:'Vehicle continues moving',copy:'No TTT tracking or immobilization layer is shown in the factory-only comparison.'};
    if(index===5)return {title:'Vehicle stopped',copy:'Factory-only comparison still has no TTT response control.'};
    return {title:'Restart attempt',copy:'No TTT immobilization request is active in this comparison.'};
  },[index]);

  const aside=<>
    <div className="lab-readout security3c__readout"><small>Unauthorized-use scenario</small><strong>{stage.label}</strong><p>{stage.event}</p></div>
    <div className="security3c__aside-grid"><Readout label="Ignition" value={stage.ignition}/><Readout label="Speed" value={stage.speed+' mph'}/><Readout label="Time" value={stage.time}/></div>
    <p className="lab-note">Concept pending Derek/Amjad confirmation of the exact hardware, supported commands and safeguards. This demonstration does not depict an instant engine shutdown while the vehicle is moving.</p>
    <button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:'Tracking + immobilization concept',detail:'Unauthorized-use alert + location + safe-stop response concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Vehicle Security"
    title="See the difference when the vehicle moves without you."
    description="Play the same unauthorized-use scenario against a factory-only baseline and a TTT security layer so the value is visible event by event."
    aside={aside}
  >
    <div className="security3c">
      <AssetMedia visual="securityHero" className="security3c__photo"/>
      <div className="security3c__shade"/>

      <section className="security3c__map-card" aria-label="Unauthorized vehicle movement map">
        <div className="security3c__map-head">
          <div><small>INCIDENT LOCATION</small><strong>{stage.label}</strong></div>
          <span className={index>0?'is-alert':''}><i/>{index>0?'UNAUTHORIZED ACTIVITY':'MONITORING'}</span>
        </div>
        <svg className="security3c__map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect width="100" height="100" rx="4" fill="#0a131b"/>
          <g className="security3c__blocks"><path d="M4 8h19v17H4zM28 7h18v14H28zM53 5h16v18H53zM75 8h20v15H75zM4 31h15v15H4zM24 29h20v17H24zM67 29h27v14H67zM5 53h18v17H5zM29 53h18v14H29zM72 50h22v19H72zM4 77h21v17H4zM31 74h17v18H31zM57 76h17v16H57zM80 76h15v17H80z"/></g>
          <g className="security3c__roads"><path d="M0 65 C20 61 34 57 49 52 S72 39 100 41"/><path d="M49 0 C51 24 49 45 53 60 S61 83 63 100"/><path d="M0 31h100M0 83h100M23 0v100M81 0v100"/></g>
          <circle cx="16" cy="76" r="15" className="security3c__home-ring"/>
          <path d="M16 76 C31 68 42 60 55 51 S67 42 76 37" className="security3c__route"/>
        </svg>
        <span className="security3c__home-label">HOME</span>
        <div className="security3c__vehicle" style={{left:stage.x+'%',top:stage.y+'%'}}><i/><span>{stage.speed?stage.speed+' mph':'STOPPED'}</span></div>
      </section>

      <aside className="security3c__response">
        <div className="security3c__response-head"><span>TTT SECURITY</span><i className={index>0?'is-alert':''}/></div>
        <div className={'security3c__status is-'+tttStatus.tone}><small>{stage.time}</small><strong>{tttStatus.title}</strong><p>{tttStatus.copy}</p></div>
        <div className="security3c__facts"><span>Ignition <b>{stage.ignition}</b></span><span>Speed <b>{stage.speed+' mph'}</b></span><span>Location <b>{index<2?'Home':'Live'}</b></span></div>
        <button
          type="button"
          className="security3c__immobilize"
          disabled={index<4||requested}
          onClick={()=>setRequested(true)}
        >{requested?'IMMOBILIZATION REQUESTED':'REQUEST IMMOBILIZATION'}</button>
        <div className="security3c__safety"><i/><span>{requested&&index<5?'ARMED · WAITING FOR STOP':requested&&index>=5?'SAFE-STOP CONDITION MET':'No moving-vehicle shutdown depicted'}</span></div>
      </aside>
    </div>

    <div className="security3c__compare">
      <article>
        <small>FACTORY-ONLY COMPARISON</small>
        <strong>{factoryStatus.title}</strong>
        <p>{factoryStatus.copy}</p>
        <div><span>TTT movement alert</span><b>NOT ADDED</b></div>
        <div><span>TTT live location</span><b>NOT ADDED</b></div>
        <div><span>TTT immobilization request</span><b>NOT ADDED</b></div>
      </article>
      <article className="is-ttt">
        <small>TTT SECURITY LAYER</small>
        <strong>{tttStatus.title}</strong>
        <p>{tttStatus.copy}</p>
        <div><span>Movement alert</span><b>AVAILABLE</b></div>
        <div><span>Live location</span><b>AVAILABLE</b></div>
        <div><span>Immobilization request</span><b>CONCEPT</b></div>
      </article>
    </div>

    <div className="security3c__steps">{stages.map((s,i)=><button type="button" key={s.label} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setIndex(i)}><small>{String(i+1).padStart(2,'0')}</small><strong>{s.label}</strong><span>{s.time}</span></button>)}</div>
    <div className="signal-next">
      <button className="button button--ghost" disabled={!index} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Previous event</button>
      <button className="button" disabled={index===stages.length-1} onClick={()=>setIndex(i=>Math.min(stages.length-1,i+1))}>Next event →</button>
    </div>
  </ExperienceShell>;
}
function Readout({label,value}){return <div className="security3c__readout-item"><small>{label}</small><strong>{value}</strong></div>}
