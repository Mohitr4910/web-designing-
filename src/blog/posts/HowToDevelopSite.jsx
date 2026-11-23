export const meta = {
  slug: 'how-to-develop-a-website',
  title: 'How to Develop a Website: A Step-by-Step Guide for Businesses',
  excerpt:
    "If you run a business, a website is no longer optional. It's where customers check you out before they call, visit, or buy.",
  date: '2026-11-23', // YYYY-MM-DD
  category: 'Web Development',
  tags: [
    'Website Development',
    'Business Website',
    'Website Design',
    'SEO',
    'Website Cost India',
  ],
  // FEATURED IMAGE: yaha apni featured image ka path lagao
  // (public folder me image rakho, naam me space ya special character mat rakho)
  image: '/how-to-develop-a-website.webp',
  readingTime: 6,
  metaTitle: 'How to Develop a Website: A Step-by-Step Guide for Businesses',
  metaDescription:
    "If you run a business, a website is no longer optional. Learn the eight steps to develop a website, how long it takes and what it costs in India.",
};

/*
  Block types used inside each section:
  { t:'p', x:'text' }          (text supports [link](url) and **bold**)
  { t:'h3', x:'sub heading' }
  { t:'ul', items:[ 'text' | ['Bold label', 'text'] ] }
  { t:'table', head:[...], rows:[[...]] }
*/

const intro = [
  `If you run a business, a website is no longer optional. It's where customers check you out before they call, visit, or buy. But if you've never built one, the process can feel like a black box. How do you develop a website, and what actually happens between "I want a website" and "we're live"?`,
  `At WebLaunchPro, we build websites for businesses every day, and the process is the same whether you hire an agency or build it yourself. Here are the eight steps.`,
];

