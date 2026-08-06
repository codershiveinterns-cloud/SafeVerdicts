import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ShieldCheck, Star, ExternalLink } from 'lucide-react';
import { blogPosts, products } from '../data/seedData';

// Custom lightweight Markdown-to-HTML parser component
function MarkdownRenderer({ content }) {
  if (!content) return null;

  const lines = content.split('\n');
  const parsedElements = [];
  
  let currentListItems = [];
  let currentTableLines = [];

  const flushList = (key) => {
    if (currentListItems.length > 0) {
      parsedElements.push(
        <ul key={`list-${key}`} className="post-ul">
          {currentListItems.map((item, idx) => (
            <li key={idx}>{parseInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      currentListItems = [];
    }
  };

  const flushTable = (key) => {
    if (currentTableLines.length > 0) {
      const tableRows = [];
      let headers = [];
      
      currentTableLines.forEach((line) => {
        const rawColumns = line.split('|').map(c => c.trim());
        const columns = rawColumns.slice(1, rawColumns.length - 1);

        if (columns.every(col => col.startsWith(':') || col.startsWith('-') || col.endsWith('-'))) {
          return;
        }

        if (headers.length === 0) {
          headers = columns;
        } else {
          tableRows.push(columns);
        }
      });

      parsedElements.push(
        <div key={`table-wrapper-${key}`} className="table-responsive" style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="post-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            {headers.length > 0 && (
              <thead>
                <tr>
                  {headers.map((col, idx) => <th key={idx}>{parseInlineFormatting(col)}</th>)}
                </tr>
              </thead>
            )}
            <tbody>
              {tableRows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((col, colIdx) => <td key={colIdx}>{parseInlineFormatting(col)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTableLines = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('|')) {
      flushList(i);
      currentTableLines.push(line);
      continue;
    }

    if (line.startsWith('* ') || line.startsWith('- ')) {
      flushTable(i);
      currentListItems.push(line.slice(2));
      continue;
    }

    if (line === '') {
      flushList(i);
      flushTable(i);
      continue;
    }

    flushList(i);
    flushTable(i);

    if (line.trim() === '---' || line.trim() === '***' || line.trim() === '___') {
      parsedElements.push(<hr key={i} className="post-hr" />);
      continue;
    }

    if (line.startsWith('> ')) {
      parsedElements.push(
        <blockquote key={i} className="post-takeaway-box">
          {parseInlineFormatting(line.slice(2))}
        </blockquote>
      );
      continue;
    }

    if (line.startsWith('# ')) {
      parsedElements.push(<h1 key={i} className="post-h1">{parseInlineFormatting(line.slice(2))}</h1>);
      continue;
    }
    if (line.startsWith('## ')) {
      parsedElements.push(<h2 key={i} className="post-h2">{parseInlineFormatting(line.slice(3))}</h2>);
      continue;
    }
    if (line.startsWith('### ')) {
      parsedElements.push(<h3 key={i} className="post-h3">{parseInlineFormatting(line.slice(4))}</h3>);
      continue;
    }
    if (line.startsWith('#### ')) {
      parsedElements.push(<h4 key={i} className="post-h4">{parseInlineFormatting(line.slice(5))}</h4>);
      continue;
    }

    parsedElements.push(<p key={i} className="post-p">{parseInlineFormatting(line)}</p>);
  }

  flushList(lines.length);
  flushTable(lines.length);

  return <div className="markdown-body-content">{parsedElements}</div>;
}

function parseInlineFormatting(text) {
  if (typeof text !== 'string') return text;

  // Match links like [text](url) or bold **text** or code `code`
  // We process links first, then bold, then code
  const elements = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  const processText = (str, keyPrefix) => {
    if (!str) return [];
    // Bold splitting
    const boldParts = str.split(/\*\*([^*]+)\*\*/g);
    return boldParts.map((part, bIdx) => {
      if (bIdx % 2 === 1) {
        return <strong key={`${keyPrefix}-b-${bIdx}`}>{part}</strong>;
      }
      return part;
    });
  };

  let keyIdx = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const prevStr = text.substring(lastIndex, match.index);
      elements.push(...processText(prevStr, `pre-${keyIdx}`));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    
    if (linkUrl.startsWith('http')) {
      elements.push(
        <a key={`link-${keyIdx}`} href={linkUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
          {linkText}
        </a>
      );
    } else {
      elements.push(
        <Link key={`link-${keyIdx}`} to={linkUrl} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
          {linkText}
        </Link>
      );
    }
    
    lastIndex = linkRegex.lastIndex;
    keyIdx++;
  }

  if (lastIndex < text.length) {
    const remaining = text.substring(lastIndex);
    elements.push(...processText(remaining, `post-${keyIdx}`));
  }

  return elements.length === 1 ? elements[0] : elements;
}

export default function BlogPost() {
  const { slug } = useParams();

  // Find post safely with case and trailing slash normalization
  const normalizedSlug = slug ? slug.replace(/\/$/, '').trim().toLowerCase() : '';
  const post = blogPosts.find((p) => p.slug.toLowerCase() === normalizedSlug);

  // Wisecleaner specific product or top 2 default deals
  const wiseCleanerDeal = products.find((p) => p.id === 'wisecare-365');
  const recommendedDeals = products.slice(0, 2);

  if (!post) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <p>The requested blog article does not exist.</p>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      {/* Article Header */}
      <section className="post-hero">
        <div className="container">
          <Link to="/blog" className="post-back-link">
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <div className="post-meta-badge">{post.category}</div>
          <h1 className="post-main-title">{post.title}</h1>

          <div className="post-author-row">
            <div className="author-avatar">
              <User size={18} />
            </div>
            <div className="author-details">
              <span className="author-name">By {post.author}</span>
              <div className="meta-sub-items">
                <span><Calendar size={12} /> {post.date}</span>
                <span className="bullet-sep">•</span>
                <span><Clock size={12} /> {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container post-container-grid">
        <article className="post-main-card card">
          {/* Top Banner Ad Placement Slot */}
          <div className="top-ad-placement-slot">
            <div className="adsense-placeholder-box">
              <div className="adsense-label">ADVERTISEMENT / GOOGLE ADS SLOT (728x90)</div>
              <div className="adsense-banner-content">
                <span className="banner-brand">💻 WiseCleaner Partner Offer</span>
                <span className="banner-text">Automate junk cleanup, optimize Windows startup speed, and safeguard your privacy traces with 1-click system care.</span>
              </div>
            </div>
          </div>

          {/* Software Preview Dashboard Hero / Image Header */}
          <div className="post-media-image-header">
            {post.imageSrc && (
              <img src={`/${post.imageSrc}`} alt={post.title} className="post-header-img" fetchpriority="high" decoding="async" />
            )}
          </div>
          <div className="post-body-wrapper">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>

        {/* Sidebar Callouts */}
        <aside className="post-sidebar">
          <div className="sidebar-sticky">
            {/* WiseCleaner Special Dedicated Widget */}
            {wiseCleanerDeal && (
              <div className="card conversion-sidebar-card wisecleaner-highlight-card" style={{ marginBottom: '24px' }}>
                <div className="sidebar-card-header">
                  <ShieldCheck size={18} className="sidebar-header-icon" />
                  <h4>Featured Security Deal</h4>
                </div>

                <div className="wisecleaner-card-body" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>💻</span>
                      <div>
                        <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-primary)', fontWeight: '800' }}>Wise Data Recovery Pro</strong>
                        <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>Windows Lost File Recovery Tool</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <span style={{ backgroundColor: 'hsl(var(--color-accent-hsl) / 0.1)', color: 'var(--color-accent)', fontWeight: '800', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      EXCLUSIVE DEAL
                    </span>
                  </div>

                  <div className="active-partnership-badge" style={{ backgroundColor: '#DCFCE7', color: '#15803D', fontSize: '12px', fontWeight: '600', padding: '6px 10px', borderRadius: '6px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>✓ Verified SafeVerdicts Offer</span>
                  </div>

                  <a
                    href="https://www.wisecleaner.com/"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Visit WiseCleaner <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )}

            {!wiseCleanerDeal && (
              <div className="card conversion-sidebar-card">
                <div className="sidebar-card-header">
                  <ShieldCheck size={18} className="sidebar-header-icon" />
                  <h4>Top Security Deals</h4>
                </div>

                <div className="sidebar-deals-list">
                  {recommendedDeals.map((deal) => (
                    <div key={deal.id} className="sidebar-deal-item">
                      <div className="sidebar-deal-meta">
                        <div className="sidebar-deal-logo">{deal.logo}</div>
                        <div>
                          <div className="sidebar-deal-name">{deal.name}</div>
                          <div className="sidebar-deal-stars">
                            <Star size={12} fill="currentColor" className="star-icon" />
                            <span>{deal.rating} Rating</span>
                          </div>
                        </div>
                      </div>

                      <div className="sidebar-deal-price-row">
                        <span className="sidebar-deal-tag">{deal.discountBadge}</span>
                        <span className="sidebar-deal-price">{deal.discountedPrice}/mo</span>
                      </div>

                      <Link
                        to={`/${deal.slug}`}
                        className="btn btn-secondary sidebar-deal-btn"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        Read Review
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="sidebar-card-footer">
                  <Link to="/categories" className="sidebar-view-all">
                    Browse all deals
                  </Link>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Blog Post CSS */}
      <style>{`
        .blog-post-page {
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .post-hero {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          padding: 24px 0 24px 0;
        }

        .post-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-muted);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .post-back-link:hover {
          color: var(--color-accent);
        }

        .post-meta-badge {
          display: inline-block;
          background-color: hsl(var(--color-accent-hsl) / 0.08);
          color: var(--color-accent);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .post-main-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1.25;
          margin-bottom: 16px;
          max-width: 850px;
        }

        @media (min-width: 768px) {
          .post-main-title {
            font-size: 34px;
          }
        }

        .post-author-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 36px;
          height: 36px;
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
        }

        .author-details {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .meta-sub-items {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--color-muted);
        }

        .bullet-sep {
          color: var(--color-border);
        }

        /* Post Layout columns */
        .post-container-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          padding-top: 24px;
        }

        @media (min-width: 1024px) {
          .post-container-grid {
            grid-template-columns: 2.2fr 1fr;
          }
        }

        .post-main-card {
          overflow: hidden;
        }

        .post-media-image-header {
          position: relative;
          border-bottom: 1px solid var(--color-border);
        }

        .custom-dashboard-container {
          height: auto !important;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 20px;
        }

        .app-window-frame {
          background-color: var(--color-surface);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
          overflow: hidden;
        }

        .app-window-header {
          background-color: #0F172A;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .window-controls {
          display: flex;
          gap: 6px;
        }

        .window-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .window-dot.red { background-color: #EF4444; }
        .window-dot.yellow { background-color: #F59E0B; }
        .window-dot.green { background-color: #10B981; }

        .window-app-title {
          color: #94A3B8;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.02em;
        }

        .window-license-badge {
          background-color: rgba(11, 143, 211, 0.2);
          color: #38BDF8;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .app-window-body {
          padding: 18px;
          background-color: var(--color-surface);
        }

        .dashboard-top-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(135deg, hsl(var(--color-accent-hsl) / 0.08) 0%, hsl(var(--color-accent-hsl) / 0.02) 100%);
          border: 1px solid hsl(var(--color-accent-hsl) / 0.15);
          border-radius: 8px;
          padding: 14px 18px;
          margin-bottom: 14px;
        }

        .score-ring-outer {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: conic-gradient(var(--color-accent) 0% 98%, #E2E8F0 98% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .score-ring-inner {
          width: 100%;
          height: 100%;
          background-color: var(--color-surface);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .score-number {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
        }

        .score-unit {
          font-size: 8px;
          color: var(--color-muted);
        }

        .score-details {
          flex: 1;
        }

        .status-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .status-title-row h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-primary);
          margin: 0;
        }

        .status-badge-green {
          background-color: #DCFCE7;
          color: #15803D;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .status-desc {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 8px;
        }

        .progress-bar-track {
          height: 6px;
          background-color: #E2E8F0;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #0B8FD3 0%, #10B981 100%);
        }

        .dashboard-grid-widgets {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        @media (min-width: 640px) {
          .dashboard-grid-widgets {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .widget-card {
          background-color: var(--color-subsurface);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .widget-icon {
          font-size: 16px;
        }

        .widget-info {
          display: flex;
          flex-direction: column;
        }

        .widget-info strong {
          font-size: 11px;
          color: var(--color-primary);
          line-height: 1.2;
        }

        .widget-info span {
          font-size: 9px;
          color: var(--color-muted);
        }

        .post-media-image-header {
          position: relative;
          border-bottom: 1px solid var(--color-border);
          max-height: 420px;
          overflow: hidden;
          background-color: var(--color-subsurface);
        }

        .post-header-img {
          width: 100%;
          height: auto;
          max-height: 420px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .post-body-wrapper {
          padding: 24px 28px;
        }

        @media (min-width: 768px) {
          .post-body-wrapper {
            padding: 32px 40px;
          }
        }

        /* Markdown rendering styling */
        .post-h1 {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
          margin: 36px 0 16px 0;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 8px;
        }

        .post-h2 {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
          margin: 28px 0 12px 0;
        }

        .post-h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--color-primary);
          margin: 24px 0 8px 0;
        }

        .post-p {
          font-size: 15px;
          line-height: 1.75;
          color: var(--color-text);
          margin-bottom: 20px;
        }

        .post-ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .post-ul li {
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 8px;
        }

        .post-table {
          width: 100%;
          border-collapse: collapse;
          margin: 28px 0;
          font-size: 14px;
        }

        .post-table th,
        .post-table td {
          padding: 12px 16px;
          border: 1px solid var(--color-border);
        }

        .post-table th {
          background-color: var(--color-subsurface);
          color: var(--color-primary);
          font-weight: 600;
          text-align: left;
        }

        .post-table.row-only {
          margin: 0;
          border-top: none;
        }
        
        .post-table.row-only td {
          border-top: none;
        }

        /* Sidebar Conversion elements */
        .post-sidebar {
          display: block;
        }

        .sidebar-sticky {
          position: sticky;
          top: 96px;
        }

        .conversion-sidebar-card {
          padding: 24px;
          border-color: hsl(var(--color-accent-hsl) / 0.2);
        }

        .sidebar-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 16px;
          margin-bottom: 20px;
        }

        .sidebar-header-icon {
          color: var(--color-accent);
        }

        .sidebar-card-header h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .sidebar-deals-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sidebar-deal-item {
          background-color: var(--color-subsurface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar-deal-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sidebar-deal-logo {
          font-size: 20px;
          width: 36px;
          height: 36px;
          background-color: var(--color-surface);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .sidebar-deal-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .sidebar-deal-stars {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--color-muted);
        }

        .sidebar-deal-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-deal-tag {
          font-size: 10px;
          font-weight: 700;
          color: var(--color-warning);
          background-color: hsl(var(--color-warning-hsl) / 0.1);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .sidebar-deal-price {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .sidebar-deal-btn {
          width: 100%;
          font-size: 13px;
          padding: 8px 16px;
        }

        .sidebar-card-footer {
          border-top: 1px solid var(--color-border);
          margin-top: 20px;
          padding-top: 16px;
          text-align: center;
        }

        .sidebar-view-all {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
        }

        .sidebar-view-all:hover {
          color: var(--color-accent-hover);
        }

        /* Takeaway Callout Box */
        .post-takeaway-box {
          background-color: hsl(var(--color-accent-hsl) / 0.06);
          border-left: 4px solid var(--color-accent);
          padding: 14px 18px;
          border-radius: 0 8px 8px 0;
          margin: 16px 0;
          font-size: 15px;
          color: var(--color-primary);
          line-height: 1.6;
        }

        .post-hr {
          border: none;
          border-top: 1px solid var(--color-border);
          margin: 24px 0;
        }

        /* Top Banner Ad Placement Slot */
        .top-ad-placement-slot {
          padding: 16px;
          background-color: var(--color-subsurface);
          border-bottom: 1px solid var(--color-border);
        }

        .adsense-placeholder-box {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 14px 20px;
          color: var(--color-text);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .adsense-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-muted);
          text-transform: uppercase;
        }

        .adsense-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .banner-brand {
          font-weight: 700;
          font-size: 14px;
          color: var(--color-accent);
        }

        .banner-text {
          font-size: 13px;
          color: var(--color-text);
        }

        .btn-banner-link {
          background-color: #F97316;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .btn-banner-link:hover {
          background-color: #EA580C;
        }

        /* Native Mid-Article Ad Banner */
        .native-ad-unit {
          background-color: #FFF7ED;
          border: 2px dashed #FDBA74;
          border-radius: 12px;
          padding: 20px;
          margin: 32px 0;
        }

        .ad-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .ad-sponsored-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          background-color: #FFEDD5;
          color: #C2410C;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .ad-vendor-code {
          font-size: 11px;
          font-weight: 700;
          color: #9A3412;
        }

        .ad-content-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ad-info h4 {
          margin: 0 0 6px 0;
          font-size: 17px;
          color: #431407;
        }

        .ad-info p {
          margin: 0;
          font-size: 14px;
          color: #7C2D12;
        }

        .ad-action {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ad-discount-pill {
          font-size: 14px;
          font-weight: 800;
          color: #C2410C;
        }

        .ad-btn {
          background-color: #F97316;
          border-color: #F97316;
          color: #FFFFFF;
          font-weight: 700;
        }

        .ad-btn:hover {
          background-color: #EA580C;
          border-color: #EA580C;
        }
      `}</style>
    </div>
  );
}
