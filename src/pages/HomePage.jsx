
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { getLatestBlogs, getFeaturedBlogs } from '../data/blogData';
import { pricingPlans } from '../data/pricingData';
import '../styles/global.css';

export default function HomePage() {
  const featuredBlogs = getFeaturedBlogs();
  const latestBlogs = getLatestBlogs(3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Mobile Shop Management Software Built For India</h1>
          <p>IMEI Tracking, GST Billing, Staff Management, Customer Credit — All In One Dashboard</p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-large">Start 7-Day Free Trial</button>
            <button className="btn btn-secondary btn-large">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Mobile Shops Love Phoneo</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>IMEI-Wise Inventory</h3>
            <p>Track every phone by IMEI. No more lost devices.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💵</span>
            <h3>GST Billing</h3>
            <p>Auto HSN codes. GST-compliant invoices in seconds.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Staff Management</h3>
            <p>Commission calculations. No more salary disputes.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h3>Customer Credit</h3>
            <p>Track udhari easily. Automated payment reminders.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h3>WhatsApp AI Bot</h3>
            <p>Answer customer queries automatically 24/7.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Analytics</h3>
            <p>Real-time sales reports and insights.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <p>Start at ₹99/month. No hidden fees.</p>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price ? `₹${plan.price}` : 'Custom'}
                {plan.price && <span>/month</span>}
              </div>
              <p className="plan-description">{plan.bestFor}</p>
              <button className="btn btn-primary">{plan.cta}</button>
              <ul className="plan-features">
                {plan.features.slice(0, 5).map((feature) => (
                  <li key={feature.name}>
                    {feature.included ? '✅' : '❌'} {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link to="/pricing" className="view-all-plans">
          View All Plans & Details →
        </Link>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest From Phoneo Blog</h2>
        <div className="blog-grid">
          {latestBlogs.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        <Link to="/blog" className="view-all-blogs">
          View All Articles →
        </Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Mobile Shop?</h2>
        <p>4,300+ shop owners already use Phoneo. Join them today.</p>
        <button className="btn btn-primary btn-large">Start Your Free Trial</button>
        <p className="cta-note">No credit card required. 7 days free. 30-day refund guarantee.</p>
      </section>
    </div>
  );
}