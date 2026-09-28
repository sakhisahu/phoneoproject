import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import {
  getBlogArticles,
  getBlogByCategory,
} from "../data/blogData";
import "../styles/blog.css";

export default function Blogs() {
  const articles = getBlogArticles();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(articles.map((item) => item.category))),
  ];

  const formatCategory = (value) => {
    if (value === "all") return "All Articles";

    return value
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  const featuredArticles = articles
    .filter((article) => article.featured)
    .slice(0, 3);

  const filteredArticles = useMemo(() => {
    let result =
      category === "all"
        ? articles
        : getBlogByCategory(category);

    const query = search.trim().toLowerCase();

    if (query) {
      result = result.filter((article) => {
        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query)
        );
      });
    }

    return result;
  }, [articles, category, search]);

  const latestArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt) -
        new Date(a.publishedAt)
    )
    .slice(0, 4);

  return (
    <main className="blogs-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blogs-hero">
        <div className="blogs-hero-glow blogs-glow-one"></div>
        <div className="blogs-hero-glow blogs-glow-two"></div>

        <div className="blogs-container blogs-hero-inner">

          <div className="blogs-hero-content">

            <div className="blogs-eyebrow">
              <span className="blogs-eyebrow-dot"></span>
              PHONEHUB INSIGHTS
            </div>

            <h1>
              Ideas that help
              <span> your mobile business grow.</span>
            </h1>

            <p>
              Practical guides, business tips and useful insights
              for mobile retailers, repair shops and modern
              mobile businesses.
            </p>

            <div className="blogs-hero-actions">
              <a href="#articles" className="blogs-primary-btn">
                Explore Articles
                <span>↗</span>
              </a>

              <Link
                to="/compare"
                className="blogs-secondary-btn"
              >
                Compare Software
              </Link>
            </div>

            <div className="blogs-hero-stats">
              <div>
                <strong>{articles.length}+</strong>
                <span>Articles</span>
              </div>

              <div>
                <strong>7</strong>
                <span>Topics</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Practical</span>
              </div>
            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="blogs-hero-visual">

            <div className="hero-dashboard">

              <div className="dashboard-top">
                <div>
                  <span>Business Insights</span>
                  <strong>Shop Overview</strong>
                </div>

                <div className="dashboard-avatar">
                  P
                </div>
              </div>

              <div className="dashboard-number">
                <span>Articles & Guides</span>
                <strong>12</strong>
              </div>

              <div className="dashboard-chart">
                <div className="chart-bars">
                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "52%" }}></span>
                  <span style={{ height: "43%" }}></span>
                  <span style={{ height: "70%" }}></span>
                  <span style={{ height: "58%" }}></span>
                  <span style={{ height: "82%" }}></span>
                  <span style={{ height: "96%" }}></span>
                </div>
              </div>

              <div className="dashboard-bottom">
                <span>Billing</span>
                <span>Inventory</span>
                <span>Repairs</span>
                <span>Growth</span>
              </div>

            </div>

            <div className="hero-floating-card hero-float-one">
              <span>Latest Guide</span>
              <strong>Mobile Shop Growth</strong>
              <small>10 min read</small>
            </div>

            <div className="hero-floating-card hero-float-two">
              <span>12</span>
              <small>Published articles</small>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED
      ===================================================== */}

      <section className="blogs-featured-section">

        <div className="blogs-container">

          <div className="section-heading-row">
            <div>
              <span className="section-mini-label">
                FEATURED
              </span>

              <h2>
                Start with our
                <span> featured insights.</span>
              </h2>
            </div>

            <Link
              to="/blogs"
              className="section-view-link"
            >
              View all articles ↗
            </Link>
          </div>

          <div className="featured-grid">

            {featuredArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blogs/${article.slug}`}
                className={`featured-card ${
                  index === 0 ? "featured-large" : ""
                }`}
              >

                <div className="featured-image">
                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <span className="featured-category">
                    {formatCategory(article.category)}
                  </span>

                  <span className="featured-arrow">
                    ↗
                  </span>
                </div>

                <div className="featured-content">

                  <div className="featured-meta">
                    <span>
                      {new Date(
                        article.publishedAt
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                    <span className="meta-dot"></span>

                    <span>
                      {article.readTime} min read
                    </span>
                  </div>

                  <h3>{article.title}</h3>

                  <p>{article.excerpt}</p>

                  <div className="featured-read">
                    Read article
                    <span>→</span>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ALL ARTICLES
      ===================================================== */}

      <section
        className="blogs-content-section"
        id="articles"
      >

        <div className="blogs-container">

          <div className="articles-header">

            <div>
              <span className="section-mini-label">
                PHONEHUB BLOG
              </span>

              <h2>
                Explore all
                <span> articles.</span>
              </h2>

              <p>
                Find useful information about billing,
                inventory, repairs, sales and mobile
                business management.
              </p>
            </div>

            <div className="articles-count">
              <strong>{filteredArticles.length}</strong>
              <span>articles found</span>
            </div>

          </div>

          {/* SEARCH */}

          <div className="blog-toolbar">

            <div className="blog-search-box">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search articles..."
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="search-clear"
                >
                  ×
                </button>
              )}

            </div>

            <div className="blog-category-list">

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    category === item
                      ? "category-btn active"
                      : "category-btn"
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {formatCategory(item)}
                </button>
              ))}

            </div>

          </div>

          {/* ARTICLES */}

          {filteredArticles.length > 0 ? (
            <div className="blog-articles-grid">

              {filteredArticles.map((article) => (
                <BlogCard
                  key={article.id}
                  article={article}
                />
              ))}

            </div>
          ) : (
            <div className="blog-empty-state">

              <div className="empty-icon">
                🔎
              </div>

              <h3>No articles found</h3>

              <p>
                Try another search term or select
                another category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Clear filters
              </button>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          LATEST SIDEBAR STYLE SECTION
      ===================================================== */}

      <section className="latest-insights-section">

        <div className="blogs-container">

          <div className="latest-heading">

            <div>
              <span className="section-mini-label">
                QUICK READS
              </span>

              <h2>
                Fresh from
                <span> PhoneHub.</span>
              </h2>
            </div>

          </div>

          <div className="latest-list">

            {latestArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/blogs/${article.slug}`}
                className="latest-item"
              >

                <div className="latest-number">
                  0{index + 1}
                </div>

                <img
                  src={article.image}
                  alt={article.title}
                />

                <div className="latest-info">

                  <span>
                    {formatCategory(article.category)}
                  </span>

                  <h3>{article.title}</h3>

                  <p>
                    {article.excerpt}
                  </p>

                </div>

                <div className="latest-arrow">
                  ↗
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="blogs-cta-section">

        <div className="blogs-container">

          <div className="blogs-cta">

            <div className="cta-decoration cta-decoration-one"></div>
            <div className="cta-decoration cta-decoration-two"></div>

            <span className="section-mini-label">
              READY TO GROW?
            </span>

            <h2>
              Run your mobile business
              <span> smarter.</span>
            </h2>

            <p>
              Simplify billing, inventory, repairs and
              everyday shop management with PhoneHub.
            </p>

            <div className="cta-buttons">

              <Link
                to="/compare"
                className="cta-primary"
              >
                Explore PhoneHub
                <span>↗</span>
              </Link>

              <Link
                to="/"
                className="cta-secondary"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}