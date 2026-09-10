import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticle } from '../../../lib/articles';

export function generateStaticParams(){return articles.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const article=getArticle(slug);if(!article)return {};return {title:article.title,description:article.description,openGraph:{title:article.title,description:article.description,type:'article',publishedTime:article.date}}}

export default async function Page({params}){const {slug}=await params;const article=getArticle(slug);if(!article)notFound();const articleJson={'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.description,datePublished:article.date,dateModified:article.date,author:{'@type':'Organization',name:'Thompson Transportation Technologies LLC'},publisher:{'@type':'Organization',name:'Thompson Transportation Technologies LLC'}};return <main>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleJson)}} />
  <article className="journal-article"><header className="journal-article__hero"><div className="shell shell--article"><Link className="article-back" href="/articles">← TTT Journal</Link><div className="article-kicker"><span>{article.category}</span><time dateTime={article.date}>{new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</time><span>{article.readingTime}</span></div><h1>{article.title}</h1><p className="lead">{article.description}</p></div></header>
  <div className="shell shell--article journal-article__body"><p className="article-intro">{article.intro}</p>{article.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<div className="article-disclosure"><b>TTT editorial standard</b><p>This article is general educational information, not vehicle-specific engineering, legal or warranty advice. Product relationships or sponsorships that could affect how readers interpret a recommendation should be disclosed with the relevant content.</p></div></div>
  </article>
  <section className="cta-band"><div className="shell"><h2>Want to apply this thinking to your vehicle?</h2><Link className="button button--light" href="/start">Start a project →</Link></div></section>
</main>}
