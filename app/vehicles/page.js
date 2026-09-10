'use client';
import { useState } from 'react';
import VehicleSelector from '../../components/VehicleSelector';
import { capabilityLabels } from '../../lib/vehicles';

const reasons=[
  ['Factory equipment matters','The same model can use different audio systems, cameras, controls and electrical architecture depending on trim and options.'],
  ['Fitment is more than dimensions','A product can physically fit and still be the wrong choice if it conflicts with factory signals, controls or other technology.'],
  ['Vehicle context improves recommendations','Knowing the exact vehicle helps narrow interfaces, installation strategy, expected labor and the questions that need to be answered before quoting.'],
  ['The vehicle record should live beyond one job','A useful TTT vehicle profile can later connect projects, installed equipment, service history and future upgrades in one place.']
];

export default function VehiclesPage(){
 const [vehicle,setVehicle]=useState({});
 const name=[vehicle.year,vehicle.make,vehicle.model,vehicle.trim].filter(Boolean).join(' ');
 return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Vehicle compatibility</p><h1>Start with the vehicle. Build the technology around it.</h1><p className="lead">Year, make, model, trim and factory equipment create the technical context for better product choices, cleaner integration and more accurate project planning.</p></div></section>

  <section className="section section--soft"><div className="shell vehicle-hub">
    <div className="vehicle-hub__panel"><p className="eyebrow">My vehicle</p><h2>Select a vehicle</h2><VehicleSelector compact onChange={setVehicle}/><p className="form-note">Vehicle selection creates the starting context for TTT recommendations. Final fitment is always confirmed against the specific vehicle and equipment before installation.</p></div>
    <div className="vehicle-hub__result"><p className="eyebrow">TTT vehicle profile</p><h2>{name||'Your selected vehicle'}</h2><p>{name?'Use this vehicle as the starting point for service, solution and project planning.':'Select a year, make and model to preview the technology areas TTT can evaluate.'}</p><div className="compatibility-grid">{capabilityLabels.map(([a,b])=><article key={a}><b>{a}</b><small>{b}</small></article>)}</div><div className="mini-specs"><div><span>Vehicle context</span><strong>{name?'Selected':'Awaiting vehicle'}</strong></div><div><span>Fitment</span><strong>Verified per project</strong></div><div><span>TTT record</span><strong>Project-linked</strong></div></div>{name&&<div className="button-row"><a className="button button--light" href="/start">Start a project →</a><a className="button button--ghost-dark" href="/shop">Explore technology</a></div>}</div>
  </div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Why vehicle-specific matters</p><h2>The product list should get narrower once we know the vehicle.</h2></div><div className="section-copy"><p>TTT does not want “universal” to become a substitute for proper fitment. Vehicle context helps determine what can be preserved, what needs an interface, what may require custom fabrication and what should be ruled out before a customer spends money.</p></div></div><div className="system-layer-grid">{reasons.map(([title,body],i)=><article className="system-layer" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
 </main>
}
