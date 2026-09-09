export default function VehicleStage({ label = 'CONCEPT ONE', active = 'SYSTEM' }) {
  return (
    <div className="vehicle-stage" aria-label={`${label} vehicle technology illustration`}>
      <div className="vehicle-stage__grid" />
      <div className="vehicle-stage__hud vehicle-stage__hud--left"><small>{label}</small><strong>{active}</strong></div>
      <div className="vehicle-stage__hud vehicle-stage__hud--right"><small>TTT SYSTEM</small><strong>INTEGRATED</strong></div>
      <svg viewBox="0 0 900 360" role="img" aria-hidden="true" className="vehicle-line-art">
        <path d="M140 225 C225 190 280 120 390 108 L555 108 C630 112 685 158 738 205 L790 218" />
        <path d="M124 231 L100 248 L107 275 L176 280 M724 280 L805 274 L816 247 L786 222" />
        <path d="M197 278 H694" />
        <circle cx="235" cy="279" r="54" /><circle cx="657" cy="279" r="54" />
        <path d="M327 128 L286 207 M557 124 L626 205 M292 207 H625" />
      </svg>
      <span className="tech-node tech-node--a" /><span className="tech-node tech-node--b" /><span className="tech-node tech-node--c" />
    </div>
  );
}
