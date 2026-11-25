export const meta = {
  title: "Responsive Website Design",
  category: "website_design",  // 'website_design' ya 'web_development'
  order: 2,
  icon: "smartphone",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "Fluid, mobile-first layouts designed to deliver an impeccable browsing experience on every screen size.",
  fullDescription: "With over 65% of web traffic coming from mobile devices, responsive design is essential. We create fluid grid layouts that automatically adapt seamlessly across mobile phones, tablets, laptops, and ultra-wide desktops.",
  deliverables: ["Fluid Grid System Architecture", "Mobile Touch Target Optimization", "Device Breakpoint Calibration"],
  technologies: ["CSS Grid", "Flexbox", "Media Queries"],
  locationPages: false,  // true => src/config/locations.js ke har shehar ke liye /responsive-website-design-in-<city>/ page + sitemap
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
