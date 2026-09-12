import { productSkus } from './productSkuCatalog';
import { securityProductSkus } from './securityProductCatalog';
import { vehicleSpecificSkus } from './vehicleSpecificSkus';
import { recurringPlans } from './recurringPlans';
import { laborClasses } from './laborModel';
import { packageCandidateById } from './packageCandidates';

export const allCommercialSkus=Object.freeze([...productSkus,...securityProductSkus,...vehicleSpecificSkus]);
export const commercialSkuById=Object.freeze(Object.fromEntries(allCommercialSkus.map((sku)=>[sku.id,sku])));
export const commercialPlanById=Object.freeze(Object.fromEntries(recurringPlans.map((plan)=>[plan.id,plan])));
export const commercialLaborById=Object.freeze(Object.fromEntries(laborClasses.map((item)=>[item.id,item])));

function roundCurrency(value){return Math.round((value+Number.EPSILON)*100)/100;}

export function createPlanningBom({vehicle=null,productIds=[],recurringPlanIds=[],laborClassIds=[],fitmentVerified=false,authorizationVerified=false,commercialTermsVerified=false}={}){
  const products=productIds.map((id)=>commercialSkuById[id]).filter(Boolean);
  const plans=recurringPlanIds.map((id)=>commercialPlanById[id]).filter(Boolean);
  const labor=laborClassIds.map((id)=>commercialLaborById[id]).filter(Boolean);

  const publicHardwareSubtotal=roundCurrency(products.reduce((sum,item)=>sum+(item.publicPrice?.amount||0),0));
  const publicHardwareRangeMax=roundCurrency(products.reduce((sum,item)=>sum+(item.publicPrice?.rangeMax||item.publicPrice?.amount||0),0));
  const recurringMonthly=roundCurrency(plans.reduce((sum,item)=>sum+(item.monthlyAmount||0),0));

  const unknownPublicPrice=products.filter((item)=>item.publicPrice?.amount==null).map((item)=>item.id);
  const unknownDealerCost=products.filter((item)=>item.dealerCost==null).map((item)=>item.id);
  const unknownLabor=labor.filter((item)=>item.estimatedHours==null||item.laborRate==null).map((item)=>item.id);
  const fitmentSensitive=products.filter((item)=>Boolean(item.fitmentPolicy)).map((item)=>item.id);

  const blockers=[];
  if(!vehicle) blockers.push('vehicle-not-specified');
  if(fitmentSensitive.length&&!fitmentVerified) blockers.push('fitment-not-verified');
  if(!authorizationVerified) blockers.push('ttt-authorization-or-approved-supply-route-not-verified');
  if(unknownDealerCost.length) blockers.push('dealer-cost-incomplete');
  if(unknownLabor.length) blockers.push('labor-pricing-incomplete');
  if(!commercialTermsVerified) blockers.push('commercial-terms-not-verified');

  return Object.freeze({
    status:blockers.length?'planning-only':'quote-ready',
    vehicle,
    products,
    plans,
    labor,
    totals:{
      publicHardwareSubtotal,
      publicHardwareRangeMax:publicHardwareRangeMax===publicHardwareSubtotal?null:publicHardwareRangeMax,
      recurringMonthly,
      dealerCostSubtotal:null,
      laborSubtotal:null,
      customerSubtotal:null,
      grossMargin:null,
    },
    missing:{unknownPublicPrice,unknownDealerCost,unknownLabor},
    fitmentSensitive,
    blockers,
    warnings:[
      'Public hardware prices are reference data and may differ from TTT sell price.',
      'Recurring service pricing can change and must be reverified at time of quote.',
      'Taxes, freight, shop supplies, merchant fees and other commercial assumptions are not included.',
    ],
  });
}

export function createPlanningBomFromPackage(packageId,{vehicle=null,selectedProductIds=null,selectedRecurringPlanIds=null,fitmentVerified=false,authorizationVerified=false,commercialTermsVerified=false}={}){
  const pkg=packageCandidateById[packageId];
  if(!pkg) return null;
  return createPlanningBom({
    vehicle,
    productIds:selectedProductIds||pkg.candidateProductIds,
    recurringPlanIds:selectedRecurringPlanIds||pkg.recurringPlanIds,
    laborClassIds:pkg.laborClassIds,
    fitmentVerified,
    authorizationVerified,
    commercialTermsVerified,
  });
}

export function getCommercialDataGaps(){
  return Object.freeze({
    skuCount:allCommercialSkus.length,
    skuWithPublicPrice:allCommercialSkus.filter((item)=>item.publicPrice?.amount!=null).length,
    skuMissingPublicPrice:allCommercialSkus.filter((item)=>item.publicPrice?.amount==null).map((item)=>item.id),
    skuMissingDealerCost:allCommercialSkus.filter((item)=>item.dealerCost==null).map((item)=>item.id),
    laborClassesMissingPricing:laborClasses.filter((item)=>item.estimatedHours==null||item.laborRate==null).map((item)=>item.id),
  });
}
