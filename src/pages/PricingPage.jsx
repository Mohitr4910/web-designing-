import React from 'react';
import PricingSection from '../components/PricingSection';
import EcommercePricingSection from '../components/EcommercePricingSection';
import ContactForm from '../components/ContactForm';
import FaqAccordion from '../components/FaqAccordion';
import SeoMeta from '../components/SeoMeta';
import { ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <div>
      <SeoMeta 
        title="Transparent Website & E-commerce Pricing Plans | Flown Developer"
        description="Affordable, clear website design and e-commerce development pricing packages with itemized features, 18% GST calculation, free SSL, and zero hidden fees."
        canonicalUrl="/pricing/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "Web Design & Development Pricing Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Standard Website Plan",
              "price": "7999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "name": "Premium Website Plan",
              "price": "13999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "name": "Premium Design E-commerce Plan",
              "price": "21999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "name": "Multi-vendor Business & E-commerce Plan",
              "price": "50000",
              "priceCurrency": "INR"
            }
          ]
        }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Straightforward Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Transparent Website & E-commerce Pricing Plans
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business deserves reliable web engineering without hidden costs. Our plans feature complete itemized deliverables, dynamic 18% GST calculation, free domain and cloud hosting, and one year of technical support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Hidden Maintenance Surcharges</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Calculated 18% GST Transparency</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>1 Year Free Support & Cloud Hosting</span>
            </span>
          </div>
        </div>
      </section>

      {/* Standard, Premium & Custom Website Pricing Section */}
      <PricingSection />

      {/* 3 E-commerce Pricing Section */}
      <EcommercePricingSection />

      {/* Custom Scope Quotation Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="custom-quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-100">
                Custom Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-[#081c4e] tracking-tight">
                Need a Custom Solution Beyond Pre-Set Packages?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If your project demands high-concurrency database architecture, complex multi-vendor workflows, third-party ERP synchronization, or custom role-based dashboards, tell us what you are building.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs text-slate-600">
                <div className="font-bold text-[#081c4e] text-sm">What Happens Next?</div>
                <p>1. Our technical lead reviews your requirements.</p>
                <p>2. We draft an itemized scope of work with milestone timelines.</p>
                <p>3. We deliver a fixed-price proposal within 24 hours.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#081c4e] tracking-tight mb-3">
              Pricing & Billing FAQs
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to common questions regarding tax calculation, payment milestones, hosting renewals, and domain transfers.
            </p>
          </div>
          <FaqAccordion category="pricing" />
        </div>
      </section>
    </div>
  );
}
