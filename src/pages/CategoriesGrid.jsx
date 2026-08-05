import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { categories, products } from '../data/seedData';

export default function CategoriesGrid() {
  // Helper to count active deals in each category
  const getDealCount = (categoryId) => {
    return products.filter((p) => p.category === categoryId).length;
  };

  return (
    <div className="categories-grid-page">
      {/* Header */}
      <section className="categories-header">
        <div className="container text-center">
          <div className="categories-badge">
            <Sparkles size={12} />
            <span>SafeVerdicts Software Directory</span>
          </div>
          <h1>Explore Deals by Category</h1>
          <p className="sub-description">
            Find tested security software deals and coupons. Navigate through our curated verticals to safeguard your devices, connections, passwords, and identity.
          </p>
        </div>
      </section>

      {/* Grid of Categories */}
      <section className="categories-list-section">
        <div className="container">
          <div className="grid grid-3">
            {categories.map((cat) => {
              const count = getDealCount(cat.id);
              const hasDeals = count > 0;

              return (
                <div key={cat.id} className="card category-card">
                  <div className="category-card-header">
                    <span className="category-card-emoji">{cat.emoji}</span>
                    {hasDeals ? (
                      <span className="deals-indicator">
                        <span className="live-pulse"></span>
                        {count} {count === 1 ? 'deal' : 'deals'} active
                      </span>
                    ) : (
                      <span className="deals-indicator-soon">Coming Soon</span>
                    )}
                  </div>

                  <div className="category-card-body">
                    <h3 className="category-card-title">{cat.name}</h3>
                    <p className="category-card-text">{cat.description}</p>
                  </div>

                  <div className="category-card-footer">
                    {hasDeals ? (
                      <Link to={`/${cat.slug}`} className="btn btn-primary category-browse-btn">
                        Browse Deals <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <button disabled className="btn btn-secondary category-browse-btn-disabled">
                        Unavailable for v1
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Grid CSS */}
      <style>{`
        .categories-grid-page {
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .categories-header {
          padding: 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .categories-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
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

        .categories-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .categories-header h1 {
            font-size: 40px;
          }
        }

        .sub-description {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* List Grid Section */
        .categories-list-section {
          padding: 48px 0;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .category-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px 0 24px;
        }

        .category-card-emoji {
          font-size: 36px;
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

        .deals-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-success);
          background-color: hsl(var(--color-success-hsl) / 0.1);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .deals-indicator-soon {
          display: inline-flex;
          align-items: center;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-muted);
          background-color: var(--color-subsurface);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .live-pulse {
          width: 6px;
          height: 6px;
          background-color: var(--color-success);
          border-radius: 50%;
          display: inline-block;
          animation: pulseShadow 2s infinite;
        }

        @keyframes pulseShadow {
          0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(46, 204, 113, 0); }
          100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
        }

        .category-card-body {
          padding: 20px 24px 24px 24px;
          flex-grow: 1;
        }

        .category-card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .category-card-text {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.5;
        }

        .category-card-footer {
          padding: 16px 24px 24px 24px;
        }

        .category-browse-btn {
          width: 100%;
          font-size: 14px;
          padding: 10px 16px;
        }

        .category-browse-btn-disabled {
          width: 100%;
          font-size: 14px;
          padding: 10px 16px;
          cursor: not-allowed;
          color: #94A3B8;
          background-color: var(--color-subsurface);
          border-color: var(--color-border);
        }
      `}</style>
    </div>
  );
}
