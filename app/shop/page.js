import Link from 'next/link';
import { products } from '../../lib/siteData';

export const metadata={title:'TTT Shop | Curated Vehicle Technology',description:'Explore the TTT vehicle technology catalog by vehicle, solution, product category or brand, with a path from product selection to professional installation.'};

const paths=[
  ['01','Shop by vehicle','Start with year, make, model and trim so recommendations can focus on technology appropriate for the vehicle.','/vehicles'],
  ['02','Shop by solution','Start with the outcome: better sound, stronger security, more visibility, more privacy or a connected vehicle.','/solutions'],
  ['03','Shop by product','Browse curated technology categories when you already know the type of product you need.','#catalog'],
  ['04','Shop by brand','Learn how manufacturers fit into the TTT portfolio and which applications they are best suited to.','/technology/brands']
];

const categories=['Audio & DSP','Security','Tracking','Cameras','Window Film','Electronics'];

export default function Page(){return <main>
  <section className="page-hero"><div className="shell"><p className="eyebrow">TTT Shop</p><h1>Vehicle technology should be easier to buy when you understand where it fits.</h1><p className="lead">The TTT shop is designed around compatibility, use case and professional integration — not an endless catalog of products with no context.</p></div></section>

  <section className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Curated commerce</p><h2>A smaller, better-explained catalog is more useful than thousands of unfiltered SKUs.</h2></div><div className="section-copy"><p>TTT is building the storefront around products that fit the technologies and customer types we actually support. Availability will expand as suppliers, fitment information and commercial relationships are verified.</p><p>Where professional installation matters, the same product should be able to become part of a scoped TTT project instead of ending at checkout.</p></div></div><div className="shop-path-grid">{paths.map(([n,title,body,href])=><Link className="shop-path" href={href} key={title}><span>{n}</span><h2>{title}</h2><p>{body}</p></Link>)}</div></div></section>

  <section className="section section--dark"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Catalog map</p><h2>Technology categories</h2></div></div><div className="catalog-rail">{categories.map((x,i)=><div className="catalog-chip" key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div></section>

  <section id="catalog" className="section"><div className="shell"><div className="section-intro-grid"><div><p className="eyebrow">Product families</p><h2>Start with the type of technology.</h2></div><div className="section-copy"><p>These product families show how the future TTT catalog will be organized. Live products will only be published when availability, fitment, supplier terms and support information are ready to stand behind.</p><p>Until then, customers can use the category as a starting point for a professionally scoped build.</p></div></div><div className="card-grid card-grid--3">{products.map((p)=><article className="product-card" key={p.name}><div className="product-card__image"><span>{p.category}</span></div><p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><div className="button-row"><Link className="button" href="/start">Add to a build →</Link><Link className="button button--ghost" href="/technology/brands">Explore brands</Link></div></article>)}</div></div></section>

  <section className="section section--soft"><div className="shell section-intro-grid"><div><p className="eyebrow">What a useful product page should tell you</p><h2>Fitment, installation and ownership belong next to the specifications.</h2></div><div className="section-copy"><p>TTT product pages are intended to connect hardware to compatible vehicles, expected installation requirements, related accessories, subscription needs, warranty information and relevant project examples. That context helps the customer understand the real cost and value of the system before purchase.</p><div className="section-link-row"><Link className="button" href="/start">Build with TTT →</Link><Link className="button button--ghost" href="/resources/faq">Shop & installation FAQ</Link></div></div></div></section>
</main>}
