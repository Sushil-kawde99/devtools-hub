import React from 'react';
import Seo from '../components/Seo';

export default function Terms() {
  return (
    <>
      <Seo 
        title="Terms of Service"
        description="DevTools Hub Terms of Service."
      />

      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container container-narrow">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-muted)' }}>Effective Date: September 2026</p>
        </div>
      </div>

      <div className="container container-narrow" style={{ paddingTop: '40px' }}>
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', lineHeight: '1.7' }}>
          <h2>1. Use of Services</h2>
          <p>
            DevTools Hub provides free online developer utilities for personal and commercial development work. You are free to use all tools without cost or registration.
          </p>

          <h2 style={{ marginTop: '24px' }}>2. Disclaimer of Warranties</h2>
          <p>
            All tools and conversions are provided "as is" without warranty of any kind. While we strive for accuracy in formatting and validation, users should double-check critical outputs prior to production deployment.
          </p>
        </div>
      </div>
    </>
  );
}
