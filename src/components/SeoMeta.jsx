import React, { useEffect, useContext, createContext } from 'react';
import { SITE_URL } from '../config/site';

/**
 * Prerender (SSR) ke time entry-server.jsx is context me ek collector deta hai,
 * jisme SeoMeta apna title/description/canonical likh deta hai, taaki wo
 * static HTML ke <head> me jaye. Browser me ye useEffect se head update karta hai.
 */
export const HeadCollectorContext = createContext(null);

export default function SeoMeta({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = `${SITE_URL}/og-image.jpg`,
  schemaJson = null
}) {
  const collector = useContext(HeadCollectorContext);

  const canonical = canonicalUrl
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${SITE_URL}${canonicalUrl}`)
    : null;

  // Server-side render: head data collect karo
  if (collector) {
    collector.current = { title, description, canonical, ogType, ogImage, schemaJson };
  }

  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    if (canonical) {
      let linkCan = document.querySelector('link[rel="canonical"]');
      if (!linkCan) {
        linkCan = document.createElement('link');
        linkCan.rel = 'canonical';
        document.head.appendChild(linkCan);
      }
      linkCan.href = canonical;
    }

    const setOgMeta = (prop, val) => {
      if (!val) return;
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.content = val;
    };

    setOgMeta('og:title', title);
    setOgMeta('og:description', description);
    setOgMeta('og:type', ogType);
    setOgMeta('og:image', ogImage);
    setOgMeta('og:url', canonical || window.location.href);

    let scriptTag = document.getElementById('route-schema-json');
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-schema-json';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonical, ogType, ogImage, schemaJson]);

  return null;
}
