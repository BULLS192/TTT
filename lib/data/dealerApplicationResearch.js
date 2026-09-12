// Public dealer/installer onboarding evidence. Commercial approval is not implied.
// Reverify before applying because requirements can change.

export const dealerApplicationResearch = Object.freeze([
  {
    id:'firstech',organization:'Firstech',brands:['Compustar','DroneMobile','Momento','iDatalink','iDatalink Maestro'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Request access to the myFirstech dealer portal. After authorization, the sales representative reviews the account to establish brand eligibility and provide materials/training.',
    knownRequirements:['12-volt retailer/business context','dealer portal registration','account review'],
    readinessData:['legal business name','business address','business contact','website','installer/retail description'],
    notes:['Brand eligibility is determined after account review.','Authorized status matters for Compustar warranty coverage.'],
    sources:['https://www.firstechllc.com/where-to-buy/','https://www.compustar.com/warranty'],
  },
  {
    id:'omni12',organization:'OMNI12',brands:[],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Complete the wholesale account setup/application packet.',
    knownRequirements:['wholesale/dealer application'],
    readinessData:['legal business name','business address','business contact','resale/tax information if requested in packet'],
    publicBenefits:['no minimum orders','no sales quotas','dealer portal','real-time inventory','technical support','product education','24-hour order turnaround'],
    notes:['Public site states applications are normally processed within 24 business hours.'],
    sources:['https://www.omni12.com/pages/become-a-dealer'],
  },
  {
    id:'xpel',organization:'XPEL',brands:['XPEL'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Contact/apply through the XPEL dealer program.',
    knownRequirements:['dealer relationship subject to XPEL approval','training/capability should be confirmed for the products TTT intends to install'],
    readinessData:['legal business name','location','service categories','installer experience','training needs','territory inquiry'],
    publicBenefits:['dealer product access','training programs','DAP vehicle-pattern software','local sales representative/support','Signature Partner program options'],
    notes:['TTT must verify whether an independent Houston-area dealer relationship is available and what territory or training constraints apply.'],
    sources:['https://www.xpel.com/for-business/dealers','https://www.xpel.com/installer-locator'],
  },
  {
    id:'metra',organization:'Metra Electronics',brands:['Metra','Axxess','The Install Bay','Raptor','T-Spec'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Complete Metra Dealer Parts Warehouse application.',
    knownRequirements:['company information','business address','Federal Tax Identification Number','State Sales Tax Exemption Number'],
    readinessData:['legal business name','federal tax ID','Texas sales-tax/resale documentation','business address','website','primary contact'],
    publicBenefits:['custom pricing','real-time inventory','24/7 ordering','order history','dealer resources'],
    notes:['Metra says account information is generally emailed within 24–48 hours after application.'],
    sources:['https://www.metraonline.com/apply','https://www.metraonline.com/for-dealers'],
  },
  {
    id:'blackvue',organization:'BlackVue / Pittasoft',brands:['BlackVue'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Submit distributor/dealer application to BlackVue/Pittasoft.',
    knownRequirements:['company information','business type','automotive/dashcam sales history','company introduction','partnership rationale'],
    readinessData:['legal business name','address','contact person/title','email','phone','website','business registration certificate','resale certificate','short company description','partnership rationale'],
    notes:['Public application says successful applicants are contacted and asks applicants to allow five business days for processing.'],
    sources:['https://direct.blackvue.com/pages/application','https://blackvue.com/pages/contact-us'],
  },
  {
    id:'audiocontrol',organization:'AudioControl',brands:['AudioControl'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Complete AudioControl Become a Dealer inquiry.',
    knownRequirements:['specialty retailer/integrator review by AudioControl'],
    readinessData:['name','company name','website','business address','email','phone','dealer narrative/comments'],
    notes:['AudioControl emphasizes its authorized installer network; unauthorized-reseller purchases do not receive manufacturer warranty coverage.'],
    sources:['https://audiocontrol.com/pages/become-a-dealer','https://audiocontrol.com/pages/find-installers'],
  },
  {
    id:'pac',organization:'PAC',brands:['PAC'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Contact PAC to become an authorized dealer using the public dealer inquiry/phone route.',
    knownRequirements:['requirements not fully published on public contact page'],
    readinessData:['legal business name','business contact','address','website','resale/tax documentation','installation-business description'],
    notes:['Confirm dealer requirements, distributor options, territory and warranty/RMA path during inquiry.'],
    sources:['https://pac-audio.com/pages/contact'],
  },
  {
    id:'igla',organization:'IGLA US',brands:['IGLA'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Submit IGLA dealer registration form.',
    knownRequirements:['business history','alarm-installation experience','planned technician training count','weekly install capacity','planned inventory','marketing plan'],
    readinessData:['legal business name','contact info','years in business','years installing alarms','technicians to train','installs per week','planned stock level','marketing plan'],
    notes:['This application is capability-sensitive; TTT should not apply until Derek confirms installer history/capacity and who will complete required training.'],
    sources:['https://iglaus.com/become-a-dealer/'],
  },
  {
    id:'stek',organization:'STEK USA',brands:['STEK'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Apply to become an authorized/accredited installer.',
    knownRequirements:['business license','recognized training/certification for PPF purchasing'],
    readinessData:['business license','business details','installer training/certification history','service categories','location'],
    notes:['STEK states PPF purchasing requires training certification; it also offers training for installers new to PPF.'],
    sources:['https://www.stek-usa.com/become-an-installer/','https://www.stek-usa.com/company/find-an-installer/'],
  },
  {
    id:'llumar',organization:'LLumar',brands:['LLumar'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Submit LLumar Dealer Network Application.',
    knownRequirements:['requirements determined through dealer application/review'],
    readinessData:['legal business name','business contact','location','website','film/installation service description','installer experience'],
    notes:['Use as a credible XPEL alternative; verify Houston territory availability and training/commercial requirements.'],
    sources:['https://llumar.com/en/why-choose-llumar/current-customers/dealer-network-application/'],
  },
  {
    id:'thinkware',organization:'THINKWARE',brands:['Thinkware'],priority:'A',verifiedOn:'2026-09-12',
    publicPath:'Contact THINKWARE sales/marketing for authorized retail partnership or B2B/volume purchasing.',
    knownRequirements:['partnership review; detailed requirements not fully published'],
    readinessData:['business email','company name','contact information','business proposal/use case','retail or fleet intent'],
    notes:['Useful as a premium camera alternative and potential B2B/fleet option.'],
    sources:['https://thinkware.com/global/sales-marketing-inquiries','https://www.thinkware.com/company/partnerships'],
  },
]);

export const dealerApplicationById=Object.freeze(Object.fromEntries(dealerApplicationResearch.map((record)=>[record.id,record])));

export const tttDealerReadinessChecklist=Object.freeze([
  {id:'legal-name',label:'Confirmed TTT legal business/entity name',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'ein',label:'Federal Tax Identification Number / EIN',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'resale',label:'Texas sales-tax permit / resale documentation',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'license',label:'Applicable business license / registration documents',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'address',label:'Public/operating business address',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'phone-email',label:'TTT business phone and email',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'website',label:'Production TTT website/domain',owner:'TTT',status:'in-progress'},
  {id:'installer-history',label:'Installer experience, technician count and specialty history',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'training',label:'Existing manufacturer/installation certifications and training history',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'capacity',label:'Realistic weekly installation capacity by category',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'insurance',label:'Business insurance documentation where vendor requires it',owner:'Derek/TTT',status:'needs-confirmation'},
  {id:'brand-story',label:'Short TTT company description and partnership rationale',owner:'TTT',status:'draftable'},
]);

export function getApplicationsReadyForResearch(){return dealerApplicationResearch.filter((record)=>record.priority==='A');}
