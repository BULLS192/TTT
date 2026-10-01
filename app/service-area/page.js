import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Houston Automotive Technology Integration | TTT',description:'TTT provides automotive technology integration for vehicle owners, dealerships and fleets across Greater Houston.'};
const areas=['Houston','Katy','Sugar Land','Cypress','The Woodlands','Pearland'];

export default function ServiceAreaPage(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="houstonDusk" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Business / Greater Houston</p><h1>Automotive technology integration across the Houston metro.</h1><p className="lead lead--dark">Owner vehicles, dealership programs, fleets and commercial applications, scoped around the actual vehicle and operating need.</p><Link className="button" href="/quote">Request a Quote →</Link></div></section>
 <section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">Service area</p><h2>Houston first.</h2></div><div className="copy-section__body"><p>Project availability, mobile capability and travel scope are confirmed before scheduling. Dealer and fleet programs can be evaluated separately for multi-vehicle requirements.</p><div className="evaluation-strip">{areas.map(area=><span key={area}>{area}</span>)}</div></div></div></section>
 <section className="section section--soft"><div className="shell business-lane-grid"><Link className="business-lane-card" href="/industries/vehicle-owners"><small>01</small><h2>Vehicle owners</h2><p>Personal projects planned around the actual vehicle.</p></Link><Link className="business-lane-card" href="/industries/dealerships"><small>02</small><h2>Dealerships</h2><p>Repeatable accessory and technology workflows.</p></Link><Link className="business-lane-card" href="/industries/fleets"><small>03</small><h2>Fleets</h2><p>Standardized tracking, security and technology programs.</p></Link></div></section>
 </main>}
