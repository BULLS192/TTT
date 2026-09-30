import Link from 'next/link';
import AssetMedia from './AssetMedia';

function Action({action,light=false}){
  if(!action) return null;
  const [label,href]=action;
  return <Link className={light?'button button--light':'button'} href={href}>{label}</Link>;
}

function Section({section,index,visual}){
  return <section className={'section '+(section.dark?'dark-section':'')+(section.soft?' section--soft':'')}>
    <div className="shell">
      <div className="section-heading"><div>{section.eyebrow?<p className="eyebrow">{section.eyebrow}</p>:null}<h2>{section.title}</h2>{section.intro?<p className={section.dark?'lead lead--dark':'lead'}>{section.intro}</p>:null}</div>{section.link?<Link href={section.link[1]}>{section.link[0]} →</Link>:null}</div>
      {section.paragraphs?.map((p,i)=><p className={i===0&&!section.intro?'lead':''} key={i}>{p}</p>)}
      {section.bullets?<ul className="copy-bullets">{section.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>:null}
      {section.cards?<div className={'card-grid '+(section.cards.length>3?'card-grid--3':'card-grid--2')}>{section.cards.map((card,i)=><article className="feature-card" key={i}>{card.kicker?<span className="feature-card__index">{card.kicker}</span>:null}<h3>{card.title}</h3>{card.body?<p>{card.body}</p>:null}{card.bullets?<ul>{card.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>:null}{card.href?<Link href={card.href}>{card.linkLabel||'Learn more'} →</Link>:null}</article>)}</div>:null}
      {section.steps?<div className="home-process-grid">{section.steps.map((step,i)=><article key={i}><span>{String(i+1).padStart(2,'0')}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>:null}
      {section.table?<div className="usecase-table">{section.table.map((row,i)=><div className="usecase-row" key={i}><strong>{row[0]}</strong>{row.slice(1).map((cell,j)=><span key={j}>{cell}</span>)}</div>)}</div>:null}
      {section.callout?<div className="validation-note">{section.callout}</div>:null}
      {visual?<div className="copy-visual"><AssetMedia visual={visual}/></div>:null}
    </div>
  </section>;
}

export default function ServiceCopyPage({data}){
  const visuals=data.visuals||{};
  return <main className="visual-library-page">
    <section className={visuals.hero?'asset-page-hero':'page-hero'}>
      {visuals.hero?<><AssetMedia visual={visuals.hero} className="asset-page-hero__media" priority/><div className="asset-page-hero__shade"/></>:null}
      <div className="shell asset-page-hero__copy"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title}</h1>{data.subtitle?<h2>{data.subtitle}</h2>:null}<p className="lead">{data.supporting}</p><div className="button-row"><Action action={data.primary}/>{data.secondary?<Link className="button button--ghost" href={data.secondary[1]}>{data.secondary[0]}</Link>:null}</div>{data.heroLink?<p><Link href={data.heroLink[1]}>{data.heroLink[0]} →</Link></p>:null}</div>
    </section>
    {data.sections.map((section,index)=><Section key={index} section={section} index={index} visual={visuals.sections?.[index]}/>)}
    {data.faqs?.length?<section className="section section--soft"><div className="shell"><div className="section-heading"><div><p className="eyebrow">FAQ</p><h2>Common questions</h2></div></div><div className="faq-layout"><section className="faq-group"><div>{data.faqs.map(([q,a])=><details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section></div></div></section>:null}
    <section className="cta-band"><div className="shell"><h2>{data.final.title}</h2><p>{data.final.body}</p><div className="button-row"><Action action={data.final.primary} light/>{data.final.secondary?<Link className="button button--ghost-dark" href={data.final.secondary[1]}>{data.final.secondary[0]}</Link>:null}</div></div></section>
  </main>;
}
