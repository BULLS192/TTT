import { getVisual } from '../lib/visualLibrary';

export default function AssetMedia({ visual, className='', priority=false, caption='' }) {
  const asset = typeof visual === 'string' ? getVisual(visual) : visual;
  return (
    <figure className={`asset-media ${className}`}>
      <img src={asset.src} alt={asset.alt || ''} loading={priority ? 'eager' : 'lazy'} decoding="async" fetchPriority={priority ? 'high' : 'auto'} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
