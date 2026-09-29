<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>&lt;/&gt; DevTools Hub</h3>
        <p>
          Fast, simple, and privacy-friendly online developer tools. All processing happens 100% locally in your browser � no server uploads.
        </p>
      </div>

      <div class="footer-col">
        <h4>Popular Tools</h4>
        <ul class="footer-links">
          <li><a href="{{ route('tools.json-formatter') }}">JSON Formatter</a></li>
          <li><a href="{{ route('tools.json-validator') }}">JSON Validator</a></li>
          <li><a href="{{ route('tools.base64') }}">Base64 Encoder</a></li>
          <li><a href="{{ route('tools.uuid-generator') }}">UUID Generator</a></li>
          <li><a href="{{ route('tools.password-generator') }}">Password Generator</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Navigation</h4>
        <ul class="footer-links">
          <li><a href="{{ route('home') }}">Home</a></li>
          <li><a href="{{ route('tools.index') }}">All Tools</a></li>
          <li><a href="{{ route('about') }}">About Us</a></li>
          <li><a href="{{ route('contact') }}">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Privacy & Legal</h4>
        <ul class="footer-links">
          <li><a href="{{ route('privacy') }}">Privacy Policy</a></li>
          <li><a href="{{ route('terms') }}">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>� 2026 DevTools Hub. Built with ?? by <span style="color: var(--cyan); font-weight: 700;">Sushil K. Kawde</span>.</div>
      <div>?? 100% Client-Side & Privacy First</div>
    </div>
  </div>
</footer>
