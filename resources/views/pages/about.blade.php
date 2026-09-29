@extends('layouts.app')

@section('title', 'About Us | DevTools Hub')
@section('meta_description', 'Learn about DevTools Hub � a clean, free, and privacy-first collection of online tools built for modern software engineers.')

@section('content')
<div style="background: #FFFFFF; border-bottom: 1px solid var(--border-color); padding: 40px 0;">
  <div class="container container-narrow">
    <h1 style="font-size: 2.2rem; margin-bottom: 12px;">About DevTools Hub</h1>
    <p style="color: var(--text-muted); font-size: 1.05rem;">
      Fast, simple, and privacy-friendly online developer tools.
    </p>
  </div>
</div>

<div class="container container-narrow" style="padding-top: 40px;">
  <div style="background: #FFFFFF; padding: 32px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
    <h2 style="margin-bottom: 16px;">Our Mission</h2>
    <p style="margin-bottom: 20px; line-height: 1.7; color: #334155;">
      DevTools Hub was created to provide developers, engineers, and designers with lightning-fast, zero-overhead web utilities. We believe developer tools should be simple, ad-free, and respectful of user privacy.
    </p>

    <h2 style="margin-bottom: 16px; margin-top: 32px;">Why DevTools Hub?</h2>
    <ul style="padding-left: 20px; line-height: 1.8; color: #334155; margin-bottom: 24px;">
      <li><strong>100% Client-Side:</strong> All data transformations (JSON parsing, Base64 encoding, password generation) run strictly inside your browser instance.</li>
      <li><strong>Zero Data Uploads:</strong> No sensitive code snippets, API keys, or tokens ever leave your local environment.</li>
      <li><strong>Modern & Fast:</strong> Built using PHP Laravel and Blade for instant page loads and responsive desktop and mobile experiences.</li>
      <li><strong>Completely Free:</strong> All tools are 100% free to use with no accounts or subscriptions required.</li>
    </ul>

    <h2 style="margin-bottom: 16px; margin-top: 32px;">Technology Stack</h2>
    <p style="line-height: 1.7; color: #334155; margin-bottom: 24px;">
      DevTools Hub is powered by modern web standards including PHP Laravel, Blade Templates, and standard Web APIs (Crypto API, Clipboard API, URL API).
    </p>

    <div style="background: var(--primary-light); padding: 24px; border-radius: var(--radius-md); border: 1px solid #C7D2FE; margin-top: 32px;">
      <h3 style="color: var(--primary); margin-bottom: 8px; font-size: 1.15rem; font-weight: 700;">Developed &amp; Maintained By</h3>
      <p style="font-weight: 800; font-size: 1.3rem; color: var(--dark-navy); margin-bottom: 8px;">
        Sushil K. Kawde
      </p>
      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">
        Crafted with passion for software engineers and web developers worldwide.
      </p>
      <p style="font-size: 1rem; color: var(--primary); font-weight: 700;">
        &#128222; +91 9975829531
      </p>
    </div>
  </div>
</div>
@endsection
