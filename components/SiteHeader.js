'use client';
import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const services=[
 ['Window Tint','/services/window-tint'],
 ['Audio','/services/audio'],
 ['GPS Tracking','/services/gps-tracking'],
 ['Kill Switches','/services/kill-switches'],
 ['SignalTrace™','/services/signaltrace'],
 ['Custom Fabrication','/services/custom-fabrication']
];

export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="site-header production-header">
  <div className="site-header__accent"/>
  <div className="site-header__inner shell">
   <BrandMark/>
   <nav className="production-nav" aria-label="Primary navigation">
    <div className="production-nav__services"><Link href="/services">Services <span>⌄</span></Link><div className="production-nav__dropdown">{services.map(([label,href])=><Link key={href} href={href}>{label}<span>→</span></Link>)}<hr/><Link href="/fleet-dealership">Fleet & Dealership<span>→</span></Link></div></div>
    <Link href="/services/signaltrace">SignalTrace</Link><Link href="/portfolio">Our Work</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link>
   </nav>
   <div className="header-actions"><Link className="button button--small header-cta" href="/quote">Request a Quote</Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?'Close':'Menu'}</button></div>
  </div>
  <div className={open?'production-mobile is-open':'production-mobile'}><div className="shell">
   <details><summary>Services <span>+</span></summary>{services.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</details>
   <Link onClick={()=>setOpen(false)} href="/services/signaltrace">SignalTrace</Link><Link onClick={()=>setOpen(false)} href="/portfolio">Our Work</Link><Link onClick={()=>setOpen(false)} href="/about">About</Link><Link onClick={()=>setOpen(false)} href="/faq">FAQ</Link><Link onClick={()=>setOpen(false)} href="/contact">Contact</Link><Link onClick={()=>setOpen(false)} href="/fleet-dealership">Fleet & Dealership</Link><Link onClick={()=>setOpen(false)} className="button" href="/quote">Request a Quote</Link>
  </div></div>
 </header>;
}
