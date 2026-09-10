import { articles } from '../lib/articles';

export default function sitemap(){
  const base=process.env.NEXT_PUBLIC_SITE_URL||'https://ttt-alpha-gules.vercel.app';
  const staticRoutes=['','/solutions','/services','/industries','/concept-one','/projects','/technology','/technology/brands','/vehicles','/resources','/resources/faq','/articles','/shop','/about','/contact','/work-with-us','/start','/privacy','/terms','/accessibility'];
  const solutionSlugs=['premium-vehicle-experience','vehicle-security','connected-vehicle','fleet-intelligence','dealership-technology','custom-integration'];
  const serviceSlugs=['audio','window-tint','security','tracking','cameras','lighting','electronics','custom-fabrication'];
  const industrySlugs=['vehicle-owners','dealerships','fleets','commercial-vehicles','specialty-vehicles'];
  const paths=[...staticRoutes,...solutionSlugs.map(x=>`/solutions/${x}`),...serviceSlugs.map(x=>`/services/${x}`),...industrySlugs.map(x=>`/industries/${x}`),...articles.map(x=>`/articles/${x.slug}`)];
  return paths.map((path)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path.startsWith('/articles')?'monthly':'weekly',priority:path===''?1:path==='/start'?0.9:0.7}));
}
