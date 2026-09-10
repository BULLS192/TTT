import Link from 'next/link';

const layers=[
  ['01 / Vehicle interface','Preserve the controls, signals and factory behavior that still add value.'],
  ['02 / Processing & control','DSP, controllers and logic shape how added systems communicate and perform.'],
  ['03 / Sensing & visibility','Cameras, sensors, security inputs and vehicle data create awareness.'],
  ['04 / Connected layer','Tracking, apps, cellular services and cloud platforms extend the vehicle beyond the cabin.'],
];
const tech=[
  ['DSP','Control, route and tune complex vehicle audio signals.'],
  ['Vehicle networks','Respect the way modern electronics communicate before adding hardware.'],
  ['Telematics','Connect vehicles to location, event and operational data.'],
  ['Security','Combine multiple defensive layers rather than relying on one device.'],
  ['Vehicle vision','Use cameras to improve evidence, awareness and parking visibility.'],
  ['OEM integration','Upgrade capability while preserving factory function and appearance.'],
];

export const metadata={title:'Technology',description:'TTT automotive technology library covering OEM integration, DSP, security, telematics, cameras, vehicle networks and connected systems.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Technology</p><h1>Understand the system before choosing the hardware.</h1><p className="lead">Modern vehicles are networks of factory controls, signals, sensors, software and power systems. TTT treats new hardware as part of that architecture rather than as an isolated accessory.</p></div></section>
  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">System thinking</p><h2>Four layers of vehicle technology.</h2></div><div className="section-copy"><p>The same framework can be used whether the project is a premium audio build, a security package, a connected fleet vehicle or a multi-system Concept One installation.</p><p>Understanding the layer a product belongs to helps TTT define dependencies, preserve factory behavior and avoid buying hardware before the actual system is understood.</p></div></div><div className="system-layer-grid">{layers.map(([title,body])=><article className="system-layer" key={title}><span>{title.split(' / ')[0]}</span><h3>{title.split(' / ')[1]}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section section--dark"><div className="shell"><div className="tech-architecture"><p className="eyebrow">Example architecture</p><h2>Vehicle → interface → control → system → connected services.</h2><p className="lead">The exact signal path changes by vehicle and project. The point is to document it before installation.</p><div className="tech-architecture__rail"><div className="tech-node"><b>Factory vehicle</b><small>Controls, power, data, audio, sensors</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>Integration layer</b><small>Interfaces, harnesses, signal access</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>TTT system</b><small>Audio, security, vision, tracking</small></div></div></div></div></section>
  <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Technology library</p><h2>Core disciplines</h2></div></div><div className="capability-grid">{tech.map(([title,body],i)=><article className="capability-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Build the knowledge graph</p><h2>Technology should connect to brands, vehicles, projects and articles.</h2></div><div className="section-copy"><p>As TTT's product and project database grows, this section can answer practical questions: which systems work with a particular vehicle, which products TTT has evaluated, where those products have been used, and what the installation considerations are.</p><div className="section-link-row"><Link className="button" href="/technology/brands">Explore brands →</Link><Link className="button button--ghost" href="/vehicles">Vehicle compatibility</Link><Link className="button button--ghost" href="/articles">Read TTT Journal</Link></div></div></div></section>
</main>}
