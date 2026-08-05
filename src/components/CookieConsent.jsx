import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('safeverdicts_cookie_consent');
    if (!consent) {
      // Delay display slightly for smoother animation on initial load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('safeverdicts_cookie_consent', 'all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('safeverdicts_cookie_consent', 'essential');
    setVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'safeverdicts_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing
      })
    );
    setVisible(false);
  };

  const togglePreference = (type) => {
    if (type === 'essential') return; // Cannot disable essential
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="cookie-banner-card">
        {/* Header row */}
        <div className="cookie-header">
          <h4>We use cookies</h4>
          <button className="cookie-close-btn" onClick={() => setVisible(false)} aria-label="Dismiss banner">
            <X size={16} />
          </button>
        </div>

        {/* Description */}
        <p className="cookie-description">
          Essential cookies keep you signed in. Analytics help us improve. Marketing helps us recommend deals. You decide.{' '}
          <Link to="/privacy-policy" className="cookie-policy-link" onClick={() => setVisible(false)}>
            Privacy policy
          </Link>
        </p>

        {/* Customise Accordion */}
        {customizeOpen && (
          <div className="cookie-customize-accordion">
            <div className="customize-option">
              <label className="customize-label">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="cookie-checkbox"
                />
                <span>
                  <strong>Essential</strong> <span className="option-subtext">(Always Active)</span>
                </span>
              </label>
              <p className="option-desc">Necessary for secure navigation, session caching, and keeping track of deal redirect workflows.</p>
            </div>

            <div className="customize-option">
              <label className="customize-label">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="cookie-checkbox"
                />
                <span>
                  <strong>Analytics</strong>
                </span>
              </label>
              <p className="option-desc">Helps us monitor site performance, page load speeds, and popular deals via anonymous usage tracking.</p>
            </div>

            <div className="customize-option">
              <label className="customize-label">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="cookie-checkbox"
                />
                <span>
                  <strong>Marketing</strong>
                </span>
              </label>
              <p className="option-desc">Enables affiliate click-through attribution tracking so we can earn commissions from vendor deals.</p>
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="cookie-actions">
          <button 
            className="cookie-action-btn-customise"
            onClick={() => setCustomizeOpen(!customizeOpen)}
          >
            <span>Customise</span>
            {customizeOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <div className="cookie-button-group">
            {customizeOpen ? (
              <button className="btn btn-secondary cookie-action-secondary" onClick={handleSaveCustom}>
                Save Preferences
              </button>
            ) : (
              <button className="btn btn-secondary cookie-action-secondary" onClick={handleEssentialOnly}>
                Essential only
              </button>
            )}
            <button className="btn btn-primary cookie-action-primary" onClick={handleAcceptAll}>
              Accept all
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cookie-banner-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          width: calc(100vw - 48px);
          max-width: 480px;
          animation: slideUpCookie 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUpCookie {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .cookie-banner-card {
          background-color: var(--color-surface); /* Light theme background */
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 24px;
          color: var(--color-text);
        }

        .cookie-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .cookie-header h4 {
          font-family: var(--font-heading);
          color: var(--color-primary); /* Slate navy heading */
          font-size: 16px;
          font-weight: 700;
        }

        .cookie-close-btn {
          background: none;
          border: none;
          color: var(--color-muted);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color var(--transition-fast);
        }

        .cookie-close-btn:hover {
          color: var(--color-primary);
        }

        .cookie-description {
          font-size: 13px;
          line-height: 1.6;
          color: var(--color-muted);
          margin-bottom: 20px;
        }

        .cookie-policy-link {
          color: var(--color-accent);
          font-weight: 600;
          text-decoration: underline;
        }

        .cookie-policy-link:hover {
          color: var(--color-accent-hover);
        }

        /* Customize Accordion styling */
        .cookie-customize-accordion {
          border-top: 1px solid var(--color-border);
          margin-top: 16px;
          padding-top: 16px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .customize-option {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .customize-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--color-primary);
          cursor: pointer;
        }

        .cookie-checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--color-accent);
          cursor: pointer;
        }

        .option-subtext {
          font-size: 11px;
          color: var(--color-muted);
          font-weight: normal;
        }

        .option-desc {
          font-size: 11px;
          color: var(--color-muted);
          padding-left: 26px;
          line-height: 1.4;
        }

        /* Actions row styling */
        .cookie-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cookie-action-btn-customise {
          background: none;
          border: none;
          color: var(--color-muted);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 0;
          transition: color var(--transition-fast);
        }

        .cookie-action-btn-customise:hover {
          color: var(--color-primary);
        }

        .cookie-button-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cookie-action-secondary {
          font-size: 13px;
          padding: 8px 16px;
          background-color: var(--color-surface);
          border-color: var(--color-border);
          color: var(--color-primary);
        }

        .cookie-action-secondary:hover {
          background-color: var(--color-bg);
          border-color: var(--color-accent);
          color: var(--color-primary);
        }

        .cookie-action-primary {
          font-size: 13px;
          padding: 8px 16px;
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          color: #FFFFFF;
        }

        .cookie-action-primary:hover {
          background-color: var(--color-accent-hover);
          border-color: var(--color-accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(11, 143, 211, 0.25);
        }
      `}</style>
    </div>
  );
}
