import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Greater Houston Vehicle Technology | TTT',description:'TTT serves vehicle owners, dealerships and business vehicles across Greater Houston. Project location and travel requirements are confirmed before scheduling.'};

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact">
  <AssetMedia visual="houstonNight" className="review-hero__media" priority/><div className="review-hero__overlay"/>
  <div className="shell review-hero__copy"><p className="eyebrow">Greater Houston</p><h1>Plan the job around the vehicle and the location.</h1><p className="lead lead--dark">TTT serves owner projects, dealership programs and business vehicles across Greater Houston. Location, access, travel and scheduling are confirmed as part of the project plan.</p><Link className="button" href="/quote">Start with the vehicle →</Link></div>
 </section>

 <section className="section"><div className="shell copy-section__grid">
  <div><p className="eyebrow">Service Area</p><h2>Confirm location before the calendar.</h2></div>
  <div className="copy-section__body"><p>Send the vehicle location and project type with your request. TTT will confirm whether the project fits the current service area and whether the work is best handled as an owner appointment, dealership program or business-vehicle engagement.</p></div>
 </div></section>

 <section className="section section--soft"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">How scheduling works</p><h2>Three details decide the next step.</h2></div></div>
  <div className="journey-grid journey-grid--three"><article><span>01</span><h3>Vehicle</h3><p>Year, make, model, trim and the work being considered.</p></article><article><span>02</span><h3>Location</h3><p>Where the vehicle normally lives or where a business program needs support.</p></article><article><span>03</span><h3>Project type</h3><p>Single owner vehicle, dealership workflow, fleet unit or multi-vehicle rollout.</p></article></div>
 </div></section>

 <section className="section section--dark"><div className="shell copy-section__grid">
  <div><p className="eyebrow">Before scheduling</p><h2>Know the plan before the vehicle moves.</h2></div>
  <div className="copy-section__body"><p>Once scope and service-area fit are confirmed, TTT will provide the appointment or project details directly. Business programs may use a different workflow from individual owner projects.</p><div className="button-row"><Link className="text-link text-link--light" href="/quote">Request a Quote →</Link><Link className="text-link text-link--light" href="/business">Business Programs →</Link><Link className="text-link text-link--light" href="/contact">Contact TTT →</Link></div></div>
 </div></section>
</main>}
