import Link from 'next/link';

const layers=[
  ['01 / Vehicle interface','Preserve the controls, signals and factory behavior that still add value.'],
  ['02 / Processing & control','DSP, controllers and logic shape how added systems communicate and perform.'],
  ['03 / Sensing & visibility','Cameras, sensors, security inputs and vehicle data create awareness.'],
  ['04 / Connected layer','Tracking, apps, cellular services and cloud platforms extend the vehicle beyond the cabin.']
];

const tech=[
  ['DSP','Control, route and tune complex vehicle audio signals instead of relying on hardware changes alone.'],
  ['Vehicle networks','Understand how modern electronics communicate before adding interfaces, controls or accessories.'],
  ['Telematics','Connect vehicles to location, event and operational data through the right hardware and platform.'],
  ['Security','Combine detection, immobilization, awareness and recovery layers around the actual risk profile.'],
  ['Vehicle vision','Use cameras and sensors to improve evidence, visibility, parking awareness and commercial oversight.'],
  ['OEM integration','Upgrade capability while preserving the factory functions, controls and appearance that still serve the driver.']
];

const questions=[
  ['Does it fit the vehicle?','Fitment includes physical space, electrical compatibility, factory systems, data interfaces and the way the product will be controlled.'],
  ['Does it solve the right problem?','A long feature list is not useful if the customer only needs two of those features and compromises something else to get them.'],
  ['Can it be supported later?','Documentation, firmware, parts availability, manufacturer support and service access all influence long-term ownership.'],
  ['Does it belong in the system?','The best component in isolation can still be the wrong component if it conflicts with other technology already in the vehicle.']
];

export const metadata={title:'Automotive Technology Library | TTT',description:'TTT explains OEM integration, DSP, vehicle networks, security, telematics, cameras and connected systems so customers can understand the technology behind a professional build.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Technology</p><h1>Understand the system before choosing the hardware.</h1><p className="lead">Modern vehicles are networks of controls, signals, sensors, software and power systems. TTT treats new hardware as part of that architecture rather than as an isolated accessory.</p></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">System thinking</p><h2>Four layers of vehicle technology.</h2></div><div className="section-copy"><p>The same framework can be used whether the project is a premium audio build, a security package, a connected fleet vehicle or a multi-system Concept One installation.</p><p>Understanding the layer a product belongs to helps define dependencies, preserve useful factory behavior and avoid buying hardware before the actual system is understood.</p></div></div><div className="system-layer-grid">{layers.map(([title,body])=><article className="system-layer" key={title}><span>{title.split(' / ')[0]}</span><h3>{title.split(' / ')[1]}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section section--dark"><div className="shell"><div className="tech-architecture"><p className="eyebrow">Example architecture</p><h2>Vehicle → interface → control → system → connected services.</h2><p className="lead">The exact signal path changes by vehicle and project. The important part is understanding it before installation begins.</p><div className="tech-architecture__rail"><div className="tech-node"><b>Factory vehicle</b><small>Controls, power, data, audio, sensors</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>Integration layer</b><small>Interfaces, harnesses, signal access</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>TTT system</b><small>Audio, security, vision, tracking</small></div></div></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Core disciplines</p><h2>The technologies TTT needs to understand deeply.</h2></div></div><div className="capability-grid">{tech.map(([title,body],i)=><article className="capability-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Product evaluation</p><h2>Before a technology earns a place in a TTT build, four questions matter.</h2></div><div className="section-copy"><p>Brand reputation matters, but it is not enough. TTT evaluates technology in the context of the vehicle, the customer outcome and the complete system around it.</p></div></div><div className="system-layer-grid">{questions.map(([title,body],i)=><article className="system-layer" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="section section--soft"><div className="shell section-intro-grid"><div><p className="eyebrow">Go deeper</p><h2>Connect the technology to the vehicle and the project.</h2></div><div className="section-copy"><p>Use the brand library to understand manufacturers, the vehicle section for compatibility context, and TTT Articles for deeper explanations of the decisions behind an integrated build.</p><div className="section-link-row"><Link className="button" href="/technology/brands">Explore brands →</Link><Link className="button button--ghost" href="/vehicles">Vehicle compatibility</Link><Link className="button button--ghost" href="/articles">Read TTT Articles</Link></div></div></div></section>
</main>}
