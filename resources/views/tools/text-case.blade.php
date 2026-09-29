@extends('layouts.app')

@section('title', 'Text Case Converter | DevTools Hub')
@section('meta_description', 'Transform text into UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more.')

@section('content')
<x-tool-layout
  title="Text Case Converter"
  category="Text"
  description="Transform text into UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case and more."
>
  <div class="form-group">
    <div class="tool-actions-bar">
      <label class="form-label">Input Text</label>
      <div class="actions-group">
        <span class="stats-badge" id="textCaseWordCount">Words: 0</span>
        <span class="stats-badge" id="textCaseCharCount">Chars: 0</span>
        <span class="stats-badge" id="textCaseLineCount">Lines: 0</span>
        <button type="button" class="btn btn-secondary btn-sm copy-trigger-btn" data-target="textCaseInput">?? Copy</button>
      </div>
    </div>

    <textarea
      id="textCaseInput"
      class="code-textarea"
      rows="8"
      placeholder="Paste or type text to convert case..."
    >DevTools Hub is a free online tool suite for developers.</textarea>
  </div>

  <div style="background: #FFFFFF; padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
    <h4 style="margin-bottom: 16px;">Convert Case To:</h4>
    <div class="actions-group">
      <button class="btn btn-primary btn-sm" id="btnCaseUpper">UPPERCASE</button>
      <button class="btn btn-primary btn-sm" id="btnCaseLower">lowercase</button>
      <button class="btn btn-primary btn-sm" id="btnCaseTitle">Title Case</button>
      <button class="btn btn-primary btn-sm" id="btnCaseSentence">Sentence case</button>
      <button class="btn btn-secondary btn-sm" id="btnCaseCamel">camelCase</button>
      <button class="btn btn-secondary btn-sm" id="btnCasePascal">PascalCase</button>
      <button class="btn btn-secondary btn-sm" id="btnCaseSnake">snake_case</button>
      <button class="btn btn-secondary btn-sm" id="btnCaseKebab">kebab-case</button>
      <button class="btn btn-danger btn-sm" id="btnCaseClear">Clear</button>
    </div>
  </div>
</x-tool-layout>
@endsection
