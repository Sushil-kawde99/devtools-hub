import React, { useState, useEffect } from 'react';
import ToolLayout from '../../components/ToolLayout';
import CopyButton from '../../components/CopyButton';

export default function TimestampConverter() {
  const [currentUnix, setCurrentUnix] = useState(Math.floor(Date.now() / 1000));
  
  // Unix to Date state
  const [unixInput, setUnixInput] = useState(Math.floor(Date.now() / 1000).toString());
  const [unixResult, setUnixResult] = useState({ utc: '', local: '', relative: '' });

  // Date to Unix state
  const [dateInput, setDateInput] = useState(new Date().toISOString().slice(0, 16));
  const [dateResult, setDateResult] = useState({ seconds: '', ms: '' });

  // Update live clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUnix(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert Unix -> Date
  useEffect(() => {
    if (!unixInput.trim()) {
      setUnixResult({ utc: '', local: '', relative: '' });
      return;
    }
    let val = Number(unixInput.trim());
    if (isNaN(val)) return;

    // Detect milliseconds vs seconds (if > 100000000000)
    if (val > 100000000000) {
      val = Math.floor(val / 1000);
    }

    const date = new Date(val * 1000);
    if (isNaN(date.getTime())) return;

    setUnixResult({
      utc: date.toUTCString(),
      local: date.toLocaleString(),
      iso: date.toISOString()
    });
  }, [unixInput]);

  // Convert Date -> Unix
  useEffect(() => {
    if (!dateInput) return;
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return;

    const ms = date.getTime();
    const seconds = Math.floor(ms / 1000);
    setDateResult({ seconds: seconds.toString(), ms: ms.toString() });
  }, [dateInput]);

  return (
    <ToolLayout
      title="Unix Timestamp Converter"
      category="Converter"
      description="Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date & time string formats."
    >
      {/* Live Current Timestamp Header */}
      <div style={{ background: 'linear-gradient(135deg, var(--dark-navy) 0%, #1E1B4B 100%)', color: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Unix Epoch Timestamp</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>{currentUnix}</h2>
        </div>
        <CopyButton text={currentUnix.toString()} label="Copy Current Timestamp" className="btn btn-cyan btn-sm" />
      </div>

      <div className="two-col-grid">
        {/* Unix to Date */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '16px' }}>Unix Timestamp → Human Readable Date</h3>
          
          <div className="form-group">
            <label className="form-label">Enter Timestamp (Seconds or MS)</label>
            <input 
              type="text"
              className="code-textarea"
              style={{ minHeight: '48px', height: '48px' }}
              value={unixInput}
              onChange={(e) => setUnixInput(e.target.value)}
              placeholder="e.g. 1700000000"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            <div>
              <span className="stats-badge">UTC Format:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{unixResult.utc || '-'}</span>
                <CopyButton text={unixResult.utc} className="btn btn-secondary btn-sm" />
              </div>
            </div>

            <div>
              <span className="stats-badge">Local Time:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{unixResult.local || '-'}</span>
                <CopyButton text={unixResult.local} className="btn btn-secondary btn-sm" />
              </div>
            </div>

            <div>
              <span className="stats-badge">ISO 8601:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{unixResult.iso || '-'}</span>
                <CopyButton text={unixResult.iso} className="btn btn-secondary btn-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Date to Unix */}
        <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '16px' }}>Date & Time → Unix Timestamp</h3>

          <div className="form-group">
            <label className="form-label">Select Date & Time</label>
            <input 
              type="datetime-local"
              className="code-textarea"
              style={{ minHeight: '48px', height: '48px' }}
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
            <div>
              <span className="stats-badge">Unix Seconds:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: '700', color: 'var(--primary)' }}>{dateResult.seconds || '-'}</span>
                <CopyButton text={dateResult.seconds} className="btn btn-secondary btn-sm" />
              </div>
            </div>

            <div>
              <span className="stats-badge">Unix Milliseconds:</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', marginTop: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>{dateResult.ms || '-'}</span>
                <CopyButton text={dateResult.ms} className="btn btn-secondary btn-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
