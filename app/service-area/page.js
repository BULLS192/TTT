import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import { getPrimaryServiceArea } from '../../lib/sanityContent';

const fallback={name:'Greater Houston',headline:'Plan the job around the vehicle and the location.',summary:'TTT serves owner projects, dealership programs and business vehicles across Greater Houston. Location, access, travel and scheduling are confirmed as part of the project plan.',coverageNotes:'Send the vehicle location and project type with your request. TTT will confirm whether the project fits the current service area and whether the work is best handled as an owner appointment, dealership program or business-vehicle engagement.',schedulingSteps:[{title:'Vehicle',description:'Year, make, model, trim and the work being considered.'},{title:'Location',description:'Where the vehicle normally lives or where a business program needs support.'},{title:'Project type',description:'Single owner vehicle, dealership workflow, fleet unit or multi-vehicle rollout.'}],beforeSchedulingTitle:'Know the plan before the vehicle moves.',beforeSchedulingCopy:'Once scope and service-area fit are confirmed, TTT will provide the appointment or project details directly. Business programs may use a different workflow from individual owner projects.',seo:{title:'Greater Houston Vehicle Technology | TTT',description:'TTT serves vehicle owners, dealerships and business vehicles across Greater Houston. Project location and travel requirements are confirmed before scheduling.'}};

export async function generateMetadata(){
 const area=await getPrimaryServiceArea()||fallback;
 return {title:area.seo?.title||fallback.seo.title,description:area.seo?.description||fallback.seo.description};
}

export default async function Page(){
 const area=await getPrimaryServiceArea()||fallback;
 return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="houstonNight" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">{area.name}</p><h1>{area.headline}</h1><p className="lead lead--dark">{area.summary}</p><Link className="button" href="/quote">Start with the vehicle →</Link></div></section>
 <section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">Service Area</p><h2>Confirm location before the calendar.</h2></div><div className="copy-section__body"><p>{area.coverageNotes}</p></div></div></section>
 <section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">How scheduling works</p><h2>Three details decide the next step.</h2></div></div><div className="journey-grid journey-grid--three">{(area.schedulingSteps||fallback.schedulingSteps).map((step,i)=><article key={step.title}><span>{String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
 <section className="section section--dark"><div className="shell copy-section__grid"><div><p className="eyebrow">Before scheduling</p><h2>{area.beforeSchedulingTitle}</h2></div><div className="copy-section__body"><p>{area.beforeSchedulingCopy}</p><div className="button-row"><Link className="text-link text-link--light" href="/quote">Request a Quote →</Link><Link className="text-link text-link--light" href="/business">Business Programs →</Link><Link className="text-link text-link--light" href="/contact">Contact TTT →</Link></div></div></div></section>
 </main>;
}
