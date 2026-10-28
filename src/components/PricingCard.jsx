import React from 'react';
import { Check, Phone, ArrowRight, Laptop, Server, Cpu } from 'lucide-react';

export default function PricingCard({ plan, onQuoteClick }) {
  const {
    id,
    title,
    badge_label,
    original_price,
    offer_price,
    is_custom_quote,
    gst_percentage = 18,
    cta_label = 'Call Now',
    cta_phone = '+918240740018',
    is_featured,
    features = [],
    tax_calculation
  } = plan;

  const isFeatured = Boolean(is_featured);

  // Formatted tax string
  let taxNote = '';
  if (!is_custom_quote && offer_price) {
    const base = Number(offer_price);
    const gstRate = Number(gst_percentage || 18);
    const taxAmt = (base * (gstRate / 100));
    const total = base + taxAmt;
    taxNote = `+ ${gstRate}% GST (₹${taxAmt.toLocaleString('en-IN', { maximumFractionDigits: 2 })}) = ₹${total.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Total`;
  }

  // Illustration based on plan
  const renderIllustration = () => {
    if (isFeatured) {
      return (
        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 mx-auto my-3">
          <Server className="w-8 h-8" />
        </div>
      );
    }
    if (is_custom_quote) {
      return (
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-600 mx-auto my-3">
          <Cpu className="w-8 h-8" />
        </div>
      );
    }
    return (
      <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto my-3">
        <Laptop className="w-8 h-8" />
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-full rounded-2xl transition-all duration-300 relative ${
      isFeatured 
        ? 'pricing-card-navy text-white -translate-y-2' 
        : 'pricing-card-white text-slate-800'
    }`}>
      
      {/* Top Header & Gradient Pill */}
      <div className="p-6 text-center border-b border-slate-100/10">
        <div className="mb-3">
          <span className="gradient-badge">
            {badge_label || title}
          </span>
        </div>

        <h3 className={`text-xl font-bold tracking-tight mb-1 ${isFeatured ? 'text-white' : 'text-[#081c4e]'}`}>
          {title}
        </h3>

        {/* Thematic Illustration */}
        {renderIllustration()}

        {/* Price Display */}
        <div className="mt-4 mb-2">
          {is_custom_quote ? (
            <div className="py-2">
              <span className={`text-3xl font-extrabold tracking-tight ${isFeatured ? 'text-cyan-300' : 'text-blue-600'}`}>
                Custom Quote
              </span>
              <p className={`text-xs mt-1 ${isFeatured ? 'text-blue-200' : 'text-slate-500'}`}>
                Tailored scope & enterprise architecture
              </p>
            </div>
          ) : (
            <div>
              {original_price && (
                <div className={`text-sm line-through ${isFeatured ? 'text-blue-300/80' : 'text-slate-400'}`}>
                  ₹{Number(original_price).toLocaleString('en-IN')}
                </div>
              )}
              <div className="flex items-baseline justify-center gap-1">
                <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isFeatured ? 'text-white' : 'text-[#081c4e]'}`}>
                  ₹{Number(offer_price).toLocaleString('en-IN')}
                </span>
                <span className={`text-xs font-semibold ${isFeatured ? 'text-cyan-300' : 'text-blue-600'}`}>
                  *
                </span>
              </div>
              {taxNote && (
                <p className={`text-[11.5px] mt-1 font-medium ${isFeatured ? 'text-blue-200' : 'text-slate-500'}`}>
                  {taxNote}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Primary Action Button (Call Now / Request a Quote) */}
        <div className="mt-5">
          {is_custom_quote ? (
            <button
              onClick={() => onQuoteClick ? onQuoteClick(plan) : window.location.href = '/contact-us/'}
              className="w-full btn-call-now cursor-pointer"
            >
              <span>{cta_label || 'Request a Quote'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <a 
              href={`tel:${cta_phone || '+918240740018'}`}
              className="w-full btn-call-now"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{cta_label || 'Call Now'}</span>
            </a>
          )}
        </div>
      </div>

      {/* High-Density Vertical Feature List (Never clipped) */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <ul className="space-y-3 text-[13px]">
          {features && features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 pb-2.5 feature-item-border">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isFeatured ? 'bg-cyan-400/20 text-cyan-300' : 'bg-blue-100 text-blue-600'
              }`}>
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className={`leading-snug ${isFeatured ? 'text-slate-200' : 'text-slate-700'}`}>
                {feat.feature_text}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom CTA & Note */}
        <div className="mt-6 pt-4 text-center border-t border-slate-100/10">
          <span className={`text-[11px] block font-medium ${isFeatured ? 'text-blue-300' : 'text-slate-500'}`}>
            Direct Support: <a href={`tel:${cta_phone}`} className="underline hover:text-white">{cta_phone}</a>
          </span>
        </div>
      </div>

      {/* Decorative Wave SVG along bottom */}
      <div className="w-full overflow-hidden leading-none h-6 pointer-events-none opacity-40">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0.00,49.98 C149.99,150.00 349.89,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            fill={isFeatured ? '#1e3a8a' : '#bfdbfe'}
          ></path>
        </svg>
      </div>

    </div>
  );
}
