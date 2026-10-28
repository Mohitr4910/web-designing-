import React, { useState, useEffect } from 'react';
import EcommercePricingCard from './EcommercePricingCard';
import { api } from '../services/api';
import { ShoppingBag, ShieldCheck, HelpCircle } from 'lucide-react';

export default function EcommercePricingSection({ initialPlans = null }) {
  const [plans, setPlans] = useState(initialPlans);
  const [loading, setLoading] = useState(!initialPlans);

  useEffect(() => {
    if (!initialPlans) {
      api.getPricing('ecommerce').then(res => {
        setPlans(res);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load ecommerce pricing:', err);
        setLoading(false);
      });
    }
  }, [initialPlans]);

  if (loading || !plans || plans.length === 0) {
    return (
      <section className="py-20 bg-white">
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
    <section className="py-20 md:py-28 bg-white relative" id="ecommerce-pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
            E-commerce Store Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
            E-commerce Website Pricing Plans
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Full-featured online shopping platforms and multi-vendor marketplaces built with payment gateways, automated invoices, product variations, and mobile-first checkout flows.
          </p>
        </div>

        {/* 3 Tall Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="h-full">
              <EcommercePricingCard plan={plan} />
            </div>
          ))}
        </div>

        {/* E-commerce Capabilities Guarantee */}
        <div className="mt-14 max-w-3xl mx-auto bg-slate-50 rounded-xl p-5 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Includes Razorpay/Stripe, UPI, Cards, NetBanking</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Automated GST Invoices & SMS/WhatsApp OTP ready</span>
          </div>
        </div>

      </div>
    </section>
  );
}
