'use client';

import dynamic from 'next/dynamic';

function LabLoading(){
  return <div className="fusion-experience-loading" role="status" aria-live="polite"><span>Loading experience…</span></div>;
}

const components={
  tint:dynamic(()=>import('./GlassLab'),{ssr:false,loading:LabLoading}),
  audio:dynamic(()=>import('./AudioLab'),{ssr:false,loading:LabLoading}),
  security:dynamic(()=>import('./SecurityLab'),{ssr:false,loading:LabLoading}),
  tracking:dynamic(()=>import('./TrackingLab'),{ssr:false,loading:LabLoading}),
  fabrication:dynamic(()=>import('./FabricationLab'),{ssr:false,loading:LabLoading})
};

const experienceCopy={
  tint:{eyebrow:'Glass Lab',title:'See what darkness changes — and what it doesn’t.',body:'Compare shade, film family and viewing conditions to separate privacy from heat control. Save the combination you want to discuss with TTT.'},
  audio:{eyebrow:'Listening Room',title:'Hear how each stage changes the cabin.',body:'Compare Factory, Speaker Upgrade, Amplified and DSP Tuned, then change listening position to understand why system design matters as much as individual parts.'},
  tracking:{eyebrow:'Vehicle Journey',title:'Follow what the vehicle reports through a journey.',body:'Watch ignition, speed, geofences, alerts and trip history update together through a representative trip so you can decide which information is actually useful.'},
  security:{eyebrow:'Security Scenario',title:'See what each protection layer changes.',body:'Compare the same unauthorized-use scenario with factory-only security and with added tracking and immobilization layers to understand what each layer can — and cannot — do.'},
  fabrication:{eyebrow:'Fitment Transformation',title:'Watch a fitment problem become an engineered solution.',body:'Follow the path from vehicle capture and packaging constraints through design, test fit and a finished mounted part built around the actual space.'}
};

export default function ServiceExperience({type,serviceName}){
  const Component=components[type];
  const copy=experienceCopy[type];
  if(!Component||!copy)return null;

  return <section id="interactive" className="section wave2-section fusion-experience-section">
    <div className="shell">
      <div className="fusion-experience-intro">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div>
        <p>{copy.body}</p>
      </div>
      <Component/>
      <div className="fusion-experience-continue">
        <a className="text-link text-link--light" href="#service-content">Continue with {serviceName||'service'} details ↓</a>
      </div>
    </div>
  </section>;
}
