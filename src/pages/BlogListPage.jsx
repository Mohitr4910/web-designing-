import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import BlogCard from '../components/BlogCard';
import SeoMeta from '../components/SeoMeta';
import { Search, Tag, Folder, ChevronRight } from 'lucide-react';

export default function BlogListPage() {
  const { categorySlug, tagSlug, authorSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [taxonomies, setTaxonomies] = useState({ categories: [], tags: [] });
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(searchQuery);

  useEffect(() => {
    setLoading(true);
    const params = {
      category: categorySlug || '',
      tag: tagSlug || '',
      author: authorSlug || '',
      search: searchQuery,
      page: searchParams.get('page') || 1
    };

    Promise.all([
      api.getPosts(params),
      api.getBlogTaxonomies().catch(() => ({ categories: [], tags: [] }))
    ]).then(([postRes, taxRes]) => {
      setPosts(postRes.posts || []);
      setPagination(postRes.pagination || {});
      setTaxonomies(taxRes || { categories: [], tags: [] });
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [categorySlug, tagSlug, authorSlug, searchQuery, searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ search: searchInput.trim() });
    } else {
      setSearchParams({});
    }
  };

  // Determine current page heading
  let activeTitle = 'Web Design & Web Development Insights';
  let activeDesc = 'In-depth engineering blueprints, responsive design principles, and e-commerce strategies from our core development team.';
  if (categorySlug) {
    activeTitle = `Category: ${categorySlug.replace(/-/g, ' ').toUpperCase()}`;
    activeDesc = `Articles and guides on ${categorySlug.replace(/-/g, ' ')}.`;
  } else if (tagSlug) {
    activeTitle = `Tag: #${tagSlug}`;
    activeDesc = `Technical topics tagged with #${tagSlug}.`;
  } else if (authorSlug) {
    activeTitle = `Author: ${authorSlug.replace(/-/g, ' ').toUpperCase()}`;
  } else if (searchQuery) {
    activeTitle = `Search Results for: "${searchQuery}"`;
  }

  return (
    <div>
      <SeoMeta 
        title={`${activeTitle} | Flown Developer Blog`}
        description={activeDesc}
        canonicalUrl="/blog/"
      />

      {/* Hero Banner with Search */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Engineering Publications
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081c4e] tracking-tight mb-4">
            {activeTitle}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            {activeDesc}
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto flex items-center bg-white rounded-full p-1.5 border border-slate-200 shadow-sm focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition">
            <input 
              type="text" 
              placeholder="Search website topics..." 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2 text-xs sm:text-sm text-slate-800 outline-none rounded-full"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full flex items-center justify-center transition"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Main Articles Listing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Articles Grid */}
            <div className="lg:col-span-8">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="h-96 bg-slate-100 rounded-2xl animate-pulse"></div>
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-[#081c4e] mb-2">No Articles Found</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">No published articles match the selected filter criteria.</p>
                  <Link to="/blog/" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs">
                    View All Articles
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map(p => (
                    <BlogCard key={p.id} post={p} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {pagination.total_pages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-slate-100">
                  {[...Array(pagination.total_pages)].map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = (pagination.current_page === pageNum);
                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          const newParams = new URLSearchParams(searchParams);
                          newParams.set('page', pageNum);
                          setSearchParams(newParams);
                        }}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition ${
                          isActive 
                            ? 'bg-blue-600 text-white shadow-sm' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Sidebar Taxonomies */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Categories */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-[#081c4e] text-base flex items-center gap-2">
                  <Folder className="w-4 h-4 text-blue-600" />
                  <span>Topic Categories</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {taxonomies.categories && taxonomies.categories.map(c => (
                    <li key={c.id}>
                      <Link 
                        to={`/blog/category/${c.slug}/`}
                        className={`flex items-center justify-between p-2 rounded-lg hover:bg-white hover:text-blue-600 transition ${
                          categorySlug === c.slug ? 'bg-white font-bold text-blue-600 shadow-2xs' : 'text-slate-600'
                        }`}
                      >
                        <span>{c.name}</span>
                        <span className="text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">{c.post_count || 1}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Cloud */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-[#081c4e] text-base flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-600" />
                  <span>Popular Tags</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {taxonomies.tags && taxonomies.tags.map(t => (
                    <Link 
                      key={t.id}
                      to={`/blog/tag/${t.slug}/`}
                      className={`text-xs px-3 py-1.5 rounded-full border transition ${
                        tagSlug === t.slug 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      #{t.name}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
