'use client';

import { useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const shades=[70,50,35,20,5];
const films={
  Dyed:{heat:28,uv:92,copy:'Entry-level privacy and glare control.'},
  Carbon:{heat:52,uv:96,copy:'A stable matte look with stronger heat control.'},
  Ceramic:{heat:82,uv:99,copy:'High heat rejection without relying on very dark glass.'}
};

export default function GlassLab(){
 const[shade,setShade]=useState(35);
 const[film,setFilm]=useState('Ceramic');
 const[environment,setEnvironment]=useState('Day');
 const[view,setView]=useState('Exterior');
 const{addItem,setOpen}=useTTTBuild();
 const data=films[film];
 const darkness=useMemo(()=>Math.min(.82,.12+(70-shade)/85),[shade]);
 const add=()=>{addItem({id:'tint',category:'Window Tint',title:shade+'% '+film,detail:'Concept selection · '+environment+' view'});setOpen(true)};
 const aside=<>
   <div className="lab-readout"><small>Current configuration</small><strong>{shade}% {film}</strong><p>{data.copy}</p></div>
   <div className="lab-meters"><Meter label="Visible light" value={shade}/><Meter label="Heat control" value={data.heat}/><Meter label="UV control" value={data.uv}/></div>
   <p className="lab-note">Illustrative education tool. Actual film performance depends on the selected product and vehicle glass.</p>
   <button className="button" onClick={add}>Add to My TTT Build →</button>
 </>;
 return <ExperienceShell eyebrow="TTT Glass Lab" title="See what the glass changes." description="Change shade, film family and environment. Darkness and heat rejection are separate decisions." aside={aside}>
   <div className={'glass-lab-scene env-'+environment.toLowerCase()+' view-'+view.toLowerCase()}>
     <div className="glass-lab-sun"/><div className="glass-lab-ground"/>
     <svg className="glass-car" viewBox="0 0 1000 560" role="img" aria-label="Stylized Concept One coupe for tint visualization">
       <defs><linearGradient id="bodyGrad" x1="0" x2="1"><stop offset="0" stopColor="#111820"/><stop offset=".55" stopColor="#252d36"/><stop offset="1" stopColor="#090d12"/></linearGradient></defs>
       <path className="glass-car__shadow" d="M125 420 Q500 485 880 420 Q870 455 505 470 Q165 460 125 420Z"/>
       <path className="glass-car__body" fill="url(#bodyGrad)" d="M120 374 Q158 312 265 288 L390 185 Q443 145 532 149 L651 164 Q720 176 772 224 L842 294 Q897 310 916 351 L891 408 L130 408Z"/>
       <path className="glass-car__glass" style={{fill:`rgba(5,16,29,${darkness})`}} d="M315 286 L405 202 Q441 171 511 174 L574 179 L552 285Z"/>
       <path className="glass-car__glass" style={{fill:`rgba(5,16,29,${darkness})`}} d="M587 180 L642 190 Q698 202 747 244 L785 286 L574 285Z"/>
       <path className="glass-car__line" d="M566 181 L558 286"/>
       <path className="glass-car__line" d="M315 286 L785 286"/>
       <circle className="glass-car__wheel" cx="287" cy="398" r="78"/><circle className="glass-car__wheel" cx="775" cy="398" r="78"/>
       <circle className="glass-car__rim" cx="287" cy="398" r="39"/><circle className="glass-car__rim" cx="775" cy="398" r="39"/>
     </svg>
     <div className="glass-lab-temperature"><span>{environment}</span><b>{film}</b></div>
   </div>
   <div className="lab-controls">
     <ControlGroup label="Shade / VLT">{shades.map(v=><button className={v===shade?'is-active':''} key={v} onClick={()=>setShade(v)}>{v}%</button>)}</ControlGroup>
     <ControlGroup label="Film">{Object.keys(films).map(v=><button className={v===film?'is-active':''} key={v} onClick={()=>setFilm(v)}>{v}</button>)}</ControlGroup>
     <ControlGroup label="Environment">{['Day','Sunset','Night'].map(v=><button className={v===environment?'is-active':''} key={v} onClick={()=>setEnvironment(v)}>{v}</button>)}</ControlGroup>
     <ControlGroup label="View">{['Exterior','Driver'].map(v=><button className={v===view?'is-active':''} key={v} onClick={()=>setView(v)}>{v}</button>)}</ControlGroup>
   </div>
 </ExperienceShell>;
}
function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Meter({label,value}){return <div className="lab-meter"><span>{label}</span><i><b style={{width:value+'%'}}/></i><strong>{value}%</strong></div>}
