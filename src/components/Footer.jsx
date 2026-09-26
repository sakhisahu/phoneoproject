import React from 'react';
import '../styles/components.css';

function PhoneHubLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="url(#phg-footer)" />
      <rect x="12" y="7" width="12" height="22" rx="2.5" fill="#ffffff" />
      <rect x="14" y="10" width="8" height="12" rx="1" fill="url(#phg-footer)" opacity="0.22" />
      <circle cx="18" cy="25.5" r="1.3" fill="url(#phg-footer)" />
      <defs>
        <linearGradient id="phg-footer" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-brand">
            <PhoneHubLogo />
            <h4>PhoneHub</h4>
          </div>
          <p>Mobile shop management software for India</p>
          <div className="social-links">
            <a href="https://facebook.com/phonehub">Facebook</a>
            <a href="https://twitter.com/phonehub">Twitter</a>
            <a href="https://youtube.com/phonehub">YouTube</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#compare">Compare</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#security">Security</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +91 7888288895</p>
          <p>📧 support@phonehub.in</p>
          <p>📍 Bhilai, Chhattisgarh, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 PhoneHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
