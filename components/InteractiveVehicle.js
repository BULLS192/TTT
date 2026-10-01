'use client';

import { useMemo, useState } from 'react';
import AssetMedia from './AssetMedia';

const layers=[
 {id:'glass',n:'01',label:'Glass',kicker:'Thermal + optical layer',detail:'Window film changes glare, privacy and cabin heat behavior without changing the factory glass itself.',x:64,y:29,href:'/services/window-tint#interactive'},
 {id:'audio',n:'02',label:'Cabin audio',kicker:'Acoustic layer',detail:'Speakers, amplification and DSP tuning are planned around the cabin, factory controls and electrical load.',x:56,y:49,href:'/services/audio#interactive'},
 {id:'location',n:'03',label:'Location',kicker:'Connected layer',detail:'Tracking adds location, movement and geofence awareness while remaining discreetly integrated into the vehicle.',x:45,y:42,href:'/services/gps-tracking#interactive'},
 {id:'start',n:'04',label:'Starting system',kicker:'Control layer',detail:'Immobilization adds another point of control while preserving dependable starting and service access.',x:70,y:50,href:'/services/kill-switches#interactive'},
 {id:'wiring',n:'05',label:'Wiring & modules',kicker:'Electrical layer',detail:'Power, grounds, data and interfaces are the hidden architecture that makes every added system coexist reliably.',x:77,y:57,href:'/services/signaltrace#interactive'},
 {id:'mounts',n:'06',label:'Mounts & interfaces',kicker:'Physical layer',detail:'Custom brackets, adapters and enclosures solve fitment problems without forcing the vehicle to accept a poor compromise.',x:39,y:58,href:'/services/custom-fabrication#interactive'}
];

export default function InteractiveVehicle(){
 const[activeId,setActiveId]=useState('glass');
 const[mode,setMode]=useState('Systems');
 const[tilt,setTilt]=useState({x:0,y:0});
 const active=useMemo(()=>layers.find(item=>item.id===activeId)||layers[0],[activeId]);
 const move=(event)=>{
  if(event.pointerType && event.pointerType!=='mouse') return;
  const rect=event.currentTarget.getBoundingClientRect();
  const px=(event.clientX-rect.left)/rect.width;
  const py=(event.clientY-rect.top)/rect.height;
  setTilt({x:(.5-py)*3.2,y:(px-.5)*4.4});
 };
 const reset=()=>setTilt({x:0,y:0});

 return <div className="concept2b">
  <div className={'concept2b__stage concept2b__stage--'+mode.toLowerCase()} onPointerMove={move} onPointerLeave={reset}>
   <div className="concept2b__chrome">
    <div><small>TTT DIGITAL VEHICLE</small><strong>CONCEPT ONE</strong></div>
    <div className="concept2b__view-switch" aria-label="Concept One view">
     {['Exterior','Systems','X-Ray'].map(item=><button type="button" key={item} className={mode===item?'is-active':''} aria-pressed={mode===item} onClick={()=>setMode(item)}>{item}</button>)}
    </div>
   </div>

   <div className="concept2b__viewport" style={{'--tilt-x':tilt.x+'deg','--tilt-y':tilt.y+'deg'}}>
    <AssetMedia visual="homeHeroTechnical" className="concept2b__image"/>
    <div className="concept2b__wash" aria-hidden="true"/>
    <div className="concept2b__grid" aria-hidden="true"/>

    {mode==='Systems'&&<div className="concept2b__systems" aria-label="Concept One system hotspots">
      <svg className="concept2b__traces" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
       {layers.map((item,i)=><path key={item.id} className={activeId===item.id?'is-active':''} d={'M '+(item.x*10)+' '+(item.y*6.2)+' Q '+(500+(i%2?70:-70))+' '+(250+i*20)+' 500 585'} />)}
      </svg>
      {layers.map(item=><button type="button" key={item.id} className={'concept2b__hotspot '+(activeId===item.id?'is-active':'')} style={{left:item.x+'%',top:item.y+'%'}} onClick={()=>setActiveId(item.id)} aria-label={item.label+': '+item.detail}><i/><span>{item.n}</span></button>)}
    </div>}

    {mode==='X-Ray'&&<div className="concept2b__xray" aria-label="Illustrative hidden integration architecture">
      <span className="concept2b__xray-line concept2b__xray-line--power"/>
      <span className="concept2b__xray-line concept2b__xray-line--data"/>
      <span className="concept2b__xray-node concept2b__xray-node--front">INTERFACE</span>
      <span className="concept2b__xray-node concept2b__xray-node--mid">CONTROL</span>
      <span className="concept2b__xray-node concept2b__xray-node--rear">ADDED SYSTEM</span>
      <span className="concept2b__xray-callout">ILLUSTRATIVE SYSTEM ARCHITECTURE</span>
    </div>}

    <div className="concept2b__view-label">
     <span>{mode==='Exterior'?'SURFACE VIEW':mode==='Systems'?'SYSTEM MAP':'HIDDEN LAYERS'}</span>
     <b>{mode==='Exterior'?'Vehicle form':mode==='Systems'?active.label:'Integration architecture'}</b>
    </div>
   </div>

   <div className="concept2b__telemetry" aria-hidden="true">
    <span><i/> FACTORY VEHICLE</span>
    <span><i/> INTERFACE</span>
    <span><i/> CONTROL</span>
    <span><i/> ADDED SYSTEM</span>
    <span><i/> DRIVER EXPERIENCE</span>
   </div>
  </div>

  <aside className="concept2b__panel" aria-live="polite">
   <small>{active.n} / 06 · {active.kicker}</small>
   <h3>{active.label}</h3>
   <p>{active.detail}</p>
   <a className="text-link text-link--light" href={active.href}>Open interactive lab →</a>
   <div className="concept2b__rail" aria-label="Choose a Concept One layer">
    {layers.map(item=><button type="button" key={item.id} className={activeId===item.id?'is-active':''} onClick={()=>{setActiveId(item.id);setMode('Systems')}}>
      <span>{item.n}</span><strong>{item.label}</strong><i/>
    </button>)}
   </div>
   <p className="concept2b__note">Reference visualization only. Exact interfaces, locations and component choices depend on the vehicle.</p>
  </aside>
 </div>;
}