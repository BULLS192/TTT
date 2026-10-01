'use client';

import { useEffect, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

export default function TrackingLab(){
 const[running,setRunning]=useState(false);
 const[progress,setProgress]=useState(16);
 const[event,setEvent]=useState('Vehicle parked inside Home geofence.');
 const{addItem,setOpen}=useTTTBuild();
 useEffect(()=>{if(!running)return;const id=setInterval(()=>setProgress(p=>{const n=p+1.5;if(n>84){setRunning(false);setEvent('Trip complete · history saved.');return 84}if(n>42&&p<=42)setEvent('Geofence exit · alert generated.');if(n>65&&p<=65)setEvent('Vehicle moving · location updated.');return n}),80);return()=>clearInterval(id)},[running]);
 const reset=()=>{setProgress(16);setEvent('Vehicle parked inside Home geofence.');setRunning(false)};
 const aside=<><div className="lab-readout"><small>Live event</small><strong>{running?'Tracking':'Ready'}</strong><p>{event}</p></div><div className="tracking-status"><span><b>HOME</b> geofence</span><span><b>TRIP</b> history</span><span><b>ALERT</b> movement</span></div><p className="lab-note">Illustrative journey. Actual alerts and history depend on the platform selected for the vehicle.</p><button className="button" onClick={()=>{addItem({id:'tracking',category:'GPS Tracking',title:'Connected tracking',detail:'Location + geofence + trip history concept'});setOpen(true)}}>Add to My TTT Build →</button></>;
 return <ExperienceShell eyebrow="TTT Vehicle Journey" title="Know what happens after you walk away." description="Follow a conceptual trip from parked vehicle to geofence alert and trip history." aside={aside}>
  <div className="tracking-map">
    <div className="tracking-grid"/><div className="tracking-road road-a"/><div className="tracking-road road-b"/>
    <div className="tracking-geofence"><span>HOME</span></div>
    <div className="tracking-destination"><span>DESTINATION</span></div>
    <div className="tracking-route"/>
    <div className="tracking-vehicle" style={{left:progress+'%',top:(70-progress*.45)+'%'}}><i/>TTT</div>
    <div className="tracking-phone"><small>TTT ALERT</small><strong>{event}</strong></div>
  </div>
  <div className="signal-next"><button className="button button--ghost" onClick={reset}>Reset</button><button className="button" disabled={running||progress>=84} onClick={()=>setRunning(true)}>{progress>=84?'Trip complete':'Run journey →'}</button></div>
 </ExperienceShell>;
}
