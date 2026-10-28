import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ initialFaqs = null, category = null }) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const [loading, setLoading] = useState(!initialFaqs);

  useEffect(() => {
    if (!initialFaqs) {
      api.getFaqs(category).then(res => {
        setFaqs(res);
        setLoading(false);
      }).catch(err => {
        console.error('Failed to load FAQs:', err);
        setLoading(false);
      });
    }
  }, [initialFaqs, category]);

  if (loading || !faqs || faqs.length === 0) {
    return null;
  }

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={faq.id || idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'bg-blue-50/40 border-blue-200 shadow-sm' 
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
            >
              <span className={`text-base font-bold ${isOpen ? 'text-blue-700' : 'text-[#081c4e]'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-blue-100/60">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
