'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const modes={
  Factory:{stage:'Near-side biased',clarity:'Baseline',dynamics:'Constrained',copy:'Illustrates how cabin geometry can pull the image toward the nearer side before tuning.',spread:30},
  'Speaker Upgrade':{stage:'Still position-biased',clarity:'More detail',dynamics:'Improved',copy:'Better drivers can improve detail without automatically correcting the cabin geometry.',spread:42},
  Amplified:{stage:'More controlled',clarity:'Higher',dynamics:'More headroom',copy:'Additional controlled power helps demanding passages without making loudness the only goal.',spread:55},
  'DSP Tuned':{stage:'Centered for target seat',clarity:'Tuned',dynamics:'Integrated',copy:'Timing, level and tonal balance are coordinated around the selected listening position.',spread:68}
};

export default function AudioLab(){
  const[selectedMode,setSelectedMode]=useState('DSP Tuned');
  const[listener,setListener]=useState('Driver');
  const[playing,setPlaying]=useState(false);
  const[abFactory,setAbFactory]=useState(false);
  const[error,setError]=useState('');
  const nodesRef=useRef(null);
  const{addItem,setOpen}=useTTTBuild();
  const demoMode=abFactory?'Factory':selectedMode;
  const m=modes[demoMode];

  const stageX=useMemo(()=>{
    if(demoMode==='DSP Tuned')return 50;
    const bias=demoMode==='Factory'?14:demoMode==='Speaker Upgrade'?9:4;
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
  },[demoMode,listener]);

  useEffect(()=>()=>stopAudio(),[]);

  function stopAudio(){
    const nodes=nodesRef.current;
    if(nodes){try{nodes.sources.forEach(s=>s.stop())}catch{};try{nodes.ctx.close()}catch{}}
    nodesRef.current=null;setPlaying(false);
  }

  async function toggleAudio(){
    if(playing){stopAudio();return}
    const C=window.AudioContext||window.webkitAudioContext;
    if(!C){setError('Audio demo is not available in this browser.');return}
    try{
      const ctx=new C();await ctx.resume();
      const master=ctx.createGain();master.gain.value=.11;
      const filter=ctx.createBiquadFilter();filter.type='lowpass';
      const pan=ctx.createStereoPanner();
      const comp=ctx.createDynamicsCompressor();comp.threshold.value=-20;comp.ratio.value=demoMode==='Factory'?5:2.5;
      filter.connect(pan).connect(comp).connect(master).connect(ctx.destination);
      const sources=[];
      [174.61,261.63,349.23,523.25].forEach((freq,i)=>{
        const osc=ctx.createOscillator(),g=ctx.createGain(),lfo=ctx.createOscillator(),lfoGain=ctx.createGain();
        osc.type=i===0?'triangle':'sine';osc.frequency.value=freq;g.gain.value=i===0?.24:.12;
        lfo.frequency.value=.22+i*.07;lfoGain.gain.value=2+i;
        lfo.connect(lfoGain).connect(osc.detune);osc.connect(g).connect(filter);osc.start();lfo.start();sources.push(osc,lfo);
      });
      nodesRef.current={ctx,filter,pan,comp,master,sources};setPlaying(true);setError('');
      filter.frequency.value={Factory:2600,'Speaker Upgrade':6500,Amplified:11000,'DSP Tuned':15000}[demoMode];
      pan.pan.value=({Factory:.42,'Speaker Upgrade':.28,Amplified:.14,'DSP Tuned':0}[demoMode])*(listener==='Driver'?-1:1);
    }catch{setError('The audio demo could not start. Try tapping Play again.');stopAudio()}
  }

  const aside=<>
    <div className="lab-readout audio3a__readout"><small>Listening comparison</small><strong>{demoMode}</strong><p>{m.copy}</p></div>
    <div className="audio3a__traits"><Trait label="Image" value={m.stage}/><Trait label="Detail" value={m.clarity}/><Trait label="Dynamics" value={m.dynamics}/></div>
    <button className="button" onClick={toggleAudio}>{playing?'Pause demo':'▶ Play audio demo'}</button>
    <button className="button button--ghost" disabled={selectedMode==='Factory'} onClick={()=>setAbFactory(v=>!v)}>{abFactory?'B · '+selectedMode:'A · Factory'} ↔ {abFactory?'A · Factory':'B · '+selectedMode}</button>
    {error?<p className="audio3a__error" role="status">{error}</p>:null}
    <p className="lab-note">Illustrative signal comparison, not a recording of your vehicle. Headphones make the left/right positioning easiest to hear.</p>
    <button className="button button--ghost" onClick={()=>{addItem({id:'audio',category:'Automotive Audio',title:selectedMode,detail:'Listening position · '+listener});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Listening Room" title="Hear why the seat position matters." description="The cabin stays realistic while the engineering overlay shows speaker position, listener position and where the perceived image is being pulled." aside={aside}>
    <div className="audio3a">
      <div className="audio3a__scene">
        <AssetMedia visual="audioPlacement" className="audio3a__photo"/>
        <div className="audio3a__shade"/>
        <div className="audio3a__cockpit-card"><small>LISTENING POSITION</small><strong>{listener}</strong><span>{demoMode}</span></div>
        <Speaker x="15%" y="24%" label="LF"/><Speaker x="84%" y="24%" label="RF"/><Speaker x="15%" y="69%" label="LR"/><Speaker x="84%" y="69%" label="RR"/>
        <button className={'audio3a__listener audio3a__listener--driver '+(listener==='Driver'?'is-active':'')} onClick={()=>setListener('Driver')}><i/><span>DRIVER</span></button>
        <button className={'audio3a__listener audio3a__listener--passenger '+(listener==='Passenger'?'is-active':'')} onClick={()=>setListener('Passenger')}><i/><span>PASSENGER</span></button>
        <div className="audio3a__stage" style={{left:stageX+'%',width:m.spread+'%'}}>
          <div className="audio3a__stage-line"/>
          <strong>PERCEIVED FRONT STAGE</strong>
          <small>{demoMode==='DSP Tuned'?'centered for '+listener.toLowerCase():'biased by cabin geometry'}</small>
        </div>
        <svg className="audio3a__paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d={listener==='Driver'?'M15 24 C24 35 30 49 35 63':'M15 24 C30 35 48 47 66 63'}/>
          <path d={listener==='Driver'?'M84 24 C68 35 50 48 35 63':'M84 24 C78 36 72 50 66 63'}/>
        </svg>
      </div>
      <div className="audio3a__progression">
        {Object.keys(modes).map((v,i)=><button key={v} className={demoMode===v?'is-active':''} onClick={()=>{setSelectedMode(v);setAbFactory(false)}}><small>{String(i+1).padStart(2,'0')}</small><strong>{v}</strong><span>{modes[v].stage}</span></button>)}
      </div>
    </div>
    <div className="lab-controls audio3a__controls">
      <Control label="Listening position">{['Driver','Passenger'].map(v=><button key={v} aria-pressed={listener===v} className={listener===v?'is-active':''} onClick={()=>setListener(v)}>{v}</button>)}</Control>
    </div>
  </ExperienceShell>;
}
function Speaker({x,y,label}){return <div className="audio3a__speaker" style={{left:x,top:y}}><i/><span>{label}</span></div>}
function Control({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Trait({label,value}){return <div className="audio3a__trait"><small>{label}</small><strong>{value}</strong></div>}
