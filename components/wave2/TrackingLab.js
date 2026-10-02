'use client';

import { useEffect, useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const scenarios={
  normal:{label:'Normal trip',states:[
    {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'00:00',x:18,y:73,event:'Vehicle parked inside Home geofence.',notice:'No active alerts.'},
    {p:25,label:'Started',ignition:'ON',speed:0,zone:'HOME',trip:'00:01',x:18,y:73,event:'Ignition detected.',notice:'Vehicle started at Home.'},
    {p:50,label:'Moving',ignition:'ON',speed:34,zone:'ROUTE',trip:'00:09',x:48,y:52,event:'Vehicle left Home and is moving.',notice:'Home geofence exit recorded.'},
    {p:75,label:'Approaching',ignition:'ON',speed:18,zone:'WORK',trip:'00:18',x:72,y:36,event:'Vehicle entered Work geofence.',notice:'Vehicle arrived at Work.'},
    {p:100,label:'Arrived',ignition:'OFF',speed:0,zone:'WORK',trip:'00:20',x:79,y:31,event:'Trip complete.',notice:'Ignition off · trip history saved.'}
  ]},
  alert:{label:'Geofence alert',states:[
    {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'00:00',x:18,y:73,event:'Vehicle parked inside Home geofence.',notice:'No active alerts.'},
    {p:30,label:'Unexpected start',ignition:'ON',speed:0,zone:'HOME',trip:'00:01',x:18,y:73,event:'Vehicle started outside the expected routine.',notice:'Unexpected ignition activity.'},
    {p:60,label:'Exited Home',ignition:'ON',speed:29,zone:'OUTSIDE',trip:'00:06',x:52,y:58,event:'Vehicle crossed the Home geofence.',notice:'ALERT · Vehicle left Home.'},
    {p:100,label:'Away',ignition:'ON',speed:41,zone:'OTHER',trip:'00:14',x:82,y:66,event:'Vehicle continues outside saved zones.',notice:'Location update · outside known geofences.'}
  ]},
  parked:{label:'Parked vehicle',states:[
    {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'—',x:18,y:73,event:'Last known position confirmed.',notice:'Parked · last update just now.'},
    {p:100,label:'Still parked',ignition:'OFF',speed:0,zone:'HOME',trip:'—',x:18,y:73,event:'No movement detected in this demonstration.',notice:'Vehicle remains at Home.'}
  ]},
  arrival:{label:'Arrival notification',states:[
    {p:0,label:'Moving',ignition:'ON',speed:37,zone:'ROUTE',trip:'00:13',x:52,y:54,event:'Vehicle is en route.',notice:'Location updated.'},
    {p:55,label:'Entering Work',ignition:'ON',speed:16,zone:'WORK',trip:'00:19',x:72,y:37,event:'Vehicle crossed into Work geofence.',notice:'ARRIVAL · Vehicle entered Work.'},
    {p:100,label:'Stopped',ignition:'OFF',speed:0,zone:'WORK',trip:'00:21',x:79,y:31,event:'Vehicle stopped at destination.',notice:'Ignition off at Work.'}
  ]}
};

export default function TrackingLab(){
  const[scenario,setScenario]=useState('normal');
  const[progress,setProgress]=useState(0);
  const[running,setRunning]=useState(false);
  const{addItem,setOpen}=useTTTBuild();
  const data=scenarios[scenario];
  const state=useMemo(()=>data.states.reduce((best,s)=>progress>=s.p?s:best,data.states[0]),[data,progress]);

  useEffect(()=>{
    if(!running)return;
    const id=setInterval(()=>setProgress(p=>{const n=Math.min(100,p+2);if(n>=100)setRunning(false);return n}),110);
    return()=>clearInterval(id);
  },[running]);

  const choose=s=>{setScenario(s);setProgress(0);setRunning(false)};
  const aside=<>
    <div className="lab-readout tracking3a__readout"><small>{data.label}</small><strong>{state.label}</strong><p>{state.event}</p></div>
    <div className="tracking3a__telemetry"><Readout label="Ignition" value={state.ignition}/><Readout label="Speed" value={state.speed+' mph'}/><Readout label="Zone" value={state.zone}/><Readout label="Trip" value={state.trip}/></div>
    <p className="lab-note">Illustrative feature simulation. Exact ignition, speed, geofence, alert and refresh capabilities depend on the tracking platform TTT selects for the vehicle.</p>
    <button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + geofence + vehicle-status concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Tracking Dashboard" title="Know where the vehicle is—and what just happened." description="A cleaner telematics-style dashboard combines the vehicle, map, geofences, trip state and owner notification in one view." aside={aside}>
    <div className="tracking3a">
      <AssetMedia visual="gpsUseCases" className="tracking3a__backdrop"/>
      <div className="tracking3a__shade"/>
      <div className="tracking3a__map-card">
        <div className="tracking3a__map-head"><span>VEHICLE MAP</span><strong>{state.zone==='HOME'?'Home':state.zone==='WORK'?'Work':'Live route'}</strong></div>
        <svg className="tracking3a__map-art" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect width="100" height="100" rx="4" fill="#0b141c"/>
          <g className="tracking3a__blocks">
            <path d="M4 8h18v17H4zM27 6h19v14H27zM53 5h16v18H53zM74 7h21v16H74zM4 30h14v15H4zM23 28h20v18H23zM67 29h27v14H67zM5 52h18v17H5zM29 52h18v14H29zM72 49h22v19H72zM4 76h21v18H4zM31 73h17v19H31zM56 76h18v16H56zM80 75h15v18H80z"/>
          </g>
          <g className="tracking3a__streets">
            <path d="M0 48 C16 45 30 54 43 51 S73 40 100 43"/>
            <path d="M51 0 C49 21 55 35 51 50 S44 78 47 100"/>
            <path d="M0 72 C24 65 35 63 51 66 S77 82 100 78"/>
            <path d="M18 0 C22 24 20 44 24 62 S30 88 29 100"/>
            <path d="M78 0 C77 24 79 47 75 63 S67 88 68 100"/>
          </g>
          <g className="tracking3a__minor">
            <path d="M0 18h100M0 36h100M0 88h100M10 0v100M39 0v100M63 0v100M89 0v100"/>
          </g>
          <circle cx="18" cy="73" r="15" className="tracking3a__geo tracking3a__geo--home"/>
          <circle cx="79" cy="31" r="14" className="tracking3a__geo tracking3a__geo--work"/>
          <path d="M18 73 C31 67 39 61 48 52 S63 40 79 31" className="tracking3a__route"/>
        </svg>
        <div className="tracking3a__zone-label tracking3a__zone-label--home">HOME</div>
        <div className="tracking3a__zone-label tracking3a__zone-label--work">WORK</div>
        <div className="tracking3a__vehicle" style={{left:state.x+'%',top:state.y+'%'}}><span>TTT</span><i/><b>{state.speed?state.speed+' mph':'PARKED'}</b></div>
      </div>

      <div className="tracking3a__phone">
        <div className="tracking3a__phone-top"><span>9:41</span><strong>TTT TRACKING</strong><i/></div>
        <div className={'tracking3a__alert '+(state.notice.includes('ALERT')?'is-alert':'')}>
          <small>{state.notice.includes('ALERT')?'PRIORITY ALERT':'VEHICLE EVENT'}</small>
          <strong>{state.notice}</strong>
          <span>{state.event}</span>
        </div>
        <div className="tracking3a__phone-grid"><Readout label="STATUS" value={state.label}/><Readout label="SPEED" value={state.speed+' mph'}/><Readout label="IGNITION" value={state.ignition}/><Readout label="ZONE" value={state.zone}/></div>
        <div className="tracking3a__last-update"><i/> LIVE SIMULATION · {data.label.toUpperCase()}</div>
      </div>
    </div>

    <div className="tracking3a__timeline">
      <input aria-label="Scrub through the selected vehicle journey" type="range" min="0" max="100" value={progress} onChange={e=>{setRunning(false);setProgress(Number(e.target.value))}}/>
      <div>{data.states.map(s=><button type="button" key={s.p} className={progress>=s.p?'is-complete':''} onClick={()=>{setRunning(false);setProgress(s.p)}}><i/><span>{s.label}</span></button>)}</div>
    </div>

    <div className="lab-controls tracking3a__controls"><Control label="Scenario">{Object.keys(scenarios).map(s=><button key={s} className={scenario===s?'is-active':''} aria-pressed={scenario===s} onClick={()=>choose(s)}>{scenarios[s].label}</button>)}</Control></div>
    <div className="signal-next"><button className="button button--ghost" onClick={()=>{setRunning(false);setProgress(0)}}>Reset</button><button className="button" disabled={running||progress>=100} onClick={()=>setRunning(true)}>{running?'Running…':'▶ Run scenario'}</button></div>
  </ExperienceShell>;
}
function Readout({label,value}){return <div className="tracking3a__readout-item"><small>{label}</small><strong>{value}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
