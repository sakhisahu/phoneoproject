import React from "react";
import { Link, useParams } from "react-router-dom";

import comparisons, {
  getComparisonById,
} from "../data/compareData";

import "../styles/compare.css";

export default function CompareDetailPage() {
  const { id } = useParams();

  const comparison = getComparisonById(id);

  if (!comparison) {
    return (
      <div className="comparison-not-found">
        <div>
          <span>404</span>

          <h1>Comparison not found</h1>

          <p>
            The comparison you are looking for does not exist.
          </p>

          <Link to="/compare">
            ← Back to comparisons
          </Link>
        </div>
      </div>
    );
  }

  const otherComparisons = comparisons
    .filter((item) => item.id !== comparison.id)
    .slice(0, 3);

  return (
    <div className="compare-detail-page">
      {/* TOP HERO */}

      <section className="comparison-detail-hero">
        <div className="compare-container">
          <Link
            to="/compare"
            className="comparison-back-link"
          >
            ← All comparisons
          </Link>

          <div className="comparison-detail-grid">
            <div className="comparison-detail-copy">
              <span className="comparison-detail-category">
                {comparison.category}
              </span>

              <div className="comparison-versus">
                <span>{comparison.productA}</span>
                <b>VS</b>
                <span>{comparison.productB}</span>
              </div>

              <h1>{comparison.title}</h1>

              <p className="comparison-detail-subtitle">
                {comparison.subtitle}
              </p>

              <div className="comparison-meta">
                <span>8+ key areas</span>
                <span>•</span>
                <span>Practical comparison</span>
              </div>
            </div>

            <div className="comparison-detail-image">
              <img
                src={comparison.image}
                alt={comparison.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BRIEF ARTICLE */}

      <section className="comparison-article-section">
        <div className="compare-container comparison-article-layout">
          <article className="comparison-main-article">
            <div className="article-intro-box">
              <span>Quick overview</span>

              <p>{comparison.brief}</p>
            </div>

            <h2>
              {comparison.productA} vs {comparison.productB}: Overview
            </h2>

            <p>{comparison.overview}</p>

            <p>
              Before selecting software for a mobile business, it is useful
              to understand what each platform is designed to manage. The
              right comparison depends on your shop size, workflow, products,
              billing requirements and reporting needs.
            </p>

            <h2>Key features compared</h2>

            <div className="comparison-detail-table">
              <div className="comparison-table-head">
                <div>Feature</div>
                <div>{comparison.productA}</div>
                <div>{comparison.productB}</div>
              </div>

              {comparison.features.map((feature) => (
                <div
                  className="comparison-table-row"
                  key={feature.name}
                >
                  <div className="feature-name">
                    {feature.name}
                  </div>

                  <div>
                    <span className="mobile-table-label">
                      {comparison.productA}
                    </span>

                    {feature.phoneo}
                  </div>

                  <div>
                    <span className="mobile-table-label">
                      {comparison.productB}
                    </span>

                    {feature.other}
                  </div>
                </div>
              ))}
            </div>

            <h2>What should a mobile shop consider?</h2>

            <p>
              A mobile shop usually handles smartphones, accessories,
              customer purchases, exchanges, repairs and daily stock
              movement. Because of this, software should be evaluated not
              only on billing but also on how well it supports the complete
              workflow.
            </p>

            <div className="comparison-points">
              <div>
                <span>01</span>
                <div>
                  <h3>Billing workflow</h3>
                  <p>
                    Check how quickly invoices can be created and how easily
                    your team can manage daily sales.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <h3>Inventory visibility</h3>
                  <p>
                    Product and accessory stock should be easy to track,
                    update and review.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <h3>Customer records</h3>
                  <p>
                    Customer purchase history and business interactions can
                    help organise repeat sales and service.
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>
                <div>
                  <h3>Reports</h3>
                  <p>
                    Sales and inventory reports help owners understand daily
                    business performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="comparison-conclusion">
              <span>In short</span>

              <h2>
                Understand the difference before you choose.
              </h2>

              <p>
                {comparison.productA} and {comparison.productB} approach
                business management from different perspectives. Reviewing
                your actual shop workflow alongside these features can help
                you determine which type of software matches your
                requirements.
              </p>
            </div>
          </article>

          {/* SIDEBAR */}

          <aside className="comparison-sidebar">
            <div className="comparison-sidebar-card">
              <span>Comparison</span>

              <strong>
                {comparison.productA}
                <br />
                vs
                <br />
                {comparison.productB}
              </strong>

              <Link to="/compare">
                Explore all comparisons →
              </Link>
            </div>

            <div className="comparison-sidebar-links">
              <span>More comparisons</span>

              {otherComparisons.map((item) => (
                <Link
                  to={`/compare/${item.id}`}
                  key={item.id}
                >
                  <small>
                    {item.productA} vs {item.productB}
                  </small>

                  <strong>{item.title}</strong>

                  <span>↗</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}