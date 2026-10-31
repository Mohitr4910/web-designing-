import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import SeoMeta from '../components/SeoMeta';
import ContactForm from '../components/ContactForm';
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

export default function ServicesIndexPage() {
  const [designServices, setDesignServices] = useState([]);
  const [devServices, setDevServices] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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

  // Handle hash scrolling (#website-design or #web-development)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const allServices = [...designServices, ...devServices];
  const displayedServices = activeTab === 'all' 
    ? allServices 
    : (activeTab === 'design' ? designServices : devServices);

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

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#f8faff] via-white to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Our Core Competencies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Focused Website Design & Web Development Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            We deliver exclusively in our areas of absolute mastery: high-converting responsive web design and robust full-stack web software. Every service is backed by transparent deliverables and 1 year of support.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All 15 Services
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Website Design Solutions ({designServices.length})
            </button>
            <button
              onClick={() => setActiveTab('development')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'development'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Web Development Solutions ({devServices.length})
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white" id="all-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="h-80 bg-slate-100 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <>
              {/* Website Design Section */}
              {(activeTab === 'all' || activeTab === 'design') && (
                <div className="mb-20" id="website-design">
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
              )}

              {/* Web Development Section */}
              {(activeTab === 'all' || activeTab === 'development') && (
                <div id="web-development">
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
              )}
            </>
          )}

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
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/contact-us/"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-md transition flex items-center gap-2"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+918240740018"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4" />
              <span>+91 82407 40018</span>
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
