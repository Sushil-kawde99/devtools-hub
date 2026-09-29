@extends('layouts.app')

@section('title', 'UUID v4 Generator | DevTools Hub')
@section('meta_description', 'Generate cryptographically secure v4 Universally Unique Identifiers (UUIDs) instantly.')

@section('content')
<x-tool-layout
  title="UUID v4 Generator"
  category="Generator"
  description="Generate cryptographically secure v4 Universally Unique Identifiers (UUIDs) instantly."
>
  <div style="background: #FFFFFF; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 24px;">
    <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
      <div>
        <label class="form-label">Quantity</label>
        <select id="uuidCountSelect" style="padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-weight: 600;">
          <option value="1">1 UUID</option>
          <option value="5" selected>5 UUIDs</option>
          <option value="10">10 UUIDs</option>
          <option value="25">25 UUIDs</option>
          <option value="50">50 UUIDs</option>
        </select>
      </div>

      <div style="display: flex; align-items: center; gap: 8px; margin-top: 24px;">
        <input type="checkbox" id="uuidUppercaseCheck">
        <label for="uuidUppercaseCheck" style="font-size: 0.9rem; font-weight: 600; cursor: pointer;">
          Uppercase Letters
        </label>
      </div>

      <div style="margin-left: auto; margin-top: 20px;">
        <button class="btn btn-primary" id="btnRegenerateUuid">
          ?? Regenerate
        </button>
      </div>
    </div>
  </div>

  <div class="tool-actions-bar">
    <label class="form-label" id="uuidListHeader">Generated List (0)</label>
    <button type="button" class="btn btn-secondary btn-sm" id="btnCopyAllUuids">?? Copy All UUIDs</button>
  </div>

  <div id="uuidListContainer" style="display: flex; flex-direction: column; gap: 10px;"></div>
</x-tool-layout>
@endsection