// n = step number badge (kept from the "1. 2. 3." in your headings)
const sections = [
  {
    id: 'define-the-goal',
    n: '01',
    title: 'Define the goal of your website',
    blocks: [
      { t: 'p', x: `Before design or code, answer one question: what should this website do for your business? Generate leads? Sell products online? Showcase your work? Take bookings?` },
      { t: 'p', x: `The goal decides everything that follows: the pages you need, the features you build and the budget you set. A website that tries to do everything usually does nothing well.` },
    ],
  },
  {
    id: 'plan-structure-and-content',
    n: '02',
    title: 'Plan the structure and content',
    blocks: [
      { t: 'p', x: `Next, decide which pages you need and how they connect. A typical business website has:` },
      { t: 'ul', items: ['Home', 'About', 'Services or Products', 'Contact', 'Blog (optional, but very useful for SEO)'] },
      { t: 'p', x: `Sketch a simple sitemap and list what goes on each page. Also think about content early: text, photos, logos and testimonials. Delayed content is the most common reason websites miss their launch date.` },
    ],
  },
  {
    id: 'choose-domain-and-hosting',
    n: '03',
    title: 'Choose your domain and hosting',
    blocks: [
      { t: 'p', x: `Your domain is your address (like yourbusiness.com) and hosting is where your website files live. Pick a domain that is short, easy to spell and matches your brand. For hosting, choose a reliable provider with good uptime and fast servers, because speed affects both visitors and Google rankings.` },
    ],
  },
  {
    id: 'design-the-look-and-feel',
    n: '04',
    title: 'Design the look and feel',
    blocks: [
      { t: 'p', x: `This is where your website gets its personality. Designers create layouts, usually in a tool like Figma, covering colours, fonts, spacing and how each page looks.` },
      { t: 'p', x: `Design for mobile first. Most people in India browse on their phones, so a layout that works beautifully on a small screen matters more than a perfect desktop view. We explain why in detail in our article on [why mobile-first design matters for Indian customers](https://weblaunchpro.in/blog/why-mobile-first-design-matters-for-indian-customers/).` },
      { t: 'h3', x: `A real example: Mathura Mithai Wala` },
      // IMAGE: apni image public folder me rakho aur yaha uska path/alt badlo
      { t: 'img', src: '/Screenshot 2026-11-23 143504.webp', alt: 'Mathura Mithai Wala website', href: 'https://mathura-mithai.vercel.app/' },
      { t: 'p', x: `Take [Mathura Mithai Wala](https://mathura-mithai.vercel.app/), a Bhopal sweet shop serving customers since 1974. The goal was clear: let customers explore the menu and specials, and order easily. The design reflects that. A rich, dark look with gold accents gives the brand a premium feel, the navigation is simple (Home, Our Story, Menu, Specials, Gallery, Reviews, Contact), and an "Order Now" button and a WhatsApp button are always within reach. That is what a goal-first design looks like in practice.` },
    ],
  },
  {
    id: 'develop-the-website',
    n: '05',
    title: 'Develop the website',
    blocks: [
      { t: 'p', x: `Now the design becomes a working website. There are three common approaches:` },
      {
        t: 'ul',
        items: [
          ['Website builders (Wix, Squarespace):', 'quick and cheap, but limited in flexibility and performance.'],
          ['CMS platforms (WordPress):', 'flexible, with many themes and plugins, and easy to manage content.'],
          ['Custom development (HTML, CSS, JavaScript, React and so on):', 'full control, better performance, and built exactly for your needs.'],
        ],
      },
      { t: 'p', x: `The right choice depends on your budget, your timeline and how much you expect the site to grow.` },
    ],
  },
  {
    id: 'add-content-and-seo',
    n: '06',
    title: 'Add content and optimize for SEO',
    blocks: [
      { t: 'p', x: `Once the structure is ready, add your real content. At this stage, set up the basics of SEO (search engine optimization):` },
      {
        t: 'ul',
        items: [
          'A clear title and meta description for every page',
          'Proper headings (H1, H2, H3)',
          'Descriptive image names and alt text',
          'Fast loading speed',
          'A sitemap submitted to Google Search Console',
        ],
      },
      { t: 'p', x: `Doing this during development is far easier than fixing it after launch.` },
    ],
  },
  {
    id: 'test-everything',
    n: '07',
    title: 'Test everything',
    blocks: [
      { t: 'p', x: `Before going live, test thoroughly:` },
      {
        t: 'ul',
        items: [
          'Do all links and forms work?',
          'Does the site look right on different phones, tablets and browsers?',
          'Does it load quickly?',
          'Is the contact form actually sending emails to you?',
        ],
      },
      { t: 'p', x: `Ask a few friends or colleagues to use the site without your guidance. They will find problems you've stopped noticing.` },
    ],
  },
  {
    id: 'launch-and-keep-improving',
    n: '08',
    title: 'Launch and keep improving',
    blocks: [
      { t: 'p', x: `Launching is the start, not the finish. After going live:` },
      {
        t: 'ul',
        items: [
          'Connect analytics to see who visits and what they do',
          'Keep backups and update the software regularly',
          'Publish fresh content, like blog posts, consistently',
          'Improve pages based on real visitor behaviour',
        ],
      },
      { t: 'p', x: `A website that is never updated slowly falls behind, in rankings and in how trustworthy it looks.` },
    ],
  },
  {
    id: 'how-long-does-it-take',
    title: 'How long does it take?',
    blocks: [
      { t: 'p', x: `A simple business website can take a few weeks. A larger site with custom features can take a few months. The more pages, features and custom design you need, the longer it takes.` },
    ],
  },
  {
    id: 'website-cost-in-india',
    title: 'How much does it cost to develop a website in India?',
    blocks: [
      { t: 'p', x: `Cost depends on the number of pages, the design, the features (like online ordering or payments) and the approach you choose. At WebLaunchPro, our pricing is simple and transparent:` },
      {
        t: 'table',
        head: ['Plan', 'Price'],
        rows: [
          ['Standard Plan', '₹7,999 (regular price ₹10,000)'],
          ['Premium Plan', '₹13,999 (regular price ₹30,000)'],
          ['Custom Plan', 'Custom quote'],
        ],
      },
      { t: 'p', x: `Need something bigger, like a custom platform or a complex set of features? Our Custom Plan is tailored to your scope, and we'll give you a clear quote after understanding your goals.` },
    ],
  },
  {
    id: 'build-yourself-or-hire-an-agency',
    title: 'Should you build it yourself or hire an agency?',
    blocks: [
      { t: 'p', x: `If you have time and your needs are simple, a website builder can work. If you need a professional look, strong performance, SEO and a site that can grow with your business, working with a development team usually saves time and money in the long run.` },
    ],
  },
];

