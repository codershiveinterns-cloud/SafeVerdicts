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
          At SafeVerdicts, accessible from safeverdicts.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SafeVerdicts and how we use it.
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

        <h2>2. Cookies & Partner Redirects</h2>
        <p>
          SafeVerdicts provides independent software reviews and featured partner redirect links (such as for WindowsPCDoc on our homepage and blog). When you click on a partner link, you are redirected to the vendor's website. 
        </p>
        <p>
          During this redirection, standard referral tracking cookies may be used by the software vendor to identify visitor referrals. These cookies do not track personal identifying information and expire automatically.
        </p>

        <h2>3. Third-Party Links & Reviews</h2>
        <p>
          Our website focuses on unbiased software reviews. Direct redirect links are provided only for select featured partners like WindowsPCDoc. All other product listings present independent editorial reviews without external vendor links.
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
          Welcome to SafeVerdicts. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully.
        </p>

        <h2>1. Acceptance of Agreement</h2>
        <p>
          This agreement constitutes the entire and only agreement between us and you, and supersedes all prior agreements, warranties, and understandings with respect to the website.
        </p>

        <h2>2. Use of Site Content</h2>
        <p>
          The reviews, test reports, formatting, graphics, and compilation on SafeVerdicts are protected under applicable copyrights and trademarks. You may view and print content for personal, non-commercial use only. Copying, republishing, or redistributing our review articles or speed logs without written consent is strictly prohibited.
        </p>

        <h2>3. Accuracy of Deal & Pricing Information</h2>
        <p>
          While our team checks coupon validity and software pricing weekly, we cannot guarantee that discount rates, billing details, or feature lists are 100% accurate at all times. Software providers frequently adjust prices, server networks, and terms.
        </p>
        <p>
          All purchasing contracts are processed directly on the vendor's domain. SafeVerdicts is not responsible for billing errors, subscription cancellations, or software bugs encountered on vendor platforms.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall SafeVerdicts or its founders be liable for any direct, indirect, incidental, or consequential damages arising out of your use of or inability to use the software recommended on this site.
        </p>
      </div>
    </>
  );

  const renderAffiliateDisclosure = () => (
    <>
      <div className="legal-icon-badge"><ShieldCheck size={24} /></div>
      <h1>Affiliate Disclosure</h1>
      <p className="last-updated">Last updated: June 2026</p>

      <div className="legal-content-text">
        <p>
          Transparency is important to us. This page explains how SafeVerdicts may fund some of its content, resources, guides, comparisons, and recommendations. The short version: SafeVerdicts may participate in affiliate programmes. If you purchase through certain links on our website, we may earn a commission. This comes at no extra cost to you.
        </p>

        <h2>Our Commitment to Honesty</h2>
        <p>
          Our goal is to provide helpful, practical, and research-based content for people choosing VPNs, antivirus software, password managers, and other privacy and cybersecurity tools. Products and services mentioned on our website should be selected based on usefulness, features, security performance, pricing fit, ease of use, and individual protection needs.
        </p>
        <p>
          We do not accept payment to write fake positive reviews. Affiliate commissions should not control our opinions, comparisons, or recommendations.
        </p>

        <h2>How Affiliate Links Work</h2>
        <p>
          When you click an affiliate link on our website to a third-party provider, such as a VPN service, antivirus company, password manager, or other security software provider, a tracking code may be used. This helps the provider know that you came from our website.
        </p>
        <p>
          If you decide to purchase a product or service through that link, SafeVerdicts may receive a referral fee or commission. This can help cover the costs of running this website, creating resources, testing tools, maintaining content, and supporting our business operations.
        </p>

        <h2>No Extra Cost to You</h2>
        <p>
          Using an affiliate link does not increase the price you pay. In some cases, affiliate links may provide access to special discounts, offers, or introductory pricing from the provider. Any discount, pricing, or offer is controlled by the third-party provider and may change at any time.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Any third-party product or service you buy is provided by that company, not by SafeVerdicts. Your purchase, account, billing, support, performance, refunds, and service terms are subject to the provider's own terms, privacy policy, and support process.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          We try to keep information accurate and useful, but pricing, features, discounts, availability, and terms for third-party providers can change without notice. We cannot guarantee the performance, security, reliability, pricing, or support quality of any third-party service provider.
        </p>
        <p>
          You should always review the provider's latest pricing, features, terms, privacy policy, and refund policy before making a purchase.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships or how we fund this site, please contact us at <a href="mailto:support@safeverdicts.com" className="legal-inline-link">support@safeverdicts.com</a>.
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
