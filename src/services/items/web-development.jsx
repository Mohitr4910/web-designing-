export const meta = {
  title: "Full-Stack Web Development",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 7,
  icon: "code",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Reliable, secure web application and website development using modern frontend frameworks and robust backend architectures.",
  fullDescription: "Our full-stack development services transform creative designs into lightning-fast, high-availability web applications. We utilize modern PHP, MySQL databases, and reactive components to build software that scales effortlessly.",
  deliverables: ["Clean Semantic Frontend Markup", "RESTful API Development", "Relational Database Schema Design"],
  technologies: ["PHP 8.2+", "MySQL", "React", "JavaScript"],
  locationPages: true,  // true => src/config/locations.js ke har shehar ke liye /web-development-in-<city>/ page + sitemap
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
