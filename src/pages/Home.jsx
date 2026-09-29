import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ToolCard from '../components/ToolCard';
import { toolsData } from '../data/toolsData';

export default function Home() {
  const popularTools = toolsData.filter(t => t.popular);

  return (
    <>
      <Seo 
        title="DevTools Hub — Free Online Developer Tools"
        description="Fast, simple, and privacy-friendly online developer tools. Format JSON, generate UUIDs, encode Base64, convert text cases, and more."
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="badge badge-cyan" style={{ marginBottom: '16px' }}>
            ⚡ 100% Free & Client-Side
          </span>
          <h1 className="hero-title">
            DevTools Hub — <span className="gradient-text">Free Online Developer Tools</span>
          </h1>
          <p className="hero-subtitle">
            Fast, simple and privacy-friendly tools for developers. Format JSON, generate UUIDs, convert colors, and encode data — 100% locally in your browser.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tools" className="btn btn-primary">
              Explore All Tools →
            </Link>
            <Link to="/tools/json-formatter" className="btn btn-secondary">
              Try JSON Formatter
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2>Popular Developer Tools</h2>
              <p style={{ color: 'var(--text-muted)' }}>Hand-picked utilities developers use every day.</p>
            </div>
            <Link to="/tools" className="btn btn-secondary btn-sm">
              View All 10 Tools →
            </Link>
          </div>

          <div className="tools-grid">
            {popularTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Banner / Features */}
      <section style={{ background: '#FFFFFF', padding: '60px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <h2>Built with Privacy First</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
              Your data stays in your browser. We never log, store, or transmit your code, passwords, or sensitive payloads.
            </p>
          </div>

          <div className="tools-grid">
            <div style={{ background: 'var(--bg-main)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ marginBottom: '8px' }}>Zero Server Requests</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                All processing runs entirely on client-side JavaScript.
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ marginBottom: '8px' }}>Instant Execution</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                No API latency or waiting for remote server responses.
              </p>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌐</div>
              <h3 style={{ marginBottom: '8px' }}>SEO & Fast Load</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Optimized bundle size for instant page loads anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
