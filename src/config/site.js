/**
 * Site config - yaha se sab kuch control hota hai.
 *
 * WEB3FORMS KEY KAISE LENI HAI:
 *  1. https://web3forms.com par jao, apna email daalo (jis par inquiry chahiye)
 *  2. Email par "Access Key" aayegi, use neeche paste kar do
 *     (ya .env file me VITE_WEB3FORMS_ACCESS_KEY=xxxx likho)
 *
 * Web3Forms ki access key public hoti hai (frontend me rakhna safe hai),
 * ye sirf aapke email par form bhejti hai.
 */
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY || 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const SITE_NAME = 'Mohit Web Designing';

// APKA LIVE DOMAIN (bina last slash ke). Canonical URLs, sitemap.xml aur Open Graph me yahi use hota hai.
// .env me VITE_SITE_URL=https://yourdomain.com likho, ya neeche seedha badal do.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://weblaunchpro.in').replace(/\/+$/, '');

// Blog posts ka default author (kisi post ki meta me author na ho to ye use hoga)
export const DEFAULT_AUTHOR = {
  name: 'Mohit Rahangdale',
  role: 'Lead Web Designer & Developer',
  bio: 'Web engineering specialist with extensive experience designing modern, responsive websites and high-performance digital platforms.',
  avatar: '/author-mohit.jpg'
};
