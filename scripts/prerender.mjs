/**
 * PRERENDER (build-time server-side rendering)
 *
 * Chalane ka tarika:  npm run build
 * (package.json me "build" script is tarah honi chahiye:
 *   "vite build && vite build --ssr src/entry-server.jsx --outDir dist-server && node scripts/prerender.mjs")
 *
 * Ye script har route ka asli HTML (content + title + meta + canonical + schema) bana kar
 * dist/<route>/index.html me likh deti hai, aur sitemap.xml + robots.txt bhi banati hai.
 * Hosting par Node server ki zarurat nahi - Hostinger shared hosting par bhi chalega.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const entryFile = ['entry-server.js', 'entry-server.mjs']
  .map(f => path.join(serverDir, f))
  .find(f => fs.existsSync(f));
if (!entryFile) throw new Error('dist-server/entry-server.js nahi mila. Pehle `vite build --ssr src/entry-server.jsx --outDir dist-server` chalao.');

const { init, render, getRoutes, SITE_URL } = await import(pathToFileURL(entryFile).href);
await init();
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHead(h) {
  if (!h) return '';
  const tags = [];
  if (h.title) tags.push(`<title>${esc(h.title)}</title>`);
  if (h.description) tags.push(`<meta name="description" content="${esc(h.description)}" />`);
  if (h.canonical) tags.push(`<link rel="canonical" href="${esc(h.canonical)}" />`);
  if (h.title) tags.push(`<meta property="og:title" content="${esc(h.title)}" />`);
  if (h.description) tags.push(`<meta property="og:description" content="${esc(h.description)}" />`);
  if (h.ogType) tags.push(`<meta property="og:type" content="${esc(h.ogType)}" />`);
  if (h.ogImage) tags.push(`<meta property="og:image" content="${esc(h.ogImage)}" />`);
  if (h.canonical) tags.push(`<meta property="og:url" content="${esc(h.canonical)}" />`);
  if (h.schemaJson) {
    const json = JSON.stringify(h.schemaJson).replace(/</g, '\\u003c');
    tags.push(`<script id="route-schema-json" type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
}

function stripExistingHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, '');
}

const routes = getRoutes();
let count = 0;

for (const { url } of routes) {
  const { html, head } = render(url);
  let page = stripExistingHead(template);
  page = page.replace('</head>', `    ${buildHead(head)}\n  </head>`);
  if (!/<div id="root"><\/div>/.test(page)) throw new Error('index.html me <div id="root"></div> nahi mila');
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = url === '/' ? distDir : path.join(distDir, url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  count++;
  console.log(`  prerendered ${url}`);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url><loc>${SITE_URL}${r.url}</loc><lastmod>${(r.lastmod || today).slice(0, 10)}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// robots.txt (sirf tab jab aapne public/ me apna nahi rakha)
const robotsPath = path.join(distDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  fs.writeFileSync(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

// 404 page fallback (SPA)
fs.writeFileSync(path.join(distDir, '404.html'), template);

fs.rmSync(serverDir, { recursive: true, force: true });

console.log(`\nDone: ${count} pages prerendered + sitemap.xml`);
if (SITE_URL.includes('example.com')) {
  console.warn('\n!! WARNING: SITE_URL abhi example.com hai. .env me VITE_SITE_URL=https://yourdomain.com set karo, phir dobara build karo.');
}
