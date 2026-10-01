'use client';

import { useState } from 'react';

const principles=[
 ['vehicle','Protect the vehicle','Trim and surfaces stay the visible baseline.'],
 ['circuit','Protect the circuit','Power, grounding and fusing are planned, not improvised.'],
 ['mount','Mount it properly','Hardware is secure, deliberate and serviceable.'],
 ['factory','Preserve what matters','Factory functions are identified before integration.'],
 ['document','Document the work','A future technician should be able to understand what changed.'],
 ['verify','Validate before handover','New work and affected factory functions are checked before release.']
];

export default function StandardsXray(){
 const[show,setShow]=useState(false);const[active,setActive]=useState('circuit');
 return <section className="standards-xray">
   <div className="standards-xray__head"><div><p className="eyebrow">TTT Standard · X-Ray Mode</p><h2>The quality of an installation is mostly hidden.</h2><p>Switch from the finished cabin to the work behind it. Then select a principle to see what the standard is protecting.</p></div><button className={'xray-toggle '+(show?'is-on':'')} onClick={()=>setShow(v=>!v)}><span>{show?'HIDE THE WORK':'SHOW THE WORK'}</span><i/></button></div>
   <div className={'xray-stage '+(show?'is-xray':'')}>
     <div className="xray-cabin"><span>FINISHED INTERIOR</span><div className="xray-panel"/><div className="xray-console"/><div className="xray-speaker"/></div>
     <div className="xray-hidden">
       <div className={'xray-item xray-wire '+(active==='circuit'?'is-active':'')}><span>LOOM ROUTING</span></div>
       <div className={'xray-item xray-fuse '+(active==='circuit'?'is-active':'')}><span>FUSING</span></div>
       <div className={'xray-item xray-ground '+(active==='circuit'?'is-active':'')}><span>GROUND</span></div>
       <div className={'xray-item xray-module '+(active==='factory'||active==='document'?'is-active':'')}><span>MODULE</span></div>
       <div className={'xray-item xray-bracket '+(active==='mount'?'is-active':'')}><span>MOUNT</span></div>
       <div className={'xray-item xray-loop '+(active==='document'||active==='verify'?'is-active':'')}><span>SERVICE LOOP</span></div>
       <div className={'xray-item xray-trim '+(active==='vehicle'?'is-active':'')}><span>TRIM PROTECTION</span></div>
     </div>
     <div className="xray-status"><small>{show?'X-RAY VIEW':'CUSTOMER VIEW'}</small><strong>{principles.find(x=>x[0]===active)?.[1]}</strong></div>
   </div>
   <div className="xray-principles">{principles.map(([id,title,body],i)=><button className={id===active?'is-active':''} onClick={()=>{setActive(id);setShow(true)}} key={id}><small>{String(i+1).padStart(2,'0')}</small><span><strong>{title}</strong><em>{body}</em></span></button>)}</div>
 </section>;
}
