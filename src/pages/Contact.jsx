import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success flow - Save to localStorage for demo audit purposes
    const existingSubmissions = JSON.parse(localStorage.getItem('shieldguard_contacts') || '[]');
    existingSubmissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('shieldguard_contacts', JSON.stringify(existingSubmissions));

    setSubmitted(true);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for that field if user changes it
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="container text-center">
          <div className="contact-badge">
            <Mail size={12} />
            <span>Support Desk</span>
          </div>
          <h1>Get in Touch with ShieldGuard</h1>
          <p className="contact-sub">
            Have questions about a VPN review, advertisement inquiries, or coupon codes? Fill out the form below.
          </p>
        </div>
      </section>

      {/* Main Column Grid */}
      <section className="section contact-section">
        <div className="container contact-grid-inner">
          <div className="contact-info-col">
            <h2>Contact Information</h2>
            <p className="info-intro-text">
              Our support desk audits submissions daily. For advertising partnerships or coupon adjustments, please choose the corresponding dropdown item in the form.
            </p>

            <div className="info-cards-list">
              <div className="info-card">
                <div className="info-icon-box"><Mail size={18} /></div>
                <div>
                  <h4>Email Support</h4>
                  <p>support@shieldguard.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box"><MapPin size={18} /></div>
                <div>
                  <h4>Corporate Headquarters</h4>
                  <p>ShieldGuard Security, LLC<br />100 Pine Street, Suite 1200<br />San Francisco, CA 94111</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box"><ShieldCheck size={18} /></div>
                <div>
                  <h4>Encryption Assurance</h4>
                  <p>All contact submissions are encrypted end-to-end through our secure endpoint API.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <div className="card form-card">
              {submitted ? (
                <div className="success-state text-center">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. A ShieldGuard representative will review your message and get back to you at the email address provided within 24–48 hours.
                  </p>
                  <button 
                    className="btn btn-secondary success-reset-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-inner">
                  <div className="form-group-row">
                    <div className="form-item">
                      <label htmlFor="name" className="form-label">Full Name <span className="text-red">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="error-text-span">{errors.name}</span>}
                    </div>

                    <div className="form-item">
                      <label htmlFor="email" className="form-label">Email Address <span className="text-red">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="error-text-span">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-item">
                    <label htmlFor="subject" className="form-label">Inquiry Subject <span className="text-red">*</span></label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Advertise With Us">Advertise With Us</option>
                      <option value="Report an Issue">Report an Issue</option>
                    </select>
                  </div>

                  <div className="form-item">
                    <label htmlFor="message" className="form-label">Message Details <span className="text-red">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      placeholder="Describe your inquiry in detail..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error-text-span">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={16} /> Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact styling */}
      <style>{`
        .contact-page {
          background-color: var(--color-bg);
          padding-bottom: 80px;
        }

        .contact-header {
          padding: 60px 0;
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }

        .contact-badge {
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

        .contact-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .contact-header h1 {
            font-size: 40px;
          }
        }

        .contact-sub {
          font-size: 16px;
          color: var(--color-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grid */
        .contact-grid-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .contact-grid-inner {
            grid-template-columns: 1fr 1.3fr;
          }
        }

        .contact-info-col h2 {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .info-intro-text {
          font-size: 15px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .info-icon-box {
          width: 40px;
          height: 40px;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .info-card h4 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .info-card p {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.5;
        }

        /* Form styling */
        .form-card {
          padding: 32px;
          background-color: var(--color-surface);
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 768px) {
          .form-card {
            padding: 40px;
          }
        }

        .contact-form-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .form-group-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .text-red {
          color: #EF4444;
        }

        .form-input, .form-select, .form-textarea {
          background-color: var(--color-subsurface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
          color: var(--color-primary);
          transition: var(--transition-fast);
          width: 100%;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--color-accent);
          background-color: var(--color-surface);
          box-shadow: 0 0 0 3px hsl(var(--color-accent-hsl) / 0.1);
        }

        .input-error {
          border-color: #EF4444 !important;
          background-color: #FFFDFD;
        }

        .error-text-span {
          font-size: 11px;
          font-weight: 500;
          color: #EF4444;
        }

        .form-submit-btn {
          margin-top: 10px;
          padding: 12px;
          font-size: 15px;
        }

        /* Success state styles */
        .success-state {
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-badge {
          width: 80px;
          height: 80px;
          background-color: hsl(var(--color-success-hsl) / 0.1);
          color: var(--color-success);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(46, 204, 113, 0.15);
        }

        .success-state h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .success-state p {
          color: var(--color-muted);
          font-size: 14px;
          line-height: 1.6;
          max-width: 400px;
          margin-bottom: 28px;
        }

        .success-reset-btn {
          font-size: 14px;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
}
