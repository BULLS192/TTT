import Link from 'next/link';
import { products } from '../../lib/siteData';

export const metadata={title:'Shop',description:'TTT automotive technology storefront foundation: shop by vehicle, solution, product or brand and connect products to professional installation.'};

const paths=[
  ['01','Shop by vehicle','Start with year, make, model and trim so future catalog results can prioritize compatible hardware.','/vehicles'],
  ['02','Shop by solution','Build around the outcome: premium audio, security, tracking, cameras, privacy or connected vehicle.','/solutions'],
  ['03','Shop by product','Browse curated categories when you already know the type of technology you need.','#catalog'],
  ['04','Shop by brand','Understand which manufacturers TTT has evaluated and why specific products fit the portfolio.','/technology/brands'],
];
const categories=['Audio & DSP','Security','Tracking','Cameras','Window Film','Electronics'];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">TTT Shop</p><h1>Buy the right technology — or make it part of a complete build.</h1><p className="lead">The TTT storefront is designed to connect products to vehicle compatibility, installation and project history instead of operating as an isolated parts catalog.</p></div></section>
  <section className="section"><div className="shell"><div className="commerce-status"><i/><span><b>Commerce foundation active.</b> Live inventory, payments and checkout will switch on after the production Shopify connection and policies are configured.</span></div><div className="shop-path-grid">{paths.map(([n,title,body,href])=><Link className="shop-path" href={href} key={title}><span>{n}</span><h2>{title}</h2><p>{body}</p></Link>)}</div></div></section>
  <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Catalog map</p><h2>Technology categories</h2></div></div><div className="catalog-rail">{categories.map((x,i)=><div className="catalog-chip" key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div></section>
  <section id="catalog" className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Catalog foundation</p><h2>Product families</h2></div><div className="section-copy"><p>These are category-level placeholders while TTT verifies suppliers, manufacturer relationships, SKUs, costs, MAP rules, inventory and fitment data. We will not publish fictional stock or dealer authorization.</p><p>Once commerce is connected, every product can support two journeys: buy the product, or add it to a professionally scoped TTT build.</p></div></div><div className="card-grid card-grid--3">{products.map((p)=><article className="product-card" key={p.name}><div className="product-card__image"><span>{p.category}</span></div><p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><div className="button-row"><button className="button button--disabled" disabled>Checkout coming later</button><Link className="button button--ghost" href="/start">Add to build</Link></div></article>)}</div></div></section>
  <section className="section section--soft"><div className="shell section-intro-grid"><div><p className="eyebrow">Installation matters</p><h2>Parts are only one layer of the finished result.</h2></div><div className="section-copy"><p>For products installed by TTT, the future product page can show vehicle fitment, expected labor, related accessories, project examples, documentation, warranty information and whether programming or subscriptions are required.</p><div className="section-link-row"><Link className="button" href="/start">Build with TTT →</Link><Link className="button button--ghost" href="/resources/faq">Shop & installation FAQ</Link></div></div></div></section>
</main>}
