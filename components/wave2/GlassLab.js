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
  Day:{label:'Daylight'},
  Sunset:{label:'Low sun'},
  Night:{label:'Night'}
};

export default function GlassLab(){
  const[shade,setShade]=useState(35);
  const[film,setFilm]=useState('Ceramic');
  const[environment,setEnvironment]=useState('Day');
  const[view,setView]=useState('Exterior');
  const[compare,setCompare]=useState(50);
  const{addItem,setOpen}=useTTTBuild();
  const data=films[film];
  const tintOpacity=useMemo(()=>Math.max(.08,Math.min(.68,.08+(70-shade)*.0096)),[shade]);
  const visual=view==='Exterior'?'tintHero':'technologyHero';
  const add=()=>{addItem({id:'tint',category:'Window Tint',title:shade+'% '+film,detail:'Concept selection · '+environments[environment].label+' · '+view+' view'});setOpen(true)};

  const aside=<>
    <div className="lab-readout glass3a__readout"><small>Selected glass concept</small><strong>{shade}% {film}</strong><p>{data.copy}</p></div>
    <div className="glass3a__specs">
      <Spec label="Visible light" value={shade+'% VLT'} detail="Selected shade"/>
      <Spec label="Heat-control potential" value={data.heat} detail="Relative film family"/>
      <Spec label="View question" value={view==='Exterior'?'Privacy':'Outward visibility'} detail={view==='Exterior'?'Can people see in?':'What can the driver see out?'}/>
    </div>
    <p className="lab-note">Visual simulation only. Real appearance changes with factory glass, cabin color, weather and viewing angle. Product performance must be verified against the exact film specification.</p>
    <button className="button" onClick={add}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Glass Lab" title={view==='Exterior'?'How much of the cabin can people see?':'What does the driver see through the glass?'} description="Drag the divider directly across the glass study. The exterior view concentrates on privacy; the driver view concentrates on outward visibility." aside={aside}>
    <div className={'glass3a glass3a--'+view.toLowerCase()+' glass3a--'+environment.toLowerCase()} style={{'--tint-opacity':tintOpacity}}>
      <div className="glass3a__scene">
        <AssetMedia visual={visual} className="glass3a__photo"/>
        <div className="glass3a__cinema"/>
        <div className="glass3a__glass-focus">
          <div className="glass3a__glass-label"><span>{view==='Exterior'?'GLASS PRIVACY STUDY':'DRIVER VISIBILITY STUDY'}</span><strong>{environments[environment].label}</strong></div>
          <div className="glass3a__glass-before"/>
          <div className="glass3a__glass-after" style={{clipPath:'inset(0 0 0 '+compare+'%)'}}>
            <div className={'glass3a__film glass3a__film--'+film.toLowerCase()}/>
          </div>
          <div className="glass3a__reference">
            {view==='Exterior'
              ? <><span className="glass3a__occupant glass3a__occupant--one"/><span className="glass3a__occupant glass3a__occupant--two"/><span className="glass3a__dash-ref">DASH / STEERING / OCCUPANTS</span></>
              : <><span className="glass3a__road-ref"/><span className="glass3a__car-ref"/><span className="glass3a__street-ref">ROAD / VEHICLES / ROADSIDE DETAIL</span></>}
          </div>
          <div className="glass3a__divider" style={{left:compare+'%'}} aria-hidden="true"><span>↔</span></div>
          <span className="glass3a__side glass3a__side--factory">FACTORY</span>
          <span className="glass3a__side glass3a__side--tint">{shade}% {film.toUpperCase()}</span>
          <input className="glass3a__range" aria-label="Drag the before and after comparison directly on the glass" type="range" min="8" max="92" value={compare} onChange={e=>setCompare(Number(e.target.value))}/>
        </div>
        <div className="glass3a__scene-note"><strong>{view==='Exterior'?'Outside looking in':'Driver looking out'}</strong><span>{view==='Exterior'?'Privacy is judged by how clearly cabin references remain visible through the selected glass.':'Outward visibility is judged by how much road and roadside detail remains visible through the selected glass.'}</span></div>
      </div>
    </div>
    <div className="lab-controls glass3a__controls">
      <ControlGroup label="Shade / VLT">{shades.map(v=><button className={v===shade?'is-active':''} aria-pressed={v===shade} key={v} onClick={()=>setShade(v)}>{v}%</button>)}</ControlGroup>
      <ControlGroup label="Film family">{Object.keys(films).map(v=><button className={v===film?'is-active':''} aria-pressed={v===film} key={v} onClick={()=>setFilm(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="Environment">{Object.keys(environments).map(v=><button className={v===environment?'is-active':''} aria-pressed={v===environment} key={v} onClick={()=>setEnvironment(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="View">{['Exterior','Driver'].map(v=><button className={v===view?'is-active':''} aria-pressed={v===view} key={v} onClick={()=>setView(v)}>{v}</button>)}</ControlGroup>
    </div>
  </ExperienceShell>;
}

function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Spec({label,value,detail}){return <div className="glass3a__spec"><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>}
