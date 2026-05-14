const fs = require('fs');
const { execSync } = require('child_process');

const sha = (process.env.VERCEL_GIT_COMMIT_SHA || execSync('git rev-parse HEAD').toString().trim()).slice(0, 7);
const msg = (process.env.VERCEL_GIT_COMMIT_MESSAGE || execSync('git log -1 --format=%s').toString().trim())
  .replace(/</g, '&lt;').replace(/>/g, '&gt;');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replaceAll('__COMMIT_SHA__', sha).replace('__COMMIT_MSG__', msg);
fs.writeFileSync('index.html', html);
console.log(`build: ${sha} — ${msg}`);
