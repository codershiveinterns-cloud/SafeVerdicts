import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, Heart, Sparkles, Award, Star, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="container text-center">
          <div className="about-badge">
            <ShieldCheck size={12} />
            <span>Our Mission</span>
          </div>
          <h1>Transparent Cybersecurity Deals</h1>
          <p className="about-subtitle">
            SafeVerdicts was founded by Kapil Sharma to help users navigate the complicated landscape of security software. We cut through the marketing hype to deliver direct advice and savings.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section about-body-section">
        <div className="container about-body-inner">
          <div className="about-story-row">
            <div className="about-text-col">
              <h2>Who We Are</h2>
              <p>
                In today's digital landscape, threats are multiplying by the hour. Between malicious tracker bots, public Wi-Fi exploits, ransomware hijackers, and credential breaches, finding high-tier protection is a necessity, not a luxury.
              </p>
              <p>
                However, search engines are flooded with generic "ranking" sites that recommend software purely based on which provider pays the highest affiliate referral fee. This leads to biased reviews and inflated pricing.
              </p>
              <p>
                <strong>SafeVerdicts is different.</strong> We purchase accounts ourselves, test them on multiple devices, write our logs openly, and collaborate directly with providers to bypass retail prices.
              </p>
            </div>

            <div className="about-stats-card card">
              <h3 className="stats-card-title">SafeVerdicts by the Numbers</h3>
              <div className="stats-grid-small">
                <div className="stats-box">
                  <span className="stats-num">120+</span>
                  <span className="stats-desc">Software Suites Audited</span>
                </div>
                <div className="stats-box">
                  <span className="stats-num">480+</span>
                  <span className="stats-desc">Speed Tests Checked Weekly</span>
                </div>
                <div className="stats-box">
                  <span className="stats-num">86%</span>
                  <span className="stats-desc">Max Customer Savings Secured</span>
                </div>
                <div className="stats-box">
                  <span className="stats-num">0%</span>
                  <span className="stats-desc">Paid Review Placements</span>
                </div>
              </div>
            </div>
          </div>

          <div className="divider-about"></div>

          {/* Core Values */}
          <div className="methodology-block">
            <h2>Our Testing Methodology</h2>
            <p className="methodology-subtext">Every product review page on SafeVerdicts is backed by a rigorous multi-step testing criteria:</p>

            <div className="grid grid-3 methodology-grid">
              <div className="card meth-card">
                <div className="meth-icon-circle"><Award size={20} /></div>
                <h4>Speed & Bandwidth Logs</h4>
                <p>We connect to global servers (US, UK, Japan, Australia) and measure throughput loss to ensure your speeds remain optimal for streaming and browsing.</p>
              </div>

              <div className="card meth-card">
                <div className="meth-icon-circle"><Shield size={20} /></div>
                <h4>Leak Testing (DNS/WebRTC)</h4>
                <p>We run active scripts while connected to check for DNS leaks or IP disclosures to ensure the tunnel remains completely secure and anonymous.</p>
              </div>

              <div className="card meth-card">
                <div className="meth-icon-circle"><Sparkles size={20} /></div>
                <h4>Malware Capture Rates</h4>
                <p>For antiviruses, we test their real-time scanners against a sandbox container of safe malware signatures to record detection rates.</p>
              </div>
            </div>
          </div>

          <div className="divider-about"></div>

          {/* Founder & Corporate Details */}
          <div className="founder-office-block">
            <div className="founder-office-grid">
              <div className="card details-card">
                <div className="meth-icon-circle"><Heart size={20} /></div>
                <h4>Our Founder</h4>
                <div className="founder-profile">
                  <h3 className="founder-name">Kapil Sharma</h3>
                  <span className="founder-role">Lead Analyst & Founder</span>
                  <p className="founder-bio">
                    Kapil Sharma founded SafeVerdicts in 2026 with a simple mission: to build a digital ecosystem that separates marketing hype from actual cybersecurity performance. With over a decade of network engineering experience, Kapil reviews every software recommendation to ensure it meets our strict transparency and security standards.
                  </p>
                </div>
              </div>

              <div className="card details-card">
                <div className="meth-icon-circle"><MapPin size={20} /></div>
                <h4>Corporate Headquarters</h4>
                <div className="office-details">
                  <div className="office-address-container">
                    <p className="office-address">
                      1/F Hathikhera, Hathikhera Talai<br />
                      Ajmer, Rajasthan<br />
                      India, 305001
                    </p>
                  </div>
                  <p className="office-note">
                    All legal notices, mailings, and partner audits should be addressed to our headquarters registered under Indian corporate business records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About CSS */}
      <style>{`
        .about-page {
          background-color: var(--color-bg);
          padding-bottom: 40px;
        }

        .about-header {
          padding: 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .about-badge {
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

        .about-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .about-header h1 {
            font-size: 40px;
          }
        }

        .about-subtitle {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Story layout */
        .about-body-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .about-story-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-story-row {
            grid-template-columns: 1.5fr 1fr;
          }
        }

        .about-text-col h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .about-text-col p {
          font-size: 15px;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .about-stats-card {
          padding: 32px;
          background-color: #0A192F;
          color: white;
          border-color: #1E293B;
        }

        .stats-card-title {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          text-align: center;
        }

        .stats-grid-small {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .stats-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stats-num {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 800;
          color: var(--color-accent);
        }

        .stats-desc {
          font-size: 11px;
          color: #94A3B8;
          margin-top: 4px;
          line-height: 1.4;
        }

        .divider-about {
          height: 1px;
          background-color: var(--color-border);
        }

        /* Methodology styling */
        .methodology-block h2 {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 8px;
        }

        .methodology-subtext {
          font-size: 15px;
          color: var(--color-muted);
          text-align: center;
          margin-bottom: 36px;
        }

        .meth-card {
          padding: 28px;
          text-align: left;
        }

        .meth-icon-circle {
          width: 44px;
          height: 44px;
          background-color: hsl(var(--color-accent-hsl) / 0.08);
          color: var(--color-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .meth-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 10px;
        }

        .meth-card p {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.5;
        }

        /* Founder & Corporate Details Styling */
        .founder-office-block {
          margin-top: 20px;
        }

        .founder-office-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        @media (min-width: 768px) {
          .founder-office-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .details-card {
          padding: 32px;
          text-align: left;
        }

        .details-card h4 {
          font-size: 11px;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .founder-name {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 2px;
        }

        .founder-role {
          font-size: 13px;
          color: var(--color-muted);
          font-weight: 500;
          display: inline-block;
          margin-bottom: 16px;
        }

        .founder-bio {
          font-size: 14px;
          color: var(--color-text);
          line-height: 1.7;
        }

        .office-address-container {
          background-color: hsl(var(--color-accent-hsl) / 0.04);
          border-left: 3px solid var(--color-accent);
          padding: 14px 18px;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .office-address {
          font-size: 15px;
          color: var(--color-primary);
          line-height: 1.6;
          font-style: normal;
          font-weight: 600;
          margin: 0;
        }

        .office-note {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
