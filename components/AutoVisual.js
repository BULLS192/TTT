import { getVisual } from '../lib/visualLibrary';

const variantLabels = {
  audio: ['DSP','CABIN','SUB'],
  'window-tint': ['GLASS','IR','UV'],
  security: ['DETER','DETECT','LOCATE'],
  tracking: ['GPS','CELL','APP'],
  cameras: ['FRONT','REAR','PARK'],
  lighting: ['AMBIENT','TASK','UTILITY'],
  electronics: ['POWER','CONTROL','OEM'],
  'custom-fabrication': ['FIT','FORM','SERVICE'],
  dealership: ['INTAKE','INSTALL','DELIVER'],
  fleets: ['STANDARD','TRACK','SERVICE'],
  technology: ['SIGNAL','DATA','POWER'],
  concept: ['C1','TTT','001'],
  about: ['CONSULT','BUILD','VALIDATE'],
  generic: ['VEHICLE','SYSTEM','TTT'],
};

const visualByVariant = {
  audio: 'audioHero',
  'window-tint': 'tintHero',
  security: 'securityHero',
  tracking: 'gpsHero',
  cameras: 'technologyDetail',
  lighting: 'homeHeroNight',
  electronics: 'signalHero',
  'custom-fabrication': 'fabricationHero',
  dealership: 'industryDealership',
  fleets: 'industryFleet',
  technology: 'technologyHero',
  concept: 'homeHero',
  about: 'consultationReal',
  generic: 'premiumVehicleReal',
};

export default function AutoVisual({ variant='generic', eyebrow='TTT / VEHICLE SYSTEM', title }) {
  const labels = variantLabels[variant] || variantLabels.generic;
  const asset = getVisual(visualByVariant[variant] || visualByVariant.generic);

  return <figure className={`auto-visual auto-visual--${variant} auto-visual--photo`} aria-label={title || asset.alt || `${variant} automotive technology`}>
    <img
      className="auto-visual__photo"
      src={asset.src}
      alt={asset.alt || ''}
      loading="lazy"
      decoding="async"
    />
    <span className="auto-visual__photo-shade" aria-hidden="true" />
    <figcaption className="auto-visual__caption">
      <small>{eyebrow}</small>
      <div>{labels.map((label,i)=><span key={label}><b>0{i+1}</b>{label}</span>)}</div>
    </figcaption>
  </figure>;
}
