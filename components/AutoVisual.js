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

function CarBody({ tint = false }) {
  return <g>
    <ellipse cx="600" cy="550" rx="390" ry="38" fill="rgba(0,0,0,.34)"/>
    <path d="M236 453 C300 400 370 373 463 365 L548 295 C579 269 615 257 658 257 L754 257 C809 258 856 281 897 325 L954 385 C1008 396 1059 420 1098 453 L1124 484 C1130 493 1125 506 1114 510 L1024 527 C992 532 974 540 957 561 L928 599 L349 599 L318 560 C302 540 281 532 251 526 L187 512 C175 509 169 496 176 486 Z" fill="#111821" stroke="#596579" strokeWidth="2"/>
    <path d="M472 366 L557 304 C578 289 601 281 629 281 L743 281 C786 282 821 298 851 328 L902 381 L472 381 Z" fill={tint ? '#173f88' : '#202c3d'} stroke="#44536a" strokeWidth="2"/>
    <path d="M588 292 L560 374" stroke="#70829e" strokeWidth="2" opacity=".75"/>
    <path d="M758 282 L826 376" stroke="#70829e" strokeWidth="2" opacity=".75"/>
    <path d="M230 454 C434 435 737 432 1097 455" stroke="#37465c" strokeWidth="2" fill="none"/>
    <path d="M310 510 C520 524 782 524 1018 506" stroke="#0d1d37" strokeWidth="3" fill="none"/>
    <path d="M846 407 L971 414" stroke="#2b65d9" strokeWidth="5" strokeLinecap="round" opacity=".95"/>
    <path d="M224 469 L293 457" stroke="#d9e5ff" strokeWidth="4" strokeLinecap="round" opacity=".75"/>
    <circle cx="359" cy="558" r="73" fill="#080b11" stroke="#3b4759" strokeWidth="4"/>
    <circle cx="359" cy="558" r="43" fill="#141a24" stroke="#66748a" strokeWidth="3"/>
    <circle cx="359" cy="558" r="12" fill="#2b65d9"/>
    <circle cx="934" cy="558" r="73" fill="#080b11" stroke="#3b4759" strokeWidth="4"/>
    <circle cx="934" cy="558" r="43" fill="#141a24" stroke="#66748a" strokeWidth="3"/>
    <circle cx="934" cy="558" r="12" fill="#2b65d9"/>
    <path d="M605 400 L607 500" stroke="#344258" strokeWidth="2"/>
    <rect x="660" y="405" width="42" height="5" rx="2.5" fill="#596579"/>
  </g>;
}

function Grid() {
  return <g opacity=".19" stroke="#7890b5" strokeWidth="1">
    {Array.from({length: 10}).map((_,i)=><line key={`v${i}`} x1={110+i*110} y1="70" x2={110+i*110} y2="650"/>)}
    {Array.from({length: 6}).map((_,i)=><line key={`h${i}`} x1="80" y1={110+i*95} x2="1160" y2={110+i*95}/>)}
  </g>;
}

function AudioOverlay() {
  return <g>
    <circle cx="560" cy="412" r="45" fill="none" stroke="#4d7fff" strokeWidth="3" opacity=".9"/>
    <circle cx="560" cy="412" r="26" fill="none" stroke="#8eb0ff" strokeWidth="2" opacity=".7"/>
    <circle cx="755" cy="410" r="52" fill="none" stroke="#4d7fff" strokeWidth="3" opacity=".9"/>
    <circle cx="755" cy="410" r="31" fill="none" stroke="#8eb0ff" strokeWidth="2" opacity=".7"/>
    <path d="M472 181 C542 153 614 159 684 193 S821 226 905 194" fill="none" stroke="#6f98ff" strokeWidth="3"/>
    <path d="M472 201 C542 173 614 179 684 213 S821 246 905 214" fill="none" stroke="#2b65d9" strokeWidth="2" opacity=".6"/>
  </g>;
}

function SecurityOverlay() {
  return <g fill="none">
    <ellipse cx="650" cy="443" rx="482" ry="215" stroke="#2b65d9" strokeWidth="2" opacity=".72"/>
    <ellipse cx="650" cy="443" rx="420" ry="178" stroke="#75a0ff" strokeWidth="2" strokeDasharray="12 14" opacity=".55"/>
    <path d="M648 128 L712 155 L705 221 C701 259 680 293 648 313 C616 293 595 259 591 221 L584 155 Z" fill="rgba(23,53,111,.55)" stroke="#85a8ff" strokeWidth="2"/>
    <path d="M620 209 L642 230 L680 188" stroke="#d9e5ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>;
}

