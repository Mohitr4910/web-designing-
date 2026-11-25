/**
 * SERVICES REGISTRY (auto) - blog registry jaisa hi system.
 *
 * src/services/items/ folder me jo bhi .jsx file hogi, wo apne aap ek service ban jayegi:
 *   - /services/ listing me card
 *   - /services/<slug>/ ka alag page
 *   - sitemap.xml me entry (entry-server.jsx -> getRoutes())
 *   - Footer me link
 *   - meta.locationPages: true ho to har shehar ka page bhi (src/config/locations.js)
 * Koi list/array update karne ki zarurat nahi. Naya service banane ke liye NEW_SERVICE_TEMPLATE.jsx dekho.
 */
const modules = import.meta.glob('./items/*.jsx', { eager: true });

const services = Object.entries(modules)
  .map(([path, mod]) => {
    const meta = mod.meta || {};
    const fileSlug = path.split('/').pop().replace(/\.jsx$/, '');
    if (!meta.title) console.warn(`[services] ${path}: meta.title missing`);
    return {
      slug: meta.slug || fileSlug,
      title: meta.title || fileSlug,
      category: meta.category || 'web_development',
      order: Number.isFinite(meta.order) ? meta.order : 999,
      icon_svg: meta.icon || 'globe',
      short_description: meta.shortDescription || '',
      full_description: meta.fullDescription || meta.shortDescription || '',
      deliverables: meta.deliverables || [],
      technologies: meta.technologies || [],
      location_pages: !!meta.locationPages,
      faqs: Array.isArray(meta.faqs) ? meta.faqs : [],
      meta_title: meta.metaTitle || '',
      meta_description: meta.metaDescription || '',
      updated_at: meta.updated || null,
      draft: !!meta.draft,
      Component: mod.default || null,
      _file: fileSlug
    };
  })
  .filter(s => !s.draft)
  .sort((a, b) => a.order - b.order || a._file.localeCompare(b._file))
  .map((s, i) => ({ ...s, id: i + 1 }));

export function listServices(category) {
  return category ? services.filter(s => s.category === category) : services;
}

export function getService(slug) {
  const s = services.find(x => x.slug === String(slug || '').replace(/\/+$/, ''));
  if (!s) return null;
  return { ...s, related: services.filter(x => x.category === s.category && x.slug !== s.slug).slice(0, 3) };
}

export const servicePath = slug => `/services/${slug}/`;

export default services;
