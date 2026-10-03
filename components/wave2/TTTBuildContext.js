'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { trackWebsiteEvent } from '../../lib/visitor';

const STORAGE_KEY='ttt-wave2-build-v1';
const PROFILE_KEY='ttt-wave2-profile-v1';
const BuildContext=createContext(null);
const EMPTY_PROFILE={year:'',make:'',model:'',trim:'',goals:[]};

function normalize(items){
  return Array.isArray(items)?items.filter(Boolean).slice(0,24):[];
}
function normalizeProfile(value){
  if(!value||typeof value!=='object') return {...EMPTY_PROFILE};
  return {
    year:String(value.year||'').slice(0,8),
    make:String(value.make||'').slice(0,100),
    model:String(value.model||'').slice(0,100),
    trim:String(value.trim||'').slice(0,100),
    goals:Array.isArray(value.goals)?value.goals.filter(Boolean).slice(0,12):[]
  };
}

export function TTTBuildProvider({children}){
  const[items,setItems]=useState([]);
  const[profile,setProfile]=useState({...EMPTY_PROFILE});
  const[open,setOpen]=useState(false);
  const[ready,setReady]=useState(false);

  useEffect(()=>{
    try{
      setItems(normalize(JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')));
      setProfile(normalizeProfile(JSON.parse(localStorage.getItem(PROFILE_KEY)||'{}')));
    }catch{}
    setReady(true);
  },[]);

  useEffect(()=>{
    if(!ready)return;
    try{
      localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
      localStorage.setItem(PROFILE_KEY,JSON.stringify(profile));
    }catch{}
  },[items,profile,ready]);

  const addItem=useCallback((item)=>{
    if(!item?.id)return;
    trackWebsiteEvent('wave2_build','add_item',{id:item.id,category:item.category||'',title:item.title||''});
    setItems(current=>{
      const next=current.filter(x=>x.id!==item.id);
      return [...next,{...item,updatedAt:Date.now()}].slice(-24);
    });
  },[]);

  const removeItem=useCallback((id)=>{trackWebsiteEvent('wave2_build','remove_item',{id});setItems(current=>current.filter(x=>x.id!==id))},[]);
  const clear=useCallback(()=>{trackWebsiteEvent('wave2_build','clear_build',{});setItems([])},[]);
  const updateProfile=useCallback((updates)=>{
    setProfile(current=>{
      const next=normalizeProfile({...current,...updates});
      trackWebsiteEvent('wave2_build','update_profile',{hasVehicle:Boolean(next.year||next.make||next.model),goalCount:next.goals.length});
      return next;
    });
  },[]);
  const toggleGoal=useCallback((goal)=>{
    setProfile(current=>{
      const goals=current.goals.includes(goal)?current.goals.filter(x=>x!==goal):[...current.goals,goal].slice(0,12);
      trackWebsiteEvent('wave2_build','toggle_goal',{goal,selected:goals.includes(goal)});
      return {...current,goals};
    });
  },[]);
  const clearProfile=useCallback(()=>{trackWebsiteEvent('wave2_build','clear_profile',{});setProfile({...EMPTY_PROFILE})},[]);

  const value=useMemo(()=>({items,addItem,removeItem,clear,profile,updateProfile,toggleGoal,clearProfile,open,setOpen,ready}),[items,addItem,removeItem,clear,profile,updateProfile,toggleGoal,clearProfile,open,ready]);
  return <BuildContext.Provider value={value}>{children}</BuildContext.Provider>;
}

export function useTTTBuild(){
  const ctx=useContext(BuildContext);
  if(!ctx)throw new Error('useTTTBuild must be used inside TTTBuildProvider');
  return ctx;
}

export function buildSummary(items=[]){
  return items.map(item=>item.summary||item.title).filter(Boolean).join(' · ');
}

export function vehicleSummary(profile={}){
  return [profile.year,profile.make,profile.model,profile.trim].filter(Boolean).join(' ');
}


export function effectiveBuildItems(items=[]){
  const normalized=normalize(items);
  const specificCategories=new Set(
    normalized
      .filter(item=>!String(item?.id||'').startsWith('concept-one-'))
      .map(item=>String(item?.category||''))
      .filter(Boolean)
  );
  return normalized.filter(item=>{
    const id=String(item?.id||'');
    const category=String(item?.category||'');
    const conceptOneItem=id.startsWith('concept-one-');
    return !conceptOneItem || !specificCategories.has(category);
  });
}
