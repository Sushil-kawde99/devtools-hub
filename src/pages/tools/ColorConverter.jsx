import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

// Utility helper to convert HEX to RGB & HSL
function hexToRgb(hex) {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  if (cleanHex.length !== 6) return null;

  const num = parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export default function ColorConverter() {
  const [hex, setHex] = useState('#4F46E5');

  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : 'Invalid HEX';
  const hslString = hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : 'Invalid HEX';

  return (
    <ToolLayout
      title="HEX, RGB & HSL Color Converter"
      category="Converter"
      description="Convert color codes instantly between HEX, RGB, and HSL values with live visual preview."
    >
      <div className="two-col-grid">
        {/* Input & Picker */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '20px' }}>Select or Enter Color</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <input 
              type="color" 
              value={hex.startsWith('#') ? hex : '#4F46E5'} 
              onChange={(e) => setHex(e.target.value.toUpperCase())}
              style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer' }}
            />
            <div style={{ flex: 1 }}>
              <label className="form-label">HEX Color Code</label>
              <input 
                type="text" 
                className="code-textarea"
                style={{ minHeight: '48px', height: '48px' }}
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                placeholder="#4F46E5"
              />
            </div>
          </div>

          {/* Color Preview Box */}
          <div 
            style={{ 
              height: '140px', 
              borderRadius: 'var(--radius-md)', 
              background: rgb ? hex : '#E2E8F0', 
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '1.2rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {rgb ? hex : 'Invalid Color'}
          </div>
        </div>

        {/* Converted Values & Copy Buttons */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3>Converted Values</h3>

          <div>
            <span className="stats-badge">HEX Format:</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>{hex}</span>
              <CopyButton text={hex} className="btn btn-secondary btn-sm" />
            </div>
          </div>

          <div>
            <span className="stats-badge">RGB Format:</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>{rgbString}</span>
              <CopyButton text={rgbString} className="btn btn-secondary btn-sm" />
            </div>
          </div>

          <div>
            <span className="stats-badge">HSL Format:</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700' }}>{hslString}</span>
              <CopyButton text={hslString} className="btn btn-secondary btn-sm" />
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
