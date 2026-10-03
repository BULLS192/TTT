'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import AssetMedia from './AssetMedia';
import VehicleSelector from './VehicleSelector';
import { useTTTBuild, vehicleSummary } from './wave2/TTTBuildContext';
import { trackWebsiteEvent } from '../lib/visitor';

const priorities=['Heat & glare','Sound quality','Security','Connected awareness','Factory-like integration','Electrical reliability','Custom fitment'];

const systems=[
  {
    id:'glass',
    n:'01',
    label:'Glass',
    title:'Control heat, glare, privacy and outward visibility.',
    visual:'tintHero',
    category:'Window Tint',
    service:'Window Tint',
    href:'/services/window-tint#interactive',
    action:'Open Glass Lab',
    role:'Changes what the cabin feels like and what can be seen through the glass.',
    depends:'Film family, shade, lighting conditions and the actual glass in the vehicle.',
    priorities:['Heat & glare','Factory-like integration']
  },
  {
    id:'audio',
    n:'02',
    label:'Audio',
    title:'Build the cabin around a believable listening experience.',
    visual:'audioHero',
    category:'Automotive Audio',
    service:'Automotive Audio',
    href:'/services/audio#interactive',
    action:'Open Audio Lab',
    role:'Changes clarity, staging, output and how evenly the system reaches the people inside the vehicle.',
    depends:'Factory source, speakers, amplification, processing, cabin acoustics and tuning.',
    priorities:['Sound quality','Factory-like integration']
  },
  {
    id:'tracking',
    n:'03',
    label:'Tracking',
    title:'Turn vehicle movement into useful information.',
    visual:'gpsHero',
    category:'GPS Tracking',
    service:'GPS Tracking',
    href:'/services/gps-tracking#interactive',
    action:'Open Tracking Journey',
    role:'Adds location, movement awareness, geofencing and trip/event visibility where the selected platform supports it.',
    depends:'Hardware, platform, subscription, coverage, power strategy and authorized use.',
    priorities:['Connected awareness','Security','Electrical reliability']
  },
  {
    id:'security',
    n:'04',
    label:'Security',
    title:'Add independent layers beyond the factory baseline.',
    visual:'securityHero',
    category:'Vehicle Security',
    service:'Kill Switches / Security',
    href:'/services/kill-switches#interactive',
    action:'Open Security Scenario',
    role:'Adds another barrier to unauthorized use and can work alongside tracking and alerting.',
    depends:'Vehicle architecture, authorized-user routine, installed hardware and safe integration.',
    priorities:['Security','Electrical reliability','Factory-like integration']
  },
  {
    id:'fabrication',
    n:'05',
    label:'Fabrication',
    title:'Engineer the interface when the vehicle does not provide one.',
    visual:'fabricationFitmentInstalled',
    category:'Custom Fabrication',
    service:'Custom Fabrication',
    href:'/services/custom-fabrication#interactive',
    action:'Open Fitment Demo',
    role:'Creates mounts, brackets, interfaces and enclosures when off-the-shelf parts do not solve the packaging problem cleanly.',
    depends:'Real vehicle geometry, hardware dimensions, service access and how the part must be manufactured.',
    priorities:['Custom fitment','Factory-like integration']
  },
  {
    id:'integration',
    n:'06',
    label:'Integration',
    title:'Make the visible upgrades behave like one vehicle.',
    visual:'homeHeroTechnical',
    category:'Vehicle Integration',
    service:'TTT Standard',
    href:'/standards',
    action:'See The TTT Standard',
    role:'Power, protection, grounding, routing, factory interfaces, serviceability and documentation are the hidden layer every other system depends on.',
    depends:'The complete vehicle plan—not a single accessory.',
    priorities:['Electrical reliability','Factory-like integration','Custom fitment']
  }
];

