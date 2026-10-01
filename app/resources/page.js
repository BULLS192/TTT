import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Vehicle Technology Resources | TTT',description:'TTT articles, FAQ, integration standards, technology explainers and vehicle-fitment guidance.'};

const resources=[
 ['Articles','Short, medium and deep-dive explanations of automotive technology.','/articles'],
 ['Technology Library','DSP, OEM integration, telematics and connected vehicle systems.','/technology'],
 ['The TTT Standard','The workmanship baseline behind every TTT project.','/standards'],
 ['FAQ','Quality, timing, warranty, quotes and service questions.','/faq'],
 ['Projects','Concept One now; real TTT case studies as work is completed.','/projects'],
 ['Vehicle Fitment','Start with year, make, model and trim.','/vehicles']
];

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="resourceHero" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Learn</p><h1>Understand the system before choosing the hardware.</h1><p className="lead lead--dark">Useful before the quote and useful after the install: practical explanations of the decisions that change fitment, performance, ownership and support.</p></div></section>
 <section className="section"><div className="shell"><div className="resource-card-grid">{resources.map(([title,body,href],i)=><Link className="resource-card" href={href} key={title}><small>{String(i+1).padStart(2,'0')}</small><h2>{title}</h2><p>{body}</p><b>Open →</b></Link>)}</div></div></section>
 <section className="section section--soft"><div className="shell copy-section__grid"><div><p className="eyebrow">Start with the vehicle</p><h2>Year, make, model and trim change the recommendation.</h2></div><div className="copy-section__body"><p>Factory equipment and vehicle architecture matter more than a universal “best product” list.</p><Link className="text-link" href="/vehicles">Vehicle Fitment →</Link></div></div></section>
 </main>}
