'use client';

import { useMemo, useState } from 'react';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const shades=[70,50,35,20,5];
const films={
  Dyed:{heat:'Entry',copy:'Privacy and glare control for a value-focused installation.',tone:'Neutral charcoal'},
  Carbon:{heat:'Mid',copy:'A stable matte appearance with improved heat-control potential.',tone:'Deep neutral'},
  Ceramic:{heat:'Higher',copy:'Heat-control focused film without depending on the darkest appearance.',tone:'Cool neutral'}
};
const environments={
  Day:{label:'Daylight',scene:'day'},
  Sunset:{label:'Low sun',scene:'sunset'},
  Night:{label:'Night',scene:'night'}
};

export default function GlassLab(){
  const[shade,setShade]=useState(35);
  const[film,setFilm]=useState('Ceramic');
  const[environment,setEnvironment]=useState('Day');
  const[view,setView]=useState('Exterior');
  const[compare,setCompare]=useState(50);
  const{addItem,setOpen}=useTTTBuild();
  const data=films[film];
  const tintOpacity=useMemo(()=>Math.max(.08,Math.min(.72,.1+(70-shade)*.0102)),[shade]);
  const add=()=>{addItem({id:'tint',category:'Window Tint',title:shade+'% '+film,detail:'Concept selection · '+environments[environment].label+' · '+view+' view'});setOpen(true)};

  const aside=<>
    <div className="lab-readout glass2e__readout"><small>Selected glass concept</small><strong>{shade}% {film}</strong><p>{data.copy}</p></div>
    <div className="glass2e__specs">
      <Spec label="Visible light" value={shade+'% VLT'} detail="Selected shade"/>
      <Spec label="Heat-control potential" value={data.heat} detail="Relative film family"/>
      <Spec label="View question" value={view==='Exterior'?'Privacy':'Outward visibility'} detail={view==='Exterior'?'Can people see in?':'What can the driver see out?'}/>
    </div>
    <p className="lab-note">Visual simulation only. Real appearance changes with factory glass, cabin color, weather and viewing angle. Product performance must be verified against the exact film specification.</p>
    <button className="button" onClick={add}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell eyebrow="TTT Glass Lab" title={view==='Exterior'?'How much of the cabin can people see?':'What does the driver see through the glass?'} description="Drag the divider directly on the glass. Exterior view looks into the cabin; Driver view looks out through the selected shade." aside={aside}>
    <div className="glass2e" style={{'--glass-split':compare+'%','--tint-opacity':tintOpacity}}>
      <div className={'glass2e__scene glass2e__scene--'+view.toLowerCase()+' glass2e__scene--'+environments[environment].scene}>
        <Scene view={view} environment={environment} tinted={false}/>
        <div className="glass2e__after" style={{clipPath:'inset(0 0 0 '+compare+'%)'}}>
          <Scene view={view} environment={environment} tinted film={film} shade={shade}/>
        </div>
        <div className="glass2e__divider" style={{left:compare+'%'}} aria-hidden="true"><span>↔</span></div>
        <span className="glass2e__label glass2e__label--before">FACTORY</span>
        <span className="glass2e__label glass2e__label--after">{shade}% {film.toUpperCase()}</span>
        <input className="glass2e__range" aria-label="Drag the before and after comparison directly on the glass" type="range" min="8" max="92" value={compare} onChange={e=>setCompare(Number(e.target.value))}/>
      </div>
      <div className="glass2e__prompt"><strong>{view==='Exterior'?'Outside looking in':'Driver looking out'}</strong><span>{view==='Exterior'?'Watch the passenger, seats, dashboard and steering wheel become harder to see as VLT decreases.':'Watch the road, vehicles and roadside detail through the selected glass—especially at night.'}</span></div>
    </div>
    <div className="lab-controls glass2e__controls">
      <ControlGroup label="Shade / VLT">{shades.map(v=><button className={v===shade?'is-active':''} aria-pressed={v===shade} key={v} onClick={()=>setShade(v)}>{v}%</button>)}</ControlGroup>
      <ControlGroup label="Film family">{Object.keys(films).map(v=><button className={v===film?'is-active':''} aria-pressed={v===film} key={v} onClick={()=>setFilm(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="Environment">{Object.keys(environments).map(v=><button className={v===environment?'is-active':''} aria-pressed={v===environment} key={v} onClick={()=>setEnvironment(v)}>{v}</button>)}</ControlGroup>
      <ControlGroup label="View">{['Exterior','Driver'].map(v=><button className={v===view?'is-active':''} aria-pressed={v===view} key={v} onClick={()=>setView(v)}>{v}</button>)}</ControlGroup>
    </div>
  </ExperienceShell>;
}

function Scene({view,tinted=false,film='',shade='',environment='Day'}){
  if(view==='Exterior'){
    return <div className={'glass2e__visual glass2e__visual--exterior '+(tinted?'is-tinted':'')}>
      <div className="glass2e__body"/>
      <div className="glass2e__window">
        <div className="glass2e__cabin">
          <span className="glass2e__head glass2e__head--driver"/><span className="glass2e__head glass2e__head--passenger"/>
          <span className="glass2e__seat glass2e__seat--driver"/><span className="glass2e__seat glass2e__seat--passenger"/>
          <span className="glass2e__dash"/><span className="glass2e__wheel"/>
        </div>
        {tinted?<div className={'glass2e__film glass2e__film--'+film.toLowerCase()} aria-hidden="true"/>:null}
      </div>
      <div className="glass2e__environment-note">{environment==='Night'?'Street light / cabin contrast':environment==='Sunset'?'Low-angle reflections':'Bright exterior / visible cabin'}</div>
    </div>;
  }
  return <div className={'glass2e__visual glass2e__visual--driver '+(tinted?'is-tinted':'')}>
    <div className="glass2e__windshield">
      <div className="glass2e__sky"/><div className="glass2e__road"/>
      <span className="glass2e__lane glass2e__lane--a"/><span className="glass2e__lane glass2e__lane--b"/>
      <span className="glass2e__outside-car"/><span className="glass2e__tree glass2e__tree--a"/><span className="glass2e__tree glass2e__tree--b"/>
      {tinted?<div className={'glass2e__film glass2e__film--'+film.toLowerCase()} aria-hidden="true"/>:null}
    </div>
    <div className="glass2e__dashboard"><span className="glass2e__driver-wheel"/></div>
    <div className="glass2e__environment-note">{shade?shade+'% VLT · ':''}{environment==='Night'?'Night visibility':environment==='Sunset'?'Low-sun visibility':'Day visibility'}</div>
  </div>;
}

function ControlGroup({label,children}){return <div className="lab-control"><small>{label}</small><div>{children}</div></div>}
function Spec({label,value,detail}){return <div className="glass2e__spec"><small>{label}</small><strong>{value}</strong><span>{detail}</span></div>}