export default function ConceptOneSystemHub(){
  const{items,addItem,removeItem,profile,updateProfile,toggleGoal,setOpen}=useTTTBuild();
  const[activeId,setActiveId]=useState('glass');
  const active=useMemo(()=>systems.find(x=>x.id===activeId)||systems[0],[activeId]);
  const includedIds=useMemo(()=>new Set(items.filter(x=>String(x.id||'').startsWith('concept-one-system-')).map(x=>String(x.id).replace('concept-one-system-',''))),[items]);
  const vehicle=vehicleSummary(profile);

  const matched=useMemo(()=>{
    if(!profile.goals.length)return [];
    return systems.filter(system=>system.priorities.some(goal=>profile.goals.includes(goal))).map(system=>system.id);
  },[profile.goals]);

  const setActive=(id)=>{
    setActiveId(id);
    trackWebsiteEvent('concept_one','view_system',{system:id});
  };

  const toggleSystem=(system)=>{
    const id='concept-one-system-'+system.id;
    if(includedIds.has(system.id)){
      removeItem(id);
      trackWebsiteEvent('concept_one','remove_system',{system:system.id});
    }else{
      addItem({
        id,
        category:system.category,
        title:system.service,
        detail:'Explore '+system.label+' as part of the Concept One vehicle plan',
        summary:system.label+' system'
      });
      trackWebsiteEvent('concept_one','include_system',{system:system.id});
    }
  };

  const askTessa=()=>{
    const selected=systems.filter(system=>includedIds.has(system.id)).map(system=>system.label).join(', ');
    const prompt=[
      'Please review my Concept One project direction.',
      vehicle?'Vehicle: '+vehicle+'.':'',
      profile.goals.length?'Priorities: '+profile.goals.join(', ')+'.':'',
      selected?'Systems I am considering: '+selected+'.':''
    ].filter(Boolean).join(' ');
    window.dispatchEvent(new CustomEvent('ttt:tessa-open',{detail:{prompt}}));
    trackWebsiteEvent('concept_one','handoff_tessa',{systems:includedIds.size,goalCount:profile.goals.length});
  };

  return <div className="concept3q">
    <section className="concept3q__context">
      <div className="concept3q__context-head">
        <div><small>YOUR PROJECT CONTEXT</small><strong>{vehicle||'Add a vehicle if you want this reference build tied to a real project.'}</strong></div>
        <span>{includedIds.size} SYSTEM{includedIds.size===1?'':'S'} IN PROJECT</span>
      </div>
      <VehicleSelector compact initialValue={profile} onChange={updateProfile}/>
      <div className="concept3q__priorities">
        <small>What matters most?</small>
        <div>{priorities.map(goal=><button type="button" key={goal} className={profile.goals.includes(goal)?'is-active':''} aria-pressed={profile.goals.includes(goal)} onClick={()=>toggleGoal(goal)}>{goal}</button>)}</div>
      </div>
    </section>

    <div className="concept3q__hub">
      <div className="concept3q__stage">
        <div className="concept3q__media-stack" aria-live="polite">
          {systems.map(system=><div key={system.id} className={'concept3q__media '+(active.id===system.id?'is-active':'')}><AssetMedia visual={system.visual}/><div className="concept3q__media-overlay"/></div>)}
        </div>
        <div className="concept3q__stage-top">
          <span><i/>CONCEPT ONE · SYSTEM VIEW</span>
          <b>REFERENCE VEHICLE</b>
        </div>
        <div className="concept3q__stage-copy">
          <small>{active.n} / {String(systems.length).padStart(2,'0')} · {active.category}</small>
          <h2>{active.title}</h2>
          <p>{active.role}</p>
          <div className="concept3q__stage-actions">
            <Link className="button" href={active.href} onClick={()=>trackWebsiteEvent('concept_one','open_service_experience',{system:active.id})}>{active.action} →</Link>
            <button type="button" className={'button button--ghost-dark '+(includedIds.has(active.id)?'is-included':'')} onClick={()=>toggleSystem(active)}>
              {includedIds.has(active.id)?'✓ In My TTT Build':'＋ Consider this system'}
            </button>
          </div>
        </div>
      </div>

      <aside className="concept3q__rail" aria-label="Concept One systems">
        <div className="concept3q__rail-head"><small>SYSTEM LAYERS</small><strong>Select a layer to understand its role.</strong></div>
        {systems.map(system=>{
          const isMatch=matched.includes(system.id);
          return <button type="button" key={system.id} className={(active.id===system.id?'is-active ':'')+(includedIds.has(system.id)?'is-included':'')} onClick={()=>setActive(system.id)}>
            <i>{system.n}</i>
            <span><strong>{system.label}</strong><small>{system.service}</small></span>
            <span className="concept3q__rail-status">{includedIds.has(system.id)?'IN BUILD':isMatch?'MATCHES PRIORITIES':'EXPLORE'}</span>
          </button>
        })}
      </aside>
    </div>

    <div className="concept3q__detail">
      <div><small>WHAT THIS LAYER DOES</small><strong>{active.role}</strong></div>
      <div><small>WHAT IT DEPENDS ON</small><strong>{active.depends}</strong></div>
      <div><small>RELATED PRIORITIES</small><strong>{active.priorities.join(' · ')}</strong></div>
    </div>

    <section className="concept3q__brief">
      <div className="concept3q__brief-copy">
        <p className="eyebrow">Project brief</p>
        <h2>{vehicle||'Your Concept One direction'}</h2>
        <p>{profile.goals.length?'Priorities: '+profile.goals.join(', ')+'.':'Add priorities above to make the handoff more useful.'}</p>
      </div>
      <div className="concept3q__brief-systems">
        {systems.filter(system=>includedIds.has(system.id)).length?
          systems.filter(system=>includedIds.has(system.id)).map(system=><div key={system.id}><span>{system.n}</span><strong>{system.label}</strong><small>{system.service}</small></div>):
          <p>No systems have been added yet. Explore the layers above and include only the ones you actually want to discuss.</p>}
      </div>
      <div className="concept3q__brief-actions">
        <button type="button" className="button button--ghost" onClick={()=>setOpen(true)}>Open My TTT Build</button>
        <button type="button" className="button button--ghost" onClick={askTessa}>Ask Tessa about this direction →</button>
        <Link className="button" href="/quote?from=concept-one">Continue to Quote →</Link>
      </div>
      <p className="concept3q__disclaimer">Concept One is a reference vehicle and planning tool. It does not confirm compatibility, legal requirements, final hardware, pricing or installation scope for a specific vehicle.</p>
    </section>
  </div>;
}
