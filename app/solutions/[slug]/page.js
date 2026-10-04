import { notFound } from 'next/navigation';
import SolutionV2Page from '../../../components/SolutionV2Page';
import { solutionPages, solutionList } from '../../../lib/solutionCopyV2';
import { getSolutionPage } from '../../../lib/sanityContent';

export function generateStaticParams(){return solutionList.map(({slug})=>({slug}))}

export async function generateMetadata({params}){
  const {slug}=await params;
  const page=await getSolutionPage(slug)||solutionPages[slug];
  if(!page)return {};
  return {title:page.seoTitle,description:page.meta};
}

export default async function Page({params}){
  const {slug}=await params;
  const page=await getSolutionPage(slug)||solutionPages[slug];
  if(!page)notFound();
  return <SolutionV2Page page={page}/>;
}
