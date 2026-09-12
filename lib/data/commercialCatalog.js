import { productCategories as coreProductCategories } from './productIntelligence';
import { brandIntelligence, hcsPublicObservations } from './brandVendorIntelligence';
import { vendorChannels, vendorPipeline, vendorUseCases } from './vendorIntelligence';
import { tttPortfolioStrategy } from './portfolioStrategy';

export const categoryExtensions = Object.freeze([
  {
    id:'multimedia',
    label:'Multimedia & Vehicle Displays',
    capabilities:['electronics','oem-integration'],
    typicalRecords:['head-unit','vehicle-specific-display','carplay-android-auto-interface'],
    selectionCriteria:['vehicle-compatibility','factory-function-retention','display-quality','audio-path','camera-support','firmware-support','warranty'],
  },
  {
    id:'radar-driver-awareness',
    label:'Radar & Driver Awareness',
    capabilities:['electronics','oem-integration'],
    typicalRecords:['portable-radar-detector','custom-installed-radar-system','display-controller'],
    selectionCriteria:['legal-use-context','vehicle-fit','sensor-coverage','display-integration','update-support','serviceability','warranty'],
  },
  {
    id:'ppf-surface-protection',
    label:'Paint & Surface Protection',
    capabilities:['surface-protection'],
    typicalRecords:['paint-protection-film','windshield-film','surface-coating'],
    selectionCriteria:['film-construction','finish','clarity','self-healing','pattern-coverage','installer-training','warranty'],
  },
  {
    id:'sound-treatment',
    label:'Acoustic & Vibration Treatment',
    capabilities:['audio-dsp','custom-fabrication'],
    typicalRecords:['constrained-layer-damper','decoupling-foam','absorber','barrier'],
    selectionCriteria:['application-area','mass','thickness','adhesive','temperature-range','water-resistance','serviceability'],
  },
  {
    id:'safety-adas',
    label:'Safety & ADAS Integration',
    capabilities:['cameras','electronics','oem-integration'],
    typicalRecords:['blind-spot-system','parking-sensor','camera-system','commercial-safety-system'],
    selectionCriteria:['vehicle-compatibility','coverage','calibration','alert-method','environmental-rating','serviceability','support'],
  },
  {
    id:'installation-infrastructure',
    label:'Installation & OEM Integration Infrastructure',
    capabilities:['oem-integration','electronics','documentation-qa'],
    typicalRecords:['dash-kit','t-harness','data-interface','connector','fuse-distribution','wire-protection'],
    selectionCriteria:['vehicle-fit','electrical-rating','factory-function-retention','documentation','availability','serviceability','support'],
  },
  {
    id:'marine-powersports',
    label:'Marine & Powersports Electronics',
    capabilities:['audio-dsp','electronics'],
    typicalRecords:['marine-speaker','marine-amplifier','source-unit','powersports-audio-system'],
    selectionCriteria:['environmental-rating','corrosion-resistance','power-demand','mounting','serviceability','warranty'],
  },
]);

export const allProductCategories = Object.freeze([...coreProductCategories,...categoryExtensions]);

export const commercialCatalog = Object.freeze({
  categories:allProductCategories,
  brands:brandIntelligence,
  hcsEvidence:hcsPublicObservations,
  vendors:vendorChannels,
  vendorPipeline,
  useCases:vendorUseCases,
  portfolio:tttPortfolioStrategy,
});

export function getCommercialSnapshot(){
  const currentHcsObservedBrandIds=new Set(hcsPublicObservations.flatMap((record)=>record.brandIds));
  return Object.freeze({
    categoryCount:allProductCategories.length,
    brandCount:brandIntelligence.length,
    currentHcsObservedBrandCount:currentHcsObservedBrandIds.size,
    aPriorityBrandCount:brandIntelligence.filter((brand)=>brand.priority==='A').length,
    vendorChannelCount:vendorChannels.length,
    activeVendorPipelineCount:vendorPipeline.filter((record)=>record.status!=='deferred-by-scale').length,
    deferredVendorPipelineCount:vendorPipeline.filter((record)=>record.status==='deferred-by-scale').length,
  });
}

export function getBrandOptionsForCategory(category){
  return brandIntelligence.filter((brand)=>brand.categories.includes(category));
}

export function getLaunchVendorTargets(){
  const wave=tttPortfolioStrategy.waves.find((item)=>item.id==='wave-1-foundation');
  return wave?.targets||[];
}
