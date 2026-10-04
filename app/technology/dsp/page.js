import LearnTopicPageV3 from '../../../components/LearnTopicPageV3';
import { learnTopics } from '../../../lib/learnCopyV3';
import { getTechnologyTopic } from '../../../lib/sanityContent';

const slug='dsp';

export async function generateMetadata(){
  const page=await getTechnologyTopic(slug)||learnTopics[slug];
  return {title:page.seoTitle,description:page.meta};
}

export default async function Page(){
  const page=await getTechnologyTopic(slug)||learnTopics[slug];
  return <LearnTopicPageV3 page={page}/>;
}
