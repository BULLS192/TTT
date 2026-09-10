import Link from 'next/link';
import { industries } from '../../lib/siteData';

export const metadata={
  title:'Who TTT Serves | Vehicle Owners, Dealerships & Fleets',
  description:'TTT serves vehicle owners, dealerships, fleets, commercial operators and specialty vehicle projects with professional automotive technology integration.'
};

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">Who we serve</p><h1>The same technology behaves differently in a personal vehicle, a dealership and a fleet.</h1><p className="lead">TTT adapts the integration model to the customer: individual owners need a better vehicle experience, dealerships need repeatability, and fleets need consistency, visibility and lifecycle control.</p></div></section>
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">Different operating models</p><h2>The hardware may overlap. The workflow, documentation and definition of success do not.</h2></div><div className="section-copy"><p>That is why TTT separates services from customer environments. A GPS platform for one owner is not managed the same way as hundreds of fleet devices. A premium audio build is not scoped like a dealer-installed accessory package.</p></div></div></section>
  <section className="section section--soft"><div className="shell card-grid card-grid--3">{industries.map((x)=><Link className="feature-card" href={`/industries/${x.slug}`} key={x.slug}><span className="feature-card__index">{x.eyebrow}</span><h2>{x.title}</h2><p>{x.summary}</p><b>Explore →</b></Link>)}</div></section>
  <section className="cta-band"><div className="shell"><p className="eyebrow">Business or personal project</p><h2>Tell us how the vehicle is used and what needs to improve.</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
