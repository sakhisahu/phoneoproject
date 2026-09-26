import React from 'react';
import '../styles/compare.css';

export function VerdictSection({ verdict, productA, productB }) {
  return (
    <div className="verdict-section">
      <div className="verdict-container">
        <div className="verdict-header">
          <h2>Final Verdict</h2>
          <p className="verdict-winner">
            {verdict.winner} is the clear winner
          </p>
        </div>

        <p className="verdict-reason">{verdict.reason}</p>

        <div className="verdict-comparison">
          <div className="verdict-column">
            <h3>{productA} Strengths</h3>
            <ul className="verdict-list">
              {verdict.phoneoStrengths?.map((strength, idx) => (
                <li key={idx}>✅ {strength}</li>
              ))}
            </ul>
          </div>

          <div className="verdict-divider"></div>

          <div className="verdict-column">
            <h3>{productB} Strengths</h3>
            <ul className="verdict-list">
              {verdict[productB.toLowerCase().replace(/\s+/g, '') + 'Strengths']?.map((strength, idx) => (
                <li key={idx}>✅ {strength}</li>
              )) || 
              verdict.vyaparStrengths?.map((strength, idx) => (
                <li key={idx}>✅ {strength}</li>
              )) ||
              verdict.busyStrengths?.map((strength, idx) => (
                <li key={idx}>✅ {strength}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}