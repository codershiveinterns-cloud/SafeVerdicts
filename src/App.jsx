import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { categories } from './data/seedData';

// Lazy-loaded page components for route-level code splitting & fast initial load
const Home = lazy(() => import('./pages/Home'));
const CategoryListing = lazy(() => import('./pages/CategoryListing'));
const CategoriesGrid = lazy(() => import('./pages/CategoriesGrid'));
const ProductReview = lazy(() => import('./pages/ProductReview'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));

// Lightweight page loader fallback
function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="page-spinner"></div>
      <style>{`
        .page-spinner {
          width: 36px;
          height: 36px;
          border: 3px solid rgba(0, 168, 232, 0.2);
          border-top-color: var(--color-accent, #00a8e8);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Helper component to scroll to top on router navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main className="app-main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Dynamic Category Listing Pages for all categories */}
              {categories.map((c) => (
                <Route key={c.id} path={`/${c.slug}`} element={<CategoryListing categoryId={c.id} />} />
              ))}
              <Route path="/categories" element={<CategoriesGrid />} />
              
              {/* Blog Pages */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Company Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<Legal pageType="privacy" />} />
              <Route path="/terms" element={<Legal pageType="terms" />} />
              <Route path="/affiliate-disclosure" element={<Legal pageType="disclosure" />} />

              {/* Dynamic Product Page / Fallback 404 */}
              <Route path="/:slug" element={<ProductReview />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
      </div>

      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .app-main-content {
          flex: 1 0 auto;
        }
      `}</style>
    </Router>
  );
}
