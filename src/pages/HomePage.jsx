import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Layers, 
  Laptop, 
  Code2, 
  Database, 
  Globe2,
  Cpu,
  BarChart3,
  Users
} from 'lucide-react';
import KeyFeaturesSection from '../components/KeyFeaturesSection';
import PricingSection from '../components/PricingSection';
import EcommercePricingSection from '../components/EcommercePricingSection';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import TestimonialsSlider from '../components/TestimonialsSlider';
import FaqAccordion from '../components/FaqAccordion';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import SeoMeta from '../components/SeoMeta';
import { api } from '../services/api';

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    api.getServices().then(res => setServices(res.slice(0, 8))).catch(() => {});
    api.getPosts({ limit: 3 }).then(res => setRecentPosts(res.posts || [])).catch(() => {});
  }, []);

  const designProcessSteps = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understanding your commercial objectives, audience personas, and desired features.' },
    { num: '02', title: 'Website Planning', desc: 'Structuring sitemaps, user flows, and conversion funnels for intuitive navigation.' },
    { num: '03', title: 'Wireframing', desc: 'Crafting low-fidelity skeletal layouts to establish visual content hierarchy.' },
    { num: '04', title: 'UI/UX Design', desc: 'Designing brand typography, color palettes, micro-interactions, and visual identity.' },
    { num: '05', title: 'Responsive Layout Design', desc: 'Calibrating fluid grid systems across smartphone, tablet, and 4K desktop screens.' },
    { num: '06', title: 'Review & Feedback', desc: 'Collaborative client design walkthroughs and iterative polish before development.' },
    { num: '07', title: 'Final Design Approval', desc: 'Finalizing pixel-perfect design tokens, vector assets, and component states.' }
  ];

  const devProcessSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Translating visual design approvals into technical architecture specifications.' },
    { num: '02', title: 'Technical Planning', desc: 'Choosing performant frameworks, API contracts, and database entity relationships.' },
    { num: '03', title: 'Frontend Development', desc: 'Building semantic HTML5, reactive React components, and fluid animations.' },
    { num: '04', title: 'Backend Development', desc: 'Programming secure PHP controllers, REST endpoints, and session authentication.' },
    { num: '05', title: 'Database Integration', desc: 'Configuring MySQL schemas, relational foreign keys, indexing, and PDO connectivity.' },
    { num: '06', title: 'Functional & Responsive Testing', desc: 'Testing cross-browser rendering, forms, payment gateways, and Core Web Vitals.' },
    { num: '07', title: 'Deployment', desc: 'Configuring cloud hosting, SSL certificates, Apache directives, and DNS propagation.' },
    { num: '08', title: 'Maintenance', desc: 'Proactive security patching, daily backups, uptime monitoring, and SLA support.' }
  ];

  const technologies = [
    { name: 'HTML5 & CSS3', cat: 'Markup & Styling', icon: '🌐' },
    { name: 'JavaScript (ES6+)', cat: 'Client Logic', icon: '⚡' },
    { name: 'React.js', cat: 'Frontend Architecture', icon: '⚛️' },
    { name: 'PHP 8.2+', cat: 'Backend Engine', icon: '🐘' },
    { name: 'MySQL / MariaDB', cat: 'Relational Database', icon: '🗄️' },
    { name: 'WordPress', cat: 'Custom Themes & CMS', icon: '📝' },
    { name: 'Shopify / Liquid', cat: 'E-commerce Platforms', icon: '🛍️' },
    { name: 'WooCommerce', cat: 'Online Storefronts', icon: '🛒' },
    { name: 'Node.js & Vite', cat: 'Modern Tooling', icon: '🚀' },
    { name: 'Tailwind CSS', cat: 'Utility Styling', icon: '🎨' },
    { name: 'Razorpay / Stripe', cat: 'Payment Gateways', icon: '💳' },
    { name: 'Apache / Nginx', cat: 'Web Infrastructure', icon: '🖥️' }
  ];

  const whyChooseUsPoints = [
    { title: '100% Responsive Design', desc: 'Fluid grid breakpoints engineered to guarantee flawless usability on every phone, tablet, and monitor.' },
    { title: 'User-Friendly Navigation', desc: 'Intuitive menus, structured hierarchies, and fast search that guide visitors straight to conversion.' },
    { title: 'Custom Functionality', desc: 'Tailored business logic and bespoke interactive tools built specifically around your operating workflow.' },
    { title: 'Maintainable Code', desc: 'Clean, semantic, modular code conforming strictly to modern web standards and version control.' },
    { title: 'Cross-Browser Compatibility', desc: 'Thoroughly tested and verified across Chrome, Safari, Edge, Firefox, and mobile WebKit browsers.' },
    { title: 'Performance-Conscious', desc: 'Sub-second load times achieved through asset minification, caching, and optimized Core Web Vitals.' },
    { title: 'Secure Development', desc: 'PDO prepared statements, CSRF protection, secure HTTP headers, and SSL data encryption by default.' },
    { title: 'Clear Communication', desc: 'Transparent project milestones, direct WhatsApp/phone access, and honest weekly progress updates.' },
    { title: 'Dedicated Post-Launch Support', desc: 'Comprehensive 1-year technical support, cloud backups, and proactive updates included with every plan.' }
  ];

  return (
    <div>
      <SeoMeta 
        title="Creative Website Design and Professional Web Development | Flown Developer"
        description="We design engaging, responsive websites and develop reliable digital experiences that help businesses build a strong online presence. Transparent pricing, custom solutions."
        canonicalUrl="/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Flown Developer",
          "url": "https://flowndeveloper.com",
          "description": "Creative Website Design and Professional Web Development Agency",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://flowndeveloper.com/blog/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      {/* B. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-white pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-100">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-100/50 via-purple-100/30 to-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Premier Web Design & Development Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#081c4e] tracking-tight leading-[1.12]">
                Creative Website Design & <span className="text-blue-600">Professional Web Development</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We design engaging, responsive websites and develop reliable digital experiences that help businesses build a strong online presence. Clean code, transparent pricing, and robust CMS control.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link 
                  to="/contact-us/"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link 
                  to="/portfolio/"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#081c4e] font-bold text-base border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition"
                >
                  <span>View Our Work</span>
                </Link>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>100% Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Free SSL & Cloud Hosting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Transparent Fixed Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Floating Decorative Cards */}
                <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">flowndeveloper.com</span>
                  </div>

                  {/* Mockup Preview Area */}
                  <div className="space-y-4">
                    <div className="h-32 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-4 text-white flex flex-col justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold opacity-90">Custom Corporate Portal</span>
                      <div>
                        <div className="text-lg font-bold">Sub-Second Load Time</div>
                        <div className="text-xs text-blue-100">Optimized for Core Web Vitals & Mobile Breakpoints</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-xs text-slate-500">Security Score</div>
                        <div className="text-base font-bold text-emerald-600">A+ Grade</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-xs text-slate-500">Responsive Ready</div>
                        <div className="text-base font-bold text-blue-600">100% Fluid</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlaid Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Fast Deployment</div>
                    <div className="text-[11px] text-slate-500">7-10 Days Turnaround</div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">1 Year Support</div>
                    <div className="text-[11px] text-slate-500">Direct Phone & Chat</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* C. Company Introduction */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Graphic */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Web Design and Development Team Collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c4e]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">Engineering Excellence</span>
                    <h3 className="text-xl font-bold">Built for Real-World Reliability</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block">
                Who We Are
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight">
                Your Partner for Website Design and Development
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                At Flown Developer, we focus exclusively on delivering high-impact website design and full-stack web development. We believe your website is your most valuable digital asset—a 24/7 representative of your brand credibility, capabilities, and professionalism.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#081c4e] text-sm mb-1">Human-Centered UI/UX</h4>
                  <p className="text-xs text-slate-600">Thoughtful visual hierarchy and wireframes designed to captivate visitors and guide engagement.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#081c4e] text-sm mb-1">Modern Code Architecture</h4>
                  <p className="text-xs text-slate-600">Clean PHP backends, PDO database security, and modular React components without bloat.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#081c4e] text-sm mb-1">Performance Conscious</h4>
                  <p className="text-xs text-slate-600">Sub-second page loading speeds engineered to maximize Core Web Vitals and user retention.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-[#081c4e] text-sm mb-1">Proactive Maintenance</h4>
                  <p className="text-xs text-slate-600">Continuous security updates, scheduled backups, and direct phone/chat support for peace of mind.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  to="/about-us/"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700"
                >
                  <span>Learn more about our development ethos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* D. Core Website Services */}
      <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Website Services Engineered for Growth
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Explore our focused capabilities across custom website design, corporate portals, e-commerce stores, and ongoing technical maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 shadow-sm transition"
            >
              <span>View All 15 Specialized Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* E. Website Design Process */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-purple-100">
              From Concept to Pixel
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Our 7-Step Website Design Process
            </h2>
            <p className="text-slate-600 text-base">
              A structured, collaborative methodology ensuring every interface is intuitive, visually compelling, and aligned with your business identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-extrabold text-purple-600 mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-[#081c4e] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* F. Website Development Process */}
      <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Technical Execution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Our 8-Step Website Development Process
            </h2>
            <p className="text-slate-600 text-base">
              Engineering rigorous, maintainable web software with modern frameworks, relational databases, and multi-tier quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-extrabold text-blue-600 mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-[#081c4e] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* G. EXACT KEY FEATURES SECTION (6 Cards from reference screenshot 1) */}
      <KeyFeaturesSection />

      {/* H. EXACT WEBSITE PRICING SECTION (Standard, Premium, Custom tall cards from reference screenshot 3) */}
      <PricingSection />

      {/* I. EXACT E-COMMERCE PRICING SECTION (3 tall cards from reference screenshot 2) */}
      <EcommercePricingSection />

      {/* J. Supported Technologies Matrix */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3">
              Modern Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-3">
              Proven Web Technologies
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              We leverage modern, battle-tested technologies engineered for performance, maintainability, and enterprise-grade uptime.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((t, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-3.5"
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-[#081c4e]">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">{t.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K. Why Choose Us */}
      <section className="py-20 md:py-24 bg-[#081c4e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-blue-900/60 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-700/50">
              Why Partner With Flown
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Engineering Value in Every Line of Code
            </h2>
            <p className="text-slate-300 text-base">
              We eliminate technical debt and opaque pricing, delivering reliable web solutions built to serve your business for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((pt, idx) => (
              <div 
                key={idx}
                className="bg-blue-950/40 border border-blue-800/50 rounded-2xl p-7 hover:border-blue-600 hover:bg-blue-900/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-cyan-300 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* L. Portfolio Showcase */}
      <section className="py-20 md:py-28 bg-white" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Real-World Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Featured Website Projects
            </h2>
            <p className="text-slate-600 text-base">
              A curated selection of our responsive business websites, custom portals, and e-commerce store deployments.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* M. Client Testimonials */}
      <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              What Our Partners Say
            </h2>
            <p className="text-slate-600 text-base">
              Genuine testimonials from business owners, directors, and managers who trust Flown for their web engineering.
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* N. Contact CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Website Project in Mind?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Tell us about your business and the website you want to build. We will help you plan the right architecture, timeline, and budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link 
              to="/contact-us/"
              className="px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-md transition hover:scale-105"
            >
              Discuss Your Project
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

      {/* O. FAQs */}
      <section className="py-20 md:py-24 bg-white" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Clear Answers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about our web design and development scopes, timelines, payment terms, and technical support.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* P. Latest Blog Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
                  Engineering Insights
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#081c4e] tracking-tight">
                  Latest Technical Articles
                </h2>
              </div>
              <Link 
                to="/blog/"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>Browse All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Q. Interactive Project Contact Form Section */}
      <section className="py-20 md:py-28 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-100">
                Let's Collaborate
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081c4e] tracking-tight leading-tight">
                Get a Transparent Quote for Your Next Website
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you need a fresh 5-page standard business website or a complex multi-vendor e-commerce marketplace, our engineering team is here to assist. Fill out the form, and we will get back to you with itemized estimates.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Direct Call Hotline</div>
                    <a href="tel:+918240740018" className="text-base font-bold text-[#081c4e] hover:text-blue-600 transition">
                      +91 82407 40018
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Instant WhatsApp Chat</div>
                    <a href="https://wa.me/918240740018" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#081c4e] hover:text-emerald-600 transition">
                      +91 82407 40018
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
