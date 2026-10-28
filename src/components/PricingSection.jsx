import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import { api } from '../services/api';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingSection({ initialPlans = null }) {
  const [plans, setPlans] = useState(initialPlans);
  const [loading, setLoading] = useState(!initialPlans);

  useEffect(() => {
    if (!initialPlans) {
      api.getPricing('website').then(res => {
        setPlans(res);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load website pricing:', err);
        setLoading(false);
      });
    }
  }, [initialPlans]);

  if (loading || !plans || plans.length === 0) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-slate-200 rounded w-64 mx-auto"></div>
            <div className="h-4 bg-slate-100 rounded max-w-lg mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative" id="website-pricing">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
            Standard, Premium & Custom Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
            Website Design & Development Pricing
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Choose the perfect plan tailored to your corporate goals. All packages include free domain, high-speed cloud hosting, SSL, and one year of technical support.
          </p>
        </div>

        {/* 3 Tall Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="h-full">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

        {/* Bottom Trust Factors & Tax Transparency */}
        <div className="mt-14 max-w-3xl mx-auto bg-white rounded-xl p-5 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>100% Transparent Billing • 18% GST itemized</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Need a custom scope? <a href="/contact-us/" className="text-blue-600 font-semibold hover:underline">Get a free quotation</a></span>
          </div>
        </div>

      </div>
    </section>
  );
}
