import Link from 'next/link';
import FAQExplorer from '../../components/FAQExplorer';
import TessaTrigger from '../../components/TessaTrigger';
import { faqGroups as localFaqGroups } from '../../lib/claudeSiteCopy';
import { getFaqGroups,getSingleton } from '../../lib/sanityContent';

const fallback={eyebrow:'Contact › FAQ',headline:'Frequently asked questions',intro:'Straight answers about how we work, what affects cost, how long work can take and what happens afterwards. Can’t find yours? Ask Tessa or contact us.',closingEyebrow:'Couldn’t find your question?',closingHeadline:'Ask it in plain language.',seo:{title:'FAQ: Quality, Timing, Warranty & Services | TTT Houston',description:'Answers about workmanship, how long work takes, what happens if something unexpected is found, warranty, aftercare, quotes and each TTT service.'}};

export async function generateMetadata(){
 const page=await getSingleton('faqPage')||fallback;
 return {title:page.seo?.title||fallback.seo.title,description:page.seo?.description||fallback.seo.description};
}

export default async function Page(){
 const [cmsGroups,pageData]=await Promise.all([getFaqGroups(),getSingleton('faqPage')]);
 const faqGroups=cmsGroups?.length?cmsGroups:localFaqGroups;
 const page=pageData||fallback;
 return <main className="production-page"><section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">{page.eyebrow}</p><h1>{page.headline}</h1><p className="lead">{page.intro}</p></div></section><section className="section"><div className="shell"><FAQExplorer groups={faqGroups}/></div></section><section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">{page.closingEyebrow}</p><h2>{page.closingHeadline}</h2><TessaTrigger className="text-link text-link--light" prompt="I couldn’t find my question.">Ask Tessa: “I couldn’t find my question.” →</TessaTrigger></div><div className="button-row"><Link className="button button--light" href="/quote">Request a Quote →</Link><Link className="text-link text-link--light" href="/contact">Contact TTT →</Link></div></div></section></main>;
}
