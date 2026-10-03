'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const stages=[
  {p:0,label:'Problem',title:'The amplifier does not have a clean home.',copy:'An off-the-shelf placement conflicts with trim, access and cable routing.'},
  {p:25,label:'Scan',title:'Capture the space that actually exists.',copy:'TTT measures and scans the vehicle packaging envelope, mounting points and keep-out zones.'},
  {p:50,label:'CAD',title:'Design around the vehicle—not around a box.',copy:'The custom mount is built around real datums, clearance zones and service requirements.'},
  {p:75,label:'Custom Part',title:'Turn the digital solution into a physical component.',copy:'The engineered bracket becomes a real part designed for this exact packaging problem.'},
  {p:100,label:'Installed',title:'Finish with a clean, serviceable installation.',copy:'The amplifier sits securely in the vehicle with hidden structure doing the work behind the trim.'}
];

function lerp(a,b,t){return a+(b-a)*t}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}

export default function FabricationLab(){
  const[progress,setProgress]=useState(0);
  const[playing,setPlaying]=useState(false);
  const[hidden,setHidden]=useState(58);
  const rafRef=useRef(null);
  const startRef=useRef(null);
  const startProgressRef=useRef(0);
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
    startRef.current=null;
    startProgressRef.current=progress;
    const duration=Math.max(1200,(100-progress)*105);
    const tick=(now)=>{
      if(startRef.current==null)startRef.current=now;
      const t=clamp((now-startRef.current)/duration,0,1);
      setProgress(lerp(startProgressRef.current,100,t));
      if(t<1)rafRef.current=requestAnimationFrame(tick);
      else setPlaying(false);
    };
    rafRef.current=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(rafRef.current);
  },[playing]);

  useEffect(()=>()=>cancelAnimationFrame(rafRef.current),[]);

  const aside=<>
    <div className="lab-readout fab3l__readout">
      <small>AMPLIFIER MOUNT · LIVE DEMO</small>
      <strong>{stage.label}</strong>
      <p>{stage.copy}</p>
    </div>
    <div className="fab3l__aside-grid">
      <Readout label="Problem" value="No clean factory mounting point"/>
      <Readout label="Vehicle data" value="Scan + key measurements"/>
      <Readout label="Design goal" value="Secure · hidden · serviceable"/>
      <Readout label="Result" value={stageIndex===4?'Vehicle-specific installed mount':'Engineering in progress'}/>
    </div>
    <p className="lab-note">Illustrative Concept One fabrication showcase. Final material, tolerances, fasteners and manufacturing method would be engineered for the actual vehicle and hardware.</p>
    <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:'Amplifier mount',detail:'Vehicle-specific scan → CAD → custom mount → installed solution'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Fabrication Lab"
    title="When the part does not fit the vehicle, engineer the interface."
    description="Drag through one real fitment problem from awkward off-the-shelf placement to scanned vehicle geometry, CAD, custom hardware and the finished installation."
    aside={aside}
  >
    <div className="fab3l">
      <section className="fab3l__scene" aria-label="Interactive custom amplifier mount transformation">
        <div className="fab3m__bay" aria-hidden="true">
          <div className="fab3m__trim fab3m__trim--left"/>
          <div className="fab3m__trim fab3m__trim--right"/>
          <div className="fab3m__focus-pocket">
            <div className="fab3m__rail fab3m__rail--top"><i/><i/><i/></div>
            <div className="fab3m__rail fab3m__rail--bottom"><i/><i/><i/></div>
            <div className="fab3m__service-opening"/>
            <div className="fab3m__bay-datum fab3m__bay-datum--v"/>
            <div className="fab3m__bay-datum fab3m__bay-datum--h"/>
          </div>
          <div className="fab3m__floor"/>
          <div className="fab3m__bay-label"><span>CONCEPT ONE</span><strong>Rear electronics bay</strong><small>Focused packaging zone</small></div>
        </div>

        <header className="fab3l__scene-head">
          <div><span><i/>{playing?'ENGINEERING SEQUENCE PLAYING':'AMPLIFIER FITMENT STUDY'}</span><strong>Concept One · Rear electronics packaging</strong></div>
          <div className="fab3l__stage-badge"><b>{String(stageIndex+1).padStart(2,'0')}</b><span>{stage.label.toUpperCase()}</span></div>
        </header>

        <div className={'fab3l__problem '+(progress>=22?'is-resolving':'')}>
          <div className="fab3l__amp">
            <span>AMPLIFIER</span><i/><b/>
          </div>
          <div className="fab3l__collision">
            <Icon name="alert"/>
            <span><strong>INTERFERENCE</strong><small>Trim / service envelope conflict</small></span>
          </div>
        </div>

        <div className="fab3l__scan" style={{opacity:clamp((progress-12)/18,0,1)*(1-clamp((progress-42)/15,0,1))}}>
          <div className="fab3l__scan-grid">{Array.from({length:40},(_,i)=><i key={i} style={{'--x':((i*37)%94+3)+'%','--y':((i*53)%88+6)+'%','--d':((i%9)*-.09)+'s'}}/>)}</div>
          <div className="fab3l__scan-line" style={{top:(18+((progress-12)/30)*62)+'%'}}/>
          <div className="fab3l__scan-label"><Icon name="scan"/><span><small>VEHICLE GEOMETRY CAPTURE</small><strong>Mounting points · clearance · keep-out zones</strong></span></div>
        </div>

        <div className="fab3l__cad" style={{opacity:clamp((progress-36)/18,0,1)*(1-clamp((progress-72)/18,0,1))}}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <linearGradient id="cad-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="rgba(65,164,225,.28)"/><stop offset="1" stopColor="rgba(26,85,125,.08)"/></linearGradient>
            </defs>
            <path className="fab3l__cad-envelope" d="M12 26H88V78H12Z"/>
            <path className="fab3l__cad-bracket" d="M22 34 H77 L84 43 V68 L76 74 H25 L17 65 V43 Z"/>
            <path className="fab3l__cad-inner" d="M30 42H70V64H30Z"/>
            <circle cx="23" cy="72" r="3"/><circle cx="77" cy="72" r="3"/>
            <path className="fab3l__cad-datum" d="M50 15V87M8 53H92"/>
            <path className="fab3l__cad-measure" d="M17 83H84M14 80v6M86 80v6"/>
          </svg>
          <div className="fab3l__cad-label fab3l__cad-label--a">A · mounting datum</div>
          <div className="fab3l__cad-label fab3l__cad-label--b">B · cable relief</div>
          <div className="fab3l__cad-label fab3l__cad-label--c">C · trim clearance</div>
          <div className="fab3l__cad-title"><Icon name="cube"/><span><small>CAD SOLUTION · R2</small><strong>Vehicle-specific amplifier mount</strong></span></div>
        </div>

        <div className="fab3l__part" style={{opacity:clamp((progress-62)/16,0,1),transform:`translate(-50%,-50%) scale(${.82+clamp((progress-62)/25,0,1)*.18})`}}>
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8095a3"/><stop offset=".38" stopColor="#2e3c45"/><stop offset=".68" stopColor="#111a20"/><stop offset="1" stopColor="#566b78"/></linearGradient></defs>
            <path d="M18 30H82L88 40V71L78 79H22L12 68V40Z" fill="url(#metal)"/>
            <path d="M26 39H74V66H26Z" fill="#071016" stroke="#93afbf" strokeWidth="1"/>
            <circle cx="20" cy="73" r="4" fill="#0a1116" stroke="#b1c7d4"/><circle cx="80" cy="73" r="4" fill="#0a1116" stroke="#b1c7d4"/>
            <path d="M24 34C41 27 62 27 78 34" fill="none" stroke="rgba(220,236,244,.58)" strokeWidth=".8"/>
          </svg>
          <span>CUSTOM MOUNT</span>
        </div>

        <div className="fab3l__installed" style={{opacity:clamp((progress-82)/14,0,1)}}>
          <div className="fab3l__mount-final">
            <div className="fab3l__bracket-final"/>
            <div className="fab3l__amp-final"><span>TTT AUDIO</span><i/><b/></div>
          </div>
          <div className="fab3l__installed-callout"><Icon name="verified"/><span><small>INSTALLED SOLUTION</small><strong>Secure · concealed · serviceable</strong></span></div>
        </div>

        {stageIndex===4?<div className="fab3m__hidden-reveal" style={{clipPath:`inset(0 ${100-hidden}% 0 0)`}}>
          <div className="fab3m__hidden-surface"/>
          <div className="fab3m__hidden-bracket">
            <div className="fab3m__hidden-amp"><span>AMPLIFIER</span></div>
            <i className="fab3m__fastener fab3m__fastener--1"/><i className="fab3m__fastener fab3m__fastener--2"/>
          </div>
          <div className="fab3m__hidden-cable fab3m__hidden-cable--1"/><div className="fab3m__hidden-cable fab3m__hidden-cable--2"/>
          <div className="fab3m__hidden-callout fab3m__hidden-callout--mount"><i/>FACTORY DATUM</div>
          <div className="fab3m__hidden-callout fab3m__hidden-callout--service"><i/>SERVICE ACCESS</div>
          <span className="fab3m__hidden-label">HIDDEN WORK</span>
        </div>:null}
        {stageIndex===4?<div className="fab3m__reveal-divider" style={{left:hidden+'%'}} aria-hidden="true"><i>↔</i></div>:null}

        <div className="fab3l__scene-copy">
          <small>{stage.label.toUpperCase()}</small>
          <strong>{stage.title}</strong>
          <p>{stage.copy}</p>
        </div>
      </section>

      <aside className="fab3l__right">
        <div className="fab3l__right-head"><span><Icon name="project"/>PROJECT SOLVER</span><b>{Math.round(progress)}%</b></div>
        <div className="fab3l__milestones">
          {stages.map((s,i)=><button type="button" key={s.label} className={stageIndex===i?'is-active':progress>=s.p?'is-complete':''} onClick={()=>{setPlaying(false);setProgress(s.p)}}>
            <i>{String(i+1).padStart(2,'0')}</i>
            <span><strong>{s.label}</strong><small>{s.title}</small></span>
            <Icon name={i===0?'alert':i===1?'scan':i===2?'cube':i===3?'part':'verified'}/>
          </button>)}
        </div>
        <div className="fab3l__constraints">
          <small>WHAT THE DESIGN HAS TO PRESERVE</small>
          <div><Icon name="trim"/><span>Trim clearance</span><b>{progress>=50?'CHECKED':'INPUT'}</b></div>
          <div><Icon name="service"/><span>Service access</span><b>{progress>=50?'CHECKED':'INPUT'}</b></div>
          <div><Icon name="wire"/><span>Cable routing</span><b>{progress>=50?'CHECKED':'INPUT'}</b></div>
        </div>
      </aside>
    </div>

    <div className="fab3l__timeline">
      <div className="fab3l__timeline-head"><span><Icon name="transform"/>ENGINEERING TRANSFORMATION</span><small>Drag continuously or jump to a stage</small></div>
      <input aria-label="Fabrication transformation progress" type="range" min="0" max="100" step=".1" value={progress} onChange={e=>{setPlaying(false);setProgress(Number(e.target.value))}}/>
      <div>{stages.map(s=><button key={s.p} type="button" className={progress>=s.p?'is-complete':''} onClick={()=>{setPlaying(false);setProgress(s.p)}}><i/><span>{s.label}</span></button>)}</div>
      <div className="fab3l__timeline-actions">
        <button className="button button--ghost" onClick={()=>{setPlaying(false);setProgress(0)}}>Reset</button>
        <button className="button" disabled={progress>=100&&!playing} onClick={()=>setPlaying(v=>!v)}>{playing?'❚❚ Pause transformation':progress>0?'▶ Continue transformation':'▶ Solve fitment'}</button>
      </div>
    </div>

    {stageIndex===4?<div className="fab3m__hidden-control">
      <div><Icon name="xray"/><span><small>FINISHED VEHICLE / HIDDEN WORK</small><strong>Reveal the bracket, fasteners and routing beneath the finished installation.</strong></span></div>
      <b>{hidden}% hidden work</b>
      <input aria-label="Reveal hidden fabrication work" type="range" min="8" max="92" value={hidden} onChange={e=>setHidden(Number(e.target.value))}/>
    </div>:null}
  </ExperienceShell>;
}

function Readout({label,value}){return <div><small>{label}</small><strong>{value}</strong></div>}

function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.7',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    scan:<><path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4"/><path d="M7 12h10M12 7v10"/></>,
    cube:<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
    part:<><path d="M4 8h16v10H4z"/><path d="M7 8V5h10v3M8 18v2M16 18v2"/></>,
    verified:<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
    project:<><path d="M4 5h6l2 2h8v12H4V5Z"/><path d="M8 12h8M8 15h5"/></>,
    trim:<><path d="M4 17 8 7h8l4 10"/><path d="M7 17h10"/></>,
    service:<><path d="m14 6 4-4 4 4-4 4-4-4Z"/><path d="M18 10v8M18 18H7"/><circle cx="5" cy="18" r="2"/></>,
    wire:<><path d="M3 8h6a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3h6"/><circle cx="4" cy="8" r="1.5"/><circle cx="20" cy="16" r="1.5"/></>,
    transform:<><path d="M4 7h13l-3-3M20 17H7l3 3"/><path d="M17 4l3 3-3 3M7 14l-3 3 3 3"/></>,
    xray:<><circle cx="12" cy="12" r="8"/><path d="M8 8l8 8M16 8l-8 8"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.project}</svg>;
}
