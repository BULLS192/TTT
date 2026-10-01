'use client';

export default function ExperienceShell({eyebrow,title,description,children,aside,footer}){
 return <section className="wave2-experience" aria-label={title}>
  <div className="wave2-experience__top">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>
    <span className="wave2-experience__badge">INTERACTIVE V1</span>
  </div>
  <div className={'wave2-experience__body '+(aside?'has-aside':'')}>
    <div className="wave2-experience__stage">{children}</div>
    {aside?<div className="wave2-experience__aside">{aside}</div>:null}
  </div>
  {footer?<div className="wave2-experience__footer">{footer}</div>:null}
 </section>;
}
