import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ShieldCheck, 
  Lock, 
  HelpCircle, 
  Mail, 
  Star, 
  ExternalLink, 
  Check, 
  ArrowRight,
  Zap,
  Award,
  RefreshCw,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { products, categories, siteFaqs } from '../data/seedData';

export default function Home() {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success', 'error'
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Get the featured product (WiseCare 365 Pro / WiseCleaner)
  const featuredProduct = products.find(p => p.id === 'wisecare-365') || products[0];
  const trendingProduct = featuredProduct;

  // Get first 6 products for the newest deals grid
  const newestDeals = products.slice(0, 6);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setEmail('');
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section - Seamless Theme Integration */}
      <section className="hero-theme-section">
        <div className="container hero-theme-grid">
          {/* Left Column: Headlines, CTA Buttons, Stats */}
          <div className="hero-theme-left">
            <div className="hero-theme-pill">
              <span className="pill-badge-tag">v2.4</span>
              <span className="pill-badge-text">Rebuilt — your stack, your deals, your savings.</span>
            </div>

            <h1 className="hero-theme-headline">
              Software deals, <br />
              <span className="text-accent-gradient">finally organized.</span>
            </h1>

            <p className="hero-theme-sub">
              The deal aggregator that helps you clean, protect, and speed up your PC. Discover top-rated tools like WiseCare 365 Pro, track your savings, and stop overpaying for SaaS.
            </p>

            <div className="hero-theme-actions">
              <a 
                href="https://www.wisecleaner.com/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn btn-primary hero-main-btn"
              >
                Visit WiseCare 365 Website <ArrowRight size={16} />
              </a>
              <Link to="/categories" className="btn btn-secondary hero-sub-btn">
                Browse all deals
              </Link>
            </div>

            {/* Stats Row */}
            <div className="hero-theme-stats">
              <div className="stat-theme-col">
                <div className="stat-theme-val">$4,318</div>
                <div className="stat-theme-lbl">AVG USER SAVINGS / YEAR</div>
              </div>
              <div className="stat-theme-col">
                <div className="stat-theme-val">2,847</div>
                <div className="stat-theme-lbl">DEALS TRACKED</div>
              </div>
              <div className="stat-theme-col">
                <div className="stat-theme-val">38,120</div>
                <div className="stat-theme-lbl">PC USERS & TEAMS</div>
              </div>
              <div className="stat-theme-col">
                <div className="stat-theme-val">9 min</div>
                <div className="stat-theme-lbl">AVG TIME TO SET UP</div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured WiseCleaner Deal Card */}
          <div className="hero-theme-right">
            <div className="spotlight-theme-card card">
              <div className="spotlight-card-hero">
                <div className="today-pick-tag">
                  <Zap size={13} fill="currentColor" />
                  <span>Today's Pick</span>
                </div>
                <div className="spotlight-hero-text">
                  <h3 className="spotlight-hero-title">WindowsPCDoc</h3>
                  <p className="spotlight-hero-sub">Diagnose, Fix, and Speed Up Your System</p>
                </div>
                <img src="/wisecare_365.png" alt="WindowsPCDoc" className="spotlight-hero-bg" loading="lazy" decoding="async" />
              </div>

              <div className="spotlight-card-details">
                <div className="most-clicked-badge">MOST CLICKED RIGHT NOW</div>
                <p className="spotlight-product-desc" style={{ marginBottom: '16px' }}>
                  One Windows utility that replaces separate cleanup, registry defrag, startup optimizer, and privacy protection tools — all in one simple dashboard.
                </p>

                <div className="spotlight-quick-bullets" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text)' }}>
                    <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>Junk file & registry defrag cleaner</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text)' }}>
                    <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>Boosts startup speed & Windows performance</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text)' }}>
                    <Check size={14} style={{ color: '#10B981', flexShrink: 0 }} />
                    <span>Protects privacy by erasing browser traces</span>
                  </div>
                </div>

                <div className="spotlight-card-actions" style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <a
                    href="https://www.wisecleaner.com/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                  >
                    Visit Site <ExternalLink size={14} />
                  </a>
                  <Link 
                    to="/blog/wisecare-365-pro-all-in-one-windows" 
                    className="btn btn-secondary"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                  >
                    Read Review <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stat Bar */}
      <section className="stat-bar-section">
        <div className="container stat-bar-inner">
          <div className="stat-item">
            <span className="stat-number">120+</span>
            <span className="stat-label">VPNs compared</span>
          </div>
          <div className="stat-item-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50,000+</span>
            <span className="stat-label">Readers secured</span>
          </div>
          <div className="stat-item-divider"></div>
          <div className="stat-item">
            <span className="stat-number">Weekly</span>
            <span className="stat-label">Deal updates</span>
          </div>
          <div className="stat-item-divider"></div>
          <div className="stat-item">
            <span className="stat-number">9 min</span>
            <span className="stat-label">Avg. read time</span>
          </div>
        </div>
      </section>



      {/* 4. Newest Deals Grid */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">LIMITED OFFERS</span>
            <h2 className="section-title">Newest Cybersecurity Deals</h2>
            <p className="section-sub">Verified vouchers and activation links. All discounts are automatically applied on click.</p>
          </div>

          <div className="grid grid-3">
            {newestDeals.map((product) => (
              <div key={product.id} className="card deal-card">
                <div className="deal-card-header">
                  <div className="deal-logo-box">{product.logo}</div>
                  <span className="badge badge-discount">{product.discountBadge}</span>
                </div>

                <div className="deal-card-body">
                  <h3 className="deal-product-title">{product.name}</h3>
                  <div className="deal-card-rating">
                    <Star size={14} className="star-icon" fill="currentColor" />
                    <span><strong>{product.rating}</strong> ({product.reviewsCount})</span>
                  </div>
                  <p className="deal-card-description">{product.headline}</p>

                  <div className="deal-card-pricing">
                    <span className="deal-price-old">{product.originalPrice}</span>
                    <span className="deal-price-new">{product.discountedPrice}</span>
                    <span className="deal-price-period">/{product.billingPeriod.includes('month') ? 'mo' : 'yr'}</span>
                  </div>
                </div>

                <div className="deal-card-footer">
                  {product.id === 'wisecare-365' ? (
                    <>
                      <Link to={`/${product.slug}`} className="deal-link-review">
                        Read Review
                      </Link>
                      <a 
                        href="https://www.wisecleaner.com/"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary deal-link-btn"
                      >
                        Visit Site <ExternalLink size={14} />
                      </a>
                    </>
                  ) : (
                    <Link to={`/${product.slug}`} className="btn btn-primary deal-link-btn" style={{ width: '100%', justifyContent: 'center' }}>
                      Read Review <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Browse by Category */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-pretitle">DIRECTORY</span>
            <h2 className="section-title">Browse Software by Category</h2>
            <p className="section-sub">Quickly narrow down security tools depending on your exact requirements.</p>
          </div>

          <div className="category-chips-grid">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/${cat.slug}`} className="category-chip-btn">
                <span className="category-chip-emoji">{cat.emoji}</span>
                <span className="category-chip-name">{cat.name}</span>
                <ArrowRight size={14} className="category-chip-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why SafeVerdicts Feature Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-pretitle">OUR METHODOLOGY</span>
            <h2 className="section-title">Why Trust SafeVerdicts?</h2>
            <p className="section-sub">We believe cybersecurity reviews shouldn't be controlled by product vendors. Here is how we remain distinct.</p>
          </div>

          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon-wrapper">
                <Award size={24} className="feature-icon" />
              </div>
              <h3 className="feature-card-title">Independent Labs</h3>
              <p className="feature-card-text">
                We purchase all software accounts ourselves. We do not accept sponsored posts or paid placement changes from providers.
              </p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon-wrapper">
                <RefreshCw size={24} className="feature-icon" />
              </div>
              <h3 className="feature-card-title">Real-Time Speed Testing</h3>
              <p className="feature-card-text">
                Our speed test server scripts check provider bandwidth weekly on 1Gbps fiber lines to report true real-life connection loss.
              </p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon-wrapper">
                <Lock size={24} className="feature-icon" />
              </div>
              <h3 className="feature-card-title">Secured Coupon Feeds</h3>
              <p className="feature-card-text">
                We work directly with VPN and antivirus sales representatives to secure deep coupon API links, assuring you pay the minimum possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion Section */}
      <section className="section">
        <div className="container faq-container-inner">
          <div className="section-header">
            <span className="section-pretitle">QUESTIONS & ANSWERS</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Get transparent answers regarding VPNs, security software, and how affiliate coupons function.</p>
          </div>

          <div className="faq-accordion">
            {siteFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-header" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{faq.q}</span>
                  <HelpCircle 
                    className="faq-icon" 
                    size={18} 
                  />
                </button>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Block */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-content">
              <div className="newsletter-icon-badge">
                <Mail size={24} />
              </div>
              <h2 className="newsletter-title">Subscribe for Weekly SafeVerdicts Deals</h2>
              <p className="newsletter-sub">
                No spam. Just secure discounts, product audit reports, and vulnerability alerts. Cancel anytime.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary newsletter-submit-btn">
                    Subscribe
                  </button>
                </div>
              </form>

              {newsletterStatus === 'success' && (
                <div className="newsletter-alert newsletter-alert-success">
                  <CheckCircle2 size={16} />
                  <span>Success! Check your inbox to confirm your subscription.</span>
                </div>
              )}
              {newsletterStatus === 'error' && (
                <div className="newsletter-alert newsletter-alert-error">
                  <span>Please enter a valid email address.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Home page styling */}
      <style>{`
        /* Seamless Theme Integration for Hero Section */
        .hero-theme-section {
          background: radial-gradient(110% 80% at 50% 10%, var(--color-surface) 60%, hsl(var(--color-accent-hsl) / 0.08) 100%);
          padding: 60px 0;
          border-bottom: 1px solid var(--color-border);
        }

        .hero-theme-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-theme-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 48px;
          }
        }

        .hero-theme-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: hsl(var(--color-accent-hsl) / 0.06);
          border: 1px solid hsl(var(--color-accent-hsl) / 0.18);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 13px;
          margin-bottom: 24px;
        }

        .pill-badge-tag {
          background-color: var(--color-accent);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .pill-badge-text {
          color: var(--color-accent);
          font-weight: 600;
        }

        .hero-theme-headline {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .hero-theme-headline {
            font-size: 52px;
          }
        }

        .text-accent-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, #0056B3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-theme-sub {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-muted);
          max-width: 620px;
          margin-bottom: 32px;
        }

        .hero-theme-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }

        .hero-main-btn {
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
        }

        .hero-sub-btn {
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
        }

        /* Hero Stats Row */
        .hero-theme-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          border-top: 1px solid var(--color-border);
          padding-top: 28px;
        }

        @media (min-width: 640px) {
          .hero-theme-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-theme-val {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .stat-theme-lbl {
          font-size: 10px;
          font-weight: 700;
          color: var(--color-muted);
          letter-spacing: 0.05em;
        }

        /* Right Column Spotlight Card */
        .spotlight-theme-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--color-border);
          background-color: var(--color-surface);
        }

        .spotlight-theme-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(11, 143, 211, 0.15);
        }

        .spotlight-card-hero {
          position: relative;
          height: 210px;
          background: linear-gradient(180deg, rgba(11, 143, 211, 0.15) 0%, rgba(10, 25, 47, 0.9) 100%), #0A192F;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          overflow: hidden;
        }

        .today-pick-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: #F97316;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
        }

        .spotlight-hero-text {
          position: relative;
          z-index: 2;
        }

        .spotlight-hero-title {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 4px 0;
        }

        .spotlight-hero-sub {
          font-size: 13px;
          color: #E2E8F0;
          margin: 0;
        }

        .spotlight-hero-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }

        .spotlight-card-details {
          padding: 24px;
        }

        .most-clicked-badge {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          margin-bottom: 8px;
        }

        .spotlight-product-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 10px;
        }

        .spotlight-product-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-muted);
          margin-bottom: 24px;
        }

        .spotlight-product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border);
          padding-top: 18px;
          margin-bottom: 16px;
        }

        .price-box {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .price-main {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .price-slash {
          font-size: 14px;
          text-decoration: line-through;
          color: var(--color-muted);
        }

        .price-sub {
          font-size: 13px;
          color: var(--color-muted);
        }

        .spotlight-deal-btn {
          font-size: 14px;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .spotlight-review-row {
          text-align: left;
        }

        .review-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .review-link:hover {
          color: var(--color-accent-hover);
        }
        .hero-section {
          padding: 60px 0 40px 0;
          background: radial-gradient(110% 80% at 50% 10%, var(--color-surface) 60%, hsl(var(--color-accent-hsl) / 0.08) 100%);
          text-align: center;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 100px 0 80px 0;
          }
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: hsl(var(--color-accent-hsl) / 0.06);
          border: 1px solid hsl(var(--color-accent-hsl) / 0.15);
          color: var(--color-accent);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 28px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .hero-headline {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        @media (min-width: 480px) {
          .hero-headline {
            font-size: 38px;
          }
        }

        @media (min-width: 768px) {
          .hero-headline {
            font-size: 56px;
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, #0056B3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subheading {
          font-size: 15px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 650px;
        }

        @media (min-width: 768px) {
          .hero-subheading {
            font-size: 19px;
            margin-bottom: 40px;
          }
        }

        .hero-ctas {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .hero-ctas {
            flex-direction: row;
            justify-content: center;
            width: auto;
          }
        }

        .hero-btn-primary {
          font-size: 16px;
          padding: 14px 28px;
        }

        .hero-btn-secondary {
          font-size: 16px;
          padding: 14px 28px;
        }

        /* Stat Bar Styles */
        .stat-bar-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 24px 0;
        }

        .stat-bar-inner {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .stat-bar-inner {
            grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
            gap: 16px;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          color: var(--color-primary);
        }

        @media (min-width: 480px) {
          .stat-number {
            font-size: 24px;
          }
        }

        .stat-label {
          font-size: 12px;
          color: var(--color-muted);
          margin-top: 2px;
        }

        @media (min-width: 480px) {
          .stat-label {
            font-size: 13px;
          }
        }

        .stat-item-divider {
          display: none;
          width: 1px;
          height: 36px;
          background-color: var(--color-border);
        }

        @media (min-width: 768px) {
          .stat-item-divider {
            display: block;
          }
        }

        /* Section Layout elements */
        .section-header-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 36px;
        }

        @media (min-width: 768px) {
          .section-header-row {
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .section-header {
          margin-bottom: 48px;
          max-width: 600px;
        }

        .section-header.text-center {
          margin-left: auto;
          margin-right: auto;
        }

        .section-pretitle {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .section-sub {
          font-size: 16px;
          color: var(--color-muted);
          margin-top: 8px;
        }

        .trending-live-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-subsurface);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-muted);
        }

        .ping-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-success);
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .ping-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--color-success);
          border-radius: 50%;
          left: 0;
          top: 0;
          animation: ping 1.5s ease-in-out infinite;
        }

        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Spotlight Card */
        .spotlight-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          position: relative;
          transition: var(--transition-normal);
        }

        .spotlight-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: hsl(var(--color-accent-hsl) / 0.4);
        }

        .spotlight-badge {
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(135deg, var(--color-accent) 0%, #0056B3 100%);
          color: white;
          padding: 8px 20px;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom-right-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .spotlight-grid {
            grid-template-columns: 1.5fr 1fr;
          }
        }

        .spotlight-info-col {
          padding: 36px 16px 24px 16px;
        }

        @media (min-width: 768px) {
          .spotlight-info-col {
            padding: 48px 40px 40px 40px;
          }
        }

        .spotlight-product-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .spotlight-logo {
          font-size: 32px;
          width: 56px;
          height: 56px;
          background-color: var(--color-bg);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .spotlight-name {
          font-size: 22px;
          font-weight: 800;
        }

        .spotlight-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--color-muted);
        }

        .star-icon {
          color: #FFB300;
        }

        .spotlight-headline {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .spotlight-description {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .spotlight-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spotlight-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
        }

        .bullet-check-icon {
          color: var(--color-success);
          flex-shrink: 0;
        }

        .spotlight-pricing-col {
          background-color: var(--color-subsurface);
          border-top: 1px solid var(--color-border);
          padding: 24px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .spotlight-pricing-col {
            border-top: none;
            border-left: 1px solid var(--color-border);
            padding: 40px;
          }
        }

        .spotlight-pricing-box {
          text-align: center;
          width: 100%;
          max-width: 320px;
        }

        .spotlight-discount-tag {
          display: inline-block;
          background-color: hsl(var(--color-warning-hsl) / 0.12);
          color: var(--color-warning);
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .pricing-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .price-old {
          font-size: 18px;
          color: var(--color-muted);
          text-decoration: line-through;
        }

        .price-new {
          font-family: var(--font-heading);
          font-size: 40px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .price-period {
          font-size: 14px;
          color: var(--color-muted);
          font-weight: 500;
        }

        .pricing-billing {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 28px;
        }

        .spotlight-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .spotlight-cta {
          padding: 12px 24px;
          width: 100%;
        }

        .spotlight-review-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .spotlight-review-link:hover {
          color: var(--color-accent-hover);
        }

        /* Newest Deals Grid Card styling */
        .deal-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .deal-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px 0 24px;
        }

        .deal-logo-box {
          font-size: 24px;
          width: 44px;
          height: 44px;
          background-color: var(--color-bg);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .deal-card-body {
          padding: 16px 24px 24px 24px;
          flex-grow: 1;
        }

        .deal-product-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .deal-card-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 12px;
        }

        .deal-card-description {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .deal-card-pricing {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .deal-price-old {
          font-size: 13px;
          color: var(--color-muted);
          text-decoration: line-through;
        }

        .deal-price-new {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .deal-price-period {
          font-size: 12px;
          color: var(--color-muted);
        }

        .deal-card-footer {
          border-top: 1px solid var(--color-border);
          padding: 16px 24px;
          background-color: var(--color-subsurface);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .deal-link-review {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .deal-link-review:hover {
          color: var(--color-accent);
        }

        .deal-link-btn {
          font-size: 13px;
          padding: 8px 16px;
        }

        /* Browse Category Chips styles */
        .category-chips-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .category-chip-btn {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: var(--transition-normal);
          flex: 1 1 calc(50% - 16px);
          min-width: 240px;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .category-chip-btn {
            padding: 18px 24px;
            gap: 16px;
            flex: 0 1 calc(33.333% - 16px);
            min-width: 280px;
            max-width: 350px;
          }
        }

        .category-chip-btn:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .category-chip-emoji {
          font-size: 20px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .category-chip-emoji {
            font-size: 24px;
          }
        }

        .category-chip-name {
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-primary);
          font-size: 13px;
          flex-grow: 1;
          line-height: 1.3;
          text-align: left;
        }

        @media (min-width: 640px) {
          .category-chip-name {
            font-size: 15px;
          }
        }

        .category-chip-arrow {
          color: var(--color-muted);
          transition: transform var(--transition-fast);
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .category-chip-btn:hover .category-chip-arrow {
          transform: translateX(4px);
          color: var(--color-accent);
        }

        /* Why SafeVerdicts Feature Cards */
        .feature-card {
          padding: 20px;
          text-align: left;
        }

        @media (min-width: 768px) {
          .feature-card {
            padding: 32px;
          }
        }

        .feature-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background-color: hsl(var(--color-accent-hsl) / 0.08);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .feature-card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .feature-card-text {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.6;
        }

        /* FAQ Accordion container adjustment */
        .faq-container-inner {
          max-width: 800px;
        }

        /* Newsletter Section */
        .newsletter-section {
          padding-top: 0;
        }

        .newsletter-box {
          background: radial-gradient(100% 100% at 0% 0%, #102A43 0%, #0A192F 100%);
          border-radius: var(--radius-lg);
          padding: 32px 16px;
          text-align: center;
          color: white;
          border: 1px solid #1E293B;
          box-shadow: var(--shadow-lg);
          display: flex;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .newsletter-box {
            padding: 64px 40px;
          }
        }

        .newsletter-content {
          max-width: 580px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .newsletter-icon-badge {
          width: 56px;
          height: 56px;
          background-color: rgba(11, 143, 211, 0.15);
          color: var(--color-accent);
          border: 1px solid rgba(11, 143, 211, 0.3);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .newsletter-title {
          font-size: 22px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .newsletter-title {
            font-size: 28px;
          }
        }

        .newsletter-sub {
          font-size: 14px;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .newsletter-form {
          width: 100%;
        }

        .newsletter-input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .newsletter-input-group {
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 6px;
            border-radius: var(--radius-md);
          }
        }

        .newsletter-input {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 14px;
          outline: none;
          flex-grow: 1;
          transition: var(--transition-fast);
        }

        @media (min-width: 640px) {
          .newsletter-input {
            background: transparent;
            border: none;
          }
        }

        .newsletter-input:focus {
          border-color: var(--color-accent);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .newsletter-submit-btn {
          width: 100%;
        }

        @media (min-width: 640px) {
          .newsletter-submit-btn {
            width: auto;
            padding: 10px 24px;
          }
        }

        .newsletter-alert {
          margin-top: 16px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .newsletter-alert-success {
          color: var(--color-success);
        }

        .newsletter-alert-error {
          color: #EF4444;
        }
      `}</style>
    </div>
  );
}
