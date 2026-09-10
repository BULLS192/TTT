import Link from 'next/link';

const disciplines=[
  ['DSP & audio signal','Understand the factory signal, processing, routing and tuning before adding power.','/technology/dsp'],
  ['OEM integration','Preserve useful factory controls, data and vehicle behavior while adding capability.','/technology/oem-integration'],
  ['Telematics','GPS, cellular connectivity, geofencing, event history and fleet visibility.','/technology/telematics'],
  ['Vehicle vision','Dash cameras, parking visibility, multi-channel recording and connected video.','/technology/vehicle-vision'],
  ['Vehicle security','Layer deterrence, detection, immobilization, tracking and recovery awareness.','/solutions/vehicle-security'],
  ['Brands & partners','Evaluate manufacturers around technical fit, reliability, support and lifecycle.','/technology/brands'],
];

const layers=[
  ['01 / Vehicle interface','Preserve the controls, signals and factory behavior that still add value.'],
  ['02 / Processing & control','DSP, controllers and logic shape how added systems communicate and perform.'],
  ['03 / Sensing & visibility','Cameras, sensors, security inputs and vehicle data create awareness.'],
  ['04 / Connected layer','Tracking, apps, cellular services and cloud platforms extend the vehicle beyond the cabin.'],
];

export const metadata={title:'Automotive Technology Library',description:'TTT technology library covering DSP, OEM integration, telematics, vehicle security, cameras, factory electronics and connected vehicle systems.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Technology</p><h1>Understand the system before choosing the hardware.</h1><p className="lead">Modern vehicles are networks of controls, signals, sensors, software and power systems. TTT treats new hardware as part of that architecture rather than as an isolated accessory.</p></div></section>
  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">System thinking</p><h2>Four layers of vehicle technology.</h2></div><div className="section-copy"><p>The same framework can be used whether the project is a premium audio build, a security package, a connected fleet vehicle or a multi-system Concept One installation.</p><p>Understanding the layer a product belongs to helps define dependencies, preserve factory behavior and avoid buying hardware before the system is understood.</p></div></div><div className="system-layer-grid">{layers.map(([title,body])=><article className="system-layer" key={title}><span>{title.split(' / ')[0]}</span><h3>{title.split(' / ')[1]}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section section--dark"><div className="shell"><div className="tech-architecture"><p className="eyebrow">Example architecture</p><h2>Vehicle → interface → control → system → connected services.</h2><p className="lead">The exact signal path changes by vehicle and project. The principle is to understand and document it before installation.</p><div className="tech-architecture__rail"><div className="tech-node"><b>Factory vehicle</b><small>Controls, power, data, audio, sensors</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>Integration layer</b><small>Interfaces, harnesses, signal access</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>TTT system</b><small>Audio, security, vision, tracking</small></div></div></div></div></section>
  <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Technology library</p><h2>Go deeper into the disciplines.</h2></div></div><div className="card-grid card-grid--3">{disciplines.map(([title,body,href],i)=><Link className="feature-card" href={href} key={title}><span className="feature-card__index">0{i+1}</span><h2>{title}</h2><p>{body}</p><b>Explore →</b></Link>)}</div></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Knowledge graph</p><h2>Technology should connect to brands, vehicles, projects and articles.</h2></div><div className="section-copy"><p>As TTT's product and project database grows, this section can answer practical questions: which systems work with a particular vehicle, which products TTT has evaluated, where those products have been used, and what the installation considerations are.</p><div className="section-link-row"><Link className="button" href="/technology/brands">Explore brands →</Link><Link className="button button--ghost" href="/vehicles">Vehicle compatibility</Link><Link className="button button--ghost" href="/articles">Read TTT Journal</Link></div></div></div></section>
</main>}
