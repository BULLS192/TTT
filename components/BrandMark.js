import Link from 'next/link';

/*
 * CANONICAL LOGO NOTE
 * The approved TTT master artwork is a raster logo from the finalized brand board:
 * vehicle silhouette / integrated TTT geometry, first T black, remaining Ts deep blue,
 * THOMPSON black and TRANSPORTATION TECHNOLOGIES deep blue.
 * Do not redraw or reinterpret it here. Replace this fallback with the approved production
 * asset at /public/brand/ttt-logo.* as soon as the original file is available in the repo.
 */
export default function BrandMark({ compact = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} href="/" aria-label="Thompson Transportation Technologies home">
      <span className="brand-mark__ttt" aria-hidden="true"><b>T</b><i>T</i><i>T</i></span>
      {!compact && <span className="brand-mark__name"><strong>THOMPSON</strong><small>TRANSPORTATION TECHNOLOGIES</small></span>}
    </Link>
  );
}
