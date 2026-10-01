import AssetMedia from './AssetMedia';

const artifactPrefixes=['Purpose:','Subject:','Composition:','Orientation:','Caption concept:','Alt-text concept:','Format:','Relevant TTT service links:','Relevant TTT solution links:','Recommended related articles:','Final CTA:'];
function clean(value=''){
  return value
    .replace(/[\uFFFE\uFFFD]/g,'')
    .replace(/\[(?:VERIFY CURRENT FACT BEFORE PUBLISHING|CONFIRM|INSERT|LEGAL REVIEW)[^\]]*\]/gi,'')
    .replace(/\s+/g,' ')
    .trim();
}
function isArtifact(value=''){const t=clean(value);return !t||artifactPrefixes.some(prefix=>t.startsWith(prefix))||/^Inline visual \d+/i.test(t)||t==='Hero visual brief';}

export default function ArticleBodyV3({article}){
 return <div className="journal-v3__body">{article.blocks.map((block,index)=>{
  if(block.type==='visual') return <AssetMedia key={index} visual={block.visual} className="journal-v3__inline-media"/>;
  if(block.type==='table') return <div className="journal-v3__table-wrap" key={index}><table className="journal-v3__table"><tbody>{block.rows.map((row,r)=><tr key={r}>{row.map((cell,c)=>r===0?<th key={c}>{clean(cell)}</th>:<td key={c}>{clean(cell)}</td>)}</tr>)}</tbody></table></div>;
  const text=clean(block.text);
  if(isArtifact(text)) return null;
  if(block.type==='h2') return <h2 key={index}>{text}</h2>;
  if(block.type==='li') return <div className="journal-v3__bullet" key={index}><span>•</span><p>{text}</p></div>;
  if(block.type==='quote') return <blockquote className="journal-v3__quote" key={index}>{text}</blockquote>;
  return <p key={index}>{text}</p>;
 })}
 {article.takeaway?<aside className="article-takeaway"><p className="eyebrow">Key takeaway</p><strong>{clean(article.takeaway)}</strong></aside>:null}</div>;
}