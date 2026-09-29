<header class="navbar-sticky">
  <div class="container navbar-container">
    <a href="{{ route('home') }}" class="logo-brand">
      <div class="logo-icon">&lt;/&gt;</div>
      <span>DevTools Hub</span>
    </a>

    <!-- Desktop Navigation -->
    <nav>
      <ul class="nav-links">
        <li>
          <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">
            Home
          </a>
        </li>
        <li>
          <a href="{{ route('tools.index') }}" class="nav-link {{ request()->routeIs('tools.*') ? 'active' : '' }}">
            Tools
          </a>
        </li>
        <li>
          <a href="{{ route('about') }}" class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}">
            About
          </a>
        </li>
        <li>
          <a href="{{ route('contact') }}" class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}">
            Contact
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Toggle -->
    <button class="mobile-toggle" id="mobileMenuBtn" aria-label="Toggle navigation menu">
      ?
    </button>
  </div>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" id="mobileDrawer">
    <ul class="mobile-nav-links">
      <li><a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Home</a></li>
      <li><a href="{{ route('tools.index') }}" class="nav-link {{ request()->routeIs('tools.*') ? 'active' : '' }}">All Tools</a></li>
      <li><a href="{{ route('about') }}" class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}">About Us</a></li>
      <li><a href="{{ route('contact') }}" class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}">Contact</a></li>
    </ul>
  </div>
</header>
