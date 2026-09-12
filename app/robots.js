import { isIndexableBuild, siteUrl } from '../lib/siteConfig';

export default function robots() {
  if (!isIndexableBuild) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      sitemap: `${siteUrl}/sitemap.xml`
    };
  }

  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/account', '/os', '/shop', '/api/']
    }],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
