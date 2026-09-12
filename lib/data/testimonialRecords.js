export const testimonialApprovalStatuses = Object.freeze([
  'draft',
  'approval-requested',
  'approved',
  'declined',
  'withdrawn',
]);

export const testimonialRecordFields = Object.freeze([
  'id',
  'projectId',
  'quote',
  'customerName',
  'organization',
  'vehicleDescription',
  'rating',
  'source',
  'sourceUrl',
  'approvalStatus',
  'approvedQuote',
  'approvedAttribution',
  'publicationChannels',
  'approvalDate',
  'approvedBy',
  'notes',
  'lastVerified',
]);

export const approvedAttributionFields = Object.freeze([
  'displayName',
  'displayOrganization',
  'displayVehicle',
  'displayLocation',
]);

export const testimonialRecords = Object.freeze([]);

export function isApprovedTestimonial(item) {
  return item?.approvalStatus === 'approved' && Boolean(item?.approvedQuote);
}

export function getPublishedTestimonials(records = testimonialRecords) {
  return records.filter(isApprovedTestimonial);
}
