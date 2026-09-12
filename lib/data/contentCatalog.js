import { industries, services, solutions } from '../siteData';
import { getContentProfile } from './contentRegistry';
import { requiredContentFields } from './contentTaxonomy';

const sourceByType = Object.freeze({ solutions, services, industries });

function singular(type) {
  if (type === 'solutions') return 'solution';
  if (type === 'services') return 'service';
  if (type === 'industries') return 'industry';
  return type;
}

export function normalizeContentItem(type, item) {
  const kind = singular(type);
  const profile = getContentProfile(kind, item.slug);

  return Object.freeze({
    id: `${kind}:${item.slug}`,
    type: kind,
    source: item,
    profile,
    completeness: getContentCompleteness(item),
    relationships: profile ? {
      capabilities: profile.capabilities,
      relatedSolutions: profile.relatedSolutions,
      relatedServices: profile.relatedServices,
      relatedIndustries: profile.relatedIndustries,
    } : {
      capabilities: [],
      relatedSolutions: [],
      relatedServices: [],
      relatedIndustries: [],
    },
  });
}

export function getContentCompleteness(item) {
  const missing = requiredContentFields.filter((field) => {
    const value = item?.[field];
    if (Array.isArray(value)) return value.length === 0;
    return value === undefined || value === null || value === '';
  });

  return Object.freeze({
    complete: missing.length === 0,
    missing,
    score: Math.round(((requiredContentFields.length - missing.length) / requiredContentFields.length) * 100),
  });
}

export const contentCatalog = Object.freeze([
  ...solutions.map((item) => normalizeContentItem('solutions', item)),
  ...services.map((item) => normalizeContentItem('services', item)),
  ...industries.map((item) => normalizeContentItem('industries', item)),
]);

export const contentCatalogById = Object.freeze(Object.fromEntries(contentCatalog.map((item) => [item.id, item])));

export function getContentRecord(type, slug) {
  return contentCatalogById[`${singular(type)}:${slug}`] || null;
}

export function getContentByCapability(capabilityId) {
  return contentCatalog.filter((item) => item.profile?.capabilities?.includes(capabilityId));
}

export function getContentByAudience(audienceId) {
  return contentCatalog.filter((item) => item.profile?.primaryAudiences?.includes(audienceId) || item.profile?.secondaryAudiences?.includes(audienceId));
}

export function getContentAudit() {
  return contentCatalog.map(({ id, type, source, profile, completeness }) => ({
    id,
    type,
    title: source.title,
    slug: source.slug,
    hasSemanticProfile: Boolean(profile),
    completeness,
    proofNeeded: profile?.proofNeeded || [],
    claimClasses: profile?.claimClasses || [],
  }));
}
