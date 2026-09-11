'use client';
import { useState } from 'react';
import AutoVisual from '../../components/AutoVisual';
import VehicleSelector from '../../components/VehicleSelector';
import { capabilityLabels } from '../../lib/vehicles';

export default function VehiclesPage(){
 const [vehicle,setVehicle]=useState({});
 const name=[vehicle.year,vehicle.make,vehicle.model,vehicle.trim].filter(Boolean).join(' ');
 return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Vehicle compatibility</p><h1>Start with the vehicle.</h1><p className="lead">Year, make, model, trim and factory equipment narrow the product list before the project starts.</p></div><AutoVisual variant="concept" eyebrow="YEAR / MAKE / MODEL / TRIM"/></div></section>

  <section className="section section--soft"><div className="shell vehicle-hub">
    <div className="vehicle-hub__panel"><p className="eyebrow">My vehicle</p><h2>Select a vehicle</h2><VehicleSelector compact onChange={setVehicle}/><p className="form-note">Final fitment is confirmed against the specific vehicle and factory equipment before installation.</p></div>
    <div className="vehicle-hub__result"><p className="eyebrow">TTT vehicle profile</p><h2>{name||'Your selected vehicle'}</h2><AutoVisual variant="technology" eyebrow={name||'VEHICLE PROFILE'}/><div className="compatibility-grid">{capabilityLabels.slice(0,4).map(([a,b])=><article key={a}><b>{a}</b><small>{b}</small></article>)}</div>{name&&<div className="button-row"><a className="button button--light" href="/start">Start a project →</a></div>}</div>
  </div></section>

  <section className="section"><div className="shell"><div className="visual-stat-strip"><div className="visual-stat"><small>01 / FACTORY</small><strong>Trim changes the electronics.</strong><p>Audio, cameras, controls and interfaces can vary inside the same model line.</p></div><div className="visual-stat"><small>02 / FITMENT</small><strong>Physical fit is not enough.</strong><p>Signals, controls and software can make a “compatible” part the wrong choice.</p></div><div className="visual-stat"><small>03 / SCOPE</small><strong>Better vehicle data means a better quote.</strong><p>It narrows interfaces, labor and the questions that still need answers.</p></div></div></div></section>
 </main>
}
