'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const MODES={
  Factory:{
    stage:'Near-side pull',detail:'Softened',bass:'Loose',headroom:'Limited',
    copy:'Factory playback is intentionally constrained and seat-biased so you can hear what cabin geometry does before tuning.',
    spread:38,cutoff:4300,high:-4,low:2.5,ratio:4.8,threshold:-26,pan:.34,makeup:.82,
    curve:'M4 28 C18 24 30 24 42 28 S66 40 96 45'
  },
  'Speaker Upgrade':{
    stage:'More open',detail:'Improved',bass:'Tighter',headroom:'Moderate',
    copy:'Better speakers reveal more detail, but the image can still lean toward the nearer side without calibration.',
    spread:52,cutoff:9800,high:.5,low:1,ratio:3.2,threshold:-23,pan:.22,makeup:.78,
    curve:'M4 29 C18 25 33 23 50 24 S72 29 96 32'
  },
  Amplified:{
    stage:'More controlled',detail:'Clear',bass:'Controlled',headroom:'Higher',
    copy:'Additional controlled power adds composure and headroom while preserving the same listening position.',
    spread:66,cutoff:15000,high:1.5,low:2.2,ratio:2.2,threshold:-20,pan:.11,makeup:.72,
    curve:'M4 28 C18 22 34 21 52 22 S76 24 96 25'
  },
  'DSP Tuned':{
    stage:'Centered target seat',detail:'Focused',bass:'Integrated',headroom:'Balanced',
    copy:'Timing, level and tonal balance are coordinated around the selected seat so the image moves toward the center instead of the nearest speaker.',
    spread:78,cutoff:18500,high:2,low:1.4,ratio:2,threshold:-18,pan:0,makeup:.70,
    curve:'M4 27 C20 22 36 22 54 22 S76 22 96 23'
  }
};
const MODE_NAMES=Object.keys(MODES);
const BASS=[110,110,146.83,98];
const LEAD=[440,523.25,659.25,523.25,392,523.25,587.33,493.88];

