import Link from 'next/link';
import { brandAssets } from '../lib/assets';

export default function BrandMark({ compact = false }) {
  return (
    <Link
      className={`brand-mark ${compact ? 'brand-mark--compact' : 'brand-mark--full'}`}
      href="/"
      aria-label="Thompson Transportation Technologies home"
    >
      <img
        className="brand-mark__image"
        src={brandAssets.logo}
        alt="Thompson Transportation Technologies LLC"
        width="480"
        height="228"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}
