import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SeoMeta from '../components/SeoMeta';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Privacy Policy';
  let lastUpdated = 'October 2026';
  let content = null;

  if (path.includes('terms')) {
    title = 'Terms and Conditions';
    content = (
      <>
        <h2>1. Services & Engagement Scope</h2>
        <p>Flown Developer provides professional Website Design, Web Development, E-commerce Store Development, Website Redesign, and ongoing Technical Website Maintenance services. All deliverables, timelines, and milestones are governed by agreed project scopes.</p>
        
        <h2>2. Intellectual Property Rights</h2>
        <p>Upon final settlement of project milestones, complete ownership of custom design tokens, frontend assets, and bespoke application code transfers to the client. Pre-existing frameworks, open-source libraries, and third-party tools retain their respective licenses.</p>

        <h2>3. Payment Terms & Milestones</h2>
        <p>Standard projects typically adhere to a milestone schedule: an initial deposit upon requirement sign-off, a milestone payment following design approval, and the final balance upon successful deployment to cloud hosting.</p>

        <h2>4. Hosting & Domain Registrations</h2>
        <p>Where domain name registration and cloud hosting are included in a plan, they are provided for an initial 12-month period. Annual renewals are subject to the agreed rate (e.g., ₹5,000/year for continued hosting, domain renewal, and security patching).</p>

        <h2>5. Limitation of Liability</h2>
        <p>Flown Developer ensures all web software is tested for security and stability before release. We are not liable for business interruptions caused by unauthorized client code alterations, unapproved third-party plugin installations, or third-party payment gateway downtime.</p>
      </>
    );
  } else if (path.includes('refund')) {
    title = 'Refund and Cancellation Policy';
    content = (
      <>
        <h2>1. Project Deposit Policy</h2>
        <p>Initial project deposits cover initial discovery, wireframing, and architecture planning. Once design work has commenced, initial deposits are non-refundable to cover expended engineering hours.</p>

        <h2>2. Milestone-Based Approvals</h2>
        <p>Projects proceed through formal client approval stages (Wireframing, UI Design, Development, Deployment). Upon formal approval of a milestone, the associated payment is finalized and non-refundable.</p>

        <h2>3. Hosting & Domain Cancellations</h2>
        <p>Domain name registrations are non-refundable once registered with ICANN/registry authorities. Cloud hosting plans may be canceled with 30 days written notice prior to the annual renewal date.</p>

        <h2>4. Defect Rectification</h2>
        <p>In the unlikely event that a deliverable does not conform to agreed specifications, our team provides 30 days of complimentary defect rectification following initial launch.</p>
      </>
    );
  } else {
    // Privacy Policy default
    title = 'Privacy Policy';
    content = (
      <>
        <h2>1. Information We Collect</h2>
        <p>We collect information directly from you when you submit a project inquiry, request a quotation, or communicate via phone or WhatsApp. This includes your name, corporate email address, telephone number, budget range, and project specifications.</p>

        <h2>2. Purpose of Data Processing</h2>
        <p>We process your data exclusively to evaluate your web design and development requirements, generate transparent proposals, manage project milestones, and provide technical customer support.</p>

        <h2>3. Data Protection & Storage</h2>
        <p>All inquiry data is stored in secure relational databases with restricted administrative access. We do not sell, rent, or trade your contact information to third-party marketing brokers.</p>

        <h2>4. Cookies & Analytics</h2>
        <p>Our website may use standard session cookies to remember preferences, validate CSRF security tokens, and analyze aggregated visitor traffic to enhance user experience.</p>

        <h2>5. Contact for Privacy Matters</h2>
        <p>If you have questions regarding data privacy or wish to request data erasure, contact our data compliance officer at: <code>mohitrahangdale67890@gmail.com</code>.</p>
      </>
    );
  }

  return (
    <div>
      <SeoMeta 
        title={`${title} | Flown Developer`}
        description={`Read the official ${title} for Flown Developer. Clear legal terms and transparent policies.`}
        canonicalUrl={path}
      />

      <section className="bg-gradient-to-b from-[#f8faff] to-white py-14 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-700 font-semibold">{title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081c4e] tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: {lastUpdated} • Official Policy Notice
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate prose-blue max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
