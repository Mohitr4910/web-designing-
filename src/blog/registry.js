/**
 * BLOG REGISTRY (auto)
 *
 * src/blog/posts/ folder me jo bhi .jsx file hogi, wo apne aap blog ban jayegi.
 * Koi list/array/database update karne ki zarurat nahi.
 *
 * Har post file me:
 *   export const meta = { title, excerpt, date, category, tags, image, readingTime, slug? ... }
 *   export default function Post() { return (<>...article JSX...</>) }
 */
import { DEFAULT_AUTHOR } from '../config/site';

const modules = import.meta.glob('./posts/*.jsx', { eager: true });

export const slugify = (s = '') =>
  String(s)
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const meta = mod.meta || {};
    const fileSlug = path.split('/').pop().replace(/\.jsx$/, '');
    const slug = meta.slug || fileSlug;

    if (!mod.default) {
      console.warn(`[blog] ${path}: default export (component) missing`);
      return null;
    }
    if (!meta.title) {
      console.warn(`[blog] ${path}: meta.title missing`);
    }

    const author = { ...DEFAULT_AUTHOR, ...(meta.author || {}) };
    const category = meta.category || 'General';
    const tags = (meta.tags || []).map(name => ({ name, slug: slugify(name) }));

    return {
      id: slug,
      slug,
      title: meta.title || slug,
      excerpt: meta.excerpt || '',
      featured_image: meta.image || '',
      reading_time_minutes: meta.readingTime || 5,
      published_at: meta.date || '',
      updated_at: meta.updated || meta.date || '',
      meta_title: meta.metaTitle || '',
      meta_description: meta.metaDescription || '',
      author_name: author.name,
      author_role: author.role,
      author_bio: author.bio,
      author_avatar: author.avatar,
      author_slug: slugify(author.name),
      category_name: category,
      category_slug: slugify(category),
      tags,
      draft: !!meta.draft,
      Component: mod.default
    };
  })
  .filter(Boolean)
  .filter(p => !p.draft) // meta me draft: true likhoge to blog hide ho jayega
  .sort((a, b) => new Date(b.published_at || 0) - new Date(a.published_at || 0));

export function listPosts({ category, tag, author, search, page = 1, limit, perPage = 9 } = {}) {
  let filtered = posts;
  if (category) filtered = filtered.filter(p => p.category_slug === category);
  if (tag) filtered = filtered.filter(p => p.tags.some(t => t.slug === tag));
  if (author) filtered = filtered.filter(p => p.author_slug === author);
  if (search) {
    const s = String(search).toLowerCase();
    filtered = filtered.filter(
      p => p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s)
    );
  }

  // limit => sirf pehle N posts (homepage ke liye)
  if (limit) {
    return {
      posts: filtered.slice(0, Number(limit)),
      pagination: { current_page: 1, per_page: Number(limit), total: filtered.length, total_pages: 1 }
    };
  }

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  return {
    posts: filtered.slice((current - 1) * perPage, current * perPage),
    pagination: { current_page: current, per_page: perPage, total, total_pages: totalPages }
  };
}

export function getPost(slug) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return null;
  const related = posts
    .filter(p => p.slug !== slug)
    .sort((a, b) => Number(b.category_slug === post.category_slug) - Number(a.category_slug === post.category_slug))
    .slice(0, 3);
  return { ...post, related_posts: related };
}

export function getTaxonomies() {
  const cats = new Map();
  const tags = new Map();
  posts.forEach(p => {
    const c = cats.get(p.category_slug) || { id: p.category_slug, name: p.category_name, slug: p.category_slug, post_count: 0 };
    c.post_count += 1;
    cats.set(p.category_slug, c);
    p.tags.forEach(t => {
      const e = tags.get(t.slug) || { id: t.slug, name: t.name, slug: t.slug };
      tags.set(t.slug, e);
    });
  });
  return { categories: [...cats.values()], tags: [...tags.values()] };
}

export default posts;
