'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { effectiveBuildItems, useTTTBuild } from './TTTBuildContext';
import { trackWebsiteEvent } from '../../lib/visitor';

export default function BuildDock(){
 const{items,removeItem,clear,profile,open,setOpen,ready}=useTTTBuild();
 const projectItems=effectiveBuildItems(items);
 const vehicle=[profile?.year,profile?.make,profile?.model,profile?.trim].filter(Boolean).join(' ');
 const drawerRef=useRef(null);
 const openerRef=useRef(null);
 const closeRef=useRef(null);
 const lastFocusRef=useRef(null);

 useEffect(()=>{
  if(!open)return;
  lastFocusRef.current=document.activeElement;
  const previousOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  closeRef.current?.focus();
  const onKeyDown=e=>{
   if(e.key==='Escape'){setOpen(false);return}
   if(e.key!=='Tab')return;
   const focusable=[...drawerRef.current?.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')||[]];
   if(!focusable.length)return;
   const first=focusable[0],last=focusable[focusable.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  };
  window.addEventListener('keydown',onKeyDown);
  trackWebsiteEvent('wave2_build','open_drawer',{count:projectItems.length});
  return()=>{
   window.removeEventListener('keydown',onKeyDown);
   document.body.style.overflow=previousOverflow;
   const target=lastFocusRef.current;
   if(target&&typeof target.focus==='function')requestAnimationFrame(()=>{if(document.querySelector('#tessa-assistant'))return;target.focus()});
  };
 },[open,setOpen]);

 const askTessa=()=>{
  const summary=projectItems.slice(0,8).map(item=>item.category+': '+item.title+(item.detail?' ('+item.detail+')':'')).join('; ');
  const context=[vehicle?'Vehicle: '+vehicle+'.':'',profile?.goals?.length?'Priorities: '+profile.goals.join(', ')+'.':'',summary?'Selections: '+summary+'.':''].filter(Boolean).join(' ');
  trackWebsiteEvent('wave2_build','handoff_tessa',{count:projectItems.length,goalCount:profile?.goals?.length||0,hasVehicle:Boolean(vehicle)});
  setOpen(false);
  window.dispatchEvent(new CustomEvent('ttt:tessa-open',{detail:{prompt:'Please review my TTT vehicle project. '+context+' What should I consider next?'}}));
 };
 const quote=()=>{trackWebsiteEvent('wave2_build','handoff_quote',{count:projectItems.length});setOpen(false)};
 if(!ready||(!projectItems.length&&!open))return null;

 return <>
  <button ref={openerRef} className={'ttt-build-dock '+(projectItems.length?'has-items':'')} onClick={()=>setOpen(true)} aria-label={'Open My TTT Build, '+projectItems.length+' selection'+(projectItems.length===1?'':'s')} aria-expanded={open} aria-controls="ttt-build-drawer">
   <span>MY TTT BUILD</span><b>{projectItems.length}</b>
  </button>
  <div className={'ttt-build-scrim '+(open?'is-open':'')} onClick={()=>setOpen(false)} aria-hidden="true"/>
  <aside ref={drawerRef} id="ttt-build-drawer" className={'ttt-build-drawer '+(open?'is-open':'')} aria-hidden={!open} inert={!open} role="dialog" aria-modal="true" aria-labelledby="ttt-build-title">
   <div className="ttt-build-drawer__head">
    <div><p className="eyebrow">TTT Digital Vehicle</p><h2 id="ttt-build-title">My TTT Build</h2></div>
    <button ref={closeRef} onClick={()=>setOpen(false)} aria-label="Close My TTT Build">×</button>
   </div>
   <div className="ttt-build-drawer__journey" aria-label="TTT customer journey"><span className="is-complete">Explore</span><i/><span className={projectItems.length?'is-complete':''}>Build</span><i/><span>Discuss</span><i/><span>Quote</span></div>
   <p className="ttt-build-drawer__intro">Your vehicle, priorities and saved systems stay together while you explore. Tessa and the quote request use the same project context.</p>
   {(vehicle||profile?.goals?.length)?<div className="ttt-build-project">
    <small>PROJECT CONTEXT</small>
    <strong>{vehicle||'Vehicle not selected yet'}</strong>
    {profile?.goals?.length?<p>{profile.goals.join(' · ')}</p>:<p>Add priorities in Concept One to personalize the handoff.</p>}
    <Link href="/concept-one#system-view" onClick={()=>setOpen(false)}>Edit in Concept One →</Link>
   </div>:null}
   <div className="ttt-build-items">
    {projectItems.length?projectItems.map((item,i)=><article key={item.id}>
     <span className="ttt-build-items__number">{String(i+1).padStart(2,'0')}</span>
     <div><small>{item.category}</small><strong>{item.title}</strong><p>{item.detail}</p></div>
     <button onClick={()=>removeItem(item.id)} aria-label={'Remove '+item.title+' from My TTT Build'}>Remove</button>
    </article>):<div className="ttt-build-empty"><strong>Your build is empty.</strong><p>Start with Concept One or a service lab, then save only the systems or selections you actually want to discuss.</p><Link href="/experience" onClick={()=>setOpen(false)}>Explore interactive labs →</Link></div>}
   </div>
   {projectItems.length?<div className="ttt-build-drawer__handoff"><small>NEXT BEST STEP</small><button className="button button--ghost" type="button" onClick={askTessa}>Ask Tessa about this build →</button></div>:null}
   <div className="ttt-build-drawer__actions">
    {projectItems.length?<button className="text-link" onClick={clear}>Clear build</button>:<span/>}
    <Link className="button" href="/quote?from=build" onClick={quote}>Request a Quote →</Link>
   </div>
  </aside>
 </>;
}