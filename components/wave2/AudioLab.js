'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const modes={
  Factory:{stage:'Near-side biased',clarity:'Baseline',dynamics:'Constrained',copy:'Illustrates how a closer door speaker can pull the image toward the listener before tuning.'},
  'Speaker Upgrade':{stage:'Still position-biased',clarity:'More detail',dynamics:'Improved',copy:'Better drivers can improve detail without automatically correcting the cabin geometry.'},
  Amplified:{stage:'More controlled',clarity:'Higher',dynamics:'More headroom',copy:'Additional controlled power helps demanding passages without making loudness the only goal.'},
  'DSP Tuned':{stage:'Centered for target seat',clarity:'Tuned',dynamics:'Integrated',copy:'Timing, level and tonal balance are coordinated around the selected listening position.'}
};

export default function AudioLab(){
  const[selectedMode,setSelectedMode]=useState('DSP Tuned');
  const[listener,setListener]=useState('Driver');
  const[playing,setPlaying]=useState(false);
  const[abFactory,setAbFactory]=useState(false);
  const[error,setError]=useState('');
  const audioRef=useRef(null);
  const nodesRef=useRef(null);
  const{addItem,setOpen}=useTTTBuild();
  const demoMode=abFactory?'Factory':selectedMode;
  const m=modes[demoMode];

  const stageX=useMemo(()=>{
    if(demoMode==='DSP Tuned')return 50;
    const bias=demoMode==='Factory'?15:demoMode==='Speaker Upgrade'?10:5;
    return listener==='Driver'?50-bias:50+bias;
  },[demoMode,listener]);

  useEffect(()=>{
    const nodes=nodesRef.current;
    if(!nodes)return;
    const now=nodes.ctx.currentTime;
    const cutoff={Factory:2600,'Speaker Upgrade':6500,Amplified:11000,'DSP Tuned':15000}[demoMode];
    const panBias={Factory:.42,'Speaker Upgrade':.28,Amplified:.14,'DSP Tuned':0}[demoMode]*(listener==='Driver'?-1:1);
    nodes.filter.frequency.cancelScheduledValues(now);nodes.filter.frequency.linearRampToValueAtTime(cutoff,now+.12);
    nodes.pan.pan.cancelScheduledValues(now);nodes.pan.pan.linearRampToValueAtTime(panBias,now+.12);
    nodes.width.gain.cancelScheduledValues(now);nodes.width.gain.linearRampToValueAtTime(demoMode==='Factory'?.06:.09,now+.12);
  },[demoMode,listener]);

  useEffect(()=>()=>stopAudio(),[]);

  function stopAudio(){
    const nodes=nodesRef.current;
    if(nodes){try{nodes.sources.forEach(s=>s.stop())}catch{};try{nodes.ctx.close()}catch{}}
    nodesRef.current=null;audioRef.current=null;setPlaying(false);
  }

  async function toggleAudio(){
    if(playing){stopAudio();return}
    const C=window.AudioContext||window.webkitAudioContext;
    if(!C){setError('Audio demo is not available in this browser.');return}
    try{
      const ctx=new C();await ctx.resume();audioRef.current=ctx;
      const master=ctx.createGain();master.gain.value=.12;
      const filter=ctx.createBiquadFilter();filter.type='lowpass';
      const pan=ctx.createStereoPanner();
      const width=ctx.createGain();width.gain.value=.09;
      const comp=ctx.createDynamicsCompressor();comp.threshold.value=-20;comp.ratio.value=demoMode==='Factory'?5:2.5;
      filter.connect(pan).connect(comp).connect(master).connect(ctx.destination);
      const sources=[];
      [174.61,261.63,349.23,523.25].forEach((freq,i)=>{
        const osc=ctx.createOscillator();const g=ctx.createGain();
        osc.type=i===0?'triangle':'sine';osc.frequency.value=freq;
        g.gain.value=i===0?.24:.12;
        const lfo=ctx.createOscillator();const lfoGain=ctx.createGain();lfo.frequency.value=.22+i*.07;lfoGain.gain.value=2+i;
        lfo.connect(lfoGain).connect(osc.detune);osc.connect(g).connect(filter);osc.start();lfo.start();sources.push(osc,lfo);
      });
      const pulse=ctx.createOscillator();const pulseGain=ctx.createGain();pulse.type='square';pulse.frequency.value=2; pulseGain.gain.value=.018;
      pulse.connect(pulseGain).connect(filter);pulse.start();sources.push(pulse);
      nodesRef.current={ctx,filter,pan,width,comp,master,sources};setPlaying(true);setError('');
      const cutoff={Factory:2600,'Speaker Upgrade':6500,Amplified:11000,'DSP Tuned':15000}[demoMode];
      filter.frequency.value=cutoff;pan.pan.value=({Factory:.42,'Speaker Upgrade':.28,Amplified:.14,'DSP Tuned':0}[demoMode])*(listener==='Driver'?-1:1);
    }catch{setError('The audio demo could not start. Try tapping Play again.');stopAudio()}
  }

  const aside=<>
    <div className="lab-readout audio2e__readout"><small>Listening comparison</small><strong>{demoMode}</strong><p>{m.copy}</p></div>
    <div className="audio2e__traits"><Trait label="Image" value={m.stage}/><Trait label="Detail" value={m.clarity}/><Trait label="Dynamics" value={m.dynamics}/></div>
    <button className="button" onClick={toggleAudio}>{playing?'Pause demo':'▶ Play audio demo'}</button>
    <button className="button button--ghost" disabled={selectedMode==='Factory'} onClick={()=>setAbFactory(v=>!v)}>{abFactory?'B · '+selectedMode:'A · Factory'} ↔ {abFactory?'A · Factory':'B · '+selectedMode}</button>
    {error?<p className="audio2e__error" role="status">{error}</p>:null}
    <p className="lab-note">Illustrative signal comparison, not a recording of your vehicle. Headphones make the left/right positioning easiest to hear.</p>
    <button className="button button--ghost" onClick={()=>{addItem({id:'audio',category:'Automotive Audio',title:selectedMode,detail:'Listening position · '+listener});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Listening Room" title="Hear why the seat position matters." description="Keep one reference cue playing while you change the system and listening position. The visual and stereo image move together." aside={aside}>
    <div className="audio2e">
      <div className="audio2e__screen">
        <div className="audio2e__windshield"><span>FRONT OF VEHICLE</span></div>
        <Speaker x="11%" y="22%" label="L tweeter"/><Speaker x="89%" y="22%" label="R tweeter"/>
        <Speaker x="8%" y="60%" label="L door"/><Speaker x="92%" y="60%" label="R door"/>
        <div className={'audio2e__seat audio2e__seat--driver '+(listener==='Driver'?'is-listening':'')}><span>DRIVER</span></div>
        <div className={'audio2e__seat audio2e__seat--passenger '+(listener==='Passenger'?'is-listening':'')}><span>PASSENGER</span></div>
        <div className="audio2e__stage" style={{left:stageX+'%'}}><i/><strong>VOCAL / SOUNDSTAGE</strong><small>{demoMode==='DSP Tuned'?'targeted to '+listener.toLowerCase():'pulled by cabin geometry'}</small></div>
        <div className="audio2e__path audio2e__path--left"/><div className="audio2e__path audio2e__path--right"/>
      </div>
      <div className="audio2e__explain">
        <span className={demoMode==='Factory'?'is-active':''}>01 · Factory geometry</span>
        <span className={demoMode==='Speaker Upgrade'?'is-active':''}>02 · Better transducers</span>
        <span className={demoMode==='Amplified'?'is-active':''}>03 · Controlled headroom</span>
        <span className={demoMode==='DSP Tuned'?'is-active':''}>04 · Timing + level + tonal balance</span>
      </div>
    </div>
    <div className="lab-controls audio2e__controls">
      <Control label="System state">{Object.keys(modes).map(v=><button key={v} aria-pressed={selectedMode===v&&!abFactory} className={selectedMode===v&&!abFactory?'is-active':''} onClick={()=>{setSelectedMode(v);setAbFactory(false)}}>{v}</button>)}</Control>
      <Control label="Listening position">{['Driver','Passenger'].map(v=><button key={v} aria-pressed={listener===v} className={listener===v?'is-active':''} onClick={()=>setListener(v)}>{v}</button>)}</Control>
    </div>
  </ExperienceShell>;
}
function Speaker({x,y,label}){return <div className="audio2e__speaker" style={{left:x,top:y}}><i/><span>{label}</span></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Trait({label,value}){return <div className="audio2e__trait"><small>{label}</small><strong>{value}</strong></div>}
