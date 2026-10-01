'use client';

import { useEffect, useRef, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const modes={
 Factory:{stage:28,bass:32,clarity:42,copy:'Factory balance: useful, but the stage sits low and close to the doors.'},
 'Speaker Upgrade':{stage:42,bass:46,clarity:66,copy:'Better drivers improve detail and reduce strain, while the factory source remains familiar.'},
 Amplified:{stage:52,bass:76,clarity:72,copy:'More clean headroom and stronger low-frequency control.'},
 'DSP Tuned':{stage:82,bass:78,clarity:90,copy:'Timing, level and frequency response are coordinated from the listening position.'}
};

export default function AudioLab(){
 const[mode,setMode]=useState('DSP Tuned');
 const[selected,setSelected]=useState('Driver tweeter');
 const[playing,setPlaying]=useState(false);
 const audioRef=useRef(null);
 const{addItem,setOpen}=useTTTBuild();
 useEffect(()=>()=>{try{audioRef.current?.close()}catch{}},[]);
 const preview=()=>{
   if(playing)return;
   const C=window.AudioContext||window.webkitAudioContext;
   if(!C)return;
   const ctx=new C();audioRef.current=ctx;setPlaying(true);
   const master=ctx.createGain();master.gain.value=.06;master.connect(ctx.destination);
   const left=ctx.createOscillator(),right=ctx.createOscillator(),lg=ctx.createStereoPanner(),rg=ctx.createStereoPanner();
   left.type='sine';right.type='sine';left.frequency.value=220;right.frequency.value=mode==='DSP Tuned'?220:226;lg.pan.value=-.7;rg.pan.value=.7;
   left.connect(lg).connect(master);right.connect(rg).connect(master);left.start();right.start();
   master.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+1.4);left.stop(ctx.currentTime+1.45);right.stop(ctx.currentTime+1.45);
   setTimeout(()=>{setPlaying(false);ctx.close().catch(()=>{})},1550);
 };
 const m=modes[mode];
 const aside=<><div className="lab-readout"><small>Listening mode</small><strong>{mode}</strong><p>{m.copy}</p></div>
   <div className="lab-meters"><Meter label="Soundstage" value={m.stage}/><Meter label="Bass control" value={m.bass}/><Meter label="Clarity" value={m.clarity}/></div>
   <button className="button button--ghost" onClick={preview} disabled={playing}>{playing?'Playing…':'Play conceptual stereo cue'}</button>
   <p className="lab-note">Illustrative listening demonstration. It does not reproduce a specific vehicle, system or final tuning result.</p>
   <button className="button" onClick={()=>{addItem({id:'audio',category:'Automotive Audio',title:mode,detail:'Conceptual audio path · '+selected});setOpen(true)}}>Add to My TTT Build →</button></>;
 return <ExperienceShell eyebrow="TTT Listening Room" title="Move the soundstage, not the dashboard." description="Explore what changes when speakers, amplification and DSP are treated as one system." aside={aside}>
  <div className="audio-cabin">
    <div className="audio-windshield"><span className="audio-stage" style={{width:(25+m.stage*.65)+'%'}}>SOUNDSTAGE</span></div>
    <div className="audio-seat audio-seat--left">DRIVER</div><div className="audio-seat audio-seat--right">PASSENGER</div>
    {['Driver tweeter','Passenger tweeter','Driver door','Passenger door','Subwoofer'].map((name,i)=><button key={name} onClick={()=>setSelected(name)} className={'audio-speaker speaker-'+i+' '+(selected===name?'is-active':'')} aria-label={name}><span/></button>)}
    <div className={'audio-wave '+(mode==='DSP Tuned'?'is-aligned':'')}><i/><i/><i/></div>
    <div className="audio-selected">{selected}</div>
  </div>
  <div className="lab-controls"><Control label="System state">{Object.keys(modes).map(v=><button key={v} className={v===mode?'is-active':''} onClick={()=>setMode(v)}>{v}</button>)}</Control></div>
 </ExperienceShell>;
}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Meter({label,value}){return <div className="lab-meter"><span>{label}</span><i><b style={{width:value+'%'}}/></i><strong>{value}%</strong></div>}
