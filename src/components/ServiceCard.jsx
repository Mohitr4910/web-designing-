import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layout, 
  Code, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  ShoppingBag, 
  FileText, 
  RefreshCw, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

export default function ServiceCard({ service }) {
  const { slug, title, short_description, icon_svg, category, deliverables = [] } = service;

  const renderIcon = () => {
    switch (icon_svg) {
      case 'layout': return <Layout className="w-6 h-6 text-blue-600" />;
      case 'smartphone': return <Smartphone className="w-6 h-6 text-cyan-600" />;
      case 'code': return <Code className="w-6 h-6 text-indigo-600" />;
      case 'cpu': return <Cpu className="w-6 h-6 text-purple-600" />;
      case 'shopping-bag': return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      case 'refresh-cw': return <RefreshCw className="w-6 h-6 text-emerald-600" />;
      case 'tool': return <Wrench className="w-6 h-6 text-rose-600" />;
      default: return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-blue-50/80 border border-blue-100/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {renderIcon()}
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {category === 'website_design' ? 'Website Design' : 'Web Development'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#081c4e] mb-2.5 group-hover:text-blue-600 transition-colors">
          <Link to={`/${slug}/`}>
            {title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {short_description}
        </p>

        {/* Key Deliverables Snapshot */}
        {deliverables && deliverables.length > 0 && (
          <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
            {deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Working Link */}
      <div className="pt-4 border-t border-slate-100">
        <Link 
          to={`/${slug}/`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition"
        >
          <span>Explore Service Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
