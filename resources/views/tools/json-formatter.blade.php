@extends('layouts.app')

@section('title', 'JSON Formatter & Minifier | DevTools Hub')
@section('meta_description', 'Prettify, format, or minify JSON data. Validates syntax and offers 1-click download.')

@section('content')
<x-tool-layout
  title="JSON Formatter & Minifier"
  category="JSON"
  description="Prettify, format, or minify JSON data. Validates syntax and offers 1-click download."
>
  <div id="jsonFormatterError" class="alert alert-error" style="display: none;">
    ?? <strong id="jsonFormatterErrorMsg"></strong>
  </div>

  <div class="two-col-grid">
    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Input JSON</label>
        <span class="stats-badge" id="jsonInputCharCount">Chars: 0</span>
      </div>

      <textarea 
        id="jsonInputTextarea"
        class="code-textarea"
        placeholder="Paste raw JSON here..."
      >{
  "name": "DevTools Hub",
  "version": 1.0,
  "features": ["Fast", "Private", "Free"]
}</textarea>

      <div class="actions-group" style="margin-top: 12px;">
        <button class="btn btn-primary" id="btnJsonPrettify">
          ? Prettify (2 Spaces)
        </button>
        <button class="btn btn-secondary" id="btnJsonMinify">
          ? Minify
        </button>
        <button class="btn btn-secondary" id="btnJsonValidate">
          ? Validate
        </button>
        <button class="btn btn-danger btn-sm" id="btnJsonClear">
          Clear
        </button>
      </div>
    </div>

    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Formatted Result</label>
        <div class="actions-group">
          <span class="stats-badge" id="jsonOutputCharCount">Chars: 0</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="jsonOutputPre">?? Copy</button>
          <button class="btn btn-secondary btn-sm" id="btnJsonDownload">
            ?? Download .json
          </button>
        </div>
      </div>

      <pre id="jsonOutputPre" class="code-output">// Formatted or minified output will appear here...</pre>
    </div>
  </div>
</x-tool-layout>
@endsection
