import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components.css";

export default function Footer() {
  const location = useLocation();

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER MAIN
      ====================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* ================= BRAND ================= */}

          <div className="footer-brand-section">

            <Link
              to="/"
              className="footer-brand"
              aria-label="PhoneHub Home"
            >
              <span className="footer-brand-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="4"
                    width="32"
                    height="40"
                    rx="8"
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

              <span className="footer-brand-text">
                <strong>PhoneHub</strong>
                <small>by Phoneo</small>
              </span>
            </Link>

            <h3 className="footer-smart-title">
              Smart shop management
            </h3>

            <p className="footer-description">
              Powerful mobile shop management software built
              to simplify billing, inventory, repairs and
              everyday business operations.
            </p>

            {/* SOCIAL LINKS */}

            <div className="footer-social-links">

              <a
                href="https://facebook.com/phonehub"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://twitter.com/phonehub"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                𝕏
              </a>

              <a
                href="https://youtube.com/phonehub"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                ▶
              </a>

            </div>

          </div>

          {/* ================= PRODUCT ================= */}

          <div className="footer-column">

            <h3>Product</h3>

            <button
              type="button"
              onClick={() => goToSection("features")}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => goToSection("pricing")}
            >
              Pricing
            </button>

            <Link to="/compare">
              Compare
            </Link>

            <button
              type="button"
              onClick={() => goToSection("faq")}
            >
              FAQ
            </button>

          </div>

          {/* ================= COMPANY ================= */}

          <div className="footer-column">

            <h3>Company</h3>

            <button
              type="button"
              onClick={() => goToSection("about")}
            >
              About
            </button>

            <Link to="/blogs">
              Blog
            </Link>

            <button
              type="button"
              onClick={() => goToSection("contact")}
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => goToSection("careers")}
            >
              Careers
            </button>

          </div>

          {/* ================= LEGAL ================= */}

          <div className="footer-column">

            <h3>Legal</h3>

            <button
              type="button"
              onClick={() => goToSection("privacy")}
            >
              Privacy
            </button>

            <button
              type="button"
              onClick={() => goToSection("terms")}
            >
              Terms
            </button>

            <button
              type="button"
              onClick={() => goToSection("security")}
            >
              Security
            </button>

          </div>

          {/* ================= CONTACT ================= */}

          <div className="footer-contact">

            <h3>Get in touch</h3>

            {/* PHONE */}

            <a
              href="tel:+917888288895"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                ☎
              </span>

              <span className="footer-contact-content">
                <small>Call us</small>
                <strong>
                  +91 7888288895
                </strong>
              </span>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:support@phonehub.in"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                ✉
              </span>

              <span className="footer-contact-content">
                <small>Email</small>
                <strong>
                  support@phonehub.in
                </strong>
              </span>
            </a>

            {/* LOCATION */}

            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                ⌖
              </span>

              <span className="footer-contact-content">
                <small>Location</small>
                <strong>
                  Bhilai, Chhattisgarh, India
                </strong>
              </span>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="footer-cta-section">

        <div className="footer-cta-container">

          <div className="footer-cta-text">

            <span className="footer-cta-label">
              READY TO SIMPLIFY YOUR SHOP?
            </span>

            <h2>
              Run your mobile business
              <br />
              <span>smarter with PhoneHub.</span>
            </h2>

          </div>

          <button
            type="button"
            className="footer-get-started"
            onClick={() => goToSection("pricing")}
          >
            Get Started
            <span>↗</span>
          </button>

        </div>

      </section>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 PhoneHub. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <button
              type="button"
              onClick={() => goToSection("privacy")}
            >
              Privacy
            </button>

            <button
              type="button"
              onClick={() => goToSection("terms")}
            >
              Terms
            </button>

            <button
              type="button"
              onClick={() => goToSection("security")}
            >
              Security
            </button>

            <Link to="/compare">
              Compare
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}