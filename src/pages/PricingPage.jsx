import React, { useState } from "react";
import { pricingPlans } from "../data/pricingData";
import "../styles/global.css";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  const getPrice = (plan) => {
    if (billingCycle === "monthly") return plan.price;
    if (billingCycle === "quarterly") return Math.round(plan.quarterly / 3);
    if (billingCycle === "yearly") return Math.round(plan.yearly / 12);
    return plan.price;
  };

  const getTotalPrice = (plan) => {
    if (billingCycle === "monthly") return plan.price;
    if (billingCycle === "quarterly") return plan.quarterly;
    if (billingCycle === "yearly") return plan.yearly;
    return plan.price;
  };

  const phoneoFeatures = [
    {
      icon: "🧾",
      title: "Smart Billing",
      text: "Create professional invoices quickly and manage your daily sales from one place.",
    },
    {
      icon: "📦",
      title: "Inventory Management",
      text: "Track smartphones, accessories, spare parts and stock movements without spreadsheets.",
    },
    {
      icon: "🔧",
      title: "Repair Management",
      text: "Manage repair jobs, customer devices, status updates and delivery information easily.",
    },
    {
      icon: "👥",
      title: "Customer Management",
      text: "Keep customer details, purchase history and repair records organized.",
    },
    {
      icon: "📊",
      title: "Business Reports",
      text: "Understand sales, stock, revenue and business activity through useful reports.",
    },
    {
      icon: "📱",
      title: "Mobile Shop Management",
      text: "Manage your complete mobile retail and repair workflow from a single platform.",
    },
  ];

  const businessBenefits = [
    "Reduce manual billing work",
    "Keep your inventory organized",
    "Track mobile repair jobs",
    "Manage customer information",
    "Monitor daily sales",
    "Get useful business reports",
    "Manage accessories and spare parts",
    "Keep your shop operations organized",
  ];

  const faqs = [
    {
      question: "What is Phoneo?",
      answer:
        "Phoneo is a mobile shop management solution designed for mobile retailers and repair businesses. It helps manage billing, inventory, repairs, customers, sales and everyday shop operations from one place.",
    },
    {
      question: "Who can use Phoneo?",
      answer:
        "Phoneo is useful for mobile phone shops, mobile retailers, mobile repairing shops and businesses that sell smartphones, accessories and related products.",
    },
    {
      question: "Can Phoneo manage mobile repairs?",
      answer:
        "Yes. Phoneo can be used to organize repair-related information such as customer details, device information, repair status and delivery tracking.",
    },
    {
      question: "Can I manage accessories and spare parts?",
      answer:
        "Yes. You can organize products such as mobile cases, chargers, cables, earphones, screen protectors and spare parts as part of your inventory workflow.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes. You can change your subscription plan according to your business requirements.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "There are no setup charges mentioned in the standard pricing information. Contact the Phoneo team if you need details about a specific business setup.",
    },
    {
      question: "Can Phoneo help me reduce manual work?",
      answer:
        "Yes. Phoneo brings important shop activities such as billing, inventory, repairs and customer records into one digital workflow, helping reduce dependence on notebooks and scattered spreadsheets.",
    },
    {
      question: "How can I get started?",
      answer:
        "Choose a suitable plan and use the available getting-started or demo option. You can also contact the Phoneo team for more information about your shop requirements.",
    },
  ];

  return (
    <div className="pricing-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="pricing-hero phoneo-pricing-hero">
        <div className="pricing-hero-content">

          <div className="pricing-eyebrow">
            <span>✦</span>
            PHONE SHOP MANAGEMENT MADE SIMPLE
          </div>

          <h1>
            Run your mobile shop
            <span> smarter with Phoneo.</span>
          </h1>

          <p>
            One simple platform to manage billing, inventory, repairs,
            customers and everyday mobile shop operations.
          </p>

          <div className="pricing-hero-points">
            <span>✓ Smart Billing</span>
            <span>✓ Inventory Control</span>
            <span>✓ Repair Management</span>
            <span>✓ Business Reports</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          PHONEO INTRO
      ===================================================== */}
      <section className="pricing-intro-section">
        <div className="pricing-intro-container">

          <div className="pricing-intro-content">
            <span className="section-kicker">WHY PHONEO?</span>

            <h2>
              Everything your mobile shop needs,
              <span> in one place.</span>
            </h2>

            <p>
              Running a mobile shop involves more than just selling phones.
              You need to manage products, invoices, customers, repairs,
              accessories, stock and daily business activities.
            </p>

            <p>
              Phoneo brings these workflows together so you can spend less
              time managing records and more time growing your business.
            </p>

            <div className="intro-highlight">
              <span className="intro-highlight-icon">✦</span>
              <div>
                <strong>Built for mobile businesses</strong>
                <p>
                  Designed around the everyday requirements of mobile
                  retailers and repair shops.
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-intro-visual">

            <div className="dashboard-card">
              <div className="dashboard-top">
                <div>
                  <small>Today's overview</small>
                  <strong>Shop Dashboard</strong>
                </div>
                <span className="dashboard-dot">●</span>
              </div>

              <div className="dashboard-stats">
                <div className="dashboard-stat">
                  <span>Sales</span>
                  <strong>₹24,850</strong>
                  <small>Today</small>
                </div>

                <div className="dashboard-stat">
                  <span>Products</span>
                  <strong>248</strong>
                  <small>In stock</small>
                </div>

                <div className="dashboard-stat">
                  <span>Repairs</span>
                  <strong>12</strong>
                  <small>Active</small>
                </div>

                <div className="dashboard-stat">
                  <span>Customers</span>
                  <strong>486</strong>
                  <small>Total</small>
                </div>
              </div>

              <div className="dashboard-chart">
                <div className="chart-header">
                  <span>Sales activity</span>
                  <small>This week</small>
                </div>

                <div className="chart-bars">
                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "55%" }}></span>
                  <span style={{ height: "45%" }}></span>
                  <span style={{ height: "72%" }}></span>
                  <span style={{ height: "60%" }}></span>
                  <span style={{ height: "88%" }}></span>
                  <span style={{ height: "76%" }}></span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRICING HEADER
      ===================================================== */}
      <section className="pricing-plans-section">

        <div className="pricing-section-heading">
          <span className="section-kicker">SIMPLE PRICING</span>

          <h2>
            Choose a plan that fits
            <span> your shop.</span>
          </h2>

          <p>
            Start with the plan you need today and scale as your business
            grows.
          </p>
        </div>


        {/* Billing Cycle Toggle */}
        <div className="billing-toggle">

          <button
            className={`toggle-btn ${
              billingCycle === "monthly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>

          <button
            className={`toggle-btn ${
              billingCycle === "quarterly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("quarterly")}
          >
            Quarterly
            <span className="save-badge">Save 5%</span>
          </button>

          <button
            className={`toggle-btn ${
              billingCycle === "yearly" ? "active" : ""
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
            <span className="save-badge">Save 15%</span>
          </button>

        </div>


        {/* Pricing Cards */}
        <div className="pricing-cards-container">

          {pricingPlans.map((plan) => (

            <div
              key={plan.id}
              className={`pricing-card-detailed ${
                plan.highlighted ? "highlighted" : ""
              }`}
            >

              {plan.highlighted && (
                <div className="recommended-badge">
                  Most Popular
                </div>
              )}

              <div className="pricing-card-top">

                <h3 className="plan-name">
                  {plan.name}
                </h3>

                <p className="plan-subtitle">
                  {plan.bestFor}
                </p>

              </div>


              <div className="plan-price">

                {plan.price ? (
                  <>
                    <span className="price-amount">
                      ₹{getPrice(plan)}
                    </span>

                    <span className="price-period">
                      /month
                    </span>

                    {billingCycle !== "monthly" && (
                      <span className="price-total">
                        ₹{getTotalPrice(plan)} total
                      </span>
                    )}
                  </>
                ) : (
                  <span className="price-amount">
                    Custom
                  </span>
                )}

              </div>


              <p className="plan-description">
                {plan.description}
              </p>


              <button className="btn btn-primary btn-full">
                {plan.cta}
              </button>


              <div className="plan-features-heading">
                What's included
              </div>


              <div className="plan-features-list">

                {plan.features.map((feature) => (

                  <div
                    key={feature.name}
                    className="feature-item"
                  >

                    <span className="feature-icon">
                      {feature.included ? "✓" : "−"}
                    </span>

                    <span
                      className={`feature-text ${
                        !feature.included ? "disabled" : ""
                      }`}
                    >
                      {feature.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="phoneo-pricing-features">

        <div className="pricing-section-heading">

          <span className="section-kicker">
            PHONEO FEATURES
          </span>

          <h2>
            More than billing.
            <span> A complete shop workflow.</span>
          </h2>

          <p>
            Phoneo is designed to bring the important parts of your
            mobile business together.
          </p>

        </div>


        <div className="phoneo-feature-grid">

          {phoneoFeatures.map((feature) => (

            <div
              className="phoneo-feature-card"
              key={feature.title}
            >

              <div className="phoneo-feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.text}
              </p>

              <span className="feature-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          BUSINESS BENEFITS
      ===================================================== */}
      <section className="pricing-benefits-section">

        <div className="pricing-benefits-container">

          <div className="benefits-visual">

            <div className="benefits-card">

              <div className="benefits-card-header">
                <div>
                  <span>PHONEO</span>
                  <strong>Shop Control Center</strong>
                </div>

                <div className="online-status">
                  <i></i>
                  Active
                </div>
              </div>

              <div className="benefit-progress">

                <div className="progress-row">
                  <span>Billing</span>
                  <strong>92%</strong>
                </div>

                <div className="progress-line">
                  <span style={{ width: "92%" }}></span>
                </div>

              </div>

              <div className="benefit-progress">

                <div className="progress-row">
                  <span>Inventory</span>
                  <strong>78%</strong>
                </div>

                <div className="progress-line">
                  <span style={{ width: "78%" }}></span>
                </div>

              </div>

              <div className="benefit-progress">

                <div className="progress-row">
                  <span>Repairs</span>
                  <strong>64%</strong>
                </div>

                <div className="progress-line">
                  <span style={{ width: "64%" }}></span>
                </div>

              </div>

            </div>

          </div>


          <div className="pricing-benefits-content">

            <span className="section-kicker">
              BUILT FOR YOUR DAILY WORK
            </span>

            <h2>
              Spend less time managing
              <span> and more time selling.</span>
            </h2>

            <p>
              Phoneo helps bring your everyday shop operations into a
              single organized workflow.
            </p>

            <div className="business-benefits-list">

              {businessBenefits.map((benefit) => (

                <div
                  className="business-benefit-item"
                  key={benefit}
                >
                  <span>✓</span>
                  <p>{benefit}</p>
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOBILE + REPAIR SHOP
      ===================================================== */}
      <section className="shop-types-section">

        <div className="pricing-section-heading">

          <span className="section-kicker">
            MADE FOR MOBILE BUSINESSES
          </span>

          <h2>
            One platform for
            <span> different shop needs.</span>
          </h2>

        </div>


        <div className="shop-type-grid">

          <div className="shop-type-card">

            <div className="shop-type-number">
              01
            </div>

            <div className="shop-type-icon">
              📱
            </div>

            <h3>
              Mobile Retail Shop
            </h3>

            <p>
              Manage smartphones, accessories, billing, stock,
              customers and sales from one organized system.
            </p>

            <ul>
              <li>Smartphone inventory</li>
              <li>Accessory management</li>
              <li>Sales & billing</li>
              <li>Customer records</li>
            </ul>

          </div>


          <div className="shop-type-card featured-shop-card">

            <div className="shop-type-number">
              02
            </div>

            <div className="shop-type-icon">
              🔧
            </div>

            <h3>
              Mobile Repair Shop
            </h3>

            <p>
              Keep repair jobs organized with device details,
              customer information, repair status and delivery tracking.
            </p>

            <ul>
              <li>Repair job tracking</li>
              <li>Device information</li>
              <li>Customer history</li>
              <li>Repair status</li>
            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="pricing-faq">

        <div className="pricing-section-heading">

          <span className="section-kicker">
            FAQ
          </span>

          <h2>
            Questions about
            <span> Phoneo?</span>
          </h2>

          <p>
            Find answers to common questions about Phoneo and its
            pricing.
          </p>

        </div>


        <div className="faq-items">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "faq-open" : ""
              }`}
              key={faq.question}
            >

              <button
                type="button"
                className="faq-question"
                onClick={() =>
                  setOpenFaq(
                    openFaq === index ? -1 : index
                  )
                }
              >

                <span>
                  {faq.question}
                </span>

                <strong>
                  {openFaq === index ? "−" : "+"}
                </strong>

              </button>


              {openFaq === index && (
                <div className="faq-answer">
                  <p>
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="pricing-cta phoneo-pricing-cta">

        <div className="pricing-cta-content">

          <span className="pricing-cta-label">
            READY TO SIMPLIFY YOUR SHOP?
          </span>

          <h2>
            Manage your mobile business
            <span> with Phoneo.</span>
          </h2>

          <p>
            Bring billing, inventory, repairs and customer management
            together in one simple workflow.
          </p>

          <div className="pricing-cta-actions">

            <button className="btn btn-primary btn-large">
              Start Using Phoneo ↗
            </button>

            <button className="pricing-demo-button">
              Talk to our team
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}