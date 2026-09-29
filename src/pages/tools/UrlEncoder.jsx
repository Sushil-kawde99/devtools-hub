import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function UrlEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const handleEncode = () => {
    setError(null);
    if (!input.trim()) {
      setOutput('');
      return;
    }
    try {
      setOutput(encodeURIComponent(input));
    } catch (err) {
      setError('Failed to encode URL.');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <ToolLayout
      title="URL Percent Encoder"
      category="URL"
      description="Convert text and query parameters into web-safe percent-encoded format (RFC 3986)."
    >
      {error && <div className="alert alert-error">⚠️ {error}</div>}

      <div className="two-col-grid">
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Raw Text / URL</label>
            <span className="stats-badge">Chars: {input.length}</span>
          </div>

          <textarea
            className="code-textarea"
            placeholder="Type or paste URL parameters (e.g., hello world & key=123)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="actions-group" style={{ marginTop: '12px' }}>
            <button className="btn btn-primary" onClick={handleEncode}>
              🔗 Encode URL
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Encoded Result</label>
            <div className="actions-group">
              <span className="stats-badge">Chars: {output.length}</span>
              <CopyButton text={output} />
            </div>
          </div>

          <pre className="code-output">
            {output || '// Encoded URL string will appear here...'}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
}
