import React from 'react';
import ContactForm from '../components/ContactForm';
import FaqAccordion from '../components/FaqAccordion';
import SeoMeta from '../components/SeoMeta';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <SeoMeta 
        title="Contact Our Web Design & Development Team | Flown Developer"
        description="Get in touch with our web development team in Kolkata and Mumbai for custom website consultations, quotations, or maintenance support."
        canonicalUrl="/contact-us/"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Flown Developer",
          "url": "https://flowndeveloper.com/contact-us/",
          "description": "Contact info, address, phone number, and consultation booking for web design and development."
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
              
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#081c4e] mb-2">Office Locations</h3>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Kolkata Headquarters</strong>
                      <span>39, 2nd Floor, Topsia Road, Kolkata - 700039, West Bengal, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                    <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block text-sm">Mumbai Branch Office</strong>
                      <span>Andheri East, Mumbai - 400069, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-4">
                <h3 className="text-xl font-bold text-[#081c4e] mb-2">Immediate Support</h3>
                
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Direct Phone Hotline</span>
                      <a href="tel:+918240740018" className="font-bold text-[#081c4e] text-base hover:text-blue-600 transition">
                        +91 82407 40018
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Instant WhatsApp Chat</span>
                      <a href="https://wa.me/918240740018" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 text-base hover:text-emerald-700 transition">
                        +91 82407 40018
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Email Inquiries</span>
                      <a href="mailto:contact@flowndeveloper.com" className="font-bold text-slate-800 hover:text-blue-600 transition">
                        contact@flowndeveloper.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold uppercase">Working Hours</span>
                      <span className="text-slate-700 font-medium">Mon – Sat: 9:30 AM – 7:30 PM (IST)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-5 rounded-2xl bg-[#081c4e] text-white flex items-center gap-3.5">
                <ShieldCheck className="w-8 h-8 text-cyan-300 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white text-sm">24-Hour Proposal Commitment</div>
                  <div className="text-slate-300">All inquiries receive an itemized proposal with clear milestones within 1 business day.</div>
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
