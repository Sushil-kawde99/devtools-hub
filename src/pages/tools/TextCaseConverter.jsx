import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function TextCaseConverter() {
  const [text, setText] = useState('DevTools Hub is a free online tool suite for developers.');

  const getStats = () => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split('\n').length : 0;
    return { chars, words, lines };
  };

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());

  const toTitleCase = () => {
    setText(text.toLowerCase().replace(/(?:^|\s|-)\w/g, (match) => match.toUpperCase()));
  };

  const toSentenceCase = () => {
    setText(text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase()));
  };

  const toCamelCase = () => {
    const words = text.trim().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    if (!words.length || !words[0]) return;
    const camel = words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    setText(camel);
  };

  const toPascalCase = () => {
    const words = text.trim().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    const pascal = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    setText(pascal);
  };

  const toSnakeCase = () => {
    const words = text.trim().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    setText(words.map(w => w.toLowerCase()).join('_'));
  };

  const toKebabCase = () => {
    const words = text.trim().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    setText(words.map(w => w.toLowerCase()).join('-'));
  };

  const stats = getStats();

  return (
    <ToolLayout
      title="Text Case Converter"
      category="Text"
      description="Transform text into UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more."
    >
      <div className="form-group">
        <div className="tool-actions-bar">
          <label className="form-label">Input Text</label>
          <div className="actions-group">
            <span className="stats-badge">Words: {stats.words}</span>
            <span className="stats-badge">Chars: {stats.chars}</span>
            <span className="stats-badge">Lines: {stats.lines}</span>
            <CopyButton text={text} />
          </div>
        </div>

        <textarea
          className="code-textarea"
          rows={8}
          placeholder="Paste or type text to convert case..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Case Action Buttons */}
      <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <h4 style={{ marginBottom: '16px' }}>Convert Case To:</h4>
        <div className="actions-group">
          <button className="btn btn-primary btn-sm" onClick={toUpperCase}>UPPERCASE</button>
          <button className="btn btn-primary btn-sm" onClick={toLowerCase}>lowercase</button>
          <button className="btn btn-primary btn-sm" onClick={toTitleCase}>Title Case</button>
          <button className="btn btn-primary btn-sm" onClick={toSentenceCase}>Sentence case</button>
          <button className="btn btn-secondary btn-sm" onClick={toCamelCase}>camelCase</button>
          <button className="btn btn-secondary btn-sm" onClick={toPascalCase}>PascalCase</button>
          <button className="btn btn-secondary btn-sm" onClick={toSnakeCase}>snake_case</button>
          <button className="btn btn-secondary btn-sm" onClick={toKebabCase}>kebab-case</button>
          <button className="btn btn-danger btn-sm" onClick={() => setText('')}>Clear</button>
        </div>
      </div>
    </ToolLayout>
  );
}
