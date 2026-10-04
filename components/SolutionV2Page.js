import Link from 'next/link';
import AssetMedia from './AssetMedia';
import TessaTrigger from './TessaTrigger';
import InquiryForm from './InquiryForm';

const experienceMeta={
  premium:{
    outcome:'A vehicle that feels more complete—not more modified.',
    focus:['Cabin comfort','Sound quality','Factory-like integration'],
    services:['Window Tint','Automotive Audio','Custom Fabrication','GPS Tracking'],
    path:['Prioritize the daily irritations','Plan the systems together','Install with factory features in mind','Tune and verify the whole vehicle']
  },
  security:{
    outcome:'Layered protection built around the moments that matter.',
    focus:['Deter & delay','Immobilize','Alert & locate'],
    services:['Kill Switches','GPS Tracking','SignalTrace™'],
    path:['Understand exposure','Choose the layers','Integrate without creating new faults','Verify authorized use and reporting']
  },
  connected:{
    outcome:'Useful vehicle information that reaches the right person.',
    focus:['Location','Events & alerts','Trip history'],
    services:['GPS Tracking','Kill Switches','Custom Fabrication','SignalTrace™'],
    path:['Decide what is worth knowing','Choose the platform','Install and hide the hardware','Verify the reporting path']
  },
  fleet:{
    outcome:'The tenth vehicle should match the first.',
    focus:['Repeatability','Records','Verification'],
    services:['GPS Tracking','Kill Switches','Window Tint','SignalTrace™','Custom Fabrication'],
    path:['Define the program','Build the standard','Prove it on a pilot','Repeat and record every unit']
  },
  custom:{
    outcome:'A vehicle-specific answer when no suitable kit exists.',
    focus:['Define the requirement','Engineer the interface','Document the result'],
    services:['Custom Fabrication','SignalTrace™','Vehicle Electronics'],
    path:['Map the requirement','Design around the vehicle','Build and test-fit what is missing','Verify and document the final system']
  }
};

const sectionLabels={
  premium:['Who It’s For','Why Planning Matters','The Result','Service Mix','OEM+ Details','Vehicle Plan'],
  security:['Who It’s For','Layered Security','Protection Layers','Integration','Risk Profile'],
  connected:['Who It’s For','Common Failure Points','Planning','Service Mix','Integration','Reporting Path'],
  fleet:['Why Standards Matter','Program Deliverables','Dealership Workflow','Fleet Workflow','Service Mix','Pilot & Rollout'],
  custom:['Best Fit','Why Generic Fails','Designed Result','Service Mix','Project Process']
};

export default function SolutionV2Page({page}){
  const meta=experienceMeta[page.experience]||experienceMeta.custom;
  const labels=sectionLabels[page.experience]||[];
  return <main className="production-page solution-editorial-page">
    <section className="review-hero solution-editorial-hero">
      <AssetMedia visual={page.heroVisual} className="review-hero__media" priority/>
      <div className="review-hero__overlay solution-editorial-hero__overlay"/>
      <div className="shell review-hero__copy solution-editorial-hero__copy">
        <p className="eyebrow">Solutions · {page.title}</p>
        <h1>{page.h1}</h1>
        <p className="lead lead--dark">{page.hero}</p>
        <div className="solution-editorial-hero__outcome">
          <span>THE OUTCOME</span>
          <strong>{meta.outcome}</strong>
        </div>
        <div className="button-row">
          <Link className="button" href={page.primaryHref}>{page.primary} →</Link>
          {page.secondaryHref?<a className="button button--ghost-dark" href={page.secondaryHref}>{page.secondary}</a>:null}
        </div>
      </div>
      <div className="shell solution-editorial-hero__rail" aria-label="Solution focus">
        {meta.focus.map((item,i)=><div key={item}><small>{String(i+1).padStart(2,'0')}</small><strong>{item}</strong></div>)}
      </div>
    </section>

    <section className="solution-editorial-map">
      <div className="shell">
        <div className="solution-editorial-map__head">
          <div><p className="eyebrow">How TTT approaches it</p><h2>Start with the result. Then plan the technology around it.</h2></div>
          <p>Define the outcome first. Then align the services, integration decisions and workmanship around the vehicle as one plan.</p>
        </div>
        <div className="solution-editorial-map__steps">
          {meta.path.map((item,i)=><article key={item}><small>{String(i+1).padStart(2,'0')}</small><span>{item}</span>{i<meta.path.length-1?<b>→</b>:null}</article>)}
        </div>
        <div className="solution-editorial-map__services">
          <span>Services that may be involved</span>
          <div>{meta.services.map(item=><em key={item}>{item}</em>)}</div>
        </div>
      </div>
    </section>

    {page.sections.map((section,index)=><section id={section.id||undefined} className={index%2?'section section--soft copy-section solution-editorial-section':'section copy-section solution-editorial-section'} key={section.title}>
      <div className="shell copy-section__grid">
        <div className="solution-editorial-section__title">
          <p className="eyebrow">{String(index+1).padStart(2,'0')} / {labels[index]||section.label||'Details'}</p>
          <h2>{section.title}</h2>
        </div>
        <div className="copy-section__body">
          {(section.body||[]).map((p,i)=><p key={i}>{p}</p>)}
          {section.bullets?<ul className="clean-list solution-editorial-list">{section.bullets.map((x,i)=><li key={i}>{x}</li>)}</ul>:null}
          {section.table?<div className="content-table solution-editorial-table">{section.table.map((row,i)=><div className={i===0?'content-table__row is-head':'content-table__row'} key={i}>{row.map((cell,j)=><div key={j}>{cell}</div>)}</div>)}</div>:null}
          {section.steps?<div className="process-cards solution-editorial-process">{section.steps.map(([t,b],i)=><article key={t}><small>{String(i+1).padStart(2,'0')}</small><strong>{t}</strong><p>{b}</p></article>)}</div>:null}
          {section.links?<div className="solution-editorial-links">{section.links.map(([l,h])=><Link href={h} key={h}><span>Explore service</span><strong>{l}</strong><b>→</b></Link>)}</div>:null}
          {section.tessa?<div className="solution-editorial-tessa"><span>Need help applying this to your vehicle?</span><TessaTrigger className="text-link" prompt={section.tessa}>Ask Tessa: “{section.tessa}” →</TessaTrigger></div>:null}
        </div>
      </div>
    </section>)}

    {page.businessInquiry?<section id="inquiry" className="section section--soft"><div className="shell contact-form-grid"><div><p className="eyebrow">Business inquiry</p><h2>Start a conversation about your vehicles.</h2><p>A few details help us come back with a useful first response. Nothing here commits you.</p></div><InquiryForm type="business" title="Send Business Inquiry" intro="Tell us about the organization, vehicles and technology requirement."/></div></section>:null}

    {page.faqs?.length?<section className="section section--dark"><div className="shell faq-two-col"><div><p className="eyebrow">Questions</p><h2>Before you decide.</h2><p className="small-note--dark">Straight answers before a quote or consultation.</p></div><div className="faq-list">{page.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>:null}

    <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">{page.title}</p><h2>{page.finalTitle}</h2>{page.finalCopy?<p>{page.finalCopy}</p>:null}</div><div className="solution-editorial-cta__actions"><TessaTrigger className="text-link text-link--light" prompt={'Help me think through '+page.title.toLowerCase()+' for my vehicle.'}>Ask Tessa first →</TessaTrigger><Link className="button button--light" href={page.primaryHref}>{page.primary} →</Link></div></div></section>
  </main>;
}
