import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import TessaTrigger from '../../components/TessaTrigger';
import { solutionList } from '../../lib/solutionCopyV2';

export const metadata={title:'Vehicle Technology Solutions in Houston | TTT',description:'Start with what you want the vehicle to do better. TTT combines tint, audio, tracking, security, diagnostics and fabrication into one planned result.'};

const lines={
  'premium-vehicle-experience':{quote:'“I want the car to feel finished, not modified.”',services:'Audio · Window Tint · Fabrication',result:'Comfort · Sound · Integration'},
  'vehicle-security':{quote:'“I want it harder to take and easier to find.”',services:'Kill Switches · GPS Tracking · SignalTrace',result:'Deter · Immobilize · Alert · Locate'},
  'connected-vehicle':{quote:'“I want to know what my vehicle is doing when I’m not in it.”',services:'GPS Tracking · Kill Switches',result:'Location · Events · History'},
  'fleet-dealership':{quote:'“I need the same result on every vehicle.”',services:'Tracking · Security · Tint · Diagnostics',result:'Standardize · Verify · Record'},
  'custom-integration':{quote:'“What I need doesn’t come in a kit.”',services:'Fabrication · SignalTrace · Integration',result:'Define · Design · Build'}
};

export default function Page(){
  return <main className="production-page solution-index-page">
    <section className="page-hero page-hero--review solution-index-hero">
      <div className="shell">
        <p className="eyebrow">Solutions</p>
        <h1>Start with the result you want—not a parts list.</h1>
        <p className="lead">A vehicle owner rarely wakes up wanting “a DSP,” “a tracker,” or “a custom bracket.” The real goal is usually a better vehicle experience, stronger security, useful information, repeatability, or a solution that does not exist off the shelf.</p>
        <div className="button-row"><Link className="button" href="/quote">Request a Quote →</Link><Link className="button button--ghost-dark" href="/services">Browse individual services →</Link></div>
      </div>
    </section>

    <section className="section solution-index-picker">
      <div className="shell">
        <div className="solution-index-picker__head"><div><p className="eyebrow">Choose your outcome</p><h2>Which statement sounds most like you?</h2></div><p>These are not fixed packages. They are starting points for planning the right combination of services around the vehicle and how you use it.</p></div>
        <div className="solution-index-grid">
          {solutionList.map((page,i)=>{
            const item=lines[page.slug];
            return <Link className="solution-index-card" href={'/solutions/'+page.slug} key={page.slug}>
              <AssetMedia visual={page.heroVisual} className="solution-index-card__media"/>
              <div className="solution-index-card__overlay"/>
              <div className="solution-index-card__number">{String(i+1).padStart(2,'0')}</div>
              <div className="solution-index-card__copy">
                <p>{page.title}</p>
                <h2>{item.quote}</h2>
                <span>{item.result}</span>
                <small>{item.services}</small>
                <b>Explore solution →</b>
              </div>
            </Link>
          })}
        </div>
      </div>
    </section>

    <section className="section section--soft solution-index-principle">
      <div className="shell copy-section__grid">
        <div><p className="eyebrow">Why solutions exist</p><h2>Planned together, the systems stop fighting each other.</h2></div>
        <div className="copy-section__body"><p>Tint, audio, tracking, immobilization, diagnostics and fabrication can all be good services on their own. Problems appear when they are added independently without considering power, access, factory electronics, future service or the next upgrade.</p><div className="solution-index-principles"><article><small>01</small><strong>One vehicle plan</strong><p>Decide what matters before choosing products.</p></article><article><small>02</small><strong>One integration strategy</strong><p>Power, controls, mounting and factory features are considered together.</p></article><article><small>03</small><strong>One handover</strong><p>The finished vehicle is checked as a complete system.</p></article></div></div>
      </div>
    </section>

    <section className="section section--dark">
      <div className="shell editorial-media-band">
        <div>
          <p className="eyebrow">Concept One</p>
          <h2>Want to see the systems on one reference vehicle?</h2>
          <p>Concept One shows how multiple technology layers can coexist on a single vehicle. Use it as a reference, then apply only the pieces that make sense for yours.</p>
          <Link className="text-link text-link--light" href="/concept-one">Explore Concept One →</Link>
        </div>
        <div className="solution-index-system-map" aria-hidden="true"><span>YOUR GOAL</span><b>→</b><span>TTT PLAN</span><b>→</b><span>SERVICES</span><b>→</b><span>FINISHED VEHICLE</span></div>
      </div>
    </section>

    <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Not sure which fits?</p><h2>Describe what you want in plain language.</h2><p>Tessa can help narrow the starting point without making you pick a package first.</p><TessaTrigger className="text-link text-link--light" prompt="Which TTT solution fits my situation?">Ask Tessa: “Which solution fits my situation?” →</TessaTrigger></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
  </main>;
}
