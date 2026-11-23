export const meta = {
  slug: 'why-mobile-first-design-matters-for-indian-customers',
  title: 'Why Mobile-First Design Matters for Indian Customers',
  excerpt:
    'Learn what mobile-first design is, why it matters for Indian customers, how it affects SEO, and how businesses can build a faster, easier mobile experience.',
  date: '2026-11-23', // YYYY-MM-DD
  category: 'Web Development',
  tags: [
    'Mobile-First Design',
    'Mobile-Friendly Website',
    'Responsive Web Design',
    'Website Development India',
    'Core Web Vitals',
    'Mobile SEO',
    'UPI Payments',
  ],
  // FEATURED IMAGE: yaha apni featured image ka path lagao
  // (public folder me image rakho, naam me space ya special character mat rakho)
  image: '/Mobile-First Design for Indian Customers.webp',
  readingTime: 14,
  metaTitle: 'Why Mobile-First Design Matters for Indian Customers',
  metaDescription:
    'Why does mobile-first design matter for Indian customers? Learn how it improves user experience, speed, SEO, payments and conversions for your business.',
};

/*
  Block types used inside each section:
  { t:'p', x:'text', b:'optional bold label' }
  { t:'h3', x:'sub heading' }        { t:'h4', x:'small heading' }
  { t:'b',  x:'bold label line' }
  { t:'ul', items:[ 'text' | ['Bold label', 'text'] ] }
  { t:'ol', items:[ 'text' | ['Bold label', 'text'] ] }
  { t:'ex', b:'Example:', x:'text' }   (highlighted example box)
  { t:'hl', x:'text' }                 (big highlighted statement)
  { t:'quote', x:'text' }              (quoted prompt / quote)
  { t:'code', x:'code text' }          (code block)
  { t:'src', label:'Source: ...', href:'https://...' }  (source link)
  { t:'step', title:'Step 1: ...', x:'text' }
  { t:'table', head:[...], rows:[[...]] }
  NEW:
  { t:'metrics', items:[ ['LCP', '2.5 seconds or less.'] ] }                (Core Web Vitals cards)
  { t:'cards', v:'feat' | 'bad', items:[ ['Title', 'text'] ] }       (grid cards: green tick / red cross)
  { t:'tool', label:'Google PageSpeed Insights', href:'https://...' } (tool link button)
*/

