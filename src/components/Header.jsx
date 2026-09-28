import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components.css";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* =========================
            LOGO
        ========================= */}
        <Link
          to="/"
          className="site-logo"
          onClick={closeMenu}
          aria-label="PhoneHub Home"
        >
          <span className="site-logo-mark">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="8"
                y="4"
                width="32"
                height="40"
                rx="7"
                fill="currentColor"
              />

              <rect
                x="13"
                y="9"
                width="22"
                height="27"
                rx="3"
                fill="white"
              />

              <rect
                x="16"
                y="12"
                width="16"
                height="20"
                rx="2"
                fill="#E7A36E"
              />

              <circle
                cx="24"
                cy="39"
                r="2"
                fill="white"
              />

              <path
                d="M24 16L25.8 20.1L30.2 20.6L26.9 23.5L27.8 27.8L24 25.6L20.2 27.8L21.1 23.5L17.8 20.6L22.2 20.1L24 16Z"
                fill="#171513"
              />
            </svg>
          </span>

          <span className="site-logo-text">
            <strong>PhoneHub</strong>
            <small>by Phoneo</small>
          </span>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <nav
          className={`main-navigation ${
            menuOpen ? "navigation-open" : ""
          }`}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/blogs"
            className={`nav-link ${isActive("/blogs") ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span>Blog</span>
          </Link>

          <Link
            to="/compare"
            className={`nav-link ${
              isActive("/compare") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span>Compare</span>
          </Link>

          <Link
            to="/pricing"
            className={`nav-link ${
              isActive("/pricing") ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            <span>Pricing</span>
          </Link>
        </nav>

        {/* =========================
            HEADER ACTIONS
        ========================= */}
        <div className="header-actions">
          <Link
            to="/blogs"
            className="header-demo-btn"
            onClick={closeMenu}
          >
            Ask for Demo
          </Link>

          <Link
            to="/pricing"
            className="header-start-btn"
            onClick={closeMenu}
          >
            Start Free Trial
            <span className="header-btn-arrow">↗</span>
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "menu-open" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}