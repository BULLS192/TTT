import { vehicleFitmentById } from './vehicleFitmentIntelligence';
import { vehicleSpecificSkuById } from './vehicleSpecificSkus';

function matchesYear(range,year){
  if(!range||!Number.isInteger(Number(year))) return false;
  const target=Number(year);
  const text=String(range).trim();
  const match=text.match(/^(\d{4})(?:-(\d{4}))?$/);
  if(!match) return false;
  const start=Number(match[1]);
  const end=match[2]?Number(match[2]):start;
  return target>=start&&target<=end;
}

export function resolveVehicleFitment({vehicleId,year,factoryContext=null}={}){
  const vehicle=vehicleFitmentById[vehicleId];
  if(!vehicle) return Object.freeze({status:'unknown-vehicle',vehicle:null,year,windows:[],candidates:[],requiresManualVerification:true});
  const windows=vehicle.integrationWindows.filter((window)=>matchesYear(window.years,year));
  const context=String(factoryContext||'').toLowerCase();
  const contextMatched=context?windows.filter((window)=>String(window.factoryContext||'').toLowerCase().includes(context)):windows;
  const effectiveWindows=contextMatched.length?contextMatched:windows;
  const candidateIds=[...new Set(effectiveWindows.flatMap((window)=>window.audioInterfaceCandidates||[]))];
  const candidates=candidateIds.map((id)=>vehicleSpecificSkuById[id]).filter(Boolean);
  const unresolved=effectiveWindows.length===0||effectiveWindows.some((window)=>window.confidence==='research-needed');
  return Object.freeze({
    status:effectiveWindows.length?(unresolved?'research-needed':'candidate-fitment-found'):'year-not-mapped',
    vehicle:{id:vehicle.id,make:vehicle.make,model:vehicle.model},
    year:Number(year),
    requestedFactoryContext:factoryContext,
    windows:effectiveWindows,
    candidates,
    requiresManualVerification:true,
    warning:'Candidate fitment is not final compatibility. Confirm exact trim, factory audio/RPO/options and current manufacturer application data before quoting.',
  });
}

export function getVehicleResearchGaps(vehicleId){
  const vehicle=vehicleFitmentById[vehicleId];
  return vehicle?.researchGaps||[];
}
