export const meta = {
  title: "E-commerce Website Development",
  category: "web_development",  // 'website_design' ya 'web_development'
  order: 11,
  icon: "shopping-bag",  // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | shield | globe
  shortDescription: "End-to-end e-commerce platforms engineered for seamless product discovery, checkout conversion, and order tracking.",
  fullDescription: "From custom shopping carts to multi-vendor marketplaces, our e-commerce development provides comprehensive catalog management, variation attributes, instant payment gateway processing, automated PDF invoices, and order status alerts.",
  deliverables: ["Product Catalog & Filter System", "Secure Cart & Checkout Workflow", "Payment Gateway Integration"],
  technologies: ["PHP", "MySQL", "React", "Razorpay", "Stripe"],
  locationPages: true,  // true => src/config/locations.js ke har shehar ke liye /ecommerce-website-development-in-<city>/ page + sitemap
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
