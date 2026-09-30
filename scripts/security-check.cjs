'use strict';
const fs=require('fs');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
const SKIP=new Set(['.git','.next','node_modules','.vercel']);
const SELF=path.resolve(__filename);
const PATTERNS=[
  ['Supabase secret key',/sb_secret_[A-Za-z0-9_-]{20,}/g],
  ['Literal Supabase service-role key',/SUPABASE_SERVICE_ROLE_KEY\s*[:=]\s*['"][^'"]{12,}['"]/g],
  ['Private key block',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
  ['GitHub personal token',/(?:ghp_|github_pat_)[A-Za-z0-9_]{20,}/g],
  ['Stripe live secret',/sk_live_[A-Za-z0-9]{16,}/g],
  ['OpenAI secret',/sk-(?:proj-)?[A-Za-z0-9_-]{24,}/g],
  ['AWS access key',/AKIA[0-9A-Z]{16}/g]
];
const TEXT_EXT=/\.(?:js|mjs|cjs|ts|tsx|jsx|json|md|yml|yaml|html|css|sql|txt|env)$/i;
const findings=[];
function walk(dir){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(SKIP.has(e.name))continue;
    const full=path.join(dir,e.name);
    if(e.isDirectory())walk(full);
    else if(full!==SELF&&TEXT_EXT.test(full)&&fs.statSync(full).size<2_000_000){
      const s=fs.readFileSync(full,'utf8');
      for(const [label,re] of PATTERNS){
        re.lastIndex=0;
        if(re.test(s))findings.push(label+' in '+path.relative(ROOT,full).replace(/\\/g,'/'));
      }
    }
  }
}
walk(ROOT);
if(findings.length){
  console.error('SECURITY CHECK FAILED');
  for(const f of findings)console.error(' - '+f);
  process.exit(1);
}
console.log('SECURITY CHECK PASSED: no high-risk literal secrets detected.');
