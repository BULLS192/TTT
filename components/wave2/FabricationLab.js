'use client';

import { useMemo, useState } from 'react';
import AssetMedia from '../AssetMedia';
import ExperienceShell from './ExperienceShell';
import { useTTTBuild } from './TTTBuildContext';

const cases={
  amplifier:{
    label:'Amplifier mount',
    short:'AMP MOUNT',
    problem:'A premium amplifier has no secure, serviceable factory mounting point.',
    capture:'Measured geometry + reference scan',
    target:'Rear electronics bay',
    component:'Amplifier + serviceable bracket',
    constraints:['Trim clearance','Service access','Cable bend radius'],
    material:'Engineering polymer / metal as required',
    revision:'R2 · cable relief + 6 mm trim clearance',
    final:'Low-profile electronics mount'
  },
  dash:{
    label:'Dash device mount',
    short:'DASH MOUNT',
    problem:'A controller or display needs an OEM-like position without blocking vents, controls or sightlines.',
    capture:'3D scan + key measurements',
    target:'Dash / console interface',
    component:'Vehicle-specific display mount',
    constraints:['Vent clearance','Viewing angle','Factory controls'],
    material:'UV-stable polymer / machined insert',
    revision:'R2 · revised viewing angle + vent relief',
    final:'Integrated display mount'
  },
  subwoofer:{
    label:'Subwoofer solution',
    short:'SUB ENCLOSURE',
    problem:'The customer wants meaningful low-frequency output without surrendering the cargo area.',
    capture:'3D scan + usable volume',
    target:'Cargo-side packaging',
    component:'Vehicle-specific enclosure / adapter',
    constraints:['Cargo space','Panel geometry','Service access'],
    material:'Composite / printed tooling / fabricated enclosure',
    revision:'R2 · panel relief + service access',
    final:'Space-efficient bass solution'
  }
};

const steps=[
  {key:'problem',label:'PROBLEM',title:'Define the packaging problem',copy:'Start with what must fit, what must remain accessible and what the vehicle cannot give up.'},
  {key:'capture',label:'CAPTURE',title:'Capture the real vehicle',copy:'Measure or scan only the geometry that matters so the design starts from the actual packaging envelope.'},
  {key:'design',label:'DESIGN',title:'Build the part around the car',copy:'Model the interface, mounting points and keep-out zones around the equipment—not around an imaginary box.'},
  {key:'prototype',label:'PROTOTYPE',title:'Make the first article earn its keep',copy:'Fit the prototype in the real vehicle and deliberately look for interference, access and routing problems.'},
  {key:'refine',label:'REFINE',title:'Turn the fit check into a revision',copy:'Correct the collision, improve service access and verify the final packaging before production.'},
  {key:'installed',label:'INSTALLED',title:'Finish with an integrated result',copy:'Manufacture the final component, install it cleanly and preserve access for future service.'}
];

