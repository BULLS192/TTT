import { notFound } from 'next/navigation';
import BusinessPageV3 from '../../../components/BusinessPageV3';
import { businessPages,businessList } from '../../../lib/businessCopyV3';
import { getBusinessPage } from '../../../lib/sanityContent';

export function generateStaticParams(){return businessList.map(({slug})=>({slug}))}

export async function generateMetadata({params}){
  const {slug}=await params;
  const page=await getBusinessPage(slug)||businessPages[slug];
  if(!page)return {};
  return {title:page.seoTitle,description:page.meta};
}

export default async function Page({params}){
  const {slug}=await params;
  const page=await getBusinessPage(slug)||businessPages[slug];
  if(!page)notFound();
  return <BusinessPageV3 page={page}/>;
}
