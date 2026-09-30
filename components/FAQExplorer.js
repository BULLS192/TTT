'use client';
import { useMemo,useState } from 'react';

export default function FAQExplorer({groups}){
  const [query,setQuery]=useState('');
  const [category,setCategory]=useState('All');
  const filtered=useMemo(()=>{
    const q=query.trim().toLowerCase();
    return groups.map(([group,items])=>[group,items.filter(([question,answer])=>{
      const categoryMatch=category==='All'||category===group;
      const textMatch=!q||(question+' '+answer).toLowerCase().includes(q);
      return categoryMatch&&textMatch;
    })]).filter(([,items])=>items.length);
  },[groups,query,category]);
  return <div className="faq-explorer">
    <div className="faq-tools">
      <label className="faq-search"><span>Search questions</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try “warranty”, “tint”, “delivery” or “battery drain”"/></label>
      <div className="faq-categories" aria-label="FAQ categories">{['All',...groups.map(([g])=>g)].map(g=><button type="button" key={g} className={category===g?'is-active':''} onClick={()=>setCategory(g)}>{g}</button>)}</div>
    </div>
    <div className="faq-groups">{filtered.length?filtered.map(([group,items])=><section id={group.toLowerCase().replace(/[^a-z]+/g,'-')} className="faq-group-production" key={group}><p className="eyebrow">{group}</p><div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>):<div className="faq-empty"><h2>No matching questions yet.</h2><p>Try another search, or ask Tessa from the assistant button.</p></div>}</div>
  </div>;
}