export default function FabricationLab(){
  const[caseKey,setCaseKey]=useState('amplifier');
  const[index,setIndex]=useState(0);
  const[fitChecked,setFitChecked]=useState(false);
  const{addItem,setOpen}=useTTTBuild();

  const c=cases[caseKey];
  const step=steps[index];
  const stageKey=step.key;
  const visual=stageKey==='problem'||stageKey==='capture'?'fabricationHero':'fabricationExamples';
  const artifact=useMemo(()=>{
    if(index<2)return 'Vehicle packaging space';
    if(index===2)return 'CAD concept · R1';
    if(index===3)return fitChecked?'Prototype · interference logged':'Prototype · first article';
    if(index===4)return c.revision;
    return c.final;
  },[index,fitChecked,c]);

  const choose=(key)=>{setCaseKey(key);setIndex(0);setFitChecked(false)};
  const go=(next)=>{setIndex(next);if(next!==3)setFitChecked(false)};

  const aside=<>
    <div className="lab-readout fab3k__readout">
      <small>{c.short}</small>
      <strong>{step.label}</strong>
      <p>{index===0?c.problem:step.copy}</p>
    </div>
    <div className="fab3k__aside-grid">
      <Readout icon="scan" label="Capture" value={c.capture}/>
      <Readout icon="target" label="Target" value={c.target}/>
      <Readout icon="cube" label="Artifact" value={artifact}/>
      <Readout icon="material" label="Process" value={index<2?'Vehicle data':index<4?'Design + prototype':index<5?'Revision':'Final install'}/>
    </div>
    <p className="lab-note">Conceptual project workflow. Material, tolerances, scan method and manufacturing process depend on the vehicle, load case and application.</p>
    <button className="button" onClick={()=>{addItem({id:'fabrication',category:'Custom Fabrication',title:c.label,detail:'Capture → CAD → prototype → fit → final'});setOpen(true)}}>Add to My TTT Build →</button>
  </>;

  return <ExperienceShell
    eyebrow="TTT Fabrication Lab"
    title="Turn the vehicle into the design brief."
    description="Choose a real fitment problem and move it from vehicle geometry to CAD, prototype, fit check, revision and final installed solution."
    aside={aside}
  >
    <div className={'fab3k fab3k--'+stageKey}>
      <AssetMedia visual={visual} className="fab3k__photo"/>
      <div className="fab3k__grade"/>

      <header className="fab3k__topbar">
        <div>
          <span><i/>{stageKey==='installed'?'FINAL SOLUTION':'ACTIVE PROJECT'}</span>
          <strong>{c.label}</strong>
          <small>{c.target}</small>
        </div>
        <div className="fab3k__stage-chip"><b>{String(index+1).padStart(2,'0')}</b><span>{step.label}</span></div>
      </header>

      <section className="fab3k__viewport" aria-label={step.title}>
        {stageKey==='problem'?<ProblemOverlay c={c}/>:null}
        {stageKey==='capture'?<CaptureOverlay c={c}/>:null}
        {stageKey==='design'?<DesignOverlay c={c} caseKey={caseKey}/>:null}
        {stageKey==='prototype'?<PrototypeOverlay c={c} caseKey={caseKey} fitChecked={fitChecked}/>:null}
        {stageKey==='refine'?<RefineOverlay c={c} caseKey={caseKey}/>:null}
        {stageKey==='installed'?<InstalledOverlay c={c} caseKey={caseKey}/>:null}
      </section>

      <aside className="fab3k__project-panel">
        <div className="fab3k__panel-head"><span><Icon name="project"/>PROJECT DATA</span><b>{stageKey.toUpperCase()}</b></div>
        <div className="fab3k__project-summary">
          <small>CUSTOMER GOAL</small>
          <strong>{c.component}</strong>
          <p>{c.problem}</p>
        </div>
        <div className="fab3k__constraint-list">
          <small>DESIGN CONSTRAINTS</small>
          {c.constraints.map((item,i)=><div key={item}><i>{String(i+1).padStart(2,'0')}</i><span>{item}</span><b>{index>=4?'VERIFIED':'TRACK'}</b></div>)}
        </div>
        <div className="fab3k__artifact">
          <small>CURRENT ARTIFACT</small>
          <strong>{artifact}</strong>
          <span>{index>=4?c.material:c.capture}</span>
        </div>
      </aside>
    </div>

    {index===3?<div className={'fab3k__fit-action '+(fitChecked?'is-complete':'')}>
      <div><Icon name={fitChecked?'alert':'fit'}/><span><small>{fitChecked?'FIT CHECK RESULT':'PROTOTYPE VALIDATION'}</small><strong>{fitChecked?'Interference found — revise before final manufacture.':'Fit the first article against the real packaging envelope.'}</strong></span></div>
      <button className="button" disabled={fitChecked} onClick={()=>setFitChecked(true)}>{fitChecked?'Fit check logged':'Run fit check →'}</button>
    </div>:null}

    <div className="fab3k__steps">
      {steps.map((s,i)=><button key={s.key} type="button" className={i===index?'is-active':i<index?'is-complete':''} onClick={()=>go(i)}>
        <small>{String(i+1).padStart(2,'0')}</small>
        <Icon name={s.key}/>
        <span><strong>{s.label}</strong><em>{s.title}</em></span>
      </button>)}
    </div>

    <div className="fab3k__selector">
      <div className="fab3k__selector-title"><Icon name="project"/><span><small>PROJECT EXAMPLE</small><strong>Change the fitment problem</strong></span></div>
      <div>{Object.keys(cases).map(key=><button key={key} className={caseKey===key?'is-active':''} aria-pressed={caseKey===key} onClick={()=>choose(key)}><Icon name={key}/><span>{cases[key].label}</span></button>)}</div>
    </div>

    <div className="signal-next">
      <button className="button button--ghost" disabled={!index} onClick={()=>go(index-1)}>← Back</button>
      <button className="button" disabled={index===steps.length-1||(index===3&&!fitChecked)} onClick={()=>go(index+1)}>{index===3&&!fitChecked?'Run fit check first':'Next stage →'}</button>
    </div>
  </ExperienceShell>;
}

