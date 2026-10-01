'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTTTBuild } from './TTTBuildContext';

export default function BuildDock(){
  const{items,removeItem,clear,open,setOpen,ready}=useTTTBuild();
  useEffect(()=>{if(!open)return;const onKeyDown=e=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKeyDown);return()=>window.removeEventListener('keydown',onKeyDown)},[open,setOpen]);
  const askTessa=()=>{const summary=items.slice(0,8).map(item=>item.category+': '+item.title).join('; ');setOpen(false);window.dispatchEvent(new CustomEvent('ttt:tessa-open',{detail:{prompt:'I want to discuss My TTT Build'+(summary?': '+summary:'')+'. Can you help me review these selections?'}}))};
  if(!ready)return null;
  return <>
    <button className={'ttt-build-dock '+(items.length?'has-items':'')} onClick={()=>setOpen(true)} aria-label="Open My TTT Build" aria-expanded={open} aria-controls="ttt-build-drawer">
      <span>MY TTT BUILD</span><b>{items.length}</b>
    </button>
    <div className={'ttt-build-scrim '+(open?'is-open':'')} onClick={()=>setOpen(false)} aria-hidden="true"/>
    <aside id="ttt-build-drawer" className={'ttt-build-drawer '+(open?'is-open':'')} aria-hidden={!open} role="dialog" aria-modal="true" aria-labelledby="ttt-build-title">
      <div className="ttt-build-drawer__head">
        <div><p className="eyebrow">TTT Digital Vehicle</p><h2 id="ttt-build-title">My TTT Build</h2></div>
        <button onClick={()=>setOpen(false)} aria-label="Close build">×</button>
      </div>
      <p className="ttt-build-drawer__intro">Selections you make in the interactive labs stay with you while you explore the site.</p>
      <div className="ttt-build-items">
        {items.length?items.map(item=><article key={item.id}>
          <div><small>{item.category}</small><strong>{item.title}</strong><p>{item.detail}</p></div>
          <button onClick={()=>removeItem(item.id)}>Remove</button>
        </article>):<div className="ttt-build-empty"><strong>Your build is empty.</strong><p>Try a service lab and add the configuration that interests you.</p><Link href="/experience" onClick={()=>setOpen(false)}>Explore interactive labs →</Link></div>}
      </div>
      {items.length?<button className="button button--ghost" type="button" onClick={askTessa}>Ask Tessa about this build →</button>:null}
      <div className="ttt-build-drawer__actions">
        {items.length?<button className="text-link" onClick={clear}>Clear build</button>:<span/>}
        <Link className="button" href="/quote?from=build" onClick={()=>setOpen(false)}>Request a Quote →</Link>
      </div>
    </aside>
  </>;
}
