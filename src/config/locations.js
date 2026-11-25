/**
 * LOCATION PAGES CONFIG - yaha se sab control hota hai.
 *
 * NAYA SHEHAR JODNA HAI?  -> neeche CITIES me bas ek object add karo. Bas!
 *   Apne aap ho jayega:
 *     - har service ka page:   /website-design-in-<city>/  (jin services me locationPages: true hai)
 *     - sitemap.xml me entry   (build ke time, entry-server.jsx -> getRoutes())
 *     - static prerender HTML  (SEO ke liye)
 *     - Footer "Service Areas" me link + baaki city/service pages me internal links
 *
 * KIS SERVICE KE CITY PAGES BANEN? -> us service ki file (src/services/items/<slug>.jsx) me
 *   meta me `locationPages: true` likho (band karne ke liye false).
 *
 * URL format: /<service-slug>-in-<city-slug>/   e.g. /website-design-in-bhopal/
 *
 * Fields:
 *   name   - shehar ka naam (required)
 *   slug   - URL ke liye (optional; na do to name se ban jata hai)
 *   state  - state (required)
 *   intro  - us shehar ke liye 1-2 line ki unique local baat (SEO ke liye jitna unique, utna better)
 *   areas  - us shehar ke popular areas/market (optional, page par dikhte hain)
 *   updated- 'YYYY-MM-DD' (optional) sitemap <lastmod> ke liye; na do to lastmod nahi jayega
 *   draft  - true likhoge to page + sitemap se hat jayega
 */

export const CITIES = [
  {
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    intro:
      'Bhopal ke coaching institutes, clinics, real-estate firms aur local brands ab online customers se pehle Google par dhoondhe jaate hain. Hum Bhopal ke businesses ke liye fast, mobile-first aur lead-generating websites banate hain.',
    areas: ['MP Nagar', 'New Market', 'Arera Colony', 'Kolar Road', 'Bairagarh', 'Hoshangabad Road']
  },
  {
    name: 'Indore',
    state: 'Madhya Pradesh',
    intro:
      'Indore ek fast-growing business aur startup hub hai jahan trading, IT, food aur education brands ko online presence se seedha growth milti hai. Hum Indore ke businesses ke liye SEO-ready, high-converting websites deliver karte hain.',
    areas: ['Vijay Nagar', 'Palasia', 'Rajwada', 'Bhawarkua', 'Sapna Sangeeta', 'AB Road']
  },
  {
    name: 'Jabalpur',
    state: 'Madhya Pradesh',
    intro:
      'Jabalpur ke manufacturers, hospitals, schools aur retailers ko ek professional website se naye customers aur trust dono milte hain. Hum Jabalpur ke liye affordable aur technically strong websites banate hain.',
    areas: ['Napier Town', 'Wright Town', 'Civil Lines', 'Vijay Nagar', 'Madan Mahal']
  },
  {
    name: 'Gwalior',
    state: 'Madhya Pradesh',
    intro:
      'Gwalior ke local businesses, coaching centres aur service providers ke liye hum clean, responsive aur search-friendly websites design aur develop karte hain jo enquiries badhane par focused hoti hain.',
    areas: ['City Centre', 'Lashkar', 'Morar', 'Thatipur', 'Jhansi Road']
  },
  {
    name: 'Ujjain',
    state: 'Madhya Pradesh',
    intro:
      'Ujjain me tourism, hospitality, temple-trust aur local trade businesses ke liye hum bilingual-friendly, fast-loading websites banate hain jo online bookings aur enquiries laate hain.',
    areas: ['Freeganj', 'Dewas Road', 'Mahakal Area', 'Madhav Nagar']
  },
  {
    name: 'Raipur',
    state: 'Chhattisgarh',
    intro:
      'Raipur ke growing industrial aur retail market me ek professional website aapke brand ko competitors se alag banati hai. Hum Raipur ke businesses ko conversion-focused websites aur e-commerce stores dete hain.',
    areas: ['Pandri', 'Shankar Nagar', 'Devendra Nagar', 'Telibandha', 'Tatibandh']
  },
  {
    name: 'Nagpur',
    state: 'Maharashtra',
    intro:
      'Nagpur ke logistics, healthcare, education aur retail businesses ke liye hum scalable websites aur web applications develop karte hain jo Google par rank karne ke liye technically optimized hoti hain.',
    areas: ['Dharampeth', 'Sitabuldi', 'Sadar', 'Manish Nagar', 'Wardha Road']
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    intro:
      'Pune ke startups, IT firms aur D2C brands ko speed, design aur SEO teeno chahiye hote hain. Hum Pune ke businesses ke liye modern React/PHP based websites aur online stores banate hain.',
    areas: ['Kothrud', 'Hinjewadi', 'Baner', 'Viman Nagar', 'Camp']
  }
];
