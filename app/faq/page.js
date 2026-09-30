import Link from 'next/link';
import FAQExplorer from '../../components/FAQExplorer';
import TessaTrigger from '../../components/TessaTrigger';
import { faqGroups } from '../../lib/claudeSiteCopy';

export const metadata={title:'Frequently Asked Questions | Thompson Transportation Technologies',description:'Answers about quality, installation, delivery, warranty, window tint, audio, tracking, security, SignalTrace diagnostics, fabrication and quotes at TTT.'};

export default function Page(){return <main className="production-page">
 <section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">Contact / FAQ</p><h1>Frequently asked questions</h1><p className="lead">Search by question or browse by category. Each service page goes deeper, and Tessa can help when your question is specific to your vehicle.</p></div></section>
 <section className="section"><div className="shell"><FAQExplorer groups={faqGroups}/></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Still have a question?</p><h2>Ask Tessa, or contact the team directly.</h2></div><div className="button-row"><TessaTrigger className="button button--light" prompt="I have a question that I could not find in the FAQ.">Ask Tessa →</TessaTrigger><Link className="button button--ghost-dark" href="/contact">Contact TTT →</Link></div></div></section>
 </main>}
