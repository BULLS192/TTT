import Link from 'next/link';
import AssetMedia from './AssetMedia';

const sectionLabels={
  'Vehicle Owners':['Outcomes','TTT Process','Vehicle Fitment'],
  'Dealerships':['Program Design','Dealer Workflow','Pilot & Rollout'],
  'Fleets':['Program Standard','Scale Requirements','Service Mix'],
  'Commercial Vehicles':['Reliability','Workday Fit','Custom Requirements'],
  'Specialty Vehicles':['Preservation','Best Fit','Engineering Standard']
};

const programOutputs={
  Dealerships:[
    ['Program brief','Eligible vehicles, customer outcome, approved package and delivery workflow.'],
    ['Fitment record','Vehicle and trim confirmation before an installation is promised.'],
    ['QC + handover','A repeatable check and customer handover for each completed vehicle.'],
    ['Vehicle record','What was installed, configured and verified on that specific unit.']
  ],
  Fleets:[
    ['Pilot standard','The approved hardware, placement, wiring approach and verification points.'],
    ['Unit record','Vehicle or unit ID, installed equipment, device IDs, settings and completion status.'],
    ['QC record','A consistent pre-release check before each vehicle returns to service.'],
    ['Change record','A traceable record when equipment is added, replaced, reassigned or removed.']
  ]
};

export default function BusinessPageV3({page}){
  const labels=sectionLabels[page.title]||[];
  const outputs=programOutputs[page.title]||null;
  return <main className="production-page">
    <section className="review-hero review-hero--compact">
      <AssetMedia visual={page.heroVisual} className="review-hero__media" priority/>
      <div className="review-hero__overlay"/>
      <div className="shell review-hero__copy">
        <p className="eyebrow">Business · {page.title}</p>
        <h1>{page.h1}</h1>
        <p className="lead lead--dark">{page.hero}</p>
        <div className="button-row">
          <Link className="button" href={page.primaryHref}>{page.primary} →</Link>
          <Link className="button button--ghost-dark" href="/business">All Business environments</Link>
        </div>
      </div>
    </section>

    {page.sections.map((s,i)=><section className={i%2?'section section--soft':'section'} key={s.title}>
      <div className="shell copy-section__grid">
        <div><p className="eyebrow">{String(i+1).padStart(2,'0')} / {labels[i]||s.label||'Program Detail'}</p><h2>{s.title}</h2></div>
        <div className="copy-section__body">
          {(s.body||[]).map((p,j)=><p key={j}>{p}</p>)}
          {s.bullets?<ul className="clean-list">{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>:null}
          {s.links?<div className="button-row">{s.links.map(([l,h])=><Link className="text-link" href={h} key={h}>{l} →</Link>)}</div>:null}
        </div>
      </div>
    </section>)}

    {outputs?<section className="section section--dark business-deliverables"><div className="shell">
      <div className="business-deliverables__head">
        <div><p className="eyebrow">Program outputs</p><h2>What a repeatable program leaves behind.</h2></div>
        <p>Exact documents are finalized during scoping. These are the working records a TTT program is designed to create so the next vehicle does not start from zero.</p>
      </div>
      <div className="business-deliverables__list">
        {outputs.map(([title,body],i)=><article key={title}><small>{String(i+1).padStart(2,'0')}</small><div><h3>{title}</h3><p>{body}</p></div></article>)}
      </div>
    </div></section>:null}

    <section className="cta-band"><div className="shell cta-band__inner">
      <div><p className="eyebrow">{page.title}</p><h2>{page.finalTitle}</h2><p>{page.finalCopy}</p></div>
      <Link className="button button--light" href={page.primaryHref}>{page.primary} →</Link>
    </div></section>
  </main>;
}
