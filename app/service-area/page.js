import Link from 'next/link';

export const metadata={
 title:'Houston Automotive Technology Integration',
 description:'TTT provides automotive technology consulting and integration for vehicle owners, dealerships and fleets in the Greater Houston area.'
};

const areas=['Houston','Katy','Sugar Land','Cypress','The Woodlands','Pearland'];

export default function Page(){return <main>
 <section className="page-hero"><div className="shell"><p className="eyebrow">Greater Houston</p><h1>Automotive technology integration for Houston-area vehicles and businesses.</h1><p className="lead">TTT is being built in Houston to support individual vehicle owners as well as dealership, fleet and commercial technology programs across the surrounding metro area.</p></div></section>
 <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Service area</p><h2>Houston first. Broader program support as the operation grows.</h2></div><div className="section-copy"><p>Initial projects and consultations are centered on Greater Houston. Exact installation availability, mobile capability and travel scope depend on the project and should be confirmed before scheduling.</p><p>For dealership and fleet programs, TTT can separately evaluate repeatable multi-vehicle or multi-location requirements.</p></div></div><div className="evaluation-strip">{areas.map(x=><span key={x}>{x}</span>)}</div></div></section>
 <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What we support</p><h2>Consumer vehicles, dealerships, fleets and commercial applications.</h2></div></div><div className="capability-grid"><article className="capability-card"><span>01</span><h3>Vehicle owners</h3><p>Audio, tint, security, tracking, cameras, electronics and custom integration.</p></article><article className="capability-card"><span>02</span><h3>Dealerships</h3><p>Repeatable accessory, security, tracking and customer-upgrade workflows.</p></article><article className="capability-card"><span>03</span><h3>Fleets</h3><p>Standardized tracking, cameras, security and vehicle technology packages.</p></article><article className="capability-card"><span>04</span><h3>Commercial vehicles</h3><p>Technology and electronics for vehicles that support mobile workforces.</p></article></div></div></section>
 <section className="cta-band"><div className="shell"><h2>Tell us where the vehicle is and what you want to improve.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
