import Link from 'next/link';
import ScrollCinematic from '../components/ScrollCinematic';
import AssetMedia from '../components/AssetMedia';
import InteractiveVehicle from '../components/InteractiveVehicle';
import ServiceIcon from '../components/ServiceIcon';
import TessaTrigger from '../components/TessaTrigger';

export const metadata={
  title:'Automotive Technology & Installation in Houston | TTT',
  description:'Window tint, audio, GPS tracking, kill switches, electrical diagnostics and custom fabrication in Houston. Planned, installed and verified by TTT.'
};

const services=[
 ['tint','Window Tint','Film chosen for heat, glare and privacy, not just shade. Fitted cleanly to your glass and explained so you know what you are getting.','/services/window-tint'],
 ['audio','Audio','Better sound from the system you have, or a new one built around how you listen. Planned to keep the factory features you rely on.','/services/audio'],
 ['gps','GPS Tracking','Know where your vehicle is and get alerts when something changes. For personal vehicles and small fleets, installed with discretion.','/services/gps-tracking'],
 ['security','Kill Switches','An added layer of theft deterrence that controls whether the vehicle can start. Integrated carefully so it does not create new electrical problems.','/services/kill-switches'],
 ['signal','TTT SignalTrace™','Structured diagnostics for electrical problems that come and go, drain batteries or have already beaten a code reader.','/services/signaltrace'],
 ['fabrication','Custom Fabrication','When the right bracket, mount or enclosure does not exist, we can design and make one to fit.','/services/custom-fabrication']
];

const journey=[
 ['01','Tell us about your vehicle','Share the year, make, model and what you want done or what is going wrong. Photos help.'],
 ['02','Discuss the solution','We talk through the options, what each involves and anything specific to your vehicle.'],
 ['03','Approve the work','You get a clear scope before work begins. Changes are discussed before they are added.'],
 ['04','Installation or diagnostics','The work is carried out as planned. Unexpected findings trigger a conversation, not a surprise invoice.'],
 ['05','Verification and delivery','We test the finished work, confirm related systems behave correctly and walk you through what was done.']
];

export default function HomePage(){
 return <main className="production-page">
  <ScrollCinematic />

  <section id="services" className="section"><div className="shell">
   <div className="section-heading"><div><p className="eyebrow">What TTT does</p><h2>What we work on</h2><p className="lead">Six services, one standard. Whether we are tinting glass or tracing a fault through a wiring harness, the job is planned around your vehicle and checked before it goes back to you.</p></div></div>
   <div className="service-card-grid">{services.map(([icon,title,body,href])=><Link href={href} className="service-card-production" key={title}><ServiceIcon name={icon}/><h3>{title}</h3><p>{body}</p><b>View service →</b></Link>)}</div>
  </div></section>

  <section className="section section--dark"><div className="shell">
   <div className="section-heading"><div><p className="eyebrow">Vehicle technology overview</p><h2>Every system, considered together</h2><p className="lead lead--dark">A modern vehicle is a network of electronics, not a set of separate parts. Tap an area to see where each TTT service fits and how it connects to the rest.</p></div></div>
   <InteractiveVehicle/>
  </div></section>

  <section className="section"><div className="shell copy-section__grid">
   <div><p className="eyebrow">Why TTT</p><h2>How we work</h2></div>
   <div className="principle-grid">
    <article><small>01</small><h3>Quality installation</h3><p>Wire routing, connections and panel removal are planned before tools come out. Hidden work is treated with the same care as visible finish.</p></article>
    <article><small>02</small><h3>Technical integration</h3><p>New equipment has to work with the systems already in the vehicle. Power, modules and factory features are considered before and after installation.</p></article>
    <article><small>03</small><h3>Problem solving</h3><p>When something does not behave as expected, we investigate rather than guess. That habit is the foundation of SignalTrace.</p></article>
    <article><small>04</small><h3>Customer experience</h3><p>You know what is being recommended, why, and what it involves before you approve anything. Finished work is verified and explained at handover.</p></article>
   </div>
  </div></section>

  <section className="section section--soft"><div className="shell editorial-media-band">
   <AssetMedia visual="signalProcess"/>
   <div><p className="eyebrow">TTT SignalTrace™</p><h2>For the electrical problem nobody has pinned down</h2><p>A battery that goes flat overnight. A no-start that happens once a week. An alarm that triggers on its own. SignalTrace moves through Scan, Isolate, Trace, Verify and Resolve to narrow the problem with evidence.</p><p>Diagnostic time is approved in stages and the findings are documented so you know what was tested and what comes next.</p><Link className="button button--ghost" href="/services/signaltrace">Explore SignalTrace →</Link></div>
  </div></section>

  <section className="section section--dark"><div className="shell">
   <div className="section-heading"><div><p className="eyebrow">Customer journey</p><h2>What working with TTT looks like</h2></div></div>
   <div className="journey-grid">{journey.map(([n,title,body])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
  </div></section>

  <section className="section section--dark"><div className="shell editorial-media-band">
   <AssetMedia visual="homeHero"/>
   <div><p className="eyebrow">Concept One</p><h2>The visual anchor behind the TTT experience.</h2><p>Concept One brings the TTT approach together in one vehicle: glass, audio, tracking, security and electronics considered as a single system. The cinematic experience above introduces that idea; this studio view gives it a quieter place elsewhere on the site.</p><Link className="button button--ghost-dark" href="/concept-one">Explore Concept One →</Link></div>
  </div></section>

  <section className="section"><div className="shell editorial-media-band editorial-media-band--reverse">
   <AssetMedia visual="homeHeroMinimal"/>
   <div><p className="eyebrow">Tessa</p><h2>Questions before you call? Ask Tessa.</h2><p>Tessa is TTT’s virtual service assistant. She can explain services, answer common questions, help you work out whether TTT is likely to be able to help, and guide you toward the right quote details.</p><div className="prompt-chips"><span>Do you offer ceramic tint?</span><span>Can you upgrade my factory audio?</span><span>Can you install a GPS tracker?</span><span>My battery keeps dying.</span></div><TessaTrigger className="button button--ghost" prompt="I have a question about TTT services.">Ask Tessa →</TessaTrigger><p className="small-note">Tessa is a virtual assistant. Vehicle-specific recommendations can be handed to the TTT team.</p></div>
  </div></section>

  <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Start here</p><h2>Tell us what you have in mind.</h2><p>Share your vehicle and what you want done. We will start with options that fit the vehicle, not a one-size answer.</p></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>;
}