const faqs = [
  ['How do I start developing a website?', 'Start with your goal and a simple list of pages. Then choose a domain, hosting and a development approach.'],
  ['Do I need to know coding to develop a website?', 'Not for builders like Wix or WordPress. For custom websites, a developer or agency handles the code.'],
  ['What is the first step in the website development process?', 'Defining the goal and planning the structure. Skipping this causes most of the problems later.'],
  ['How much does a website cost in India?', 'It depends on your requirements. At WebLaunchPro, plans start at ₹7,999 (plus 18% GST), and bigger projects are quoted individually.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const imgName = meta.image.split('/').pop();
const imgSel = [imgName, encodeURI(imgName)].map((n) => `img[src$="${n}"]`);

/* ------------------------------------------------------------------
   DESIGN: clean "Hostinger-style" blog post
   Brand purple (#673de6), white canvas, soft lavender surfaces, DM Sans
------------------------------------------------------------------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap');

.wl-post{
  --ac:#673de6; --ac-d:#5025d1; --ac-soft:#f4f0ff; --ac-line:#e3dafc;
  --dark:#2f1c6a; --ink:#1d1e20; --body:#3d3b52; --muted:#727586;
  --line:#e8e9ee; --card:#f8f7fc; --ok:#00b090;
  --font:'DM Sans',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  font-family:var(--font); color:var(--ink); background:#fff;
  font-size:1.0625rem; line-height:1.8; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
  max-width:100%; overflow-wrap:break-word}
.wl-post *{box-sizing:border-box}
.wl-post p{font-family:var(--font) !important; color:var(--body) !important; line-height:1.85 !important; margin:0 0 20px !important; font-size:1.0625rem !important}
.wl-post > p:first-of-type{font-size:1.3rem !important; line-height:1.65 !important; color:var(--ink) !important; font-weight:500; letter-spacing:-.01em}
.wl-post strong{color:var(--ink) !important; font-weight:700}
.wl-post a{color:var(--ac) !important; font-weight:600; text-decoration:underline; text-decoration-thickness:1.5px; text-underline-offset:3px; text-decoration-color:rgba(103,61,230,.35); transition:text-decoration-color .2s, color .2s}
.wl-post a:hover{color:var(--ac-d) !important; text-decoration-color:var(--ac)}
.wl-post ::selection{background:var(--ac); color:#fff}

/* reading progress bar (scroll-driven, no JS) */
.wl-progress{position:fixed; top:0; left:0; width:100%; height:4px; z-index:9999; transform-origin:0 50%; transform:scaleX(0); background:var(--ac); pointer-events:none}
@supports (animation-timeline:scroll()){
  .wl-progress{animation:wlprog linear both; animation-timeline:scroll(root)}
  @keyframes wlprog{to{transform:scaleX(1)}}
}

/* ---------- TABLE OF CONTENTS ---------- */
.wl-top{display:block; margin:36px 0 56px}
.wl-box{border-radius:24px; padding:30px 32px; background:var(--ac-soft); border:1px solid var(--ac-line)}
.wl-post .wl-box h3{margin:0 0 16px !important; padding:0 !important; border:0 !important; font-family:var(--font) !important; font-size:1.2rem !important; font-weight:700 !important; letter-spacing:-.02em; color:var(--ink) !important}
.wl-post .wl-box ol{margin:0 !important; padding:0 !important; list-style:none !important}
.wl-toc{counter-reset:toc; display:grid; gap:2px 36px; grid-template-columns:minmax(0,1fr)}
@media (min-width:760px){.wl-toc{grid-template-columns:repeat(2,minmax(0,1fr))}}
.wl-post .wl-toc li{margin:0 !important; padding:0 !important; list-style:none !important}
.wl-toc li::before{display:none !important}
.wl-post .wl-toc a{counter-increment:toc; display:flex; align-items:center; gap:14px; padding:10px 0; color:var(--ink) !important; font-weight:500; font-size:.99rem; line-height:1.4; text-decoration:none !important; transition:color .2s, transform .2s}
.wl-toc a::before{content:counter(toc,decimal-leading-zero); flex:none; min-width:24px; color:var(--ac); font-size:.82rem; font-weight:800; letter-spacing:.06em}
.wl-post .wl-toc a:hover{color:var(--ac) !important; transform:translateX(3px)}
.wl-toc a:focus-visible{outline:2px solid var(--ac); outline-offset:3px; border-radius:6px}

/* ---------- SECTION HEADINGS ---------- */
.wl-post h2.wl-h{display:block; margin:68px 0 22px !important; padding:0 !important; border:0 !important; scroll-margin-top:100px;
  font-family:var(--font) !important; font-size:clamp(1.55rem,3vw,2.1rem) !important; line-height:1.22 !important; font-weight:800 !important; letter-spacing:-.03em; color:var(--ink) !important; position:relative}
.wl-post h2.wl-h::before,.wl-post h2.wl-h::after{content:none !important}
.wl-post h2.wl-h > span.n{display:flex; align-items:center; gap:12px; margin:0 0 10px; color:var(--ac) !important; font-size:.95rem; font-weight:800; letter-spacing:.14em}
.wl-post h2.wl-h > span.n::after{content:""; width:44px; height:3px; border-radius:3px; background:var(--ac); opacity:.3}
.wl-post h2.wl-h > span.t{display:block}
.wl-post h2.wl-h.plain{display:block; padding-left:20px !important}
.wl-post h2.wl-h.plain::before{content:"" !important; position:absolute; left:0; top:.14em; bottom:.14em; width:6px; border-radius:6px; background:var(--ac)}

/* ---------- SUB HEADING ---------- */
.wl-post h3.wl-h3{display:flex; align-items:center; gap:12px; margin:40px 0 14px !important; padding:0 !important; border:0 !important; font-family:var(--font) !important; font-size:1.35rem !important; line-height:1.3 !important; font-weight:700 !important; letter-spacing:-.02em; color:var(--ink) !important}
.wl-post h3.wl-h3::before{content:""; flex:none; width:10px; height:10px; border-radius:50%; background:var(--ac); box-shadow:0 0 0 5px var(--ac-soft)}

/* ---------- IN-ARTICLE IMAGE ---------- */
.wl-fig{margin:6px 0 26px; padding:0; border-radius:24px; overflow:hidden; border:1px solid var(--line); background:var(--card); box-shadow:0 24px 50px -34px rgba(47,28,106,.55)}
.wl-fig img{display:block; width:100% !important; height:auto !important; max-height:none !important; object-fit:cover; transition:transform .5s}
.wl-post .wl-fig a{display:block; text-decoration:none !important; cursor:pointer; overflow:hidden}
.wl-post .wl-fig a:hover img{transform:scale(1.03)}
.wl-post .wl-fig a:focus-visible{outline:3px solid var(--ac); outline-offset:-3px}

/* ---------- LISTS ---------- */
.wl-post ul.wl-list{margin:0 0 26px !important; padding:0 !important; list-style:none !important; display:grid; gap:12px}
.wl-post ul.wl-list li{position:relative; list-style:none !important; margin:0 !important; padding:2px 0 2px 38px !important; color:var(--body) !important; line-height:1.7 !important}
.wl-post ul.wl-list li::marker{content:"" !important}
.wl-post ul.wl-list li::before{content:"✓" !important; position:absolute; left:0; top:3px; width:26px; height:26px; border-radius:50%; background:var(--ac-soft); color:var(--ac); font-size:.75rem; font-weight:800; display:grid; place-items:center; border:1px solid var(--ac-line)}

/* ---------- TABLE ---------- */
.wl-tablewrap{overflow-x:auto; margin:14px 0 28px; border:1px solid var(--line); border-radius:22px; box-shadow:0 18px 40px -30px rgba(47,28,106,.45); -webkit-overflow-scrolling:touch}
.wl-table{width:100%; border-collapse:separate; border-spacing:0; min-width:560px; background:#fff}
.wl-table th,.wl-table td{padding:18px 22px; text-align:left; border-bottom:1px solid var(--line); font-size:.98rem; line-height:1.5; vertical-align:top}
.wl-table th{background:var(--dark); color:#fff !important; font-weight:700; font-size:.92rem; letter-spacing:.02em}
.wl-table td{color:var(--body) !important}
.wl-table td:first-child{font-weight:700; color:var(--ink) !important; background:var(--card)}
.wl-table tbody tr:hover td{background:var(--ac-soft)}
.wl-table tr:last-child td{border-bottom:0}

/* ---------- FAQ ---------- */
.wl-faq{border:1px solid var(--line); border-radius:18px; background:#fff; margin:0 0 12px; overflow:hidden; transition:border-color .2s, box-shadow .2s}
.wl-faq:hover{border-color:var(--ac-line)}
.wl-faq summary{cursor:pointer; list-style:none; position:relative; padding:22px 66px 22px 24px; font-weight:700; font-size:1.05rem; color:var(--ink) !important; line-height:1.45; letter-spacing:-.01em}
.wl-faq summary::-webkit-details-marker{display:none}
.wl-faq summary:focus-visible{outline:2px solid var(--ac); outline-offset:-2px}
.wl-faq summary::after{content:"+" !important; position:absolute; right:20px; top:50%; transform:translateY(-50%); width:34px; height:34px; border-radius:50%; background:var(--ac-soft); color:var(--ac); display:grid; place-items:center; font-size:1.4rem; font-weight:500; line-height:1; transition:background .2s, color .2s, transform .25s}
.wl-faq[open]{border-color:var(--ac-line); box-shadow:0 18px 36px -28px rgba(103,61,230,.6)}
.wl-faq[open] summary{color:var(--ac) !important}
.wl-faq[open] summary::after{background:var(--ac); color:#fff; transform:translateY(-50%) rotate(45deg)}
.wl-post .wl-faq p{padding:0 24px; margin:0 0 22px !important; font-size:1.02rem !important}

/* ---------- CTA ---------- */
.wl-cta{position:relative; margin:72px 0 8px; padding:clamp(36px,6vw,64px) clamp(24px,5vw,56px); border-radius:30px; text-align:center; overflow:hidden; background:radial-gradient(110% 130% at 100% 0%,rgba(130,92,255,.75),transparent 55%),radial-gradient(90% 120% at 0% 100%,rgba(103,61,230,.6),transparent 55%),var(--dark)}
.wl-cta::before{content:""; position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,.14) 1px,transparent 1px); background-size:22px 22px; -webkit-mask-image:linear-gradient(180deg,transparent,#000 45%,transparent); mask-image:linear-gradient(180deg,transparent,#000 45%,transparent)}
.wl-post .wl-cta h3{position:relative; margin:0 0 14px !important; padding:0 !important; border:0 !important; display:block; font-family:var(--font) !important; color:#fff !important; font-size:clamp(1.7rem,4vw,2.5rem) !important; line-height:1.15 !important; font-weight:800 !important; letter-spacing:-.035em}
.wl-post .wl-cta h3::before{display:none}
.wl-post .wl-cta p{position:relative; color:#ddd6fb !important; max-width:620px; margin:0 auto !important; font-size:1.1rem !important}

.wl-btns{position:relative; display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-top:30px}
.wl-post a.wl-btn{display:inline-flex; align-items:center; justify-content:center; min-height:54px; padding:14px 32px; border-radius:14px; font-size:1rem; font-weight:700; text-decoration:none !important; transition:transform .2s, box-shadow .2s, background .2s}
.wl-post a.wl-btn:hover{transform:translateY(-3px)}
.wl-post a.wl-btn:focus-visible{outline:3px solid #fff; outline-offset:3px}
.wl-post a.wl-btn.p{background:#fff; color:var(--ac-d) !important; box-shadow:0 16px 30px -14px rgba(255,255,255,.6)}
.wl-post a.wl-btn.s{background:rgba(255,255,255,.1); color:#fff !important; border:1.5px solid rgba(255,255,255,.4)}
.wl-post a.wl-btn.s:hover{background:rgba(255,255,255,.2)}

@media (prefers-reduced-motion:reduce){
  .wl-post *{transition:none !important}
  .wl-progress{animation:none !important; display:none}
}

/* ---------- MOBILE ---------- */
@media (max-width:540px){
  .wl-post{font-size:1rem}
  .wl-post p{font-size:1rem !important}
  .wl-post > p:first-of-type{font-size:1.14rem !important}
  .wl-post h2.wl-h{margin-top:54px !important}
  .wl-box{padding:22px 18px; border-radius:20px}
  .wl-cta{border-radius:24px}
  .wl-post a.wl-btn{width:100%}
  .wl-faq summary{padding:18px 56px 18px 18px; font-size:1rem}
  .wl-post .wl-faq p{padding:0 18px}
  .wl-table th,.wl-table td{padding:14px 16px}
}

/* FEATURED IMAGE FIX: image crop na ho, poori dikhe. Ye apne aap meta.image ke naam se kaam karta hai, naam badlo to yaha kuch badalna nahi hai */
${imgSel.join(',')}{width:100% !important; height:auto !important; max-height:none !important; aspect-ratio:auto !important; object-fit:contain !important; border-radius:22px}
${imgSel.map((q) => `*:has(> ${q})`).join(',')}{height:auto !important; max-height:none !important; aspect-ratio:auto !important}
`;

/* Renders [text](url) links and **bold** inside a string */
function Rich({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = !link[2].includes('weblaunchpro.in');
      return (
        <a key={i} href={link[2]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {link[1]}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return part;
  });
}

function Item({ it }) {
  if (Array.isArray(it)) {
    return (
      <li>
        <strong>{it[0]}</strong> <Rich text={it[1]} />
      </li>
    );
  }
  return (
    <li>
      <Rich text={it} />
    </li>
  );
}

function Block({ b }) {
  switch (b.t) {
    case 'p':
      return (
        <p>
          <Rich text={b.x} />
        </p>
      );
    case 'h3':
      return <h3 className="wl-h3">{b.x}</h3>;
    case 'img':
      return (
        <figure className="wl-fig">
          {b.href ? (
            <a href={b.href} target="_blank" rel="noopener noreferrer" aria-label={b.alt}>
              <img src={b.src} alt={b.alt} loading="lazy" />
            </a>
          ) : (
            <img src={b.src} alt={b.alt} loading="lazy" />
          )}
        </figure>
      );
    case 'ul':
      return (
        <ul className="wl-list">
          {b.items.map((it, i) => (
            <Item key={i} it={it} />
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="wl-tablewrap">
          <table className="wl-table">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function Post() {
  return (
    <div className="wl-post">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="wl-progress" aria-hidden="true" />

      {intro.map((t, i) => (
        <p key={i}>{t}</p>
      ))}

      <div className="wl-top">
        <nav className="wl-box" aria-label="In this article">
          <h3>In This Article</h3>
          <ol className="wl-toc">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
            <li>
              <a href="#faqs">Frequently asked questions</a>
            </li>
          </ol>
        </nav>
      </div>

      {sections.map((s) => (
        <section key={s.id}>
          <h2 id={s.id} className={s.n ? 'wl-h' : 'wl-h plain'}>
            {s.n && <span className="n">{s.n}</span>}
            <span className="t">{s.title}</span>
          </h2>
          {s.blocks.map((b, k) => (
            <Block key={k} b={b} />
          ))}
        </section>
      ))}

      <h2 id="faqs" className="wl-h plain">Frequently asked questions</h2>
      {faqs.map(([q, a]) => (
        <details className="wl-faq" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}

      <div className="wl-cta">
        <h3>Ready to build your website?</h3>
        <p>
          At WebLaunchPro, we take your idea from planning to launch, with a fast, mobile-friendly, SEO-ready website.
          Call us today for a free consultation and let's build something your customers will love.
        </p>
        <div className="wl-btns">
          <a className="wl-btn p" href="/contact-us/">Get a Free Consultation</a>
          <a className="wl-btn s" href="https://wa.me/919302770758" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}