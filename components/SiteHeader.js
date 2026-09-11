'use client';

import { useState } from 'react';
import Link from 'next/link';
import BrandMark from './BrandMark';

const menus = {
  Solutions: {
    intro: 'Start with what you want the vehicle to do better.',
    links: [
      ['Premium Vehicle Experience', 'Audio, comfort and technology planned together.', '/solutions/premium-vehicle-experience'],
      ['Vehicle Security', 'Deterrence, detection, immobilization and recovery layers.', '/solutions/vehicle-security'],
      ['Connected Vehicle', 'Tracking, cameras and connected services.', '/solutions/connected-vehicle'],
      ['Fleet Intelligence', 'Repeatable technology across multiple vehicles.', '/solutions/fleet-intelligence'],
      ['Dealership Technology', 'Accessory and technology programs built for dealer workflow.', '/solutions/dealership-technology'],
      ['Custom Integration', 'When the requirement does not fit a standard package.', '/solutions/custom-integration'],
    ],
  },
  Services: {
    intro: 'The actual work performed on the vehicle.',
    links: [
      ['Audio & DSP', 'Signal integration, amplification, speakers and tuning.', '/services/audio'],
      ['Window Tint', 'Film selected for heat, visibility, privacy and appearance.', '/services/window-tint'],
      ['Security', 'Layered protection without publishing sensitive install details.', '/services/security'],
      ['GPS & Tracking', 'Location, geofencing and telematics.', '/services/tracking'],
      ['Cameras', 'Dash, rear, parking and fleet video systems.', '/services/cameras'],
      ['Lighting', 'Interior, exterior and work lighting.', '/services/lighting'],
      ['Electronics', 'Remote start, charging and vehicle accessories.', '/services/electronics'],
      ['Custom Fabrication', 'Mounts, panels and enclosures built for the vehicle.', '/services/custom-fabrication'],
    ],
  },
  Industries: {
    intro: 'The install changes when the operating model changes.',
    links: [
      ['Vehicle Owners', 'Personal, luxury, performance and specialty vehicles.', '/industries/vehicle-owners'],
      ['Dealerships', 'Dealer-installed accessories and technology programs.', '/industries/dealerships'],
      ['Fleets', 'Standardized technology across fleet vehicles.', '/industries/fleets'],
      ['Commercial Vehicles', 'Systems for service vehicles and mobile workforces.', '/industries/commercial-vehicles'],
      ['Specialty Vehicles', 'Unusual platforms and higher-complexity projects.', '/industries/specialty-vehicles'],
      ['Greater Houston', 'Local service-area information.', '/service-area'],
    ],
  },
  Technology: {
    intro: 'What is happening behind the trim panels and factory screens.',
    links: [
      ['Technology Library', 'How modern vehicle systems fit together.', '/technology'],
      ['Audio Signal & DSP', 'Why the factory signal changes the audio plan.', '/technology/dsp'],
      ['OEM Integration', 'Keep useful factory behavior while adding capability.', '/technology/oem-integration'],
      ['Telematics', 'Location, connectivity and vehicle data.', '/technology/telematics'],
      ['Vehicle Vision', 'Cameras, recording and parking visibility.', '/technology/vehicle-vision'],
      ['Brands & Partners', 'How TTT evaluates products and manufacturers.', '/technology/brands'],
    ],
  },
  Resources: {
    intro: 'Straight answers before a customer spends money.',
    links: [
      ['Articles', 'Original TTT writing on vehicle technology.', '/articles'],
      ['FAQ', 'Projects, fitment, installation and support.', '/resources/faq'],
      ['The TTT Standard', 'The workmanship baseline behind the work.', '/standards'],
      ['Knowledge Center', 'Technology and buying guidance.', '/resources'],
      ['Vehicle Fitment', 'Start with year, make, model and trim.', '/vehicles'],
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
        </nav>
        <div className="header-actions">
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
          <Link onClick={() => setOpen(false)} className="button" href="/start">Start a project</Link>
        </div>
      </div>
    </header>
  );
}
