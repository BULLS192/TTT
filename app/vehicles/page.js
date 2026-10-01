'use client';
import { useState } from 'react';
import AssetMedia from '../../components/AssetMedia';
import VehicleSelector from '../../components/VehicleSelector';
import { capabilityLabels } from '../../lib/vehicles';

export default function VehiclesPage(){
 const[vehicle,setVehicle]=useState({});
 const name=[vehicle.year,vehicle.make,vehicle.model,vehicle.trim].filter(Boolean).join(' ');
 return <main className="production-page">
  <section className="review-hero review-hero--compact"><AssetMedia visual="vehicleFitment" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Learn / Vehicle Fitment</p><h1>Start with the vehicle.</h1><p className="lead lead--dark">Year, make, model, trim and factory equipment narrow the product list before the project starts.</p></div></section>
  <section className="section section--soft"><div className="shell vehicle-hub"><div className="vehicle-hub__panel"><p className="eyebrow">My vehicle</p><h2>Select a vehicle</h2><VehicleSelector compact onChange={setVehicle}/><p className="form-note">Final fitment is confirmed against the specific vehicle and factory equipment before installation.</p></div><div className="vehicle-hub__result"><p className="eyebrow">TTT vehicle profile</p><h2>{name||'Your selected vehicle'}</h2><div className="vehicle-profile-visual"><span>{vehicle.year||'YEAR'}</span><strong>{vehicle.make||'MAKE'}</strong><b>{vehicle.model||'MODEL'}</b><small>{vehicle.trim||'TRIM / FACTORY EQUIPMENT'}</small></div><div className="compatibility-grid">{capabilityLabels.slice(0,4).map(([a,b])=><article key={a}><b>{a}</b><small>{b}</small></article>)}</div>{name?<div className="button-row"><a className="button button--light" href="/quote">Request a Quote →</a></div>:null}</div></div></section>
  <section className="section"><div className="shell"><div className="principle-grid"><article><small>01 / FACTORY</small><h3>Trim changes the electronics.</h3><p>Audio, cameras, controls and interfaces can vary inside the same model line.</p></article><article><small>02 / FITMENT</small><h3>Physical fit is not enough.</h3><p>Signals, controls and software can make a “compatible” part the wrong choice.</p></article><article><small>03 / SCOPE</small><h3>Better vehicle data means a better quote.</h3><p>It narrows interfaces, labor and the questions that still need answers.</p></article></div></div></section>
 </main>
}
