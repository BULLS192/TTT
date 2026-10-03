'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const stages=[
  {p:0,label:'Problem',title:'The amplifier has nowhere clean to live.',copy:'The hardware fits electrically, but not physically. Trim, service access and cable routing are all competing for the same space.'},
  {p:25,label:'Capture',title:'Capture the real packaging envelope.',copy:'TTT measures the actual cavity, factory mounting points and keep-out zones so the design starts from the vehicle—not from guesswork.'},
  {p:50,label:'CAD',title:'Engineer the interface around the car.',copy:'A vehicle-specific bracket is designed around real datums, access requirements and the amplifier footprint.'},
  {p:75,label:'Custom Part',title:'Turn the digital solution into a physical part.',copy:'The engineered bracket becomes the interface that the vehicle never came with.'},
  {p:100,label:'Installed',title:'Finish with an OEM-like, serviceable result.',copy:'The amplifier is mounted securely, wiring is controlled and the hidden structure remains accessible for future service.'}
];

const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const lerp=(a,b,t)=>a+(b-a)*t;

export default function FabricationLab(){
  const[progress,setProgress]=useState(0);
  const[playing,setPlaying]=useState(false);
  const[reveal,setReveal]=useState(52);
  const raf=useRef(null);
  const startAt=useRef(null);
  const startProgress=useRef(0);
  const{addItem,setOpen}=useTTTBuild();

  const stageIndex=useMemo(()=>{
    if(progress<13)return 0;
    if(progress<38)return 1;
    if(progress<63)return 2;
    if(progress<88)return 3;
    return 4;
  },[progress]);
  const stage=stages[stageIndex];

  useEffect(()=>{
    if(!playing)return;
    startAt.current=null;
    startProgress.current=progress;
    const duration=Math.max(1000,(100-progress)*95);
    const tick=(now)=>{
      if(startAt.current==null)startAt.current=now;
      const t=clamp((now-startAt.current)/duration,0,1);
      setProgress(lerp(startProgress.current,100,t));
      if(t<1)raf.current=requestAnimationFrame(tick);
      else setPlaying(false);
    };
    raf.current=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf.current);
  },[playing]);

  useEffect(()=>()=>cancelAnimationFrame(raf.current),[]);

  const engineeringOpacity=clamp((progress-14)/14,0,1)*(1-clamp((progress-76)/14,0,1));
  const installedOpacity=clamp((progress-68)/24,0,1);
  const problemOpacity=1-clamp((progress-8)/24,0,1);
  const scanStrength=clamp((progress-14)/14,0,1)*(1-clamp((progress-38)/12,0,1));
  const cadStrength=clamp((progress-36)/15,0,1)*(1-clamp((progress-72)/16,0,1));
  const partStrength=clamp((progress-58)/18,0,1)*(1-clamp((progress-90)/12,0,1));

  const aside=<>
    <div className="lab-readout fab3n__readout">
      <small>AMPLIFIER MOUNT · CONCEPT ONE</small>
      <strong>{stage.label}</strong>
      <p>{stage.copy}</p>
    </div>
    <div className="fab3n__aside-grid">
      <Readout label="Packaging issue" value="No clean factory mounting point"/>
      <Readout label="Capture method" value="Scan + key measurements"/>
      <Readout label="Design intent" value="Secure · hidden · serviceable"/>
      <Readout label="Result" value={stageIndex===4?'Vehicle-specific installed mount':'Engineering in progress'}/>
    </div>
    <p className="lab-note">Illustrative Concept One example. Final bracket material, fasteners, tolerances and manufacturing method would be engineered for the actual vehicle and hardware.</p>
    <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:'Amplifier mount',detail:'Vehicle-specific scan → CAD → custom mount → installed solution'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Fabrication Lab"
    title="Solve the fitment problem the vehicle did not plan for."
    description="Drag through the same real installation area from awkward hardware placement to measured geometry, engineered mounting and the finished result."
    aside={aside}
  >
    <div className="fab3n">
      <section className="fab3n__scene" aria-label="Interactive amplifier fitment transformation">
        <AssetMedia visual="fabricationFitmentProblem" className="fab3n__image fab3n__image--problem" priority/>
        <AssetMedia visual="fabricationFitmentEngineering" className="fab3n__image fab3n__image--engineering" priority/>
        <AssetMedia visual="fabricationFitmentInstalled" className="fab3n__image fab3n__image--installed" priority/>

        <div className="fab3n__image-state fab3n__image-state--problem" style={{opacity:problemOpacity}}/>
        <div className="fab3n__image-state fab3n__image-state--engineering" style={{opacity:engineeringOpacity}}/>
        <div className="fab3n__image-state fab3n__image-state--installed" style={{opacity:installedOpacity}}/>

        <header className="fab3n__topbar">
          <div>
            <span><i/>{playing?'TRANSFORMATION PLAYING':'AMPLIFIER FITMENT STUDY'}</span>
            <strong>Concept One · Rear electronics bay</strong>
          </div>
          <div className="fab3n__stage-chip"><b>{String(stageIndex+1).padStart(2,'0')}</b><span>{stage.label.toUpperCase()}</span></div>
        </header>

        <div className="fab3n__problem-note" style={{opacity:problemOpacity}}>
          <Icon name="alert"/>
          <div><small>FITMENT PROBLEM</small><strong>Loose placement crowds the cavity and service path.</strong></div>
        </div>

        <div className="fab3n__scan-layer" style={{opacity:scanStrength}}>
          <div className="fab3n__scan-sweep" style={{left:(8+((progress-14)/24)*82)+'%'}}/>
          <div className="fab3n__scan-points">
            {Array.from({length:28},(_,i)=><i key={i} style={{'--x':((i*31)%88+6)+'%','--y':((i*47)%76+12)+'%','--d':((i%7)*-.08)+'s'}}/>)}
          </div>
          <div className="fab3n__capture-tag"><Icon name="scan"/><span><small>VEHICLE CAPTURE</small><strong>Datums · mounting points · keep-out zone</strong></span></div>
        </div>

        <div className="fab3n__cad-layer" style={{opacity:cadStrength}}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="fab3n__cad-pocket" d="M23 21 H78 L86 31 V73 L78 82 H22 L14 71 V31 Z"/>
            <path className="fab3n__cad-bracket" d="M29 30 H72 L78 37 V67 L71 73 H28 L21 65 V37 Z"/>
            <path className="fab3n__cad-inner" d="M34 38 H67 V65 H34 Z"/>
            <circle cx="28" cy="72" r="2.3"/><circle cx="73" cy="72" r="2.3"/>
            <path className="fab3n__cad-datum" d="M50 15 V86 M12 52 H88"/>
          </svg>
          <div className="fab3n__cad-tag"><Icon name="cube"/><span><small>CAD SOLUTION</small><strong>Vehicle-specific amplifier bracket</strong></span></div>
        </div>

        <div className="fab3n__part-layer" style={{opacity:partStrength,transform:`translate(-50%,-50%) scale(${.9+partStrength*.1})`}}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs><linearGradient id="fab3n-metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8799a5"/><stop offset=".36" stopColor="#33434d"/><stop offset=".72" stopColor="#121b21"/><stop offset="1" stopColor="#617480"/></linearGradient></defs>
            <path d="M18 30 H82 L88 40 V70 L78 79 H22 L12 68 V40 Z" fill="url(#fab3n-metal)" stroke="#a9bdc9" strokeWidth=".8"/>
            <path d="M27 39 H73 V66 H27 Z" fill="#071016" stroke="#819cab" strokeWidth=".7"/>
            <circle cx="20" cy="73" r="4" fill="#0a1116" stroke="#bdd0da"/>
            <circle cx="80" cy="73" r="4" fill="#0a1116" stroke="#bdd0da"/>
            <path d="M24 34 C42 27 61 27 77 34" fill="none" stroke="rgba(224,239,246,.55)" strokeWidth=".8"/>
          </svg>
          <span>CUSTOM MOUNT</span>
        </div>

        {stageIndex===4?<div className="fab3n__hidden-layer" style={{clipPath:`inset(0 ${100-reveal}% 0 0)`}}>
          <AssetMedia visual="fabricationFitmentEngineering" className="fab3n__hidden-image"/>
          <div className="fab3n__hidden-tint"/>
          <div className="fab3n__hidden-bracket">
            <span>CUSTOM BRACKET</span>
            <i className="fab3n__mount fab3n__mount--1"/><i className="fab3n__mount fab3n__mount--2"/>
          </div>
          <div className="fab3n__wire fab3n__wire--1"/><div className="fab3n__wire fab3n__wire--2"/>
          <div className="fab3n__callout fab3n__callout--mount"><i/>FACTORY DATUM</div>
          <div className="fab3n__callout fab3n__callout--service"><i/>SERVICE ACCESS</div>
          <b>HIDDEN WORK</b>
        </div>:null}

        {stageIndex===4?<div className="fab3n__divider" style={{left:reveal+'%'}}><i>↔</i></div>:null}

        <div className="fab3n__scene-copy">
          <small>{stage.label.toUpperCase()}</small>
          <strong>{stage.title}</strong>
          <p>{stage.copy}</p>
        </div>
      </section>

      <div className="fab3n__timeline">
        <div className="fab3n__timeline-head"><span><Icon name="transform"/>ENGINEERING TRANSFORMATION</span><small>{Math.round(progress)}%</small></div>
        <input aria-label="Fabrication transformation progress" type="range" min="0" max="100" step=".1" value={progress} onChange={e=>{setPlaying(false);setProgress(Number(e.target.value))}}/>
        <div className="fab3n__stops">
          {stages.map(s=><button key={s.p} type="button" className={progress>=s.p?'is-complete':''} onClick={()=>{setPlaying(false);setProgress(s.p)}}><i/><span>{s.label}</span></button>)}
        </div>
        <div className="fab3n__actions">
          <button className="button button--ghost" onClick={()=>{setPlaying(false);setProgress(0)}}>Reset</button>
          <button className="button" disabled={progress>=100&&!playing} onClick={()=>setPlaying(v=>!v)}>{playing?'❚❚ Pause transformation':progress>0?'▶ Continue transformation':'▶ Solve fitment'}</button>
        </div>
      </div>

      {stageIndex===4?<div className="fab3n__reveal-control">
        <div><Icon name="xray"/><span><small>FINISHED / HIDDEN WORK</small><strong>Drag to reveal what makes the clean installation possible.</strong></span></div>
        <b>{reveal}% hidden</b>
        <input aria-label="Reveal hidden fabrication work" type="range" min="8" max="92" value={reveal} onChange={e=>setReveal(Number(e.target.value))}/>
      </div>:null}
    </div>
  </ExperienceShell>;
}

function Readout({label,value}){return <div><small>{label}</small><strong>{value}</strong></div>}

function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.7',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    scan:<><path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4"/><path d="M7 12h10M12 7v10"/></>,
    cube:<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
    transform:<><path d="M4 7h13l-3-3M20 17H7l3 3"/><path d="M17 4l3 3-3 3M7 14l-3 3 3 3"/></>,
    xray:<><circle cx="12" cy="12" r="8"/><path d="M8 8l8 8M16 8l-8 8"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.cube}</svg>;
}
