export const meta = {
  title: "WordPress Website Development",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 12,
  icon: "code",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Custom WordPress themes and headless configurations optimized for lightning speed, clean code, and intuitive editing.",
  fullDescription: "We bypass bloated, sluggish multi-purpose themes in favor of lightweight, custom-coded WordPress themes and Gutenberg blocks that give your team effortless editing capabilities without sacrificing Core Web Vitals.",
  deliverables: ["Custom WordPress Theme Engineering", "Tailored Gutenberg Content Blocks", "Headless WordPress & REST API"],
  technologies: ["WordPress", "PHP", "MySQL", "Gutenberg"],
  locationPages: true,  // true => src/config/locations.js ke har shehar ke liye /wordpress-website-development-in-<city>/ page + sitemap
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
