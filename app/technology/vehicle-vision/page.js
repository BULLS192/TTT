import LearnTopicPageV3 from '../../../components/LearnTopicPageV3';
import { learnTopics } from '../../../lib/learnCopyV3';
const page=learnTopics['vehicle-vision'];
export const metadata={title:page.seoTitle,description:page.meta};
export default function Page(){return <LearnTopicPageV3 page={page}/>}