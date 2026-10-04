const PROJECT_ID='7c2s5zl9';
const DATASET='production';
const API_VERSION='2026-10-01';

async function sanityQuery(query,params={}){
  const search=new URLSearchParams();
  search.set('query',query);
  for(const [key,value] of Object.entries(params)){
    search.set('$'+key,JSON.stringify(value));
  }
  const url=`https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?${search.toString()}`;
  try{
    const response=await fetch(url,{cache:'no-store'});
    if(!response.ok) return null;
    const payload=await response.json();
    return payload.result ?? null;
  }catch{
    return null;
  }
}

function cleanObject(value){
  if(Array.isArray(value)) return value.map(cleanObject);
  if(!value || typeof value!=='object') return value;
  return Object.fromEntries(Object.entries(value).filter(([,v])=>v!==null&&v!==undefined).map(([k,v])=>[k,cleanObject(v)]));
}

function pageSectionToLegacy(section={}){
  return cleanObject({
    id:section.sectionId,
    label:section.label,
    title:section.title,
    body:section.body,
    bullets:section.bullets,
    table:section.tableRows?.map(row=>row.cells||[]),
    steps:section.steps?.map(step=>step.cells||[]),
    links:section.links?.map(link=>[link.label,link.href]),
    tessa:section.tessa,
    visual:section.visual
  });
}

function legacyPage(doc){
  if(!doc) return null;
  return cleanObject({
    ...doc,
    slug:doc.slug?.current,
    sections:doc.sections?.map(pageSectionToLegacy),
    faqs:doc.faqs?.map(item=>[item.question,item.answer]),
    solutionLinks:doc.solutionLinks?.map(link=>[link.label,link.href])
  });
}

const SERVICE_QUERY='*[_type=="servicePage" && slug.current==$slug][0]';
const SOLUTION_QUERY='*[_type=="solutionPage" && slug.current==$slug][0]';
const BUSINESS_QUERY='*[_type=="businessPage" && slug.current==$slug][0]';
const ARTICLE_QUERY='*[_type=="article" && slug.current==$slug][0]';
const TECHNOLOGY_QUERY='*[_type=="technologyTopic" && slug.current==$slug][0]';

export async function getServicePage(slug){
  return legacyPage(await sanityQuery(SERVICE_QUERY,{slug}));
}
export async function getSolutionPage(slug){
  return legacyPage(await sanityQuery(SOLUTION_QUERY,{slug}));
}
export async function getBusinessPage(slug){
  return legacyPage(await sanityQuery(BUSINESS_QUERY,{slug}));
}
export async function getArticle(slug){
  const doc=await sanityQuery(ARTICLE_QUERY,{slug});
  if(!doc) return null;
  return cleanObject({
    ...doc,
    slug:doc.slug?.current,
    n:doc.articleNumber,
    blocks:doc.blocks?.map(block=>({type:block.blockType,text:block.text}))
  });
}
export async function getArticles(){
  const docs=await sanityQuery('*[_type=="article"] | order(sortOrder asc)');
  return (docs||[]).map(doc=>cleanObject({
    ...doc,
    slug:doc.slug?.current,
    n:doc.articleNumber,
    blocks:doc.blocks?.map(block=>({type:block.blockType,text:block.text}))
  }));
}
export async function getSolutionPages(){
  const docs=await sanityQuery('*[_type=="solutionPage"] | order(sortOrder asc)');
  return (docs||[]).map(legacyPage);
}
export async function getBusinessPages(){
  const docs=await sanityQuery('*[_type=="businessPage"] | order(sortOrder asc)');
  return (docs||[]).map(legacyPage);
}
export async function getTechnologyTopic(slug){
  const doc=await sanityQuery(TECHNOLOGY_QUERY,{slug});
  if(!doc) return null;
  return cleanObject({
    ...doc,
    slug:doc.slug?.current,
    h1:doc.headline,
    meta:doc.seo?.description,
    seoTitle:doc.seo?.title,
    sections:doc.sections?.map(section=>cleanObject({
      title:section.title,
      body:section.paragraphs,
      bullets:section.bullets,
      links:section.links?.map(link=>[link.label,link.href])
    })),
    primary:doc.primaryCta?.label,
    primaryHref:doc.primaryCta?.href,
    secondary:doc.secondaryCta?.label,
    secondaryHref:doc.secondaryCta?.href
  });
}
export async function getTechnologyTopics(){
  const docs=await sanityQuery('*[_type=="technologyTopic" && status=="active"] | order(sortOrder asc)');
  return Promise.all((docs||[]).map(async doc=>cleanObject({
    ...doc,
    slug:doc.slug?.current,
    h1:doc.headline,
    meta:doc.seo?.description,
    seoTitle:doc.seo?.title,
    sections:doc.sections?.map(section=>cleanObject({
      title:section.title,
      body:section.paragraphs,
      bullets:section.bullets,
      links:section.links?.map(link=>[link.label,link.href])
    })),
    primary:doc.primaryCta?.label,
    primaryHref:doc.primaryCta?.href,
    secondary:doc.secondaryCta?.label,
    secondaryHref:doc.secondaryCta?.href
  })));
}
export async function getFaqGroups(){
  const docs=await sanityQuery('*[_type=="faqGroup"] | order(sortOrder asc){title,items}');
  return (docs||[]).map(group=>[group.title,(group.items||[]).map(item=>[item.question,item.answer])]);
}
export async function getSingleton(id){
  return sanityQuery('*[_id==$id][0]',{id});
}
export async function getPrimaryServiceArea(){
  return sanityQuery('*[_type=="serviceArea" && status=="primary"] | order(sortOrder asc)[0]');
}
export async function getTestimonials(){
  return sanityQuery('*[_type=="testimonial" && permissionStatus=="confirmed"] | order(featured desc,sortOrder asc)');
}


export async function getPageCopy(route){
  const doc=await sanityQuery('*[_type=="pageCopy" && route==$route][0]',{route});
  if(!doc) return null;
  const copy=Object.fromEntries((doc.entries||[]).map(entry=>[entry.key,entry.value]));
  const collections={};
  for(const item of [...(doc.items||[])].sort((a,b)=>(a.sortOrder||0)-(b.sortOrder||0))){
    if(!collections[item.collection]) collections[item.collection]=[];
    collections[item.collection].push(item);
  }
  return cleanObject({...doc,copy,collections});
}


export async function getProductFamilies(){
  return sanityQuery('*[_type=="productFamily" && status=="visible"] | order(sortOrder asc){_id,category,name,description,sortOrder}');
}
