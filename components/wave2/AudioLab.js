'use client';

import { useEffect, useRef, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const modes={
 Factory:{y:67,w:34,stage:'Door-level',bass:'Factory',clarity:'Baseline',copy:'Useful everyday sound, but the image tends to stay low and close to the speaker locations.'},
 'Speaker Upgrade':{y:59,w:47,stage:'Raised',bass:'Improved',clarity:'Improved',copy:'Better drivers can add detail and composure while keeping the familiar factory source.'},
 Amplified:{y:52,w:61,stage:'Broader',bass:'Controlled',clarity:'Higher',copy:'Clean headroom and stronger low-frequency control create more authority without changing the dash.'},
 'DSP Tuned':{y:43,w:76,stage:'Focused',bass:'Integrated',clarity:'Tuned',copy:'Timing, level and frequency response are coordinated from the listening position so the image moves forward and upward.'}
};

const speakers=[
 ['Driver tweeter',23,30],['Passenger tweeter',76,30],['Driver door',16,61],['Passenger door',84,61],['Subwoofer',55,80]
];

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
  const master=ctx.createGain();master.gain.value=.055;master.connect(ctx.destination);
  const left=ctx.createOscillator(),right=ctx.createOscillator(),lg=ctx.createStereoPanner(),rg=ctx.createStereoPanner();
  left.type='sine';right.type='sine';left.frequency.value=220;right.frequency.value=mode==='DSP Tuned'?220:226;lg.pan.value=-.72;rg.pan.value=.72;
  left.connect(lg).connect(master);right.connect(rg).connect(master);left.start();right.start();
  master.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+1.35);left.stop(ctx.currentTime+1.4);right.stop(ctx.currentTime+1.4);
  setTimeout(()=>{setPlaying(false);ctx.close().catch(()=>{})},1500);
 };
 const m=modes[mode];
 const aside=<>
  <div className="lab-readout audio2b__readout"><small>Listening concept</small><strong>{mode}</strong><p>{m.copy}</p></div>
  <div className="audio2b__traits"><Trait label="Soundstage" value={m.stage}/><Trait label="Bass behavior" value={m.bass}/><Trait label="Clarity" value={m.clarity}/></div>
  <button className="button button--ghost" onClick={preview} disabled={playing}>{playing?'Playing…':'Play conceptual stereo cue'}</button>
  <p className="lab-note">Illustrative listening demonstration only. Final sound depends on the vehicle, equipment, installation and tuning.</p>
  <button className="button" onClick={()=>{addItem({id:'audio',category:'Automotive Audio',title:mode,detail:'Conceptual audio path · '+selected});setOpen(true)}}>Add to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT Listening Room" title="Move the image off the doors." description="See how the perceived stage changes as the system progresses from factory playback to an integrated, tuned audio path." aside={aside}>
  <div className="audio2b">
   <AssetMedia visual="audioHero" className="audio2b__image"/>
   <div className="audio2b__shade"/>
   <div className="audio2b__windshield"/>
   <div className="audio2b__stagebar" style={{top:m.y+'%',width:m.w+'%'}}><i/><span>PERCEIVED STAGE</span></div>
   <div className={'audio2b__field '+(mode==='DSP Tuned'?'is-focused':'')} style={{top:(m.y-8)+'%',width:(m.w+8)+'%'}}/>
   {speakers.map(([name,x,y],i)=><button type="button" key={name} className={'audio2b__speaker '+(selected===name?'is-active':'')} style={{left:x+'%',top:y+'%'}} onClick={()=>setSelected(name)} aria-label={name}><span>{String(i+1).padStart(2,'0')}</span></button>)}
   <div className="audio2b__selected"><small>Selected position</small><strong>{selected}</strong></div>
  </div>
  <div className="lab-controls"><Control label="System state">{Object.keys(modes).map(v=><button key={v} aria-pressed={v===mode} className={v===mode?'is-active':''} onClick={()=>setMode(v)}>{v}</button>)}</Control></div>
 </ExperienceShell>;
}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Trait({label,value}){return <div className="audio2b__trait"><small>{label}</small><strong>{value}</strong></div>}