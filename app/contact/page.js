import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';

export const metadata={
  title:'Contact TTT | Thompson Transportation Technologies Houston',
  description:'Call, text, send an inquiry or ask Tessa. Tell us about your vehicle and what you need, and the TTT team in Houston will follow up.'
};

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Contact</p><h1>Contact TTT</h1><p className="lead">Send a message, request a quote or ask Tessa. However you get in touch, a few details about your vehicle help us give you a useful answer the first time.</p></div></section>
 <section className="section"><div className="shell"><p className="eyebrow">Ways to reach us</p><h2>Choose the right starting point</h2><div className="card-grid card-grid--3">
   <article className="feature-card"><h3>Online inquiry</h3><p>Send a message with your details and we’ll follow up.</p><a href="#message">Send a Message →</a></article>
   <Link className="feature-card" href="/quote"><h3>Request a Quote</h3><p>The fastest route to pricing. A short, step-by-step form.</p><b>Request a Quote →</b></Link>
   <article className="feature-card"><h3>Ask Tessa</h3><p>Our virtual service assistant answers common questions any time.</p><p>Open Tessa from the launcher on this page.</p></article>
   <Link className="feature-card" href="/quote?service=signaltrace"><h3>Diagnostic problem?</h3><p>For electrical faults, start a SignalTrace intake so we have the history we need.</p><b>Start a SignalTrace intake →</b></Link>
 </div></div></section>
 <section className="section section--soft"><div className="shell two-col"><div><p className="eyebrow">Help us help you faster</p><h2>What to include</h2></div><div><ul><li>Your vehicle: year, make and model</li><li>The service you’re interested in, or “not sure”</li><li>What you want done or what’s going wrong</li><li>Photos of the current setup or the problem, if relevant</li><li>How you’d like us to reply</li></ul></div></div></section>
 <section className="section"><div className="shell"><p className="eyebrow">Not sure which service fits?</p><h2>Start with what you want to change.</h2><div className="card-grid card-grid--3">
   <Link className="feature-card" href="/services/window-tint"><h3>Cooler, more private cabin</h3><p>Window Tint</p></Link>
   <Link className="feature-card" href="/services/audio"><h3>Better sound</h3><p>Automotive Audio</p></Link>
   <Link className="feature-card" href="/services/gps-tracking"><h3>Know where your vehicle is</h3><p>GPS Tracking</p></Link>
   <Link className="feature-card" href="/services/kill-switches"><h3>Make theft harder</h3><p>Kill Switches</p></Link>
   <Link className="feature-card" href="/services/signaltrace"><h3>Electrical problem nobody has solved</h3><p>SignalTrace</p></Link>
   <Link className="feature-card" href="/services/custom-fabrication"><h3>Need a part that doesn’t exist</h3><p>Custom Fabrication</p></Link>
 </div></div></section>
 <section id="message" className="section section--soft"><div className="shell shell--form"><p className="eyebrow">Send us a message</p><h2>For quotes, the Request a Quote form is quicker. Use this for anything else.</h2><InquiryForm/></div></section>
 </main>}
