'use client';

import dynamic from 'next/dynamic';

function LabLoading(){
  return <div className="fusion-experience-loading" role="status" aria-live="polite"><span>Loading interactive demonstration…</span></div>;
}

const components={
  tint:dynamic(()=>import('./GlassLab'),{ssr:false,loading:LabLoading}),
  audio:dynamic(()=>import('./AudioLab'),{ssr:false,loading:LabLoading}),
  security:dynamic(()=>import('./SecurityLab'),{ssr:false,loading:LabLoading}),
  tracking:dynamic(()=>import('./TrackingLab'),{ssr:false,loading:LabLoading}),
  fabrication:dynamic(()=>import('./FabricationLab'),{ssr:false,loading:LabLoading})
};

export default function ServiceExperience({type,serviceName}){
  const Component=components[type];
  if(!Component)return null;

  return <section id="interactive" className="section wave2-section fusion-experience-section">
    <div className="shell">
      <div className="fusion-experience-intro">
        <div>
          <p className="eyebrow">Interactive demonstration</p>
          <h2>See the system before choosing the hardware.</h2>
        </div>
        <p>This is optional. Use the demonstration to understand the trade-offs visually, then continue through the conventional service information below. Your selections can be saved to My TTT Build.</p>
      </div>
      <Component/>
      <div className="fusion-experience-continue">
        <a className="text-link text-link--light" href="#service-content">Continue reading about {serviceName||'this service'} ↓</a>
      </div>
    </div>
  </section>;
}
