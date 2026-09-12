import { homepageCinematic } from '../lib/cinematicMedia';

export default function ConceptMedia({ eyebrow='TTT / CONCEPT ONE', caption='Concept One', compact=false }) {
  const primary = homepageCinematic.sourcePoster || homepageCinematic.poster;
  return <figure className={`concept-media ${compact?'concept-media--compact':''}`}>
    <img
      src={primary}
      alt="TTT Concept One matte-black coupe demonstrator"
      width="1600"
      height="900"
      loading={compact?'lazy':'eager'}
      fetchPriority={compact?undefined:'high'}
      decoding="async"
    />
    <span className="concept-media__scrim" aria-hidden="true" />
    <figcaption><small>{eyebrow}</small><strong>{caption}</strong></figcaption>
  </figure>;
}
