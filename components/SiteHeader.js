'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const menus = {
  Solutions: [
    ['Premium Vehicle Experience', '/solutions/premium-vehicle-experience'],
    ['Vehicle Security', '/solutions/vehicle-security'],
    ['Connected Vehicle', '/solutions/connected-vehicle'],
    ['Fleet Intelligence', '/solutions/fleet-intelligence'],
    ['Dealership Technology', '/solutions/dealership-technology'],
    ['Custom Integration', '/solutions/custom-integration'],
  ],
  Services: [
    ['Audio & DSP', '/services/audio'], ['Window Tint', '/services/window-tint'], ['Security', '/services/security'],
    ['GPS & Tracking', '/services/tracking'], ['Cameras', '/services/cameras'], ['Lighting', '/services/lighting'],
    ['Electronics', '/services/electronics'], ['Custom Fabrication', '/services/custom-fabrication'],
  ],
  Industries: [
    ['Vehicle Owners', '/industries/vehicle-owners'], ['Dealerships', '/industries/dealerships'], ['Fleets', '/industries/fleets'],
    ['Commercial Vehicles', '/industries/commercial-vehicles'], ['Specialty Vehicles', '/industries/specialty-vehicles'],
  ],
};

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {Object.keys(menus).map((name) => (
            <div className="nav-group" key={name} onMouseEnter={() => setActive(name)} onMouseLeave={() => setActive(null)}>
              <Link href={`/${name.toLowerCase()}`}>{name}</Link>
              <div className={`mega-menu ${active === name ? 'is-open' : ''}`}>
                <p className="eyebrow">{name}</p>
                <div className="mega-menu__grid">
                  {menus[name].map(([label, href]) => <Link key={href} href={href}>{label}<span>↗</span></Link>)}
                </div>
                <div className="mega-menu__footer"><span>Technology should feel engineered into the vehicle.</span><Link href="/start">Start a project →</Link></div>
              </div>
            </div>
          ))}
          <Link href="/concept-one">Concept One</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/vehicles">Vehicles</Link>
          <Link href="/shop">Shop</Link>
        </nav>
        <div className="header-actions">
          <Link className="icon-link" href="/account" aria-label="My TTT account">Account</Link>
          <Link className="button button--small" href="/start">Start a project</Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="shell mobile-menu__inner">
          {Object.entries(menus).map(([name, links]) => (
            <details key={name}><summary>{name}<span>+</span></summary>{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}</details>
          ))}
          <Link onClick={() => setOpen(false)} href="/concept-one">Concept One</Link>
          <Link onClick={() => setOpen(false)} href="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} href="/technology">Technology</Link>
          <Link onClick={() => setOpen(false)} href="/vehicles">Vehicle compatibility</Link>
          <Link onClick={() => setOpen(false)} href="/shop">Shop</Link>
          <Link onClick={() => setOpen(false)} href="/account">My TTT</Link>
          <Link onClick={() => setOpen(false)} className="button" href="/start">Start a project</Link>
        </div>
      </div>
    </header>
  );
}
