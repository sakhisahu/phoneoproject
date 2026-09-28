import React from "react";
import "../styles/components.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ================= FOOTER MAIN ================= */}
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section footer-brand-section">
          <div className="footer-brand">

            <svg
              className="footer-logo"
              width="42"
              height="42"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="phonehub-footer-gradient"
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#10b981" />
                  <stop offset="1" stopColor="#0891b2" />
                </linearGradient>
              </defs>

              <rect
                width="40"
                height="40"
                rx="11"
                fill="url(#phonehub-footer-gradient)"
              />

              <rect
                x="14"
                y="9"
                width="12"
                height="22"
                rx="3"
                fill="#ffffff"
              />

              <rect
                x="16"
                y="12"
                width="8"
                height="13"
                rx="1"
                fill="#0891b2"
                opacity="0.25"
              />

              <circle
                cx="20"
                cy="28"
                r="1.4"
                fill="#0891b2"
              />
            </svg>

            <div className="footer-brand-text">
              <h4>PhoneHub</h4>
              <span>Smart shop management</span>
            </div>

          </div>

          <p className="footer-description">
            Powerful mobile shop management software built to simplify
            billing, inventory, repairs and everyday business operations.
          </p>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://facebook.com/phonehub"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <span>f</span>
              Facebook
            </a>

            <a
              href="https://twitter.com/phonehub"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <span>𝕏</span>
              Twitter
            </a>

            <a
              href="https://youtube.com/phonehub"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <span>▶</span>
              YouTube
            </a>

          </div>
        </div>

        {/* Product */}
        <div className="footer-section">
          <h4>Product</h4>

          <ul>
            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#pricing">Pricing</a>
            </li>

            <li>
              <a href="#compare">Compare</a>
            </li>

            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#careers">Careers</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>

          <ul>
            <li>
              <a href="#privacy">Privacy</a>
            </li>

            <li>
              <a href="#terms">Terms</a>
            </li>

            <li>
              <a href="#security">Security</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section footer-contact">
          <h4>Get in touch</h4>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <small>Call us</small>
              <a href="tel:+917888288895">
                +91 7888288895
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <small>Email</small>
              <a href="mailto:support@phonehub.in">
                support@phonehub.in
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <div>
              <small>Location</small>
              <p>Bhilai, Chhattisgarh, India</p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= FOOTER CTA ================= */}
      <div className="footer-cta">

        <div className="footer-cta-content">
          <div>
            <span className="footer-cta-label">
              READY TO SIMPLIFY YOUR SHOP?
            </span>

            <h3>
              Run your mobile business
              <br />
              <span>smarter with PhoneHub.</span>
            </h3>
          </div>

          <a href="#pricing" className="footer-cta-button">
            Get Started
            <span>↗</span>
          </a>
        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">

        <p>
          © 2026 PhoneHub. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#security">Security</a>
        </div>

        <p className="footer-made">
          Built for modern mobile businesses.
        </p>

      </div>

    </footer>
  );
}