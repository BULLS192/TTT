import Link from 'next/link';
import { articles } from '../../lib/articles';

export const metadata={title:'Articles | TTT',description:'Practical TTT articles about automotive technology, OEM integration, vehicle security, audio, tint, tracking and professional installation.'};

export default function Page(){
 const featured=articles[0];
 return <main className="production-page">
  <section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">TTT Articles</p><h1>Useful thinking about the technology going into modern vehicles.</h1><p className="lead">Practical explanations of the decisions behind integration, audio, security, tint, tracking and diagnostics.</p></div></section>
  {featured?<section className="section"><div className="shell"><Link className="article-feature" href={`/articles/${featured.slug}`}><div><p className="eyebrow">Featured / {featured.category}</p><h2>{featured.title}</h2><p>{featured.description}</p><span>Read article →</span></div><div className="article-feature__meta"><b>{featured.readingTime}</b><time dateTime={featured.date}>{featured.date}</time></div></Link></div></section>:null}
  <section className="section section--soft"><div className="shell"><div className="article-production-grid">{articles.slice(1).map(article=><article className="article-production-card" key={article.slug}><p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.description}</p><div><span>{article.readingTime}</span><Link href={`/articles/${article.slug}`}>Read →</Link></div></article>)}</div></div></section>
  <section className="cta-band"><div className="shell cta-band__inner"><div><p className="eyebrow">Need a vehicle-specific answer?</p><h2>Articles explain the principles. Your vehicle determines the recommendation.</h2></div><Link className="button button--light" href="/contact">Ask TTT →</Link></div></section>
 </main>;
}
