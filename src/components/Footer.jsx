import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Phoneo</h4>
          <p>Mobile shop management software for India</p>
          <div className="social-links">
            <a href="https://facebook.com/phoneo">Facebook</a>
            <a href="https://twitter.com/phoneo">Twitter</a>
            <a href="https://youtube.com/phoneo">YouTube</a>
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
          <p>📧 support@phoneo.in</p>
          <p>📍 Bhilai, Chhattisgarh, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Phoneo. All rights reserved.</p>
      </div>
    </footer>
  );
}