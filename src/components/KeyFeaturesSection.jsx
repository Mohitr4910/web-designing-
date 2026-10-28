import React, { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { api } from '../services/api';

export default function KeyFeaturesSection({ initialData = null }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      api.getKeyFeatures().then(res => {
        setData(res);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load key features:', err);
        setLoading(false);
      });
    }
  }, [initialData]);

  if (loading || !data) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-slate-200 rounded w-48 mx-auto"></div>
            <div className="h-4 bg-slate-100 rounded max-w-xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const { section, cards } = data;

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="key-features">
      
      {/* Subtle Background Decorative Shapes */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-purple-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-cyan-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Reference Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
            Core Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
            {section?.section_title || 'Key Features'}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {section?.section_description ||
              'We are a One-Stop Solution for delivering the best web design and development services. We render customized and affordable web design facilities to suit your requirements. Choose the best plans for building a responsive web design according to your needs.'}
          </p>
        </div>

        {/* Exactly Six Cards Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards && cards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}
