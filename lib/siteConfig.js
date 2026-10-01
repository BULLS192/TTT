const configuredUrl=(process.env.NEXT_PUBLIC_SITE_URL||'').trim();
export const siteUrl=(configuredUrl||'https://ttt-alpha-gules.vercel.app').replace(/\/$/,'');
export const isLaunchDomainConfigured=Boolean(configuredUrl&&!configuredUrl.includes('your-domain.com')&&!configuredUrl.includes('vercel.app'));
export const isProductionBuild=!process.env.VERCEL_ENV||process.env.VERCEL_ENV==='production';
export const isIndexableBuild=isLaunchDomainConfigured&&isProductionBuild;
export const siteName='Thompson Transportation Technologies';
export const shortName='TTT';
export const siteDescription='Vehicle technology, properly integrated: window tint, audio, tracking, security, diagnostics and custom fabrication for modern vehicles in Greater Houston.';
export const organizationSchema={'@context':'https://schema.org','@type':'Organization','@id':siteUrl+'/#organization',name:siteName,alternateName:shortName,url:siteUrl,logo:siteUrl+'/brand/ttt-logo.svg',description:siteDescription,areaServed:{'@type':'AdministrativeArea',name:'Greater Houston'},knowsAbout:['Automotive technology integration','Car audio and DSP','Automotive window tint','Vehicle security','GPS tracking and telematics','Advanced vehicle electronics diagnostics','Custom fabrication and additive manufacturing','OEM integration','Fleet and dealership vehicle technology']};