import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import SeoMeta from '../components/SeoMeta';
import { Layout, Code, ArrowRight } from 'lucide-react';

export default function ServicesIndexPage() {
  const [designServices, setDesignServices] = useState([]);
  const [devServices, setDevServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.getServices('website_design'),
      api.getServices('web_development')
    ]).then(([d, dev]) => {
      setDesignServices(d);
      setDevServices(dev);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <SeoMeta 
        title="Full-Cycle Website Design & Web Development Services | Flown Developer"
        description="Explore our complete suite of specialized website design and web development services. From responsive business websites to complex e-commerce stores."
        canonicalUrl="/services/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Website Design & Development Services",
          "url": "https://flowndeveloper.com/services/",
          "description": "Full-cycle web design, web development, e-commerce, and maintenance services."
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Our Core Competencies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Focused Website Design & Web Development Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver exclusively in our areas of absolute mastery: high-converting responsive web design and robust full-stack web software. Every service is backed by transparent deliverables and 1 year of support.
          </p>
        </div>
      </section>

      {/* Section 1: Website Design Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#081c4e]">
                Website Design Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Visual identity, responsive fluid layouts, and wireframing for optimal user engagement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Web Development Solutions */}
      <section className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#081c4e]">
                Web Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Full-stack PHP, MySQL, React, e-commerce storefronts, and maintenance contracts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devServices.map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#081c4e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-white">Not Sure Which Service Matches Your Goal?</h3>
            <p className="text-sm text-slate-300">
              Speak directly with our technical director. We will evaluate your current setup and recommend the most cost-effective path forward.
            </p>
          </div>
          <Link 
            to="/contact-us/"
            className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-md transition flex items-center gap-2"
          >
            <span>Request Free Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
