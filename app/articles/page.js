import Link from 'next/link';
import { articles } from '../../lib/articles';

export const metadata={title:'Articles',description:'Original TTT articles about automotive technology, OEM integration, vehicle security, audio, tint, tracking and professional installation.'};

export default function Page(){return <main>
  <section className="page-hero page-hero--journal"><div className="shell"><p className="eyebrow">TTT Journal</p><h1>Useful thinking about the technology going into modern vehicles.</h1><p className="lead">Original TTT articles built around practical integration, customer decisions and the work behind a finished vehicle — written to inform first and sell second.</p></div></section>
  <section className="section"><div className="shell"><div className="journal-feature"><div><p className="eyebrow">Why this exists</p><h2>Technical authority should be earned in public.</h2></div><p>TTT will use this library to document what we learn, explain the decisions behind systems and create searchable, genuinely useful material for vehicle owners, dealerships, fleets and industry partners. Sponsored or commercially connected content should be identified clearly.</p></div><div className="article-grid">{articles.map((article,i)=><article className={`article-card ${i===0?'article-card--featured':''}`} key={article.slug}><div className="article-card__meta"><span>{article.category}</span><span>{article.readingTime}</span></div><h2>{article.title}</h2><p>{article.description}</p><div className="article-card__footer"><time dateTime={article.date}>{new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</time><Link href={`/articles/${article.slug}`}>Read article →</Link></div></article>)}</div></div></section>
  <section className="cta-band"><div className="shell"><h2>Have a vehicle question worth turning into an article?</h2><Link className="button button--light" href="/contact">Ask TTT →</Link></div></section>
</main>}
