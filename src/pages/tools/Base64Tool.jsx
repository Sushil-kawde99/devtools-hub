import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function Base64Tool() {
  const [mode, setMode] = useState('encode'); // 'encode' | 'decode'
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const handleProcess = () => {
    setError(null);
    if (!input.trim()) {
      setOutput('');
      return;
    }

    try {
      if (mode === 'encode') {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(input.trim())));
        setOutput(decoded);
      }
    } catch (err) {
      setError(mode === 'encode' ? 'Error encoding text.' : 'Invalid Base64 string format.');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <ToolLayout
      title="Base64 Encoder & Decoder"
      category="Encoding"
      description="Encode plain text into Base64 format or decode Base64 strings safely in your browser."
    >
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button 
          className={`btn ${mode === 'encode' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => { setMode('encode'); setOutput(''); setError(null); }}
        >
          🔐 Encode to Base64
        </button>
        <button 
          className={`btn ${mode === 'decode' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => { setMode('decode'); setOutput(''); setError(null); }}
        >
          🔓 Decode from Base64
        </button>
      </div>

      {error && (
        <div className="alert alert-error">
          ⚠️ {error}
        </div>
      )}

      <div className="two-col-grid">
        {/* Input */}
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">{mode === 'encode' ? 'Plain Text Input' : 'Base64 Input'}</label>
            <span className="stats-badge">Chars: {input.length}</span>
          </div>

          <textarea 
            className="code-textarea"
            placeholder={mode === 'encode' ? 'Type text to encode...' : 'Paste Base64 string to decode...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="actions-group" style={{ marginTop: '12px' }}>
            <button className="btn btn-primary" onClick={handleProcess}>
              {mode === 'encode' ? 'Encode →' : 'Decode →'}
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        {/* Output */}
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Result</label>
            <div className="actions-group">
              <span className="stats-badge">Chars: {output.length}</span>
              <CopyButton text={output} />
            </div>
          </div>

          <pre className="code-output">
            {output || `// ${mode === 'encode' ? 'Base64 output' : 'Decoded text'} will appear here...`}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
}
