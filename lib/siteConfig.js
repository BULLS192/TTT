const configuredUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();

export const siteUrl = (configuredUrl || 'https://ttt-alpha-gules.vercel.app').replace(/\/$/, '');
export const isLaunchDomainConfigured = Boolean(
  configuredUrl &&
  !configuredUrl.includes('your-domain.com') &&
  !configuredUrl.includes('vercel.app')
);
export const isProductionBuild = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';
export const isIndexableBuild = isLaunchDomainConfigured && isProductionBuild;

export const siteName = 'Thompson Transportation Technologies';
export const shortName = 'TTT';
export const siteDescription = 'Automotive technology consulting, integration and installation for vehicle owners, dealerships and fleets.';
export const serviceAreas = ['Houston', 'Katy', 'Sugar Land', 'Cypress', 'The Woodlands', 'Pearland'];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  alternateName: shortName,
  url: siteUrl,
  logo: `${siteUrl}/brand/ttt-logo.svg`,
  description: siteDescription,
  areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
  knowsAbout: [
    'Automotive technology integration',
    'Car audio and DSP',
    'Automotive window tint',
    'Vehicle security',
    'GPS tracking and telematics',
    'Vehicle cameras',
    'OEM integration',
    'Fleet vehicle technology',
    'Dealership accessory programs'
  ]
};
