import Link from 'next/link';
import AutoVisual from '../../components/AutoVisual';
import { articles } from '../../lib/articles';

export const metadata={title:'Articles',description:'Original TTT articles about automotive technology, OEM integration, vehicle security, audio, tint, tracking and professional installation.'};

const articleVariant=(category='')=>{
 const c=category.toLowerCase();
 if(c.includes('audio')) return 'audio';
 if(c.includes('security')) return 'security';
 if(c.includes('tracking')||c.includes('connected')) return 'tracking';
 if(c.includes('camera')||c.includes('vision')) return 'cameras';
 if(c.includes('tint')||c.includes('glass')) return 'window-tint';
 return 'technology';
};

export default function Page(){return <main>
  <section className="page-hero page-hero--visual"><div className="shell"><div><p className="eyebrow">TTT Journal</p><h1>Useful thinking about the technology going into modern vehicles.</h1><p className="lead">Practical explanations of the decisions behind audio, security, tint, tracking, cameras and OEM integration.</p></div><AutoVisual variant="technology" eyebrow="TTT / JOURNAL"/></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><span className="visual-kicker">Featured reading</span><h2>Start with the system, not the product list.</h2></div><div className="section-copy"><p>The journal exists to make technical decisions easier to understand before a customer spends money.</p></div></div>{articles.length?<Link className="editorial-visual-band" href={`/articles/${articles[0].slug}`}><AutoVisual variant={articleVariant(articles[0].category)} eyebrow={articles[0].category}/><div className="editorial-visual-copy"><p className="eyebrow">{articles[0].readingTime}</p><h2>{articles[0].title}</h2><p>{articles[0].description}</p><span className="button button--ghost">Read article →</span></div></Link>:null}</div></section>

  <section className="section section--soft"><div className="shell"><div className="article-grid">{articles.slice(1).map((article,i)=><article className={`article-card ${i===0?'article-card--featured':''}`} key={article.slug}><AutoVisual variant={articleVariant(article.category)} eyebrow={article.category}/><div className="article-card__meta"><span>{article.category}</span><span>{article.readingTime}</span></div><h2>{article.title}</h2><p>{article.description}</p><div className="article-card__footer"><time dateTime={article.date}>{new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</time><Link href={`/articles/${article.slug}`}>Read →</Link></div></article>)}</div></div></section>

  <section className="cta-band"><div className="shell"><h2>Have a vehicle question worth answering?</h2><Link className="button button--light" href="/contact">Ask TTT →</Link></div></section>
</main>}
