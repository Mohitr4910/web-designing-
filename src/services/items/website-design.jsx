export const meta = {
  title: "Custom Website Design",
  category: "website_design",  // 'website_design' ya 'web_development'
  order: 1,
  icon: "layout",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Bespoke, visual-first website designs tailored to showcase your brand identity and maximize user engagement.",
  fullDescription: "Our custom website design services turn your corporate vision into a stunning visual reality. We design intuitive interfaces, high-converting layouts, and cohesive brand systems that resonate with your prospective buyers.",
  deliverables: ["Figma & XD Wireframes", "Custom Color Palette & Typography", "Interactive UI Prototypes", "Cross-Browser Visual Testing"],
  technologies: ["Figma", "Adobe XD", "HTML5", "CSS3"],
  locationPages: true,  // true => src/config/locations.js ke har shehar ke liye /website-design-in-<city>/ page + sitemap
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
