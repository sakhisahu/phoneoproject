import React from "react";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import { getLatestBlogs } from "../data/blogData";
import { pricingPlans } from "../data/pricingData";

import "../styles/global.css";

export default function HomePage() {
  const latestBlogs = getLatestBlogs(3);

  const features = [
    {
      icon: "📱",
      number: "01",
      title: "IMEI-Wise Inventory",
      description:
        "Track every smartphone by IMEI number and keep your complete inventory organized in one place.",
    },
    {
      icon: "🧾",
      number: "02",
      title: "GST Billing",
      description:
        "Create professional GST-compliant invoices with HSN codes and billing details in seconds.",
    },
    {
      icon: "👥",
      number: "03",
      title: "Staff Management",
      description:
        "Manage your team, sales performance and commissions without complicated spreadsheets.",
    },
    {
      icon: "💳",
      number: "04",
      title: "Customer Credit",
      description:
        "Keep track of customer udhari, pending payments and payment reminders effortlessly.",
    },
    {
      icon: "🤖",
      number: "05",
      title: "WhatsApp AI",
      description:
        "Automate customer conversations and answer common questions with an intelligent WhatsApp assistant.",
    },
    {
      icon: "📊",
      number: "06",
      title: "Business Analytics",
      description:
        "Understand sales, products, profits and business performance through simple reports.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Add your shop",
      description:
        "Set up your mobile shop and add your products, staff and customers.",
    },
    {
      number: "02",
      title: "Manage everything",
      description:
        "Handle billing, inventory, customers, repairs and daily operations from one dashboard.",
    },
    {
      number: "03",
      title: "Grow your business",
      description:
        "Use reports and insights to understand your business and make smarter decisions.",
    },
  ];

  return (
    <div className="home-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="home-hero">
        <div className="home-hero-glow home-hero-glow-one"></div>
        <div className="home-hero-glow home-hero-glow-two"></div>

        <div className="home-container home-hero-grid">
          <div className="home-hero-content">
            <div className="home-eyebrow">
              <span className="home-eyebrow-dot"></span>
              Built for modern mobile businesses
            </div>

            <h1>
              Run your mobile shop
              <span> smarter with Phoneo.</span>
            </h1>

            <p className="home-hero-description">
              Everything you need to manage inventory, billing, customers,
              staff and business insights — all from one powerful dashboard.
            </p>

            <div className="home-hero-actions">
              <Link to="/compare" className="home-btn home-btn-primary">
                Start 7-Day Free Trial
                <span>↗</span>
              </Link>

              <a
                href="#how-it-works"
                className="home-btn home-btn-secondary"
              >
                Explore Phoneo
                <span>↓</span>
              </a>
            </div>

            <div className="home-trust-row">
              <div className="home-trust-avatars">
                <span>R</span>
                <span>A</span>
                <span>S</span>
                <span>+</span>
              </div>

              <div>
                <strong>4,300+ shop owners</strong>
                <p>already managing their business smarter</p>
              </div>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="home-dashboard-wrap">
            <div className="home-dashboard-card">
              <div className="home-dashboard-topbar">
                <div className="home-dashboard-brand">
                  <span className="home-brand-mark">P</span>
                  <strong>Phoneo</strong>
                </div>

                <div className="home-dashboard-actions">
                  <span></span>
                  <span></span>
                  <span className="home-dashboard-avatar">S</span>
                </div>
              </div>

              <div className="home-dashboard-body">
                <div className="home-dashboard-sidebar">
                  <span className="active">⌂</span>
                  <span>▣</span>
                  <span>◫</span>
                  <span>♧</span>
                  <span>◉</span>
                </div>

                <div className="home-dashboard-main">
                  <div className="home-dashboard-heading">
                    <div>
                      <small>Good morning, Sakhi</small>
                      <h3>Business overview</h3>
                    </div>

                    <span className="dashboard-date">Today ▾</span>
                  </div>

                  <div className="home-dashboard-stats">
                    <div className="dashboard-stat">
                      <span>Total Sales</span>
                      <strong>₹84,620</strong>
                      <small className="positive">+18.4%</small>
                    </div>

                    <div className="dashboard-stat">
                      <span>Orders</span>
                      <strong>126</strong>
                      <small className="positive">+12.8%</small>
                    </div>

                    <div className="dashboard-stat">
                      <span>Inventory</span>
                      <strong>438</strong>
                      <small>Products</small>
                    </div>
                  </div>

                  <div className="dashboard-chart-card">
                    <div className="dashboard-chart-heading">
                      <div>
                        <span>Sales overview</span>
                        <strong>₹3,48,240</strong>
                      </div>

                      <small>Last 7 days</small>
                    </div>

                    <div className="dashboard-chart">
                      <div className="chart-line chart-line-one"></div>
                      <div className="chart-line chart-line-two"></div>
                      <div className="chart-line chart-line-three"></div>

                      <div className="chart-bars">
                        <span style={{ height: "35%" }}></span>
                        <span style={{ height: "48%" }}></span>
                        <span style={{ height: "42%" }}></span>
                        <span style={{ height: "64%" }}></span>
                        <span style={{ height: "58%" }}></span>
                        <span style={{ height: "78%" }}></span>
                        <span style={{ height: "92%" }}></span>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-bottom-grid">
                    <div className="dashboard-mini-card">
                      <div className="mini-card-icon">📱</div>
                      <div>
                        <small>Top selling</small>
                        <strong>Smartphones</strong>
                      </div>
                      <b>+24%</b>
                    </div>

                    <div className="dashboard-mini-card">
                      <div className="mini-card-icon orange">₹</div>
                      <div>
                        <small>Pending credit</small>
                        <strong>₹18,450</strong>
                      </div>
                      <b>12 customers</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-floating-card home-floating-sale">
              <span className="floating-icon">↗</span>
              <div>
                <small>Today's sales</small>
                <strong>₹28,450</strong>
              </div>
            </div>

            <div className="home-floating-card home-floating-stock">
              <span className="floating-icon">✓</span>
              <div>
                <small>Inventory status</small>
                <strong>Healthy</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ===================================================== */}
      <section className="home-trust-bar">
        <div className="home-container">
          <p>Everything your mobile business needs in one place</p>

          <div className="home-trust-items">
            <span>IMEI TRACKING</span>
            <span>GST BILLING</span>
            <span>INVENTORY</span>
            <span>STAFF</span>
            <span>CUSTOMERS</span>
            <span>ANALYTICS</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="home-features-section">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-section-label">POWERFUL FEATURES</span>
              <h2>
                Everything you need.
                <br />
                Nothing you don't.
              </h2>
            </div>

            <p>
              Phoneo brings your entire mobile shop operation together,
              replacing scattered tools with one simple and powerful system.
            </p>
          </div>

          <div className="home-features-grid">
            {features.map((feature) => (
              <article className="home-feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-icon-large">{feature.icon}</span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-card-arrow">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="home-how-section" id="how-it-works">
        <div className="home-container">
          <div className="home-dark-panel">
            <div className="home-how-header">
              <div>
                <span className="home-section-label light">
                  HOW PHONEO WORKS
                </span>

                <h2>
                  From daily chaos
                  <br />
                  to complete control.
                </h2>
              </div>

              <p>
                Simple tools. Clear information. Better decisions. Phoneo is
                designed to make everyday shop management easier.
              </p>
            </div>

            <div className="home-steps-grid">
              {steps.map((step) => (
                <div className="home-step" key={step.number}>
                  <span className="step-number">{step.number}</span>

                  <div className="step-line"></div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS MANAGEMENT SHOWCASE
      ===================================================== */}
      <section className="home-showcase-section">
        <div className="home-container">
          <div className="home-showcase-grid">
            <div className="home-showcase-content">
              <span className="home-section-label">
                ONE DASHBOARD. COMPLETE CONTROL.
              </span>

              <h2>
                Know what's happening
                <span> in your shop.</span>
              </h2>

              <p>
                Get a clear view of your sales, inventory, customers and
                payments without checking multiple apps or spreadsheets.
              </p>

              <ul className="home-check-list">
                <li>
                  <span>✓</span>
                  Real-time sales overview
                </li>
                <li>
                  <span>✓</span>
                  IMEI-level inventory tracking
                </li>
                <li>
                  <span>✓</span>
                  Customer credit management
                </li>
                <li>
                  <span>✓</span>
                  Simple business reports
                </li>
              </ul>

              <Link to="/compare" className="home-text-link">
                Explore Phoneo
                <span>→</span>
              </Link>
            </div>

            <div className="home-showcase-visual">
              <div className="showcase-window">
                <div className="showcase-window-top">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>phoneo.in/dashboard</span>
                </div>

                <div className="showcase-window-content">
                  <div className="showcase-main-card">
                    <div className="showcase-card-header">
                      <div>
                        <small>Revenue</small>
                        <strong>₹2,84,520</strong>
                      </div>

                      <span>+22.4%</span>
                    </div>

                    <div className="showcase-graph">
                      <span style={{ height: "25%" }}></span>
                      <span style={{ height: "38%" }}></span>
                      <span style={{ height: "32%" }}></span>
                      <span style={{ height: "55%" }}></span>
                      <span style={{ height: "48%" }}></span>
                      <span style={{ height: "68%" }}></span>
                      <span style={{ height: "60%" }}></span>
                      <span style={{ height: "88%" }}></span>
                      <span style={{ height: "78%" }}></span>
                    </div>
                  </div>

                  <div className="showcase-side-card">
                    <small>Inventory</small>

                    <strong>438</strong>

                    <div className="inventory-progress">
                      <span></span>
                    </div>

                    <p>Products in stock</p>
                  </div>
                </div>

                <div className="showcase-products">
                  <div>
                    <span className="product-avatar">i</span>
                    <div>
                      <strong>iPhone 15</strong>
                      <small>IMEI •••• 4821</small>
                    </div>
                  </div>

                  <b>₹64,999</b>
                </div>

                <div className="showcase-products">
                  <div>
                    <span className="product-avatar samsung">S</span>
                    <div>
                      <strong>Galaxy S24</strong>
                      <small>IMEI •••• 7294</small>
                    </div>
                  </div>

                  <b>₹74,999</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
      ===================================================== */}
      <section className="home-pricing-section">
        <div className="home-container">
          <div className="home-section-heading pricing-heading">
            <div>
              <span className="home-section-label">SIMPLE PRICING</span>

              <h2>
                Start small.
                <br />
                Grow without limits.
              </h2>
            </div>

            <p>
              Flexible plans designed for mobile shops of every size. Start
              with what you need and upgrade as your business grows.
            </p>
          </div>

          <div className="home-pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`home-pricing-card ${
                  plan.highlighted ? "featured" : ""
                }`}
              >
                {plan.highlighted && (
                  <span className="pricing-badge">Most Popular</span>
                )}

                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>

                  <p>{plan.bestFor}</p>
                </div>

                <div className="home-price">
                  {plan.price ? (
                    <>
                      <strong>₹{plan.price}</strong>
                      <span>/month</span>
                    </>
                  ) : (
                    <strong>Custom</strong>
                  )}
                </div>

                <Link
                  to="/compare"
                  className={`pricing-cta ${
                    plan.highlighted ? "dark" : ""
                  }`}
                >
                  {plan.cta || "Get Started"}
                  <span>→</span>
                </Link>

                <div className="pricing-divider"></div>

                <ul className="pricing-features-list">
                  {plan.features.slice(0, 6).map((feature) => (
                    <li key={feature.name}>
                      <span className={feature.included ? "yes" : "no"}>
                        {feature.included ? "✓" : "×"}
                      </span>

                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG
      ===================================================== */}
      <section className="home-blog-section">
        <div className="home-container">
          <div className="home-blog-header">
            <div>
              <span className="home-section-label">PHONEO INSIGHTS</span>

              <h2>
                Ideas for running
                <br />
                a better business.
              </h2>
            </div>

            <Link to="/blogs" className="home-outline-btn">
              View all articles
              <span>→</span>
            </Link>
          </div>

          <div className="home-blog-grid">
            {latestBlogs.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="home-final-section">
        <div className="home-container">
          <div className="home-final-card">
            <div className="final-glow"></div>

            <span className="home-section-label light">
              READY TO GET STARTED?
            </span>

            <h2>
              Your shop deserves
              <br />
              <span>smarter software.</span>
            </h2>

            <p>
              Join thousands of mobile shop owners using Phoneo to simplify
              daily operations and grow their business.
            </p>

            <div className="home-final-actions">
              <Link to="/compare" className="home-btn home-btn-light">
                Start Your Free Trial
                <span>↗</span>
              </Link>

              <Link to="/blogs" className="home-btn home-btn-outline-light">
                Explore Phoneo
                <span>→</span>
              </Link>
            </div>

            <div className="home-final-note">
              <span>✓</span>
              No credit card required
              <span>✓</span>
              7-day free trial
              <span>✓</span>
              Easy setup
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}