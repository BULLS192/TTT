'use client';
import { useState } from 'react';
import AssetMedia from './AssetMedia';

const hotspots = [
  { id:'glass', label:'Glass', detail:'Window film for heat, UV and glare control.', x:37, y:35, href:'/services/window-tint' },
  { id:'audio', label:'Cabin audio', detail:'Speakers, amplification and tuning for the space you sit in.', x:52, y:53, href:'/services/audio' },
  { id:'location', label:'Location', detail:'GPS tracking with alerts you choose.', x:69, y:32, href:'/services/gps-tracking' },
  { id:'start', label:'Starting system', detail:'Immobilization that adds control over who can drive.', x:72, y:63, href:'/services/kill-switches' },
  { id:'wiring', label:'Wiring & modules', detail:'SignalTrace diagnostics for faults that are hard to find.', x:46, y:68, href:'/services/signaltrace' },
  { id:'mounts', label:'Mounts & interfaces', detail:"Custom parts made when off-the-shelf won't fit.", x:27, y:64, href:'/services/custom-fabrication' },
];

export default function InteractiveVehicle(){
  const [active,setActive]=useState(hotspots[0]);
  return <div className="hotspot-layout">
    <div className="hotspot-stage">
      <AssetMedia visual="homeHeroTechnical" className="hotspot-stage__image" />
      {hotspots.map(h=><button key={h.id} className={`hotspot ${active.id===h.id?'is-active':''}`} style={{left:`${h.x}%`,top:`${h.y}%`}} onClick={()=>setActive(h)} aria-label={h.label}><span/></button>)}
    </div>
    <div className="hotspot-copy">
      <small>Tap an area to explore</small>
      <h3>{active.label}</h3>
      <p>{active.detail}</p>
      <a className="text-link" href={active.href}>View service →</a>
      <div className="hotspot-mobile-list">{hotspots.map(h=><button key={h.id} className={active.id===h.id?'is-active':''} onClick={()=>setActive(h)}>{h.label}</button>)}</div>
    </div>
  </div>
}
