import React from 'react';
import Seo from '../components/Seo';

export default function Privacy() {
  return (
    <>
      <Seo 
        title="Privacy Policy"
        description="DevTools Hub privacy policy. Learn how all web tools run locally in your browser with zero data collection."
      />

      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container container-narrow">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)' }}>Effective Date: September 2026</p>
        </div>
      </div>

      <div className="container container-narrow" style={{ paddingTop: '40px' }}>
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', lineHeight: '1.7' }}>
          <h2>1. Client-Side Execution & Zero Data Collection</h2>
          <p>
            At DevTools Hub, privacy is our core foundation. Every utility on this website — including JSON formatting, Base64 encoding/decoding, Password Generation, UUID generation, and text transformations — runs 100% locally inside your web browser.
          </p>

          <h2 style={{ marginTop: '24px' }}>2. No Server Storage or Tracking</h2>
          <p>
            We do not transmit, log, store, or share any of the input text, JSON payloads, passwords, or code snippets entered into any of our tools. No data is ever uploaded to remote servers or third-party databases.
          </p>

          <h2 style={{ marginTop: '24px' }}>3. Analytics & Cookies</h2>
          <p>
            This website does not require user registration or tracking cookies. We aim to keep your developer workflow clean, private, and uninterrupted.
          </p>
        </div>
      </div>
    </>
  );
}
