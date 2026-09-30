'use client';
import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const groups={
  Services:{
    href:'/services',
    intro:'The work performed on the vehicle.',
    links:[
      ['Window Tint','Heat, glare, UV and privacy control.','/services/window-tint'],
      ['Audio','Factory integration, amplification, speakers and tuning.','/services/audio'],
      ['GPS Tracking','Location, alerts, geofencing and vehicle visibility.','/services/gps-tracking'],
      ['Kill Switches','An added layer of theft deterrence and control.','/services/kill-switches'],
      ['SignalTrace™','Structured diagnostics for difficult electrical faults.','/services/signaltrace'],
      ['Custom Fabrication','Brackets, mounts, enclosures and vehicle-specific parts.','/services/custom-fabrication']
    ]
  },
  Solutions:{
    href:'/solutions',
    intro:'Start with the outcome, then define the technology.',
    links:[
      ['Premium Vehicle Experience','Comfort, sound and technology planned together.','/solutions/premium-vehicle-experience'],
      ['Vehicle Security','Layered protection, awareness and recovery support.','/solutions/vehicle-security'],
      ['Connected Vehicle','Tracking and connected features without unnecessary clutter.','/solutions/connected-vehicle'],
      ['Fleet & Dealership','Repeatable vehicle technology for organizations.','/fleet-dealership'],
      ['Custom Integration','For requirements that do not fit a standard package.','/solutions/custom-integration'],
      ['Concept One','The reference vehicle behind the TTT integration standard.','/concept-one']
    ]
  },
  Contact:{
    href:'/contact',
    intro:'Choose the fastest way to get the right conversation started.',
    links:[
      ['Contact TTT','Send a general message or describe what you need.','/contact'],
      ['FAQ','Quality, services, delivery, support and common questions.','/faq'],
      ['Request a Quote','Share your vehicle and project details.','/quote']
    ]
  }
};

export default function SiteHeader(){
  const [mobileOpen,setMobileOpen]=useState(false);
  const [active,setActive]=useState(null);
  const leave=(name,event)=>{if(!event.currentTarget.contains(event.relatedTarget))setActive(v=>v===name?null:v)};
  return <header className="site-header production-header">
    <div className="site-header__accent"/>
    <div className="site-header__inner shell">
      <BrandMark/>
      <nav className="production-nav" aria-label="Primary navigation">
        {['Services','Solutions'].map(name=>{
          const menu=groups[name];
          return <div className="production-nav__group" key={name}
            onMouseEnter={()=>setActive(name)} onMouseLeave={()=>setActive(null)}
            onFocus={()=>setActive(name)} onBlur={e=>leave(name,e)}>
            <Link className="production-nav__trigger" href={menu.href} aria-haspopup="true" aria-expanded={active===name}>{name}<span>⌄</span></Link>
            <div className={active===name?'production-mega is-open':'production-mega'}>
              <div className="production-mega__intro"><p className="eyebrow">{name}</p><h3>{menu.intro}</h3></div>
              <div className="production-mega__grid">{menu.links.map(([label,desc,href])=><Link href={href} key={href}><span><b>{label}</b><small>{desc}</small></span><em>↗</em></Link>)}</div>
            </div>
          </div>
        })}
        <Link href="/articles">Articles</Link>
        <Link href="/about">About</Link>
        <div className="production-nav__group"
          onMouseEnter={()=>setActive('Contact')} onMouseLeave={()=>setActive(null)}
          onFocus={()=>setActive('Contact')} onBlur={e=>leave('Contact',e)}>
          <Link className="production-nav__trigger" href="/contact" aria-haspopup="true" aria-expanded={active==='Contact'}>Contact<span>⌄</span></Link>
          <div className={active==='Contact'?'production-mega production-mega--compact is-open':'production-mega production-mega--compact'}>
            <div className="production-mega__intro"><p className="eyebrow">Contact</p><h3>{groups.Contact.intro}</h3></div>
            <div className="production-mega__grid">{groups.Contact.links.map(([label,desc,href])=><Link href={href} key={href}><span><b>{label}</b><small>{desc}</small></span><em>↗</em></Link>)}</div>
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <Link className="button button--small header-cta" href="/quote">Request a Quote</Link>
        <button className="menu-button" onClick={()=>setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="production-mobile-menu">{mobileOpen?'Close':'Menu'}</button>
      </div>
    </div>
    <div id="production-mobile-menu" className={mobileOpen?'production-mobile is-open':'production-mobile'}><div className="shell">
      {['Services','Solutions'].map(name=><details key={name}><summary>{name}<span>+</span></summary>{groups[name].links.map(([label,,href])=><Link onClick={()=>setMobileOpen(false)} key={href} href={href}>{label}</Link>)}</details>)}
      <Link onClick={()=>setMobileOpen(false)} href="/articles">Articles</Link>
      <Link onClick={()=>setMobileOpen(false)} href="/about">About</Link>
      <details><summary>Contact <span>+</span></summary>{groups.Contact.links.map(([label,,href])=><Link onClick={()=>setMobileOpen(false)} key={href} href={href}>{label}</Link>)}</details>
      <Link onClick={()=>setMobileOpen(false)} className="button" href="/quote">Request a Quote</Link>
    </div></div>
  </header>;
}
