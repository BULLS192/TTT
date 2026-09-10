'use client';
import { useMemo, useState } from 'react';
import { currentYears, vehicleMakes } from '../lib/vehicles';

export default function VehicleSelector({ compact=false, onChange }){
  const [year,setYear]=useState(''); const [make,setMake]=useState(''); const [model,setModel]=useState(''); const [trim,setTrim]=useState('');
  const models=useMemo(()=>vehicleMakes[make]||[],[make]);
  const emit=(next)=>onChange?.({year,make,model,trim,...next});
  const changeMake=(v)=>{setMake(v);setModel('');emit({make:v,model:''})};
  return <div className="vehicle-selector">
    <label>Year<select value={year} onChange={e=>{setYear(e.target.value);emit({year:e.target.value})}}><option value="">Select year</option>{currentYears.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Make<select value={make} onChange={e=>changeMake(e.target.value)}><option value="">Select make</option>{Object.keys(vehicleMakes).map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Model<select value={model} disabled={!make} onChange={e=>{setModel(e.target.value);emit({model:e.target.value})}}><option value="">Select model</option>{models.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Trim<input value={trim} onChange={e=>{setTrim(e.target.value);emit({trim:e.target.value})}} placeholder="Optional" /></label>
    {!compact&&<div className="vehicle-selector__summary"><div><span>Your vehicle</span><strong>{[year,make,model,trim].filter(Boolean).join(' ')||'Choose a vehicle to personalize TTT'}</strong></div><a className="button button--small" href="/start">Build this vehicle →</a></div>}
  </div>
}
