import GlassLab from './GlassLab';
import AudioLab from './AudioLab';
import SecurityLab from './SecurityLab';
import TrackingLab from './TrackingLab';
import FabricationLab from './FabricationLab';

const components={tint:GlassLab,audio:AudioLab,security:SecurityLab,tracking:TrackingLab,fabrication:FabricationLab};

export default function ServiceExperience({type}){
 const Component=components[type];
 if(!Component)return null;
 return <section id="interactive" className="section wave2-section"><div className="shell"><Component/></div></section>;
}
