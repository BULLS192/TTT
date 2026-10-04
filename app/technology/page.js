import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import { getSingleton,getTechnologyTopics } from '../../lib/sanityContent';

const fallback={eyebrow:'Learn · Technology Library',headline:'The car already has a technology stack before we touch it.',intro:'Screens, amplifiers, sensors, networks and software are already working together in a modern vehicle. Adding anything means fitting into that stack. These explainers show how.',systemHeadline:'Factory vehicle → integration layer → added system.',systemCopy:'Every addition connects through some combination of signal, power, data and controls. Identify those first and the right hardware becomes much easier to choose.',systemSteps:['Factory vehicle','Signal / power / data','Integration layer','Added system','Validation'],explainerHeadline:'Question first. Plain answer next. Technical depth when it helps.',explainerSteps:['The question customers actually ask.','The short answer.','Why it matters for the vehicle.','How it works, with technical detail.','The related TTT service or solution.'],seo:{title:'Automotive Technology Library: DSP, OEM Integration, Telematics | TTT',description:'How modern vehicle technology works, explained in plain terms: audio signal processing, factory integration, telematics, vehicle cameras, security and how to judge products.'}};

export async function generateMetadata(){
 const page=await getSingleton('technologyIndexPage')||fallback;
 return {title:page.seo?.title||fallback.seo.title,description:page.seo?.description||fallback.seo.description};
}

export default async function Page(){
 const [pageData,topicsData]=await Promise.all([getSingleton('technologyIndexPage'),getTechnologyTopics()]);
 const page=pageData||fallback;
 const topics=(topicsData?.length?topicsData:[
  {title:'DSP & audio signal processing',question:'Why doesn’t more power automatically make the car sound better?',routePath:'/technology/dsp'},
  {title:'OEM integration',question:'Can I add technology without losing factory features?',routePath:'/technology/oem-integration'},
  {title:'Telematics',question:'What am I actually paying for with a tracker?',routePath:'/technology/telematics'},
  {title:'Vehicle vision',question:'What makes camera footage useful when you need it?',routePath:'/technology/vehicle-vision'},
  {title:'Vehicle Security (solution)',question:'Why is one device not enough?',routePath:'/solutions/vehicle-security'},
  {title:'Brands & products',question:'How should I judge a product beyond the spec sheet?',routePath:'/technology/brands'}
 ]);
 const steps=page.systemSteps||fallback.systemSteps;
 return <main className="production-page technology-library-page"><section className="review-hero review-hero--compact"><AssetMedia visual="technologyHero" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">{page.eyebrow}</p><h1>{page.headline}</h1><p className="lead lead--dark">{page.intro}</p><div className="button-row"><Link className="button" href="/technology/oem-integration">Start with OEM integration →</Link><Link className="button button--ghost-dark" href="/quote">Request a Quote</Link></div></div></section><section className="section"><div className="shell"><div className="diagram-panel technology-system-panel"><div className="diagram-panel__head"><div><p className="eyebrow">The one idea behind every topic</p><h2>{page.systemHeadline}</h2></div><p>{page.systemCopy}</p></div><div className="technical-flow">{steps.map((x,i)=><div className="flow-node" key={x}><small>{String(i+1).padStart(2,'0')}</small><strong>{x}</strong>{i<steps.length-1?<em>→</em>:null}</div>)}</div></div></div></section><section className="section section--soft"><div className="shell"><div className="technology-card-grid">{topics.map(topic=><Link className="technology-card" href={topic.routePath} key={topic.routePath}><p className="eyebrow">{topic.title}</p><h3>{topic.question}</h3><b>{topic.routePath.startsWith('/solutions/')?'Vehicle Security (solution) →':'Read →'}</b></Link>)}</div></div></section><section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">How each explainer works</p><h2>{page.explainerHeadline}</h2></div><div className="copy-section__body"><ol className="clean-list">{(page.explainerSteps||fallback.explainerSteps).map(x=><li key={x}>{x}</li>)}</ol><Link className="text-link" href="/articles">Read TTT Articles →</Link></div></div></section></main>;
}