function ProblemOverlay({c}){
  return <div className="fab3k__problem">
    <div className="fab3k__target-ring"><i/><b/><span>FITMENT ZONE</span></div>
    <div className="fab3k__problem-card"><Icon name="target"/><div><small>PACKAGING PROBLEM</small><strong>{c.target}</strong><p>{c.problem}</p></div></div>
  </div>
}

function CaptureOverlay({c}){
  return <div className="fab3k__capture">
    <div className="fab3k__scan-field">{Array.from({length:64},(_,i)=><i key={i} style={{'--x':((i*37)%97)+'%','--y':((i*53)%91)+'%','--d':((i%8)*-.11)+'s'}}/>)}</div>
    <div className="fab3k__scan-line"/>
    <div className="fab3k__capture-card"><Icon name="scan"/><div><small>GEOMETRY CAPTURE</small><strong>{c.capture}</strong><span>Reference planes · mounting points · keep-out zones</span></div></div>
  </div>
}

function DesignOverlay({c,caseKey}){
  return <div className="fab3k__design">
    <div className="fab3k__model-card">
      <div className="fab3k__model-head"><span><Icon name="cube"/>CAD CONCEPT · R1</span><b>VEHICLE-DRIVEN</b></div>
      <PartModel type={caseKey} state="design"/>
      <div className="fab3k__dimensions"><span>A · mounting datum</span><span>B · service clearance</span><span>C · cable / control access</span></div>
    </div>
    <div className="fab3k__design-note"><small>DESIGN INTENT</small><strong>{c.component}</strong><p>Build only the geometry required to solve the packaging and service problem.</p></div>
  </div>
}

function PrototypeOverlay({c,caseKey,fitChecked}){
  return <div className="fab3k__prototype">
    <div className={'fab3k__fit-envelope '+(fitChecked?'is-collision':'')}>
      <span>VEHICLE PACKAGING ENVELOPE</span>
      <PartModel type={caseKey} state={fitChecked?'collision':'prototype'}/>
      <div className="fab3k__keepout">KEEP-OUT</div>
      {fitChecked?<div className="fab3k__collision-marker"><Icon name="alert"/><span><strong>INTERFERENCE</strong><small>Trim / service zone conflict</small></span></div>:null}
    </div>
    <div className="fab3k__prototype-card"><small>FIRST ARTICLE</small><strong>{fitChecked?'Fit check exposed a real collision.':'Prototype ready for vehicle fit check.'}</strong><p>{fitChecked?'The prototype has done its job: it found something worth changing before final production.':'Use the real vehicle to validate access, clearance and routing.'}</p></div>
  </div>
}

function RefineOverlay({c,caseKey}){
  return <div className="fab3k__refine">
    <div className="fab3k__revision">
      <div className="fab3k__revision-old"><span>R1</span><PartModel type={caseKey} state="collision"/></div>
      <div className="fab3k__revision-arrow">→</div>
      <div className="fab3k__revision-new"><span>R2</span><PartModel type={caseKey} state="verified"/></div>
    </div>
    <div className="fab3k__refine-card"><Icon name="verified"/><div><small>REVISION VERIFIED</small><strong>{c.revision}</strong><p>Interference removed. Service access and keep-out zones rechecked before final manufacture.</p></div></div>
  </div>
}

