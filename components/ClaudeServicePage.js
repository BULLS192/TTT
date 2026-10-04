import Link from 'next/link';
import AssetMedia from './AssetMedia';
import TessaTrigger from './TessaTrigger';
import ServiceExperience from './wave2/ServiceExperience';

const serviceSectionLabels={
  "The short version": "Quick take",
  "Why people tint, and why they’re glad they did": "Why it matters",
  "Not all film is the same": "Film types",
  "Darker isn’t the same as cooler": "Shade vs. heat",
  "Choose the glass": "Coverage",
  "Clean glass, clean edges, checked in good light": "Installation",
  "The first few days": "Aftercare",
  "What we need for an accurate tint quote": "Quote prep",
  "Upgrade the sound, not the problems": "Integration first",
  "What do you want to hear?": "Listening goal",
  "Four common directions": "Upgrade paths",
  "Equipment sets the ceiling. Tuning decides what you hear.": "DSP & tuning",
  "Less rattle, cleaner sound": "Cabin control",
  "When the part doesn’t come in a box": "Custom fitment",
  "Answers when you need them": "Capabilities",
  "Who uses it": "Use cases",
  "Hidden, powered properly, checked before handover": "Installation",
  "Tracking shows where. A kill switch helps stop it moving.": "Tracking + security",
  "What tracking can’t promise": "Limits",
  "Another lock, independent of the factory one": "How it works",
  "Worth considering if…": "Best fit",
  "Installed so it doesn’t cause new problems": "Integration",
  "One layer, not the whole answer": "Layered security",
  "It starts with a private conversation": "Private planning",
  "Sound familiar?": "When to use it",
  "Five stages. Evidence at every step.": "Method",
  "Problems SignalTrace is for": "Fault types",
  "Codes are evidence, not the answer": "Diagnostic logic",
  "You stay in control of time and cost": "Approvals",
  "A written record, whatever the outcome": "Documentation",
  "Universal parts rarely fit universally": "The problem",
  "What we make": "Capabilities",
  "From problem to fitted part": "Process",
  "3D printing as a practical tool": "Additive manufacturing",
  "What we don’t make": "Boundaries"
};
function serviceSectionLabel(section,index){
  return serviceSectionLabels[section.title]||section.label||('Section '+String(index+1).padStart(2,'0'));
}

function SectionContent({section}){
  return <div className="copy-section__body">
    {(section.body||[]).map((p,i)=><p key={i}>{p}</p>)}
    {section.bullets?<ul className="clean-list">{section.bullets.map((x,i)=><li key={i}>{x}</li>)}</ul>:null}
    {section.table?<div className="content-table">{section.table.map((row,i)=><div className={i===0?'content-table__row is-head':'content-table__row'} key={i}>{row.map((cell,j)=><div key={j}>{cell}</div>)}</div>)}</div>:null}
    {section.steps?<div className="process-cards">{section.steps.map(([title,body],i)=><article key={title}><small>{String(i+1).padStart(2,'0')}</small><strong>{title}</strong><p>{body}</p></article>)}</div>:null}
    {section.links?<div className="button-row">{section.links.map(([label,href])=><Link className="text-link" href={href} key={href}>{label} →</Link>)}</div>:null}
    {section.tessa?<TessaTrigger className="text-link" prompt={section.tessa}>Ask Tessa: “{section.tessa}” →</TessaTrigger>:null}
  </div>
}

export default function ClaudeServicePage({page}) {
  return <main className="production-page">
    <section className="review-hero">
      <AssetMedia visual={page.heroVisual} className="review-hero__media" priority />
      <div className="review-hero__overlay"/>
      <div className="shell review-hero__copy">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        {page.theme?<p className="review-hero__theme">{page.theme}</p>:null}
        <p className="lead lead--dark">{page.support}</p>
        <div className="button-row">
          <Link className="button" href={page.primaryHref}>{page.primary} →</Link>
          {page.secondaryHref?.startsWith('#')?<a className="button button--ghost-dark" href={page.secondaryHref}>{page.secondary}</a>:<Link className="button button--ghost-dark" href={page.secondaryHref}>{page.secondary}</Link>}
          {page.experience?<a className="button button--ghost-dark wave2-hero-lab-link" href="#interactive">Try interactive lab ↓</a>:null}
        </div>
        {page.heroTessa?<TessaTrigger className="cinematic__tessa-link" prompt={page.heroTessa}>Ask Tessa: “{page.heroTessa}” →</TessaTrigger>:null}
      </div>
    </section>
    {page.experience?<ServiceExperience type={page.experience}/>:null}
    {page.sections.map((section,index)=><section id={section.id||undefined} className={index%2?'section section--soft copy-section':'section copy-section'} key={section.title}>
      <div className="shell copy-section__grid"><div><p className="eyebrow">{String(index+1).padStart(2,'0')} / {serviceSectionLabel(section,index)}</p><h2>{section.title}</h2></div><SectionContent section={section}/></div>
      {section.visual?<div className="shell section-media"><AssetMedia visual={section.visual}/></div>:null}
    </section>)}
    {page.solutionLinks?.length?<section className="section section--compact"><div className="shell crosslink-strip"><div><p className="eyebrow">Part of these solutions</p><h2>Start with the outcome instead.</h2></div><div>{page.solutionLinks.map(([label,href])=><Link href={href} key={href}>{label} →</Link>)}</div></div></section>:null}
    <section className="section section--dark"><div className="shell faq-two-col"><div><p className="eyebrow">Questions</p><h2>Before the work begins.</h2></div><div className="faq-list">{page.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">{page.eyebrow}</p><h2>{page.finalTitle}</h2>{page.finalCopy?<p>{page.finalCopy}</p>:null}</div><Link className="button button--light" href={page.primaryHref}>{page.primary} →</Link></div></section>
  </main>;
}
