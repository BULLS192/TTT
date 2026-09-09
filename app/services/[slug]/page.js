import { notFound } from 'next/navigation';
import DetailPage from '../../../components/DetailPage';
import { services, findItem } from '../../../lib/siteData';
export function generateStaticParams(){return services.map(({slug})=>({slug}));}
export default async function Page({params}){const {slug}=await params; const item=findItem(services,slug); if(!item) notFound(); return <DetailPage item={item} kind="Service"/>;}
