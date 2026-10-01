'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY='ttt-wave2-build-v1';
const BuildContext=createContext(null);

function normalize(items){
  return Array.isArray(items)?items.filter(Boolean).slice(0,24):[];
}

export function TTTBuildProvider({children}){
  const[items,setItems]=useState([]);
  const[open,setOpen]=useState(false);
  const[ready,setReady]=useState(false);

  useEffect(()=>{
    try{
      const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');
      setItems(normalize(saved));
    }catch{}
    setReady(true);
  },[]);

  useEffect(()=>{
    if(!ready)return;
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(items));}catch{}
  },[items,ready]);

  const addItem=useCallback((item)=>{
    if(!item?.id)return;
    setItems(current=>{
      const next=current.filter(x=>x.id!==item.id);
      return [...next,{...item,updatedAt:Date.now()}];
    });
  },[]);

  const removeItem=useCallback((id)=>setItems(current=>current.filter(x=>x.id!==id)),[]);
  const clear=useCallback(()=>setItems([]),[]);

  const value=useMemo(()=>({items,addItem,removeItem,clear,open,setOpen,ready}),[items,addItem,removeItem,clear,open,ready]);
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
