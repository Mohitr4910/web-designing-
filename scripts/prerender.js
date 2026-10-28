/**
 * Static Pre-rendering and Complete Technical SEO Generator
 * Generates pre-rendered HTML snapshots, dynamic sitemap.xml, and robots.txt
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Catalogue of indexable routes with pre-rendered SEO content
const routes = [
  {
    path: '/',
    title: 'Creative Website Design and Professional Web Development | Flown Developer',
    description: 'We design engaging, responsive websites and develop reliable digital experiences that help businesses build a strong online presence. Transparent pricing, custom solutions.',
    h1: 'Creative Website Design and Professional Web Development',
    contentSummary: 'We design engaging, responsive websites and develop reliable digital experiences that help businesses build a strong online presence. Standard, Premium, and Custom website pricing plans with complete 18% GST calculation, free cloud hosting, SSL, and one year of technical support.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Flown Developer",
      "url": "https://flowndeveloper.com/",
      "description": "Creative Website Design and Professional Web Development Agency"
    },
    priority: '1.0'
  },
  {
    path: '/about-us/',
    title: 'About Us - Web Design & Development Specialists | Flown Developer',
    description: 'Learn about our engineering philosophy, design methodology, and commitment to delivering responsive, high-performance websites for growing businesses.',
    h1: 'Dedicated to Crafting Impactful Web Experiences',
    contentSummary: 'Our agency specializes exclusively in responsive website design and full-stack web development. Founded in 2017 with operations in Kolkata and Mumbai.',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Flown Developer",
      "url": "https://flowndeveloper.com/about-us/"
    },
    priority: '0.8'
  },
  {
    path: '/services/',
    title: 'Full-Cycle Website Design & Web Development Services | Flown Developer',
    description: 'Explore our complete suite of specialized website design and web development services. From responsive business websites to complex e-commerce stores.',
    h1: 'Focused Website Design & Web Development Services',
    contentSummary: 'Full-cycle website design and web development offerings including Custom Website Design, Responsive Web Design, Business Web Development, E-commerce Platforms, and Maintenance.',
    priority: '0.9'
  },
  {
    path: '/pricing/',
    title: 'Transparent Website & E-commerce Pricing Plans | Flown Developer',
    description: 'Affordable, clear website design and e-commerce development pricing packages with itemized features, 18% GST calculation, free SSL, and zero hidden fees.',
    h1: 'Transparent Website & E-commerce Pricing Plans',
    contentSummary: 'Standard Plan ₹7,999, Premium Plan ₹13,999, Custom Plan. E-commerce Premium Design Plan ₹21,999, Multi-vendor E-commerce ₹50,000. Transparent 18% GST calculation and annual renewal ₹5,000.',
    schema: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Website Design & Development Pricing"
    },
    priority: '0.9'
  },
  {
    path: '/portfolio/',
    title: 'Our Portfolio - Website Projects & Case Studies | Flown Developer',
    description: 'Browse our real-world and sample website design, business portals, and e-commerce store implementations. Built with modern PHP, React, and responsive CSS.',
    h1: 'Website Projects & Case Studies',
    contentSummary: 'Showcase of corporate web portals, e-commerce boutiques, and bespoke digital platforms.',
    priority: '0.8'
  },
  {
    path: '/contact-us/',
    title: 'Contact Our Web Design & Development Team | Flown Developer',
    description: 'Get in touch with our web development team in Kolkata and Mumbai for custom website consultations, quotations, or maintenance support.',
    h1: "Let's Build Your High-Performance Website",
    contentSummary: 'Contact Flown Developer at +91 82407 40018 or visit our Kolkata headquarters at 39, 2nd Floor, Topsia Road, Kolkata 700039.',
    priority: '0.8'
  },
  // Website Design Pages
  {
    path: '/website-design/',
    title: 'Custom Website Design Services | Flown Developer',
    description: 'Bespoke, visual-first website designs tailored to showcase your brand identity and maximize user engagement.',
    h1: 'Custom Website Design That Converts Visitors',
    priority: '0.8'
  },
  {
    path: '/responsive-website-design/',
    title: 'Responsive Website Design Services | Flown Developer',
    description: 'Fluid, mobile-first layouts designed to deliver an impeccable browsing experience on every screen size.',
    h1: '100% Fluid Responsive Web Design Solutions',
    priority: '0.8'
  },
  {
    path: '/business-website-design/',
    title: 'Business Website Design Services | Flown Developer',
    description: 'Credibility-building website designs structured to convert corporate visitors into qualified sales leads.',
    h1: 'Credibility-Driven Business Website Design',
    priority: '0.8'
  },
  {
    path: '/corporate-website-design/',
    title: 'Corporate Website Design | Enterprise Solutions',
    description: 'Polished, enterprise-grade web design for established organizations with complex stakeholder needs.',
    h1: 'Enterprise-Grade Corporate Website Design',
    priority: '0.8'
  },
  {
    path: '/landing-page-design/',
    title: 'High-Converting Landing Page Design | Flown Developer',
    description: 'High-velocity, single-goal landing pages optimized for maximum conversion rates and paid campaign ROI.',
    h1: 'Landing Page Design Built for Maximum ROI',
    priority: '0.8'
  },
  {
    path: '/custom-website-design/',
    title: 'Bespoke UI/UX Design | Flown Developer',
    description: 'Tailored user experience and interface design crafted from scratch with user testing and custom design tokens.',
    h1: 'Bespoke UI/UX Design & Interactive Prototypes',
    priority: '0.8'
  },
  // Web Development Pages
  {
    path: '/web-development/',
    title: 'Full-Stack Web Development Services | Flown Developer',
    description: 'Reliable, secure web application and website development using modern frontend frameworks and robust backend architectures.',
    h1: 'Robust, Scalable Full-Stack Web Development',
    priority: '0.8'
  },
  {
    path: '/custom-website-development/',
    title: 'Custom Web Development Solutions | Flown Developer',
    description: 'Bespoke web development engineered to solve unique business logic, workflows, and integrations.',
    h1: 'Bespoke Web Application & Website Development',
    priority: '0.8'
  },
  {
    path: '/business-website-development/',
    title: 'Business Web Development Services | Flown Developer',
    description: 'Fast, dependable website development engineered to help businesses capture leads and scale operations.',
    h1: 'Fast Business Website Development',
    priority: '0.8'
  },
  {
    path: '/corporate-website-development/',
    title: 'Corporate Web Development | Enterprise Systems',
    description: 'Enterprise-ready web development built with high security standards, audit logging, and scalable infrastructure.',
    h1: 'Secure Corporate Web Portals & Infrastructure',
    priority: '0.8'
  },
  {
    path: '/ecommerce-website-development/',
    title: 'E-commerce Website Development | Flown Developer',
    description: 'End-to-end e-commerce platforms engineered for seamless product discovery, checkout conversion, and order tracking.',
    h1: 'End-to-End E-commerce Website Development',
    priority: '0.8'
  },
  {
    path: '/wordpress-website-development/',
    title: 'Custom WordPress Development | Flown Developer',
    description: 'Custom WordPress themes and headless configurations optimized for lightning speed, clean code, and intuitive editing.',
    h1: 'High-Performance WordPress Website Development',
    priority: '0.8'
  },
  {
    path: '/shopify-website-development/',
    title: 'Shopify Store Development | Flown Developer',
    description: 'Tailored Shopify and Liquid storefront engineering designed to boost average order value and checkout speed.',
    h1: 'Tailored Shopify Storefront Engineering',
    priority: '0.8'
  },
  {
    path: '/website-redesign/',
    title: 'Website Redesign Services | Flown Developer',
    description: 'Revitalize outdated websites with modern design, cleaner code, responsive layouts, and preserved SEO equity.',
    h1: 'Modernize & Revitalize Your Digital Presence',
    priority: '0.8'
  },
  {
    path: '/website-maintenance/',
    title: 'Website Maintenance & Support | Flown Developer',
    description: 'Proactive maintenance, security patching, uptime monitoring, and technical support to keep your site running smoothly.',
    h1: 'Proactive Website Maintenance & Security Support',
    priority: '0.8'
  },
  // Blog
  {
    path: '/blog/',
    title: 'Web Design & Development Insights | Flown Developer',
    description: 'Actionable engineering guides, responsive design principles, and e-commerce strategies from our development team.',
    h1: 'Web Design & Web Development Insights',
    priority: '0.8'
  },
  {
    path: '/blog/how-to-plan-a-successful-business-website/',
    title: 'How to Plan a Successful Business Website in 2026 | Flown Developer',
    description: 'Planning a high-impact business website requires a clear alignment between user expectations, brand goals, and robust technical architecture.',
    h1: 'How to Plan a Successful Business Website in 2026: The Complete Engineering Guide',
    priority: '0.7'
  },
  {
    path: '/blog/responsive-web-design-principles-modern-screens/',
    title: 'Responsive Web Design Principles: Designing for Modern Screens | Flown',
    description: 'Responsive web design has evolved beyond basic 3-column media queries. Explore modern viewport units, fluid typography, and touch ergonomics.',
    h1: 'Responsive Web Design Principles: Designing for High-Density and Foldable Screens',
    priority: '0.7'
  },
  {
    path: '/blog/planning-ecommerce-website-architecture/',
    title: 'Architecture of a Scalable E-commerce Website | Flown Developer',
    description: 'Explore the critical technical considerations when developing high-conversion e-commerce stores: relational catalogs, checkout security, and OTP verification.',
    h1: 'Architecture of a Scalable E-commerce Website: Catalogs, Carts & Secure Checkouts',
    priority: '0.7'
  },
  // Legal
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy | Flown Web Solutions',
    description: 'Our privacy practices regarding client inquiries, data protection, and cookie disclosures.',
    h1: 'Privacy Policy',
    priority: '0.3'
  },
  {
    path: '/terms-and-conditions/',
    title: 'Terms & Conditions | Flown Web Solutions',
    description: 'Terms of service, project milestones, hosting terms, and client service agreements.',
    h1: 'Terms and Conditions',
    priority: '0.3'
  },
  {
    path: '/refund-cancellation-policy/',
    title: 'Refund & Cancellation Policy | Flown Web Solutions',
    description: 'Clear terms regarding project deposits, milestone delivery, and cancellation procedures.',
    h1: 'Refund and Cancellation Policy',
    priority: '0.3'
  }
];

console.log(`Starting static pre-rendering for ${routes.length} public canonical routes...`);

routes.forEach((route) => {
  const canonicalFull = `https://flowndeveloper.com${route.path}`;

  // Replace Title
  let html = templateHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Insert Canonical Link, Open Graph & Twitter Cards into <head>
  const headExtra = `
    <link rel="canonical" href="${canonicalFull}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonicalFull}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Flown Developer" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    ${route.schema ? `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>` : ''}
  `;
  html = html.replace('</head>', `${headExtra}\n</head>`);

  // Inject initial semantic HTML into #root for zero-JS search bot crawlers
  const prerenderBody = `
    <div id="prerender-seo-content" style="display:none;" aria-hidden="true">
      <h1>${route.h1 || route.title}</h1>
      <p>${route.description}</p>
      ${route.contentSummary ? `<p>${route.contentSummary}</p>` : ''}
    </div>
  `;
  html = html.replace('<div id="root"></div>', `<div id="root">${prerenderBody}</div>`);

  // Determine file path
  let outDir;
  if (route.path === '/') {
    outDir = distDir;
  } else {
    const cleanPath = route.path.replace(/^\/|\/$/g, '');
    outDir = path.join(distDir, cleanPath);
  }

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outFilePath = path.join(outDir, 'index.html');
  fs.writeFileSync(outFilePath, html, 'utf-8');
});

console.log(`Pre-rendered HTML generated for ${routes.length} canonical routes.`);

// Generate Dynamic sitemap.xml
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>https://flowndeveloper.com${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.priority || '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('Generated sitemap.xml.');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

# Exclude CMS Administration & Internal API Endpoints
Disallow: /admin/
Disallow: /api/
Disallow: /uploads/private/

# Sitemap location
Sitemap: https://flowndeveloper.com/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
console.log('Generated robots.txt.');

console.log('>>> Static pre-rendering and Technical SEO generation complete! <<<');
