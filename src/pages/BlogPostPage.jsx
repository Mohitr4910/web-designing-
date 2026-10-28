import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import SeoMeta from '../components/SeoMeta';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Bookmark 
} from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api.getPostBySlug(slug)
      .then(res => {
        setPost(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="py-28 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-sm text-slate-500 font-medium">Loading engineering article...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-28 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#081c4e] mb-3">Article Not Found</h2>
        <p className="text-slate-600 text-sm mb-6">The requested publication could not be located or has been moved.</p>
        <Link to="/blog/" className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm">
          Return to Blog Directory
        </Link>
      </div>
    );
  }

  const {
    title,
    content_html,
    featured_image,
    reading_time_minutes = 5,
    published_at,
    category_name,
    category_slug,
    author_name,
    author_role,
    author_bio,
    author_avatar,
    tags = [],
    related_posts = []
  } = post;

  const formattedDate = published_at 
    ? new Date(published_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Recent';

  return (
    <div>
      <SeoMeta 
        title={`${post.meta_title || title} | Flown Developer`}
        description={post.meta_description || post.excerpt}
        canonicalUrl={`/blog/${slug}/`}
        ogType="article"
        ogImage={featured_image}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "image": [featured_image],
          "datePublished": published_at,
          "dateModified": post.updated_at || published_at,
          "author": [{
            "@type": "Person",
            "name": author_name || "Flown Developer Team"
          }],
          "publisher": {
            "@type": "Organization",
            "name": "Flown Developer",
            "logo": {
              "@type": "ImageObject",
              "url": "https://flowndeveloper.com/logo.png"
            }
          },
          "description": post.excerpt
        }}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white pt-10 pb-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to="/blog/" className="hover:text-blue-600 transition">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to={`/blog/category/${category_slug}/`} className="hover:text-blue-600 transition">{category_name}</Link>
          </nav>

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-4 border border-blue-100">
            {category_name}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            {title}
          </h1>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-slate-200/80 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <img 
                src={author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'} 
                alt={author_name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <span className="font-bold text-slate-800 text-sm block">{author_name}</span>
                <span>{author_role || 'Senior Web Engineer'}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{formattedDate}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{reading_time_minutes} min read</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Featured Hero Image */}
          {featured_image && (
            <div className="rounded-2xl overflow-hidden mb-12 shadow-xl border border-slate-100">
              <img 
                src={featured_image} 
                alt={title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {/* Article HTML Body */}
          <div 
            className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: content_html }}
          />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
              {tags.map(t => (
                <Link 
                  key={t.slug}
                  to={`/blog/tag/${t.slug}/`}
                  className="text-xs font-medium bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 px-3 py-1.5 rounded-full transition"
                >
                  #{t.name}
                </Link>
              ))}
            </div>
          )}

          {/* Author Profile Bio Box */}
          <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img 
              src={author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'} 
              alt={author_name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
            />
            <div className="text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-base font-bold text-[#081c4e]">{author_name}</h4>
                <span className="text-xs text-blue-600 font-semibold">{author_role}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {author_bio || 'Specialist in full-stack web architectures, performance optimization, and responsive design systems.'}
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {related_posts && related_posts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-xl font-bold text-[#081c4e] mb-6">
                Related Articles in This Category
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related_posts.map((rp, i) => (
                  <Link 
                    key={i}
                    to={`/blog/${rp.slug}/`}
                    className="group block p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition"
                  >
                    <div className="h-32 rounded-lg overflow-hidden bg-slate-100 mb-3">
                      <img 
                        src={rp.featured_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80'} 
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#081c4e] group-hover:text-blue-600 transition line-clamp-2">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link 
              to="/blog/"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all engineering articles</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
