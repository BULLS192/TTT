'use client';

import { useMemo, useState } from 'react';
import styles from './TintVisualizer.module.css';

const shades = [
  { value: 70, label: '70%', note: 'Very light' },
  { value: 50, label: '50%', note: 'Light' },
  { value: 35, label: '35%', note: 'Balanced' },
  { value: 20, label: '20%', note: 'Dark' },
  { value: 5, label: '5%', note: 'Very dark' },
];

const opacityByShade = {
  70: 0.30,
  50: 0.45,
  35: 0.60,
  20: 0.76,
  5: 0.93,
};

function Vehicle({ tinted = false, shade = 35 }) {
  const tintOpacity = opacityByShade[shade] ?? 0.6;

  return (
    <svg viewBox="0 0 1200 640" role="img" aria-label={tinted ? `${shade}% simulated window tint` : 'Untinted vehicle'}>
      <defs>
        <linearGradient id={tinted ? 'body-tinted' : 'body-clear'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b1f26" />
          <stop offset="48%" stopColor="#07090d" />
          <stop offset="100%" stopColor="#151a22" />
        </linearGradient>
        <linearGradient id={tinted ? 'glass-tinted' : 'glass-clear'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tinted ? '#081222' : '#77869b'} stopOpacity={tinted ? tintOpacity : 0.72} />
          <stop offset="100%" stopColor={tinted ? '#02060c' : '#313d4c'} stopOpacity={tinted ? Math.min(1, tintOpacity + 0.06) : 0.82} />
        </linearGradient>
        <radialGradient id={tinted ? 'wheel-tinted' : 'wheel-clear'} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#586272" />
          <stop offset="45%" stopColor="#202631" />
          <stop offset="100%" stopColor="#05070a" />
        </radialGradient>
      </defs>

      <ellipse cx="600" cy="528" rx="430" ry="34" fill="rgba(0,0,0,.36)" />

      <path
        d="M151 438 C177 402 231 381 318 369 L430 353 L523 257 C548 231 584 217 628 217 L744 217 C792 218 832 236 866 271 L950 357 C1012 367 1067 389 1093 421 L1119 453 C1129 466 1121 482 1105 486 L1015 507 C981 515 961 530 943 557 L914 598 H303 L275 559 C257 534 235 518 201 510 L138 495 C118 490 111 472 122 457 Z"
        fill={`url(#${tinted ? 'body-tinted' : 'body-clear'})`}
        stroke="#394252"
        strokeWidth="3"
      />

      <path
        d="M444 351 L535 268 C557 248 585 238 620 238 H733 C771 239 803 252 830 278 L904 353 Z"
        fill={`url(#${tinted ? 'glass-tinted' : 'glass-clear'})`}
        stroke="#66778f"
        strokeWidth="3"
      />
      <path d="M594 243 L565 347" stroke="#73839a" strokeWidth="3" opacity=".8" />
      <path d="M738 239 L808 351" stroke="#73839a" strokeWidth="3" opacity=".8" />
      <path d="M438 365 C610 361 780 361 951 368" stroke="#2a3340" strokeWidth="3" fill="none" />
      <path d="M203 441 C449 423 772 421 1094 442" stroke="#333d4c" strokeWidth="2" fill="none" />
      <path d="M846 393 L969 401" stroke="#2d62c8" strokeWidth="5" strokeLinecap="round" opacity=".85" />
      <path d="M169 461 L246 448" stroke="#d5def0" strokeWidth="4" strokeLinecap="round" opacity=".72" />

      {[333, 939].map((x) => (
        <g key={x}>
          <circle cx={x} cy="548" r="76" fill="#05070a" stroke="#303947" strokeWidth="5" />
          <circle cx={x} cy="548" r="45" fill={`url(#${tinted ? 'wheel-tinted' : 'wheel-clear'})`} stroke="#596679" strokeWidth="3" />
          <circle cx={x} cy="548" r="10" fill="#2d62c8" />
          <path d={`M${x} 510 L${x} 586 M${x - 38} 548 L${x + 38} 548 M${x - 27} 521 L${x + 27} 575 M${x + 27} 521 L${x - 27} 575`} stroke="#8995a8" strokeWidth="3" opacity=".55" />
        </g>
      ))}

      <path d="M621 383 L620 485" stroke="#303946" strokeWidth="2" />
      <rect x="674" y="391" width="44" height="5" rx="2.5" fill="#556174" />
    </svg>
  );
}

export default function TintVisualizer() {
  const [shade, setShade] = useState(35);
  const [split, setSplit] = useState(54);

  const current = useMemo(() => shades.find((item) => item.value === shade), [shade]);

  return (
    <div className={styles.visualizer}>
      <div className={styles.header}>
        <div>
          <small>TTT / SHADE LAB</small>
          <strong>See the difference before you choose.</strong>
        </div>
        <span>{shade}% VLT</span>
      </div>

      <div className={styles.stage}>
        <div className={styles.vehicleBase}><Vehicle /></div>
        <div
          className={styles.vehicleTinted}
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          aria-hidden="true"
        >
          <Vehicle tinted shade={shade} />
        </div>
        <div className={styles.divider} style={{ left: `${split}%` }} aria-hidden="true">
          <i />
        </div>
        <span className={`${styles.stageLabel} ${styles.stageLabelLeft}`}>Tinted</span>
        <span className={`${styles.stageLabel} ${styles.stageLabelRight}`}>Untinted</span>
        <input
          className={styles.splitControl}
          type="range"
          min="10"
          max="90"
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
          aria-label="Move the before and after comparison slider"
        />
      </div>

      <div className={styles.shadeControls}>
        {shades.map((item) => (
          <button
            type="button"
            key={item.value}
            className={shade === item.value ? styles.activeShade : ''}
            onClick={() => setShade(item.value)}
            aria-pressed={shade === item.value}
          >
            <b>{item.label}</b>
            <span>{item.note}</span>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <p><strong>{current?.label} VLT</strong> means roughly {current?.label} of visible light is transmitted by the film rating. The finished result is affected by the vehicle's original glass.</p>
        <small>Visual simulation only. Real tint appearance changes with factory glass, interior color, lighting, viewing angle and the selected film.</small>
      </div>
    </div>
  );
}
