import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../services/api';
import { Send, CheckCircle2, AlertCircle, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const websiteTypes = [
    'Business Website',
    'Custom Website Design',
    'Responsive Corporate Portal',
    'E-commerce Online Store',
    'Multi-Vendor Marketplace',
    'WordPress Website Development',
    'Shopify Store Development',
    'Website Redesign Services',
    'Website Maintenance & Support'
  ];

  // Auto-match service parameter if present in query string
  const initialService = serviceParam && websiteTypes.includes(serviceParam)
    ? serviceParam
    : (serviceParam ? 'Custom Website Design' : 'Business Website');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website_type: initialService,
    budget_range: '₹10,000 - ₹25,000',
    project_description: serviceParam ? `I am interested in ${serviceParam}. Please share details and quotation.` : '',
    consent: true
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        website_type: websiteTypes.includes(serviceParam) ? serviceParam : prev.website_type,
        project_description: prev.project_description || `I am interested in ${serviceParam}. Please share details and quotation.`
      }));
    }
  }, [serviceParam]);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.project_description) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please accept the consent terms to proceed.');
      return;
    }

    setLoading(true);

    try {
      const res = await api.submitInquiry(formData);
      setSuccessMsg(res?.message || 'Your inquiry has been submitted successfully! Our team will connect with you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        website_type: 'Business Website',
        budget_range: '₹10,000 - ₹25,000',
        project_description: '',
        consent: true
      });
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while submitting. Please call us directly at +91 82407 40018.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#081c4e] mb-2">
          Start Your Project Conversation
        </h3>
        <p className="text-sm text-slate-600">
          Tell us about your business and goals. We will provide a transparent proposal and timeline within 24 hours.
        </p>
      </div>

      {successMsg && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Inquiry Received!</p>
            <p className="text-xs text-emerald-700 mt-1">{successMsg}</p>
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Action Required</p>
            <p className="text-xs text-rose-700 mt-1">{errorMsg}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Work Email *
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@company.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Phone / WhatsApp Number *
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Website Service Category *
            </label>
            <select 
              name="website_type" 
              value={formData.website_type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition bg-white"
            >
              {websiteTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Target Budget Range
          </label>
          <select 
            name="budget_range" 
            value={formData.budget_range}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition bg-white"
          >
            {budgetRanges.map((b, i) => (
              <option key={i} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Project Description & Requirements *
          </label>
          <textarea 
            name="project_description" 
            rows="4"
            value={formData.project_description}
            onChange={handleChange}
            placeholder="Share details about your business, reference websites you admire, desired timeline, or required features..."
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition resize-y"
          ></textarea>
        </div>

        <div className="flex items-start gap-2.5 pt-1">
          <input 
            type="checkbox" 
            id="consent" 
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 mt-0.5"
          />
          <label htmlFor="consent" className="text-xs text-slate-500 leading-normal">
            I consent to Flown Developer contacting me via phone, email or WhatsApp regarding this project quotation.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span>Transmitting Request...</span>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-500">
            Prefer immediate discussion? Call our direct hotline: <a href="tel:+918240740018" className="text-blue-600 font-bold hover:underline">+91 82407 40018</a>
          </p>
        </div>
      </form>
    </div>
  );
}
