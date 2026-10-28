import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ContactSuccessPage from './pages/ContactSuccessPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';
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
          <Route path="pricing" element={<PricingPage />} />
          <Route path="pricing/" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/" element={<PortfolioPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="contact-us/" element={<ContactPage />} />
          <Route path="contact-success" element={<ContactSuccessPage />} />
          <Route path="contact-success/" element={<ContactSuccessPage />} />

          {/* Website Design Routes */}
          <Route path="website-design" element={<ServiceDetailPage />} />
          <Route path="website-design/" element={<ServiceDetailPage />} />
          <Route path="responsive-website-design" element={<ServiceDetailPage />} />
          <Route path="responsive-website-design/" element={<ServiceDetailPage />} />
          <Route path="business-website-design" element={<ServiceDetailPage />} />
          <Route path="business-website-design/" element={<ServiceDetailPage />} />
          <Route path="corporate-website-design" element={<ServiceDetailPage />} />
          <Route path="corporate-website-design/" element={<ServiceDetailPage />} />
          <Route path="landing-page-design" element={<ServiceDetailPage />} />
          <Route path="landing-page-design/" element={<ServiceDetailPage />} />
          <Route path="custom-website-design" element={<ServiceDetailPage />} />
          <Route path="custom-website-design/" element={<ServiceDetailPage />} />

          {/* Web Development Routes */}
          <Route path="web-development" element={<ServiceDetailPage />} />
          <Route path="web-development/" element={<ServiceDetailPage />} />
          <Route path="custom-website-development" element={<ServiceDetailPage />} />
          <Route path="custom-website-development/" element={<ServiceDetailPage />} />
          <Route path="business-website-development" element={<ServiceDetailPage />} />
          <Route path="business-website-development/" element={<ServiceDetailPage />} />
          <Route path="corporate-website-development" element={<ServiceDetailPage />} />
          <Route path="corporate-website-development/" element={<ServiceDetailPage />} />
          <Route path="ecommerce-website-development" element={<ServiceDetailPage />} />
          <Route path="ecommerce-website-development/" element={<ServiceDetailPage />} />
          <Route path="wordpress-website-development" element={<ServiceDetailPage />} />
          <Route path="wordpress-website-development/" element={<ServiceDetailPage />} />
          <Route path="shopify-website-development" element={<ServiceDetailPage />} />
          <Route path="shopify-website-development/" element={<ServiceDetailPage />} />
          <Route path="website-redesign" element={<ServiceDetailPage />} />
          <Route path="website-redesign/" element={<ServiceDetailPage />} />
          <Route path="website-maintenance" element={<ServiceDetailPage />} />
          <Route path="website-maintenance/" element={<ServiceDetailPage />} />

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
