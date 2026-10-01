import ClaudeServicePage from '../../../components/ClaudeServicePage';
import { servicePages } from '../../../lib/claudeSiteCopy';
const page=servicePages['signaltrace'];
export const metadata={title:page.seoTitle,description:page.meta};
export default function Page(){return <ClaudeServicePage page={page}/>}
