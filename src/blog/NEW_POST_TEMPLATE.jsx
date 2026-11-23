/**
 * NAYA BLOG BANANE KA TEMPLATE
 * ----------------------------
 * 1. Is file ko COPY karo aur src/blog/posts/ folder me paste karo
 * 2. File ka naam rakho jaise: my-new-article.jsx   (ye naam hi URL banega agar slug na do)
 * 3. Neeche meta aur article ka content badlo
 * 4. Save karo - blog apne aap /blog/ page, homepage aur categories/tags me aa jayega.
 *
 * Note: ye template posts/ folder ke bahar hai, isliye ye khud blog nahi banta.
 */

export const meta = {
  // slug: 'custom-url-slug',        // optional. Na do to file ka naam use hoga -> /blog/<slug>/
  title: 'Aapke Blog Ka Title',
  excerpt: 'Blog cards aur Google description me dikhne wali 1-2 line ki summary.',
  date: '2026-11-20',                // YYYY-MM-DD (naye blog upar dikhte hain)
  category: 'Web Development',       // same naam likhoge to same category me judenge
  tags: ['React & Vite', 'SEO'],     // kitne bhi tags
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
  readingTime: 5,                    // minutes
  // related: ['slug-of-post-1', 'slug-of-post-2'], // optional. "Related Articles" me jo posts dikhane hain unke slug (file ka naam ya meta.slug). Na do to same category ke latest 3 dikhenge.
  // metaTitle: 'Custom SEO title',          // optional
  // metaDescription: 'Custom SEO description', // optional
  // author: { name: 'Mohit Rahangdale', role: 'Web Developer' }, // optional, default author config/site.js me hai
  // draft: true,                    // true karoge to blog publish nahi hoga (hide rahega)
};

export default function Post() {
  return (
    <>
      <p>Yaha intro paragraph likho.</p>

      <h2>Pehla Heading</h2>
      <p>Paragraph text. Aap <strong>bold</strong>, <a href="/contact-us/">links</a> sab use kar sakte ho.</p>

      <ul>
        <li>Point one</li>
        <li>Point two</li>
      </ul>

      <h3>Sub heading</h3>
      <p>Aur content...</p>

      {/* Image: <img src="https://..." alt="description" /> */}

      {/* Code dikhana ho to: <pre><code>{`const a = 1;`}</code></pre> */}
    </>
  );
}
