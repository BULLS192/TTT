import Link from 'next/link';

export default function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} href="/" aria-label="Thompson Transportation Technologies home">
      <span className="brand-mark__ttt" aria-hidden="true"><b>T</b><i>T</i><i>T</i></span>
      {!compact && <span className="brand-mark__name"><strong>THOMPSON</strong><small>TRANSPORTATION TECHNOLOGIES</small></span>}
    </Link>
  );
}
