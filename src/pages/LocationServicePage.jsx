import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import NotFoundPage from './NotFoundPage';
import { SITE_URL, SITE_NAME } from '../config/site';
import { getLocationPage, getCities, getLocationServices, locationPath } from '../locations/registry';

export default function LocationServicePage() {
  const { locationSlug } = useParams();
  const page = getLocationPage(locationSlug);

  if (!page) return <NotFoundPage />;

  const { city, service } = page;
  const title = `${service.title} in ${city.name} | ${SITE_NAME}`;
  const description = `${service.title} services in ${city.name}, ${city.state}. ${service.short_description} Free consultation & 1 year support.`;
  const canonical = page.url;
  const otherCities = getCities().filter(c => c.slug !== city.slug);
  const otherServices = getLocationServices().filter(s => s.slug !== service.slug);

  const schemaJson = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} in ${city.name}`,
      serviceType: service.title,
      description: service.full_description,
      url: SITE_URL + canonical,
      areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: city.state } },
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services/' },
        { '@type': 'ListItem', position: 3, name: `${service.title} in ${city.name}`, item: SITE_URL + canonical }
      ]
    }
  ];

  return (
    <div>
      <SeoMeta title={title} description={description} canonicalUrl={canonical} schemaJson={schemaJson} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f8faff] via-white to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full mb-4 border border-blue-100">
            <MapPin className="w-3.5 h-3.5" /> {city.name}, {city.state}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">
            {service.title} in {city.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{city.intro}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={`/contact-us/?service=${encodeURIComponent(service.title)}`}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition"
            >
              <span>Get Free Quote in {city.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919302770758"
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 93027 70758</span>
            </a>
          </div>
        </div>
      </section>

      {/* About the service */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold text-[#081c4e] mb-3">
              {service.title} for {city.name} Businesses
            </h2>
            <p className="text-slate-600 leading-relaxed">{service.full_description}</p>
          </div>

          {service.deliverables?.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#081c4e] mb-3">What you get</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {service.deliverables.map(d => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {city.areas.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#081c4e] mb-3">Areas we serve in {city.name}</h3>
              <div className="flex flex-wrap gap-2">
                {city.areas.map(a => (
                  <span key={a} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                    {a}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Hum poore {city.name} me online kaam karte hain — call, WhatsApp ya video meeting par.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Internal links: other services in this city + this service in other cities */}
      <section className="py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {otherServices.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#081c4e] mb-3">More services in {city.name}</h3>
              <ul className="space-y-2 text-sm">
                {otherServices.map(s => (
                  <li key={s.slug}>
                    <Link to={locationPath(s.slug, city.slug)} className="text-blue-600 hover:underline">
                      {s.title} in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {otherCities.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#081c4e] mb-3">{service.title} in other cities</h3>
              <ul className="space-y-2 text-sm">
                {otherCities.map(c => (
                  <li key={c.slug}>
                    <Link to={locationPath(service.slug, c.slug)} className="text-blue-600 hover:underline">
                      {service.title} in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
