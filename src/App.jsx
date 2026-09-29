import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ToolsPage from './pages/ToolsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Tool Pages
import JsonFormatter from './pages/tools/JsonFormatter';
import JsonValidator from './pages/tools/JsonValidator';
import Base64Tool from './pages/tools/Base64Tool';
import UrlEncoder from './pages/tools/UrlEncoder';
import UrlDecoder from './pages/tools/UrlDecoder';
import UuidGenerator from './pages/tools/UuidGenerator';
import TimestampConverter from './pages/tools/TimestampConverter';
import TextCaseConverter from './pages/tools/TextCaseConverter';
import ColorConverter from './pages/tools/ColorConverter';
import PasswordGenerator from './pages/tools/PasswordGenerator';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Individual Tool Routes */}
            <Route path="/tools/json-formatter" element={<JsonFormatter />} />
            <Route path="/tools/json-validator" element={<JsonValidator />} />
            <Route path="/tools/base64" element={<Base64Tool />} />
            <Route path="/tools/url-encoder" element={<UrlEncoder />} />
            <Route path="/tools/url-decoder" element={<UrlDecoder />} />
            <Route path="/tools/uuid-generator" element={<UuidGenerator />} />
            <Route path="/tools/timestamp" element={<TimestampConverter />} />
            <Route path="/tools/text-case" element={<TextCaseConverter />} />
            <Route path="/tools/color-converter" element={<ColorConverter />} />
            <Route path="/tools/password-generator" element={<PasswordGenerator />} />

            {/* Fallback Catch-all */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
