import DetailPage from '../../../components/DetailPage';
import {findItem,services} from '../../../lib/siteData';
export const metadata={title:'Kill Switch & Immobilizer Installation in Houston | TTT',description:'Add a layer of theft deterrence with a professionally integrated kill switch or immobilization solution. Planned for your vehicle by TTT in Houston.'};
export default function Page(){return <DetailPage item={findItem(services,'security')} kind="Service"/>}
