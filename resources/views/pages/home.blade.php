@extends('layouts.app')

@section('title', 'DevTools Hub � Free Online Developer Tools')
@section('meta_description', 'Fast, simple, and privacy-friendly online developer tools. Format JSON, generate UUIDs, encode Base64, convert text cases, and more.')

@section('content')
<section class="hero">
  <div class="container">
    <span class="badge badge-cyan" style="margin-bottom: 16px;">
      ? 100% Free & Client-Side
    </span>
    <h1 class="hero-title">
      DevTools Hub � <span class="gradient-text">Free Online Developer Tools</span>
    </h1>
    <p class="hero-subtitle">
      Fast, simple and privacy-friendly tools for developers. Format JSON, generate UUIDs, convert colors, and encode data � 100% locally in your browser.
    </p>

    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
      <a href="{{ route('tools.index') }}" class="btn btn-primary">
        Explore All Tools ?
      </a>
      <a href="{{ route('tools.json-formatter') }}" class="btn btn-secondary">
        Try JSON Formatter
      </a>
    </div>
  </div>
</section>

<section style="padding: 60px 0;">
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
      <div>
        <h2>Popular Developer Tools</h2>
        <p style="color: var(--text-muted);">Hand-picked utilities developers use every day.</p>
      </div>
      <a href="{{ route('tools.index') }}" class="btn btn-secondary btn-sm">
        View All 10 Tools ?
      </a>
    </div>

    <div class="tools-grid">
      @foreach($popularTools as $tool)
        <x-tool-card :tool="$tool" />
      @endforeach
    </div>
  </div>
</section>

<section style="background: #FFFFFF; padding: 60px 0; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
  <div class="container">
    <div style="text-align: center; max-width: 700px; margin: 0 auto 40px auto;">
      <h2>Built with Privacy First</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-top: 8px;">
        Your data stays in your browser. We never log, store, or transmit your code, passwords, or sensitive payloads.
      </p>
    </div>

    <div class="tools-grid">
      <div style="background: var(--bg-main); padding: 24px; border-radius: var(--radius-md); text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 12px;">??</div>
        <h3 style="margin-bottom: 8px;">Zero Server Requests</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          All processing runs entirely on client-side JavaScript.
        </p>
      </div>

      <div style="background: var(--bg-main); padding: 24px; border-radius: var(--radius-md); text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 12px;">?</div>
        <h3 style="margin-bottom: 8px;">Instant Execution</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          No API latency or waiting for remote server responses.
        </p>
      </div>

      <div style="background: var(--bg-main); padding: 24px; border-radius: var(--radius-md); text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 12px;">??</div>
        <h3 style="margin-bottom: 8px;">SEO & Fast Load</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          Optimized bundle size for instant page loads anywhere.
        </p>
      </div>
    </div>
  </div>
</section>
@endsection
