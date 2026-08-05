import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages imports
import Home from './pages/Home';
import CategoryListing from './pages/CategoryListing';
import CategoriesGrid from './pages/CategoriesGrid';
import ProductReview from './pages/ProductReview';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

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
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Category Listing Pages */}
            <Route path="/vpns" element={<CategoryListing categoryId="vpns" />} />
            <Route path="/antivirus" element={<CategoryListing categoryId="antivirus" />} />
            <Route path="/password-managers" element={<CategoryListing categoryId="password-managers" />} />
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
