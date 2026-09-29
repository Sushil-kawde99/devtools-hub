import React, { useState, useEffect } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

function generateV4UUID() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [uuids, setUuids] = useState([]);

  const handleGenerate = () => {
    const list = [];
    for (let i = 0; i < count; i++) {
      let id = generateV4UUID();
      if (uppercase) id = id.toUpperCase();
      list.push(id);
    }
    setUuids(list);
  };

  useEffect(() => {
    handleGenerate();
  }, [count, uppercase]);

  const allUuidsText = uuids.join('\n');

  return (
    <ToolLayout
      title="UUID v4 Generator"
      category="Generator"
      description="Generate cryptographically secure v4 Universally Unique Identifiers (UUIDs) instantly."
    >
      <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <label className="form-label">Quantity</label>
            <select 
              value={count} 
              onChange={(e) => setCount(Number(e.target.value))}
              style={{ padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontWeight: '600' }}
            >
              <option value={1}>1 UUID</option>
              <option value={5}>5 UUIDs</option>
              <option value={10}>10 UUIDs</option>
              <option value={25}>25 UUIDs</option>
              <option value={50}>50 UUIDs</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px' }}>
            <input 
              type="checkbox" 
              id="uppercase" 
              checked={uppercase} 
              onChange={(e) => setUppercase(e.target.checked)} 
            />
            <label htmlFor="uppercase" style={{ fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}>
              Uppercase Letters
            </label>
          </div>

          <div style={{ marginLeft: 'auto', marginTop: '20px' }}>
            <button className="btn btn-primary" onClick={handleGenerate}>
              🔄 Regenerate
            </button>
          </div>
        </div>
      </div>

      <div className="tool-actions-bar">
        <label className="form-label">Generated List ({uuids.length})</label>
        <CopyButton text={allUuidsText} label="Copy All UUIDs" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {uuids.map((id, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              background: '#FFFFFF', 
              padding: '12px 16px', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem'
            }}
          >
            <span>{id}</span>
            <CopyButton text={id} className="btn btn-secondary btn-sm" />
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}
