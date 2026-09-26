import React from 'react';
import '../styles/compare.css';

export function ComparisonTable({ comparison }) {
  return (
    <div className="comparison-table-container">
      {comparison.categories.map((category) => (
        <div key={category.id} className="comparison-category">
          <div className="category-header">
            <span className="category-icon">{category.icon}</span>
            <h3>{category.name}</h3>
          </div>

          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>{comparison.productA}</th>
                <th>{comparison.productB}</th>
              </tr>
            </thead>
            <tbody>
              {category.features.map((feature) => (
                <tr key={feature.name} className={`advantage-${feature.advantage}`}>
                  <td className="feature-name">{feature.name}</td>
                  <td className={`feature-value ${feature.advantage === 'phoneo' ? 'winner' : ''}`}>
                    {feature.phoneo}
                  </td>
                  <td className={`feature-value ${feature.advantage === comparison.productB.toLowerCase() ? 'winner' : ''}`}>
                    {comparison.productB === 'Vyapar' && feature.vyapar}
                    {comparison.productB === 'BUSY' && feature.busy}
                    {comparison.productB === 'Tally' && feature.tally}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}