import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function UrlDecoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const handleDecode = () => {
    setError(null);
    if (!input.trim()) {
      setOutput('');
      return;
    }
    try {
      setOutput(decodeURIComponent(input));
    } catch (err) {
      setError('Invalid percent-encoded URI string format.');
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
      title="URL Percent Decoder"
      category="URL"
      description="Decode percent-encoded URL query strings and URI parameters back to readable plain text."
    >
      {error && <div className="alert alert-error">⚠️ {error}</div>}

      <div className="two-col-grid">
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Encoded URL Input</label>
            <span className="stats-badge">Chars: {input.length}</span>
          </div>

          <textarea
            className="code-textarea"
            placeholder="Paste percent-encoded string (e.g. hello%20world)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="actions-group" style={{ marginTop: '12px' }}>
            <button className="btn btn-primary" onClick={handleDecode}>
              🔓 Decode URL
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Decoded Plain Text</label>
            <div className="actions-group">
              <span className="stats-badge">Chars: {output.length}</span>
              <CopyButton text={output} />
            </div>
          </div>

          <pre className="code-output">
            {output || '// Decoded text will appear here...'}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
}
