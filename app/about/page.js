import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata={title:'About Thompson Transportation Technologies',description:'TTT is an automotive technology consulting and integration company serving vehicle owners, dealerships and fleets.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">About TTT</p><h1>Automotive technology should feel engineered into the vehicle.</h1><p className="lead">Product choice matters. So do the signal path, mounting, wiring, controls, documentation and the way the car feels when it comes back together.</p></div><AutoVisual variant="about" eyebrow="THOMPSON TRANSPORTATION TECHNOLOGIES"/></div></section>

  <section className="section"><div className="shell editorial-visual-band"><AutoVisual variant="technology" eyebrow="CONSULT / DESIGN / INTEGRATE"/><div className="editorial-visual-copy"><p className="eyebrow">Positioning</p><h2>More than a parts counter. More practical than an engineering exercise.</h2><p>TTT starts with the vehicle and the result the customer wants, then works backward into the technology and installation approach.</p><Link className="button button--ghost" href="/services">Explore Services →</Link></div></div></section>

  <section className="section section--soft"><div className="shell"><div className="visual-stat-strip">
    <div className="visual-stat"><small>01 / FIT</small><strong>It belongs in the vehicle.</strong><p>Physically, electrically and electronically.</p></div>
    <div className="visual-stat"><small>02 / FUNCTION</small><strong>It solves the right problem.</strong><p>The feature list follows the use case, not the other way around.</p></div>
    <div className="visual-stat"><small>03 / SUPPORT</small><strong>It still makes sense later.</strong><p>Service access, records and replacement are part of the design.</p></div>
  </div></div></section>

  <section className="section section--dark"><div className="shell editorial-visual-band editorial-visual-band--reverse"><div className="editorial-visual-copy"><p className="eyebrow">The TTT Standard</p><h2>Clean work should still make sense after the trim panels go back on.</h2><p>Vehicle protection, circuit protection, disciplined routing, serviceable mounting, validation and clear handoff are the baseline.</p><Link className="button button--ghost-dark" href="/standards">Read The TTT Standard →</Link></div><AutoVisual variant="generic" eyebrow="OEM+ / WORKMANSHIP"/></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Who we serve</p><h2>One philosophy. Different operating needs.</h2></div><div className="section-copy"><p>Personal vehicles are built around the owner. Dealer and fleet work has to be repeatable, documented and supportable at scale.</p></div></div><div className="visual-feature-grid"><Link className="visual-feature" href="/industries/vehicle-owners"><AutoVisual variant="concept"/><div className="visual-feature__content"><small>Vehicle owners</small><h3>Personal vehicles</h3><p>Improve the car without making it feel less like your car.</p></div></Link><Link className="visual-feature" href="/industries/dealerships"><AutoVisual variant="dealership"/><div className="visual-feature__content"><small>Dealerships</small><h3>Dealer programs</h3><p>Make sales, installation and delivery repeatable.</p></div></Link><Link className="visual-feature" href="/industries/fleets"><AutoVisual variant="fleets"/><div className="visual-feature__content"><small>Fleets</small><h3>Fleet systems</h3><p>Standardize installation, access and lifecycle.</p></div></Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Bring us the vehicle and the problem you want solved.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
