import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Scale, AlertTriangle } from 'lucide-react';

export default function Legal({ pageType }) {
  
  const renderPrivacyPolicy = () => (
    <>
      <div className="legal-icon-badge"><Lock size={24} /></div>
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: August 04, 2026</p>
      
      <div className="legal-content-text">
        <p>
          At ShieldGuard, accessible from shieldguard.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ShieldGuard and how we use it.
        </p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We do not require users to create accounts or input personal details to view deals or read reviews. The only information we collect directly is:
        </p>
        <ul>
          <li><strong>Contact Form Data:</strong> Name, email address, and message details if you voluntarily contact us.</li>
          <li><strong>Newsletter Subscription:</strong> Email address if you choose to sign up for weekly deal updates.</li>
          <li><strong>Log Files & Web Analytics:</strong> Standard IP addresses, browser types, referral URLs, ISP details, and timestamps to diagnose server errors and analyze traffic trends.</li>
        </ul>

        <h2>2. Cookies & Affiliate Tracking</h2>
        <p>
          ShieldGuard utilizes cookies and affiliate tracking pixels. When you click on a "Get Deal" button, you are redirected to the software vendor's website via an affiliate link. 
        </p>
        <p>
          During this redirection, a cookie is stored in your web browser by third-party affiliate networks (such as Impact Radius, Commission Junction, or vendor direct networks). This cookie stores a referral code indicating you came from ShieldGuard, so the vendor can credit us with a referral commission. These cookies do not track personal identifying information and expire automatically after 30 to 120 days.
        </p>

        <h2>3. Third-Party Links</h2>
        <p>
          Our website contains links to external vendor websites (e.g., ExpressVPN, NordVPN, Norton). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to read the privacy policies of any site you visit.
        </p>

        <h2>4. GDPR & CCPA Compliance</h2>
        <p>
          Depending on your jurisdiction (such as the EU or California), you have rights regarding your data:
        </p>
        <ul>
          <li>The right to request access to or deletion of your email address if you subscribed to our newsletter.</li>
          <li>The right to opt-out of cookie tracking using browser settings or our cookies footer banner.</li>
        </ul>
        <p>
          If you wish to exercise these rights, please contact us using our <Link to="/contact" className="legal-inline-link">Contact Form</Link>.
        </p>
      </div>
    </>
  );

  const renderTermsOfUse = () => (
    <>
      <div className="legal-icon-badge"><Scale size={24} /></div>
      <h1>Terms of Use</h1>
      <p className="last-updated">Last Updated: August 04, 2026</p>

      <div className="legal-content-text">
        <p>
          Welcome to ShieldGuard. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully.
        </p>

        <h2>1. Acceptance of Agreement</h2>
        <p>
          This agreement constitutes the entire and only agreement between us and you, and supersedes all prior agreements, warranties, and understandings with respect to the website.
        </p>

        <h2>2. Use of Site Content</h2>
        <p>
          The reviews, test reports, formatting, graphics, and compilation on ShieldGuard are protected under applicable copyrights and trademarks. You may view and print content for personal, non-commercial use only. Copying, republishing, or redistributing our review articles or speed logs without written consent is strictly prohibited.
        </p>

        <h2>3. Accuracy of Deal & Pricing Information</h2>
        <p>
          While our team checks coupon validity and software pricing weekly, we cannot guarantee that discount rates, billing details, or feature lists are 100% accurate at all times. Software providers frequently adjust prices, server networks, and terms.
        </p>
        <p>
          All purchasing contracts are processed directly on the vendor's domain. ShieldGuard is not responsible for billing errors, subscription cancellations, or software bugs encountered on vendor platforms.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall ShieldGuard or its founders be liable for any direct, indirect, incidental, or consequential damages arising out of your use of or inability to use the software recommended on this site.
        </p>
      </div>
    </>
  );

  const renderAffiliateDisclosure = () => (
    <>
      <div className="legal-icon-badge"><ShieldCheck size={24} /></div>
      <h1>Affiliate Disclosure</h1>
      <p className="last-updated">Last Updated: August 04, 2026</p>

      <div className="legal-content-text">
        <p>
          In compliance with the Federal Trade Commission (FTC) guidelines, this page describes our affiliate partnerships and how ShieldGuard remains funded.
        </p>

        <div className="callout-disclosure-box">
          <AlertTriangle size={18} className="callout-disclosure-icon" />
          <p>
            <strong>Summary:</strong> We may earn a commission when you click one of our links to purchase software. This does not increase the price you pay, and often helps us secure exclusive discount deals for you.
          </p>
        </div>

        <h2>1. How Our Business Model Functions</h2>
        <p>
          ShieldGuard is a free resource. We do not charge subscription fees, sell user emails, or gate our detailed testing logs behind paywalls. 
        </p>
        <p>
          To maintain our infrastructure, test servers, and staff, we use affiliate marketing. When you click a "Get Deal" or "Claim Discount" link for a product like ExpressVPN or Bitdefender and complete a purchase, the merchant pays us a commission. 
        </p>

        <h2>2. Honest Review Standards</h2>
        <p>
          Some might ask: *"If you get paid commissions, how can we trust your reviews?"*
        </p>
        <p>
          Our reputation is our most valuable asset. If we recommend slow, insecure, or overpriced software just to earn a commission, our readers will leave and never return. Therefore, our review methodology remains strictly independent:
        </p>
        <ul>
          <li>We purchase and test the software accounts ourselves.</li>
          <li>We publish actual test logs (speed, server count, leak test failures) even if they make a product look bad.</li>
          <li>We list high-quality free or low-commission alternatives (like Bitwarden) alongside commercial options.</li>
          <li>Providers cannot pay us to delete negative reviews, alter test rankings, or influence our final rating score.</li>
        </ul>

        <h2>3. Contact Information</h2>
        <p>
          If you have questions regarding our affiliate partnerships or want to report an issue with a specific discount link, please reach out via our <Link to="/contact" className="legal-inline-link">Contact Page</Link> or email us at partnerships@shieldguard.com.
        </p>
      </div>
    </>
  );

  return (
    <div className="legal-page">
      <section className="legal-inner-section">
        <div className="container max-width-container-sm">
          <Link to="/" className="legal-back-btn">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          
          <div className="card legal-card-box">
            {pageType === 'privacy' && renderPrivacyPolicy()}
            {pageType === 'terms' && renderTermsOfUse()}
            {pageType === 'disclosure' && renderAffiliateDisclosure()}
          </div>
        </div>
      </section>

      {/* Legal Page CSS */}
      <style>{`
        .legal-page {
          background-color: var(--color-bg);
          padding: 40px 0 80px 0;
        }

        .max-width-container-sm {
          max-width: 800px;
        }

        .legal-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-muted);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .legal-back-btn:hover {
          color: var(--color-accent);
        }

        .legal-card-box {
          padding: 32px;
          background-color: var(--color-surface);
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 768px) {
          .legal-card-box {
            padding: 48px;
          }
        }

        .legal-icon-badge {
          width: 56px;
          height: 56px;
          background-color: hsl(var(--color-accent-hsl) / 0.08);
          color: var(--color-accent);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .legal-card-box h1 {
          font-size: 28px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .last-updated {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 32px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }

        .legal-content-text h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-primary);
          margin: 28px 0 12px 0;
        }

        .legal-content-text p {
          font-size: 14px;
          line-height: 1.65;
          color: var(--color-text);
          margin-bottom: 16px;
        }

        .legal-content-text ul {
          padding-left: 20px;
          margin-bottom: 16px;
        }

        .legal-content-text ul li {
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-text);
          margin-bottom: 8px;
        }

        .legal-inline-link {
          color: var(--color-accent);
          font-weight: 600;
        }

        .legal-inline-link:hover {
          color: var(--color-accent-hover);
        }

        .callout-disclosure-box {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background-color: hsl(var(--color-warning-hsl) / 0.06);
          border: 1px solid hsl(var(--color-warning-hsl) / 0.15);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .callout-disclosure-box p {
          margin-bottom: 0;
          color: var(--color-primary);
          font-size: 13px;
          line-height: 1.5;
        }

        .callout-disclosure-icon {
          color: var(--color-warning);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
}
