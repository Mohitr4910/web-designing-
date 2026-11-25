export const meta = {
  title: "Website Maintenance & Support",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 15,
  icon: "tool",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Proactive maintenance, security patching, uptime monitoring, and technical support to keep your site running smoothly.",
  fullDescription: "Websites need ongoing attention to stay secure and fast. Our website maintenance services include regular core updates, database optimization, daily cloud backups, uptime monitoring, and priority technical assistance.",
  deliverables: ["Scheduled Daily Cloud Backups", "Core & Framework Security Patches", "Uptime & Broken Link Monitoring"],
  technologies: ["Server Admin", "MySQL Maintenance", "Security Audits"],
  locationPages: false,  // true => src/config/locations.js ke har shehar ke liye /website-maintenance-in-<city>/ page + sitemap
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
