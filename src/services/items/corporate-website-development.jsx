export const meta = {
  title: "Corporate Web Development",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 10,
  icon: "shield",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Enterprise-ready web development built with high security standards, audit logging, and scalable infrastructure.",
  fullDescription: "We develop corporate web portals with stringent data security, multi-role administrative permissions, automated database backups, and rock-solid uptime guarantees.",
  deliverables: ["Multi-Role Authentication Systems", "Audit Logging & Security Controls", "Database Indexing & Query Tuning"],
  technologies: ["PHP 8.2+", "MySQL 8.0", "Security Headers"],
  locationPages: false,  // true => src/config/locations.js ke har shehar ke liye /corporate-website-development-in-<city>/ page + sitemap
  // faqs: [{ q: 'Question?', a: 'Answer.' }],   // optional, page par FAQ + Google FAQ schema
  // metaTitle: 'Custom SEO title',  // optional
  // metaDescription: 'Custom SEO description',  // optional
  // updated: '2026-11-25',  // optional, sitemap <lastmod>
  // draft: true,  // true => service hide (page, sitemap, listing)
};

// Optional: extra content jo service page par dikhana ho (na likho to bhi page ban jayega)
// export default function Body() {
//   return (<><h2>Heading</h2><p>Paragraph...</p></>);
// }
