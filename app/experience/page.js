import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'TTT Digital Vehicle Lab',description:'Explore the interactive TTT service experiences for tint, audio, tracking, security, diagnostics and fabrication.'};

const experiences=[
 {n:'01',title:'Glass Lab',kicker:'Window Tint',body:'Compare factory glass with a selected shade and film family across different viewing conditions.',href:'/services/window-tint#interactive',visual:'tintHero'},
 {n:'02',title:'Listening Room',kicker:'Automotive Audio',body:'Move the perceived soundstage from the doors toward a focused, tuned cabin experience.',href:'/services/audio#interactive',visual:'audioHero'},
 {n:'03',title:'Vehicle Journey',kicker:'GPS Tracking',body:'Follow a trip from parked state through geofence exit, movement alert and saved history.',href:'/services/gps-tracking#interactive',visual:'gpsHero'},
 {n:'04',title:'Security Layers',kicker:'Vehicle Security',body:'Build protection across baseline security, interruption, notification and location.',href:'/services/kill-switches#interactive',visual:'securityHero'},
 {n:'05',title:'SignalTrace Case 001',kicker:'Diagnostics',body:'Watch a battery-drain complaint narrow from a symptom into repeatable evidence.',href:'/services/signaltrace#interactive',visual:'signalHero'},
 {n:'06',title:'Fabrication Lab',kicker:'Custom Fabrication',body:'Move a fitment problem through definition, CAD intent, prototype, revision and final part.',href:'/services/custom-fabrication#interactive',visual:'fabricationHero'},
 {n:'07',title:'X-Ray Mode',kicker:'The TTT Standard',body:'Reveal the wiring, protection, mounting and documentation hidden behind a finished install.',href:'/standards#xray',visual:'standardsDiagnostic'}
];

export default function Page(){return <main className="production-page wave2b-hub">
 <section className="wave2b-hub__hero">
  <AssetMedia visual="homeHeroTechnical" className="wave2b-hub__hero-media" priority/>
  <div className="wave2b-hub__hero-shade"/>
  <div className="shell wave2b-hub__hero-copy">
   <p className="eyebrow">TTT Digital Vehicle</p>
   <h1>Understand the system before you ask for the parts.</h1>
   <p className="lead lead--dark">Explore the vehicle, configure the layers that matter, carry them into My TTT Build, then hand the exact context to Tessa or the quote request.</p>
   <div className="wave2b-hub__flow" aria-label="TTT website journey">
    <span><b>01</b> Explore</span><i>→</i><span><b>02</b> Configure</span><i>→</i><span><b>03</b> Ask Tessa</span><i>→</i><span><b>04</b> Quote</span>
   </div>
   <div className="button-row"><Link className="button" href="/concept-one">Enter Concept One →</Link><Link className="button button--ghost-dark" href="/quote?from=build">Start a Quote</Link></div>
  </div>
 </section>

 <section className="section section--dark"><div className="shell">
  <div className="wave2b-hub__feature">
   <div><p className="eyebrow">System map</p><h2>Concept One connects all seven experiences.</h2><p>Start with the whole vehicle, then drop into the service layer you want to understand. The point is not to simulate a specific customer car; it is to make the integration logic visible.</p><Link className="text-link text-link--light" href="/concept-one">Explore Concept One →</Link></div>
   <div className="wave2b-hub__feature-stack"><span>GLASS</span><span>AUDIO</span><span>LOCATION</span><span>SECURITY</span><span>DIAGNOSTICS</span><span>FABRICATION</span><span>STANDARD</span></div>
  </div>
 </div></section>

 <section className="section"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">Interactive labs</p><h2>Seven ways to make the hidden decisions visible.</h2><p className="lead">Each experience teaches one part of the vehicle system and can feed a real project conversation.</p></div></div>
  <div className="wave2b-hub__grid">{experiences.map(item=><Link href={item.href} className="wave2b-hub__card" key={item.title}>
   <AssetMedia visual={item.visual} className="wave2b-hub__card-media"/>
   <div className="wave2b-hub__card-shade"/>
   <span className="wave2b-hub__card-number">{item.n}</span>
   <div className="wave2b-hub__card-copy"><small>{item.kicker}</small><h2>{item.title}</h2><p>{item.body}</p><b>Open experience →</b></div>
  </Link>)}</div>
 </div></section>

 <section className="wave2b-hub__continuity"><div className="shell">
  <div className="wave2b-hub__continuity-copy"><p className="eyebrow">My TTT Build</p><h2>Your choices should not disappear when you leave a page.</h2><p>Selections from the labs and solution composers stay attached while you explore. Use the persistent build control to review them, ask Tessa about them, or carry them straight into the quote workflow.</p></div>
  <div className="wave2b-hub__continuity-ui"><span>EXPLORE</span><i>+</i><span>CONFIGURE</span><i>+</i><span>CONTEXT</span><b>MY TTT BUILD</b></div>
 </div></section>
 </main>}