import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/SeoMeta';
import { CheckCircle2, Phone, Home, MessageSquare } from 'lucide-react';

export default function ContactSuccessPage() {
  return (
    <div className="py-24 md:py-32 bg-white text-center">
      <SeoMeta 
        title="Inquiry Received Successfully | Flown Developer"
        description="Thank you for submitting your project inquiry. Our engineering team will review it and connect within 24 hours."
      />

      <div className="max-w-lg mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-extrabold text-[#081c4e]">
          Project Inquiry Received!
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Thank you for reaching out to Flown Developer. Our technical lead will review your specifications, evaluate architecture options, and prepare an itemized proposal within <strong>24 business hours</strong>.
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <p className="font-bold text-slate-800">Need immediate answers?</p>
          <p>You can also reach our engineering hotline directly:</p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <a href="tel:+918240740018" className="font-bold text-blue-600 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 82407 40018</span>
            </a>
            <a href="https://wa.me/918240740018" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
