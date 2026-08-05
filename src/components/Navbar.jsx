import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Shield, Search, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { products, categories, blogPosts } from '../data/seedData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('shieldguard_theme') || 'light';
  });

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('shieldguard_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.headline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  // Focus input when search modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = (slug) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(`/${slug}`);
  };

  return (
    <>
      <header className="navbar-container">
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <Shield className="logo-icon" size={28} />
            <span>Shield<span className="text-accent">Guard</span></span>
          </Link>

          {/* Nav links for Desktop */}
          <nav className="navbar-desktop-nav">
            <div className="nav-link-dropdown-wrapper">
              <NavLink to="/vpns" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>VPNs</NavLink>
              <div className="dropdown-menu products-dropdown">
                <div className="dropdown-title">Top VPN Providers</div>
                <div className="dropdown-grid">
                  {products.filter(p => p.category === 'vpns').map(p => (
                    <Link key={p.id} to={`/${p.slug}`} className="dropdown-item">
                      <span className="item-logo">{p.logo}</span>
                      <div className="item-info">
                        <div className="item-name">{p.name}</div>
                        <div className="item-rating">★ {p.rating}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/vpns" className="dropdown-footer-link">Compare All VPNs <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            <div className="nav-link-dropdown-wrapper">
              <NavLink to="/antivirus" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Antivirus</NavLink>
              <div className="dropdown-menu products-dropdown">
                <div className="dropdown-title">Top Antivirus Suites</div>
                <div className="dropdown-grid">
                  {products.filter(p => p.category === 'antivirus').map(p => (
                    <Link key={p.id} to={`/${p.slug}`} className="dropdown-item">
                      <span className="item-logo">{p.logo}</span>
                      <div className="item-info">
                        <div className="item-name">{p.name}</div>
                        <div className="item-rating">★ {p.rating}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/antivirus" className="dropdown-footer-link">Compare All Antivirus <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            <div className="nav-link-dropdown-wrapper">
              <NavLink to="/password-managers" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Password Managers</NavLink>
              <div className="dropdown-menu products-dropdown">
                <div className="dropdown-title">Top Password Vaults</div>
                <div className="dropdown-grid">
                  {products.filter(p => p.category === 'password-managers').map(p => (
                    <Link key={p.id} to={`/${p.slug}`} className="dropdown-item">
                      <span className="item-logo">{p.logo}</span>
                      <div className="item-info">
                        <div className="item-name">{p.name}</div>
                        <div className="item-rating">★ {p.rating}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/password-managers" className="dropdown-footer-link">Compare All Vaults <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            <div className="nav-link-dropdown-wrapper">
              <NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Categories</NavLink>
              <div className="dropdown-menu categories-dropdown">
                <div className="dropdown-title">Explore Security Categories</div>
                <div className="categories-grid-layout">
                  {categories.map(c => (
                    <Link key={c.id} to={`/${c.slug}`} className="dropdown-item category-item">
                      <span className="item-emoji">{c.emoji}</span>
                      <span className="item-name">{c.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/categories" className="dropdown-footer-link">All Categories Grid <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            <div className="nav-link-dropdown-wrapper">
              <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Blog</NavLink>
              <div className="dropdown-menu blog-dropdown">
                <div className="dropdown-title">Guides & Security Insights</div>
                <div className="blog-list-layout">
                  {blogPosts.slice(0, 3).map(post => (
                    <Link key={post.slug} to={`/blog/${post.slug}`} className="dropdown-item blog-item">
                      <span className="blog-item-emoji">{post.image || '📝'}</span>
                      <div className="blog-item-details">
                        <div className="blog-item-title">{post.title}</div>
                        <div className="blog-item-meta">{post.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <Link to="/blog" className="dropdown-footer-link">View All Articles <ArrowRight size={14} /></Link>
                </div>
              </div>
            </div>

            <div className="nav-link-disclosure-wrapper">
              <NavLink to="/affiliate-disclosure" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
                Affiliate Disclosure
              </NavLink>
              <div className="disclosure-tooltip">
                Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
              </div>
            </div>
          </nav>

          {/* Right actions */}
          <div className="navbar-actions">
            <button 
              className="action-theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="action-search-btn" 
              onClick={() => setSearchOpen(true)}
              aria-label="Search deals"
            >
              <Search size={20} />
            </button>
            <Link to="/categories" className="btn btn-primary navbar-cta-btn">
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="navbar-mobile-menu">
            <div className="container mobile-menu-inner">
              <NavLink to="/vpns" className="mobile-nav-link" onClick={() => setIsOpen(false)}>VPNs</NavLink>
              <NavLink to="/antivirus" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Antivirus</NavLink>
              <NavLink to="/password-managers" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Password Managers</NavLink>
              <NavLink to="/categories" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Categories</NavLink>
              <NavLink to="/blog" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Blog</NavLink>
              <NavLink to="/affiliate-disclosure" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Affiliate Disclosure</NavLink>
              <div className="mobile-menu-divider"></div>
              <button 
                className="btn btn-secondary mobile-search-trigger"
                onClick={() => {
                  setIsOpen(false);
                  setSearchOpen(true);
                }}
              >
                <Search size={18} /> Search Software
              </button>
              <Link to="/categories" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                Compare VPNs — Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Search Overlay Modal */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-wrapper">
              <Search className="search-icon-inside" size={20} />
              <input
                ref={searchInputRef}
                type="text"
                className="search-input"
                placeholder="Search VPNs, antivirus, password managers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-close" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {searchQuery.trim() !== '' && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <button
                      key={product.id}
                      className="search-item"
                      style={{ width: '100%', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer' }}
                      onClick={() => handleResultClick(product.slug)}
                    >
                      <div className="search-item-logo">{product.logo}</div>
                      <div className="search-item-info">
                        <div className="search-item-name">{product.name}</div>
                        <div className="search-item-headline">{product.headline}</div>
                      </div>
                      <ArrowRight size={16} className="search-item-arrow" />
                    </button>
                  ))
                ) : (
                  <div className="search-no-results">
                    No cybersecurity deals found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
            {searchQuery.trim() === '' && (
              <div className="search-shortcuts">
                <div className="search-shortcuts-title">Popular Searches</div>
                <div className="search-shortcuts-list">
                  {['ExpressVPN', 'NordVPN', 'Bitdefender', '1Password'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="search-shortcut-tag"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Styling specific to Header and Search Overlay */}
      <style>{`
        .navbar-container {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--color-navbar-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          z-index: 500;
          transition: background-color var(--transition-fast);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: var(--color-primary);
        }

        .logo-icon {
          color: var(--color-accent);
        }

        .text-accent {
          color: var(--color-accent);
        }

        .navbar-desktop-nav {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 1024px) {
          .navbar-desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-muted);
          position: relative;
          padding: 8px 0;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-normal);
        }

        .nav-link:hover::after,
        .nav-link.active-link::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .action-search-btn {
          background: none;
          border: none;
          color: var(--color-muted);
          cursor: pointer;
          padding: 8px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-search-btn:hover {
          color: var(--color-primary);
          background-color: var(--color-bg);
        }

        .action-theme-btn {
          background: none;
          border: none;
          color: var(--color-muted);
          cursor: pointer;
          padding: 8px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-theme-btn:hover {
          color: var(--color-primary);
          background-color: var(--color-bg);
        }

        .navbar-cta-btn {
          display: none;
        }

        @media (min-width: 768px) {
          .navbar-cta-btn {
            display: inline-flex;
            padding: 8px 20px;
            font-size: 14px;
          }
        }

        /* Affiliate Disclosure Tooltip & Dropdown Menu styling */
        .nav-link-disclosure-wrapper,
        .nav-link-dropdown-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        .disclosure-tooltip,
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          font-family: var(--font-body);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity var(--transition-fast), transform var(--transition-fast);
        }

        .disclosure-tooltip {
          width: 320px;
          padding: 16px 20px;
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--color-muted);
          text-align: center;
        }

        .dropdown-menu {
          padding: 16px;
          text-align: left;
        }

        .products-dropdown {
          width: 280px;
        }

        .categories-dropdown {
          width: 340px;
        }

        .blog-dropdown {
          width: 360px;
        }

        /* Triangle Arrow at top of tooltip and dropdowns */
        .disclosure-tooltip::before,
        .dropdown-menu::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 8px;
          border-style: solid;
          border-color: transparent transparent var(--color-surface) transparent;
          z-index: 1001;
        }

        .disclosure-tooltip::after,
        .dropdown-menu::after {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 9px;
          border-style: solid;
          border-color: transparent transparent var(--color-border) transparent;
          z-index: 999;
        }

        .nav-link-disclosure-wrapper:hover .disclosure-tooltip,
        .nav-link-dropdown-wrapper:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        /* Dropdown internal styling */
        .dropdown-title {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px dashed var(--color-border);
        }

        .dropdown-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .dropdown-item:hover {
          background-color: var(--color-bg);
          transform: translateX(4px);
        }

        .item-logo {
          font-size: 20px;
          background-color: var(--color-surface);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .item-info {
          display: flex;
          flex-direction: column;
        }

        .item-name {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .item-rating {
          font-size: 11px;
          color: var(--color-warning);
          font-weight: 500;
          margin-top: 2px;
        }

        /* Categories Dropdown specific */
        .categories-grid-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .category-item {
          padding: 10px;
        }

        .item-emoji {
          font-size: 18px;
        }

        /* Blog Dropdown specific */
        .blog-list-layout {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .blog-item {
          align-items: flex-start;
          padding: 10px;
        }

        .blog-item-emoji {
          font-size: 20px;
          margin-top: 2px;
        }

        .blog-item-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .blog-item-title {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.3;
        }

        .blog-item-meta {
          font-size: 11px;
          color: var(--color-muted);
        }

        /* Footer links inside dropdowns */
        .dropdown-footer {
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid var(--color-border);
          display: flex;
          justify-content: flex-start;
        }

        .dropdown-footer-link {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-accent);
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color var(--transition-fast);
        }

        .dropdown-footer-link:hover {
          color: var(--color-accent-hover);
        }

        .navbar-mobile-toggle {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .navbar-mobile-toggle {
            display: none;
          }
        }

        .navbar-mobile-menu {
          position: absolute;
          top: 72px;
          left: 0;
          right: 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          padding: 24px 0;
          animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          color: var(--color-primary);
          padding: 8px 0;
        }

        .mobile-menu-divider {
          height: 1px;
          background-color: var(--color-border);
          margin: 8px 0;
        }

        .mobile-search-trigger {
          text-align: left;
          justify-content: flex-start;
          width: 100%;
        }

        /* Search Modal styling */
        .search-icon-inside {
          color: var(--color-accent);
        }

        .search-no-results, .search-shortcuts {
          padding: 24px;
          text-align: center;
          color: var(--color-muted);
          font-size: 14px;
        }

        .search-shortcuts {
          text-align: left;
          border-top: 1px solid var(--color-border);
        }

        .search-shortcuts-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        .search-shortcuts-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .search-shortcut-tag {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          color: var(--color-primary);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .search-shortcut-tag:hover {
          border-color: var(--color-accent);
          background-color: hsl(var(--color-accent-hsl) / 0.05);
        }

        .search-item {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          transition: var(--transition-fast);
        }

        .search-item:hover {
          background-color: var(--color-bg);
        }

        .search-item-logo {
          font-size: 24px;
          background-color: var(--color-surface);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .search-item-info {
          flex: 1;
        }

        .search-item-name {
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-primary);
          font-size: 15px;
        }

        .search-item-headline {
          font-size: 12px;
          color: var(--color-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 320px;
        }

        .search-item-arrow {
          color: var(--color-muted);
          transition: transform var(--transition-fast);
        }

        .search-item:hover .search-item-arrow {
          transform: translateX(4px);
          color: var(--color-accent);
        }
      `}</style>
    </>
  );
}
