import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Lock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081c4e] text-slate-300 pt-16 pb-10 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-700/60">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white block">
                mohit-<span className="text-blue-400">webdesigning</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design engaging, responsive websites and develop reliable digital experiences that help businesses build a strong online presence. Dedicated exclusively to Website Design and Web Development.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+919302770758" className="hover:text-white transition font-medium">+91 93027 70758</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:mohitrahangdale67890@gmail.com" className="hover:text-white transition">mohitrahangdale67890@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Website Design Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Website Design
            </h4>
            <ul className="space-y-2 text-[13.5px]">
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Custom Website Design
                </Link>
              </li>
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Responsive Web Design
                </Link>
              </li>
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Business Website Design
                </Link>
              </li>
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Corporate Website Design
                </Link>
              </li>
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Landing Page Design
                </Link>
              </li>
              <li>
                <Link to="/services#website-design" className="hover:text-blue-400 transition flex items-center gap-1">
                  Bespoke UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Web Development Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Web Development
            </h4>
            <ul className="space-y-2 text-[13.5px]">
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  Business Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-development" className="hover:text-blue-400 transition flex items-center gap-1">
                  Website Maintenance & Redesign
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[13.5px]">
              <li><Link to="/services/" className="hover:text-blue-400 transition">All 15 Services</Link></li>
              <li><Link to="/pricing/" className="hover:text-blue-400 transition">Pricing Packages</Link></li>
              <li><Link to="/portfolio/" className="hover:text-blue-400 transition">Client Portfolio</Link></li>
              <li><Link to="/about-us/" className="hover:text-blue-400 transition">About Our Agency</Link></li>
              <li><Link to="/blog/" className="hover:text-blue-400 transition">Engineering Blog</Link></li>
              <li><Link to="/contact-us/" className="hover:text-blue-400 transition">Contact & Support</Link></li>
              <li><Link to="/privacy-policy/" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions/" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/refund-cancellation-policy/" className="hover:text-blue-400 transition">Refund & Cancellation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Flown Developer (Flown Web Solutions). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>SSL 256-Bit Encrypted</span>
            </span>
            <span>•</span>
            <a 
              href="http://localhost:8000/admin/login.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Panel</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
