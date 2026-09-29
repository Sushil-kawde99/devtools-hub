@extends('layouts.app')

@section('title', 'HEX, RGB & HSL Color Converter | DevTools Hub')
@section('meta_description', 'Convert color codes instantly between HEX, RGB, and HSL values with live visual preview.')

@section('content')
<x-tool-layout
  title="HEX, RGB & HSL Color Converter"
  category="Converter"
  description="Convert color codes instantly between HEX, RGB, and HSL values with live visual preview."
>
  <div class="two-col-grid">
    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h3 style="margin-bottom: 20px;">Select or Enter Color</h3>

      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
        <input 
          type="color" 
          id="colorNativePicker"
          value="#4F46E5"
          style="width: 64px; height: 64px; border-radius: var(--radius-sm); border: none; cursor: pointer;"
        />
        <div style="flex: 1;">
          <label class="form-label">HEX Color Code</label>
          <input 
            type="text" 
            id="colorHexInput"
            class="code-textarea"
            style="min-height: 48px; height: 48px;"
            value="#4F46E5"
            placeholder="#4F46E5"
          />
        </div>
      </div>

      <div 
        id="colorPreviewBox"
        style="height: 140px; border-radius: var(--radius-md); background: #4F46E5; box-shadow: var(--shadow-md); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: 800; font-size: 1.2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);"
      >
        #4F46E5
      </div>
    </div>

    <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 20px;">
      <h3>Converted Values</h3>

      <div>
        <span class="stats-badge">HEX Format:</span>
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 12px 16px; border-radius: var(--radius-sm); margin-top: 6px;">
          <span style="font-family: var(--font-mono); font-weight: 700;" id="colorDisplayHex">#4F46E5</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="colorDisplayHex">?? Copy</button>
        </div>
      </div>

      <div>
        <span class="stats-badge">RGB Format:</span>
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 12px 16px; border-radius: var(--radius-sm); margin-top: 6px;">
          <span style="font-family: var(--font-mono); font-weight: 700;" id="colorDisplayRgb">rgb(79, 70, 229)</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="colorDisplayRgb">?? Copy</button>
        </div>
      </div>

      <div>
        <span class="stats-badge">HSL Format:</span>
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-main); padding: 12px 16px; border-radius: var(--radius-sm); margin-top: 6px;">
          <span style="font-family: var(--font-mono); font-weight: 700;" id="colorDisplayHsl">hsl(243, 75%, 59%)</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="colorDisplayHsl">?? Copy</button>
        </div>
      </div>
    </div>
  </div>
</x-tool-layout>
@endsection
