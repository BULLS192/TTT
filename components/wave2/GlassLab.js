'use client';

import { useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const shades=[70,50,35,20,5];
const films={
 Dyed:{heat:'Entry',copy:'Privacy and glare control for a value-focused installation.',tone:'Neutral charcoal'},
 Carbon:{heat:'Mid',copy:'A stable matte appearance with improved heat-control potential.',tone:'Deep neutral'},
 Ceramic:{heat:'Higher',copy:'Heat-control focused film without depending on the darkest appearance.',tone:'Cool neutral'}
};
const environments={
 Day:{label:'Daylight',filter:'brightness(1.02) saturate(.96) contrast(1.02)'},
 Sunset:{label:'Low sun',filter:'brightness(.9) saturate(1.08) sepia(.12) contrast(1.05)'},
 Night:{label:'Night',filter:'brightness(.55) saturate(.82) contrast(1.12)'}
};

export default function GlassLab(){
 const[shade,setShade]=useState(35);
 const[film,setFilm]=useState('Ceramic');
 const[environment,setEnvironment]=useState('Day');
 const[view,setView]=useState('Exterior');
 const[compare,setCompare]=useState(48);
 const{addItem,setOpen}=useTTTBuild();
 const data=films[film];
 const darkness=useMemo(()=>Math.max(.09,Math.min(.58,.09+(70-shade)*.0076)),[shade]);
 const brightness=useMemo(()=>Math.max(.68,.98-darkness*.42),[darkness]);
 const visual=view==='Exterior'?'homeHeroTechnical':'technologyHero';
 const tintColor=film==='Ceramic'?'rgba(8,24,40,'+darkness+')':film==='Carbon'?'rgba(8,15,23,'+darkness+')':'rgba(12,15,19,'+darkness+')';
 const add=()=>{addItem({id:'tint',category:'Window Tint',title:shade+'% '+film,detail:'Concept selection · '+environments[environment].label+' · '+view+' preview'});setOpen(true)};

 const aside=<>
  <div className="lab-readout glass2b__readout"><small>Current glass concept</small><strong>{shade}% {film}</strong><p>{data.copy}</p></div>
  <div className="glass2b__specs">
   <Spec label="Visible light" value={shade+'% VLT'} detail="Selected shade"/>
   <Spec label="Heat-control potential" value={data.heat} detail="Relative film family"/>
   <Spec label="Appearance" value={data.tone} detail="Visual character"/>
  </div>
  <div className="glass2b__intent"><small>Design principle</small><p>Choose the film family for the job first, then choose the darkness you want. Darker glass does not automatically mean better heat control.</p></div>
  <p className="lab-note">Visual simulation only. Real appearance changes with factory glass, cabin color, weather and viewing angle. Product performance must be verified against the exact film specification.</p>
  <button className="button" onClick={add}>Add to My TTT Build →</button>
 </>;

 return <ExperienceShell eyebrow="TTT Glass Lab" title="Compare the glass, not just the number." description="Use a before/after lens to see how shade, film family, environment and viewing position change the character of the vehicle." aside={aside}>
  <div className={'glass2b glass2b--'+environment.toLowerCase()+' glass2b--'+view.toLowerCase()} style={{'--glass-split':compare+'%','--glass-tint':tintColor,'--glass-brightness':brightness,'--glass-scene-filter':environments[environment].filter}}>
   <div className="glass2b__scene">
    <div className="glass2b__base"><AssetMedia visual={visual}/></div>
    <div className="glass2b__tinted" style={{clipPath:'inset(0 0 0 '+compare+'%)'}}>
     <AssetMedia visual={visual}/>
     <div className="glass2b__film"/>
    </div>
    <div className="glass2b__environment" aria-hidden="true"/>
    <div className="glass2b__divider" style={{left:compare+'%'}} aria-hidden="true"><i/></div>
    <span className="glass2b__label glass2b__label--before">FACTORY GLASS</span>
    <span className="glass2b__label glass2b__label--after">{shade}% {film.toUpperCase()}</span>
    <div className="glass2b__hud">
     <span>{view==='Exterior'?'EXTERIOR CHARACTER':'CABIN VIEW'}</span>
     <b>{environments[environment].label}</b>
    </div>
   </div>

   <div className="glass2b__comparison">
    <div><small>Before / after lens</small><strong>Drag to compare factory glass with the selected concept.</strong></div>
    <input aria-label="Move before and after comparison" type="range" min="18" max="82" value={compare} onChange={e=>setCompare(Number(e.target.value))}/>
   </div>
  </div>

  <div className="lab-controls glass2b__controls">
   <ControlGroup label="Shade / VLT">{shades.map(v=><button className={v===shade?'is-active':''} aria-pressed={v===shade} key={v} onClick={()=>setShade(v)}>{v}%</button>)}</ControlGroup>
   <ControlGroup label="Film family">{Object.keys(films).map(v=><button className={v===film?'is-active':''} aria-pressed={v===film} key={v} onClick={()=>setFilm(v)}>{v}</button>)}</ControlGroup>
   <ControlGroup label="Environment">{Object.keys(environments).map(v=><button className={v===environment?'is-active':''} aria-pressed={v===environment} key={v} onClick={()=>setEnvironment(v)}>{v}</button>)}</ControlGroup>
   <ControlGroup label="View">{['Exterior','Driver'].map(v=><button className={v===view?'is-active':''} aria-pressed={v===view} key={v} onClick={()=>setView(v)}>{v}</button>)}</ControlGroup>
  </div>
 </ExperienceShell>;
}

function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Spec({label,value,detail}){return <div className="glass2b__spec"><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>}