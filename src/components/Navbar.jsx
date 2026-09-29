import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="navbar-sticky">
      <div className="container navbar-container">
        <Link to="/" className="logo-brand" onClick={closeMenu}>
          <div className="logo-icon">&lt;/&gt;</div>
          <span>DevTools Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tools" className={`nav-link ${isActive('/tools') ? 'active' : ''}`}>
                Tools
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/tools" className={`nav-link ${isActive('/tools') ? 'active' : ''}`} onClick={closeMenu}>
              All Tools
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
