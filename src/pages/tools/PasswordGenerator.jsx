import React, { useState, useEffect } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let chars = '';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!chars) {
      setPassword('');
      return;
    }

    let result = '';
    const array = new Uint32Array(length);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(array);
      for (let i = 0; i < length; i++) {
        result += chars[array[i] % chars.length];
      }
    } else {
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const getStrength = () => {
    if (!password) return { label: 'None', color: '#CBD5E1', width: '0%' };
    let score = 0;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) return { label: 'Weak', color: '#EF4444', width: '25%' };
    if (score === 3) return { label: 'Medium', color: '#F59E0B', width: '50%' };
    if (score === 4) return { label: 'Strong', color: '#10B981', width: '75%' };
    return { label: 'Very Strong', color: '#06B6D4', width: '100%' };
  };

  const strength = getStrength();

  return (
    <ToolLayout
      title="Secure Password Generator"
      category="Security"
      description="Create strong, cryptographically secure passwords locally in your browser."
      privacyNotice="Passwords are generated locally in your browser and are never sent to a server."
    >
      <div className="two-col-grid">
        {/* Generator Controls */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '20px' }}>Customizer</h3>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label" style={{ margin: 0 }}>Password Length</label>
              <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{length} characters</span>
            </div>
            <input 
              type="range" 
              min={6} 
              max={64} 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
              <span>Uppercase Letters (A-Z)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
              <span>Lowercase Letters (a-z)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
              <span>Numbers (0-9)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
              <span>Symbols (!@#$%^&*)</span>
            </label>
          </div>

          <button className="btn btn-primary" onClick={generatePassword} style={{ width: '100%' }}>
            🔄 Generate New Password
          </button>
        </div>

        {/* Generated Password Output */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="tool-actions-bar">
              <label className="form-label">Generated Password</label>
              <CopyButton text={password} />
            </div>

            <div style={{ background: 'var(--dark-navy)', color: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', wordBreak: 'break-all', marginBottom: '20px', minHeight: '68px', display: 'flex', alignItems: 'center' }}>
              {password || 'Select at least one character type'}
            </div>

            {/* Password Strength Indicator */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '600' }}>
                <span>Strength:</span>
                <span style={{ color: strength.color }}>{strength.label}</span>
              </div>
              <div style={{ height: '8px', width: '100%', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: strength.width, background: strength.color, transition: 'var(--transition)' }} />
              </div>
            </div>
          </div>

          <div className="privacy-banner" style={{ marginTop: '24px' }}>
            <span>🔒 Passwords are generated locally in your browser and are never sent to a server.</span>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
