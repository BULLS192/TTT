'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const menus = {
  Solutions: {
    intro: 'Outcome-led vehicle technology, designed as one integrated system.',
    links: [
      ['Premium Vehicle Experience', 'Audio, comfort and technology working together.', '/solutions/premium-vehicle-experience'],
      ['Vehicle Security', 'Layered deterrence, monitoring and recovery.', '/solutions/vehicle-security'],
      ['Connected Vehicle', 'Tracking, control and connected services.', '/solutions/connected-vehicle'],
      ['Fleet Intelligence', 'Visibility and standardization across vehicles.', '/solutions/fleet-intelligence'],
      ['Dealership Technology', 'Repeatable programs for dealer operations.', '/solutions/dealership-technology'],
      ['Custom Integration', 'Purpose-built systems outside the standard menu.', '/solutions/custom-integration'],
    ],
  },
  Services: {
    intro: 'Technical capabilities for the vehicle, cabin, glass and connected layer.',
    links: [
      ['Audio & DSP', 'OEM integration, amplification, speakers and tuning.', '/services/audio'],
      ['Window Tint', 'Film selection for comfort, protection and privacy.', '/services/window-tint'],
      ['Security', 'Alarms, immobilization and layered protection.', '/services/security'],
      ['GPS & Tracking', 'Location, geofencing and telematics.', '/services/tracking'],
      ['Cameras', 'Dash, rear, multi-channel and fleet camera systems.', '/services/cameras'],
      ['Lighting', 'Interior, exterior and utility lighting integration.', '/services/lighting'],
      ['Electronics', 'Remote start, charging and vehicle accessories.', '/services/electronics'],
      ['Custom Fabrication', 'Clean mounting, trim and integration work.', '/services/custom-fabrication'],
    ],
  },
  Industries: {
    intro: 'Different operating environments need different technology programs.',
    links: [
      ['Vehicle Owners', 'Personal, luxury, performance and specialty vehicles.', '/industries/vehicle-owners'],
      ['Dealerships', 'Dealer-installed accessories and technology programs.', '/industries/dealerships'],
      ['Fleets', 'Standardized technology across fleet vehicles.', '/industries/fleets'],
      ['Commercial Vehicles', 'Systems for mobile workforces and service vehicles.', '/industries/commercial-vehicles'],
      ['Specialty Vehicles', 'Purpose-built and unusual vehicle applications.', '/industries/specialty-vehicles'],
    ],
  },
  Resources: {
    intro: 'Independent explanations, practical guidance and TTT field knowledge.',
    links: [
      ['Articles', 'Original TTT perspectives on vehicle technology and integration.', '/articles'],
      ['FAQ', 'Common questions about services, process, fitment and support.', '/resources/faq'],
      ['Knowledge Center', 'Technology, vehicle and buying guides.', '/resources'],
      ['Technology Library', 'Understand the systems behind the finished build.', '/technology'],
      ['Work With Us', 'Manufacturers, distributors and service partners.', '/work-with-us'],
    ],
  },
};

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <header className="site-header site-header--premium">
      <div className="site-header__accent" />
      <div className="site-header__inner shell">
        <BrandMark />
        <nav className="desktop-nav desktop-nav--premium" aria-label="Primary navigation">
          {Object.entries(menus).map(([name, menu]) => (
            <div className="nav-group" key={name} onMouseEnter={() => setActive(name)} onMouseLeave={() => setActive(null)}>
              <Link className="nav-trigger" href={name === 'Resources' ? '/resources' : `/${name.toLowerCase()}`}>{name}<span aria-hidden="true">⌄</span></Link>
              <div className={`mega-menu mega-menu--premium ${active === name ? 'is-open' : ''}`}>
                <div className="mega-menu__intro"><p className="eyebrow">{name}</p><h3>{menu.intro}</h3></div>
                <div className="mega-menu__grid mega-menu__grid--described">
                  {menu.links.map(([label, description, href]) => <Link key={href} href={href}><span><b>{label}</b><small>{description}</small></span><em>↗</em></Link>)}
                </div>
                <div className="mega-menu__footer"><span>Consult. Design. Integrate. Install. Validate. Support.</span><Link href="/start">Start a project →</Link></div>
              </div>
            </div>
          ))}
          <Link href="/concept-one">Concept One</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/shop">Shop</Link>
        </nav>
        <div className="header-actions">
          <Link className="account-pill" href="/account" aria-label="My TTT account"><span aria-hidden="true">●</span> My TTT</Link>
          <Link className="button button--small header-cta" href="/start">Start a project</Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="shell mobile-menu__inner">
          {Object.entries(menus).map(([name, menu]) => (
            <details key={name}><summary>{name}<span>+</span></summary>{menu.links.map(([label, , href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}</details>
          ))}
          <Link onClick={() => setOpen(false)} href="/concept-one">Concept One</Link>
          <Link onClick={() => setOpen(false)} href="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} href="/shop">Shop</Link>
          <Link onClick={() => setOpen(false)} href="/account">My TTT</Link>
          <Link onClick={() => setOpen(false)} className="button" href="/start">Start a project</Link>
        </div>
      </div>
    </header>
  );
}
