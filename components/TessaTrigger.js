'use client';

export default function TessaTrigger({children='Ask Tessa →',prompt='',className='text-link'}){
  const open=()=>{
    window.dispatchEvent(new CustomEvent('ttt:tessa-open',{detail:{prompt}}));
  };
  return <button type="button" className={`tessa-inline-trigger ${className}`} onClick={open}>{children}</button>;
}
