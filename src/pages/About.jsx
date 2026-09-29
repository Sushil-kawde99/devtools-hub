import React from 'react';
import Seo from '../components/Seo';

export default function About() {
  return (
    <>
      <Seo 
        title="About Us"
        description="Learn about DevTools Hub — a clean, free, and privacy-first collection of online tools built for modern software engineers."
      />

      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container container-narrow">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>About DevTools Hub</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Fast, simple, and privacy-friendly online developer tools.
          </p>
        </div>
      </div>

      <div className="container container-narrow" style={{ paddingTop: '40px' }}>
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h2 style={{ marginBottom: '16px' }}>Our Mission</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.7', color: '#334155' }}>
            DevTools Hub was created to provide developers, engineers, and designers with lightning-fast, zero-overhead web utilities. We believe developer tools should be simple, ad-free, and respectful of user privacy.
          </p>

          <h2 style={{ marginBottom: '16px', marginTop: '32px' }}>Why DevTools Hub?</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#334155', marginBottom: '24px' }}>
            <li><strong>100% Client-Side:</strong> All data transformations (JSON parsing, Base64 encoding, password generation) run strictly inside your browser instance.</li>
            <li><strong>Zero Data Uploads:</strong> No sensitive code snippets, API keys, or tokens ever leave your local environment.</li>
            <li><strong>Modern & Fast:</strong> Built using React and Vite for instant page loads and responsive desktop and mobile experiences.</li>
            <li><strong>Completely Free:</strong> All tools are 100% free to use with no accounts or subscriptions required.</li>
          </ul>

          <h2 style={{ marginBottom: '16px', marginTop: '32px' }}>Technology Stack</h2>
          <p style={{ lineHeight: '1.7', color: '#334155', marginBottom: '24px' }}>
            DevTools Hub is powered by modern web standards including React 18, React Router DOM, Vite, and standard Web APIs (Crypto API, Clipboard API, URL API).
          </p>

          <div style={{ background: 'var(--primary-light)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #C7D2FE', marginTop: '24px' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>👨‍💻 Developed & Maintained By</h3>
            <p style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--dark-navy)' }}>
              Sushil K. Kawde
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Crafted with passion for software engineers and web developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