const reasons = [
  {
    id: 'what-is-mobile-first-design',
    title: 'What Is Mobile-First Design?',
    short: 'What Is Mobile-First Design?',
    blocks: [
      { t: 'p', x: `Mobile-first design is a website development approach in which designers and developers create the website for mobile devices first and then gradually adapt it for larger screens such as tablets, laptops, and desktops.` },
      { t: 'p', x: `Traditionally, many websites were designed for desktop computers first. Later, developers adjusted the layout to make it work on mobile devices.` },
      { t: 'hl', x: `Mobile-first design follows the opposite approach. It focuses on the needs of smartphone users from the beginning.` },
      { t: 'p', x: `For example:` },
      {
        t: 'ul',
        items: [
          'Content is easy to read on smaller screens.',
          'Navigation menus are simple and accessible.',
          'Buttons are large enough to tap comfortably.',
          'Images are optimized for mobile devices.',
          'Pages load quickly, even on slower internet connections.',
          'Important information is displayed without unnecessary scrolling.',
        ],
      },
      { t: 'p', x: `The main goal is to make websites simple, fast, accessible, and user-friendly for mobile visitors.` },
    ],
  },
  {
    id: 'why-important-for-indian-customers',
    title: 'Why Is Mobile-First Design Important for Indian Customers?',
    short: 'Why It Matters in India',
    blocks: [
      { t: 'p', x: `India has a large and diverse internet audience. People access websites using different smartphones, screen sizes, network conditions, and internet speeds.` },
      { t: 'p', x: `A website that works perfectly on a high-end laptop may not provide the same experience on an affordable smartphone.` },
      { t: 'p', x: `Let's understand the major reasons why mobile-first design is essential for Indian businesses.` },

      { t: 'h3', x: `A. Most Customers Access the Internet Through Smartphones` },
      { t: 'p', x: `Smartphones have made internet access easier for people across Indian cities, towns, and villages.` },
      { t: 'p', x: `Customers use their phones for almost everything, including:` },
      {
        t: 'ul',
        items: [
          'Searching for products and services on Google.',
          'Watching YouTube videos.',
          'Shopping on e-commerce websites.',
          'Booking hotels, tickets, and appointments.',
          'Comparing prices and reading reviews.',
          'Contacting businesses through WhatsApp.',
          'Making online payments.',
        ],
      },
      { t: 'p', x: `This means businesses cannot afford to ignore mobile visitors.` },
      { t: 'p', x: `If your website is difficult to use on a smartphone, you may lose potential customers before they even understand what your business offers.` },

      { t: 'h3', x: `B. Indian Customers Use Different Types of Smartphones` },
      { t: 'p', x: `Not every Indian customer owns an expensive smartphone.` },
      { t: 'p', x: `Many people use budget and mid-range Android smartphones with different screen resolutions, processing capabilities, and storage capacities.` },
      { t: 'p', x: `A website should work properly across different devices, not just the latest flagship smartphones.` },
      { t: 'p', x: `For better compatibility, developers should focus on:` },
      {
        t: 'ul',
        items: [
          'Flexible layouts.',
          'Responsive images.',
          'Lightweight website elements.',
          'Readable font sizes.',
          'Optimized CSS and JavaScript.',
          'Proper spacing between buttons and links.',
        ],
      },
      { t: 'p', x: `A well-designed mobile-first website provides a consistent experience across different devices.` },

      { t: 'h3', x: `C. Internet Speed Can Vary Across India` },
      { t: 'p', x: `Although internet connectivity has improved significantly in India, network quality can still vary depending on the user's location, network provider, and surroundings.` },
      { t: 'p', x: `A customer browsing your website on a stable 5G connection may experience fast loading, while someone using a slower 4G connection may face delays.` },
      { t: 'p', x: `This is why website speed optimization is an important part of mobile-first design.` },
      { t: 'p', x: `Businesses should:` },
      {
        t: 'ul',
        items: [
          'Compress images without losing unnecessary quality.',
          'Use modern image formats such as WebP or AVIF.',
          'Minimize unnecessary JavaScript.',
          'Remove unused CSS.',
          'Enable browser caching.',
          'Use efficient hosting and content delivery networks.',
          'Avoid unnecessary animations and heavy video backgrounds.',
        ],
      },
      { t: 'p', x: `A lightweight website helps customers access information without waiting too long.` },

      { t: 'h3', x: `D. Mobile Shopping Is Growing in India` },
      { t: 'p', x: `Online shopping has become a regular activity for many Indian consumers.` },
      { t: 'p', x: `People use smartphones to discover products, compare prices, check product details, read reviews, and place orders.` },
      { t: 'p', x: `If an e-commerce website has a complicated mobile checkout process, customers may abandon their carts.` },
      { t: 'p', x: `A mobile-friendly shopping experience should include:` },
      {
        t: 'ul',
        items: [
          'Clear product images.',
          'Easy-to-read product descriptions.',
          'Simple category navigation.',
          'Visible product prices.',
          'Easy-to-use add-to-cart buttons.',
          'A simple checkout process.',
          'Multiple convenient payment options.',
        ],
      },
      { t: 'p', x: `The easier it is for customers to shop on their smartphones, the better their overall shopping experience can be.` },
    ],
  },
  {
    id: 'mobile-first-improves-user-experience',
    title: 'How Mobile-First Design Improves User Experience',
    short: 'Better User Experience',
    blocks: [
      { t: 'p', x: `User experience, also known as UX, refers to how people interact with and feel about a website.` },
      { t: 'p', x: `A good mobile experience makes it easier for visitors to find information and complete their desired actions.` },
      { t: 'p', x: `Here are some important elements of mobile-first UX.` },

      { t: 'h3', x: `A. Simple Navigation` },
      { t: 'p', x: `Mobile screens have limited space. Therefore, websites should avoid complicated navigation systems.` },
      { t: 'p', x: `A simple navigation menu helps visitors quickly find important pages.` },
      { t: 'p', x: `For example:` },
      { t: 'ul', items: ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact Us'] },
      { t: 'p', x: `A hamburger menu can help organize navigation links without occupying too much screen space.` },

      { t: 'h3', x: `B. Readable Content` },
      { t: 'p', x: `Text that looks comfortable on a desktop may become difficult to read on a smartphone.` },
      { t: 'p', x: `Mobile-first websites should use:` },
      {
        t: 'ul',
        items: [
          'Appropriate font sizes.',
          'Clear headings and subheadings.',
          'Short paragraphs.',
          'Proper line spacing.',
          'Sufficient contrast between text and background.',
        ],
      },
      { t: 'p', x: `Breaking long content into smaller sections also makes blog articles easier to read.` },

      { t: 'h3', x: `C. Touch-Friendly Buttons` },
      { t: 'p', x: `Desktop users interact with a mouse, while mobile users interact with their fingers.` },
      { t: 'p', x: `Therefore, website buttons should be large enough to tap comfortably.` },
      { t: 'p', x: `For example:` },
      { t: 'ul', items: ['Call Now', 'WhatsApp Us', 'Get a Free Quote', 'Buy Now', 'Contact Us'] },
      { t: 'p', x: `Buttons should have enough spacing to prevent accidental clicks.` },

      { t: 'h3', x: `D. Easy Contact Options` },
      { t: 'p', x: `Indian customers often prefer quick communication before purchasing a product or service.` },
      { t: 'p', x: `Adding convenient contact options can improve the customer experience.` },
      { t: 'p', x: `Consider including:` },
      {
        t: 'ul',
        items: [
          'Click-to-call functionality.',
          'WhatsApp contact buttons.',
          'Simple inquiry forms.',
          'Email contact links.',
          'Google Maps directions for physical businesses.',
        ],
      },
      { t: 'p', x: `These features make it easier for customers to connect with your business directly from their smartphones.` },
    ],
  },
  {
    id: 'mobile-first-design-and-seo',
    title: 'Mobile-First Design and SEO: How Are They Connected?',
    short: 'Mobile-First and SEO',
    blocks: [
      { t: 'p', x: `Mobile-first design is not just about appearance. It also plays an important role in search engine optimization.` },
      { t: 'p', x: `Google primarily uses the mobile version of a website's content for indexing and ranking through mobile-first indexing.` },
      { t: 'p', x: `This means businesses should ensure that their mobile website provides access to the same important content and information as their desktop version.` },
      { t: 'p', x: `Here are some ways mobile-first design supports SEO.` },

      { t: 'h3', x: `A. Mobile-Friendly Website Structure` },
      { t: 'p', x: `A responsive website automatically adjusts its layout according to the user's screen size.` },
      { t: 'p', x: `This helps search engines and visitors access website content across different devices.` },

      { t: 'h3', x: `B. Better Page Speed` },
      { t: 'p', x: `Website speed affects the overall user experience.` },
      { t: 'p', x: `Google uses Core Web Vitals to evaluate important aspects of page experience.` },
      { t: 'p', x: `The three main Core Web Vitals metrics are:` },
      {
        t: 'ul',
        items: [
          ['LCP (Largest Contentful Paint):', 'Measures how quickly the main content becomes visible.'],
          ['INP (Interaction to Next Paint):', 'Measures how quickly a website responds to user interactions.'],
          ['CLS (Cumulative Layout Shift):', 'Measures unexpected layout movements while a page loads.'],
        ],
      },
      { t: 'p', x: `A good mobile-first website should aim for:` },
      {
        t: 'metrics',
        items: [
          ['LCP', '2.5 seconds or less.'],
          ['INP', '200 milliseconds or less.'],
          ['CLS', '0.1 or less.'],
        ],
      },
      { t: 'p', x: `These are Google's recommended thresholds for good Core Web Vitals performance.` },

      { t: 'h3', x: `C. Better Content Accessibility` },
      { t: 'p', x: `Important information should be available on both mobile and desktop versions.` },
      { t: 'p', x: `Avoid hiding essential content on mobile devices simply to save space.` },
      { t: 'p', x: `Your mobile website should contain important headings, descriptions, internal links, images, and structured information.` },

      { t: 'h3', x: `D. Better User Engagement` },
      { t: 'p', x: `A website that is easy to navigate encourages visitors to explore more pages and interact with your business.` },
      { t: 'p', x: `Although mobile usability alone does not guarantee higher Google rankings, it supports a better overall website experience.` },
    ],
  },
  {
    id: 'mobile-first-for-small-businesses',
    title: 'Why Mobile-First Design Is Important for Small Businesses in India',
    short: 'Small Businesses in India',
    blocks: [
      { t: 'p', x: `Small businesses often depend on online searches, social media, referrals, and local customers to generate leads.` },
      { t: 'p', x: `A professional mobile-friendly website can help them build trust and reach more potential customers.` },
      { t: 'p', x: `Let's understand some examples.` },

      { t: 'h3', x: `A. Local Service Businesses` },
      { t: 'p', x: `Consider a customer searching for a plumber, electrician, web designer, or digital marketing agency.` },
      { t: 'p', x: `They may search on Google using their smartphone.` },
      { t: 'p', x: `If your website clearly displays your services, location, contact number, and inquiry options, customers can contact you easily.` },

      { t: 'h3', x: `B. Restaurants and Cafes` },
      { t: 'p', x: `Restaurant customers frequently use mobile devices to check menus, locations, opening hours, and reviews.` },
      { t: 'p', x: `A mobile-first restaurant website should provide:` },
      {
        t: 'ul',
        items: [
          'Easy-to-read menus.',
          'Food images.',
          'Location details.',
          'Contact information.',
          'Table booking or ordering options.',
        ],
      },

      { t: 'h3', x: `C. Educational Institutions` },
      { t: 'p', x: `Students and parents often search for schools, colleges, coaching centres, and online courses through smartphones.` },
      { t: 'p', x: `A mobile-friendly educational website should make course details, admission information, fees, and contact forms easy to access.` },

      { t: 'h3', x: `D. E-Commerce Businesses` },
      { t: 'p', x: `Online stores need a smooth mobile shopping experience.` },
      { t: 'p', x: `Customers should be able to browse products, check prices, add items to their carts, and complete payments without difficulty.` },
      { t: 'p', x: `A confusing mobile checkout experience can result in lost sales.` },
    ],
  },
  {
    id: 'mobile-first-design-for-indian-payment-methods',
    title: 'Mobile-First Design for Indian Payment Methods',
    short: 'Indian Payment Methods',
    blocks: [
      { t: 'p', x: `Digital payments have become an important part of everyday online transactions in India.` },
      { t: 'p', x: `UPI applications such as Google Pay, PhonePe, and Paytm have made digital payments convenient for millions of users.` },
      { t: 'p', x: `For businesses selling products or services online, the payment experience should be simple and mobile-friendly.` },
      { t: 'p', x: `Consider these important features:` },
      {
        t: 'ul',
        items: [
          'Mobile-friendly checkout pages.',
          'UPI payment options.',
          'QR code payment support where appropriate.',
          'Clear payment instructions.',
          'Secure payment gateway integration.',
          'Order confirmation messages.',
          'Simple payment error handling.',
        ],
      },
      { t: 'p', x: `Businesses should also ensure that their payment pages work correctly across different mobile browsers and screen sizes.` },
      { t: 'p', x: `A smooth payment experience helps reduce unnecessary friction during checkout.` },
    ],
  },
  {
    id: 'mobile-first-vs-responsive-web-design',
    title: 'Mobile-First Design vs Responsive Web Design',
    short: 'Mobile-First vs Responsive',
    blocks: [
      { t: 'p', x: `Many people use mobile-first design and responsive web design interchangeably. However, they are slightly different concepts.` },
      {
        t: 'table',
        head: ['Mobile-First Design', 'Responsive Web Design'],
        rows: [
          ['Starts the design process with mobile devices.', 'Makes layouts adapt to different screen sizes.'],
          ['Prioritizes mobile user experience.', 'Focuses on layout flexibility across devices.'],
          ['Adds features for larger screens progressively.', 'Adjusts the layout using flexible grids and media queries.'],
          ['Helps prioritize essential content and functionality.', 'Ensures consistent presentation across screen sizes.'],
        ],
      },
      { t: 'p', x: `Both approaches work together.` },
      { t: 'p', x: `A modern website should ideally follow a mobile-first development approach and use responsive design techniques to provide a consistent experience across smartphones, tablets, and desktops.` },
    ],
  },
  {
    id: 'important-features-of-a-mobile-first-website',
    title: 'Important Features Every Mobile-First Website Should Have',
    short: 'Must-Have Features',
    blocks: [
      { t: 'p', x: `If you are planning to build a website for your business, consider including the following features.` },
      {
        t: 'cards',
        v: 'feat',
        items: [
          ['Responsive Layout', 'Your website should automatically adjust to different screen sizes without horizontal scrolling or broken layouts.'],
          ['Fast Loading Speed', 'Optimize images, scripts, fonts, and other resources to improve loading performance.'],
          ['Simple Navigation', 'Keep menus clear and make important pages easy to find.'],
          ['Mobile-Friendly Forms', 'Inquiry and contact forms should have readable fields, appropriate input types, and simple submission processes.'],
          ['Optimized Images and Videos', 'Use compressed images and avoid loading large media files unnecessarily.'],
          ['Clickable Contact Information', 'Phone numbers, email addresses, and WhatsApp links should be easy to use on mobile devices.'],
          ['Secure Website', 'Use HTTPS and follow good security practices to protect website visitors and their information.'],
          ['Clear Call-to-Action Buttons', 'Use visible buttons that guide visitors toward meaningful actions such as contacting your business, requesting a quote, or purchasing a product.'],
        ],
      },
    ],
  },
  {
    id: 'common-mobile-website-design-mistakes',
    title: 'Common Mobile Website Design Mistakes to Avoid',
    short: 'Mistakes to Avoid',
    blocks: [
      { t: 'p', x: `Even professionally designed websites can have mobile usability problems.` },
      { t: 'p', x: `Here are some common mistakes businesses should avoid:` },
      {
        t: 'cards',
        v: 'bad',
        items: [
          ['Small Text', 'Tiny fonts make website content difficult to read.'],
          ['Oversized Images', 'Large images can slow down page loading.'],
          ['Complicated Menus', 'Too many navigation options can confuse visitors.'],
          ['Too Many Pop-Ups', 'Unnecessary pop-ups can interrupt the browsing experience.'],
          ['Small Buttons', 'Buttons that are difficult to tap can frustrate users.'],
          ['Horizontal Scrolling', 'Visitors should not have to scroll sideways to read normal page content.'],
          ['Slow Checkout', 'Complicated checkout processes can discourage customers from completing purchases.'],
          ['Desktop-Only Features', 'Important content and functionality should not disappear on mobile devices.'],
        ],
      },
      { t: 'p', x: `Avoiding these mistakes can help create a smoother mobile experience.` },
    ],
  },
  {
    id: 'how-to-test-mobile-friendliness',
    title: 'How to Test Whether Your Website Is Mobile-Friendly',
    short: 'Testing Your Website',
    blocks: [
      { t: 'p', x: `Building a mobile-first website is only the beginning. Regular testing is equally important.` },
      { t: 'p', x: `Here are some useful tools and methods.` },

      { t: 'h3', x: `A. Google PageSpeed Insights` },
      { t: 'p', x: `Use Google PageSpeed Insights to check your website's performance on mobile and desktop devices.` },
      { t: 'p', x: `It provides information about:` },
      {
        t: 'ul',
        items: [
          'Largest Contentful Paint.',
          'Interaction to Next Paint.',
          'Cumulative Layout Shift.',
          'Performance opportunities.',
          'Accessibility and SEO-related recommendations.',
        ],
      },
      { t: 'tool', label: 'Website: Google PageSpeed Insights', href: 'https://pagespeed.web.dev/' },

      { t: 'h3', x: `B. Google Search Console` },
      { t: 'p', x: `Google Search Console helps website owners monitor indexing, search performance, and other technical SEO issues.` },
      { t: 'p', x: `You can use it to understand how Google accesses your website and identify indexing-related problems.` },
      { t: 'tool', label: 'Website: Google Search Console', href: 'https://search.google.com/search-console/' },

      { t: 'h3', x: `C. Test on Real Smartphones` },
      { t: 'p', x: `Do not depend only on desktop browser previews.` },
      { t: 'p', x: `Test your website on different Android and iPhone devices.` },
      { t: 'p', x: `Check:` },
      {
        t: 'ul',
        items: [
          'Whether text is readable.',
          'Whether buttons work properly.',
          'Whether menus open correctly.',
          'Whether images fit the screen.',
          'Whether forms can be submitted easily.',
          'Whether pages load properly on mobile networks.',
        ],
      },
      { t: 'p', x: `Real-device testing helps identify problems that may not appear in desktop previews.` },
    ],
  },
  {
    id: 'future-of-mobile-first-website-design-in-india',
    title: 'The Future of Mobile-First Website Design in India',
    short: 'The Future in India',
    blocks: [
      { t: 'p', x: `India's digital ecosystem continues to evolve.` },
      { t: 'p', x: `With increasing smartphone usage, digital payments, online shopping, social media, and local online searches, mobile experiences will remain important for businesses.` },
      { t: 'p', x: `Customers increasingly expect websites to be fast, accessible, easy to navigate, and simple to use.` },
      { t: 'p', x: `Businesses that invest in better mobile experiences can make it easier for potential customers to discover their services, understand their offerings, and contact them.` },
      { t: 'hl', x: `Mobile-first design is not just a temporary web design trend. It is an important approach to building websites that meet the changing expectations of internet users.` },
    ],
  },
];

const faqs = [
  ['What is mobile-first design in web development?', 'Mobile-first design is a web development approach in which a website is designed for smartphones first and then adapted for larger screens such as tablets and desktops.'],
  ['Why is mobile-first design important for Indian businesses?', 'It is important because many Indian customers use smartphones to search for businesses, compare products, shop online, make payments, and access services. A mobile-friendly website helps provide a better browsing experience.'],
  ['Does mobile-first design improve SEO?', 'Mobile-first design supports better mobile usability and accessibility. Google primarily uses the mobile version of website content for indexing. However, mobile-first design alone does not guarantee higher rankings.'],
  ['What is the difference between mobile-first and responsive design?', 'Mobile-first design is an approach that prioritizes smartphone users during the design process. Responsive design is a technique that adjusts website layouts according to different screen sizes. Both can be used together.'],
  ['How can I make my website mobile-friendly?', 'You can make your website mobile-friendly by using responsive layouts, readable fonts, optimized images, simple navigation, touch-friendly buttons, and fast-loading pages.'],
  ['Does website loading speed matter for Indian mobile users?', 'Yes. Internet speeds and network conditions vary across India. A lightweight, fast-loading website can provide a better experience for users on slower connections.'],
  ['Which tools can I use to test my mobile website?', 'Google PageSpeed Insights, Google Search Console, and real-device browser testing are useful ways to evaluate website performance and mobile usability.'],
  ['Is mobile-first design necessary for small businesses?', 'Yes. Small businesses can benefit from mobile-first design because customers often discover local services, contact businesses, and compare offerings using smartphones.'],
  ['Does mobile-first design help increase website conversions?', 'It can help improve conversions by making navigation, forms, product browsing, and checkout processes easier. Actual results also depend on pricing, product quality, trust, and the overall customer journey.'],
  ['Should I build a separate mobile website or use responsive design?', 'For most businesses, a single responsive website built with a mobile-first approach is a practical solution. It provides a consistent experience across devices and is generally easier to maintain.'],
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

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Sora:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

.wl-post{--ac:#4f46e5; --ac2:#06b6d4; --ac-soft:#eef2ff; --ac-line:#c7d2fe; --ink:#0b1220; --body:#3b475c; --muted:#64748b; --line:#e5e9f2; --card:#f7f9fc; --navy:#0b1220; --gold:#e3b95b; --gold-d:#b8892b; --ok:#0f9d6b; --ok-soft:#e8f8f1; --bad:#d6455d; --bad-soft:#fdeef1;
  --head:'Sora','DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  --text:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
  font-family:var(--text); color:var(--ink); background:#fff; font-size:1.05rem}
.wl-post *{box-sizing:border-box}
.wl-post p{font-family:var(--text) !important; color:var(--body) !important; line-height:1.85 !important; margin:0 0 18px !important}
.wl-post > p:first-of-type{font-size:1.2rem !important; line-height:1.75 !important; color:var(--ink) !important; font-weight:500}
.wl-post strong{color:var(--ink) !important; font-weight:700}
.wl-post a{color:var(--ac) !important; text-decoration:underline; text-underline-offset:3px}

/* reading progress bar (scroll-driven, no JS) */
.wl-progress{position:fixed; top:0; left:0; width:100%; height:3px; z-index:9999; transform-origin:0 50%; transform:scaleX(0); background:linear-gradient(90deg,var(--ac),var(--ac2)); pointer-events:none}
@supports (animation-timeline:scroll()){
  .wl-progress{animation:wlprog linear both; animation-timeline:scroll(root)}
  @keyframes wlprog{to{transform:scaleX(1)}}
}

/* top boxes */
.wl-top{display:grid; gap:20px; align-items:start; margin:32px 0 44px; grid-template-columns:minmax(0,1fr)}
.wl-box{border:1px solid var(--line); border-radius:20px; padding:24px 26px; background:var(--card)}
.wl-box.key{background:var(--navy); border-color:var(--navy)}
.wl-post .wl-box h3{margin:0 0 14px !important; font-family:var(--head) !important; font-size:1.02rem !important; font-weight:700 !important; letter-spacing:-.01em; color:var(--ink) !important; border:0 !important; padding:0 !important}
.wl-post .wl-box.key h3{color:#fff !important}
.wl-post .wl-box ul,.wl-post .wl-box ol{margin:0 !important; padding:0 !important; list-style:none !important}
.wl-post .wl-box li{margin:0 !important; padding:7px 0 7px 32px !important; position:relative; color:var(--body) !important; font-size:.96rem !important; line-height:1.5 !important; list-style:none !important}
.wl-post .wl-box.key li{color:#cbd5e1 !important}
.wl-box.key li::before{content:"✓" !important; position:absolute; left:0; top:7px; width:20px; height:20px; border-radius:50%; background:var(--ac2); color:#062a33; font-size:.7rem; font-weight:800; display:grid; place-items:center}
.wl-toc{counter-reset:toc}
.wl-toc li::before{counter-increment:toc; content:counter(toc) !important; position:absolute; left:0; top:7px; width:20px; height:20px; border-radius:6px; background:var(--navy); color:var(--gold); font-size:.66rem; font-weight:700; display:grid; place-items:center}
.wl-post .wl-toc a{color:var(--ink) !important; text-decoration:none; font-weight:500}
.wl-post .wl-toc a:hover{color:var(--ac) !important}

/* section headings */
.wl-post h2.wl-h{display:flex; align-items:center; gap:14px; margin:56px 0 20px !important; padding:0 0 14px !important;
  font-family:var(--head) !important; font-size:clamp(1.35rem,2.6vw,1.75rem) !important; line-height:1.28 !important; font-weight:700 !important; letter-spacing:-.02em; color:var(--ink) !important;
  border:0 !important; border-bottom:1px solid var(--line) !important; scroll-margin-top:110px; position:relative}
.wl-post h2.wl-h::before,.wl-post h2.wl-h::after{content:none !important}
.wl-post h2.wl-h > span.n{flex:none; min-width:48px; height:48px; padding:0 8px; display:grid; place-items:center; border-radius:14px; background:var(--navy); color:var(--gold) !important; font-family:var(--head); font-size:1rem; font-weight:700; letter-spacing:.02em; box-shadow:0 0 0 3px #fff, 0 0 0 4px rgba(227,185,91,.55), 0 10px 20px -10px rgba(11,18,32,.6)}
.wl-post h2.wl-h > span.t{flex:1}
.wl-post h2.wl-h.plain{padding-left:18px !important; border-bottom:0 !important}
.wl-post h2.wl-h.plain::before{content:"" !important; position:absolute; left:0; top:4px; bottom:16px; width:5px; border-radius:5px; background:linear-gradient(var(--ac),var(--ac2))}

/* sub headings (A, B, C, D) */
.wl-post h3.wl-h3{margin:38px 0 14px !important; padding:0 0 0 16px !important; font-family:var(--head) !important; font-size:1.2rem !important; line-height:1.35 !important; font-weight:700 !important; letter-spacing:-.01em; color:var(--ink) !important; border:0 !important; border-left:4px solid var(--gold) !important; border-radius:2px}
.wl-post h4.wl-h4{margin:22px 0 8px !important; padding:0 !important; font-family:var(--head) !important; font-size:1rem !important; line-height:1.4 !important; font-weight:600 !important; color:var(--ac) !important; border:0 !important}
.wl-post .wl-b{margin:16px 0 8px !important; font-weight:700; color:var(--ink) !important}

/* lists */
.wl-post ul.wl-list,.wl-post ol.wl-list{margin:0 0 22px !important; padding:0 !important; list-style:none !important; display:grid; gap:9px}
.wl-post ul.wl-list li{position:relative; list-style:none !important; margin:0 !important; padding:0 0 0 28px !important; color:var(--body) !important; line-height:1.7 !important}
.wl-post ul.wl-list li::marker,.wl-post ol.wl-list li::marker{content:"" !important}
.wl-post ul.wl-list li::before{content:"" !important; position:absolute; left:4px; top:.62em; width:9px; height:9px; border-radius:2px; background:var(--gold-d); transform:rotate(45deg)}
.wl-post ol.wl-list{counter-reset:ol}
.wl-post ol.wl-list li{position:relative; list-style:none !important; margin:0 !important; padding:2px 0 2px 40px !important; color:var(--body) !important; line-height:1.7 !important; counter-increment:ol}
.wl-post ol.wl-list li::before{content:counter(ol) !important; position:absolute; left:0; top:3px; width:27px; height:27px; border-radius:50%; background:var(--navy); color:var(--gold); font-family:var(--head); font-size:.78rem; font-weight:700; display:grid; place-items:center}

/* highlighted statement */
.wl-hl{margin:10px 0 24px; padding:22px 26px; border-radius:18px; background:linear-gradient(135deg,var(--ac-soft),#ecfeff); border:1px solid var(--ac-line); position:relative}
.wl-hl::before{content:"“"; position:absolute; left:16px; top:-6px; font-family:var(--head); font-size:3.4rem; line-height:1; color:var(--ac); opacity:.35}
.wl-post .wl-hl p{margin:0 !important; padding-left:10px; font-family:var(--head) !important; font-size:1.08rem !important; font-weight:600; line-height:1.6 !important; color:#27257a !important}

/* example callout */
.wl-tip{display:flex; gap:12px; align-items:flex-start; margin:8px 0 20px; padding:16px 18px; border-radius:16px; background:var(--ac-soft); border:1px solid var(--ac-line)}
.wl-tip i{font-style:normal; flex:none; font-size:1.1rem; line-height:1.5}
.wl-post .wl-tip p{margin:0 !important; font-size:.98rem !important; color:#27257a !important; line-height:1.65 !important}
.wl-post .wl-tip strong{color:#27257a !important}

/* step cards */
.wl-step{margin:0 0 12px; padding:16px 20px; border:1px solid var(--line); border-radius:16px; background:#fff; position:relative; overflow:hidden}
.wl-step::before{content:""; position:absolute; left:0; top:0; bottom:0; width:4px; background:linear-gradient(var(--ac),var(--ac2))}
.wl-post .wl-step b{display:block; margin-bottom:4px; font-family:var(--head); color:var(--ink) !important; font-size:.98rem; font-weight:700}
.wl-post .wl-step p{margin:0 !important; font-size:.98rem !important; line-height:1.65 !important}

/* Core Web Vitals metric cards */
.wl-metrics{display:grid; gap:14px; margin:6px 0 20px; grid-template-columns:minmax(0,1fr)}
@media (min-width:640px){.wl-metrics{grid-template-columns:repeat(3,minmax(0,1fr))}}
.wl-metric{padding:20px 22px; border-radius:18px; background:var(--navy); position:relative; overflow:hidden}
.wl-metric::after{content:""; position:absolute; right:-30px; top:-30px; width:90px; height:90px; border-radius:50%; background:radial-gradient(circle,rgba(6,182,212,.35),transparent 70%)}
.wl-post .wl-metric b{display:block; font-family:var(--head); font-size:.8rem; font-weight:600; letter-spacing:.04em; color:var(--gold) !important}
.wl-post .wl-metric span.v{display:block; margin:6px 0 0; font-family:var(--head); font-size:1.25rem; font-weight:800; letter-spacing:-.02em; color:#fff !important}
.wl-post .wl-metric p{margin:0 !important; font-size:.86rem !important; line-height:1.5 !important; color:#94a3b8 !important}

/* feature / mistake cards */
.wl-cards{display:grid; gap:14px; margin:6px 0 22px; grid-template-columns:minmax(0,1fr)}
@media (min-width:700px){.wl-cards{grid-template-columns:repeat(2,minmax(0,1fr))}}
.wl-card{display:flex; gap:14px; align-items:flex-start; padding:18px 20px; border-radius:18px; background:#fff; border:1px solid var(--line)}
.wl-card .ic{flex:none; width:30px; height:30px; border-radius:50%; display:grid; place-items:center; font-size:.85rem; font-weight:800; margin-top:1px}
.wl-card.feat{border-color:#cdeee0; background:linear-gradient(180deg,#fff,var(--ok-soft))}
.wl-card.feat .ic{background:var(--ok); color:#fff}
.wl-card.bad{border-color:#f6d0d7; background:linear-gradient(180deg,#fff,var(--bad-soft))}
.wl-card.bad .ic{background:var(--bad); color:#fff}
.wl-post .wl-card b{display:block; margin-bottom:4px; font-family:var(--head); font-size:.98rem; font-weight:700; color:var(--ink) !important; line-height:1.35}
.wl-post .wl-card p{margin:0 !important; font-size:.93rem !important; line-height:1.6 !important}

/* tool link button */
.wl-post a.wl-tool{display:inline-flex; align-items:center; gap:10px; margin:0 0 24px; padding:12px 18px; border-radius:14px; background:var(--card); border:1px solid var(--line); font-family:var(--head); font-size:.9rem; font-weight:600; color:var(--ink) !important; text-decoration:none; word-break:break-word; transition:border-color .2s, transform .2s}
.wl-post a.wl-tool:hover{border-color:var(--ac); transform:translateY(-1px)}
.wl-post a.wl-tool:focus-visible{outline:2px solid var(--ac); outline-offset:3px}
.wl-post a.wl-tool span.u{font-weight:500; color:var(--ac) !important; font-family:'JetBrains Mono',ui-monospace,monospace; font-size:.8rem}

/* table */
.wl-tablewrap{overflow-x:auto; margin:10px 0 24px; border:1px solid var(--line); border-radius:18px}
.wl-table{width:100%; border-collapse:collapse; min-width:580px; background:#fff}
.wl-table th,.wl-table td{padding:14px 18px; text-align:left; border-bottom:1px solid var(--line); font-size:.95rem; line-height:1.5; vertical-align:top}
.wl-table th{background:var(--navy); color:#fff !important; font-family:var(--head); font-weight:600; font-size:.9rem}
.wl-table th:nth-child(2){background:#1a2440}
.wl-table td{color:var(--body) !important}
.wl-table td:first-child{font-weight:700; color:var(--ink) !important; background:var(--card)}
.wl-table tr:last-child td{border-bottom:0}

/* conclusion */
.wl-concl{border-radius:22px; padding:28px 30px; background:var(--ac-soft); border:1px solid var(--ac-line)}
.wl-concl p:last-child{margin-bottom:0 !important}

/* FAQ */
.wl-faq{border:1px solid var(--line); border-radius:16px; background:#fff; margin:0 0 12px; overflow:hidden; transition:border-color .2s}
.wl-faq summary{cursor:pointer; list-style:none; position:relative; padding:18px 58px 18px 20px; font-family:var(--head); font-weight:600; font-size:.98rem; color:var(--ink) !important; line-height:1.45}
.wl-faq summary::-webkit-details-marker{display:none}
.wl-faq summary:focus-visible{outline:2px solid var(--ac); outline-offset:-2px}
.wl-faq summary::after{content:"+" !important; position:absolute; right:16px; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%; background:var(--ac-soft); color:var(--ac); display:grid; place-items:center; font-size:1.2rem; font-weight:600}
.wl-faq[open]{border-color:var(--ac-line)}
.wl-faq[open] summary::after{content:"–" !important; background:var(--ac); color:#fff}
.wl-post .wl-faq p{padding:0 20px 4px; margin:0 0 16px !important}

/* CTA */
.wl-cta{margin:56px 0 8px; padding:44px 28px; border-radius:26px; text-align:center; background:radial-gradient(120% 140% at 85% 0%,rgba(79,70,229,.55),transparent 55%),radial-gradient(90% 120% at 0% 100%,rgba(6,182,212,.35),transparent 55%),var(--navy)}
.wl-post .wl-cta h3{margin:0 0 10px !important; font-family:var(--head) !important; color:#fff !important; font-size:clamp(1.35rem,3vw,1.75rem) !important; font-weight:700 !important; letter-spacing:-.02em; border:0 !important; padding:0 !important}
.wl-post .wl-cta p{color:#cbd5e1 !important; max-width:580px; margin:0 auto 24px !important}
.wl-btns{display:flex; flex-wrap:wrap; gap:12px; justify-content:center}
.wl-post a.wl-btn{display:inline-block; padding:13px 26px; border-radius:14px; font-family:var(--head); font-size:.95rem; font-weight:600; text-decoration:none !important; transition:transform .2s, box-shadow .2s}
.wl-post a.wl-btn:hover{transform:translateY(-2px)}
.wl-post a.wl-btn:focus-visible{outline:2px solid #fff; outline-offset:3px}
.wl-post a.wl-btn.p{background:#fff; color:var(--ink) !important}
.wl-post a.wl-btn.s{background:rgba(255,255,255,.08); color:#fff !important; border:1px solid rgba(255,255,255,.3)}

@media (prefers-reduced-motion:reduce){.wl-btn,.wl-faq,.wl-tool{transition:none} .wl-progress{animation:none !important; display:none}}

/* mobile tweaks */
@media (max-width:540px){
  .wl-post{font-size:1rem}
  .wl-post h2.wl-h{gap:10px}
  .wl-post h2.wl-h > span.n{min-width:40px; height:40px; border-radius:12px; font-size:.9rem}
  .wl-concl{padding:22px 20px}
  .wl-box{padding:20px 18px}
}

/* quote, code, source */
.wl-quote{margin:8px 0 20px; padding:18px 22px; border-radius:16px; background:var(--card); border:1px solid var(--line); border-left:4px solid var(--gold-d)}
.wl-post .wl-quote p{margin:0 !important; font-style:italic; font-size:1.02rem !important; color:var(--ink) !important; line-height:1.7 !important}
.wl-code{margin:8px 0 24px; padding:20px 22px; background:var(--navy); border-radius:16px; overflow-x:auto}
.wl-code code{display:block; font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:.86rem; line-height:1.7; color:#e2e8f0; white-space:pre}
.wl-post p.wl-src{margin:0 0 20px !important; padding:12px 16px; border-radius:12px; background:var(--card); border:1px solid var(--line); font-size:.92rem !important; line-height:1.6 !important; word-break:break-word}

/* FEATURED IMAGE FIX: image crop na ho, poori dikhe. Ye apne aap meta.image ke naam se kaam karta hai, naam badlo to yaha kuch badalna nahi hai */
${imgSel.join(',')}{width:100% !important; height:auto !important; max-height:none !important; aspect-ratio:auto !important; object-fit:contain !important}
${imgSel.map((q) => `*:has(> ${q})`).join(',')}{height:auto !important; max-height:none !important; aspect-ratio:auto !important}
`;

function Item({ it }) {
  if (Array.isArray(it)) {
    return (
      <li>
        <strong>{it[0]}</strong> {it[1]}
      </li>
    );
  }
  return <li>{it}</li>;
}

function Block({ b }) {
  switch (b.t) {
    case 'p':
      return (
        <p>
          {b.b && (
            <>
              <strong>{b.b}</strong>{' '}
            </>
          )}
          {b.x}
        </p>
      );
    case 'h3':
      return <h3 className="wl-h3">{b.x}</h3>;
    case 'h4':
      return <h4 className="wl-h4">{b.x}</h4>;
    case 'b':
      return <p className="wl-b">{b.x}</p>;
    case 'ul':
      return (
        <ul className="wl-list">
          {b.items.map((it, i) => (
            <Item key={i} it={it} />
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="wl-list">
          {b.items.map((it, i) => (
            <Item key={i} it={it} />
          ))}
        </ol>
      );
    case 'ex':
      return (
        <div className="wl-tip">
          <i aria-hidden="true">💡</i>
          <p>
            <strong>{b.b}</strong> {b.x}
          </p>
        </div>
      );
    case 'hl':
      return (
        <div className="wl-hl">
          <p>{b.x}</p>
        </div>
      );
    case 'step':
      return (
        <div className="wl-step">
          <b>{b.title}</b>
          <p>{b.x}</p>
        </div>
      );
    case 'metrics':
      return (
        <div className="wl-metrics">
          {b.items.map(([k, v]) => (
            <div className="wl-metric" key={k}>
              <b>{k}:</b>
              <span className="v">{v}</span>
            </div>
          ))}
        </div>
      );
    case 'cards':
      return (
        <div className="wl-cards">
          {b.items.map(([title, text]) => (
            <div className={`wl-card ${b.v}`} key={title}>
              <span className="ic" aria-hidden="true">{b.v === 'bad' ? '✕' : '✓'}</span>
              <div>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'tool':
      return (
        <a className="wl-tool" href={b.href} target="_blank" rel="noopener noreferrer">
          <span>{b.label}</span>
          <span className="u">{b.href}</span>
        </a>
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
    case 'quote':
      return (
        <blockquote className="wl-quote">
          <p>{b.x}</p>
        </blockquote>
      );
    case 'code':
      return (
        <pre className="wl-code">
          <code>{b.x}</code>
        </pre>
      );
    case 'src':
      return (
        <p className="wl-src">
          <strong>{b.label}</strong>{' '}
          <a href={b.href} target="_blank" rel="noopener noreferrer">{b.href}</a>
        </p>
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

      <h2 className="wl-h plain">Let's Understand the Importance of Mobile-First Design</h2>

      <p>
        Imagine a customer searching for a product, service, restaurant, or website development agency on Google. They
        click on your website using their smartphone, but the page takes too long to load. The text is difficult to read,
        buttons are too small, and the layout does not fit their screen properly.
      </p>
      <p>What will they do?</p>
      <div className="wl-hl">
        <p>Most likely, they will leave your website and visit a competitor.</p>
      </div>
      <p>
        This is why <strong>mobile-first design matters for Indian customers</strong>. In India, smartphones have become
        one of the primary ways people access the internet, search for information, shop online, make payments, and
        connect with businesses.
      </p>
      <p>
        Whether someone is running a small business in Bhopal, shopping online in Mumbai, searching for services in
        Delhi, or exploring products in a smaller town, their mobile experience plays an important role in their online
        decisions.
      </p>
      <p>
        A website should not simply look attractive on a desktop computer. It should provide an excellent experience on
        smartphones as well.
      </p>
      <p>
        In this article, we will understand what mobile-first design is, why it is important for Indian customers, how it
        affects SEO, and how businesses can create a better mobile experience.
      </p>

      <div className="wl-top">
        <nav className="wl-box" aria-label="In this article">
          <h3>In This Article</h3>
          <ol className="wl-toc">
            {reasons.map((r) => (
              <li key={r.id}>
                <a href={`#${r.id}`}>{r.short}</a>
              </li>
            ))}
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ol>
        </nav>
      </div>

      {reasons.map((r, i) => (
        <section key={r.id}>
          <h2 id={r.id} className="wl-h">
            <span className="n">{String(i + 1).padStart(2, '0')}</span>
            <span className="t">{r.title}</span>
          </h2>
          {r.blocks.map((b, k) => (
            <Block key={k} b={b} />
          ))}
        </section>
      ))}

      <h2 className="wl-h plain">Conclusion: Build a Website That Works for Every Indian Customer</h2>
      <div className="wl-concl">
        <p>A website is often the first interaction between a business and a potential customer.</p>
        <p>
          If that experience is slow, confusing, or difficult to use on a smartphone, visitors may leave without exploring
          your services.
        </p>
        <p>
          <strong>This is why mobile-first design matters for Indian customers.</strong>
        </p>
        <p>
          From small local businesses to large e-commerce companies, every business should prioritize mobile usability,
          fast loading speed, responsive layouts, simple navigation, and easy communication.
        </p>
        <p>
          A well-designed mobile-first website can help businesses create a stronger online presence, improve user
          experience, and make it easier for customers to take action.
        </p>
        <p>
          At <strong>WebLaunchPro</strong>, we believe that a successful website should not only look professional but
          also deliver a smooth experience across every device.
        </p>
        <p>
          Whether your customers are browsing from a smartphone, tablet, or desktop, your website should be ready to serve
          them.
        </p>
      </div>

      <h2 id="faqs" className="wl-h plain">Frequently Asked Questions (FAQs)</h2>
      {faqs.map(([q, a], i) => (
        <details className="wl-faq" key={q}>
          <summary>
            {i + 1}. {q}
          </summary>
          <p>{a}</p>
        </details>
      ))}

      <div className="wl-cta">
        <h3>Build a better mobile experience with WebLaunchPro.</h3>
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