function InstalledOverlay({c,caseKey}){
  return <div className="fab3k__installed">
    <div className="fab3k__installed-part"><PartModel type={caseKey} state="final"/></div>
    <div className="fab3k__installed-card"><Icon name="verified"/><div><small>FINAL COMPONENT</small><strong>{c.final}</strong><p>{c.material}</p></div><span>INSTALLED</span></div>
    <div className="fab3k__handoff"><span><Icon name="service"/>Serviceable</span><span><Icon name="fit"/>Vehicle-specific</span><span><Icon name="verified"/>Verified fit</span></div>
  </div>
}

function PartModel({type,state}){
  const body=type==='dash'
    ? 'M23 60 C29 34 45 25 63 27 C74 29 82 39 84 53 L76 70 C62 64 43 66 26 75 Z'
    : type==='subwoofer'
      ? 'M18 31 H80 L85 70 L72 80 H18 Z M36 54 A14 14 0 1 0 64 54 A14 14 0 1 0 36 54'
      : 'M17 35 H83 V69 H17 Z M25 43 H75 V60 H25 Z';
  return <svg className={'fab3k__part is-'+state} viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id={'part-'+type+'-'+state} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={state==='collision'?'#8f4238':state==='final'||state==='verified'?'#566d7c':'#395b70'}/>
        <stop offset="48%" stopColor={state==='collision'?'#5c2722':state==='final'||state==='verified'?'#1d2c35':'#17354a'}/>
        <stop offset="100%" stopColor="#0a141b"/>
      </linearGradient>
    </defs>
    <path className="fab3k__part-shadow" d={body} transform="translate(3 4)"/>
    <path className="fab3k__part-body" d={body} fill={'url(#part-'+type+'-'+state+')'}/>
    <path className="fab3k__part-edge" d={body}/>
    <path className="fab3k__part-highlight" d="M24 39 C44 31 64 32 78 39"/>
    <circle cx="22" cy="79" r="3"/><circle cx="78" cy="79" r="3"/>
    <path className="fab3k__part-datum" d="M7 17 H93 M50 7 V93"/>
  </svg>
}

function Readout({icon,label,value}){return <div><Icon name={icon}/><span><small>{label}</small><strong>{value}</strong></span></div>}

function Icon({name}){
  const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.7',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true};
  const paths={
    problem:<><circle cx="12" cy="12" r="8"/><path d="M12 7v6M12 17h.01"/></>,
    capture:<><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><circle cx="12" cy="12" r="3"/></>,
    design:<><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 11 8 4 8-4M4 15l8 4 8-4"/></>,
    prototype:<><path d="M5 20V8l7-4 7 4v12"/><path d="M5 8l7 4 7-4M12 12v8"/></>,
    refine:<><path d="M4 12a8 8 0 0 1 13-6l3 3"/><path d="M20 4v5h-5M20 12a8 8 0 0 1-13 6l-3-3M4 20v-5h5"/></>,
    installed:<><path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="9"/></>,
    scan:<><path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4"/><path d="M7 12h10M12 7v10"/></>,
    target:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>,
    cube:<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
    material:<><path d="M4 7h16M6 7l2-3h8l2 3M6 7v13h12V7"/><path d="M9 11h6M9 15h6"/></>,
    project:<><path d="M4 5h6l2 2h8v12H4V5Z"/><path d="M8 12h8M8 15h5"/></>,
    fit:<><path d="M4 12h16M7 9l-3 3 3 3M17 9l3 3-3 3"/></>,
    alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>,
    verified:<><path d="M20 6 9 17l-5-5"/><path d="M4 6h8M4 18h5"/></>,
    service:<><path d="m14 6 4-4 4 4-4 4-4-4Z"/><path d="M18 10v8M18 18H7"/><circle cx="5" cy="18" r="2"/></>,
    amplifier:<><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 10h4M7 14h8M18 10v4"/></>,
    dash:<><rect x="4" y="5" width="16" height="12" rx="2"/><path d="M8 20h8M12 17v3"/></>,
    subwoofer:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></>
  };
  return <svg className="ttt-icon" {...common}>{paths[name]||paths.project}</svg>;
}
