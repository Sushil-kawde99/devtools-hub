@extends('layouts.app')

@section('title', 'Base64 Encoder & Decoder | DevTools Hub')
@section('meta_description', 'Encode plain text into Base64 format or decode Base64 strings safely in your browser.')

@section('content')
<x-tool-layout
  title="Base64 Encoder & Decoder"
  category="Encoding"
  description="Encode plain text into Base64 format or decode Base64 strings safely in your browser."
>
  <div style="display: flex; gap: 12px; margin-bottom: 24px;">
    <button class="btn btn-primary" id="btnBase64ModeEncode">
      ?? Encode to Base64
    </button>
    <button class="btn btn-secondary" id="btnBase64ModeDecode">
      ?? Decode from Base64
    </button>
  </div>

  <div id="base64Alert" class="alert alert-error" style="display: none;"></div>

  <div class="two-col-grid">
    <div>
      <div class="tool-actions-bar">
        <label class="form-label" id="base64InputLabel">Plain Text Input</label>
        <span class="stats-badge" id="base64InputCharCount">Chars: 0</span>
      </div>

      <textarea 
        id="base64InputTextarea"
        class="code-textarea"
        placeholder="Type text to encode..."
      ></textarea>

      <div class="actions-group" style="margin-top: 12px;">
        <button class="btn btn-primary" id="btnBase64Process">
          Encode ?
        </button>
        <button class="btn btn-danger btn-sm" id="btnBase64Clear">
          Clear
        </button>
      </div>
    </div>

    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Result</label>
        <div class="actions-group">
          <span class="stats-badge" id="base64OutputCharCount">Chars: 0</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="base64OutputPre">?? Copy</button>
        </div>
      </div>

      <pre id="base64OutputPre" class="code-output">// Base64 output will appear here...</pre>
    </div>
  </div>
</x-tool-layout>
@endsection
