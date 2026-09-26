import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { comparisons } from '../data/compareData';
import '../styles/compare.css';

export default function ComparePage() {
  const [selectedComparison, setSelectedComparison] = useState(comparisons[0]);

  return (
    <div className="compare-page">
      <div className="compare-hero">
        <h1>Compare Phoneo With Other Software</h1>
        <p>See why mobile shop owners choose Phoneo over alternatives</p>
      </div>

      <div className="compare-container">
        {/* Comparison Selector */}
        <div className="comparison-selector">
          <h2>Choose Comparison</h2>
          <div className="comparison-options">
            {comparisons.map((comp) => (
              <button
                key={comp.id}
                className={`comparison-option ${selectedComparison.id === comp.id ? 'active' : ''}`}
                onClick={() => setSelectedComparison(comp)}
              >
                <span className="product-a">Phoneo</span>
                <span className="vs">vs</span>
                <span className="product-b">{comp.productB}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="comparison-detail">
          <div className="comparison-intro">
            <h2>{selectedComparison.title}</h2>
            <p>{selectedComparison.introduction}</p>
          </div>

          {/* Comparison Table */}
          <div className="comparison-tables">
            {selectedComparison.categories.map((category) => (
              <div key={category.id} className="comparison-section">
                <div className="section-header">
                  <span className="icon">{category.icon}</span>
                  <h3>{category.name}</h3>
                </div>

                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Phoneo</th>
                      <th>{selectedComparison.productB}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((feature) => (
                      <tr key={feature.name}>
                        <td className="feature-name">{feature.name}</td>
                        <td className={`feature-value ${feature.advantage === 'phoneo' ? 'winner' : ''}`}>
                          {feature.phoneo}
                        </td>
                        <td className="feature-value">
                          {feature[selectedComparison.productB.toLowerCase().replace(/\s+/g, '')] || 
                           feature.vyapar || 
                           feature.busy || 
                           feature.tally}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Verdict Section */}
          <div className="verdict-container">
            <div className="verdict-content">
              <h2>Our Verdict</h2>
              <p className="verdict-text">{selectedComparison.verdict.reason}</p>

              <div className="verdict-columns">
                <div className="verdict-col phoneo-col">
                  <h4>Phoneo Strengths</h4>
                  <ul>
                    {selectedComparison.verdict.phoneoStrengths?.map((strength, idx) => (
                      <li key={idx}>✅ {strength}</li>
                    ))}
                  </ul>
                </div>

                <div className="verdict-col competitor-col">
                  <h4>{selectedComparison.productB} Strengths</h4>
                  <ul>
                    {selectedComparison.advantages?.[selectedComparison.productB]?.map((advantage, idx) => (
                      <li key={idx}>✅ {advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="comparison-cta">
            <h3>Ready to Switch to Phoneo?</h3>
            <p>Experience the difference. Start your free trial today.</p>
            <button className="btn btn-primary btn-large">Start Free Trial</button>
            <p className="cta-note">No credit card required. 7 days free. 100% refund if not satisfied.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Why should I choose Phoneo over Vyapar?</h4>
            <p>Phoneo is specifically built for mobile shops with IMEI tracking, second-hand phone support, and WhatsApp integration that Vyapar lacks.</p>
          </div>
          <div className="faq-item">
            <h4>Is Phoneo better than Tally?</h4>
            <p>For mobile shops, yes. Phoneo is designed for your needs. Tally is better for large enterprises needing complex accounting.</p>
          </div>
          <div className="faq-item">
            <h4>Can I switch from other software to Phoneo?</h4>
            <p>Yes! We help you migrate your data. Contact our support team for assistance.</p>
          </div>
          <div className="faq-item">
            <h4>What if I'm not satisfied with Phoneo?</h4>
            <p>We offer a 30-day refund policy. No questions asked. Your money back.</p>
          </div>
        </div>
      </section>
    </div>
  );
}