import { notFound } from 'next/navigation';
import DetailPage from '../../../components/DetailPage';
import { solutions, findItem } from '../../../lib/siteData';

export function generateStaticParams(){return solutions.map(({slug})=>({slug}));}
export default async function Page({params}){const {slug}=await params; const item=findItem(solutions,slug); if(!item) notFound(); return <DetailPage item={item} kind="Solution"/>;}
