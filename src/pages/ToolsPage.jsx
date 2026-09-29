import React, { useState } from 'react';
import Seo from '../components/Seo';
import ToolCard from '../components/ToolCard';
import { toolsData, categories } from '../data/toolsData';

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Seo 
        title="All Developer Tools"
        description="Browse all 10 free online developer tools: JSON formatter, validator, Base64 encoder, UUID generator, password generator, color converter and more."
      />

      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '40px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Developer Tools Directory</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', marginBottom: '24px' }}>
            Browse our complete collection of privacy-friendly, browser-based web tools.
          </p>

          {/* Search Input */}
          <div style={{ maxWidth: '500px' }}>
            <input 
              type="text" 
              className="code-textarea"
              style={{ minHeight: '48px', height: '48px', fontSize: '1rem' }}
              placeholder="🔍 Search tools by name, keyword, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '40px' }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <h3>No tools found matching "{searchTerm}"</h3>
            <p>Try searching for another keyword or reset category filter.</p>
            <button 
              className="btn btn-secondary btn-sm" 
              style={{ marginTop: '16px' }}
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
