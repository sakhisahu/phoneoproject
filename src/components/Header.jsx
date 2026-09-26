import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/assets/logos/phoneo-logo.png" alt="Phoneo" />
          <span>Phoneo</span>
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