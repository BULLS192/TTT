'use client';

import Link from 'next/link';
import { useTTTBuild } from './TTTBuildContext';

export default function BuildDock(){
  const{items,removeItem,clear,open,setOpen,ready}=useTTTBuild();
  if(!ready)return null;
  return <>
    <button className={'ttt-build-dock '+(items.length?'has-items':'')} onClick={()=>setOpen(true)} aria-label="Open My TTT Build">
      <span>MY TTT BUILD</span><b>{items.length}</b>
    </button>
    <div className={'ttt-build-scrim '+(open?'is-open':'')} onClick={()=>setOpen(false)} aria-hidden="true"/>
    <aside className={'ttt-build-drawer '+(open?'is-open':'')} aria-hidden={!open}>
      <div className="ttt-build-drawer__head">
        <div><p className="eyebrow">TTT Digital Vehicle</p><h2>My TTT Build</h2></div>
        <button onClick={()=>setOpen(false)} aria-label="Close build">×</button>
      </div>
      <p className="ttt-build-drawer__intro">Selections you make in the interactive labs stay with you while you explore the site.</p>
      <div className="ttt-build-items">
        {items.length?items.map(item=><article key={item.id}>
          <div><small>{item.category}</small><strong>{item.title}</strong><p>{item.detail}</p></div>
          <button onClick={()=>removeItem(item.id)}>Remove</button>
        </article>):<div className="ttt-build-empty"><strong>Your build is empty.</strong><p>Try a service lab and add the configuration that interests you.</p><Link href="/experience" onClick={()=>setOpen(false)}>Explore interactive labs →</Link></div>}
      </div>
      <div className="ttt-build-drawer__actions">
        {items.length?<button className="text-link" onClick={clear}>Clear build</button>:<span/>}
        <Link className="button" href="/quote?from=build" onClick={()=>setOpen(false)}>Request a Quote →</Link>
      </div>
    </aside>
  </>;
}
