/**
 * NAYI SERVICE BANANE KA TEMPLATE
 * -------------------------------
 * 1. Is file ko COPY karo aur src/services/items/ folder me paste karo
 * 2. File ka naam rakho jaise: seo-services.jsx   (ye naam hi URL banega -> /services/seo-services/)
 * 3. Neeche meta badlo. Save karo - ye apne aap ho jayega:
 *      /services/ listing me card, /services/<slug>/ page, sitemap entry, footer link
 *      aur locationPages: true ho to har shehar ka page (/seo-services-in-bhopal/ ...)
 *
 * Note: ye template items/ ke bahar hai, isliye ye khud service nahi banta.
 */

export const meta = {
  // slug: 'custom-url-slug',     // optional. Na do to file ka naam use hoga
  title: 'Aapki Service Ka Naam',
  category: 'web_development',    // 'website_design' ya 'web_development'
  order: 16,                      // chhota number pehle dikhta hai
  icon: 'code',                   // layout | smartphone | code | cpu | shopping-bag | refresh-cw | tool | globe
  shortDescription: 'Card aur Google description me dikhne wali 1-2 line.',
  fullDescription: 'Service page par dikhne wala poora paragraph.',
  deliverables: ['Point one', 'Point two', 'Point three'],
  technologies: ['React', 'PHP'],
  locationPages: false,           // true => har shehar ke liye alag page + sitemap
  // faqs: [{ q: 'Question?', a: 'Answer.' }],
  // metaTitle: 'Custom SEO title',
  // metaDescription: 'Custom SEO description',
  // updated: '2026-11-25',       // sitemap <lastmod>
  // draft: true,                 // true => hide
};

// Optional: extra content (headings, paragraphs, lists) jo service page par dikhana ho
export default function Body() {
  return (
    <>
      <h2>Pehla Heading</h2>
      <p>Paragraph text. Aap <strong>bold</strong> aur <a href="/contact-us/">links</a> use kar sakte ho.</p>
    </>
  );
}
