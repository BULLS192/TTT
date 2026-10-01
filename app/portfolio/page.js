import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';

export const metadata={title:'Our Work: Tint, Audio, Security & Diagnostics | TTT',description:'TTT project case studies will document real vehicles from goal or problem through work performed and verified result.'};

export default function Page(){return <main className="production-page">
 <section className="review-hero review-hero--compact"><AssetMedia visual="premiumVehicleReal" className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">Our Work</p><h1>Our work</h1><p className="lead lead--dark">Every project published here will be a real vehicle with a real goal or problem, documented from what the customer needed through what was done and how the result was verified.</p><Link className="button" href="/quote">Request a Quote →</Link></div></section>
 <section className="section"><div className="shell portfolio-empty"><p className="eyebrow">Portfolio</p><h2>Real vehicles, documented.</h2><p>We are documenting the first TTT projects now. Case studies will only be published from real work with permission. Stock and generated imagery in the visual library is not presented here as customer work.</p><div className="filter-pills"><span>All</span><span>Tint</span><span>Audio</span><span>Tracking</span><span>Security</span><span>SignalTrace</span><span>Fabrication</span></div><div className="review-notice"><strong>Empty state by design</strong><p>Ask us about a vehicle or problem similar to yours and we can explain how we would approach it.</p></div></div></section>
 <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Your vehicle could be next</p><h2>Tell us what you would like to achieve or what is going wrong.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>}
