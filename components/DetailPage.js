import Link from 'next/link';
import AssetMedia from './AssetMedia';

const process=[['01','Tell us','Vehicle + goal'],['02','Plan','System + fitment'],['03','Approve','Scope + estimate'],['04','Do the work','Install + configure'],['05','Check and hand over','Test + document']];

const visualBySlug={
 'vehicle-owners':'industryOwner',
 dealerships:'industryDealership',
 fleets:'industryFleet',
 'commercial-vehicles':'industryCommercial',
 'specialty-vehicles':'industrySpecialty'
};

const headlineBySlug={
 dealerships:'Build the program around the sales and delivery workflow.',
 fleets:'The twentieth install should be as understandable as the first.',
 'vehicle-owners':'Start with how you use the vehicle, not a catalog of parts.',
 'commercial-vehicles':'Technology should support the workday, not become another failure point.',
 'specialty-vehicles':'When the vehicle is unusual, the planning has to be better.'
};

function ProgramDiagram({slug}){
 const rows=slug==='dealerships'
  ?[['01','Package'],['02','Schedule'],['03','Install'],['04','Verify'],['05','Deliver']]
  :slug==='fleets'
   ?[['01','Standard'],['02','Pilot'],['03','Repeat'],['04','Record'],['05','Support']]
   :[['01','Vehicle'],['02','Requirement'],['03','Integration'],['04','Validation'],['05','Handoff']];
 return <div className="technical-flow">{rows.map(([n,t],i)=><div className="flow-node" key={t}><small>{n}</small><strong>{t}</strong>{i<rows.length-1?<em>→</em>:null}</div>)}</div>
}

export default function DetailPage({item,kind}){
 const visual=visualBySlug[item.slug]||'industryHub';
 const overview=(item.overview||[]).slice(0,2);
 const points=(item.points||[]).slice(0,4);
 const outcomes=(item.outcomes||[]).slice(0,3);
 return <main className="production-page">
  <section className="review-hero review-hero--compact"><AssetMedia visual={visual} className="review-hero__media" priority/><div className="review-hero__overlay"/><div className="shell review-hero__copy"><p className="eyebrow">{kind} / {item.eyebrow}</p><h1>{item.title}</h1><p className="lead lead--dark">{item.summary}</p><div className="button-row"><Link className="button" href="/quote">{item.cta} →</Link><Link className="button button--ghost-dark" href="/standards">The TTT Standard</Link></div></div></section>
  <section className="section"><div className="shell copy-section__grid"><div><p className="eyebrow">Overview</p><h2>{headlineBySlug[item.slug]||'Design the work around the way the vehicle is actually used.'}</h2></div><div className="copy-section__body">{overview.map(p=><p key={p}>{p}</p>)}</div></div></section>
  <section className="section section--soft"><div className="shell"><div className="diagram-panel"><div className="diagram-panel__head"><div><p className="eyebrow">Operating model</p><h2>Make the workflow repeatable before the hardware multiplies.</h2></div><p>Products, installation, records and support have to work together.</p></div><ProgramDiagram slug={item.slug}/></div></div></section>
  <section className="section"><div className="shell"><div className="principle-grid">{points.map((point,i)=><article key={point.title||point}><small>{String(i+1).padStart(2,'0')}</small><h3>{point.title||point}</h3><p>{typeof point==='string'?'Defined around the vehicle and scope.':point.body}</p></article>)}</div></div></section>
  <section className="section section--dark"><div className="shell copy-section__grid"><div><p className="eyebrow">What success looks like</p><h2>The operating model should survive real-world use.</h2></div><div className="copy-section__body"><ul className="clean-list">{outcomes.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
  <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">TTT process</p><h2>Five steps. One documented vehicle.</h2></div></div><div className="journey-grid">{process.map(([n,title,body])=><article key={title}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
  <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">{item.title}</p><h2>{item.cta}.</h2></div><Link className="button button--light" href="/quote">Request a Quote →</Link></div></section>
 </main>
}
