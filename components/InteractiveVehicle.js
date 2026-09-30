'use client';
import { useState } from 'react';
import AssetMedia from './AssetMedia';

const hotspots = [
  { id:'glass', label:'Glass', detail:'Window film for heat, UV and glare control.', x:22.3, y:26.4, href:'/services/window-tint' },
  { id:'audio', label:'Cabin audio', detail:'Speakers, amplification and tuning for the space you sit in.', x:40.1, y:27.4, href:'/services/audio' },
  { id:'location', label:'Location', detail:'GPS tracking with alerts you choose.', x:60.2, y:32.6, href:'/services/gps-tracking' },
  { id:'start', label:'Starting system', detail:'Immobilization that adds control over who can drive.', x:17.2, y:50.0, href:'/services/kill-switches' },
  { id:'wiring', label:'Wiring & modules', detail:'SignalTrace diagnostics for faults that are hard to find.', x:28.4, y:53.7, href:'/services/signaltrace' },
  { id:'mounts', label:'Mounts & interfaces', detail:"Custom parts made when off-the-shelf won't fit.", x:55.9, y:56.3, href:'/services/custom-fabrication' },
];

export default function InteractiveVehicle(){
  const [active,setActive]=useState(hotspots[0]);
  return <div className="hotspot-layout">
    <div className="hotspot-stage" aria-label="Interactive Concept One service map">
      <AssetMedia visual="homeHeroTechnical" className="hotspot-stage__image" />
      {hotspots.map(h=><button key={h.id} className={`hotspot ${active.id===h.id?'is-active':''}`} style={{left:`${h.x}%`,top:`${h.y}%`}} onClick={()=>setActive(h)} aria-label={`${h.label}: ${h.detail}`}><span/></button>)}
    </div>
    <div className="hotspot-copy" aria-live="polite">
      <small>Choose a system</small>
      <h3>{active.label}</h3>
      <p>{active.detail}</p>
      <a className="text-link" href={active.href}>View service →</a>
      <div className="hotspot-mobile-list">{hotspots.map(h=><button key={h.id} className={active.id===h.id?'is-active':''} onClick={()=>setActive(h)}>{h.label}</button>)}</div>
    </div>
  </div>;
}
