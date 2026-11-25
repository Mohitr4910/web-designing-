import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import NotFoundPage from './NotFoundPage';
import { SITE_URL, SITE_NAME } from '../config/site';
import { getService, servicePath } from '../services/registry';
import { getCities, locationPath } from '../locations/registry';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getService(serviceSlug);
  if (!service) return <NotFoundPage />;

  const { title, full_description, short_description, deliverables, technologies, faqs, related, Component: Body } = service;
  const pageTitle = service.meta_title || `${title} | ${SITE_NAME}`;
  const description = service.meta_description || short_description;
  const cities = service.location_pages ? getCities() : [];

  const schemaJson = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description: full_description,
      url: SITE_URL + servicePath(service.slug),
      areaServed: { '@type': 'Country', name: 'India' },
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: SITE_URL + '/services/' },
        { '@type': 'ListItem', position: 3, name: title, item: SITE_URL + servicePath(service.slug) }
      ]
    }
  ];
  if (faqs.length) {
    schemaJson.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    });
  }

  return (
    <div>
      <SeoMeta title={pageTitle} description={description} canonicalUrl={servicePath(service.slug)} schemaJson={schemaJson} />

      <section className="bg-gradient-to-b from-[#f8faff] via-white to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full inline-block mb-4 border border-blue-100">
            {service.category === 'website_design' ? 'Website Design' : 'Web Development'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#081c4e] tracking-tight leading-tight mb-6">{title}</h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">{short_description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={`/contact-us/?service=${encodeURIComponent(title)}`}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 transition"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919302770758" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 93027 70758</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold text-[#081c4e] mb-3">About {title}</h2>
            <p className="text-slate-600 leading-relaxed">{full_description}</p>
          </div>

          {deliverables.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#081c4e] mb-3">What you get</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {deliverables.map(d => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#081c4e] mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
                ))}
              </div>
            </div>
          )}

          {Body && (
            <div className="blog-content max-w-none text-slate-700 leading-relaxed">
              <Body />
            </div>
          )}

          {faqs.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#081c4e] mb-3">Frequently asked questions</h3>
              <div className="space-y-3">
                {faqs.map(f => (
                  <div key={f.q} className="rounded-xl border border-slate-200 p-4">
                    <p className="font-semibold text-[#081c4e] text-sm">{f.q}</p>
                    <p className="text-sm text-slate-600 mt-1.5">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {(cities.length > 0 || related.length > 0) && (
        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            {cities.length > 0 && (
              <div>
                <h3 className="text-base font-bold text-[#081c4e] mb-3">{title} in your city</h3>
                <ul className="space-y-2 text-sm">
                  {cities.map(c => (
                    <li key={c.slug}>
                      <Link to={locationPath(service.slug, c.slug)} className="text-blue-600 hover:underline">{title} in {c.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <h3 className="text-base font-bold text-[#081c4e] mb-3">Related services</h3>
                <ul className="space-y-2 text-sm">
                  {related.map(r => (
                    <li key={r.slug}>
                      <Link to={servicePath(r.slug)} className="text-blue-600 hover:underline">{r.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
