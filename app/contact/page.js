import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import InquiryForm from '../../components/InquiryForm';
import TessaTrigger from '../../components/TessaTrigger';

export const metadata={title:'Contact TTT | Thompson Transportation Technologies Houston',description:'Send TTT a message or request a quote for vehicle technology work in Greater Houston. Share the vehicle and what you need, and the team will follow up.'};

const quick=[
 ['A cooler, more private cabin','Window Tint','/services/window-tint'],
 ['Better sound','Automotive Audio','/services/audio'],
 ['To know where the vehicle is','GPS Tracking','/services/gps-tracking'],
 ['To make theft harder','Vehicle Security','/solutions/vehicle-security'],
 ['An electrical problem solved','SignalTrace','/services/signaltrace'],
 ['A part that does not exist','Custom Fabrication','/services/custom-fabrication'],
 ['Several vehicles done the same way','Fleet & Dealership','/solutions/fleet-dealership']
];

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact">
  <AssetMedia visual="consultationReal" className="review-hero__media" priority/>
  <div className="review-hero__overlay"/>
  <div className="shell review-hero__copy"><p className="eyebrow">Contact</p><h1>Contact TTT</h1><p className="lead lead--dark">Tell us about the vehicle and what you need. A few details up front help us give you a useful answer the first time.</p><div className="button-row"><Link className="button" href="/quote">Request a Quote →</Link><a className="button button--ghost-dark" href="#message">Send a Message ↓</a></div></div>
 </section>

 <section className="section"><div className="shell"><div className="contact-route-grid">
  <Link href="/quote"><strong>Request a Quote</strong><span>Pricing for specific work</span></Link>
  <Link href="/quote?service=signaltrace"><strong>SignalTrace intake</strong><span>Electrical problems</span></Link>
  <Link href="/solutions/fleet-dealership#inquiry"><strong>Business inquiry</strong><span>Dealers and fleets</span></Link>
  <TessaTrigger className="contact-route-card" prompt="I have a question about my vehicle."><strong>Ask Tessa</strong><span>Common questions, any time</span></TessaTrigger>
 </div></div></section>

 <section className="section section--soft"><div className="shell copy-section__grid">
  <div><p className="eyebrow">What to include</p><h2>Help us help you faster.</h2></div>
  <div className="copy-section__body"><ul className="clean-list"><li>Year, make and model.</li><li>What you want done, or what is going wrong, in your own words.</li><li>How you would like us to reply.</li></ul><p>Plain language is perfect. You do not need to know the technical terms.</p></div>
 </div></section>

 <section className="section"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">Not sure which service?</p><h2>Start with what you want.</h2></div></div>
  <div className="quick-guide">{quick.map(([want,title,href])=><Link href={href} key={title}><span>{want}</span><strong>{title}</strong><b>→</b></Link>)}</div>
 </div></section>

 <section className="section section--dark"><div className="shell copy-section__grid">
  <div><p className="eyebrow">What happens next</p><h2>A useful first reply, not a generic callback.</h2></div>
  <div className="process-cards"><article><small>01</small><strong>We read your request</strong><p>We check the vehicle, the goal and whether anything important is missing.</p></article><article><small>02</small><strong>We reply with a next step</strong><p>That may be questions, options, a quote or a recommendation to inspect the vehicle first.</p></article><article><small>03</small><strong>We confirm the plan</strong><p>Location, timing and the approved scope are confirmed before work is scheduled.</p></article></div>
 </div></section>

 <section className="section"><div className="shell copy-section__grid">
  <div><p className="eyebrow">Greater Houston</p><h2>Project availability is confirmed before scheduling.</h2></div>
  <div className="copy-section__body"><p>TTT serves Greater Houston by project. Send the vehicle location and what you need; the team will confirm service-area fit, appointment details and any travel requirements directly with you.</p><div className="button-row"><Link className="text-link" href="/service-area">See how service-area planning works →</Link></div></div>
 </div></section>

 <section id="message" className="section section--soft"><div className="shell contact-form-grid">
  <div><p className="eyebrow">Message</p><h2>Send us a message.</h2><p>For pricing, the quote form is quicker. Use this for anything else.</p></div>
  <InquiryForm title="Send us a message" intro="Tell us what you need and the right TTT conversation can start from there."/>
 </div></section>
</main>}
