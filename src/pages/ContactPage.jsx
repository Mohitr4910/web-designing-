import React from 'react';
import ContactForm from '../components/ContactForm';
import FaqAccordion from '../components/FaqAccordion';
import SeoMeta from '../components/SeoMeta';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <SeoMeta 
        title="Contact Our Web Design & Development Team | Flown Developer"
        description="Get in touch with our web development team for custom website consultations, quotations, or maintenance support."
        canonicalUrl="/contact-us/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Flown Developer",
          "url": "https://flowndeveloper.com/contact-us/",
          "description": "Contact info, phone number, and consultation booking for web design and development."
        }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#f8faff] to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            Let's Build Your High-Performance Website
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a project in mind, need an existing site redesigned, or require ongoing technical maintenance? Connect with our development team for immediate assistance.
          </p>
        </div>
      </section>

      {/* Main Contact Grid & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-7 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full inline-block mb-2">
                    Direct Contact
                  </span>
                  <h3 className="text-xl font-bold text-[#081c4e]">Get in Touch Directly</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Connect with our team for consultations, quotations, and active project assistance.
                  </p>
                </div>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-blue-100/80 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Direct Phone Hotline</span>
                      <a href="tel:+919302770758" className="font-bold text-[#081c4e] text-base hover:text-blue-600 transition">
                        +91 93027 70758
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-blue-100/80 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Instant WhatsApp Chat</span>
                      <a href="https://wa.me/919302770758" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 text-base hover:text-emerald-700 transition">
                        +91 93027 70758
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-blue-100/80 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Email Inquiries</span>
                      <a href="mailto:mohitrahangdale67890@gmail.com" className="font-bold text-slate-800 hover:text-blue-600 transition break-all text-xs sm:text-sm">
                        mohitrahangdale67890@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-[#081c4e] text-white space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-cyan-300 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white text-sm">24-Hour Proposal Commitment</div>
                    <div className="text-xs text-slate-300">Fast response with clear scope and pricing.</div>
                  </div>
                </div>
                <div className="border-t border-blue-900/60 pt-3 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Itemized pricing with zero hidden costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Free consultation & architecture guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1 Year of complete technical support included</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQs on Contact Page */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#081c4e] tracking-tight mb-3">
              Common Inquiries & Next Steps
            </h2>
            <p className="text-slate-600 text-sm">
              Quick answers about project kickoffs, consultations, and payment security.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
