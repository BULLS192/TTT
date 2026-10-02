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
    Day:'/visuals/window-tint/concept-one-exterior-day.avif',
    Sunset:'/visuals/window-tint/concept-one-exterior-sunset.avif',
    Night:'/visuals/window-tint/concept-one-exterior-night.avif'
  },
  Driver:{
    Day:'/visuals/window-tint/concept-one-driver-day.avif',
    Sunset:'/visuals/window-tint/concept-one-driver-sunset.avif',
    Night:'/visuals/window-tint/concept-one-driver-night.avif'
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
  return <svg className="glass3b__mask" viewBox="0 0 1200 900" preserveAspectRatio="none" shapeRendering="geometricPrecision" aria-hidden="true">
    <defs>
      <linearGradient id={'glass-sheen-'+view} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(150,190,220,.14)"/>
        <stop offset="32%" stopColor="rgba(75,115,145,.04)"/>
        <stop offset="100%" stopColor="rgba(0,0,0,.08)"/>
      </linearGradient>
    </defs>
    {view==='Exterior'?<>
      <path className="glass3b__tint-shape" d="M213 386 C250 362 302 347 339 343 Q347 343 349 348 L348 405 Q300 405 220 392 Z" fill={fill}/>
      <path className="glass3b__tint-shape" d="M363 347 C410 332 470 322 525 326 C580 330 622 365 651 410 L359 410 Z" fill={fill}/>
      <path className="glass3b__tint-shape" d="M608 340 C660 339 731 367 792 411 L678 411 C659 384 637 356 608 340 Z" fill={fill}/>
      <path className="glass3b__sheen" d="M213 386 C250 362 302 347 339 343 Q347 343 349 348 L348 405 Q300 405 220 392 Z" fill={'url(#glass-sheen-'+view+')'}/>
      <path className="glass3b__sheen" d="M363 347 C410 332 470 322 525 326 C580 330 622 365 651 410 L359 410 Z" fill={'url(#glass-sheen-'+view+')'}/>
      <path className="glass3b__sheen" d="M608 340 C660 339 731 367 792 411 L678 411 C659 384 637 356 608 340 Z" fill={'url(#glass-sheen-'+view+')'}/>
    </>:<>
      <path className="glass3b__tint-shape" d="M286 85 C480 78 770 77 980 79 C1010 80 1016 98 1027 144 C1036 162 1050 175 1075 181 L1200 181 L1200 503 C940 502 650 498 402 512 C374 510 358 490 350 454 C331 363 308 231 288 108 C286 99 285 91 286 85 Z" fill={fill}/>
      <path className="glass3b__tint-shape glass3b__tint-shape--side" d="M0 58 C72 129 130 248 189 365 C200 387 203 404 203 430 L203 560 C143 578 76 590 0 602 Z" fill={fill}/>
      <path className="glass3b__sheen" d="M286 85 C480 78 770 77 980 79 C1010 80 1016 98 1027 144 C1036 162 1050 175 1075 181 L1200 181 L1200 503 C940 502 650 498 402 512 C374 510 358 490 350 454 C331 363 308 231 288 108 C286 99 285 91 286 85 Z" fill={'url(#glass-sheen-'+view+')'}/>
      <path className="glass3b__sheen" d="M0 58 C72 129 130 248 189 365 C200 387 203 404 203 430 L203 560 C143 578 76 590 0 602 Z" fill={'url(#glass-sheen-'+view+')'}/>
    </>}
  </svg>;
}

function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Spec({label,value,detail}){return <div className="glass3b__spec"><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>}
