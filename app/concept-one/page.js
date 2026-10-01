import Link from 'next/link';
import AssetMedia from '../../components/AssetMedia';
import ConceptOneConfigurator from '../../components/ConceptOneConfigurator';

export const metadata={title:'Concept One Interactive Vehicle Configurator | TTT',description:'Use Concept One to explore and configure glass, audio, electronics, security, tracking, wiring and fabrication as one integrated vehicle plan.'};

export default function Page(){return <main className="production-page concept2c-page">
 <section className="review-hero concept-one-v3">
  <AssetMedia visual="homeHeroNight" className="review-hero__media" priority/>
  <div className="review-hero__overlay"/>
  <div className="shell review-hero__copy">
   <p className="eyebrow">Concept One · Interactive reference vehicle</p>
   <h1>Build the system, not a pile of parts.</h1>
   <p className="lead lead--dark">Move through the same vehicle from glass to cabin, audio, electronics, security, tracking, hidden wiring and custom fitment. Your selections stay together as one project brief.</p>
   <p className="concept-disclosure">REFERENCE CONCEPT. NOT A CUSTOMER VEHICLE.</p>
   <div className="button-row"><a className="button" href="#configure">Start configuring ↓</a><Link className="button button--ghost-dark" href="/experience">See all interactive labs</Link></div>
  </div>
 </section>

 <section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">One continuous vehicle</p><h2>Every choice has context.</h2></div><div className="copy-section__body"><p>Individual service pages are useful when you already know what you want. Concept One is for seeing how those decisions interact. Tell the configurator what vehicle you are thinking about, choose your priorities and move through the technology layers in sequence.</p><p>Nothing here claims final compatibility or pricing. It creates a cleaner starting brief for the real vehicle.</p></div></div></section>

 <section id="configure" className="section section--dark concept2c-section"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">Unified configurator</p><h2>One vehicle. Nine planning layers. One handoff.</h2><p className="lead lead--dark">Explore a layer, choose the intent, include it in My TTT Build and keep moving. The same context follows you into Tessa and the quote request.</p></div></div>
  <ConceptOneConfigurator/>
 </div></section>

 <section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">What happens next?</p><h2>The configurator becomes the brief.</h2></div><div className="copy-section__body"><p>My TTT Build preserves the selected systems while your vehicle and priorities are stored as project context. Tessa can use the same context for questions, and the quote flow can prefill the vehicle so you do not start over.</p><Link className="text-link" href="/standards">See the workmanship standard behind the plan →</Link></div></div></section>
 </main>}