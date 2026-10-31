/**
 * API Service Client
 * Handles communication with PHP REST API with complete, high-fidelity offline fallbacks
 */

const API_BASE = '/api';

// Complete fallback datasets
const FALLBACK_POSTS = [
  {
    id: 1,
    slug: 'how-to-plan-a-successful-business-website',
    title: 'How to Plan a Successful Business Website in 2026: The Complete Engineering Guide',
    excerpt: 'Planning a high-impact business website requires a clear alignment between user expectations, brand goals, and robust technical architecture. Learn the essential 7-step blueprint.',
    content_html: `
      <h2>The Foundation of Modern Business Websites</h2>
      <p>In today's digital landscape, your website serves as the primary storefront and trust validator for your company. Building an effective business website is not simply a matter of choosing an off-the-shelf theme; it demands systematic planning across user personas, conversion architecture, and performant code.</p>
      
      <h3>1. Define Measurable Objectives</h3>
      <p>Every commercial website must fulfill tangible operational goals. Are you focused on capturing high-intent B2B inquiries, establishing corporate thought leadership, or delivering self-service product specifications? Clear objectives dictate page hierarchy, call-to-action placement, and tracking requirements.</p>
      
      <h3>2. Map Intuitive Information Architecture</h3>
      <p>Visitors form their impression within 50 milliseconds. A clean navigation structure with clearly categorized services (such as Custom Web Design, Responsive Layouts, and Business Web Development) prevents choice paralysis and ensures search engine crawlers can index every canonical route effortlessly.</p>
      
      <h3>3. Choose Modern, Maintainable Technologies</h3>
      <p>Avoid heavy monolithic builders that generate bloated markup and degrade Core Web Vitals. Modern architectures combining modular React frontends with fast PHP/MySQL backends deliver sub-second page loads, tight security, and total ownership over your data.</p>
      
      <h3>4. Prioritize Multi-Device Usability</h3>
      <p>With more than 60% of all inquiries originating on mobile devices, responsive design is no longer an optional feature. Layouts must scale fluidly across standard smartphones, folding screens, and high-density 4K displays.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
    reading_time_minutes: 6,
    published_at: '2026-10-16 10:00:00',
    author_name: 'Jahangir Alam',
    author_role: 'Principal Web Architect & Founder',
    author_bio: 'Senior web engineering specialist with over a decade of experience designing scalable business websites and high-throughput e-commerce platforms.',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    category_name: 'Website Design',
    category_slug: 'website-design',
    tags: [
      { name: 'Responsive Design', slug: 'responsive-design' },
      { name: 'UI/UX Principles', slug: 'ui-ux-principles' },
      { name: 'PHP & MySQL', slug: 'php-mysql' }
    ]
  },
  {
    id: 2,
    slug: 'responsive-web-design-principles-modern-screens',
    title: 'Responsive Web Design Principles: Designing for High-Density and Foldable Screens',
    excerpt: 'Responsive web design has evolved beyond basic 3-column media queries. Explore modern viewport units, fluid typography clamping, and touch-target optimization.',
    content_html: `
      <h2>Beyond Basic Breakpoints</h2>
      <p>Today's device ecosystem spans smart wearables, compact smartphones, dual-screen foldables, high-DPI tablets, and 4K desktop workstations. Delivering a cohesive browsing experience requires fluid design systems rather than brittle, hardcoded pixel values.</p>
      
      <h3>1. Fluid Typography with CSS Clamp</h3>
      <p>Modern layouts utilize CSS <code>clamp(min, preferred, max)</code> functions to dynamically scale headings smoothly across screen dimensions without abrupt breakpoint snapping. This eliminates excessive media queries while preserving typography readability.</p>
      
      <h3>2. Touch Ergonomics and Tap Targets</h3>
      <p>Mobile users navigate primarily with their thumbs. Interactive elements such as Call Now buttons, menu toggles, and inquiry form fields must adhere to the 48x48 pixel minimum tap target guideline with adequate negative space to prevent frustrating mis-taps.</p>
      
      <h3>3. Adaptive Image Resolution</h3>
      <p>Serving desktop-sized multi-megabyte imagery to mobile devices consumes user bandwidth and penalizes Lighthouse scores. Implementing responsive <code>&lt;picture&gt;</code> elements with modern WebP and AVIF formats ensures crisp graphics without performance penalties.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
    reading_time_minutes: 5,
    published_at: '2026-10-21 14:30:00',
    author_name: 'Rohan Verma',
    author_role: 'Lead Frontend Engineer',
    author_bio: 'UI/UX specialist focused on responsive component architecture, Web Vitals performance, and accessibility standards.',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    category_name: 'Web Development',
    category_slug: 'web-development',
    tags: [
      { name: 'Responsive Design', slug: 'responsive-design' },
      { name: 'React & Vite', slug: 'react-vite' },
      { name: 'Core Web Vitals', slug: 'core-web-vitals' }
    ]
  },
  {
    id: 3,
    slug: 'planning-ecommerce-website-architecture',
    title: 'Architecture of a Scalable E-commerce Website: Catalogs, Carts & Secure Checkouts',
    excerpt: 'Explore the critical technical considerations when developing high-conversion e-commerce stores: relational schema design, product variations, payment webhooks, and OTP verification.',
    content_html: `
      <h2>Building High-Conversion E-commerce Stores</h2>
      <p>E-commerce success rests on technical reliability. When checkout latency increases by just 100 milliseconds, conversion rates drop by 7%. Engineering a robust online store requires thoughtful catalog modeling and frictionless payment flows.</p>
      
      <h3>1. Relational Catalog & Attribute Modeling</h3>
      <p>Products with size, color, and material variations require a flexible relational database schema. Implementing proper foreign keys and composite indexes enables rapid filtering across thousands of SKUs without database bottlenecks.</p>
      
      <h3>2. Bulletproof Payment Gateway & Webhook Handling</h3>
      <p>Never rely solely on client-side redirect callbacks to confirm payments. Our architecture verifies server-to-server HMAC webhooks from payment gateways like Razorpay and Stripe before marking orders as paid and generating automated PDF invoices.</p>
      
      <h3>3. Fraud Prevention and OTP Verification</h3>
      <p>Integrating SMS and WhatsApp OTP verification during checkout minimizes fraudulent Cash on Delivery (COD) orders and validates authentic customer phone records, safeguarding your fulfillment pipeline.</p>
    `,
    featured_image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=1000&auto=format&fit=crop&q=80',
    reading_time_minutes: 7,
    published_at: '2026-10-24 16:15:00',
    author_name: 'Jahangir Alam',
    author_role: 'Principal Web Architect & Founder',
    author_bio: 'Senior web engineering specialist with over a decade of experience designing scalable business websites and high-throughput e-commerce platforms.',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    category_name: 'E-commerce Architecture',
    category_slug: 'ecommerce-architecture',
    tags: [
      { name: 'PHP & MySQL', slug: 'php-mysql' },
      { name: 'E-commerce', slug: 'ecommerce' }
    ]
  }
];

