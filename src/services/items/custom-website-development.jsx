export const meta = {
  title: "Custom Web Development",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 8,
  icon: "cpu",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Bespoke web development engineered to solve unique business logic, workflows, and integrations.",
  fullDescription: "When off-the-shelf templates fall short, our custom web development delivers tailored portals, customer dashboards, and custom backend systems built specifically around your operating requirements.",
  deliverables: ["Tailored Business Logic Implementation", "Custom CMS & Admin Dashboards", "Third-Party REST API Integration"],
  technologies: ["PHP", "MySQL", "React", "REST API"],
  locationPages: false,  // true => src/config/locations.js ke har shehar ke liye /custom-website-development-in-<city>/ page + sitemap
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
