import React, { useState } from 'react';
import Seo from '../components/Seo';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Seo 
        title="Contact Us"
        description="Get in touch with DevTools Hub. Send feedback, report a tool bug, or suggest a new tool feature."
      />

      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container container-narrow">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Contact & Feedback</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Have feedback or feature requests? Send us a message below.
          </p>
        </div>
      </div>

      <div className="container container-narrow" style={{ paddingTop: '40px' }}>
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          {submitted ? (
            <div className="alert alert-success" style={{ padding: '24px', textAlign: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
              <h3>Thank you for your message!</h3>
              <p>We appreciate your feedback and will review your submission.</p>
              <button 
                className="btn btn-secondary btn-sm" 
                style={{ marginTop: '16px' }}
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  className="code-textarea"
                  style={{ minHeight: '48px', height: '48px' }}
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="code-textarea"
                  style={{ minHeight: '48px', height: '48px' }}
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message / Tool Request</label>
                <textarea 
                  className="code-textarea"
                  rows={5}
                  placeholder="Describe your suggestion or tool issue..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                ✉️ Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
