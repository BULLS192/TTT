'use client';

import { useEffect, useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const shades=[70,50,35,20,5];
const films={
  Dyed:{heat:'Entry',copy:'Privacy and glare control for a value-focused installation.',tone:'22,20,24'},
  Carbon:{heat:'Mid',copy:'A stable neutral appearance with improved heat-control potential.',tone:'7,12,17'},
  Ceramic:{heat:'Higher',copy:'Heat-control focused film without depending on the darkest appearance.',tone:'8,18,28'}
};
const environments={
  Day:{label:'Daylight'},
  Sunset:{label:'Low sun'},
  Night:{label:'Night'}
};
const scenes={
  Exterior:{
    Day:'/visuals/window-tint/concept-one-exterior-day.webp',
    Sunset:'/visuals/window-tint/concept-one-exterior-sunset.webp',
    Night:'/visuals/window-tint/concept-one-exterior-night.webp'
  },
  Driver:{
    Day:'/visuals/window-tint/concept-one-driver-day.webp',
    Sunset:'/visuals/window-tint/concept-one-driver-sunset.webp',
    Night:'/visuals/window-tint/concept-one-driver-night.webp'
  }
};
const shadeOpacity={70:.11,50:.21,35:.34,20:.49,5:.68};

export default function GlassLab(){
  const[shade,setShade]=useState(35);
  const[film,setFilm]=useState('Ceramic');
  const[environment,setEnvironment]=useState('Day');
  const[view,setView]=useState('Exterior');
  const[compare,setCompare]=useState(50);
  const{addItem,setOpen}=useTTTBuild();
  const data=films[film];
  const image=scenes[view][environment];
  const opacity=useMemo(()=>{
    const base=shadeOpacity[shade]||.34;
    if(view==='Driver'&&environment==='Night')return Math.min(.76,base*1.08);
    return base;
  },[shade,view,environment]);

  useEffect(()=>{
    Object.values(scenes).flatMap(group=>Object.values(group)).forEach(src=>{
      const img=new Image();
      img.src=src;
    });
  },[]);

  const add=()=>{
    addItem({id:'tint',category:'Window Tint',title:shade+'% '+film,detail:'Concept selection · '+environments[environment].label+' · '+view+' view'});
    setOpen(true);
  };

  const aside=<>
    <div className="lab-readout glass3b__readout"><small>Selected glass concept</small><strong>{shade}% {film}</strong><p>{data.copy}</p></div>
    <div className="glass3b__specs">
      <Spec label="Visible light" value={shade+'% VLT'} detail="Illustrative shade"/>
      <Spec label="Heat-control potential" value={data.heat} detail="Relative film family"/>
      <Spec label="View question" value={view==='Exterior'?'Privacy':'Outward visibility'} detail={view==='Exterior'?'Can people see in?':'What can the driver see out?'}/>
    </div>
    <p className="lab-note">Visual simulation only. Actual appearance and performance vary with factory glass, film specification, interior color, lighting and viewing angle. Glass-area legality varies by jurisdiction.</p>
    <button className="button" onClick={add}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Glass Lab · Concept One"
    title={view==='Exterior'?'How much of the cabin can people see?':'What does the driver see through the glass?'}
    description="Drag the divider directly across Concept One. Exterior view looks into the real cabin scene; Driver view looks out through the selected glass."
    aside={aside}
  >
    <div className="glass3b">
      <div className="glass3b__scene">
        <img
          className="glass3b__image"
          src={image}
          alt={view==='Exterior'
            ? 'Concept One matte black coupe viewed from outside with the cabin visible through the glass'
            : 'Concept One driver-eye view looking through the windshield toward the road'}
        />

        <div className="glass3b__tinted" style={{clipPath:'inset(0 0 0 '+compare+'%)'}}>
          <TintMask view={view} tone={data.tone} opacity={opacity}/>
        </div>

        <div className="glass3b__divider" style={{left:compare+'%'}} aria-hidden="true"><span>↔</span></div>
        <span className="glass3b__label glass3b__label--factory">FACTORY GLASS</span>
        <span className="glass3b__label glass3b__label--selected">{shade}% {film.toUpperCase()}</span>
        <div className="glass3b__environment"><i/><span>{environments[environment].label}</span></div>

        <input
          className="glass3b__range"
          aria-label="Drag to compare factory glass with the selected tint"
          type="range"
          min="8"
          max="92"
          value={compare}
          onChange={e=>setCompare(Number(e.target.value))}
        />
      </div>

      <div className="glass3b__question">
        <div><small>{view==='Exterior'?'PRIVACY VIEW':'DRIVER VIEW'}</small><strong>{view==='Exterior'?'Outside looking in':'Inside looking out'}</strong></div>
        <p>{view==='Exterior'
          ? 'Use the seats, steering wheel, dashboard and cabin detail as the reference. Lower VLT progressively reduces how much of the interior remains visible.'
          : 'Use traffic, lane markings, roadside detail and city lighting as the reference. Compare outward visibility across shade and lighting conditions.'
        }</p>
      </div>
    </div>

    <div className="lab-controls glass3b__controls">
      <ControlGroup label="Shade / VLT">{shades.map(v=><button className={v===shade?'is-active':''} aria-pressed={v===shade} key={v} onClick={()=>setShade(v)}>{v}%</button>)}</ControlGroup>
      <ControlGroup label="Film family">{Object.keys(films).map(v=><button className={v===film?'is-active':''} aria-pressed={v===film} key={v} onClick={()=>setFilm(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="Environment">{Object.keys(environments).map(v=><button className={v===environment?'is-active':''} aria-pressed={v===environment} key={v} onClick={()=>setEnvironment(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="View">{['Exterior','Driver'].map(v=><button className={v===view?'is-active':''} aria-pressed={v===view} key={v} onClick={()=>setView(v)}>{v}</button>)}</ControlGroup>
    </div>
  </ExperienceShell>;
}

function TintMask({view,tone,opacity}){
  const fill='rgba('+tone+','+opacity+')';
  return <svg className="glass3b__mask" viewBox="0 0 1200 900" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={'glass-sheen-'+view} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(150,190,220,.14)"/>
        <stop offset="32%" stopColor="rgba(75,115,145,.04)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,.08)"/>
      </linearGradient>
    </defs>
    {view==='Exterior'?<>
      <polygon className="glass3b__tint-shape" points="226,361 350,324 352,414 217,409" fill={fill}/>
      <polygon className="glass3b__tint-shape" points="362,319 500,318 642,419 359,417" fill={fill}/>
      <polygon className="glass3b__tint-shape" points="503,317 637,347 711,418 644,419" fill={fill}/>
      <polygon className="glass3b__sheen" points="226,361 350,324 352,414 217,409" fill={'url(#glass-sheen-'+view+')'}/>
      <polygon className="glass3b__sheen" points="362,319 500,318 642,419 359,417" fill={'url(#glass-sheen-'+view+')'}/>
      <polygon className="glass3b__sheen" points="503,317 637,347 711,418 644,419" fill={'url(#glass-sheen-'+view+')'}/>
    </>:<>
      <polygon className="glass3b__tint-shape" points="279,83 1014,75 1085,294 1052,440 1011,503 366,505 332,462 309,337" fill={fill}/>
      <polygon className="glass3b__tint-shape glass3b__tint-shape--side" points="0,88 260,82 309,337 332,462 188,548 0,575" fill={fill}/>
      <polygon className="glass3b__sheen" points="279,83 1014,75 1085,294 1052,440 1011,503 366,505 332,462 309,337" fill={'url(#glass-sheen-'+view+')'}/>
    </>}
  </svg>;
}

function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Spec({label,value,detail}){return <div className="glass3b__spec"><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>}
