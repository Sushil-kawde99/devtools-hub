@extends('layouts.app')

@section('title', 'JSON Syntax Validator | DevTools Hub')
@section('meta_description', 'Check if your JSON string is valid according to strict RFC 8259 syntax rules.')

@section('content')
<x-tool-layout
  title="JSON Syntax Validator"
  category="JSON"
  description="Check if your JSON string is valid according to strict RFC 8259 syntax rules."
>
  <div id="jsonValidSuccessAlert" class="alert alert-success" style="display: none;">
    ? <strong>Valid JSON!</strong> Your JSON string is syntactically correct.
  </div>

  <div id="jsonValidErrorAlert" class="alert alert-error" style="display: none;">
    ? <strong>Invalid JSON:</strong> <span id="jsonValidErrMsg"></span>
  </div>

  <div class="form-group">
    <div class="tool-actions-bar">
      <label class="form-label">Input JSON to Validate</label>
      <div class="actions-group">
        <span class="stats-badge" id="jsonValidateCharCount">Chars: 0</span>
        <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="jsonValidateInput">?? Copy</button>
      </div>
    </div>

    <textarea
      id="jsonValidateInput"
      class="code-textarea"
      placeholder='Paste JSON here (e.g. {"key": "value"})...'
    ></textarea>

    <div class="actions-group" style="margin-top: 16px;">
      <button class="btn btn-primary" id="btnValidateJsonSyntax">
        ?? Validate Syntax
      </button>
      <button class="btn btn-danger btn-sm" id="btnValidateJsonClear">
        Clear
      </button>
    </div>
  </div>
</x-tool-layout>
@endsection
