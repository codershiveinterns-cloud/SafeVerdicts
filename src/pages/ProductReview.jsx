import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, X, ExternalLink, ArrowLeft, Shield, Clock, Award, ShieldAlert, ChevronDown, CheckCircle2 } from 'lucide-react';
import { products } from '../data/seedData';

export default function ProductReview() {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Find product matching this slug
  const product = products.find((p) => p.slug === slug);

  // If no product is matched, render a beautiful 404 fallback page
  if (!product) {
    return (
      <div className="container not-found-container">
        <div className="not-found-card">
          <ShieldAlert size={64} className="not-found-icon" />
          <h1>404 — Page Not Found</h1>
          <p>
            The software deal or review page you are looking for does not exist or has been moved. Use the navbar search to find active deals.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={16} /> Return to Homepage
            </Link>
            <Link to="/categories" className="btn btn-secondary">
              Browse All Categories
            </Link>
          </div>
        </div>

        <style>{`
          .not-found-container {
            padding: 100px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .not-found-card {
            background-color: var(--color-surface);
            border-radius: var(--radius-lg);
            border: 1px solid var(--color-border);
            padding: 48px;
            max-width: 550px;
            text-align: center;
            box-shadow: var(--shadow-lg);
          }

          .not-found-icon {
            color: #EF4444;
            margin-bottom: 24px;
          }

          .not-found-card h1 {
            font-size: 28px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 12px;
          }

          .not-found-card p {
            color: var(--color-muted);
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 32px;
          }

          .not-found-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: center;
          }

          @media (min-width: 640px) {
            .not-found-actions {
              flex-direction: row;
            }
          }
        `}</style>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="product-review-page">
      {/* 1. Review Header / Breadcrumbs */}
      <section className="review-hero-section">
        <div className="container">
          <Link to={`/${product.category}`} className="breadcrumb-back-link">
            <ArrowLeft size={14} /> Back to {product.category.toUpperCase()} category
          </Link>

          <div className="review-hero-grid">
            <div className="review-hero-info">
              <div className="review-badge-row">
                <span className="badge badge-trend" style={{ background: 'hsl(var(--color-accent-hsl) / 0.08)' }}>
                  {product.category.replace('-', ' ')} review
                </span>
                {product.trending && (
                  <span className="badge badge-discount" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Award size={12} /> Editor's Pick
                  </span>
                )}
              </div>

              <div className="review-title-row">
                <div className="review-logo">{product.logo}</div>
                <div>
                  <h1 className="review-title">{product.name} Review 2026</h1>
                  <div className="review-stars-row">
                    <div className="review-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          className="star-icon"
                          style={{ color: '#FFB300' }}
                        />
                      ))}
                      <span className="review-rating-score"><strong>{product.rating}</strong> / 5.0</span>
                    </div>
                    <span className="review-votes-label">Based on {product.reviewsCount} tester audits</span>
                  </div>
                </div>
              </div>

              <h2 className="review-headline">"{product.headline}"</h2>
              <p className="review-description-text">{product.description}</p>
            </div>

            {/* Quick Pricing Callout Box */}
            <div className="review-hero-pricing">
              <div className="pricing-callout-card">
                <div className="pricing-callout-header">
                  <span>Exclusive Offer</span>
                  <span className="discount-pill">{product.discountBadge}</span>
                </div>
                <div className="pricing-callout-body">
                  <div className="price-primary-row">
                    <span className="price-crossed">{product.originalPrice}</span>
                    <span className="price-bold-huge">{product.discountedPrice}</span>
                    <span className="price-duration">/{product.billingPeriod.includes('month') ? 'mo' : 'yr'}</span>
                  </div>
                  <p className="price-billing-subtext">{product.billingDetails}</p>

                  <div className="divider-pricing"></div>

                  <ul className="pricing-quick-bullets">
                    <li><Check size={14} className="bullet-check" /> Verified coupon code</li>
                    <li><Check size={14} className="bullet-check" /> Direct checkout redirection</li>
                    <li><Check size={14} className="bullet-check" /> 30-day money-back guarantee</li>
                  </ul>

                  <a 
                    href={product.affiliateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary pricing-buy-btn"
                  >
                    Claim Discount <ExternalLink size={16} />
                  </a>

                  <p className="affiliate-fine-print">
                    *Links out to {product.name} website. We earn a referral commission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pros & Cons Section */}
      <section className="section section-bg pros-cons-section">
        <div className="container">
          <h2 className="section-title-reviews">Pros & Cons Checklist</h2>
          <p className="section-subtitle-reviews">Here is what we loved and what we think could be improved during our testing phase.</p>

          <div className="grid grid-2 pros-cons-grid">
            <div className="card pros-card">
              <div className="pros-cons-title-row">
                <div className="icon-badge-green"><Check size={18} /></div>
                <h3>What We Liked (Pros)</h3>
              </div>
              <ul className="pros-cons-list">
                {product.pros.map((pro, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="item-icon-green" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card cons-card">
              <div className="pros-cons-title-row">
                <div className="icon-badge-red"><X size={18} /></div>
                <h3>Room for Improvement (Cons)</h3>
              </div>
              <ul className="pros-cons-list">
                {product.cons.map((con, idx) => (
                  <li key={idx}>
                    <span className="bullet-x-badge">X</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Specifications Table */}
      <section className="section specs-table-section">
        <div className="container max-width-container-md">
          <h2 className="section-title-reviews">Technical Specifications</h2>
          <p className="section-subtitle-reviews">We inspect actual software frameworks and server fleets. Here is the technical breakdown.</p>

          <div className="specs-table-card">
            <table className="specs-data-table">
              <thead>
                <tr>
                  <th>Feature Metric</th>
                  <th>Audit Specification</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td className="spec-table-key">{key}</td>
                    <td className="spec-table-val">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Product-Specific FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="section section-bg faq-section-specific">
          <div className="container max-width-container-md">
            <h2 className="section-title-reviews">{product.name} FAQs</h2>
            <p className="section-subtitle-reviews">Answers to common customer queries regarding {product.name} setups.</p>

            <div className="faq-accordion">
              {product.faqs.map((faq, index) => (
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
                    <ChevronDown className="faq-icon" size={18} />
                  </button>
                  <div className="faq-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Review CSS */}
      <style>{`
        .product-review-page {
          background-color: var(--color-bg);
          padding-bottom: 40px;
        }

        .review-hero-section {
          padding: 40px 0 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .breadcrumb-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-muted);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 32px;
        }

        .breadcrumb-back-link:hover {
          color: var(--color-accent);
        }

        .review-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .review-hero-grid {
            grid-template-columns: 1.6fr 1fr;
          }
        }

        .review-hero-info {
          display: flex;
          flex-direction: column;
        }

        .review-badge-row {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .review-title-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .review-logo {
          font-size: 36px;
          width: 72px;
          height: 72px;
          background-color: var(--color-bg);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .review-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
        }

        @media (min-width: 768px) {
          .review-title {
            font-size: 36px;
          }
        }

        .review-stars-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 4px;
        }

        @media (min-width: 640px) {
          .review-stars-row {
            flex-direction: row;
            align-items: center;
            gap: 12px;
          }
        }

        .review-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 14px;
          color: var(--color-primary);
        }

        .review-rating-score {
          font-size: 14px;
          margin-left: 6px;
        }

        .review-votes-label {
          font-size: 12px;
          color: var(--color-muted);
        }

        .review-headline {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.4;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .review-headline {
            font-size: 20px;
          }
        }

        .review-description-text {
          font-size: 15px;
          color: var(--color-muted);
          line-height: 1.7;
        }

        /* Hero Pricing Column */
        .review-hero-pricing {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .pricing-callout-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          width: 100%;
          overflow: hidden;
        }

        .pricing-callout-header {
          background-color: var(--color-primary);
          color: white;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .discount-pill {
          background-color: var(--color-warning);
          color: var(--color-primary);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 11px;
        }

        .pricing-callout-body {
          padding: 28px 24px;
        }

        .price-primary-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }

        .price-crossed {
          font-size: 16px;
          color: var(--color-muted);
          text-decoration: line-through;
        }

        .price-bold-huge {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .price-duration {
          font-size: 14px;
          color: var(--color-muted);
        }

        .price-billing-subtext {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 20px;
        }

        .divider-pricing {
          height: 1px;
          background-color: var(--color-border);
          margin-bottom: 20px;
        }

        .pricing-quick-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 13px;
          color: var(--color-text);
          margin-bottom: 24px;
        }

        .pricing-quick-bullets li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .bullet-check {
          color: var(--color-success);
        }

        .pricing-buy-btn {
          width: 100%;
          padding: 12px;
          font-size: 15px;
          margin-bottom: 12px;
        }

        .affiliate-fine-print {
          font-size: 11px;
          color: var(--color-muted);
          text-align: center;
        }

        /* Review Content Sections */
        .section-title-reviews {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 4px;
        }

        .section-subtitle-reviews {
          font-size: 14px;
          color: var(--color-muted);
          text-align: center;
          margin-bottom: 36px;
        }

        .max-width-container-md {
          max-width: 800px;
        }

        /* Pros Cons Grid styling */
        .pros-cons-grid {
          align-items: start;
        }

        .pros-card {
          padding: 32px;
          border-color: hsl(var(--color-success-hsl) / 0.2);
        }

        .cons-card {
          padding: 32px;
          border-color: #F87171 / 0.2; /* Soft red */
        }

        .pros-cons-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .icon-badge-green {
          width: 32px;
          height: 32px;
          background-color: hsl(var(--color-success-hsl) / 0.1);
          color: var(--color-success);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-badge-red {
          width: 32px;
          height: 32px;
          background-color: #FEE2E2;
          color: #EF4444;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pros-cons-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pros-cons-list li {
          display: flex;
          gap: 12px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--color-text);
          align-items: flex-start;
        }

        .item-icon-green {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bullet-x-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          color: #EF4444;
          background-color: #FEE2E2;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Tech Specs Table styling */
        .specs-table-card {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .specs-data-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .specs-data-table th,
        .specs-data-table td {
          padding: 16px 24px;
          font-size: 14px;
        }

        .specs-data-table th {
          background-color: var(--color-primary);
          color: white;
          font-family: var(--font-heading);
          font-weight: 600;
        }

        .specs-data-table tbody tr {
          border-bottom: 1px solid var(--color-border);
        }

        .specs-data-table tbody tr:last-child {
          border-bottom: none;
        }

        .specs-data-table tbody tr:nth-child(even) {
          background-color: var(--color-subsurface);
        }

        .spec-table-key {
          font-weight: 600;
          color: var(--color-primary);
        }

        .spec-table-val {
          color: var(--color-text);
        }
      `}</style>
    </div>
  );
}
