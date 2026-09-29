import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function JsonValidator() {
  const [inputJson, setInputJson] = useState('');
  const [status, setStatus] = useState(null); // 'valid' | 'invalid' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleValidate = () => {
    if (!inputJson.trim()) {
      setStatus(null);
      setErrorMessage('');
      return;
    }
    try {
      JSON.parse(inputJson);
      setStatus('valid');
      setErrorMessage('');
    } catch (err) {
      setStatus('invalid');
      setErrorMessage(err.message);
    }
  };

  const handleClear = () => {
    setInputJson('');
    setStatus(null);
    setErrorMessage('');
  };

  return (
    <ToolLayout
      title="JSON Syntax Validator"
      category="JSON"
      description="Check if your JSON string is valid according to strict RFC 8259 syntax rules."
    >
      {status === 'valid' && (
        <div className="alert alert-success">
          ✓ <strong>Valid JSON!</strong> Your JSON string is syntactically correct.
        </div>
      )}

      {status === 'invalid' && (
        <div className="alert alert-error">
          ❌ <strong>Invalid JSON:</strong> {errorMessage}
        </div>
      )}

      <div className="form-group">
        <div className="tool-actions-bar">
          <label className="form-label">Input JSON to Validate</label>
          <div className="actions-group">
            <span className="stats-badge">Chars: {inputJson.length}</span>
            <CopyButton text={inputJson} />
          </div>
        </div>

        <textarea
          className="code-textarea"
          placeholder='Paste JSON here (e.g. {"key": "value"})...'
          value={inputJson}
          onChange={(e) => {
            setInputJson(e.target.value);
            setStatus(null);
          }}
        />

        <div className="actions-group" style={{ marginTop: '16px' }}>
          <button className="btn btn-primary" onClick={handleValidate}>
            🔍 Validate Syntax
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
