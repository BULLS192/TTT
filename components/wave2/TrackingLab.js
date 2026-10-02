'use client';

import { useEffect, useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import SatelliteTileLayer from './SatelliteTileLayer';
import { useTTTBuild } from './TTTBuildContext';

const journey=[
  {p:0,time:'8:00 AM',label:'Parked at Home',ignition:'OFF',speed:0,zone:'HOME',x:16,y:76,level:'normal',event:'Vehicle is parked inside the Home geofence.',notice:'Vehicle parked · last update now.'},
  {p:16,time:'8:02 AM',label:'Ignition On',ignition:'ON',speed:0,zone:'HOME',x:16,y:76,level:'info',event:'Ignition activity detected while the vehicle remains at Home.',notice:'Ignition on · Home.'},
  {p:32,time:'8:08 AM',label:'Driving',ignition:'ON',speed:27,zone:'ROUTE',x:36,y:64,level:'normal',event:'Vehicle is moving along the expected route.',notice:'Trip in progress.'},
  {p:48,time:'8:10 AM',label:'Home Geofence Exit',ignition:'ON',speed:34,zone:'ROUTE',x:51,y:52,level:'info',event:'Vehicle crossed the Home geofence boundary.',notice:'Geofence exit · Home.'},
  {p:64,time:'8:13 AM',label:'Speed Event',ignition:'ON',speed:62,zone:'ROUTE',x:64,y:43,level:'alert',event:'Vehicle exceeded the example 55 mph alert threshold.',notice:'Speed alert.'},
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

const modes={
  commute:{
    label:'Morning commute',
    states:journey,
    route:'M16 76 C25 71 31 68 38 64 S46 57 51 52 S58 47 64 43 S73 35 80 30'
  },
  unexpected:{
    label:'Unexpected movement',
    states:unexpected,
    route:'M16 76 C27 70 32 68 38 65 S49 63 59 66 S68 71 74 73'
  }
};

const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const smooth=t=>t*t*(3-2*t);

function parseTime(value){
  const match=value.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if(!match)return 0;
  let hour=Number(match[1])%12;
  if(match[3].toUpperCase()==='PM')hour+=12;
  return hour*60+Number(match[2]);
}

function formatTime(total){
  const rounded=Math.round(total);
  const minutes=((rounded%60)+60)%60;
  const hour24=((Math.floor(rounded/60)%24)+24)%24;
  const suffix=hour24>=12?'PM':'AM';
  const hour=(hour24%12)||12;
  return hour+':'+String(minutes).padStart(2,'0')+' '+suffix;
}

function getFrame(states,progress){
  if(progress<=states[0].p)return {...states[0],heading:0};
  const nextIndex=states.findIndex(s=>progress<s.p);
  if(nextIndex===-1){
    const last=states[states.length-1];
    const prev=states[states.length-2];
    return {...last,heading:getHeading(prev,last)};
  }
  const next=states[nextIndex];
  const prev=states[nextIndex-1];
  const raw=clamp((progress-prev.p)/(next.p-prev.p),0,1);
  const t=smooth(raw);
  return {
    ...prev,
    x:lerp(prev.x,next.x,t),
    y:lerp(prev.y,next.y,t),
    speed:Math.round(lerp(prev.speed,next.speed,t)),
    time:formatTime(lerp(parseTime(prev.time),parseTime(next.time),raw)),
    heading:getHeading(prev,next)
  };
}

function getHeading(a,b){
  const dx=b.x-a.x;
  const dy=b.y-a.y;
  if(Math.abs(dx)+Math.abs(dy)<.01)return 0;
  return Math.atan2(dx,-dy)*180/Math.PI;
}

function headingLabel(deg){
  const normalized=((deg%360)+360)%360;
  if(normalized<22.5||normalized>=337.5)return 'N';
  if(normalized<67.5)return 'NE';
  if(normalized<112.5)return 'E';
  if(normalized<157.5)return 'SE';
  if(normalized<202.5)return 'S';
  if(normalized<247.5)return 'SW';
  if(normalized<292.5)return 'W';
  return 'NW';
}

export default function TrackingLab(){
  const[mode,setMode]=useState('commute');
  const[progress,setProgress]=useState(0);
  const[running,setRunning]=useState(false);
  const[notifications,setNotifications]=useState({ignition:true,geofence:true,speed:true});
  const{addItem,setOpen}=useTTTBuild();

  const config=modes[mode];
  const states=config.states;
  const state=useMemo(()=>states.reduce((best,s)=>progress>=s.p?s:best,states[0]),[states,progress]);
  const frame=useMemo(()=>getFrame(states,progress),[states,progress]);
  const completed=states.filter(s=>progress>=s.p);

  useEffect(()=>{
    if(!running)return;
    let frameId=0;
    const startProgress=progress;
    const startedAt=performance.now();
    const duration=Math.max(900,(100-startProgress)*145);

    const tick=(now)=>{
      const elapsed=now-startedAt;
      const t=Math.min(1,elapsed/duration);
      setProgress(startProgress+(100-startProgress)*t);
      if(t<1){
        frameId=requestAnimationFrame(tick);
      }else{
        setRunning(false);
      }
    };

    frameId=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(frameId);
    // progress is intentionally captured when playback starts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[running]);

  const selectMode=(next)=>{setMode(next);setProgress(0);setRunning(false)};
  const alertVisible=state.level==='alert';
  const homeCrossing=mode==='commute'
    ? progress>=45&&progress<=52
    : progress>=35&&progress<=43;
  const workArrival=mode==='commute'&&progress>=79&&progress<=87;

  const aside=<>
    <div className="lab-readout tracking3c__readout"><small>Live journey simulation</small><strong>{state.label}</strong><p>{state.event}</p></div>
    <div className="tracking3c__aside-grid">
      <Metric icon="power" label="Ignition" value={state.ignition}/>
      <Metric icon="speed" label="Speed" value={frame.speed+' mph'}/>
      <Metric icon="pin" label="Zone" value={state.zone}/>
      <Metric icon="clock" label="Time" value={frame.time}/>
    </div>
    <p className="lab-note">Illustrative feature simulation. Exact ignition, speed, geofence, alert, trip-history and refresh capabilities depend on the tracking platform selected for the vehicle.</p>
    <button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + ignition + speed + geofence + trip history concept'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Tracking Dashboard" title="See the trip—not just a dot on a map." description="Play through a vehicle journey and watch ignition, speed, geofences, notifications and trip history update together." aside={aside}>
    <div className="tracking3c tracking3e tracking3f">
      <section className="tracking3c__map-card tracking3e__map" aria-label="Vehicle journey satellite map">
        <SatelliteTileLayer variant="tracking"/>

        <div className="tracking3e__map-head">
          <div className="tracking3e__identity"><span className="tracking3e__live"><i/>LIVE VEHICLE</span><strong>Concept One</strong><span>Houston · updated {frame.time}</span></div>
          <div className="tracking3e__gps"><Icon name="signal"/><span>GPS</span><b>SATELLITE</b></div>
        </div>

        <svg className="tracking3e__overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="tracking-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.25" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <radialGradient id="home-glow"><stop offset="0" stopColor="rgba(70,161,226,.24)"/><stop offset=".68" stopColor="rgba(70,161,226,.10)"/><stop offset="1" stopColor="rgba(70,161,226,0)"/></radialGradient>
            <radialGradient id="work-glow"><stop offset="0" stopColor="rgba(65,178,119,.20)"/><stop offset=".68" stopColor="rgba(65,178,119,.08)"/><stop offset="1" stopColor="rgba(65,178,119,0)"/></radialGradient>
          </defs>
          <circle className={homeCrossing?'tracking3f__geo-ring is-crossing':'tracking3f__geo-ring'} cx="16" cy="76" r="17" fill="url(#home-glow)" stroke="#64b8ef" strokeWidth=".55" strokeDasharray="1.2 1"/>
          <circle className={workArrival?'tracking3f__geo-ring is-arriving':'tracking3f__geo-ring'} cx="80" cy="30" r="15" fill="url(#work-glow)" stroke="#62c68f" strokeWidth=".55" strokeDasharray="1.2 1"/>
          <path d={config.route} className={'tracking3f__route-base '+(mode==='unexpected'?'is-alert':'')}/>
          <path d={config.route} pathLength="100" style={{strokeDasharray:progress+' 100'}} className={'tracking3f__route-progress '+(mode==='unexpected'?'is-alert':'')} filter="url(#tracking-glow)"/>
        </svg>

        <div className={'tracking3e__geofence tracking3e__geofence--home '+(homeCrossing?'is-crossing':'')}><Icon name="home"/><strong>HOME</strong><span>Geofence</span></div>
        <div className={'tracking3e__geofence tracking3e__geofence--work '+(workArrival?'is-arriving':'')}><Icon name="building"/><strong>WORK</strong><span>Geofence</span></div>

        <div className={'tracking3e__vehicle tracking3f__vehicle '+(state.level==='alert'?'is-alert':'')} style={{left:frame.x+'%',top:frame.y+'%'}}>
          <div className="tracking3e__car tracking3f__car" style={{'--heading':frame.heading+'deg'}}><span/><i/><b/></div>
          <em>{frame.speed?frame.speed+' mph':'STOPPED'}</em>
        </div>

        <div className="tracking3f__position-pulse" style={{left:frame.x+'%',top:frame.y+'%'}} aria-hidden="true"/>
        <div className="tracking3e__map-tools"><button type="button" aria-label="Vehicle centered"><Icon name="target"/></button><button type="button" aria-label="Geofences visible"><Icon name="layers"/></button></div>
      </section>

      <aside className="tracking3c__phone tracking3e__dashboard" aria-label="Tracking dashboard">
        <div className="tracking3e__vehicle-card">
          <div className="tracking3e__mini-car"><span/><i/></div>
          <div><small>VEHICLE</small><strong>Concept One</strong><span><i/> Online</span></div>
          <button type="button" aria-label="More vehicle options">•••</button>
        </div>

        <div className={'tracking3c__notice tracking3e__notice '+(alertVisible?'is-alert':state.level==='success'?'is-success':'')}>
          <Icon name={alertVisible?'alert':'pin'}/>
          <div><small>{alertVisible?'PRIORITY ALERT':state.level==='success'?'TRIP EVENT':'LIVE STATUS'}</small><strong>{state.notice}</strong><span>{state.event}</span></div>
        </div>

        <div className="tracking3e__metrics">
          <Metric icon="power" label="Ignition" value={state.ignition}/>
          <Metric icon="speed" label="Speed" value={frame.speed+' mph'}/>
          <Metric icon="nav" label="Direction" value={headingLabel(frame.heading)}/>
          <Metric icon="clock" label="Updated" value={frame.time}/>
        </div>

        <div className="tracking3c__history tracking3e__history">
          <div><small>TRIP HISTORY</small><span>{completed.length}/{states.length} events</span></div>
          <ol>{completed.slice(-4).reverse().map(s=><li key={s.p}><i className={'is-'+s.level}/><span><strong>{s.time}</strong>{s.label}</span><Icon name="route"/></li>)}</ol>
        </div>
      </aside>
    </div>

    <div className="tracking3c__scrub tracking3e__replay">
      <div className="tracking3e__replay-head"><span><Icon name="replay"/>JOURNEY REPLAY</span><small>{modes[mode].label} · {Math.round(progress)}%</small></div>
      <input aria-label="Scrub through vehicle journey" type="range" min="0" max="100" step=".1" value={progress} onChange={e=>{setRunning(false);setProgress(Number(e.target.value))}}/>
      <div>{states.map(s=><button key={s.p} type="button" className={progress>=s.p?'is-complete':''} onClick={()=>{setRunning(false);setProgress(s.p)}}><i/><span>{s.time}<b>{s.label}</b></span></button>)}</div>
    </div>

    <div className="tracking3e__lower">
      <div className="tracking3e__control-panel">
        <div className="tracking3e__panel-title"><Icon name="route"/><span>SCENARIO</span></div>
        <div className="tracking3e__choice">{Object.keys(modes).map(k=><button key={k} className={mode===k?'is-active':''} aria-pressed={mode===k} onClick={()=>selectMode(k)}>{modes[k].label}</button>)}</div>
      </div>
      <div className="tracking3e__control-panel">
        <div className="tracking3e__panel-title"><Icon name="bell"/><span>NOTIFICATIONS</span></div>
        <div className="tracking3e__toggles">{Object.keys(notifications).map(k=><button key={k} className={notifications[k]?'is-active':''} aria-pressed={notifications[k]} onClick={()=>setNotifications(v=>({...v,[k]:!v[k]}))}><span>{k[0].toUpperCase()+k.slice(1)}</span><i/></button>)}</div>
      </div>
    </div>

    <div className="signal-next">
      <button className="button button--ghost" onClick={()=>{setRunning(false);setProgress(0)}}>Reset</button>
      <button className="button" disabled={progress>=100&&!running} onClick={()=>setRunning(v=>!v)}>{running?'❚❚ Pause trip':progress>0?'▶ Continue trip':'▶ Play trip'}</button>
    </div>
  </ExperienceShell>;
}

function Metric({icon,label,value}){return <div className="tracking3c__readout-item tracking3e__metric"><Icon name={icon}/><small>{label}</small><strong>{value}</strong></div>}

function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.8',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    power:<><path d="M12 3v9"/><path d="M6.6 5.6a8 8 0 1 0 10.8 0"/></>,
    speed:<><path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 12l4-4"/><path d="M7 16h10"/></>,
    pin:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    nav:<><path d="m4 5 15-2-6 17-2-7-7-2Z"/></>,
    home:<><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    building:<><path d="M4 21V5l8-3v19M12 8h8v13M7 8h2M7 12h2M7 16h2M15 11h2M15 15h2"/></>,
    signal:<><path d="M4 20v-3M8 20v-6M12 20v-9M16 20V8M20 20V5"/></>,
    target:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
    layers:<><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    route:<><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h4a4 4 0 0 1 4 4v2a4 4 0 0 0 2 3.5"/></>,
    replay:<><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v6h6"/></>,
    bell:<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.pin}</svg>;
}
