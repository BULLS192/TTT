'use client';
import { useState } from 'react';
import AssetMedia from './AssetMedia';

const hotspots=[
 {id:'glass',label:'Glass',detail:'Film for heat, UV and glare, without affecting the signals the car relies on.',x:68.5,y:35.0,href:'/services/window-tint'},
 {id:'audio',label:'Cabin audio',detail:'Sound tuned to where you sit, through the factory screen and controls.',x:56.0,y:43.5,href:'/services/audio'},
 {id:'location',label:'Location',detail:'Tracking installed out of sight and powered so it keeps reporting.',x:52.0,y:32.5,href:'/services/gps-tracking'},
 {id:'start',label:'Starting system',detail:'An independent barrier to unauthorized use. Details stay private.',x:79.0,y:54.0,href:'/services/kill-switches'},
 {id:'wiring',label:'Wiring & modules',detail:'The network every other layer depends on, and where hard faults hide.',x:65.0,y:54.5,href:'/services/signaltrace'},
 {id:'mounts',label:'Mounts & interfaces',detail:"Parts made for the space when nothing off the shelf fits.",x:47.0,y:57.0,href:'/services/custom-fabrication'}
];

export default function InteractiveVehicle(){
 const[active,setActive]=useState(hotspots[0]);
 return <div className="hotspot-layout">
  <div className="hotspot-stage" aria-label="Interactive Concept One service map">
   <AssetMedia visual="homeHeroTechnical" className="hotspot-stage__image"/>
   {hotspots.map(h=><button key={h.id} className={'hotspot '+(active.id===h.id?'is-active':'')} style={{left:h.x+'%',top:h.y+'%'}} onClick={()=>setActive(h)} aria-label={h.label+': '+h.detail}><span/></button>)}
  </div>
  <div className="hotspot-copy" aria-live="polite"><small>Choose a system</small><h3>{active.label}</h3><p>{active.detail}</p><a className="text-link" href={active.href}>View service →</a><div className="hotspot-mobile-list">{hotspots.map(h=><button key={h.id} className={active.id===h.id?'is-active':''} onClick={()=>setActive(h)}>{h.label}</button>)}</div></div>
 </div>;
}