function TrackingOverlay() {
  return <g>
    <path d="M164 182 C297 120 427 161 539 116 S794 131 907 99 S1077 121 1130 183" fill="none" stroke="#2b65d9" strokeWidth="3" strokeDasharray="9 12"/>
    <path d="M971 185 C971 151 998 124 1032 124 C1066 124 1093 151 1093 185 C1093 232 1032 289 1032 289 C1032 289 971 232 971 185 Z" fill="#17356f" stroke="#8db0ff" strokeWidth="2"/>
    <circle cx="1032" cy="185" r="16" fill="#cfe0ff"/>
    <circle cx="1032" cy="185" r="52" fill="none" stroke="#5b87ec" opacity=".35"/>
  </g>;
}

function CameraOverlay() {
  return <g>
    <path d="M904 389 L1148 252 L1161 502 Z" fill="rgba(38,92,198,.16)" stroke="#5482e8" strokeWidth="2"/>
    <path d="M361 395 L121 268 L112 491 Z" fill="rgba(38,92,198,.11)" stroke="#5482e8" strokeWidth="2"/>
    <circle cx="917" cy="402" r="11" fill="#a9c3ff"/>
    <circle cx="350" cy="404" r="11" fill="#a9c3ff"/>
  </g>;
}

function TintOverlay() {
  return <g>
    <path d="M472 366 L557 304 C578 289 601 281 629 281 L743 281 C786 282 821 298 851 328 L902 381 L472 381 Z" fill="rgba(24,75,164,.52)" stroke="#7ea2ee" strokeWidth="2"/>
    <path d="M463 188 L510 247 M513 171 L555 235 M563 161 L600 225 M613 157 L645 219" stroke="#7da5ff" strokeWidth="3" opacity=".5"/>
  </g>;
}

function TechOverlay() {
  const nodes = [[386,183],[592,137],[798,183],[920,304],[745,403],[514,404],[360,305]];
  return <g>
    {nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="8" fill="#8fb1ff"/><circle cx={x} cy={y} r="22" fill="none" stroke="#4777e2" opacity=".45"/></g>)}
    <path d="M386 183 L592 137 L798 183 L920 304 L745 403 L514 404 L360 305 Z" fill="none" stroke="#4777e2" strokeWidth="2" strokeDasharray="7 9" opacity=".8"/>
  </g>;
}

export default function AutoVisual({ variant='generic', eyebrow='TTT / VEHICLE SYSTEM', title }) {
  const labels = variantLabels[variant] || variantLabels.generic;
  const tint = variant === 'window-tint';
  return <figure className={`auto-visual auto-visual--${variant}`} aria-label={title || `${variant} automotive technology illustration`}>
    <svg viewBox="0 0 1280 720" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="48%" r="58%"><stop offset="0%" stopColor="#17356f" stopOpacity=".72"/><stop offset="52%" stopColor="#0b1628" stopOpacity=".58"/><stop offset="100%" stopColor="#05080e" stopOpacity="1"/></radialGradient>
        <linearGradient id={`floor-${variant}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#101827"/><stop offset="100%" stopColor="#05070b"/></linearGradient>
      </defs>
      <rect width="1280" height="720" fill={`url(#glow-${variant})`}/>
      <Grid/>
      <path d="M0 604 L1280 520 L1280 720 L0 720 Z" fill={`url(#floor-${variant})`}/>
      <CarBody tint={tint}/>
      {variant === 'audio' ? <AudioOverlay/> : null}
      {variant === 'window-tint' ? <TintOverlay/> : null}
      {variant === 'security' ? <SecurityOverlay/> : null}
      {variant === 'tracking' || variant === 'dealership' || variant === 'fleets' ? <TrackingOverlay/> : null}
      {variant === 'cameras' ? <CameraOverlay/> : null}
      {variant === 'technology' ? <TechOverlay/> : null}
      {variant === 'concept' ? <g><ellipse cx="650" cy="455" rx="490" ry="235" fill="none" stroke="#4d7fff" strokeWidth="2" opacity=".38"/><path d="M605 143 L692 143" stroke="#8eb0ff" strokeWidth="4" strokeLinecap="round"/></g> : null}
    </svg>
    <figcaption className="auto-visual__caption"><small>{eyebrow}</small><div>{labels.map((label,i)=><span key={label}><b>0{i+1}</b>{label}</span>)}</div></figcaption>
  </figure>;
}