export default function AudioLab(){
  const[selectedMode,setSelectedMode]=useState('DSP Tuned');
  const[viewMode,setViewMode]=useState('Cabin');
  const[listener,setListener]=useState('Driver');
  const[playing,setPlaying]=useState(false);
  const[abFactory,setAbFactory]=useState(false);
  const[error,setError]=useState('');
  const[elapsed,setElapsed]=useState(0);
  const engineRef=useRef(null);
  const uiTimerRef=useRef(null);
  const{addItem,setOpen}=useTTTBuild();

  const demoMode=abFactory?'Factory':selectedMode;
  const mode=MODES[demoMode];
  const bias=demoMode==='DSP Tuned'?0:mode.pan*(listener==='Driver'?-1:1);
  const stageX=50+bias*34;
  const activeSeat=listener==='Driver'?'35%':'65%';

  useEffect(()=>{
    updateEngine(engineRef.current,demoMode,listener);
  },[demoMode,listener]);

  useEffect(()=>()=>stopEngine(),[]);

  function stopEngine(){
    clearInterval(uiTimerRef.current);
    uiTimerRef.current=null;
    const e=engineRef.current;
    if(e){
      clearInterval(e.scheduler);
      try{e.active.forEach(n=>n.stop?.())}catch{}
      try{e.ctx.close()}catch{}
    }
    engineRef.current=null;
    setPlaying(false);
    setElapsed(0);
  }

  async function toggleAudio(){
    if(playing){stopEngine();return}
    const C=window.AudioContext||window.webkitAudioContext;
    if(!C){setError('Audio demo is not available in this browser.');return}
    try{
      const ctx=new C();
      await ctx.resume();
      const input=ctx.createGain();
      const lowShelf=ctx.createBiquadFilter();lowShelf.type='lowshelf';lowShelf.frequency.value=140;
      const highShelf=ctx.createBiquadFilter();highShelf.type='highshelf';highShelf.frequency.value=3500;
      const lowPass=ctx.createBiquadFilter();lowPass.type='lowpass';lowPass.Q.value=.65;
      const pan=ctx.createStereoPanner();
      const comp=ctx.createDynamicsCompressor();
      const master=ctx.createGain();
      input.connect(lowShelf).connect(highShelf).connect(lowPass).connect(pan).connect(comp).connect(master).connect(ctx.destination);

      const active=new Set();
      const engine={ctx,input,lowShelf,highShelf,lowPass,pan,comp,master,active,nextBeat:ctx.currentTime+.05,step:0,scheduler:null};
      engineRef.current=engine;
      updateEngine(engine,demoMode,listener);
      engine.scheduler=setInterval(()=>scheduleAhead(engine),45);
      scheduleAhead(engine);
      setPlaying(true);setError('');setElapsed(0);
      const started=performance.now();
      uiTimerRef.current=setInterval(()=>setElapsed(((performance.now()-started)/1000)%8),80);
    }catch{
      setError('The listening demo could not start. Try pressing Play again.');
      stopEngine();
    }
  }

  const aside=<>
    <div className="lab-readout audio3i__readout"><small>Live listening comparison</small><strong>{demoMode}</strong><p>{mode.copy}</p></div>
    <div className="audio3i__traits">
      <Trait icon="stage" label="Stage" value={mode.stage}/>
      <Trait icon="detail" label="Detail" value={mode.detail}/>
      <Trait icon="bass" label="Bass" value={mode.bass}/>
      <Trait icon="headroom" label="Headroom" value={mode.headroom}/>
    </div>
    <button className="button audio3i__play" onClick={toggleAudio}>{playing?'❚❚ Pause reference track':'▶ Play reference track'}</button>
    <button className="button button--ghost audio3i__ab" disabled={selectedMode==='Factory'} onClick={()=>setAbFactory(v=>!v)}>
      <span>{abFactory?'A · FACTORY':'B · '+selectedMode.toUpperCase()}</span><b>↔</b><span>{abFactory?'B · '+selectedMode.toUpperCase():'A · FACTORY'}</span>
    </button>
    {error?<p className="audio3a__error" role="status">{error}</p>:null}
    <p className="lab-note">Original synthetic reference track processed live in your browser. It is volume-matched and illustrative, not a recording of a specific vehicle or product. Headphones make the seat-position effect easiest to hear.</p>
    <button className="button button--ghost" onClick={()=>{addItem({id:'audio',category:'Automotive Audio',title:selectedMode,detail:'Listening position · '+listener});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Listening Room"
    title="Hear the system change—not just the diagram."
    description="Play one reference track continuously, switch stages without restarting it, and compare how speaker quality, controlled power and DSP change the perceived presentation."
    aside={aside}
  >
    <div className={'audio3i '+(playing?'is-playing':'')}>
      <section className={'audio3i__visual audio3j__visual is-'+viewMode.toLowerCase()} aria-label="Concept One audio listening visualizer">
        <div className="audio3j__visual-source">
          {viewMode==='Cabin'?<>
            <img className="audio3j__cabin-image" src="/visuals/window-tint/concept-one-driver-day.avif" alt="Concept One cabin viewed from the driver area"/>
            <div className="audio3j__cabin-grade"/>
            <div className="audio3j__windshield-stage" style={{'--stage-x':stageX+'%','--stage-width':mode.spread+'%'}}>
              <div className="audio3j__stage-horizon"/>
              <div className="audio3j__stage-bed"/>
              <span className="audio3j__instrument audio3j__instrument--left" style={{left:(stageX-mode.spread*.26)+'%'}}>L</span>
              <span className="audio3j__instrument audio3j__instrument--vocal" style={{left:stageX+'%'}}>VOCAL</span>
              <span className="audio3j__instrument audio3j__instrument--right" style={{left:(stageX+mode.spread*.26)+'%'}}>R</span>
              <div className="audio3j__focus" style={{left:stageX+'%'}}><i/><span>{demoMode==='DSP Tuned'?'CENTERED IMAGE':'PERCEIVED IMAGE'}</span></div>
            </div>
            <CabinSpeaker x="8%" y="38%" label="LT" active={playing}/>
            <CabinSpeaker x="92%" y="38%" label="RT" active={playing}/>
            <CabinSpeaker x="7%" y="69%" label="LD" active={playing}/>
            <CabinSpeaker x="93%" y="69%" label="RD" active={playing}/>
            <div className={'audio3j__listener audio3j__listener--'+listener.toLowerCase()}>
              <Icon name="seat"/><span>{listener.toUpperCase()} REFERENCE</span>
            </div>
          </>:<>
            <AssetMedia visual="audioPlacement" className="audio3i__photo audio3j__system-image"/>
            <div className="audio3i__shade"/>
            <div className="audio3i__stage-shell">
              <div className="audio3i__stage-orbit" style={{left:stageX+'%',width:mode.spread+'%'}}>
                <div className="audio3i__stage-glow"/>
                <div className="audio3i__stage-axis"/>
                <div className="audio3i__stage-center"><i/><span>PERCEIVED IMAGE</span></div>
              </div>
            </div>
            <Speaker x="14%" y="22%" label="LF" active={playing}/>
            <Speaker x="86%" y="22%" label="RF" active={playing}/>
            <Speaker x="14%" y="72%" label="LR" active={playing}/>
            <Speaker x="86%" y="72%" label="RR" active={playing}/>
            <div className="audio3i__seat-marker" style={{left:activeSeat}}><Icon name="seat"/><span>{listener.toUpperCase()}</span></div>
            <svg className="audio3i__paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path className="near" d={listener==='Driver'?'M14 22 C22 34 29 48 35 68':'M14 22 C28 34 47 48 65 68'}/>
              <path className="far" d={listener==='Driver'?'M86 22 C70 34 51 48 35 68':'M86 22 C78 34 71 48 65 68'}/>
            </svg>
          </>}
        </div>

        <div className="audio3i__topbar audio3j__topbar">
          <div><span className="audio3i__live"><i/>{playing?'REFERENCE PLAYING':'REFERENCE READY'}</span><strong>Concept One · Listening Room</strong></div>
          <div className="audio3j__top-controls">
            <div className="audio3j__view-switch" role="group" aria-label="Audio visualization">
              {['Cabin','System'].map(v=><button key={v} className={viewMode===v?'is-active':''} aria-pressed={viewMode===v} onClick={()=>setViewMode(v)}><Icon name={v==='Cabin'?'cabin':'system'}/>{v}</button>)}
            </div>
            <div className="audio3i__seat-switch" role="group" aria-label="Listening position">
              {['Driver','Passenger'].map(v=><button key={v} className={listener===v?'is-active':''} aria-pressed={listener===v} onClick={()=>setListener(v)}><Icon name="seat"/>{v}</button>)}
            </div>
          </div>
        </div>

        <div className="audio3i__reference audio3j__reference">
          <div className="audio3i__reference-head"><span><Icon name="wave"/>ORIGINAL TTT REFERENCE LOOP</span><b>{formatClock(elapsed)} / 0:08</b></div>
          <div className="audio3i__waveform" aria-hidden="true">{Array.from({length:36},(_,i)=><i key={i} style={{'--bar':.25+((i*17)%13)/18,'--delay':(i%9)*-.08+'s'}}/>)}</div>
          <div className="audio3i__track"><i style={{width:(elapsed/8*100)+'%'}}/></div>
        </div>
      </section>

      <section className="audio3i__dashboard">
        <div className="audio3i__dashboard-head"><div><small>ACTIVE PROCESSING</small><strong>{demoMode}</strong></div><span><i/>{playing?'LIVE':'READY'}</span></div>

        <div className="audio3j__active-mode">
          <div className="audio3j__active-icon"><Icon name={demoMode==='Factory'?'factory':demoMode==='Speaker Upgrade'?'speaker':demoMode==='Amplified'?'amp':'dsp'}/></div>
          <div><small>ACTIVE LISTENING STAGE</small><strong>{demoMode}</strong><p>{mode.copy}</p></div>
          <span>{listener}</span>
        </div>

        <div className="audio3i__mode-list">
          {MODE_NAMES.map((name,i)=>{
            const d=MODES[name];
            return <button key={name} className={selectedMode===name&&!abFactory?'is-active':''} aria-pressed={selectedMode===name&&!abFactory} onClick={()=>{setSelectedMode(name);setAbFactory(false)}}>
              <small>{String(i+1).padStart(2,'0')}</small>
              <span><strong>{name}</strong><em>{d.stage}</em></span>
              <Icon name={name==='Factory'?'factory':name==='Speaker Upgrade'?'speaker':name==='Amplified'?'amp':'dsp'}/>
            </button>
          })}
        </div>

        <div className="audio3i__response">
          <div><small>RELATIVE TONAL SHAPE</small><span>Illustrative</span></div>
          <svg viewBox="0 0 100 52" preserveAspectRatio="none" aria-hidden="true">
            <path className="grid" d="M0 13H100M0 26H100M0 39H100M20 0V52M40 0V52M60 0V52M80 0V52"/>
            <path className="curve" d={mode.curve}/>
          </svg>
        </div>

        <div className="audio3i__balance">
          <div><small>LEFT</small><strong>{listener==='Driver'?'NEAR':'FAR'}</strong></div>
          <div className="audio3i__balance-line"><i style={{left:stageX+'%'}}/></div>
          <div><small>RIGHT</small><strong>{listener==='Passenger'?'NEAR':'FAR'}</strong></div>
        </div>

        <div className="audio3i__summary">
          <Metric label="Image" value={mode.stage}/>
          <Metric label="Detail" value={mode.detail}/>
          <Metric label="Dynamics" value={mode.headroom}/>
        </div>
      </section>
    </div>
  </ExperienceShell>;
}

function scheduleAhead(engine){
  if(!engine?.ctx||engine.ctx.state==='closed')return;
  const horizon=engine.ctx.currentTime+.22;
  while(engine.nextBeat<horizon){
    scheduleStep(engine,engine.step,engine.nextBeat);
    engine.nextBeat+=.25;
    engine.step=(engine.step+1)%32;
  }
}

function scheduleStep(engine,step,time){
  const beat=step%4;
  if(beat===0)kick(engine,time);
  if(step%2===0)hat(engine,time);
  if(step%4===0)bass(engine,time,BASS[(step/4)%BASS.length]);
  if(step%2===0)tone(engine,time,LEAD[(step/2)%LEAD.length],.13,'triangle',step%4===0?-.22:.24);
  if(step%8===0){
    [220,277.18,329.63].forEach((f,i)=>tone(engine,time,f,.7,'sine',[-.38,0,.38][i],.035));
  }
}

function connectVoice(engine,node,gain,pan=0){
  const p=engine.ctx.createStereoPanner();
  p.pan.value=pan;
  node.connect(gain).connect(p).connect(engine.input);
}

function tone(engine,time,freq,duration,type='sine',pan=0,level=.075){
  const o=engine.ctx.createOscillator();
  const g=engine.ctx.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,time);
  g.gain.setValueAtTime(.0001,time);g.gain.exponentialRampToValueAtTime(level,time+.012);g.gain.exponentialRampToValueAtTime(.0001,time+duration);
  connectVoice(engine,o,g,pan);o.start(time);o.stop(time+duration+.03);
  engine.active.add(o);o.onended=()=>engine.active.delete(o);
}

function bass(engine,time,freq){
  const o=engine.ctx.createOscillator(),g=engine.ctx.createGain();
  o.type='sawtooth';o.frequency.setValueAtTime(freq,time);
  g.gain.setValueAtTime(.0001,time);g.gain.exponentialRampToValueAtTime(.11,time+.018);g.gain.exponentialRampToValueAtTime(.0001,time+.22);
  connectVoice(engine,o,g,-.04);o.start(time);o.stop(time+.25);engine.active.add(o);o.onended=()=>engine.active.delete(o);
}

function kick(engine,time){
  const o=engine.ctx.createOscillator(),g=engine.ctx.createGain();
  o.type='sine';o.frequency.setValueAtTime(105,time);o.frequency.exponentialRampToValueAtTime(46,time+.16);
  g.gain.setValueAtTime(.16,time);g.gain.exponentialRampToValueAtTime(.0001,time+.18);
  connectVoice(engine,o,g,0);o.start(time);o.stop(time+.2);engine.active.add(o);o.onended=()=>engine.active.delete(o);
}

function hat(engine,time){
  const length=Math.floor(engine.ctx.sampleRate*.04);
  const b=engine.ctx.createBuffer(1,length,engine.ctx.sampleRate);
  const data=b.getChannelData(0);
  for(let i=0;i<length;i++)data[i]=(Math.random()*2-1)*(1-i/length);
  const s=engine.ctx.createBufferSource(),hp=engine.ctx.createBiquadFilter(),g=engine.ctx.createGain(),p=engine.ctx.createStereoPanner();
  s.buffer=b;hp.type='highpass';hp.frequency.value=6500;g.gain.value=.025;p.pan.value=.28;
  s.connect(hp).connect(g).connect(p).connect(engine.input);s.start(time);s.stop(time+.05);engine.active.add(s);s.onended=()=>engine.active.delete(s);
}

function updateEngine(engine,modeName,listener){
  if(!engine?.ctx||engine.ctx.state==='closed')return;
  const m=MODES[modeName],now=engine.ctx.currentTime;
  const seat=listener==='Driver'?-1:1;
  const ramp=(param,value)=>{param.cancelScheduledValues(now);param.setValueAtTime(param.value,now);param.linearRampToValueAtTime(value,now+.16)};
  ramp(engine.lowPass.frequency,m.cutoff);
  ramp(engine.lowShelf.gain,m.low);
  ramp(engine.highShelf.gain,m.high);
  ramp(engine.pan.pan,m.pan*seat);
  ramp(engine.comp.threshold,m.threshold);
  ramp(engine.comp.ratio,m.ratio);
  ramp(engine.master.gain,m.makeup);
}

function CabinSpeaker({x,y,label,active}){return <div className={'audio3j__cabin-speaker '+(active?'is-active':'')} style={{left:x,top:y}}><i/><span>{label}</span></div>}
function Speaker({x,y,label,active}){return <div className={'audio3i__speaker '+(active?'is-active':'')} style={{left:x,top:y}}><div><i/><b/></div><span>{label}</span></div>}
function Trait({icon,label,value}){return <div className="audio3i__trait"><Icon name={icon}/><small>{label}</small><strong>{value}</strong></div>}
function Metric({label,value}){return <div><small>{label}</small><strong>{value}</strong></div>}
function formatClock(v){return '0:'+String(Math.floor(v)).padStart(2,'0')}

function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.7',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    seat:<><path d="M7 12V7a3 3 0 0 1 6 0v5"/><path d="M6 12h9a3 3 0 0 1 3 3v5M6 12v8M5 20h14"/></>,
    wave:<><path d="M3 12h2l2-6 3 12 3-9 2 6 2-3h4"/></>,
    stage:<><path d="M4 17c4-5 12-5 16 0"/><path d="M7 14c3-3 7-3 10 0"/><circle cx="12" cy="10" r="1"/></>,
    detail:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
    bass:<><path d="M4 12c2-6 4-6 6 0s4 6 6 0 4-6 4-6"/></>,
    headroom:<><path d="M4 18V9M8 18V5M12 18V8M16 18V3M20 18v-7"/></>,
    factory:<><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M8 9h8M8 13h5"/></>,
    speaker:<><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="8" r="1"/></>,
    amp:<><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 10h4M7 14h8M18 10v4"/></>,
    dsp:<><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 12h5M8 15h8"/></>,
    cabin:<><path d="M3 16c2-5 5-8 9-8s7 3 9 8"/><path d="M5 16h14M7 16v3M17 16v3M9 11h6"/></>,
    system:<><circle cx="12" cy="12" r="2"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.wave}</svg>;
}
