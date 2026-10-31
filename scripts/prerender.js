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
    contentSummary: 'Our agency specializes exclusively in responsive website design and full-stack web development, delivering reliable digital solutions.',
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
    description: 'Get in touch with our web development team for custom website consultations, quotations, or maintenance support.',
    h1: "Let's Build Your High-Performance Website",
    contentSummary: 'Contact Flown Developer at +91 93027 70758 or via email at mohitrahangdale67890@gmail.com for high-performance web design and development.',
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
