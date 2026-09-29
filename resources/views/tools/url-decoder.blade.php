@extends('layouts.app')

@section('title', 'URL Percent Decoder | DevTools Hub')
@section('meta_description', 'Decode percent-encoded URL query strings and URI parameters back to readable plain text.')

@section('content')
<x-tool-layout
  title="URL Percent Decoder"
  category="URL"
  description="Decode percent-encoded URL query strings and URI parameters back to readable plain text."
>
  <div id="urlDecodeAlert" class="alert alert-error" style="display: none;"></div>

  <div class="two-col-grid">
    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Encoded URL Input</label>
        <span class="stats-badge" id="urlDecodeInputCount">Chars: 0</span>
      </div>

      <textarea
        id="urlDecodeInput"
        class="code-textarea"
        placeholder="Paste percent-encoded string (e.g. hello%20world)..."
      ></textarea>

      <div class="actions-group" style="margin-top: 12px;">
        <button class="btn btn-primary" id="btnProcessUrlDecode">
          ?? Decode URL
        </button>
        <button class="btn btn-danger btn-sm" id="btnUrlDecodeClear">
          Clear
        </button>
      </div>
    </div>

    <div>
      <div class="tool-actions-bar">
        <label class="form-label">Decoded Plain Text</label>
        <div class="actions-group">
          <span class="stats-badge" id="urlDecodeOutputCount">Chars: 0</span>
          <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="urlDecodeOutputPre">?? Copy</button>
        </div>
      </div>

      <pre id="urlDecodeOutputPre" class="code-output">// Decoded text will appear here...</pre>
    </div>
  </div>
</x-tool-layout>
@endsection
