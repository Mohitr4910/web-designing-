import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  const {
    slug,
    title,
    excerpt,
    featured_image,
    reading_time_minutes = 5,
    published_at,
    category_name,
    category_slug,
    author_name,
    author_avatar
  } = post;

  const formattedDate = published_at 
    ? new Date(published_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Recent';

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      
      {/* Featured Image */}
      <Link to={`/blog/${slug}/`} className="block relative h-52 overflow-hidden bg-slate-100">
        <img 
          src={featured_image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {category_name && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
            {category_name}
          </span>
        )}
      </Link>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{reading_time_minutes} min read</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#081c4e] mb-2.5 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            <Link to={`/blog/${slug}/`}>
              {title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed">
            {excerpt}
          </p>
        </div>

        {/* Author & Read Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80'} 
              alt={author_name || 'Author'}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-slate-700">{author_name || 'Web Team'}</span>
          </div>

          <Link 
            to={`/blog/${slug}/`}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </article>
  );
}
