import Link from 'next/link';

export default function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} href="/" aria-label="Thompson Transportation Technologies home">
      <img className="brand-mark__image" src="/brand/ttt-logo.svg" alt="Thompson Transportation Technologies LLC" />
    </Link>
  );
}
