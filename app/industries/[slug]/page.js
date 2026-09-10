import { notFound } from 'next/navigation';
import DetailPage from '../../../components/DetailPage';
import { industries, findItem } from '../../../lib/siteData';

export function generateStaticParams(){return industries.map(({slug})=>({slug}));}

export async function generateMetadata({params}){
  const {slug}=await params;
  const item=findItem(industries,slug);
  if(!item) return {};
  return {
    title: `${item.title} | TTT`,
    description: item.seoDescription || item.summary
  };
}

export default async function Page({params}){
  const {slug}=await params;
  const item=findItem(industries,slug);
  if(!item) notFound();
  return <DetailPage item={item} kind="Industry"/>;
}
