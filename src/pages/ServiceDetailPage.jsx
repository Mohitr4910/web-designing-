import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import SeoMeta from '../components/SeoMeta';
import ContactForm from '../components/ContactForm';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Phone,
  HelpCircle
} from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    api.getServiceBySlug(slug)
      .then(res => {
        setService(res);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="py-28 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-sm text-slate-500 font-medium">Loading service specifications...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="py-28 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#081c4e] mb-3">Service Details Unavailable</h2>
        <p className="text-slate-600 text-sm mb-6">The requested service offering could not be loaded or is currently being updated.</p>
        <Link to="/services/" className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm">
          Return to All Services
        </Link>
      </div>
    );
  }

  const {
    title,
    category,
    short_description,
    full_description,
    deliverables = [],
    technologies = [],
    sections = [],
    related = []
  } = service;

  return (
    <div>
      <SeoMeta 
        title={`${title} | Flown Developer`}
        description={short_description}
        canonicalUrl={`/${slug}/`}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": title,
          "provider": {
            "@type": "Organization",
            "name": "Flown Developer",
            "url": "https://flowndeveloper.com"
          },
          "description": short_description,
          "areaServed": "Global"
        }}
      />

      {/* Breadcrumbs & Hero */}
      <section className="bg-gradient-to-b from-[#f8faff] via-white to-white pt-10 pb-16 md:pt-14 md:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link to="/services/" className="hover:text-blue-600 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-700 font-semibold">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-100">
                {category === 'website_design' ? 'Website Design' : 'Web Development'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {short_description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#quote-form" 
                  className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
                >
                  Request Service Proposal
                </a>
                <Link 
                  to="/pricing/" 
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
                >
                  View Fixed Pricing
                </Link>
              </div>
            </div>

            {/* Quick Stat Card */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4">
              <h3 className="font-bold text-[#081c4e] text-sm uppercase tracking-wider">Service Highlights</h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-400">Typical Delivery:</span>
                  <span className="font-bold text-slate-800">7 - 14 Business Days</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-400">Support Included:</span>
                  <span className="font-bold text-emerald-600">1 Year Direct Assistance</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-400">Device Ready:</span>
                  <span className="font-bold text-blue-600">100% Mobile Fluid</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">CMS Control:</span>
                  <span className="font-bold text-slate-800">Full Admin Access</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Details & Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Detailed Overview */}
              <div>
                <h2 className="text-2xl font-extrabold text-[#081c4e] mb-4">
                  Overview & Engineering Approach
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                  <p>{full_description}</p>
                </div>
              </div>

              {/* Deliverables Grid */}
              {deliverables && deliverables.length > 0 && (
                <div className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-xl font-bold text-[#081c4e] mb-5">
                    What is Included in This Service
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Utilized */}
              {technologies && technologies.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[#081c4e] mb-4">
                    Technologies & Frameworks Employed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((t, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-lg border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-sections if present */}
              {sections && sections.map((sec, idx) => (
                <div key={idx} className="pt-6 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-[#081c4e] mb-3">{sec.title}</h3>
                  <div 
                    className="text-slate-600 text-sm leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: sec.content_html }} 
                  />
                </div>
              ))}

              {/* Dedicated Form Anchor */}
              <div id="quote-form" className="pt-10">
                <ContactForm />
              </div>

            </div>

            {/* Right Sidebar: Related Services & Direct Help */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Related Services */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-[#081c4e] text-base">Complementary Services</h3>
                <div className="space-y-3">
                  {related.map((rel) => (
                    <Link 
                      key={rel.slug} 
                      to={`/${rel.slug}/`}
                      className="block p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition group"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-[#081c4e] group-hover:text-blue-600 transition flex items-center justify-between">
                        <span>{rel.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition" />
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{rel.short_description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Assistance Box */}
              <div className="bg-[#081c4e] text-white p-6 rounded-2xl space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-cyan-300 flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">Speak With an Engineer</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have unique requirements or technical specifications? Call our hotline for immediate guidance.
                </p>
                <a 
                  href="tel:+918240740018"
                  className="block w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-bold text-xs uppercase tracking-wider transition"
                >
                  Call +91 82407 40018
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
