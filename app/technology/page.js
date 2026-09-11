import Link from 'next/link';

const disciplines=[
  ['01','DSP & audio signal','What the factory audio system is doing before new speakers or amplifiers are added.','/technology/dsp'],
  ['02','OEM integration','Which screens, controls, cameras, chimes and data need to survive the upgrade.','/technology/oem-integration'],
  ['03','Telematics','Where the vehicle is, what data leaves it, who can see it and what service keeps the device online.','/technology/telematics'],
  ['04','Vehicle vision','Coverage, recording, parking mode, storage and how footage is retrieved.','/technology/vehicle-vision'],
  ['05','Security','Different layers for detection, immobilization, awareness and recovery.','/solutions/vehicle-security'],
  ['06','Brands & products','Why support, documentation and fit matter as much as the feature list.','/technology/brands'],
];

export const metadata={title:'Automotive Technology Library | TTT',description:'TTT explains automotive DSP, OEM integration, telematics, vehicle cameras, security and connected systems in practical terms.'};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Technology</p><h1>The car already has a technology stack before we touch it.</h1><p className="lead">Factory screens, amplifiers, sensors, cameras, data networks and software all change what “installing an accessory” actually means. This library explains the parts that matter before the trim comes off.</p></div></section>

  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">A typical path</p><h2>Factory vehicle → interface → control → added system.</h2></div><div className="section-copy"><p>Not every project uses every layer. The point is to identify the signal, power, data and control path before selecting hardware.</p></div></div><div className="tech-architecture__rail"><div className="tech-node"><b>Factory vehicle</b><small>Controls, power, data, audio, sensors</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>Integration layer</b><small>Interfaces, harnesses, signal access</small></div><div className="tech-arrow">→</div><div className="tech-node"><b>Added system</b><small>Audio, security, vision, tracking</small></div></div></div></section>

  <section className="section section--soft"><div className="shell"><p className="eyebrow">Go deeper</p><div className="scenario-list">{disciplines.map(([n,title,body,href])=><Link className="scenario-row" href={href} key={title}><span>{n}</span><h2>{title}</h2><p>{body}</p><em>→</em></Link>)}</div></div></section>

  <section className="section section--dark"><div className="shell decision-split"><div><p className="eyebrow">Before you buy</p><h3>Ask what the product has to connect to.</h3><ul className="plain-list"><li>Factory audio signal or amplifier</li><li>Vehicle data network or ignition state</li><li>Factory screen, camera or steering controls</li><li>Cellular plan, app or cloud account</li></ul></div><div><p className="eyebrow">Before we install</p><h3>Ask what the product could affect.</h3><ul className="plain-list"><li>Warning tones and safety-related alerts</li><li>Battery draw and vehicle sleep behavior</li><li>Service access and diagnostic work</li><li>Future upgrades or removal</li></ul></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the vehicle, not just a product link.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
