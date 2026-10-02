'use client';

import { useEffect, useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const journey=[
  {p:0,time:'8:00 AM',label:'Parked at Home',ignition:'OFF',speed:0,zone:'HOME',x:16,y:76,level:'normal',event:'Vehicle is parked inside the Home geofence.',notice:'Vehicle parked · last update now.'},
  {p:16,time:'8:02 AM',label:'Ignition On',ignition:'ON',speed:0,zone:'HOME',x:16,y:76,level:'info',event:'Ignition activity detected while the vehicle remains at Home.',notice:'Ignition on · Home.'},
  {p:32,time:'8:08 AM',label:'Driving',ignition:'ON',speed:27,zone:'ROUTE',x:36,y:64,level:'normal',event:'Vehicle is moving along the expected route.',notice:'Trip in progress · 27 mph.'},
  {p:48,time:'8:10 AM',label:'Home Geofence Exit',ignition:'ON',speed:34,zone:'ROUTE',x:51,y:52,level:'info',event:'Vehicle crossed the Home geofence boundary.',notice:'Geofence exit · Home.'},
  {p:64,time:'8:13 AM',label:'Speed Event',ignition:'ON',speed:62,zone:'ROUTE',x:64,y:43,level:'alert',event:'Vehicle exceeded the example 55 mph alert threshold.',notice:'Speed alert · 62 mph.'},
  {p:82,time:'8:24 AM',label:'Entered Work',ignition:'ON',speed:12,zone:'WORK',x:78,y:31,level:'success',event:'Vehicle entered the Work geofence.',notice:'Arrival · Work geofence.'},
  {p:100,time:'8:25 AM',label:'Ignition Off',ignition:'OFF',speed:0,zone:'WORK',x:80,y:30,level:'success',event:'Vehicle stopped at Work and the trip was saved.',notice:'Trip complete · ignition off.'}
];

const unexpected=[
  {p:0,time:'10:14 PM',label:'Parked at Home',ignition:'OFF',speed:0,zone:'HOME',x:16,y:76,level:'normal',event:'Vehicle is parked inside the Home geofence.',notice:'Vehicle parked · Home.'},
  {p:18,time:'10:16 PM',label:'Unexpected Start',ignition:'ON',speed:0,zone:'HOME',x:16,y:76,level:'alert',event:'Ignition activity begins outside the example routine.',notice:'Priority alert · unexpected ignition.'},
  {p:38,time:'10:20 PM',label:'Geofence Exit',ignition:'ON',speed:31,zone:'OUTSIDE',x:38,y:65,level:'alert',event:'Vehicle crossed the Home geofence.',notice:'Priority alert · left Home.'},
  {p:60,time:'10:25 PM',label:'Unknown Route',ignition:'ON',speed:44,zone:'OUTSIDE',x:59,y:66,level:'alert',event:'Vehicle continues away from saved destinations.',notice:'Live location · outside known zones.'},
  {p:80,time:'10:31 PM',label:'Stopped Elsewhere',ignition:'OFF',speed:0,zone:'OTHER',x:74,y:73,level:'info',event:'Vehicle stopped outside Home and Work geofences.',notice:'Vehicle stopped · unfamiliar location.'},
  {p:100,time:'10:32 PM',label:'Trip Saved',ignition:'OFF',speed:0,zone:'OTHER',x:74,y:73,level:'normal',event:'The completed trip remains visible in history.',notice:'Trip history updated.'}
];

const modes={commute:{label:'Morning commute',states:journey},unexpected:{label:'Unexpected movement',states:unexpected}};

export default function TrackingLab(){
  const[mode,setMode]=useState('commute');
  const[progress,setProgress]=useState(0);
  const[running,setRunning]=useState(false);
  const[notifications,setNotifications]=useState({ignition:true,geofence:true,speed:true});
  const{addItem,setOpen}=useTTTBuild();
  const states=modes[mode].states;
  const state=useMemo(()=>states.reduce((best,s)=>progress>=s.p?s:best,states[0]),[states,progress]);
  const completed=states.filter(s=>progress>=s.p);

  useEffect(()=>{
    if(!running)return;
    const id=setInterval(()=>setProgress(p=>{
      const n=Math.min(100,p+1.5);
      if(n>=100)setRunning(false);
      return n;
    }),95);
    return()=>clearInterval(id);
  },[running]);

  const selectMode=(next)=>{setMode(next);setProgress(0);setRunning(false)};
  const alertVisible=state.level==='alert' && (
    (state.label.toLowerCase().includes('speed')&&notifications.speed) ||
    (state.label.toLowerCase().includes('geofence')&&notifications.geofence) ||
    (state.label.toLowerCase().includes('ignition')&&notifications.ignition) ||
    state.label==='Unexpected Start'
  );

  const aside=<>
    <div className="lab-readout tracking3c__readout"><small>Live journey simulation</small><strong>{state.label}</strong><p>{state.event}</p></div>
    <div className="tracking3c__aside-grid">
      <Readout label="Ignition" value={state.ignition}/>
      <Readout label="Speed" value={state.speed+' mph'}/>
      <Readout label="Zone" value={state.zone}/>
      <Readout label="Time" value={state.time}/>
    </div>
    <p className="lab-note">Illustrative feature simulation. Exact ignition, speed, geofence, alert, trip-history and refresh capabilities depend on the tracking platform selected for the vehicle.</p>
    <button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + ignition + speed + geofence + trip history concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Tracking Dashboard"
    title="See the trip—not just a dot on a map."
    description="Play through a vehicle journey and watch ignition, speed, geofences, notifications and trip history update together."
    aside={aside}
  >
    <div className="tracking3c">
      <AssetMedia visual="gpsHero" className="tracking3c__photo"/>
      <div className="tracking3c__shade"/>

      <section className="tracking3c__map-card" aria-label="Vehicle journey map">
        <div className="tracking3c__map-top">
          <div><small>LIVE VEHICLE</small><strong>Concept One</strong></div>
          <span className={state.ignition==='ON'?'is-live':''}><i/>{state.ignition==='ON'?'IGNITION ON':'PARKED'}</span>
        </div>
        <svg className="tracking3c__map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="map-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0b151e"/><stop offset="1" stopColor="#081018"/></linearGradient>
            <filter id="route-glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <rect width="100" height="100" rx="4" fill="url(#map-bg)"/>
          <g className="tracking3c__blocks">
            <path d="M4 7h17v16H4zM26 5h18v13H26zM50 7h17v17H50zM73 6h22v17H73zM5 28h15v17H5zM25 27h18v18H25zM52 29h11v14H52zM69 29h25v14H69zM5 52h18v17H5zM28 51h18v15H28zM70 48h24v20H70zM4 76h21v18H4zM30 73h18v19H30zM55 75h18v17H55zM79 74h16v19H79z"/>
          </g>
          <g className="tracking3c__minor"><path d="M0 18h100M0 37h100M0 88h100M10 0v100M40 0v100M63 0v100M89 0v100"/></g>
          <g className="tracking3c__roads">
            <path d="M0 47 C17 43 31 55 44 51 S74 39 100 42"/>
            <path d="M50 0 C48 18 55 35 51 51 S44 79 47 100"/>
            <path d="M0 72 C20 67 35 61 49 65 S74 82 100 78"/>
            <path d="M18 0 C22 24 20 44 24 62 S30 88 29 100"/>
            <path d="M78 0 C77 24 80 46 75 63 S67 88 68 100"/>
          </g>
          <circle cx="16" cy="76" r="14" className="tracking3c__geo tracking3c__geo--home"/>
          <circle cx="80" cy="30" r="13" className="tracking3c__geo tracking3c__geo--work"/>
          {mode==='commute'
            ? <path d="M16 76 C29 70 40 62 51 52 S65 40 80 30" className="tracking3c__route" filter="url(#route-glow)"/>
            : <path d="M16 76 C31 67 45 63 58 66 S68 72 74 73" className="tracking3c__route tracking3c__route--alert" filter="url(#route-glow)"/>
          }
        </svg>
        <div className="tracking3c__zone tracking3c__zone--home">HOME</div>
        <div className="tracking3c__zone tracking3c__zone--work">WORK</div>
        <div className={'tracking3c__vehicle '+(state.level==='alert'?'is-alert':'')} style={{left:state.x+'%',top:state.y+'%'}}>
          <i/><span>{state.speed?state.speed+' mph':'STOPPED'}</span>
        </div>
      </section>

      <aside className="tracking3c__phone" aria-label="Tracking notifications">
        <div className="tracking3c__phone-head"><span>9:41</span><strong>TTT TRACKING</strong><i/></div>
        <div className={'tracking3c__notice '+(alertVisible?'is-alert':state.level==='success'?'is-success':'')}>
          <small>{alertVisible?'PRIORITY ALERT':state.level==='success'?'TRIP EVENT':'VEHICLE EVENT'}</small>
          <strong>{state.notice}</strong>
          <span>{state.event}</span>
        </div>
        <div className="tracking3c__phone-stats">
          <Readout label="SPEED" value={state.speed+' mph'}/>
          <Readout label="IGNITION" value={state.ignition}/>
          <Readout label="ZONE" value={state.zone}/>
          <Readout label="UPDATED" value={state.time}/>
        </div>
        <div className="tracking3c__history">
          <div><small>TRIP HISTORY</small><span>{completed.length}/{states.length} events</span></div>
          <ol>{completed.slice(-4).reverse().map(s=><li key={s.p}><i className={'is-'+s.level}/><span><strong>{s.time}</strong>{s.label}</span></li>)}</ol>
        </div>
      </aside>
    </div>

    <div className="tracking3c__scrub">
      <input aria-label="Scrub through vehicle journey" type="range" min="0" max="100" value={progress} onChange={e=>{setRunning(false);setProgress(Number(e.target.value))}}/>
      <div>{states.map(s=><button key={s.p} type="button" className={progress>=s.p?'is-complete':''} onClick={()=>{setRunning(false);setProgress(s.p)}}><i/><span>{s.label}</span></button>)}</div>
    </div>

    <div className="tracking3c__control-grid">
      <Control label="Scenario">{Object.keys(modes).map(k=><button key={k} className={mode===k?'is-active':''} aria-pressed={mode===k} onClick={()=>selectMode(k)}>{modes[k].label}</button>)}</Control>
      <Control label="Notify me about">{Object.keys(notifications).map(k=><button key={k} className={notifications[k]?'is-active':''} aria-pressed={notifications[k]} onClick={()=>setNotifications(v=>({...v,[k]:!v[k]}))}>{k[0].toUpperCase()+k.slice(1)}</button>)}</Control>
    </div>
    <div className="signal-next">
      <button className="button button--ghost" onClick={()=>{setRunning(false);setProgress(0)}}>Reset</button>
      <button className="button" disabled={running||progress>=100} onClick={()=>setRunning(true)}>{running?'Playing trip…':'▶ Play trip'}</button>
    </div>
  </ExperienceShell>;
}
function Readout({label,value}){return <div className="tracking3c__readout-item"><small>{label}</small><strong>{value}</strong></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
