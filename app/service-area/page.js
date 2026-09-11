import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

export const metadata = {
  title: 'Houston Automotive Technology Integration',
  description: 'TTT provides automotive technology consulting and integration for vehicle owners, dealerships and fleets across Greater Houston.'
};

const areas = ['Houston', 'Katy', 'Sugar Land', 'Cypress', 'The Woodlands', 'Pearland'];

export default function ServiceAreaPage() {
  return <main>
    <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Greater Houston</p><h1>Automotive technology integration across the Houston metro.</h1><p className="lead">Owner vehicles, dealership programs, fleets and commercial applications—scoped around the actual vehicle and operating need.</p></div><AutoVisual variant="dealership" eyebrow="GREATER HOUSTON / TTT"/></div></section>

    <section className="section"><div className="shell editorial-visual-band"><AutoVisual variant="concept" eyebrow="LOCAL VEHICLE PROJECTS"/><div className="editorial-visual-copy"><p className="eyebrow">Service area</p><h2>Houston first.</h2><p>Project availability, mobile capability and travel scope are confirmed before scheduling. Dealer and fleet programs can be evaluated separately for multi-vehicle requirements.</p><div className="evaluation-strip">{areas.map((area)=><span key={area}>{area}</span>)}</div></div></div></section>

    <section className="section section--soft"><div className="shell"><div className="visual-feature-grid"><Link className="visual-feature" href="/industries/vehicle-owners"><AutoVisual variant="concept"/><div className="visual-feature__content"><small>Vehicle owners</small><h3>Personal vehicles</h3><p>Audio, tint, security, tracking, cameras and integration.</p></div></Link><Link className="visual-feature" href="/industries/dealerships"><AutoVisual variant="dealership"/><div className="visual-feature__content"><small>Dealerships</small><h3>Dealer programs</h3><p>Repeatable accessory and technology workflows.</p></div></Link><Link className="visual-feature" href="/industries/fleets"><AutoVisual variant="fleets"/><div className="visual-feature__content"><small>Fleets</small><h3>Fleet systems</h3><p>Standardized tracking, cameras and vehicle technology.</p></div></Link></div></div></section>

    <section className="cta-band"><div className="shell"><h2>Tell us where the vehicle is and what you want to improve.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
  </main>;
}
