'use client';

import { useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import SatelliteTileLayer from './SatelliteTileLayer';
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
    <div className="security3c__aside-grid"><Metric icon="power" label="Ignition" value={stage.ignition}/><Metric icon="speed" label="Speed" value={stage.speed+' mph'}/><Metric icon="clock" label="Time" value={stage.time}/></div>
    <p className="lab-note">Concept pending Derek/Amjad confirmation of exact hardware, supported commands and safeguards. This demonstration does not depict an instant engine shutdown while the vehicle is moving.</p>
    <button className="button" onClick={()=>{addItem({id:'security',category:'Vehicle Security',title:'Tracking + immobilization concept',detail:'Unauthorized-use alert + location + safe-stop response concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Vehicle Security" title="See the difference when the vehicle moves without you." description="Play the same unauthorized-use scenario against a factory-only baseline and a TTT security layer so the value is visible event by event." aside={aside}>
    <div className="security3c security3e">
      <section className="security3c__map-card security3e__map" aria-label="Unauthorized vehicle movement satellite map">
        <SatelliteTileLayer variant="security"/>
        <div className="security3e__map-head">
          <div className="security3e__incident"><span className={index>0?'is-alert':''}><i/>{index>0?'UNAUTHORIZED ACTIVITY':'MONITORING'}</span><strong>{stage.label}</strong><small>{stage.time}</small></div>
          <div className="security3e__gps"><Icon name="shield"/><span>SECURITY LAYER</span></div>
        </div>
        <svg className="security3e__overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="security-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <radialGradient id="security-home"><stop offset="0" stopColor="rgba(77,161,221,.22)"/><stop offset=".68" stopColor="rgba(77,161,221,.09)"/><stop offset="1" stopColor="rgba(77,161,221,0)"/></radialGradient>
          </defs>
          <circle cx="16" cy="76" r="17" fill="url(#security-home)" stroke="#65b8ef" strokeWidth=".6" strokeDasharray="1.25 1"/>
          <path d="M16 76 C25 72 31 68 34 64 S45 56 55 51 S64 45 76 37" className="security3e__route-line" filter="url(#security-glow)"/>
        </svg>
        <div className="security3e__geofence"><Icon name="home"/><strong>HOME</strong><span>Geofence</span></div>
        <div className={'security3e__vehicle '+(index>0?'is-alert':'')} style={{left:stage.x+'%',top:stage.y+'%'}}>
          <div className="tracking3e__car"><span/><i/><b/></div><em>{stage.speed?stage.speed+' mph':'STOPPED'}</em>
        </div>
      </section>

      <aside className="security3c__response security3e__dashboard">
        <div className="security3e__vehicle-card">
          <div className="security3e__mini-car"><span/><i/></div>
          <div><small>VEHICLE</small><strong>Concept One</strong><span className={index>0?'is-alert':''}><i/> {index>0?'Alert active':'Online'}</span></div>
          <button type="button" aria-label="More vehicle options">•••</button>
        </div>
        <div className={'security3c__status security3e__status is-'+tttStatus.tone}>
          <Icon name={tttStatus.tone==='alert'?'alert':tttStatus.tone==='success'?'lock':'shield'}/>
          <div><small>{stage.time}</small><strong>{tttStatus.title}</strong><p>{tttStatus.copy}</p></div>
        </div>
        <div className="security3e__metrics">
          <Metric icon="power" label="Ignition" value={stage.ignition}/>
          <Metric icon="speed" label="Speed" value={stage.speed+' mph'}/>
          <Metric icon="pin" label="Location" value={index<2?'Home':'Live'}/>
          <Metric icon="clock" label="Updated" value={stage.time}/>
        </div>
        <button type="button" className="security3c__immobilize security3e__immobilize" disabled={index<4||requested} onClick={()=>setRequested(true)}><Icon name="lock"/><span>{requested?'IMMOBILIZATION REQUESTED':'REQUEST IMMOBILIZATION'}</span><b>→</b></button>
        <div className="security3c__safety security3e__safety"><Icon name="shield"/><span>{requested&&index<5?'ARMED · WAITING FOR STOP':requested&&index>=5?'SAFE-STOP CONDITION MET':'No moving-vehicle shutdown depicted'}</span></div>
      </aside>
    </div>

    <div className="security3c__compare security3e__compare">
      <article>
        <div className="security3e__compare-head"><Icon name="key"/><div><small>FACTORY ONLY</small><strong>{factoryStatus.title}</strong></div></div>
        <p>{factoryStatus.copy}</p>
        <Feature label="Movement alert" state="NOT ADDED"/>
        <Feature label="Live location" state="NOT ADDED"/>
        <Feature label="Immobilization request" state="NOT ADDED"/>
      </article>
      <article className="is-ttt">
        <div className="security3e__compare-head"><Icon name="shield"/><div><small>TTT SECURITY LAYER</small><strong>{tttStatus.title}</strong></div></div>
        <p>{tttStatus.copy}</p>
        <Feature label="Movement alert" state="AVAILABLE"/>
        <Feature label="Live location" state="AVAILABLE"/>
        <Feature label="Immobilization request" state="CONCEPT"/>
      </article>
    </div>

    <div className="security3c__steps security3e__steps">{stages.map((s,i)=><button type="button" key={s.label} className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>setIndex(i)}><small>{String(i+1).padStart(2,'0')}</small><Icon name={i===0?'home':i===1?'power':i===2?'route':i===3?'nav':i===4?'bell':i===5?'stop':'lock'}/><strong>{s.label}</strong><span>{s.time}</span></button>)}</div>
    <div className="signal-next">
      <button className="button button--ghost" disabled={!index} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Previous event</button>
      <button className="button" disabled={index===stages.length-1} onClick={()=>setIndex(i=>Math.min(stages.length-1,i+1))}>Next event →</button>
    </div>
  </ExperienceShell>;
}

function Feature({label,state}){return <div><span>{label}</span><b>{state}</b></div>}
function Metric({icon,label,value}){return <div className="security3c__readout-item security3e__metric"><Icon name={icon}/><small>{label}</small><strong>{value}</strong></div>}
function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.8',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    power:<><path d="M12 3v9"/><path d="M6.6 5.6a8 8 0 1 0 10.8 0"/></>,
    speed:<><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 12l4-4"/><path d="M7 16h10"/></>,
    pin:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    nav:<><path d="m4 5 15-2-6 17-2-7-7-2Z"/></>,
    home:<><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    route:<><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h4a4 4 0 0 1 4 4v2a4 4 0 0 0 2 3.5"/></>,
    bell:<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    shield:<><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></>,
    lock:<><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    key:<><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8M16 7l2 2M14 9l2 2"/></>,
    stop:<><rect x="6" y="6" width="12" height="12" rx="2"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.shield}</svg>;
}
