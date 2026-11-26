import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import SeoMeta from '../components/SeoMeta';
import ContactForm from '../components/ContactForm';
import ParticleWarp3DMotion from '../components/ParticleWarp3DMotion';
import { 
  Layout, 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Phone
} from 'lucide-react';
import { SITE_URL } from '../config/site';

export default function ServicesIndexPage() {
  // Services src/services/items/*.jsx se auto aati hain - sab ek hi grid me
  const services = api.getServices();

  return (
    <div>
      <SeoMeta 
        title="Website Design & Web Development Services | WebLaunchPro"
        description="Explore our website design and web development services for businesses across India, from responsive business websites to complex e-commerce stores."
        canonicalUrl="/services/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Website Design & Development Services",
          "url": SITE_URL + "/services/",
          "description": "Web design, web development, e-commerce, and maintenance services."
        }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#f8faff] via-white to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Website Design & Web Development Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            High-converting responsive web design and robust full-stack web software. Every service is backed by transparent deliverables and 1 year of support.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white" id="all-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(s => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500">Services coming soon. Please contact us for details.</p>
          )}
        </div>
      </section>

      {/* Consultation Banner with 3D Warp Motion */}
      <section className="py-16 bg-[#07132c] text-white relative overflow-hidden border-t border-b border-blue-900/40">
        <ParticleWarp3DMotion />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-white">Not Sure Which Service Matches Your Goal?</h3>
            <p className="text-sm text-slate-300">
              Speak directly with our technical director. We will evaluate your current setup and recommend the most cost-effective path forward.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/contact-us/"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-lg shadow-amber-500/20 transition flex items-center gap-2 hover:scale-105"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+919302770758"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center gap-2 backdrop-blur-md transition hover:scale-105"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>+91 93027 70758</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section on Services Page */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
