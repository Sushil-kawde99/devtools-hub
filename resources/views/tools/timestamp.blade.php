@extends('layouts.app')

@section('title', 'Unix Timestamp Converter | DevTools Hub')
@section('meta_description', 'Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date & time string formats.')

@section('content')
<x-tool-layout
  title="Unix Timestamp Converter"
  category="Converter"
  description="Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date & time string formats."
>
  <div style="background: linear-gradient(135deg, var(--dark-navy) 0%, #1E1B4B 100%); color: #FFFFFF; padding: 24px; border-radius: var(--radius-md); margin-bottom: 32px; display: flex; align-items: center; justify-space-between; flex-wrap: wrap; gap: 16px;">
    <div>
      <span style="font-size: 0.85rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em;">Current Unix Epoch Timestamp</span>
      <h2 style="font-size: 2rem; font-family: var(--font-mono); color: var(--cyan);" id="liveCurrentTimestampDisplay">0</h2>
    </div>
    <button type="button" class="btn btn-cyan btn-sm copy-trigger-btn" data-target="liveCurrentTimestampDisplay">?? Copy Current Timestamp</button>
  </div>

  <div class="two-col-grid">
    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h3 style="margin-bottom: 16px;">Unix Timestamp ? Human Readable Date</h3>
      
      <div class="form-group">
        <label class="form-label">Enter Timestamp (Seconds or MS)</label>
        <input 
          type="text"
          id="unixToDateInput"
          class="code-textarea"
          style="min-height: 48px; height: 48px;"
          placeholder="e.g. 1700000000"
        />
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
        <div>
          <span class="stats-badge">UTC Format:</span>
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 4px;">
            <span style="font-family: var(--font-mono); font-size: 0.9rem;" id="resUtcFormat">-</span>
            <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="resUtcFormat">?? Copy</button>
          </div>
        </div>

        <div>
          <span class="stats-badge">Local Time:</span>
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 4px;">
            <span style="font-family: var(--font-mono); font-size: 0.9rem;" id="resLocalFormat">-</span>
            <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="resLocalFormat">?? Copy</button>
          </div>
        </div>

        <div>
          <span class="stats-badge">ISO 8601:</span>
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 4px;">
            <span style="font-family: var(--font-mono); font-size: 0.9rem;" id="resIsoFormat">-</span>
            <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="resIsoFormat">?? Copy</button>
          </div>
        </div>
      </div>
    </div>

    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h3 style="margin-bottom: 16px;">Date & Time ? Unix Timestamp</h3>

      <div class="form-group">
        <label class="form-label">Select Date & Time</label>
        <input 
          type="datetime-local"
          id="dateToUnixInput"
          class="code-textarea"
          style="min-height: 48px; height: 48px;"
        />
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
        <div>
          <span class="stats-badge">Unix Seconds:</span>
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 4px;">
            <span style="font-family: var(--font-mono); font-size: 1rem; font-weight: 700; color: var(--primary);" id="resUnixSeconds">-</span>
            <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="resUnixSeconds">?? Copy</button>
          </div>
        </div>

        <div>
          <span class="stats-badge">Unix Milliseconds:</span>
          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 10px 14px; border-radius: var(--radius-sm); margin-top: 4px;">
            <span style="font-family: var(--font-mono); font-size: 0.95rem;" id="resUnixMs">-</span>
            <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="resUnixMs">?? Copy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</x-tool-layout>
@endsection
