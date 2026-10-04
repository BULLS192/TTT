import ClaudeServicePage from '../../../components/ClaudeServicePage';
import { servicePages } from '../../../lib/claudeSiteCopy';
import { getServicePage } from '../../../lib/sanityContent';

const slug='signaltrace';

export async function generateMetadata(){
  const page=await getServicePage(slug)||servicePages[slug];
  return {title:page.seoTitle,description:page.meta};
}

export default async function Page(){
  const page=await getServicePage(slug)||servicePages[slug];
  return <ClaudeServicePage page={page}/>;
}
