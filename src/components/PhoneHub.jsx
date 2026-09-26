import React, { useState } from 'react';
import '../styles/phonehub.css';

export default function PhoneHub() {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePhoneHub = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`phonehub ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {/* PhoneHub Toggle Button */}
      <button 
        className="phonehub-toggle" 
        onClick={togglePhoneHub}
        aria-label="Toggle PhoneHub"
      >
        <img src="/assets/logos/phoneo-logo.png" alt="Phoneo Hub" className="phonehub-logo" />
        <span className="phonehub-icon">📞</span>
      </button>

      {/* PhoneHub Content */}
      {isExpanded && (
        <div className="phonehub-content">
          <div className="phonehub-header">
            <h3>
              <img src="/assets/logos/phoneo-logo.png" alt="Phoneo" className="phonehub-header-logo" />
              Phoneo Hub
            </h3>
            <button 
              className="phonehub-close" 
              onClick={togglePhoneHub}
              aria-label="Close PhoneHub"
            >
              ✕
            </button>
          </div>

          <div className="phonehub-body">
            {/* Contact Details */}
            <div className="phonehub-contact">
              <h4>Get in Touch</h4>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+917888288895">+91 7888288895</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:support@phoneo.in">support@phoneo.in</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p>Bhilai, Chhattisgarh, India</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="phonehub-links">
              <h4>Quick Links</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Watch Demo</a>
              <a href="#support">Support</a>
            </div>

            {/* CTA Button */}
            <button className="phonehub-cta">Start Free Trial</button>
          </div>
        </div>
      )}
    </div>
  );
}
