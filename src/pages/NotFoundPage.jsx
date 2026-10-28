import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/SeoMeta';
import { Home, Phone, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-24 md:py-32 bg-white text-center">
      <SeoMeta 
        title="Page Not Found (404) | Flown Developer"
        description="The requested page could not be located on Flown Developer."
      />
      
      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="text-7xl font-extrabold text-blue-600 font-mono tracking-tighter">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#081c4e]">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find the right website solution.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link 
            to="/pricing/" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition"
          >
            View Pricing Packages
          </Link>
        </div>
      </div>
    </div>
  );
}
