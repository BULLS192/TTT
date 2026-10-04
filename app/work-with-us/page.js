import PartnerInquiryForm from '../../components/PartnerInquiryForm';
import { getPageCopy } from '../../lib/sanityContent';

const fallbackFit=[
 {title:'Manufacturers',body:'Products with a clear vehicle use case, technical documentation and a support model.'},
 {title:'Distributors',body:'Availability, logistics, channel support and warranty handling that can support repeatable work.'},
 {title:'Technology providers',body:'Platforms, software, diagnostics and connected services that strengthen a defined TTT solution.'},
 {title:'Service partners',body:'Specialist capabilities that can extend a project without blurring accountability.'}
];

export async function generateMetadata(){const p=await getPageCopy('/work-with-us');return {title:p?.seoTitle||'Work With Us | TTT',description:p?.seoDescription||'Manufacturer, distributor, technology-provider and service-partner inquiries for Thompson Transportation Technologies.'}}

export default async function Page(){
 const cms=await getPageCopy('/work-with-us');
 const c=(k,f)=>cms?.copy?.[k]||f;
 const fit=cms?.collections?.fit?.length?cms.collections.fit:fallbackFit;
 return <main className="production-page"><section className="page-hero page-hero--review"><div className="shell"><p className="eyebrow">{c('hero.eyebrow','Business · Work With Us')}</p><h1>{c('hero.title','Bring useful technology, not just another catalog.')}</h1><p className="lead">{c('hero.lead','TTT evaluates potential partners around vehicle fit, reliability, documentation, installer support, warranty handling and the customer outcome. An introduction is not an endorsement or a promise to stock a product.')}</p></div></section><section className="section"><div className="shell"><div className="principle-grid">{fit.map((item,i)=><article key={item.title}><small>{String(i+1).padStart(2,'0')}</small><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section><section className="section section--soft"><div className="shell contact-form-grid"><div><p className="eyebrow">{c('form.eyebrow','Partner inquiry')}</p><h2>{c('form.title','Introduce your company.')}</h2><p>{c('form.body','Give us enough context to understand what you make, where it fits, how it is supported and why it belongs in the TTT portfolio.')}</p></div><PartnerInquiryForm/></div></section></main>;
}
