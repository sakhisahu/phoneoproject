import React, { useState } from 'react';
import { pricingPlans } from '../data/pricingData';
import '../styles/global.css';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getPrice = (plan) => {
    if (billingCycle === 'monthly') return plan.price;
    if (billingCycle === 'quarterly') return Math.round(plan.quarterly / 3);
    if (billingCycle === 'yearly') return Math.round(plan.yearly / 12);
    return plan.price;
  };

  const getTotalPrice = (plan) => {
    if (billingCycle === 'monthly') return plan.price;
    if (billingCycle === 'quarterly') return plan.quarterly;
    if (billingCycle === 'yearly') return plan.yearly;
    return plan.price;
  };

  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that fits your shop. Scale as you grow.</p>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="billing-toggle">
        <button
          className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`toggle-btn ${billingCycle === 'quarterly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('quarterly')}
        >
          Quarterly <span className="save-badge">Save 5%</span>
        </button>
        <button
          className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly <span className="save-badge">Save 15%</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards-container">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`pricing-card-detailed ${plan.highlighted ? 'highlighted' : ''}`}>
            {plan.highlighted && <div className="recommended-badge">Recommended</div>}
            
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-subtitle">{plan.bestFor}</p>

            <div className="plan-price">
              {plan.price ? (
                <>
                  <span className="price-amount">₹{getPrice(plan)}</span>
                  <span className="price-period">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                  {billingCycle !== 'monthly' && (
                    <span className="price-total">₹{getTotalPrice(plan)} total</span>
                  )}
                </>
              ) : (
                <span className="price-amount">Custom</span>
              )}
            </div>

            <p className="plan-description">{plan.description}</p>

            <button className="btn btn-primary btn-full">{plan.cta}</button>

            <div className="plan-features-list">
              {plan.features.map((feature) => (
                <div key={feature.name} className="feature-item">
                  <span className="feature-icon">
                    {feature.included ? '✅' : '❌'}
                  </span>
                  <span className={`feature-text ${!feature.included ? 'disabled' : ''}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <section className="pricing-faq">
        <h2>Pricing FAQs</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h4>Can I change my plan later?</h4>
            <p>Yes! You can upgrade or downgrade anytime. Changes take effect immediately.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer discounts for annual billing?</h4>
            <p>Yes! Yearly billing saves you 15% compared to monthly pricing.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a setup fee?</h4>
            <p>No hidden fees! Just the monthly subscription price.</p>
          </div>
          <div className="faq-item">
            <h4>What if I'm not satisfied?</h4>
            <p>We offer a 30-day refund policy. If you're not happy, we'll give your money back.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <h2>Start Your Free Trial Today</h2>
        <p>Get 7 days free. No credit card required. Full access to all features.</p>
        <button className="btn btn-primary btn-large">Start Free Trial</button>
      </section>
    </div>
  );
}