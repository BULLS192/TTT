import { articles } from '../lib/articles';
import { siteUrl } from '../lib/siteConfig';

const staticPaths = [
  '/', '/about', '/articles', '/concept-one', '/contact', '/industries',
  '/industries/vehicle-owners', '/industries/dealerships', '/industries/fleets',
  '/industries/commercial-vehicles', '/industries/specialty-vehicles', '/projects',
  '/resources', '/resources/faq', '/service-area', '/services', '/services/audio',
  '/services/window-tint', '/services/security', '/services/tracking', '/services/cameras',
  '/services/lighting', '/services/electronics', '/services/custom-fabrication', '/solutions',
  '/solutions/premium-vehicle-experience', '/solutions/vehicle-security',
  '/solutions/connected-vehicle', '/solutions/fleet-intelligence',
  '/solutions/dealership-technology', '/solutions/custom-integration', '/standards', '/start',
  '/technology', '/technology/dsp', '/technology/oem-integration', '/technology/telematics',
  '/technology/vehicle-vision', '/technology/brands', '/vehicles', '/work-with-us',
  '/privacy', '/terms', '/accessibility'
];

export default function sitemap() {
  const now = new Date();
  const pages = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/start' || path === '/services' || path === '/solutions' ? 0.9 : 0.7
  }));

  const articlePages = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(`${article.date}T12:00:00Z`),
    changeFrequency: 'yearly',
    priority: 0.65
  }));

  return [...pages, ...articlePages];
}
