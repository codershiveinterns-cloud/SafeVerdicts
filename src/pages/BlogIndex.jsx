import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../data/seedData';

export default function BlogIndex() {
  return (
    <div className="blog-index-page">
      {/* Header */}
      <section className="blog-header">
        <div className="container text-center">
          <div className="blog-header-badge">
            <span>Cybersecurity Intelligence</span>
          </div>
          <h1>Insights, Guides & Tutorials</h1>
          <p className="blog-header-sub">
            Stay ahead of digital threats. Read our independent testing logs, configuration guides, and product comparisons.
          </p>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="blog-list-section">
        <div className="container">
          <div className="grid grid-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card blog-card">
                <div className="blog-card-media">
                  {post.imageSrc && (
                    <img src={`/${post.imageSrc}`} alt={post.title} className="blog-media-img" loading="lazy" decoding="async" />
                  )}
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-badge-row">
                    <span className="blog-card-category-badge">{post.category}</span>
                  </div>
                  <span className="blog-card-readtime">{post.readTime}</span>

                  <h3 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <Link to={`/blog/${post.slug}`} className="btn-read-more">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Index CSS */}
      <style>{`
        .blog-index-page {
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .blog-header {
          padding: 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          text-align: center;
        }

        .blog-header .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .blog-header-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        .blog-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
          text-align: center;
          width: 100%;
        }

        @media (min-width: 768px) {
          .blog-header h1 {
            font-size: 40px;
          }
        }

        .blog-header-sub {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-align: center;
        }

        /* Blog list */
        .blog-list-section {
          padding: 48px 0;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .blog-card-media {
          height: 200px;
          width: 100%;
          overflow: hidden;
          background-color: var(--color-subsurface);
        }

        .custom-vector-card-thumbnail {
          height: 200px;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-border);
        }

        .thumbnail-window-header {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(15, 23, 42, 0.8);
          padding: 6px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .thumbnail-window-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .thumbnail-window-header .dot-r { background-color: #EF4444; }
        .thumbnail-window-header .dot-y { background-color: #F59E0B; }
        .thumbnail-window-header .dot-g { background-color: #10B981; }

        .thumb-app-name {
          color: #94A3B8;
          font-size: 10px;
          font-weight: 600;
          margin-left: 4px;
        }

        .thumbnail-body-content {
          background: linear-gradient(135deg, hsl(var(--color-accent-hsl) / 0.12) 0%, hsl(var(--color-accent-hsl) / 0.04) 100%);
          border: 1px solid hsl(var(--color-accent-hsl) / 0.2);
          border-radius: 8px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .thumb-icon-badge {
          font-size: 24px;
        }

        .thumb-status-box {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .thumb-status-box strong {
          font-size: 13px;
          color: #FFFFFF;
          font-weight: 700;
        }

        .thumb-status-box span {
          font-size: 10px;
          color: #94A3B8;
        }

        .thumb-speed-pill {
          background-color: #DCFCE7;
          color: #15803D;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .blog-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .blog-card:hover .blog-media-img {
          transform: scale(1.05);
        }

        .blog-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: flex-start;
          text-align: left;
        }

        .blog-card-badge-row {
          margin-bottom: 12px;
        }

        .blog-card-category-badge {
          display: inline-block;
          background-color: #FDF2E9;
          color: #E27D2F;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Dark mode overrides for badge */
        .dark-theme .blog-card-category-badge {
          background-color: rgba(226, 125, 47, 0.15);
          color: #FF9F43;
        }

        .blog-card-readtime {
          font-size: 12px;
          font-weight: 700;
          color: #D35400;
          margin-bottom: 12px;
          text-transform: lowercase;
        }

        .dark-theme .blog-card-readtime {
          color: #FF7F50;
        }

        .blog-card-title {
          font-size: 18px;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 12px;
          color: var(--color-primary);
        }

        .blog-card-title a {
          color: inherit;
          text-decoration: none;
        }

        .blog-card-title a:hover {
          color: var(--color-accent);
        }

        .blog-card-excerpt {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .btn-read-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background-color: var(--color-accent);
          color: white;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: var(--transition-normal);
        }

        .btn-read-more:hover {
          background-color: var(--color-accent-hover);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px hsl(var(--color-accent-hsl) / 0.2);
        }
      `}</style>
    </div>
  );
}
