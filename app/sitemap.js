import { articles } from '../lib/articles';
import { siteUrl } from '../lib/siteConfig';

const staticPaths = [
  '/', '/about', '/contact', '/services', '/services/audio', '/services/window-tint',
  '/services/gps-tracking', '/services/kill-switches', '/services/signaltrace',
  '/services/custom-fabrication', '/portfolio', '/faq', '/quote', '/fleet-dealership',
  '/privacy', '/terms', '/accessibility',
  '/articles', '/concept-one', '/resources', '/service-area', '/standards',
  '/technology', '/technology/dsp', '/technology/oem-integration', '/technology/telematics',
  '/technology/vehicle-vision', '/technology/brands', '/vehicles', '/work-with-us'
];

export default function sitemap() {
  const now = new Date();
  const pages = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/quote' || path === '/services' ? 0.9 : 0.7
  }));
  const articlePages = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(`${article.date}T12:00:00Z`),
    changeFrequency: 'yearly',
    priority: 0.65
  }));
  return [...pages, ...articlePages];
}
