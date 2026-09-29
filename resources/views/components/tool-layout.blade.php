@props(['title', 'category', 'description', 'privacyNotice' => 'All processing happens 100% locally in your browser. No data is ever sent to a server.'])

<div class="tool-header-section">
  <div class="container">
    <div style="margin-bottom: 12px;">
      <a href="{{ route('tools.index') }}" style="font-size: 0.875rem; color: var(--text-muted);">
        ? Back to All Tools
      </a>
    </div>

    <div class="tool-title-row">
      <h1 class="tool-page-title">{{ $title }}</h1>
      @if($category)
        <span class="badge badge-primary">{{ $category }}</span>
      @endif
    </div>

    <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 750px;">
      {{ $description }}
    </p>

    <div class="privacy-banner">
      <span>???</span>
      <span>{{ $privacyNotice }}</span>
    </div>
  </div>
</div>

<div class="container">
  {{ $slot }}
</div>
