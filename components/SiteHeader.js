'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const menus = {
  Solutions: {
    href:'/solutions',
    intro:'Start with what you want the vehicle to do better.',
    links:[
      ['Premium Vehicle Experience','Audio, comfort and technology planned together.','/solutions/premium-vehicle-experience'],
      ['Vehicle Security','Immobilization, tracking and diagnostics planned as layers.','/solutions/vehicle-security'],
      ['Connected Vehicle','Tracking, alerts and connected services.','/solutions/connected-vehicle'],
      ['Fleet & Dealership','Repeatable technology across multiple vehicles.','/solutions/fleet-dealership'],
      ['Custom Integration','When the requirement does not fit a standard package.','/solutions/custom-integration'],
      ['All Solutions','Start with the outcome.','/solutions']
    ]
  },
  Services: {
    href:'/services',
    intro:'The actual work performed on the vehicle.',
    links:[
      ['Window Tint','Heat, glare, UV and privacy control.','/services/window-tint'],
      ['Automotive Audio','Signal integration, amplification, speakers and tuning.','/services/audio'],
      ['GPS Tracking','Location, geofencing and vehicle visibility.','/services/gps-tracking'],
      ['Kill Switches','An independent layer of immobilization.','/services/kill-switches'],
      ['TTT SignalTrace™','Root-cause diagnostics for difficult electrical faults.','/services/signaltrace'],
      ['Custom Fabrication','CAD, 3D printing, mounts, panels and enclosures.','/services/custom-fabrication'],
      ['All Services','See the complete service set.','/services']
    ]
  },
  Business: {
    href:'/industries',
    intro:'Repeatable vehicle technology for organizations.',
    links:[
      ['Dealerships','Accessory and technology programs built for dealer workflow.','/industries/dealerships'],
      ['Fleets','Standardized technology across fleet vehicles.','/industries/fleets'],
      ['Commercial Vehicles','Systems for service vehicles and mobile workforces.','/industries/commercial-vehicles'],
      ['Fleet & Dealership Solution','The same result on every vehicle.','/solutions/fleet-dealership'],
      ['Greater Houston','Local project and program coverage.','/service-area'],
      ['Work With Us','Manufacturers, distributors and service partners.','/work-with-us']
    ]
  },
  Learn: {
    href:'/resources',
    intro:'Understand the system before choosing the hardware.',
    links:[
      ['Technology Library','DSP, OEM integration, telematics and vehicle electronics.','/technology'],
      ['The TTT Standard','The workmanship baseline behind the work.','/standards'],
      ['Articles','Guides, explainers and practical buying advice.','/articles'],
      ['Projects','Concept One and the TTT case-study framework.','/projects'],
      ['FAQ','Quality, fitment, installation and support.','/faq'],
      ['Vehicle Fitment','Start with year, make, model and trim.','/vehicles']
    ]
  }
};

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState(null);
  const closeWhenFocusLeaves=(name,event)=>{if(!event.currentTarget.contains(event.relatedTarget))setActive(current=>current===name?null:current)};
  return <header className="site-header production-header">
    <div className="site-header__accent"/>
    <div className="site-header__inner shell">
      <BrandMark/>
      <nav className="production-nav" aria-label="Primary navigation">
        {Object.entries(menus).map(([name,menu])=><div className="production-nav__group" key={name}
          onMouseEnter={()=>setActive(name)} onMouseLeave={()=>setActive(null)}
          onFocus={()=>setActive(name)} onBlur={e=>closeWhenFocusLeaves(name,e)}
          onKeyDown={e=>{if(e.key==='Escape'){setActive(null);e.currentTarget.querySelector('.production-nav__trigger')?.focus()}}}>
          <Link className="production-nav__trigger" href={menu.href} aria-haspopup="true" aria-expanded={active===name}>{name}<span aria-hidden="true">⌄</span></Link>
          <div className={active===name?'production-mega is-open':'production-mega'}>
            <div className="production-mega__intro"><p className="eyebrow">{name}</p><h3>{menu.intro}</h3></div>
            <div className="production-mega__grid">{menu.links.map(([label,description,href])=><Link key={href} href={href}><span><b>{label}</b><small>{description}</small></span><em>↗</em></Link>)}</div>
          </div>
        </div>)}
        <Link href="/concept-one">Concept One</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="header-actions">
        <Link className="button button--small header-cta" href="/quote">Request a Quote</Link>
        <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="production-mobile-menu">{open?'Close':'Menu'}</button>
      </div>
    </div>
    <div id="production-mobile-menu" className={open?'production-mobile is-open':'production-mobile'}><div className="shell">
      {Object.entries(menus).map(([name,menu])=><details key={name}><summary>{name}<span>+</span></summary>{menu.links.map(([label,,href])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</details>)}
      <Link onClick={()=>setOpen(false)} href="/concept-one">Concept One</Link>
      <Link onClick={()=>setOpen(false)} href="/about">About</Link>
      <Link onClick={()=>setOpen(false)} className="button" href="/quote">Request a Quote</Link>
    </div></div>
  </header>;
}
