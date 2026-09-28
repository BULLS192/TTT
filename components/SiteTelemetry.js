'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { trackWebsiteEvent } from '../lib/visitor';

export default function SiteTelemetry(){
  const pathname=usePathname();
  useEffect(()=>{
    if(typeof window==='undefined') return;
    const key='ttt-last-page-event';
    const now=Date.now();
    const current=pathname+window.location.search;
    const previous=sessionStorage.getItem(key)||'';
    const split=previous.lastIndexOf('|');
    const lastPath=split>=0?previous.slice(0,split):'';
    const lastTime=split>=0?Number(previous.slice(split+1)):0;
    if(lastPath===current && now-lastTime<1500) return;
    sessionStorage.setItem(key,current+'|'+now);
    trackWebsiteEvent('page_view','page_view',{title:document.title});
  },[pathname]);
  return <><Analytics/><SpeedInsights/></>;
}
