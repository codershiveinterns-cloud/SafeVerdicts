import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, X, ExternalLink, ArrowRight, Shield, Award, Sparkles, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/seedData';

export default function CategoryListing({ categoryId }) {
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'price'

  // Get current category info
  const categoryInfo = categories.find((c) => c.id === categoryId);

  // Filter products by this category
  let categoryProducts = products.filter((p) => p.category === categoryId);

  // Sort products
  if (sortBy === 'rating') {
    categoryProducts = [...categoryProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price') {
    // Helper to parse price float
    const parsePrice = (priceStr) => {
      const parsed = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    };
    categoryProducts = [...categoryProducts].sort((a, b) => parsePrice(a.discountedPrice) - parsePrice(b.discountedPrice));
  }

  if (!categoryInfo) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Category Not Found</h2>
        <p>The requested directory category does not exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="category-listing-page">
      {/* Page Header */}
      <section className="listing-header-section">
        <div className="container">
          <div className="listing-header-badge">
            <span>Security Directory</span>
          </div>
          <h1 className="listing-title">
            Best {categoryInfo.name} of 2026: <span className="text-gradient">Tested & Reviewed</span>
          </h1>
          <p className="listing-description">
            {categoryInfo.description} We run real-world tests to check encryption strength, speeds, and verify discount codes. Updated weekly.
          </p>
        </div>
      </section>

      {/* Sorting bar & filters */}
      <section className="filters-section">
        <div className="container filters-inner">
          <div className="products-count">
            Showing <strong>{categoryProducts.length}</strong> top-rated providers
          </div>

          <div className="sorting-controls">
            <SlidersHorizontal size={16} className="filter-icon" />
            <span className="filter-label">Sort by:</span>
            <div className="toggle-buttons">
              <button 
                className={`toggle-btn ${sortBy === 'rating' ? 'active' : ''}`}
                onClick={() => setSortBy('rating')}
              >
                Best Rating
              </button>
              <button 
                className={`toggle-btn ${sortBy === 'price' ? 'active' : ''}`}
                onClick={() => setSortBy('price')}
              >
                Lowest Price
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products list */}
      <section className="listing-products-section">
        <div className="container listing-products-inner">
          {categoryProducts.map((product, index) => {
            const isFirst = index === 0;

            return (
              <div key={product.id} className={`listing-card ${isFirst ? 'highlighted-first' : ''}`}>
                {/* Ranking Tag */}
                <div className="ranking-badge">
                  {isFirst ? (
                    <span className="badge-best-choice">
                      <Award size={14} /> #1 Best Pick
                    </span>
                  ) : (
                    <span className="badge-rank">Rank #{index + 1}</span>
                  )}
                </div>

                <div className="listing-card-grid">
                  {/* Column 1: Logo & Basic Info */}
                  <div className="col-logo">
                    <div className="product-logo-box" style={{ borderColor: isFirst ? 'var(--color-accent)' : 'var(--color-border)' }}>
                      {product.logo}
                    </div>
                    <h3 className="product-name-title">{product.name}</h3>
                    <div className="star-rating-row">
                      <div className="stars">
                        <Star size={16} fill="currentColor" className="star-icon" />
                        <span className="rating-num">{product.rating}</span>
                      </div>
                      <span className="reviews-count">({product.reviewsCount} votes)</span>
                    </div>
                  </div>

                  {/* Column 2: Highlights / Bullet Points */}
                  <div className="col-highlights">
                    <p className="product-card-headline">"{product.headline}"</p>
                    <div className="highlight-bullets">
                      {product.pros.slice(0, 3).map((pro, i) => (
                        <div key={i} className="highlight-bullet-item">
                          <Check size={14} className="bullet-check-green" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Specs List */}
                  <div className="col-specs">
                    <h4 className="specs-col-title">Specs & Details</h4>
                    <ul className="specs-list">
                      {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                        <li key={key}>
                          <span className="spec-key">{key}:</span>{' '}
                          <span className="spec-val">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 4: Pricing & CTAs */}
                  <div className="col-action">
                    <div className="action-pricing-box">
                      <span className="price-label-deal">SafeVerdicts Deal:</span>
                      <div className="price-row-main">
                        <span className="price-old-line">{product.originalPrice}</span>
                        <span className="price-new-bold">{product.discountedPrice}</span>
                        <span className="price-period-label">/{product.billingPeriod.includes('month') ? 'mo' : 'yr'}</span>
                      </div>
                      <p className="discount-tag-line">{product.discountBadge} discount</p>
                    </div>

                    <div className="action-buttons-group">
                      <Link to={`/${product.slug}`} className="btn btn-primary list-review-btn" style={{ width: '100%', justifyContent: 'center' }}>
                        Read Review <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Listings styling */}
      <style>{`
        .category-listing-page {
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .listing-header-section {
          padding: 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          text-align: center;
        }

        .listing-header-badge {
          display: inline-flex;
          background-color: hsl(var(--color-accent-hsl) / 0.08);
          color: var(--color-accent);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .listing-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        @media (min-width: 480px) {
          .listing-title {
            font-size: 30px;
          }
        }

        @media (min-width: 768px) {
          .listing-title {
            font-size: 40px;
          }
        }

        .listing-description {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filters Bar */
        .filters-section {
          padding: 16px 0;
          background-color: var(--color-subsurface);
          border-bottom: 1px solid var(--color-border);
        }

        .filters-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
          align-items: center;
        }

        @media (min-width: 768px) {
          .filters-inner {
            flex-direction: row;
          }
        }

        .products-count {
          font-size: 14px;
          color: var(--color-muted);
        }

        .sorting-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-icon {
          color: var(--color-muted);
        }

        .filter-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .toggle-buttons {
          display: flex;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          padding: 3px;
          border-radius: var(--radius-sm);
        }

        .toggle-btn {
          background: none;
          border: none;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-muted);
          cursor: pointer;
          border-radius: 4px;
          transition: var(--transition-fast);
        }

        .toggle-btn.active {
          background-color: var(--color-accent);
          color: white;
        }

        /* Products Listing Cards */
        .listing-products-section {
          padding: 40px 0;
        }

        .listing-products-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .listing-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: var(--transition-normal);
        }

        .listing-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .listing-card.highlighted-first {
          border-color: hsl(var(--color-accent-hsl) / 0.4);
          box-shadow: 0 10px 30px -5px rgba(11, 143, 211, 0.12);
        }

        .ranking-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 10;
        }

        @media (min-width: 768px) {
          .ranking-badge {
            left: 32px;
          }
        }

        .badge-best-choice {
          background: linear-gradient(135deg, var(--color-accent) 0%, #0056B3 100%);
          color: white;
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .badge-rank {
          background-color: var(--color-subsurface);
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
        }

        .listing-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          padding: 48px 16px 20px 16px;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .listing-card-grid {
            grid-template-columns: 1.2fr 1.8fr 1.2fr;
            padding: 48px 32px 32px 32px;
          }
        }

        @media (min-width: 1024px) {
          .listing-card-grid {
            grid-template-columns: 1.2fr 1.8fr 1.2fr 1.5fr;
            gap: 32px;
          }
        }

        /* Column Logo details */
        .col-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 20px;
        }

        @media (min-width: 768px) {
          .col-logo {
            border-bottom: none;
            border-right: 1px solid var(--color-border);
            padding-bottom: 0;
            padding-right: 20px;
          }
        }

        .product-logo-box {
          font-size: 32px;
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          margin-bottom: 12px;
        }

        .product-name-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .star-rating-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 3px;
          color: #FFB300;
          font-weight: 700;
          font-size: 14px;
        }

        .rating-num {
          color: var(--color-primary);
          margin-left: 2px;
        }

        .reviews-count {
          font-size: 12px;
          color: var(--color-muted);
        }

        /* Column Highlights details */
        .col-highlights {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .product-card-headline {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .highlight-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .highlight-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          line-height: 1.4;
        }

        .bullet-check-green {
          color: var(--color-success);
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Column Specs details */
        .col-specs {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 20px 0;
        }

        @media (min-width: 768px) {
          .col-specs {
            border-top: none;
            border-bottom: none;
            border-left: 1px solid var(--color-border);
            padding: 0 0 0 20px;
          }
        }

        .specs-col-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
        }

        .spec-key {
          color: var(--color-muted);
          font-weight: 500;
        }

        .spec-val {
          color: var(--color-primary);
          font-weight: 600;
        }

        /* Column Actions details */
        .col-action {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        @media (min-width: 1024px) {
          .col-action {
            border-left: 1px solid var(--color-border);
            padding-left: 20px;
          }
        }

        .action-pricing-box {
          text-align: center;
        }

        @media (min-width: 1024px) {
          .action-pricing-box {
            text-align: right;
          }
        }

        .price-label-deal {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
        }

        .price-row-main {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 6px;
        }

        @media (min-width: 1024px) {
          .price-row-main {
            justify-content: flex-end;
          }
        }

        .price-old-line {
          font-size: 14px;
          color: var(--color-muted);
          text-decoration: line-through;
        }

        .price-new-bold {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .price-period-label {
          font-size: 12px;
          color: var(--color-muted);
        }

        .discount-tag-line {
          font-size: 11px;
          color: var(--color-warning);
          font-weight: 700;
        }

        .action-buttons-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .list-cta-btn {
          width: 100%;
          font-size: 14px;
          padding: 10px 16px;
        }

        .list-review-btn {
          width: 100%;
          font-size: 14px;
          padding: 10px 16px;
        }
      `}</style>
    </div>
  );
}
