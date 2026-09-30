import Link from 'next/link';
import AssetMedia from './AssetMedia';

export default function ClaudeServicePage({page}) {
  return <main className="production-page">
    <section className="review-hero">
      <AssetMedia visual={page.heroVisual} className="review-hero__media" priority />
      <div className="review-hero__overlay"/>
      <div className="shell review-hero__copy">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        {page.subtitle ? <p className="review-hero__subtitle">{page.subtitle}</p> : null}
        {page.theme ? <p className="review-hero__theme">{page.theme}</p> : null}
        <p className="lead lead--dark">{page.support}</p>
        <div className="button-row">
          <Link className="button" href={page.primaryHref}>{page.primary} →</Link>
          <a className="button button--ghost-dark" href="#details">{page.secondary}</a>
        </div>
      </div>
    </section>
    <div id="details">
      {page.sections.map((section,index)=><section className={index%2 ? 'section section--soft copy-section':'section copy-section'} key={section.title}>
        <div className="shell copy-section__grid">
          <div><p className="eyebrow">{String(index+1).padStart(2,'0')} / {page.eyebrow}</p><h2>{section.title}</h2></div>
          <div className="copy-section__body">
            {(section.body||[]).map(p=><p key={p}>{p}</p>)}
            {section.bullets ? <ul className="clean-list">{section.bullets.map(x=><li key={x}>{x}</li>)}</ul> : null}
            {section.steps ? <div className="process-cards">{section.steps.map(([title,body],i)=><article key={title}><small>{String(i+1).padStart(2,'0')}</small><strong>{title}</strong><p>{body}</p></article>)}</div> : null}
          </div>
        </div>
        {page.media[index] ? <div className="shell section-media"><AssetMedia visual={page.media[index]} /></div> : null}
      </section>)}
    </div>
    <section className="section section--dark"><div className="shell faq-two-col">
      <div><p className="eyebrow">Questions</p><h2>Before the work begins.</h2></div>
      <div className="faq-list">{page.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </div></section>
    <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">{page.eyebrow}</p><h2>{page.finalTitle}</h2></div><Link className="button button--light" href={page.primaryHref}>{page.primary} →</Link></div></section>
  </main>;
}