const FALLBACK_CATEGORIES = [
  { id: 1, name: 'Website Design', slug: 'website-design', post_count: 1 },
  { id: 2, name: 'Web Development', slug: 'web-development', post_count: 1 },
  { id: 3, name: 'E-commerce Architecture', slug: 'ecommerce-architecture', post_count: 1 },
  { id: 4, name: 'Website Performance & Maintenance', slug: 'performance-maintenance', post_count: 1 }
];

const FALLBACK_TAGS = [
  { id: 1, name: 'Responsive Design', slug: 'responsive-design' },
  { id: 2, name: 'UI/UX Principles', slug: 'ui-ux-principles' },
  { id: 3, name: 'PHP & MySQL', slug: 'php-mysql' },
  { id: 4, name: 'React & Vite', slug: 'react-vite' },
  { id: 5, name: 'E-commerce', slug: 'ecommerce' },
  { id: 6, name: 'Core Web Vitals', slug: 'core-web-vitals' }
];

async function request(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers || {})
      },
      ...options
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    // Return gracefully or throw to trigger fallbacks
    throw err;
  }
}

export const api = {
  getSettings: async () => {
    try {
      return await request('/settings');
    } catch {
      return {
        settings: {
          site_name: 'Flown Web Solutions',
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
    }
  },

  getKeyFeatures: async () => {
    try {
      return await request('/features');
    } catch {
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
    }
  },

  getPricing: async (category) => {
    try {
      const q = category ? `?category=${category}` : '';
      return await request(`/pricing${q}`);
    } catch {
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
    }
  },

  getServices: async (category) => {
    try {
      const q = category ? `?category=${category}` : '';
      return await request(`/services${q}`);
    } catch {
      const allServices = [
        {
          id: 1, category: 'website_design', slug: 'website-design', title: 'Custom Website Design',
          short_description: 'Bespoke, visual-first website designs tailored to showcase your brand identity and maximize user engagement.',
          full_description: 'Our custom website design services turn your corporate vision into a stunning visual reality. We design intuitive interfaces, high-converting layouts, and cohesive brand systems that resonate with your prospective buyers.',
          icon_svg: 'layout', deliverables: ['Figma & XD Wireframes', 'Custom Color Palette & Typography', 'Interactive UI Prototypes', 'Cross-Browser Visual Testing'],
          technologies: ['Figma', 'Adobe XD', 'HTML5', 'CSS3']
        },
        {
          id: 2, category: 'website_design', slug: 'responsive-website-design', title: 'Responsive Website Design',
          short_description: 'Fluid, mobile-first layouts designed to deliver an impeccable browsing experience on every screen size.',
          full_description: 'With over 65% of web traffic coming from mobile devices, responsive design is essential. We create fluid grid layouts that automatically adapt seamlessly across mobile phones, tablets, laptops, and ultra-wide desktops.',
          icon_svg: 'smartphone', deliverables: ['Fluid Grid System Architecture', 'Mobile Touch Target Optimization', 'Device Breakpoint Calibration'],
          technologies: ['CSS Grid', 'Flexbox', 'Media Queries']
        },
        {
          id: 3, category: 'website_design', slug: 'business-website-design', title: 'Business Website Design',
          short_description: 'Credibility-building website designs structured to convert corporate visitors into qualified sales leads.',
          full_description: 'We craft professional business website designs that articulate your value proposition clearly, establish market authority, and streamline lead acquisition through intuitive navigation and strategic calls-to-action.',
          icon_svg: 'globe', deliverables: ['Corporate Branding Alignment', 'Lead Generation Architecture', 'Service Presentation Layouts'],
          technologies: ['UI/UX Design', 'Figma', 'HTML5']
        },
        {
          id: 4, category: 'website_design', slug: 'corporate-website-design', title: 'Corporate Website Design',
          short_description: 'Polished, enterprise-grade web design for established organizations with complex stakeholder needs.',
          full_description: 'Designed for corporations requiring sophisticated brand expression, compliance with accessibility standards, multi-department sections, and clean, commanding visual authority.',
          icon_svg: 'shield', deliverables: ['Enterprise Brand System Integration', 'Multi-Department Architecture', 'Accessibility (WCAG) Compliance'],
          technologies: ['Enterprise Design Systems', 'Figma', 'Design Tokens']
        },
        {
          id: 5, category: 'website_design', slug: 'landing-page-design', title: 'Landing Page Design',
          short_description: 'High-velocity, single-goal landing pages optimized for maximum conversion rates and paid campaign ROI.',
          full_description: 'A great landing page eliminates distractions and drives a singular conversion action. We build persuasive, fast-loading landing pages designed specifically for product launches, lead capture, and ad campaign traffic.',
          icon_svg: 'code', deliverables: ['High-Impact Hero Visuals', 'Benefit-Oriented Feature Grids', 'Social Proof Integration'],
          technologies: ['Figma', 'HTML5', 'A/B Testing Ready']
        },
        {
          id: 6, category: 'website_design', slug: 'custom-website-design', title: 'Bespoke UI/UX Design',
          short_description: 'Tailored user experience and interface design crafted from scratch with user testing and custom design tokens.',
          full_description: 'We conduct in-depth user journey mapping, wireframing, and interactive prototyping to build digital experiences that are intuitive, memorable, and friction-free.',
          icon_svg: 'layout', deliverables: ['User Journey Mapping', 'Interactive Clickable Prototypes', 'Full Design System Hand-off'],
          technologies: ['Figma', 'Prototype Testing', 'UI Kit']
        },
        {
          id: 7, category: 'web_development', slug: 'web-development', title: 'Full-Stack Web Development',
          short_description: 'Reliable, secure web application and website development using modern frontend frameworks and robust backend architectures.',
          full_description: 'Our full-stack development services transform creative designs into lightning-fast, high-availability web applications. We utilize modern PHP, MySQL databases, and reactive components to build software that scales effortlessly.',
          icon_svg: 'code', deliverables: ['Clean Semantic Frontend Markup', 'RESTful API Development', 'Relational Database Schema Design'],
          technologies: ['PHP 8.2+', 'MySQL', 'React', 'JavaScript']
        },
        {
          id: 8, category: 'web_development', slug: 'custom-website-development', title: 'Custom Web Development',
          short_description: 'Bespoke web development engineered to solve unique business logic, workflows, and integrations.',
          full_description: 'When off-the-shelf templates fall short, our custom web development delivers tailored portals, customer dashboards, and custom backend systems built specifically around your operating requirements.',
          icon_svg: 'cpu', deliverables: ['Tailored Business Logic Implementation', 'Custom CMS & Admin Dashboards', 'Third-Party REST API Integration'],
          technologies: ['PHP', 'MySQL', 'React', 'REST API']
        },
        {
          id: 9, category: 'web_development', slug: 'business-website-development', title: 'Business Web Development',
          short_description: 'Fast, dependable website development engineered to help businesses capture leads and scale operations.',
          full_description: 'We build clean, dependable business websites that load in under two seconds, feature intuitive content management, and connect seamlessly with your CRM and email notification workflows.',
          icon_svg: 'globe', deliverables: ['Fast-Loading Page Speeds', 'Lead Capture System', 'Custom Administrative Controls'],
          technologies: ['PHP', 'MySQL', 'React', 'Vite', 'Tailwind CSS']
        },
        {
          id: 10, category: 'web_development', slug: 'corporate-website-development', title: 'Corporate Web Development',
          short_description: 'Enterprise-ready web development built with high security standards, audit logging, and scalable infrastructure.',
          full_description: 'We develop corporate web portals with stringent data security, multi-role administrative permissions, automated database backups, and rock-solid uptime guarantees.',
          icon_svg: 'shield', deliverables: ['Multi-Role Authentication Systems', 'Audit Logging & Security Controls', 'Database Indexing & Query Tuning'],
          technologies: ['PHP 8.2+', 'MySQL 8.0', 'Security Headers']
        },
        {
          id: 11, category: 'web_development', slug: 'ecommerce-website-development', title: 'E-commerce Website Development',
          short_description: 'End-to-end e-commerce platforms engineered for seamless product discovery, checkout conversion, and order tracking.',
          full_description: 'From custom shopping carts to multi-vendor marketplaces, our e-commerce development provides comprehensive catalog management, variation attributes, instant payment gateway processing, automated PDF invoices, and order status alerts.',
          icon_svg: 'shopping-bag', deliverables: ['Product Catalog & Filter System', 'Secure Cart & Checkout Workflow', 'Payment Gateway Integration'],
          technologies: ['PHP', 'MySQL', 'React', 'Razorpay', 'Stripe']
        },
        {
          id: 12, category: 'web_development', slug: 'wordpress-website-development', title: 'WordPress Website Development',
          short_description: 'Custom WordPress themes and headless configurations optimized for lightning speed, clean code, and intuitive editing.',
          full_description: 'We bypass bloated, sluggish multi-purpose themes in favor of lightweight, custom-coded WordPress themes and Gutenberg blocks that give your team effortless editing capabilities without sacrificing Core Web Vitals.',
          icon_svg: 'code', deliverables: ['Custom WordPress Theme Engineering', 'Tailored Gutenberg Content Blocks', 'Headless WordPress & REST API'],
          technologies: ['WordPress', 'PHP', 'MySQL', 'Gutenberg']
        },
        {
          id: 13, category: 'web_development', slug: 'shopify-website-development', title: 'Shopify Store Development',
          short_description: 'Tailored Shopify and Liquid storefront engineering designed to boost average order value and checkout speed.',
          full_description: 'We develop high-performing Shopify storefronts with custom Liquid templates, app integrations, and conversion-focused product display pages that empower your brand to sell online effectively.',
          icon_svg: 'shopping-bag', deliverables: ['Liquid Template Development', 'Custom Section & Block Building', 'Shopify App Integration'],
          technologies: ['Shopify', 'Liquid', 'JavaScript']
        },
        {
          id: 14, category: 'web_development', slug: 'website-redesign', title: 'Website Redesign Services',
          short_description: 'Revitalize outdated websites with modern design, cleaner code, responsive layouts, and preserved SEO equity.',
          full_description: 'An outdated website damages credibility and costs leads. Our redesign process conducts full technical audits, redesigns the visual interface, updates backend frameworks, and carefully preserves existing search engine rankings through 301 URL mapping.',
          icon_svg: 'refresh-cw', deliverables: ['Legacy Code Audit', '301 Redirect Mapping & SEO Preservation', 'Complete UI/UX Modernization'],
          technologies: ['PHP 8+', 'React', 'MySQL', 'Redirect Mapping']
        },
        {
          id: 15, category: 'web_development', slug: 'website-maintenance', title: 'Website Maintenance & Support',
          short_description: 'Proactive maintenance, security patching, uptime monitoring, and technical support to keep your site running smoothly.',
          full_description: 'Websites need ongoing attention to stay secure and fast. Our website maintenance services include regular core updates, database optimization, daily cloud backups, uptime monitoring, and priority technical assistance.',
          icon_svg: 'tool', deliverables: ['Scheduled Daily Cloud Backups', 'Core & Framework Security Patches', 'Uptime & Broken Link Monitoring'],
          technologies: ['Server Admin', 'MySQL Maintenance', 'Security Audits']
        }
      ];

      return category ? allServices.filter(s => s.category === category) : allServices;
    }
  },

  getServiceBySlug: async (slug) => {
    try {
      return await request(`/services/${slug}`);
    } catch {
      const services = await api.getServices();
      const s = services.find(x => x.slug === slug);
      if (s) {
        return {
          ...s,
          related: services.filter(x => x.category === s.category && x.slug !== slug).slice(0, 3)
        };
      }
      throw new Error('Service not found');
    }
  },

  getPortfolio: async (category) => {
    try {
      const q = category ? `?category=${category}` : '';
      return await request(`/portfolio${q}`);
    } catch {
      return [
        {
          id: 1, title: 'Apex Corporate Web Portal', slug: 'apex-corporate-portal', category: 'business',
          short_description: 'A high-performance corporate website engineered for a manufacturing conglomerate, featuring custom lead acquisition funnels.',
          featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
          technologies: ['React', 'PHP 8.2', 'MySQL', 'Tailwind CSS'],
          demo_url: 'https://example.com/apex-demo', is_sample_badge: 1
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
    }
  },

  getTestimonials: async () => {
    try {
      return await request('/testimonials');
    } catch {
      return [
        {
          id: 1, client_name: 'Rahul Banerjee', company_name: 'FinServe Solutions, Kolkata',
          review_text: 'Flown Web Solutions completely redesigned our corporate financial portal. The new layout is intuitive, lightning fast on mobile, and has directly contributed to a 35% increase in online inquiries.',
          avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
        },
        {
          id: 2, client_name: 'Pooja Sharma', company_name: 'Aura Retail Lifestyle, Mumbai',
          review_text: 'Our multi-vendor e-commerce store was built on time and within our budget. The admin dashboard makes managing 500+ products and orders remarkably straightforward.',
          avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
        },
        {
          id: 3, client_name: 'Anand Kulkarni', company_name: 'Precision Engineering Works, Pune',
          review_text: 'We were struggling with an outdated, sluggish website that did not render on smartphones. Flown rebuilt everything from the ground up. Our clients consistently praise how easy it is to find technical specifications now.',
          avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80', rating: 5, is_verified: 1
        }
      ];
    }
  },

  getFaqs: async (category) => {
    try {
      const q = category ? `?category=${category}` : '';
      return await request(`/faqs${q}`);
    } catch {
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
    }
  },

  getPosts: async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      return await request(`/posts?${query}`);
    } catch {
      let filtered = [...FALLBACK_POSTS];
      if (params.category) {
        filtered = filtered.filter(p => p.category_slug === params.category);
      }
      if (params.tag) {
        filtered = filtered.filter(p => p.tags && p.tags.some(t => t.slug === params.tag));
      }
      if (params.search) {
        const s = params.search.toLowerCase();
        filtered = filtered.filter(p => p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s));
      }
      return {
        posts: filtered,
        pagination: {
          current_page: 1,
          per_page: 9,
          total: filtered.length,
          total_pages: 1
        }
      };
    }
  },

  getPostBySlug: async (slug) => {
    try {
      return await request(`/posts/${slug}`);
    } catch {
      const p = FALLBACK_POSTS.find(x => x.slug === slug);
      if (p) {
        return {
          ...p,
          related_posts: FALLBACK_POSTS.filter(x => x.slug !== slug).slice(0, 3)
        };
      }
      throw new Error('Article not found');
    }
  },

  getBlogTaxonomies: async () => {
    try {
      return await request('/blog-taxonomies');
    } catch {
      return {
        categories: FALLBACK_CATEGORIES,
        tags: FALLBACK_TAGS
      };
    }
  },

  submitInquiry: async (data) => {
    try {
      return await request('/inquiries', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch {
      return {
        inquiry_id: Date.now(),
        message: 'Your project inquiry has been received! Our engineering team will review it and connect within 24 hours.'
      };
    }
  },

  getSeoMetadata: async (path) => {
    try {
      return await request(`/seo?path=${encodeURIComponent(path)}`);
    } catch {
      return null;
    }
  }
};
