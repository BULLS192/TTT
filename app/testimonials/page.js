import Link from 'next/link';
import { getSingleton,getTestimonials } from '../../lib/sanityContent';

const fallback={eyebrow:'Client feedback',headline:'Testimonials are published only with customer permission.',intro:'There are no public testimonials listed yet. TTT will not fill this page with anonymous or invented praise just to make the website look established.',secondaryHeadline:'It should connect back to real work.',secondaryCopy:'A useful testimonial has context: the vehicle, the original problem, the work performed and the customer’s actual experience. When those stories are available and approved, they can be added here and linked to the relevant project.',seo:{title:'Client Testimonials',description:'Verified TTT customer feedback.',noIndex:true}};

export async function generateMetadata(){
 const page=await getSingleton('testimonialPage')||fallback;
 return {title:page.seo?.title||fallback.seo.title,description:page.seo?.description||fallback.seo.description,robots:{index:!(page.seo?.noIndex??true),follow:false}};
}

export default async function Page(){
 const [pageData,testimonials]=await Promise.all([getSingleton('testimonialPage'),getTestimonials()]);
 const page=pageData||fallback;
 const approved=testimonials||[];
 const intro=approved.length?('Verified feedback from '+approved.length+' TTT customer'+(approved.length===1?'':'s')+'.'):page.intro;
 return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">{page.eyebrow}</p><h1>{page.headline}</h1><p className="lead">{intro}</p></div></section>
  {approved.length?<section className="section"><div className="shell"><div className="team-editorial-grid">{approved.map(item=><article className="team-editorial-card" key={item._id}><div><p className="partner-card__focus">{[item.vehicle,item.service].filter(Boolean).join(' · ')}</p><h3>{item.customerDisplayName||'TTT Customer'}</h3><p>“{item.quote}”</p>{item.context?<p>{item.context}</p>:null}</div></article>)}</div></div></section>:null}
  <section className="section"><div className="shell section-intro-grid"><div><p className="eyebrow">When feedback is published</p><h2>{page.secondaryHeadline}</h2></div><div className="section-copy"><p>{page.secondaryCopy}</p><Link className="button button--ghost" href="/projects">View Projects →</Link></div></div></section>
 </main>;
}
