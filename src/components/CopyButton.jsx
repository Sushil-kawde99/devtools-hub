import React, { useState } from 'react';

/**
 * Reusable CopyButton component using modern Clipboard API with visual feedback.
 */
export default function CopyButton({ text, label = 'Copy', className = 'btn btn-secondary btn-sm' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="copy-btn-wrapper">
      {copied && <span className="copy-tooltip">✓ Copied!</span>}
      <button 
        type="button" 
        className={className} 
        onClick={handleCopy} 
        disabled={!text}
        title="Copy to clipboard"
      >
        {copied ? '✓ Copied' : `📋 ${label}`}
      </button>
    </div>
  );
}
