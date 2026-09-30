import DetailPage from '../../../components/DetailPage';
import {findItem,services} from '../../../lib/siteData';
export const metadata={title:'GPS Tracker Installation in Houston | TTT',description:'Professionally installed GPS tracking for personal and business vehicles. Location, alerts and geofencing, fitted discreetly by TTT in Houston.'};
export default function Page(){return <DetailPage item={findItem(services,'tracking')} kind="Service"/>}
