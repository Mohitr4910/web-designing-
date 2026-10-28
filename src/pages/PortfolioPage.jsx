import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';
import SeoMeta from '../components/SeoMeta';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div>
      <SeoMeta 
        title="Our Portfolio - Website Design & Development Projects | Flown Developer"
        description="Browse our real-world and sample website design, business portals, and e-commerce store implementations. Built with modern PHP, React, and responsive CSS."
        canonicalUrl="/portfolio/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Flown Developer Portfolio Showcase",
          "url": "https://flowndeveloper.com/portfolio/",
          "description": "Showcase of website design and full-stack web development projects."
        }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Engineered Implementations
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Website Projects & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our work across custom website design, corporate digital portals, high-performance e-commerce stores, and headless architectures. All projects feature responsive layouts, clean code, and fast performance.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#081c4e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Build Your Custom Website?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Discuss your requirements with our lead architect and get an itemized project quotation within 24 hours.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact-us/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-md transition"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
