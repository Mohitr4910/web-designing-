import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import services from './services/registry';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Core Routes */}
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="about-us/" element={<AboutPage />} />
          <Route path="services" element={<ServicesIndexPage />} />
          <Route path="services/" element={<ServicesIndexPage />} />
          <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="services/:serviceSlug/" element={<ServiceDetailPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="pricing/" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/" element={<PortfolioPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="contact-us/" element={<ContactPage />} />

          {/* Graceful Redirects for Legacy / Unneeded Subpages */}
          <Route path="contact-success" element={<Navigate to="/contact-us" replace />} />
          <Route path="contact-success/" element={<Navigate to="/contact-us" replace />} />
          {/* Purane root URLs (/website-design etc.) -> naye /services/<slug>/ page (services items se auto) */}
          {services.flatMap(sv => [
            <Route key={sv.slug} path={sv.slug} element={<Navigate to={`/services/${sv.slug}/`} replace />} />,
            <Route key={sv.slug + '/'} path={sv.slug + '/'} element={<Navigate to={`/services/${sv.slug}/`} replace />} />
          ])}

          {/* Blog Routes */}
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/" element={<BlogListPage />} />
          <Route path="blog/category/:categorySlug" element={<BlogListPage />} />
          <Route path="blog/category/:categorySlug/" element={<BlogListPage />} />
          <Route path="blog/tag/:tagSlug" element={<BlogListPage />} />
          <Route path="blog/tag/:tagSlug/" element={<BlogListPage />} />
          <Route path="blog/author/:authorSlug" element={<BlogListPage />} />
          <Route path="blog/author/:authorSlug/" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="blog/:slug/" element={<BlogPostPage />} />

          {/* Legal Routes */}
          <Route path="privacy-policy" element={<LegalPage />} />
          <Route path="privacy-policy/" element={<LegalPage />} />
          <Route path="terms-and-conditions" element={<LegalPage />} />
          <Route path="terms-and-conditions/" element={<LegalPage />} />
          <Route path="refund-cancellation-policy" element={<LegalPage />} />
          <Route path="refund-cancellation-policy/" element={<LegalPage />} />

          {/* 404 Wildcard */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
