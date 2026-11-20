/**
 * SERVER ENTRY - build ke time prerender script (scripts/prerender.mjs) isse use karti hai.
 * Browser me ye file load nahi hoti.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as RouterDom from 'react-router-dom';
import App from './App';
import { HeadCollectorContext } from './components/SeoMeta';
import posts, { getTaxonomies } from './blog/registry';
import { SITE_URL } from './config/site';

// react-router v6 me StaticRouter 'react-router-dom/server' me hai, v7 me main package me.
// (variable specifier: v7 me ye path exist nahi karta, isliye bundler isse resolve na kare)
let StaticRouter = RouterDom.StaticRouter;
export async function init() {
  if (!StaticRouter) {
    const serverEntry = 'react-router-dom/server.mjs'; // v6: exports map nahi hai, isliye extension ke saath
    const mod = await import(/* @vite-ignore */ serverEntry);
    StaticRouter = mod.StaticRouter || mod.default?.StaticRouter;
  }
}

export { SITE_URL };

export function render(url) {
  const head = { current: null };
  const html = renderToString(
    <HeadCollectorContext.Provider value={head}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadCollectorContext.Provider>
  );
  return { html, head: head.current };
}

// Jin pages ka static HTML banana hai unki list (blog posts/categories/tags apne aap judte hain)
export function getRoutes() {
  const { categories, tags } = getTaxonomies();
  const pages = [
    '/',
    '/about-us/',
    '/services/',
    '/pricing/',
    '/portfolio/',
    '/contact-us/',
    '/blog/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/refund-cancellation-policy/'
  ].map(url => ({ url, lastmod: null }));

  return [
    ...pages,
    ...posts.map(p => ({ url: `/blog/${p.slug}/`, lastmod: p.updated_at || p.published_at || null })),
    ...categories.map(c => ({ url: `/blog/category/${c.slug}/`, lastmod: null })),
    ...tags.map(t => ({ url: `/blog/tag/${t.slug}/`, lastmod: null }))
  ];
}
