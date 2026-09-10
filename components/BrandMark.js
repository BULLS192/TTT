import Link from 'next/link';
import { canonicalLogoDataUri } from '../lib/brand/logoData';

export default function BrandMark({ compact = false }) {
  return (
    <Link
      className={`brand-mark ${compact ? 'brand-mark--compact' : 'brand-mark--full'}`}
      href="/"
      aria-label="Thompson Transportation Technologies home"
    >
      <img
        className="brand-mark__image"
        src={canonicalLogoDataUri}
        alt="Thompson Transportation Technologies LLC"
        width="100"
        height="47"
      />
    </Link>
  );
}
