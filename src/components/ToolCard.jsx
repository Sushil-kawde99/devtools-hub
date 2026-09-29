import React from 'react';
import { Link } from 'react-router-dom';

export default function ToolCard({ tool }) {
  const { name, path, icon, category, description, popular } = tool;

  return (
    <div className="tool-card">
      <div>
        <div className="tool-card-header">
          <div className="tool-icon">{icon}</div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {popular && <span className="badge badge-cyan">Popular</span>}
            <span className="badge badge-primary">{category}</span>
          </div>
        </div>

        <h3 className="tool-card-title">{name}</h3>
        <p className="tool-card-desc">{description}</p>
      </div>

      <Link to={path} className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '16px' }}>
        Open Tool →
      </Link>
    </div>
  );
}
