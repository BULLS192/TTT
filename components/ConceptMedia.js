import Image from 'next/image';
import { homepageCinematic } from '../lib/cinematicMedia';

export default function ConceptMedia({ eyebrow='TTT / CONCEPT ONE', caption='Concept One', compact=false }) {
  const primary = homepageCinematic.sourcePoster || homepageCinematic.poster;
  return <figure className={`concept-media ${compact?'concept-media--compact':''}`}>
    <Image
      src={primary}
      alt="TTT Concept One matte-black coupe demonstrator"
      fill
      sizes={compact ? '(max-width: 767px) calc(100vw - 36px), 50vw' : '(max-width: 900px) calc(100vw - 48px), 50vw'}
      priority={!compact}
      quality={82}
    />
    <span className="concept-media__scrim" aria-hidden="true" />
    <figcaption><small>{eyebrow}</small><strong>{caption}</strong></figcaption>
  </figure>;
}
