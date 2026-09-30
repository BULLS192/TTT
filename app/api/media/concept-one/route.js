const SOURCE='https://d2ol7oe51mr4n9.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/16ef6fd3-462c-4405-a923-b6a3083f9967.mp4';

export const runtime='nodejs';
export const dynamic='force-dynamic';

export async function GET(request){
  const range=request.headers.get('range');
  const upstream=await fetch(SOURCE,{headers:range?{Range:range}:{}});
  if(!upstream.ok && upstream.status!==206){
    return new Response('Concept One cinematic unavailable',{status:upstream.status||502});
  }
  const headers=new Headers();
  for(const key of ['content-type','content-length','content-range','accept-ranges','etag','last-modified']){
    const value=upstream.headers.get(key);
    if(value) headers.set(key,value);
  }
  headers.set('content-type',headers.get('content-type')||'video/mp4');
  headers.set('accept-ranges',headers.get('accept-ranges')||'bytes');
  headers.set('cache-control','public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
  return new Response(upstream.body,{status:upstream.status,headers});
}
