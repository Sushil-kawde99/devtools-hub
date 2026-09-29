import React from 'react';

/**
 * ServiceCard Component
 * Displays a single service item in a styled card layout.
 */
export default function ServiceCard({ icon, title, description, features, onSelect }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {features && features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {feature}
            </li>
          ))}
        </ul>
      )}

      <button 
        className="btn btn-secondary" 
        onClick={onSelect}
        style={{ marginTop: 'auto', width: '100%' }}
      >
        Learn More →
      </button>
    </div>
  );
}
