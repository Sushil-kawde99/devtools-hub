import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <h3>&lt;/&gt; DevTools Hub</h3>
            <p>
              Fast, simple, and privacy-friendly online developer tools. All processing happens 100% locally in your browser — no server uploads.
            </p>
          </div>

          {/* Popular Tools Links */}
          <div className="footer-col">
            <h4>Popular Tools</h4>
            <ul className="footer-links">
              <li><Link to="/tools/json-formatter">JSON Formatter</Link></li>
              <li><Link to="/tools/json-validator">JSON Validator</Link></li>
              <li><Link to="/tools/base64">Base64 Encoder</Link></li>
              <li><Link to="/tools/uuid-generator">UUID Generator</Link></li>
              <li><Link to="/tools/password-generator">Password Generator</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tools">All Tools</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal / Privacy */}
          <div className="footer-col">
            <h4>Privacy & Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>© 2026 DevTools Hub. Built with ❤️ by <span style={{ color: 'var(--cyan)', fontWeight: '700' }}>Sushil K. Kawde</span>.</div>
          <div>🔒 100% Client-Side & Privacy First</div>
        </div>
      </div>
    </footer>
  );
}
