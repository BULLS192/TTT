import Link from 'next/link';
import { faqGroups } from '../../lib/claudeSiteCopy';

export const metadata={title:'Frequently Asked Questions | Thompson Transportation Technologies',description:'Answers about window tint, audio, GPS tracking, kill switches, SignalTrace™ diagnostics, custom fabrication and quotes at TTT.'};

export default function Page(){return <main className="production-page">
 <section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">FAQ</p><h1>Frequently asked questions</h1><p className="lead">Short answers to common questions. Each service page goes into more detail, and Tessa can help with anything not covered here.</p></div></section>
 <section className="section"><div className="shell faq-groups">{faqGroups.map(([group,items])=><section id={group.toLowerCase().replace(/[^a-z]+/g,'-')} className="faq-group-production" key={group}><p className="eyebrow">{group}</p><div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>)}</div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Still have a question?</p><h2>Ask Tessa, or contact our team directly.</h2></div><Link className="button button--light" href="/contact">Contact TTT →</Link></div></section>
 </main>}
