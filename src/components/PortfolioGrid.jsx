import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ExternalLink, Tag } from 'lucide-react';

export default function PortfolioGrid({ initialProjects = null }) {
  const [projects, setProjects] = useState(initialProjects);
  const [loading, setLoading] = useState(!initialProjects);

  useEffect(() => {
    if (!initialProjects) {
      api.getPortfolio().then(res => {
        setProjects(Array.isArray(res) ? res.slice(0, 3) : []);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load portfolio:', err);
        setLoading(false);
      });
    }
  }, [initialProjects]);

  const displayProjects = projects ? projects.slice(0, 3) : [];

  return (
    <div className="w-full">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(n => (
            <div key={n} className="h-80 bg-slate-100 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image & Badge */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img 
                  src={proj.featured_image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Sample Badge */}
                {proj.is_sample_badge && (
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                    Sample Showcase
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                  {proj.category.replace('_', ' ').toUpperCase()}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#081c4e] mb-2 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {proj.short_description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.technologies && proj.technologies.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Demo Link */}
                  {proj.demo_url && (
                    <a 
                      href={proj.demo_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <span>Live Demonstration</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
