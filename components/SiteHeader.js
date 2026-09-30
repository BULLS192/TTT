'use client';
import Link from 'next/link';
import {useState} from 'react';
import BrandMark from './BrandMark';

const services=[
 ['Window Tint','/services/window-tint'],['Audio','/services/audio'],['GPS Tracking','/services/gps-tracking'],['Kill Switches','/services/kill-switches'],['SignalTrace™','/services/signaltrace'],['Custom Fabrication','/services/custom-fabrication']
];

export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="shell site-header__inner"><Link href="/" aria-label="TTT home"><BrandMark/></Link>
   <nav className="desktop-nav">
     <div className="nav-group"><a href="#services-menu">Services</a><div className="mega-menu" id="services-menu"><p className="eyebrow">Services</p><div className="mega-menu__grid">{services.map(([l,h])=><Link href={h} key={h}>{l}<span>→</span></Link>)}</div><div className="mega-menu__footer"><Link href="/fleet-dealership">Fleet & Dealership →</Link><Link href="/services">All services →</Link></div></div></div>
     <Link href="/services/signaltrace">SignalTrace</Link><Link href="/portfolio">Our Work</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link>
   </nav>
   <div className="header-actions"><Link className="button button--small" href="/quote">Request a Quote</Link><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open}>Menu</button></div>
 </div>
 <div className={`mobile-menu ${open?'is-open':''}`}><div className="shell mobile-menu__inner">{services.map(([l,h])=><Link onClick={()=>setOpen(false)} href={h} key={h}>{l}</Link>)}<Link onClick={()=>setOpen(false)} href="/fleet-dealership">Fleet & Dealership</Link><Link onClick={()=>setOpen(false)} href="/portfolio">Our Work</Link><Link onClick={()=>setOpen(false)} href="/about">About</Link><Link onClick={()=>setOpen(false)} href="/faq">FAQ</Link><Link onClick={()=>setOpen(false)} href="/contact">Contact</Link><Link onClick={()=>setOpen(false)} className="button" href="/quote">Request a Quote</Link></div></div>
 </header>
}
