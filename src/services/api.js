/**
 * STATIC DATA SERVICE
 *
 * Is project me ab koi backend / PHP / MySQL nahi hai.
 *  - Services, pricing, FAQ, portfolio, testimonials: neeche is file me hi static data hai
 *  - Blog: src/blog/posts/*.jsx files se aata hai (src/blog/registry.js dekho)
 *  - Contact form: Web3Forms API se seedha aapke email par jata hai
 *
 * Saare get* functions SYNCHRONOUS hain (promise nahi) taaki server-side rendering / prerender me
 * data render ke time hi mil jaye. Sirf submitInquiry async hai (network call).
 */
import { listServices, getService } from './registry';
import { listPosts, getPost, getTaxonomies } from '../blog/registry';
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT, SITE_NAME } from '../config/site';

export const api = {
  getSettings: () => {
    return {
      settings: {
        site_name: 'mohit-webdesigning',
        site_tagline: 'Creative Website Design and Professional Web Development',
        contact_phone: '+91 93027 70758',
        contact_whatsapp: '+91 93027 70758',
        contact_email: 'mohitrahangdale67890@gmail.com',
        contact_address: '',
        branch_address: '',
        business_hours: '',
        gst_percentage: '18',
        hosting_renewal_default: '5000'
      },
      menus: {}
    };
  },

  getKeyFeatures: () => {
    return {
      section: {
        section_title: 'Key Features',
        section_description: 'We are a One-Stop Solution for delivering the best web design and development services. We render customized and affordable web design facilities to suit your requirements. Choose the best plans for building a responsive web design according to your needs.'
      },
      cards: [
        {
          id: 1,
          title: 'Web Design',
          badge_note: null,
          description: 'We provide modern, creative, and intuitive user interfaces customized to reflect your corporate identity and engage visitors from their very first interaction.',
          icon_type: 'web-design',
          pastel_color: 'pastel-purple',
          sort_order: 1
        },
        {
          id: 2,
          title: '24*7 Free Support',
          badge_note: '(Phone/Chat/Email)',
          description: 'Round-the-clock technical assistance via dedicated phone helpline, instant live chat, and priority ticketing to guarantee business continuity.',
          icon_type: 'support',
          pastel_color: 'pastel-cyan',
          sort_order: 2
        },
        {
          id: 3,
          title: 'Web Development',
          badge_note: null,
          description: 'Robust full-stack web development engineered using modern PHP, MySQL, and modular React components for optimal speed, security, and scalability.',
          icon_type: 'development',
          pastel_color: 'pastel-amber',
          sort_order: 3
        },
        {
          id: 4,
          title: '100% Responsive websites',
          badge_note: null,
          description: 'Fluid grid layouts and responsive breakpoints engineered meticulously to render flawlessly across desktops, tablets, laptops, and smartphones.',
          icon_type: 'responsive',
          pastel_color: 'pastel-emerald',
          sort_order: 4
        },
        {
          id: 5,
          title: 'Content Writing',
          badge_note: null,
          description: 'Persuasive, conversion-driven website copy crafted specifically to articulate your services, strengthen trust signals, and guide prospective clients.',
          icon_type: 'content',
          pastel_color: 'pastel-rose',
          sort_order: 5
        },
        {
          id: 6,
          title: 'Logo Designs',
          badge_note: null,
          description: 'Distinctive vector brand identity and logo marks created to elevate your digital presence and build lasting recognition across the web.',
          icon_type: 'logo',
          pastel_color: 'pastel-indigo',
          sort_order: 6
        }
      ]
    };
  },

  getPricing: (category) => {
    const allPlans = [
      {
        id: 1,
        category: 'website',
        plan_code: 'website_standard',
        title: 'Standard Plan',
        badge_label: 'STANDARD WEBSITE',
        original_price: 10000,
        offer_price: 7999,
        is_custom_quote: 0,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Call Now',
        cta_phone: '+919302770758',
        is_featured: 0,
        tax_calculation: {
          base_price: 7999,
          gst_rate_percent: 18,
          gst_amount: 1439.82,
          total_price: 9438.82,
          // note: '+ 18% GST (₹1,439.82) = ₹9,438.82 Incl. Tax'
        },
        features: [
          { feature_text: '5 Website Pages' },
          { feature_text: '1 Year Free Domain Name (.com / .in)' },
          { feature_text: '1 Year Free Cloud Hosting' },
          { feature_text: 'Dynamic Website with Premium Design' },
          { feature_text: 'Unlimited Image & Video Uploads' },
          { feature_text: 'Free SSL Security Certificate' },
          { feature_text: '5 Free Professional Business Email IDs' },
          { feature_text: 'Technically SEO-Friendly Website Structure' },
          { feature_text: '100% Mobile & Tablet Responsive Layout' },

          { feature_text: 'Social Media Links & Integration' },
          { feature_text: 'Click-to-Call Phone Integration' },
          { feature_text: 'Direct WhatsApp Chat Button' },
          { feature_text: 'Interactive Inbound Inquiry Form' },
          { feature_text: '1 Year of Technical Support & Backups with charges' },
          { feature_text: 'Annual Hosting Renewal @ ₹5,000/year' }
        ]
      },
      {
        id: 2,
        category: 'website',
        plan_code: 'website_premium',
        title: 'Premium Plan',
        badge_label: 'PREMIUM WEBSITE',
        original_price: 30000,
        offer_price: 13999,
        is_custom_quote: 0,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Call Now',
        cta_phone: '+919302770758',
        is_featured: 1,
        tax_calculation: {
          base_price: 13999,
          gst_rate_percent: 18,
          gst_amount: 2519.82,
          total_price: 16518.82,
          // note: '+ 18% GST (₹2,519.82) = ₹16,518.82 Incl. Tax'
        },
        features: [
          { feature_text: '12 Website Pages' },
          { feature_text: '1 Year Free Domain Name (.com / .in)' },
          { feature_text: '1 Year Free High-Speed Cloud Hosting' },
          { feature_text: 'Dynamic Website with Custom UI/UX Design' },
          { feature_text: 'Full Admin Access & CMS Dashboard' },
          { feature_text: 'Google Search Console Setup & Verification' },
          { feature_text: 'Unlimited Image & Video Uploads' },
          { feature_text: 'Free SSL Security Certificate (HTTPS)' },
          // { feature_text: '10 Free Professional Business Email IDs' },
          { feature_text: 'Technically SEO-Friendly Website Structure' },
          { feature_text: '100% Fluid Mobile & Tablet Responsive' },
          // { feature_text: 'Live Chat Integration' },
          { feature_text: 'Payment Gateway Integration' },
          { feature_text: 'Social Media Integration' },
          { feature_text: 'Click-to-Call Phone Integration' },
          { feature_text: 'Direct WhatsApp Chat Button' },
          { feature_text: 'Interactive Lead Generation Inquiry Form' },
          // { feature_text: 'WooCommerce / Product Catalog Features' },
          { feature_text: '1 Year Priority Technical Support' },
          { feature_text: 'Annual Hosting Renewal @ ₹5,000/year' }
        ]
      },
      {
        id: 3,
        category: 'website',
        plan_code: 'website_custom',
        title: 'Custom Plan',
        badge_label: 'CUSTOM SOLUTION',
        original_price: null,
        offer_price: null,
        is_custom_quote: 1,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Request a Quote',
        cta_phone: '+919302770758',
        is_featured: 0,
        tax_calculation: null,
        features: [
          { feature_text: 'Website Pages According to Requirements' },
          { feature_text: '1 Year Domain Name (Subject to Availability)' },
          { feature_text: 'Enterprise High-Performance Cloud Hosting' },
          { feature_text: 'Dynamic Website Engineered to Specification' },
          { feature_text: 'Full Admin Access & Role-Based Permissions' },
          { feature_text: 'Google Search Console Setup & Sitemap' },
          { feature_text: 'Free Wildcard SSL Security Certificate' },
          { feature_text: 'Configurable Professional Email Accounts' },
          { feature_text: 'Technically SEO-Friendly Architecture' },
          { feature_text: '100% Responsive Adaptive Breakpoints' },
          { feature_text: 'Live Chat Integration (Custom Provider)' },
          { feature_text: 'Payment Gateway Integration' },
          { feature_text: 'Social Media Links & Feed Integration' },
          { feature_text: 'Click-to-Call & WhatsApp Connect' },
          { feature_text: 'Custom Multi-Step Inquiry & Booking Forms' },
          { feature_text: 'WooCommerce or Custom Product Features' },
          { feature_text: 'Dedicated SLA & Technical Support' },
          { feature_text: 'Configurable Hosting Renewal Terms' }
        ]
      },
      {
        id: 4,
        category: 'ecommerce',
        plan_code: 'ecom_premium',
        title: 'Premium Design E-commerce',
        badge_label: 'PREMIUM E-COMMERCE',
        original_price: 30000,
        offer_price: 21999,
        is_custom_quote: 0,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Call Now',
        cta_phone: '+919302770758',
        is_featured: 0,
        tax_calculation: {
          base_price: 21999,
          gst_rate_percent: 18,
          gst_amount: 3959.82,
          total_price: 25958.82,
          note: '+ 18% GST (₹3,959.82) = ₹25,958.82 Incl. Tax'
        },
        features: [
          { feature_text: '30 Website Pages' },
          { feature_text: '1 Year Free Domain Name (.com / .in)' },
          { feature_text: '1 Year Free Cloud Hosting' },
          { feature_text: 'Up to 20 Product Categories' },
          { feature_text: '30 Product Listings Included in Setup' },
          { feature_text: 'Dynamic Website with Premium E-commerce UI' },
          { feature_text: 'Admin Access & Product Inventory Manager' },
          { feature_text: 'Google Search Console Setup' },
          { feature_text: 'Unlimited Image & Video Upload Capability' },
          { feature_text: 'Free SSL Security Certificate' },
          { feature_text: '10 Free Business Email Accounts' },
          { feature_text: 'Technically SEO-Friendly Product Catalog' },
          { feature_text: '100% Mobile & Tablet Responsive' },
          { feature_text: 'Live Chat Integration' },
          { feature_text: 'Payment Gateway (UPI, Cards, NetBanking)' },
          { feature_text: 'Social Media Links & Share Buttons' },
          { feature_text: 'Click-to-Call & WhatsApp Checkout Button' },
          { feature_text: 'Product Variation Features (Size, Color)' },
          { feature_text: 'Automated Invoice & Bill Generation' },
          { feature_text: 'Customer Wishlist System' },
          { feature_text: 'Instant Order Notification Emails' },
          { feature_text: 'OTP Verification Setup (SMS Gateway Ready)' },
          { feature_text: '1 Year Complete Technical Support' },
          { feature_text: 'Annual Hosting Renewal @ ₹5,000/year' }
        ]
      },
      {
        id: 5,
        category: 'ecommerce',
        plan_code: 'ecom_multivendor',
        title: 'Multi-vendor Business & E-commerce',
        badge_label: 'MULTI-VENDOR E-COMMERCE',
        original_price: 60000,
        offer_price: 50000,
        is_custom_quote: 0,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Call Now',
        cta_phone: '+919302770758',
        is_featured: 1,
        tax_calculation: {
          base_price: 50000,
          gst_rate_percent: 18,
          gst_amount: 9000.00,
          total_price: 59000.00,
          note: '+ 18% GST (₹9,000.00) = ₹59,000.00 Incl. Tax'
        },
        features: [
          { feature_text: '40 Website Pages' },
          { feature_text: '1 Year Free Domain Name (.com / .in)' },
          { feature_text: '1 Year High-Speed Cloud Hosting' },
          { feature_text: 'Up to 50 Product Categories' },
          { feature_text: '30 Product Listings Setup by Team' },
          { feature_text: 'Multi-vendor Marketplace Architecture' },
          { feature_text: 'Separate Vendor Registration & Portals' },
          { feature_text: 'Comprehensive Super Admin Dashboard' },
          { feature_text: 'Google Search Console Setup & XML Indexing' },
          { feature_text: 'Unlimited Image & Media Upload Capability' },
          { feature_text: 'Free SSL Security Certificate' },
          { feature_text: '10 Free Business Email Accounts' },
          { feature_text: 'Technically SEO-Friendly Schema' },
          { feature_text: '100% Fluid Mobile Responsive Store' },
          { feature_text: 'Live Chat Support Integration' },
          { feature_text: 'Multi-Vendor Split Payment Gateway' },
          { feature_text: 'Social Media Links & Store Sharing' },
          { feature_text: 'Click-to-Call & WhatsApp Customer Help' },
          { feature_text: 'Automated Invoicing & Tax Splitting' },
          { feature_text: 'Customer Wishlist & Review System' },
          { feature_text: 'Instant Order Notifications (SMS/Email)' },
          { feature_text: 'OTP Verification for Login' },
          { feature_text: 'Vendor Commission & Payout Management' },
          { feature_text: '1 Year Dedicated Technical Support' },
          { feature_text: 'Annual Hosting Renewal @ ₹5,000/year' }
        ]
      },
      {
        id: 6,
        category: 'ecommerce',
        plan_code: 'ecom_custom',
        title: 'Custom Multi-vendor E-commerce',
        badge_label: 'CUSTOM MULTI-VENDOR',
        original_price: null,
        offer_price: null,
        is_custom_quote: 1,
        gst_percentage: 18,
        renewal_fee: 5000,
        cta_label: 'Request a Quote',
        cta_phone: '+919302770758',
        is_featured: 0,
        tax_calculation: null,
        features: [
          { feature_text: 'Website Pages According to Requirements' },
          { feature_text: 'Custom Multi-vendor Marketplace Architecture' },
          { feature_text: 'Tailored Vendor Onboarding & Commission' },
          { feature_text: 'Advanced Product Variations & Attribute Matrices' },
          { feature_text: 'Customized Super Admin & Vendor Portals' },
          { feature_text: 'Custom Payment Gateway & Escrow Integration' },
          { feature_text: 'Automated Dynamic PDF Invoicing & GST Reports' },
          { feature_text: 'Customer Wishlist, Cart & Real-Time Tracking' },
          { feature_text: 'Custom SMS & WhatsApp OTP Verification' },
          { feature_text: 'Instant Order Alerts for Vendors & Buyers' },
          { feature_text: '100% Responsive Bespoke UI/UX Experience' },
          { feature_text: 'Enterprise SSL & Data Encryption Protocols' },
          { feature_text: 'Technical SEO Implementation & Schema' },
          { feature_text: 'Custom API Integrations (ERP/Logistics)' },
          { feature_text: 'Dedicated SLA & Continuous Support' }
        ]
      }
    ];

    return category ? allPlans.filter(p => p.category === category) : allPlans;
  },

  // Services ab src/services/items/*.jsx se auto aati hain (src/services/registry.js dekho)
  getServices: (category) => listServices(category),

  getServiceBySlug: (slug) => {
    const s = getService(slug);
    if (s) return s;
    throw new Error('Service not found');
  },

  getPortfolio: (category) => {
    return [
      {
        id: 1, title: 'Mathura Mithai Wala — Cinematic Sweet Shop Website', slug: 'mathura-mithai-wala', category: 'business',
        short_description: 'A premium scroll-driven cinematic website for an Indian mithai shop, with a frame-by-frame hero animation, a full sweets menu, a build-your-own gift box and WhatsApp ordering.',
        featured_image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
        technologies: ['React', 'Vite', 'GSAP', 'Lenis', 'CSS3'],
        demo_url: 'https://mathura-mithai.vercel.app/', is_sample_badge: 1
      },
      {
        id: 2, title: 'LuxeCart Boutique E-commerce', slug: 'luxecart-ecommerce', category: 'ecommerce',
        short_description: 'A modern luxury retail storefront featuring instant filtering, dynamic product variations, Razorpay payment gateway, and automated invoices.',
        featured_image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
        technologies: ['React', 'PHP', 'MySQL', 'Razorpay', 'Tailwind CSS'],
        demo_url: 'https://example.com/luxecart-demo', is_sample_badge: 1
      },
      {
        id: 3, title: 'TechSphere SaaS Landing Page', slug: 'techsphere-saas-platform', category: 'website_design',
        short_description: 'A conversion-optimized product landing page with interactive pricing calculators, feature comparisons, and fluid mobile micro-interactions.',
        featured_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        technologies: ['Figma', 'React', 'Framer Motion', 'CSS3'],
        demo_url: 'https://example.com/techsphere-demo', is_sample_badge: 1
      }
    ];
  },

  getTestimonials: () => {
    return [
      {
        id: 1, client_name: 'Rahul Banerjee', company_name: 'FinServe Solutions, Kolkata',
        review_text: 'Mohit Web Designing completely redesigned our corporate financial portal. The new layout is intuitive, lightning fast on mobile, and has directly contributed to a 35% increase in online inquiries.',
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
      },
      {
        id: 2, client_name: 'Pooja Sharma', company_name: 'Aura Retail Lifestyle, Mumbai',
        review_text: 'Our multi-vendor e-commerce store was built on time and within our budget. The admin dashboard makes managing 500+ products and orders remarkably straightforward.',
        avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
      },
      {
        id: 3, client_name: 'Anand Kulkarni', company_name: 'Precision Engineering Works, Pune',
        review_text: 'We were struggling with an outdated, sluggish website that did not render on smartphones. Mohit Web Designing rebuilt everything from the ground up. Our clients consistently praise how easy it is to find technical specifications now.',
        avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
      }
    ];
  },

  getFaqs: (category) => {
    return [
      {
        id: 1, question: 'What services does your company specialize in?',
        answer: 'We specialize exclusively in Website Design and Website Development services, including custom responsive website design, business and corporate website development, e-commerce stores, WordPress and Shopify development, website redesigns, and ongoing technical maintenance.'
      },
      {
        id: 2, question: 'How long does it take to design and develop a website?',
        answer: 'A standard 5-page business website typically takes 7 to 10 business days from requirement sign-off to deployment. Comprehensive e-commerce stores or custom multi-vendor platforms generally take between 3 to 5 weeks depending on custom integrations.'
      },
      {
        id: 3, question: 'Are there any hidden costs beyond the displayed pricing plans?',
        answer: 'No. Our pricing plans clearly outline domain, cloud hosting, SSL, email accounts, and technical support. Tax is calculated transparently as 18% GST. The annual renewal fee is fixed and explicitly specified (₹5,000/year for hosting, domain renewal, and continuous security updates).'
      },
      {
        id: 4, question: 'Will our website work seamlessly on smartphones and tablets?',
        answer: 'Absolutely. Every website we engineer is 100% responsive. We test across actual iPhone, iPad, Android, laptop, and 4K desktop screens using fluid grids and modern CSS breakpoints to ensure flawless usability.'
      },
      {
        id: 5, question: 'Do we get full administrative access to update our website content?',
        answer: 'Yes. Every website we build includes a secure, user-friendly CMS admin panel. You can easily modify page headlines, upload new images, update service descriptions, publish blog posts, and review customer inquiries without touching any code.'
      }
    ];
  },

  // ---------- BLOG (src/blog/posts/*.jsx se) ----------
  getPosts: (params = {}) => listPosts(params),

  getPostBySlug: (slug) => {
    return getPost(slug); // null agar post na mile
  },

  getBlogTaxonomies: () => getTaxonomies(),

  // ---------- CONTACT FORM -> Web3Forms -> aapka email ----------
  submitInquiry: async (data) => {
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith('PASTE_')) {
      throw new Error('Form abhi configure nahi hai (Web3Forms access key missing). Please call us directly at +91 93027 70758.');
    }

    // consent sirf frontend validation ke liye hai, email me bhejne ki zarurat nahi
    const { consent, ...fields } = data;

    let res;
    try {
      res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Website Inquiry - ${fields.website_type || 'Project'} (${fields.name || 'Visitor'})`,
          from_name: SITE_NAME,
          replyto: fields.email,
          botcheck: '', // spam honeypot, hamesha khali
          ...fields
        })
      });
    } catch {
      throw new Error('Network error. Please check your internet and try again, or call us at +91 93027 70758.');
    }

    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.success === false) {
      throw new Error(json.message || 'Could not send your inquiry. Please call us at +91 93027 70758.');
    }

    return { message: 'Your project inquiry has been received! Our team will connect with you within 24 hours.' };
  }
};
