import { notFound } from 'next/navigation';
import Link from 'next/link';
import AssetMedia from '../../../components/AssetMedia';
import ArticleBodyV3 from '../../../components/ArticleBodyV3';
import { articles,getArticle } from '../../../lib/articles';

export function generateStaticParams(){return articles.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const a=getArticle(slug);if(!a)return {};return {title:a.seoTitle||a.title,description:a.description,openGraph:{title:a.title,description:a.description,type:'article',publishedTime:a.date}}}

export default async function Page({params}){
 const {slug}=await params;
 const a=getArticle(slug);
 if(!a)notFound();
 const published=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(a.date+'T00:00:00Z'));
 const schema={'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.description,datePublished:a.date,dateModified:a.updated||a.date,author:{'@type':'Organization',name:'Thompson Transportation Technologies LLC'},publisher:{'@type':'Organization',name:'Thompson Transportation Technologies LLC'},isPartOf:{'@type':'WebSite',name:'Thompson Transportation Technologies'}};
 return <main className="production-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <article className="journal-v3">
   <header className="journal-v3__hero"><AssetMedia visual={a.heroVisual} className="journal-v3__hero-media" priority/><div className="journal-v3__shade"/><div className="shell shell--article journal-v3__hero-copy"><Link className="article-back" href="/articles">← TTT Articles</Link><p className="eyebrow">{a.lengthClass} · {a.category} · {a.readingTime}</p><h1>{a.title}</h1><p className="lead lead--dark">{a.intro||a.description}</p><div className="article-byline"><span>By Thompson Transportation Technologies</span><span>Published {published}</span></div></div></header>
   <div className="shell shell--article"><ArticleBodyV3 article={a}/><div className="article-disclosure"><b>TTT editorial standard</b><p>General educational information, not vehicle-specific legal, warranty or engineering advice. Technical, product and regulatory claims are checked before publication when they affect a recommendation, and vehicle-specific details are confirmed before commercial work is approved.</p></div><div className="article-next"><p className="eyebrow">Apply it to your vehicle</p><h2>Articles explain the principle. Your vehicle decides the recommendation.</h2><Link className="button" href={a.href}>{a.cta} →</Link></div></div>
  </article>
 </main>
}
