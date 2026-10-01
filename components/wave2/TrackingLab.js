'use client';

import { useEffect, useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const milestones=[
 {at:16,label:'Parked',detail:'Inside Home geofence'},
 {at:43,label:'Exit',detail:'Geofence alert generated'},
 {at:66,label:'Moving',detail:'Location updated'},
 {at:84,label:'Arrived',detail:'Trip history saved'}
];

export default function TrackingLab(){
 const[running,setRunning]=useState(false);
 const[progress,setProgress]=useState(16);
 const[event,setEvent]=useState('Vehicle parked inside Home geofence.');
 const{addItem,setOpen}=useTTTBuild();
 useEffect(()=>{if(!running)return;const id=setInterval(()=>setProgress(p=>{const n=p+1.5;if(n>84){setRunning(false);setEvent('Trip complete · history saved.');return 84}if(n>42&&p<=42)setEvent('Geofence exit · alert generated.');if(n>65&&p<=65)setEvent('Vehicle moving · location updated.');return n}),80);return()=>clearInterval(id)},[running]);
 const reset=()=>{setProgress(16);setEvent('Vehicle parked inside Home geofence.');setRunning(false)};
 const active=useMemo(()=>milestones.reduce((best,m)=>progress>=m.at?m:best,milestones[0]),[progress]);
 const aside=<>
  <div className="lab-readout tracking2b__readout"><small>Vehicle journey</small><strong>{active.label}</strong><p>{event}</p></div>
  <div className="tracking2b__features"><span>GEOFENCE</span><span>TRIP HISTORY</span><span>MOVEMENT ALERT</span><span>LOCATION</span></div>
  <p className="lab-note">Illustrative journey. Exact alerts, refresh behavior and history depend on the tracking platform selected for the vehicle.</p>
  <button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + geofence + trip history concept'});setOpen(true)}}>Add to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT Vehicle Journey" title="See the moments that matter after you leave the vehicle." description="Follow a conceptual trip from parked state to geofence exit, movement update and saved history." aside={aside}>
  <div className="tracking2b">
   <div className="tracking2b__map">
    <div className="tracking2b__grid"/>
    <div className="tracking2b__road tracking2b__road--a"/><div className="tracking2b__road tracking2b__road--b"/><div className="tracking2b__road tracking2b__road--c"/>
    <div className="tracking2b__home"><i/><span>HOME</span></div>
    <div className="tracking2b__destination"><i/><span>DESTINATION</span></div>
    <div className="tracking2b__route"/>
    <div className="tracking2b__car" style={{left:progress+'%',top:(72-progress*.47)+'%'}}><i/><span>TTT</span></div>
    <div className="tracking2b__map-label"><small>LIVE JOURNEY</small><strong>{active.detail}</strong></div>
   </div>
   <div className="tracking2b__phone">
    <AssetMedia visual="gpsHero" className="tracking2b__phone-bg"/>
    <div className="tracking2b__phone-shade"/>
    <div className="tracking2b__phone-card"><small>TTT VEHICLE</small><strong>{active.label}</strong><p>{event}</p></div>
    <div className="tracking2b__timeline">{milestones.map(m=><span key={m.label} className={progress>=m.at?'is-complete':''}><i/><b>{m.label}</b></span>)}</div>
   </div>
  </div>
  <div className="signal-next"><button className="button button--ghost" onClick={reset}>Reset</button><button className="button" disabled={running||progress>=84} onClick={()=>setRunning(true)}>{progress>=84?'Trip complete':'Run journey →'}</button></div>
 </ExperienceShell>;
}