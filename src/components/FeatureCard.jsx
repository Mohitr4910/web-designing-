import React from 'react';
import { 
  Palette, 
  Headphones, 
  Code2, 
  Smartphone, 
  FileText, 
  Sparkles 
} from 'lucide-react';

export default function FeatureCard({ card }) {
  const { title, badge_note, description, icon_type, pastel_color } = card;

  // Icon mapping
  const renderIcon = () => {
    switch (icon_type) {
      case 'web-design':
        return <Palette className="w-8 h-8 text-purple-600" />;
      case 'support':
        return <Headphones className="w-8 h-8 text-sky-600" />;
      case 'development':
        return <Code2 className="w-8 h-8 text-amber-600" />;
      case 'responsive':
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case 'content':
        return <FileText className="w-8 h-8 text-rose-600" />;
      case 'logo':
        return <Sparkles className="w-8 h-8 text-indigo-600" />;
      default:
        return <Palette className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center relative group">
      
      {/* Centered Pastel Illustration Shape */}
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner transition-transform group-hover:scale-110 duration-300 ${pastel_color || 'pastel-purple'}`}>
        {renderIcon()}
      </div>

      {/* Card Title */}
      <h3 className="text-xl font-bold text-[#081c4e] mb-1.5 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* Optional Badge Note (specifically "(Phone/Chat/Email)" for 24*7 Support) */}
      {badge_note && (
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2 inline-block">
          {badge_note}
        </span>
      )}

      {/* Description */}
      <p className="text-[14px] text-slate-600 leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
}
