import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Code, 
  Sparkles, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Clock, 
  HeartHandshake, 
  Globe 
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';

export default function AboutPage() {
  const values = [
    {
      title: 'Obsessive Quality',
      desc: 'We write clean, semantic code that adheres to W3C standards, prioritizes Core Web Vitals, and guarantees high accessibility across all viewports.'
    },
    {
      title: 'Zero Hidden Costs',
      desc: 'All our pricing tiers feature itemized line items. We believe honest partnerships are built on transparent quotations without surprise maintenance fees.'
    },
    {
      title: 'Modern Architecture',
      desc: 'We eschew heavy, sluggish page builders in favor of lightweight PHP backends, PDO database security, and modular React components.'
    },
    {
      title: 'Continuous Accountability',
      desc: 'Our relationship does not terminate at deployment. We back every project with one year of technical support, scheduled backups, and direct phone help.'
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="About Us - Web Design & Development Specialists | Flown Developer"
        description="Learn about our engineering philosophy, design methodology, and commitment to delivering responsive, high-performance websites for growing businesses."
        canonicalUrl="/about-us/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Flown Developer",
          "url": "https://flowndeveloper.com/about-us/",
          "description": "Specialists in website design and full-stack web development."
        }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            About Our Agency
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Dedicated to Crafting Impactful Web Experiences
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are a team of passionate web designers and software engineers dedicated exclusively to website design and web development. We help ambitious companies establish commanding digital presences with fast, responsive, and secure websites.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Story & Vision
              </span>
              <h2 className="text-3xl font-extrabold text-[#081c4e] tracking-tight">
                Engineering Websites That Drive Tangible Business Growth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a straightforward mission: eliminate the complexity, bloat, and broken promises common in web development. Too many businesses were left with sluggish websites they could not update or maintain.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We chose a different path. By focusing strictly on website design and development, we master the fundamentals: sub-second load times, fluid responsiveness across any screen size, secure database foundations, and intuitive content management panels that give owners complete autonomy.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-blue-600">100%</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Focus on Web Craft</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-emerald-600">24/7</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Free Support Helpline</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80" 
                  alt="Team brainstorming web architecture"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-3 border border-blue-100">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#081c4e] tracking-tight mb-4">
              Our Technical & Ethical Commitments
            </h2>
            <p className="text-slate-600 text-base">
              The values that dictate how we architect code, communicate with clients, and support systems long after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#081c4e] mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl font-extrabold text-white">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Contact our engineering team today to review your project scope and receive an itemized proposal.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact-us/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-[#081c4e] font-extrabold text-sm shadow-md transition"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
