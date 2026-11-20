# SSR (build-time prerender) setup

1. Zip ke `src/`, `scripts/`, `public/.htaccess` ko project me merge karo. `.env.example` ko `.env` banao aur
   VITE_WEB3FORMS_ACCESS_KEY bharo (VITE_SITE_URL pehle se https://weblaunchpro.in set hai).
2. package.json me "build" script ye karo:

   "build": "vite build && vite build --ssr src/entry-server.jsx --outDir dist-server && node scripts/prerender.mjs"

3. `npm run build` chalao. `dist/` folder ko Hostinger `public_html` me upload karo.

Har naye blog (.jsx file) ke baad bas dobara `npm run build` + upload. Prerender, sitemap.xml aur robots.txt apne aap ban jate hain.
(Dev ke liye `npm run dev` pehle jaisa hi chalega.)
