import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function JsonFormatter() {
  const [inputJson, setInputJson] = useState('{\n  "name": "DevTools Hub",\n  "version": 1.0,\n  "features": ["Fast", "Private", "Free"]\n}');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState(null);

  const handleFormat = () => {
    setError(null);
    if (!inputJson.trim()) {
      setOutputJson('');
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err.message);
      setOutputJson('');
    }
  };

  const handleMinify = () => {
    setError(null);
    if (!inputJson.trim()) {
      setOutputJson('');
      return;
    }
    try {
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed));
    } catch (err) {
      setError(err.message);
      setOutputJson('');
    }
  };

  const handleValidate = () => {
    setError(null);
    if (!inputJson.trim()) return;
    try {
      JSON.parse(inputJson);
      alert('✓ Valid JSON structure!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setInputJson('');
    setOutputJson('');
    setError(null);
  };

  const handleDownload = () => {
    if (!outputJson) return;
    const blob = new Blob([outputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout 
      title="JSON Formatter & Minifier"
      category="JSON"
      description="Prettify, format, or minify JSON data. Validates syntax and offers 1-click download."
    >
      {error && (
        <div className="alert alert-error">
          ⚠️ <strong>Invalid JSON:</strong> {error}
        </div>
      )}

      <div className="two-col-grid">
        {/* Input */}
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Input JSON</label>
            <span className="stats-badge">Chars: {inputJson.length}</span>
          </div>

          <textarea 
            className="code-textarea"
            placeholder="Paste raw JSON here..."
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
          />

          <div className="actions-group" style={{ marginTop: '12px' }}>
            <button className="btn btn-primary" onClick={handleFormat}>
              ✨ Prettify (2 Spaces)
            </button>
            <button className="btn btn-secondary" onClick={handleMinify}>
              ⚡ Minify
            </button>
            <button className="btn btn-secondary" onClick={handleValidate}>
              ✓ Validate
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        {/* Output */}
        <div>
          <div className="tool-actions-bar">
            <label className="form-label">Formatted Result</label>
            <div className="actions-group">
              <span className="stats-badge">Chars: {outputJson.length}</span>
              <CopyButton text={outputJson} />
              <button 
                className="btn btn-secondary btn-sm" 
                onClick={handleDownload}
                disabled={!outputJson}
              >
                💾 Download .json
              </button>
            </div>
          </div>

          <pre className="code-output">
            {outputJson || '// Formatted or minified output will appear here...'}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
}
