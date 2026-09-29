@extends('layouts.app')

@section('title', 'URL Percent Encoder | DevTools Hub')
@section('meta_description', 'Convert text and query parameters into web-safe percent-encoded format (RFC 3986).')

@section('content')
<x-tool-layout
  title="URL Percent Encoder"
  category="URL"
  description="Convert text and query parameters into web-safe percent-encoded format (RFC 3986)."
>
  <div id="urlEncodeAlert" class="alert alert-error" style="display: none;"></div>

  <div class="two-col-grid">
    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Raw Text / URL</label>
        <span class="stats-badge" id="urlEncodeInputCount">Chars: 0</span>
      </div>

      <textarea
        id="urlEncodeInput"
        class="code-textarea"
        placeholder="Type or paste URL parameters (e.g., hello world & key=123)..."
      ></textarea>

      <div class="actions-group" style="margin-top: 12px;">
        <button class="btn btn-primary" id="btnProcessUrlEncode">
          ?? Encode URL
        </button>
        <button class="btn btn-danger btn-sm" id="btnUrlEncodeClear">
          Clear
        </button>
      </div>
    </div>

    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Encoded Result</label>
        <div class="actions-group">
          <span class="stats-badge" id="urlEncodeOutputCount">Chars: 0</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="urlEncodeOutputPre">?? Copy</button>
        </div>
      </div>

      <pre id="urlEncodeOutputPre" class="code-output">// Encoded URL string will appear here...</pre>
    </div>
  </div>
</x-tool-layout>
@endsection
