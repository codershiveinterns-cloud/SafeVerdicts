import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-inner">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <Shield className="logo-icon" size={24} />
            <span>Shield<span className="text-accent">Guard</span></span>
          </Link>
          <p className="footer-brand-text">
            Independent security testing and software reviews you can trust. We compare the market's leading tools to find you the best savings.
          </p>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Follow us on X/Twitter">
              {/* Twitter/X SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Follow us on Facebook">
              {/* Facebook SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Follow us on Instagram">
              {/* Instagram SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Discover</h4>
            <ul className="footer-links-list">
              <li><Link to="/vpns">VPNs</Link></li>
              <li><Link to="/antivirus">Antivirus</Link></li>
              <li><Link to="/password-managers">Password Managers</Link></li>
              <li><Link to="/categories">All Categories</Link></li>
              <li><Link to="/blog">Blog & Guides</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-disclosure">
          <ShieldCheck size={14} className="disclosure-badge-icon" />
          <span><strong>AFFILIATE DISCLOSURE:</strong> We may earn a commission when you use one of our links to make a purchase. This has no impact on the price you pay and helps keep our reviews free & independent.</span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright-row">
          <p>© 2026 ShieldGuard. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/affiliate-disclosure">FTC Disclosure</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: #0A192F; /* Deep Slate Navy color matching grabltd style */
          color: #E2E8F0;
          border-top: 1px solid #1E293B;
          padding: 80px 0 40px 0;
        }

        .footer-inner {
          display: grid;
          gap: 48px;
          grid-template-columns: 1fr;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .footer-inner {
            grid-template-columns: 1.5fr 2fr;
          }
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 800;
          color: #FFFFFF;
        }

        .footer-brand-text {
          color: #94A3B8;
          font-size: 14px;
          line-height: 1.6;
          max-width: 360px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: #1E293B;
          border-radius: var(--radius-sm);
          color: #94A3B8;
          transition: var(--transition-fast);
        }

        .social-icon:hover {
          color: #FFFFFF;
          background-color: var(--color-accent);
          transform: translateY(-2px);
        }

        .footer-links-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: repeat(2, 1fr);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-col-title {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          color: #94A3B8;
          font-size: 14px;
          transition: var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: #FFFFFF;
          padding-left: 4px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-disclosure {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 12px;
          line-height: 1.5;
          color: #64748B;
          background-color: #0E1E36;
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid #1E293B;
        }

        .disclosure-badge-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-divider {
          height: 1px;
          background-color: #1E293B;
        }

        .footer-copyright-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #94A3B8;
        }

        @media (min-width: 768px) {
          .footer-copyright-row {
            flex-direction: row;
          }
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: #64748B;
          transition: var(--transition-fast);
        }

        .footer-bottom-links a:hover {
          color: #FFFFFF;
        }
      `}</style>
    </footer>
  );
}
