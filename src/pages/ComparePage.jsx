import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/compare.css";

import comparisons from "../data/compareData";

export default function ComparePage() {
  const [search, setSearch] = useState("");

  const filteredComparisons = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return comparisons;
    }

    return comparisons.filter((item) => {
      return (
        item.title?.toLowerCase().includes(query) ||
        item.productA?.toLowerCase().includes(query) ||
        item.productB?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <main className="compare-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="compare-hero">
        <div className="compare-container">
          <div className="compare-hero-inner">
            <div className="compare-hero-copy">
              <div className="compare-eyebrow">
                <span className="compare-eyebrow-dot"></span>
                PhoneHub Comparisons
              </div>

              <h1>
                Compare the tools
                <br />
                <span>before you choose.</span>
              </h1>

              <p>
                Compare PhoneHub with popular billing, accounting, POS and
                business management software. Understand the important
                differences in a simple and practical way.
              </p>
            </div>

            <div className="compare-search-box">
              <span className="compare-search-icon">⌕</span>

              <input
                type="text"
                placeholder="Search software or comparison..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  type="button"
                  className="compare-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPARISON LIST
      ===================================================== */}

      <section className="compare-selection-section">
        <div className="compare-container">
          <div className="compare-selection-heading">
            <div className="compare-heading-left">
              <div className="compare-section-kicker">
                <span></span>
                Explore comparisons
              </div>

              <h2>
                Choose a
                <br />
                <strong>comparison.</strong>
              </h2>
            </div>

            <div className="compare-heading-right">
              <p>
                Select a comparison to explore a complete overview, key
                differences and feature-by-feature details.
              </p>

              <div className="compare-result-count">
                <strong>{filteredComparisons.length}</strong>
                <span>
                  {filteredComparisons.length === 1
                    ? "comparison available"
                    : "comparisons available"}
                </span>
              </div>
            </div>
          </div>

          {filteredComparisons.length > 0 ? (
            <div className="comparison-articles-grid">
              {filteredComparisons.map((comparison, index) => (
                <Link
                  to={`/compare/${comparison.id}`}
                  className="comparison-article-card"
                  key={comparison.id}
                >
                  {/* Image */}
                  <div className="comparison-card-image">
                    <img
                      src={comparison.image}
                      alt={`${comparison.productA} vs ${comparison.productB}`}
                    />

                    <div className="comparison-card-overlay"></div>

                    <span className="comparison-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="comparison-card-category">
                      {comparison.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="comparison-card-body">
                    <div className="comparison-products">
                      <span>{comparison.productA}</span>

                      <b>VS</b>

                      <span>{comparison.productB}</span>
                    </div>

                    <h3>{comparison.title}</h3>

                    <p>
                      {comparison.brief ||
                        comparison.subtitle ||
                        "Explore this detailed software comparison."}
                    </p>

                    <div className="comparison-card-footer">
                      <span>Read full comparison</span>

                      <span className="comparison-card-arrow">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="comparison-empty">
              <div className="comparison-empty-icon">⌕</div>

              <h3>No comparison found</h3>

              <p>
                We couldn't find a comparison matching{" "}
                <strong>"{search}"</strong>.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
              >
                Show all comparisons
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          HOW TO READ
      ===================================================== */}

      <section className="compare-info-section">
        <div className="compare-container">
          <div className="compare-info-box">
            <div className="compare-info-content">
              <div className="compare-section-kicker light">
                <span></span>
                Make a practical comparison
              </div>

              <h2>
                Look beyond
                <br />
                <strong>the feature list.</strong>
              </h2>

              <p>
                Every comparison looks at the things that matter when running
                a mobile business — billing, inventory, customers, repairs,
                reports and everyday workflow.
              </p>
            </div>

            <div className="compare-info-points">
              <div>
                <span>01</span>
                <strong>Billing</strong>
                <p>Understand everyday invoicing and sales workflows.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Inventory</strong>
                <p>Compare how products and stock can be managed.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Reports</strong>
                <p>See how each platform approaches business insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}