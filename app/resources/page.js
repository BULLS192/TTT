import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';

const top=[
  ['Articles','Audio, security, tint, tracking, cameras and integration explained without the sales pitch.','technology','/articles'],
  ['FAQ','Direct answers about projects, fitment, installation and support.','generic','/resources/faq'],
  ['The TTT Standard','How TTT thinks about protection, wiring, mounting, validation and handoff.','about','/standards'],
];

export const metadata={title:'Vehicle Technology Resources | TTT',description:'TTT articles, FAQ, integration standards, technology explainers, vehicle fitment guidance and automotive technology resources.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">Resources</p><h1>Useful before the quote. Useful after the install.</h1><p className="lead">Practical explanations of the decisions that change fitment, performance, ownership and support.</p></div><AutoVisual variant="technology" eyebrow="TTT / KNOWLEDGE"/></div></section>

  <section className="section"><div className="shell"><div className="visual-feature-grid">{top.map(([title,body,variant,href])=><Link className="visual-feature" href={href} key={title}><AutoVisual variant={variant}/><div className="visual-feature__content"><small>Resource</small><h3>{title}</h3><p>{body}</p></div></Link>)}</div></div></section>

  <section className="section section--soft"><div className="shell media-mosaic"><Link href="/technology"><AutoVisual variant="technology" eyebrow="TECHNOLOGY LIBRARY"/></Link><Link href="/vehicles"><AutoVisual variant="concept" eyebrow="VEHICLE FITMENT"/></Link><div className="editorial-visual-copy"><p className="eyebrow">Start with the vehicle</p><h2>Year, make, model and trim change the recommendation.</h2><p>Factory equipment and vehicle architecture matter more than a universal “best product” list.</p><Link className="button button--ghost" href="/vehicles">Vehicle Fitment →</Link></div></div></section>

  <section className="section"><div className="shell decision-split"><div><p className="eyebrow">Greater Houston</p><h3>Local project context and service area.</h3><Link className="button button--ghost" href="/service-area">Service Area →</Link></div><div><p className="eyebrow">Brands & partners</p><h3>How products earn a place in a TTT system.</h3><Link className="button button--ghost" href="/technology/brands">Brands & Partners →</Link></div></div></section>

  <section className="cta-band"><div className="shell"><h2>Have a question that depends on your vehicle?</h2><Link className="button button--light" href="/start">Tell us about the vehicle →</Link></div></section>
</main>}
