// Writes each page as finished HTML so search engines, AI assistants, link previews
// and audit tools can read the content without running JavaScript.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, seo, routes, SITE_URL, OG_IMAGE } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);
const template = readFileSync(join(dist, "index.html"), "utf-8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const url of routes) {
  const { title, description } = seo[url];
  const appHtml = render(url);
  const head =
    `<title>${esc(title)}</title>\n` +
    `    <meta name="description" content="${esc(description)}" />\n` +
    `    <meta property="og:type" content="website" />\n` +
    `    <meta property="og:site_name" content="Dr. Sukh Mann, Chiropractor" />\n` +
    `    <meta property="og:title" content="${esc(title)}" />\n` +
    `    <meta property="og:description" content="${esc(description)}" />
` +
    `    <meta property="og:url" content="${SITE_URL}${url}" />
` +
    `    <meta property="og:image" content="${SITE_URL}${OG_IMAGE}" />
` +
    `    <meta property="og:image:width" content="1200" />
` +
    `    <meta property="og:image:height" content="630" />
` +
    `    <meta property="og:image:alt" content="Dr. Sukh Mann smiling in his Surrey clinic" />
` +
    `    <meta name="twitter:card" content="summary_large_image" />
` +
    `    <link rel="canonical" href="${SITE_URL}${url}" />`;

  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*<meta\s+name="description"[\s\S]*?\/>/, head)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (!html.includes(appHtml) || !html.includes(esc(title))) {
    throw new Error(`Pre-render failed to inject content for ${url}`);
  }
  // "/" -> index.html, "/about" -> about.html (served at /about via cleanUrls in vercel.json)
  const file = url === "/" ? "index.html" : `${url.slice(1)}.html`;
  writeFileSync(join(dist, file), html);
  console.log(`prerendered ${url.padEnd(14)} -> dist/${file}`);
}

rmSync(ssrDir, { recursive: true, force: true });
