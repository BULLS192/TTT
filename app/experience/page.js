import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'TTT Digital Vehicle Lab',description:'Explore the interactive TTT experiences for window tint, automotive audio, GPS tracking, vehicle security, custom fabrication and hidden workmanship.'};

const experiences=[
 {n:'01',title:'Glass Lab',kicker:'Window Tint',body:'Drag through shade, film family, environment and driver/exterior views to understand how tint changes the glass experience.',href:'/services/window-tint#interactive',visual:'tintHero'},
 {n:'02',title:'Listening Room',kicker:'Automotive Audio',body:'Play one reference track and compare Factory, Speaker Upgrade, Amplified and DSP Tuned from different listening positions.',href:'/services/audio#interactive',visual:'audioHero'},
 {n:'03',title:'Vehicle Journey',kicker:'GPS Tracking',body:'Follow a smooth trip with ignition, speed, geofences, alerts and trip history updating together.',href:'/services/gps-tracking#interactive',visual:'gpsHero'},
 {n:'04',title:'Security Scenario',kicker:'Vehicle Security',body:'Compare the same unauthorized-use event with factory-only security versus added tracking and immobilization layers.',href:'/services/kill-switches#interactive',visual:'securityHero'},
 {n:'05',title:'Fitment Transformation',kicker:'Custom Fabrication',body:'See one real packaging problem progress from awkward placement through vehicle capture, engineering and a finished mounted solution.',href:'/services/custom-fabrication#interactive',visual:'fabricationFitmentInstalled'},
 {n:'06',title:'Hidden Work',kicker:'The TTT Standard',body:'Reveal the protection, mounting, routing and serviceability that should still be right after the trim goes back on.',href:'/standards#xray',visual:'standardsDiagnostic'}
];

export default function Page(){return <main className="production-page wave2b-hub">
 <section className="wave2b-hub__hero">
  <AssetMedia visual="homeHeroTechnical" className="wave2b-hub__hero-media" priority/>
  <div className="wave2b-hub__hero-shade"/>
  <div className="shell wave2b-hub__hero-copy">
   <p className="eyebrow">TTT Digital Vehicle</p>
   <h1>Understand the system before you ask for the parts.</h1>
   <p className="lead lead--dark">Explore the vehicle, save the systems that matter, compare the decisions that are easier to understand visually, then carry that context into Tessa or the quote request.</p>
   <div className="wave2b-hub__flow" aria-label="TTT website journey">
    <span><b>01</b> Explore</span><i>→</i><span><b>02</b> Build</span><i>→</i><span><b>03</b> Ask Tessa</span><i>→</i><span><b>04</b> Quote</span>
   </div>
   <div className="button-row"><Link className="button" href="/concept-one">Enter Concept One →</Link><Link className="button button--ghost-dark" href="/quote?from=build">Start a Quote</Link></div>
  </div>
 </section>

 <section className="section section--dark"><div className="shell">
  <div className="wave2b-hub__feature">
   <div><p className="eyebrow">System map</p><h2>Concept One connects the whole-vehicle plan to the details.</h2><p>Start with the whole vehicle, then move into the service experience when you want to compare a specific decision in more detail. Concept One provides context; the labs provide depth.</p><Link className="text-link text-link--light" href="/concept-one">Explore Concept One →</Link></div>
   <div className="wave2b-hub__feature-stack"><span>GLASS</span><span>AUDIO</span><span>LOCATION</span><span>SECURITY</span><span>FABRICATION</span><span>STANDARD</span></div>
  </div>
 </div></section>

 <section className="section"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">Interactive labs</p><h2>Six ways to see the technology in context.</h2><p className="lead">Each experience focuses on a decision that is easier to understand by seeing it change. Saved selections stay with the same project conversation.</p></div></div>
  <div className="wave2b-hub__grid">{experiences.map(item=><Link href={item.href} className="wave2b-hub__card" key={item.title}>
   <AssetMedia visual={item.visual} className="wave2b-hub__card-media"/>
   <div className="wave2b-hub__card-shade"/>
   <span className="wave2b-hub__card-number">{item.n}</span>
   <div className="wave2b-hub__card-copy"><small>{item.kicker}</small><h2>{item.title}</h2><p>{item.body}</p><b>Open experience →</b></div>
  </Link>)}</div>
 </div></section>

 <section className="wave2b-hub__continuity"><div className="shell">
  <div className="wave2b-hub__continuity-copy"><p className="eyebrow">My TTT Build</p><h2>Your choices should not disappear when you leave a page.</h2><p>Systems saved from Concept One and selections from the service labs stay attached while you explore. Use the persistent build control to review them, ask Tessa about them, or carry them straight into the quote workflow.</p></div>
  <div className="wave2b-hub__continuity-ui"><span>EXPLORE</span><i>+</i><span>BUILD</span><i>+</i><span>CONTEXT</span><b>MY TTT BUILD</b></div>
 </div></section>
 </main>}