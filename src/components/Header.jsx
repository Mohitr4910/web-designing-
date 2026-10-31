import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Globe,
  Layout,
  Code,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [designDropdown, setDesignDropdown] = useState(false);
  const [devDropdown, setDevDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesignDropdown(false);
    setDevDropdown(false);
  }, [location.pathname]);

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-200">
      {/* Top Bar with hotline and working hours */}
      <div className="bg-[#081c4e] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+918240740018" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 9302770758</span>
            </a>
            <a href="mailto:mohitrahangdale67890@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>mohitrahanghdale67890@gmail.com</span>
            </a>
            <span className="hidden lg:inline text-slate-400">
              Mon – Sat: 9:30 AM – 7:30 PM (IST)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/919302770758" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Kolkata • Mumbai</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-3.5' : 'bg-white/95 backdrop-blur-md py-4'
      } border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#081c4e] block leading-none">
                FLOWN<span className="text-blue-600">DEVELOPER</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">
                Web Design & Development
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-slate-700">
            <Link to="/" className={`hover:text-blue-600 transition ${location.pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}>
              Home
            </Link>
            <Link to="/about-us/" className={`hover:text-blue-600 transition ${location.pathname === '/about-us/' ? 'text-blue-600 font-semibold' : ''}`}>
              About Us
            </Link>

            {/* Website Design Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setDesignDropdown(true)}
              onMouseLeave={() => setDesignDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none">
                <span>Website Design</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {designDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 transition-all animate-fadeIn">
                  <div className="text-[11px] font-bold text-slate-400 px-3 pb-2 uppercase tracking-wider">
                    Design Solutions
                  </div>
                  <Link to="/website-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Layout className="w-4 h-4 text-blue-600" />
                    <span>Custom Website Design</span>
                  </Link>
                  <Link to="/responsive-website-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Smartphone className="w-4 h-4 text-blue-600" />
                    <span>Responsive Website Design</span>
                  </Link>
                  <Link to="/business-website-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Business Website Design</span>
                  </Link>
                  <Link to="/corporate-website-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Corporate Website Design</span>
                  </Link>
                  <Link to="/landing-page-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span>Landing Page Design</span>
                  </Link>
                  <Link to="/custom-website-design/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Layout className="w-4 h-4 text-blue-600" />
                    <span>Bespoke UI/UX Design</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Web Development Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setDevDropdown(true)}
              onMouseLeave={() => setDevDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition focus:outline-none">
                <span>Web Development</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {devDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 transition-all animate-fadeIn">
                  <div className="text-[11px] font-bold text-slate-400 px-3 pb-2 uppercase tracking-wider">
                    Engineering Services
                  </div>
                  <Link to="/web-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span>Full-Stack Web Development</span>
                  </Link>
                  <Link to="/custom-website-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Custom Web Development</span>
                  </Link>
                  <Link to="/business-website-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Business Web Development</span>
                  </Link>
                  <Link to="/ecommerce-website-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Layout className="w-4 h-4 text-blue-600" />
                    <span>E-commerce Web Development</span>
                  </Link>
                  <Link to="/wordpress-website-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span>WordPress Website Development</span>
                  </Link>
                  <Link to="/shopify-website-development/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Shopify Store Development</span>
                  </Link>
                  <Link to="/website-redesign/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <Layout className="w-4 h-4 text-blue-600" />
                    <span>Website Redesign Services</span>
                  </Link>
                  <Link to="/website-maintenance/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition text-[13.5px]">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Website Maintenance & Support</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/pricing/" className={`hover:text-blue-600 transition ${location.pathname === '/pricing/' ? 'text-blue-600 font-semibold' : ''}`}>
              Pricing
            </Link>
            <Link to="/portfolio/" className={`hover:text-blue-600 transition ${location.pathname === '/portfolio/' ? 'text-blue-600 font-semibold' : ''}`}>
              Portfolio
            </Link>
            <Link to="/blog/" className={`hover:text-blue-600 transition ${location.pathname.startsWith('/blog') ? 'text-blue-600 font-semibold' : ''}`}>
              Blog
            </Link>
            <Link to="/contact-us/" className={`hover:text-blue-600 transition ${location.pathname === '/contact-us/' ? 'text-blue-600 font-semibold' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact-us/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm shadow-blue-500/30 flex items-center gap-2 transition hover:-translate-y-0.5"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <Link to="/" className="block py-2 text-slate-800 font-medium">Home</Link>
            <Link to="/about-us/" className="block py-2 text-slate-800 font-medium">About Us</Link>
            <Link to="/services/" className="block py-2 text-slate-800 font-medium">All Services</Link>

            <div className="border-t border-slate-100 pt-3">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Website Design
              </span>
              <div className="pl-3 space-y-2 text-sm text-slate-600">
                <Link to="/website-design/" className="block py-1">Custom Website Design</Link>
                <Link to="/responsive-website-design/" className="block py-1">Responsive Website Design</Link>
                <Link to="/business-website-design/" className="block py-1">Business Website Design</Link>
                <Link to="/corporate-website-design/" className="block py-1">Corporate Website Design</Link>
                <Link to="/landing-page-design/" className="block py-1">Landing Page Design</Link>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Web Development
              </span>
              <div className="pl-3 space-y-2 text-sm text-slate-600">
                <Link to="/web-development/" className="block py-1">Full-Stack Development</Link>
                <Link to="/custom-website-development/" className="block py-1">Custom Web Development</Link>
                <Link to="/business-website-development/" className="block py-1">Business Web Development</Link>
                <Link to="/ecommerce-website-development/" className="block py-1">E-commerce Development</Link>
                <Link to="/wordpress-website-development/" className="block py-1">WordPress Development</Link>
                <Link to="/shopify-website-development/" className="block py-1">Shopify Development</Link>
                <Link to="/website-redesign/" className="block py-1">Website Redesign</Link>
                <Link to="/website-maintenance/" className="block py-1">Website Maintenance</Link>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2">
              <Link to="/pricing/" className="block py-1 text-slate-800 font-medium">Pricing Plans</Link>
              <Link to="/portfolio/" className="block py-1 text-slate-800 font-medium">Portfolio Showcase</Link>
              <Link to="/blog/" className="block py-1 text-slate-800 font-medium">Engineering Blog</Link>
              <Link to="/contact-us/" className="block py-1 text-slate-800 font-medium">Contact Us</Link>
            </div>

            <div className="pt-4">
              <Link 
                to="/contact-us/" 
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
