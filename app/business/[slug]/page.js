import { notFound } from 'next/navigation';
import BusinessPageV3 from '../../../components/BusinessPageV3';
import { businessPages,businessList } from '../../../lib/businessCopyV3';
export function generateStaticParams(){return businessList.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=businessPages[slug];if(!p)return {};return {title:p.seoTitle,description:p.meta}}
export default async function Page({params}){const {slug}=await params;const p=businessPages[slug];if(!p)notFound();return <BusinessPageV3 page={p}/>}