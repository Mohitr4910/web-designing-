/**
 * LOCATION REGISTRY (auto)
 *
 * src/config/locations.js ki CITIES x (locationPages: true wali services) se saare
 * "<service>-in-<city>" pages apne aap ban jaate hain. Sitemap bhi inhi se bharta hai
 * (src/entry-server.jsx -> getRoutes()). Is file ko badalne ki zarurat nahi.
 */
import { listServices } from '../services/registry';
import { CITIES } from '../config/locations';

export const slugifyCity = (s = '') =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const cities = CITIES.filter(c => c && c.name && !c.draft).map(c => ({
  ...c,
  slug: c.slug || slugifyCity(c.name),
  areas: c.areas || []
}));

// Jin services me meta.locationPages: true hai (src/services/items/*.jsx)
const services = listServices().filter(s => s.location_pages);

export const locationPath = (serviceSlug, citySlug) => `/${serviceSlug}-in-${citySlug}/`;

const pages = [];
const bySlug = new Map();
cities.forEach(city => {
  services.forEach(service => {
    const slug = `${service.slug}-in-${city.slug}`;
    const page = { slug, url: locationPath(service.slug, city.slug), city, service, lastmod: city.updated || null };
    pages.push(page);
    bySlug.set(slug, page);
  });
});

export const getCities = () => cities;
export const getLocationServices = () => services;
export const getLocationPages = () => pages;
export const getLocationPage = slug => bySlug.get(String(slug || '').replace(/\/+$/, '')) || null;

export default pages;
