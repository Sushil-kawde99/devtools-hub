import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';

export default function ToolLayout({ 
  title, 
  description, 
  category, 
  privacyNotice = 'All processing happens 100% locally in your browser. No data is ever sent to a server.',
  children 
}) {
  return (
    <>
      <Seo title={title} description={description} />
      
      {/* Header Bar */}
      <div className="tool-header-section">
        <div className="container">
          <div style={{ marginBottom: '12px' }}>
            <Link to="/tools" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              ← Back to All Tools
            </Link>
          </div>

          <div className="tool-title-row">
            <h1 className="tool-page-title">{title}</h1>
            {category && <span className="badge badge-primary">{category}</span>}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '750px' }}>
            {description}
          </p>

          <div className="privacy-banner">
            <span>🛡️</span>
            <span>{privacyNotice}</span>
          </div>
        </div>
      </div>

      {/* Main Tool Area */}
      <div className="container">
        {children}
      </div>
    </>
  );
}
