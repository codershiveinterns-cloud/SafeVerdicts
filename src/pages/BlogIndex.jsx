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
                  <span className="blog-media-emoji">{post.image || '📝'}</span>
                  <span className="blog-card-category">{post.category}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="meta-item"><Calendar size={12} /> {post.date}</span>
                    <span className="meta-item"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>

                <div className="blog-card-footer">
                  <div className="blog-card-author">
                    <User size={12} className="author-icon" />
                    <span>By {post.author}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read Post <ArrowRight size={14} />
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
        }

        .blog-header-badge {
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

        .blog-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
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
        }

        /* Blog list */
        .blog-list-section {
          padding: 48px 0;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-card-media {
          height: 180px;
          background: linear-gradient(135deg, hsl(var(--color-accent-hsl) / 0.05) 0%, hsl(var(--color-accent-hsl) / 0.15) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid var(--color-border);
        }

        .blog-media-emoji {
          font-size: 56px;
          transition: transform var(--transition-normal);
        }

        .blog-card:hover .blog-media-emoji {
          transform: scale(1.1);
        }

        .blog-card-category {
          position: absolute;
          bottom: 16px;
          left: 20px;
          background-color: var(--color-primary);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .blog-card-body {
          padding: 24px;
          flex-grow: 1;
        }

        .blog-card-meta {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 12px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .blog-card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .blog-card-title a:hover {
          color: var(--color-accent);
        }

        .blog-card-excerpt {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-card-footer {
          border-top: 1px solid var(--color-border);
          padding: 16px 24px;
          background-color: var(--color-subsurface);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .blog-card-author {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--color-muted);
        }

        .author-icon {
          color: var(--color-accent);
        }

        .blog-read-more {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .blog-read-more:hover {
          color: var(--color-accent-hover);
        }
      `}</style>
    </div>
  );
}
