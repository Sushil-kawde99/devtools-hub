@props(['tool'])

<div class="tool-card" data-category="{{ $tool['category'] }}" data-tags="{{ implode(' ', $tool['tags']) }}">
  <div>
    <div class="tool-card-header">
      <div class="tool-icon">{{ $tool['icon'] }}</div>
      <div style="display: flex; gap: 6px;">
        @if(!empty($tool['popular']))
          <span class="badge badge-cyan">Popular</span>
        @endif
        <span class="badge badge-primary">{{ $tool['category'] }}</span>
      </div>
    </div>

    <h3 class="tool-card-title">{{ $tool['name'] }}</h3>
    <p class="tool-card-desc">{{ $tool['description'] }}</p>
  </div>

  <a href="{{ $tool['path'] }}" class="btn btn-secondary btn-sm" style="width: 100%; margin-top: 16px;">
    Open Tool ?
  </a>
</div>
