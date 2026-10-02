'use client';

import { useEffect, useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const scenarios={
  normal:{
    label:'Normal trip',
    states:[
      {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'00:00',x:18,y:72,event:'Vehicle parked inside Home geofence.',notice:'No active alerts.'},
      {p:25,label:'Started',ignition:'ON',speed:0,zone:'HOME',trip:'00:01',x:18,y:72,event:'Ignition detected.',notice:'Vehicle started at Home.'},
      {p:50,label:'Moving',ignition:'ON',speed:34,zone:'ROUTE',trip:'00:09',x:48,y:48,event:'Vehicle left Home and is moving.',notice:'Home geofence exit recorded.'},
      {p:75,label:'Approaching',ignition:'ON',speed:18,zone:'WORK',trip:'00:18',x:74,y:35,event:'Vehicle entered Work geofence.',notice:'Vehicle arrived at Work.'},
      {p:100,label:'Arrived',ignition:'OFF',speed:0,zone:'WORK',trip:'00:20',x:80,y:30,event:'Trip complete.',notice:'Ignition off · trip history saved.'}
    ]
  },
  alert:{
    label:'Geofence alert',
    states:[
      {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'00:00',x:18,y:72,event:'Vehicle parked inside Home geofence.',notice:'No active alerts.'},
      {p:30,label:'Unexpected start',ignition:'ON',speed:0,zone:'HOME',trip:'00:01',x:18,y:72,event:'Vehicle started outside the expected routine.',notice:'Unexpected ignition activity.'},
      {p:60,label:'Exited Home',ignition:'ON',speed:29,zone:'OUTSIDE',trip:'00:06',x:51,y:55,event:'Vehicle crossed the Home geofence.',notice:'ALERT · Vehicle left Home.'},
      {p:100,label:'Away',ignition:'ON',speed:41,zone:'OTHER',trip:'00:14',x:83,y:62,event:'Vehicle continues outside saved zones.',notice:'Location update · outside known geofences.'}
    ]
  },
  parked:{
    label:'Parked vehicle',
    states:[
      {p:0,label:'Parked',ignition:'OFF',speed:0,zone:'HOME',trip:'—',x:18,y:72,event:'Last known position confirmed.',notice:'Parked · last update just now.'},
      {p:100,label:'Still parked',ignition:'OFF',speed:0,zone:'HOME',trip:'—',x:18,y:72,event:'No movement detected in this demonstration.',notice:'Vehicle remains at Home.'}
    ]
  },
  arrival:{
    label:'Arrival notification',
    states:[
      {p:0,label:'Moving',ignition:'ON',speed:37,zone:'ROUTE',trip:'00:13',x:52,y:51,event:'Vehicle is en route.',notice:'Location updated.'},
      {p:55,label:'Entering Work',ignition:'ON',speed:16,zone:'WORK',trip:'00:19',x:73,y:36,event:'Vehicle crossed into Work geofence.',notice:'ARRIVAL · Vehicle entered Work.'},
      {p:100,label:'Stopped',ignition:'OFF',speed:0,zone:'WORK',trip:'00:21',x:80,y:30,event:'Vehicle stopped at destination.',notice:'Ignition off at Work.'}
    ]
  }
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
    <div className="lab-readout tracking2e__readout"><small>{data.label}</small><strong>{state.label}</strong><p>{state.event}</p></div>
    <div className="tracking2e__telemetry">
      <Readout label="Ignition" value={state.ignition}/><Readout label="Speed" value={state.speed+' mph'}/><Readout label="Zone" value={state.zone}/><Readout label="Trip" value={state.trip}/>
    </div>
    <p className="lab-note">Illustrative feature simulation. Exact ignition, speed, geofence, alert and refresh capabilities depend on the tracking platform TTT selects for the vehicle.</p>
    <button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + geofence + vehicle-status concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Tracking Dashboard" title="Know where the vehicle is—and what just happened." description="Explore common tracking moments instead of watching one fixed animation. Scrub the trip and watch vehicle status, geofences and notifications change together." aside={aside}>
    <div className="tracking2e">
      <div className="tracking2e__map">
        <div className="tracking2e__road tracking2e__road--one"/><div className="tracking2e__road tracking2e__road--two"/>
        <Zone className="home" label="HOME"/><Zone className="work" label="WORK"/>
        <div className="tracking2e__route"/>
        <div className="tracking2e__car" style={{left:state.x+'%',top:state.y+'%'}}><i/><span>{state.speed?state.speed+' mph':'PARKED'}</span></div>
        <div className="tracking2e__map-key"><strong>{state.zone==='HOME'?'Inside Home':state.zone==='WORK'?'Inside Work':'Outside saved zone'}</strong><span>Ignition {state.ignition}</span></div>
      </div>
      <div className="tracking2e__phone">
        <div className="tracking2e__phone-head"><span>TTT TRACKING</span><i/></div>
        <div className={'tracking2e__notice '+(state.notice.includes('ALERT')?'is-alert':'')}>
          <small>VEHICLE EVENT</small><strong>{state.notice}</strong><span>{state.event}</span>
        </div>
        <div className="tracking2e__phone-stats"><Readout label="Status" value={state.label}/><Readout label="Speed" value={state.speed+' mph'}/><Readout label="Ignition" value={state.ignition}/><Readout label="Zone" value={state.zone}/></div>
      </div>
    </div>

    <div className="tracking2e__timeline">
      <input aria-label="Scrub through the selected vehicle journey" type="range" min="0" max="100" value={progress} onChange={e=>{setRunning(false);setProgress(Number(e.target.value))}}/>
      <div>{data.states.map(s=><button type="button" key={s.p} className={progress>=s.p?'is-complete':''} onClick={()=>{setRunning(false);setProgress(s.p)}}><i/><span>{s.label}</span></button>)}</div>
    </div>

    <div className="lab-controls tracking2e__controls">
      <Control label="Scenario">{Object.keys(scenarios).map(s=><button key={s} className={scenario===s?'is-active':''} aria-pressed={scenario===s} onClick={()=>choose(s)}>{scenarios[s].label}</button>)}</Control>
    </div>
    <div className="signal-next"><button className="button button--ghost" onClick={()=>{setRunning(false);setProgress(0)}}>Reset</button><button className="button" disabled={running||progress>=100} onClick={()=>setRunning(true)}>{running?'Running…':'▶ Run scenario'}</button></div>
  </ExperienceShell>;
}
function Zone({className,label}){return <div className={'tracking2e__zone tracking2e__zone--'+className}><span>{label}</span></div>}
function Readout({label,value}){return <div className="tracking2e__readout-item"><small>{label}</small><strong>{value}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
