'use client';

import { useState } from 'react';
import AssetMedia from '../AssetMedia';
import { trackWebsiteEvent } from '../../lib/visitor';

const principles=[
 ['vehicle','Protect the vehicle','Trim and surfaces stay the visible baseline.'],
 ['circuit','Protect the circuit','Power, grounding and fusing are planned, not improvised.'],
 ['mount','Mount it properly','Hardware is secure, deliberate and serviceable.'],
 ['factory','Preserve what matters','Factory functions are identified before integration.'],
 ['document','Document the work','A future technician should be able to understand what changed.'],
 ['verify','Validate before handover','New work and affected factory functions are checked before release.']
];

const hidden=[
 ['wire','LOOM ROUTING','circuit',18,55],
 ['fuse','FUSING','circuit',34,34],
 ['ground','GROUND','circuit',73,69],
 ['module','FACTORY INTERFACE','factory',61,31],
 ['bracket','MOUNT','mount',29,72],
 ['loop','SERVICE LOOP','document',78,48],
 ['trim','TRIM PROTECTION','vehicle',15,23],
 ['record','INSTALL RECORD','verify',63,77]
];

export default function StandardsXray(){
 const[show,setShow]=useState(false);
 const[active,setActive]=useState('circuit');
 const principle=principles.find(x=>x[0]===active);
 const toggle=()=>{setShow(v=>{trackWebsiteEvent('wave2_standard',v?'hide_xray':'show_xray',{principle:active});return !v})};
 return <section id="xray" className="standards2b">
  <div className="standards2b__head">
   <div><p className="eyebrow">TTT Standard · X-Ray Mode</p><h2>The finished surface is only half the work.</h2><p>Reveal the hidden layer, then select a principle to see what the standard is protecting beneath the trim.</p></div>
   <button className={'xray-toggle '+(show?'is-on':'')} aria-pressed={show} onClick={toggle}><span>{show?'HIDE THE WORK':'SHOW THE WORK'}</span><i/></button>
  </div>

  <div className={'standards2b__stage '+(show?'is-xray':'')}>
   <AssetMedia visual="technologyDetail" className="standards2b__image"/>
   <div className="standards2b__customer-shade"/>
   <div className="standards2b__xray-shade"/>
   <svg className="standards2b__loom" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M17 57 C31 48 36 37 49 42 S67 61 81 45"/><path d="M35 35 C48 35 55 29 64 29"/></svg>
   <div className="standards2b__hidden">{hidden.map(([id,label,key,x,y])=><span key={id} className={'standards2b__item '+(active===key||(active==='document'&&id==='loop')||(active==='verify'&&id==='record')?'is-active':'')} style={{left:x+'%',top:y+'%'}}><i/>{label}</span>)}</div>
   <div className="standards2b__view-state"><small>{show?'X-RAY VIEW':'CUSTOMER VIEW'}</small><strong>{principle[1]}</strong><p>{principle[2]}</p></div>
  </div>

  <div className="standards2b__principles">{principles.map(([id,title,body],i)=><button type="button" aria-pressed={id===active} className={id===active?'is-active':''} onClick={()=>{setActive(id);setShow(true);trackWebsiteEvent('wave2_standard','select_principle',{principle:id})}} key={id}><small>{String(i+1).padStart(2,'0')}</small><span><strong>{title}</strong><em>{body}</em></span><i/></button>)}</div>
 </section>;
}