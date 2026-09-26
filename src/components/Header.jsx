import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

function PhoneHubLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="url(#phg-header)" />
      <rect x="12" y="7" width="12" height="22" rx="2.5" fill="#ffffff" />
      <rect x="14" y="10" width="8" height="12" rx="1" fill="url(#phg-header)" opacity="0.22" />
      <circle cx="18" cy="25.5" r="1.3" fill="url(#phg-header)" />
      <defs>
        <linearGradient id="phg-header" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <PhoneHubLogo />
          <span>PhoneHub</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>

        <div className="header-cta">
          <button className="btn btn-secondary">Ask for Demo</button>
          <button className="btn btn-primary">Start Free Trial</button>
        </div>
      </div>
    </header>
  );
}
