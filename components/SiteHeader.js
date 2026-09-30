'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const services = [
  ['Window Tint','Heat, glare and UV control','/services/window-tint'],
  ['Audio','Upgrades, integration and tuning','/services/audio'],
  ['GPS Tracking','Location, alerts and geofencing','/services/gps-tracking'],
  ['Kill Switches','An added layer of theft deterrence','/services/kill-switches'],
  ['SignalTrace™','Advanced vehicle electronics diagnostics','/services/signaltrace'],
  ['Custom Fabrication','Parts designed to fit','/services/custom-fabrication'],
  ['Fleet & Dealership','For businesses with several vehicles','/fleet-dealership']
];

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  const [servicesOpen,setServicesOpen]=useState(false);
  return <header className="site-header site-header--premium">
    <div className="site-header__accent"/>
    <div className="site-header__inner shell">
      <BrandMark/>
      <nav className="desktop-nav desktop-nav--premium" aria-label="Primary navigation">
        <div className="nav-group" onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)} onFocus={()=>setServicesOpen(true)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setServicesOpen(false)}}>
          <Link className="nav-trigger" href="/services" aria-haspopup="true" aria-expanded={servicesOpen}>Services<span aria-hidden="true">⌄</span></Link>
          <div className={'mega-menu mega-menu--premium '+(servicesOpen?'is-open':'')}>
            <div className="mega-menu__intro"><p className="eyebrow">Services</p><h3>The actual work performed on the vehicle.</h3></div>
            <div className="mega-menu__grid mega-menu__grid--described">{services.map(([label,description,href])=><Link key={href} href={href}><span><b>{label}</b><small>{description}</small></span><em>↗</em></Link>)}</div>
            <div className="mega-menu__footer"><span>Plan. Integrate. Verify.</span><Link href="/quote">Request a Quote →</Link></div>
          </div>
        </div>
        <Link href="/services/signaltrace">SignalTrace</Link>
        <Link href="/portfolio">Our Work</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <Link className="button button--small header-cta" href="/quote">Request a Quote</Link>
        <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open?'Close':'Menu'}</button>
      </div>
    </div>
    <div id="mobile-menu" className={'mobile-menu '+(open?'is-open':'')}>
      <div className="shell mobile-menu__inner">
        <details><summary>Services<span>+</span></summary>{services.map(([label,,href])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</details>
        <Link onClick={()=>setOpen(false)} href="/services/signaltrace">SignalTrace</Link>
        <Link onClick={()=>setOpen(false)} href="/portfolio">Our Work</Link>
        <Link onClick={()=>setOpen(false)} href="/about">About</Link>
        <Link onClick={()=>setOpen(false)} href="/faq">FAQ</Link>
        <Link onClick={()=>setOpen(false)} href="/contact">Contact</Link>
        <Link onClick={()=>setOpen(false)} href="/fleet-dealership">Fleet & Dealership</Link>
        <Link onClick={()=>setOpen(false)} className="button" href="/quote">Request a Quote</Link>
      </div>
    </div>
  </header>;
}