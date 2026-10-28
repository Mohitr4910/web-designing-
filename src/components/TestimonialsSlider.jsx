import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSlider({ initialTestimonials = null }) {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [loading, setLoading] = useState(!initialTestimonials);

  useEffect(() => {
    if (!initialTestimonials) {
      api.getTestimonials().then(res => {
        setReviews(res);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load testimonials:', err);
        setLoading(false);
      });
    }
  }, [initialTestimonials]);

  if (loading || !reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((t) => (
        <div 
          key={t.id}
          className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
        >
          <Quote className="w-8 h-8 text-blue-100 absolute top-6 right-6" />

          <div>
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4 text-amber-400">
              {[...Array(t.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
              "{t.review_text}"
            </p>
          </div>

          {/* Client Bio */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <img 
              src={t.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'} 
              alt={t.client_name}
              className="w-11 h-11 rounded-full object-cover border border-slate-200"
              loading="lazy"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-[#081c4e]">{t.client_name}</h4>
                {t.is_verified && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" title="Verified Client" />
                )}
              </div>
              <p className="text-xs text-slate-500">{t.company_name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
