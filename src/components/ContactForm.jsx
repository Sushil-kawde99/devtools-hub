import React, { useState } from 'react';

/**
 * ContactForm Component
 * Manages form state using standard React useState.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-form-card">
      {submitted ? (
        <div style={{ textAlignment: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--primary)' }}>
            Thank You for Contacting Us!
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            We have received your message and will get back to you within 24 hours.
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send Us a Message</h3>

          <div className="form-group">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-input"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="form-input"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="form-textarea"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message →
          </button>
        </form>
      )}
    </div>
  );
}
