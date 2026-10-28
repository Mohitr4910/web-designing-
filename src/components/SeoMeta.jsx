import React, { useEffect } from 'react';

export default function SeoMeta({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://flowndeveloper.com/og-image.jpg',
  schemaJson = null
}) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // 2. Meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // 3. Canonical Link
    if (canonicalUrl) {
      let linkCan = document.querySelector('link[rel="canonical"]');
      if (!linkCan) {
        linkCan = document.createElement('link');
        linkCan.rel = 'canonical';
        document.head.appendChild(linkCan);
      }
      linkCan.href = canonicalUrl.startsWith('http') ? canonicalUrl : `https://flowndeveloper.com${canonicalUrl}`;
    }

    // 4. Open Graph Meta
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
    setOgMeta('og:url', window.location.href);

    // 5. Schema JSON-LD
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
  }, [title, description, canonicalUrl, ogType, ogImage, schemaJson]);

  return null;
}
