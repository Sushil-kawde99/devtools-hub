@extends('layouts.app')

@section('title', 'All Developer Tools | DevTools Hub')
@section('meta_description', 'Browse all 10 free online developer tools: JSON formatter, validator, Base64 encoder, UUID generator, password generator, color converter and more.')

@section('content')
<div style="background: #FFFFFF; border-bottom: 1px solid var(--border-color); padding: 40px 0;">
  <div class="container">
    <h1 style="font-size: 2.2rem; margin-bottom: 12px;">Developer Tools Directory</h1>
    <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 600px; margin-bottom: 24px;">
      Browse our complete collection of privacy-friendly, browser-based web tools.
    </p>

    <div style="max-width: 500px;">
      <input 
        type="text" 
        id="toolSearchInput"
        className="code-textarea"
        style="width: 100%; min-height: 48px; height: 48px; font-size: 1rem; padding: 0 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);"
        placeholder="?? Search tools by name, keyword, or tag..."
      />
    </div>
  </div>
</div>

<div class="container" style="padding-top: 40px;">
  <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 16px; margin-bottom: 32px;" id="categoryFilterContainer">
    @foreach($categories as $cat)
      <button 
        class="btn btn-sm category-filter-btn {{ $cat === 'All' ? 'btn-primary' : 'btn-secondary' }}"
        data-category="{{ $cat }}"
      >
        {{ $cat }}
      </button>
    @endforeach
  </div>

  <div class="tools-grid" id="toolsListGrid">
    @foreach($tools as $tool)
      <x-tool-card :tool="$tool" />
    @endforeach
  </div>

  <div id="noToolsFoundMsg" style="display: none; text-align: center; padding: 60px 0; color: var(--text-muted);">
    <h3>No tools found matching your query</h3>
    <p>Try searching for another keyword or reset category filter.</p>
    <button class="btn btn-secondary btn-sm" id="resetFiltersBtn" style="margin-top: 16px;">
      Reset Filters
    </button>
  </div>
</div>
@endsection
