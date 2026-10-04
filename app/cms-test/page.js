import Link from 'next/link';

export const metadata = {
  title: 'CMS Test | TTT',
  description: 'Isolated Sanity CMS integration test for Thompson Transportation Technologies.'
};

const PROJECT_ID = '7c2s5zl9';
const DATASET = 'production';
const API_VERSION = '2026-10-01';

async function getCmsTest() {
  const query = '*[_type == "cmsTest" && enabled == true][0]{heading, description, buttonText, enabled}';
  const url =
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Sanity request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

export default async function CmsTestPage() {
  const content = await getCmsTest();

  return (
    <main style={{minHeight:'70vh',padding:'72px 24px',background:'#0d0f14',color:'#fff'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <p style={{fontSize:13,letterSpacing:'0.18em',textTransform:'uppercase',opacity:0.65}}>
          TTT · Sanity CMS Integration Test
        </p>
        <h1 style={{fontSize:'clamp(40px,7vw,76px)',lineHeight:1.02,margin:'18px 0 22px'}}>
          {content?.heading || 'No published CMS test content found'}
        </h1>
        <p style={{fontSize:20,lineHeight:1.65,maxWidth:720,opacity:0.84}}>
          {content?.description || 'Publish the cmsTest document in Sanity to populate this page.'}
        </p>
        <div style={{marginTop:34,display:'flex',gap:18,alignItems:'center',flexWrap:'wrap'}}>
          <Link
            href="/"
            style={{display:'inline-block',padding:'13px 20px',borderRadius:999,background:'#fff',color:'#0d0f14',fontWeight:700,textDecoration:'none'}}
          >
            {content?.buttonText || 'Back to TTT'}
          </Link>
          <span style={{fontSize:14,opacity:0.55}}>
            Source: Sanity project {PROJECT_ID} · {DATASET}
          </span>
        </div>
      </div>
    </main>
  );
}
