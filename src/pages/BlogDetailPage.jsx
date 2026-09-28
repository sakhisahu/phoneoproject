import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  getBlogBySlug,
  getBlogArticles,
} from "../data/blogData";
import "../styles/blog.css";

export default function BlogDetail() {
  const { id } = useParams();

  const article = getBlogBySlug(id);

  if (!article) {
    return (
      <main className="article-not-found">

        <div className="not-found-card">

          <span>PHONEHUB INSIGHTS</span>

          <strong>404</strong>

          <h1>
            Article not found
          </h1>

          <p>
            The article you are looking for
            does not exist.
          </p>

          <Link to="/blogs">
            ← Back to Blog
          </Link>

        </div>

      </main>
    );
  }

  const relatedArticles = getBlogArticles()
    .filter(
      (item) =>
        item.id !== article.id &&
        item.category === article.category
    )
    .slice(0, 3);

  const category = article.category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  const date = new Date(
    article.publishedAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = article.title;

    let shareUrl = "";

    if (platform === "whatsapp") {
      shareUrl =
        "https://wa.me/?text=" +
        encodeURIComponent(
          `${title} ${url}`
        );
    }

    if (platform === "facebook") {
      shareUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url);
    }

    if (platform === "linkedin") {
      shareUrl =
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
        encodeURIComponent(url);
    }

    if (platform === "twitter") {
      shareUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(title) +
        "&url=" +
        encodeURIComponent(url);
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <main className="article-page">

      {/* =================================================
          ARTICLE HERO
      ================================================= */}

      <section className="article-hero">

        <div className="article-hero-bg"></div>

        <div className="article-container">

          <Link
            to="/blogs"
            className="article-back"
          >
            ← Back to Blog
          </Link>

          <div className="article-category">
            {category}
          </div>

          <h1>
            {article.title}
          </h1>

          <p className="article-excerpt">
            {article.excerpt}
          </p>

          <div className="article-meta">

            <div className="article-author-avatar">
              {article.author
                ? article.author.charAt(0)
                : "P"}
            </div>

            <div className="article-author-info">
              <strong>
                {article.author}
              </strong>

              <span>
                PhoneHub Insights
              </span>
            </div>

            <div className="article-meta-divider"></div>

            <span>{date}</span>

            <span className="meta-dot"></span>

            <span>
              {article.readTime} min read
            </span>

          </div>

        </div>

      </section>

      {/* =================================================
          ARTICLE CONTENT
      ================================================= */}

      <section className="article-main-section">

        <div className="article-container">

          <div className="article-cover">

            <img
              src={article.image}
              alt={article.title}
            />

            <div className="article-cover-label">
              {category}
            </div>

          </div>

          <div className="article-layout">

            <article className="article-content">

              <div
                className="article-html"
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              />

              {/* SHARE */}

              <div className="article-share">

                <div>
                  <strong>
                    Found this useful?
                  </strong>

                  <span>
                    Share this article
                  </span>
                </div>

                <div className="share-buttons">

                  <button
                    type="button"
                    onClick={() =>
                      shareArticle("whatsapp")
                    }
                  >
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      shareArticle("facebook")
                    }
                  >
                    Facebook
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      shareArticle("linkedin")
                    }
                  >
                    LinkedIn
                  </button>

                </div>

              </div>

            </article>

            {/* SIDEBAR */}

            <aside className="article-sidebar">

              <div className="sidebar-card">

                <span className="sidebar-label">
                  IN THIS ARTICLE
                </span>

                <div className="sidebar-line">
                  <span>01</span>
                  <p>
                    Key information
                  </p>
                </div>

                <div className="sidebar-line">
                  <span>02</span>
                  <p>
                    Practical tips
                  </p>
                </div>

                <div className="sidebar-line">
                  <span>03</span>
                  <p>
                    Business benefits
                  </p>
                </div>

                <div className="sidebar-line">
                  <span>04</span>
                  <p>
                    Final takeaway
                  </p>
                </div>

              </div>

              <div className="sidebar-cta">

                <span>
                  PHONEHUB
                </span>

                <h3>
                  Manage your mobile
                  business smarter.
                </h3>

                <Link to="/compare">
                  Explore PhoneHub ↗
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =================================================
          RELATED ARTICLES
      ================================================= */}

      {relatedArticles.length > 0 && (
        <section className="related-articles">

          <div className="article-container">

            <div className="related-heading">

              <div>
                <span>
                  KEEP READING
                </span>

                <h2>
                  More insights for
                  <em> your business.</em>
                </h2>
              </div>

              <Link to="/blogs">
                View all articles ↗
              </Link>

            </div>

            <div className="related-grid">

              {relatedArticles.map(
                (related) => (
                  <Link
                    key={related.id}
                    to={`/blogs/${related.slug}`}
                    className="related-card"
                  >

                    <div className="related-image">

                      <img
                        src={related.image}
                        alt={related.title}
                      />

                      <span>
                        ↗
                      </span>

                    </div>

                    <div className="related-content">

                      <small>
                        {related.category
                          .replace("-", " ")
                          .toUpperCase()}
                      </small>

                      <h3>
                        {related.title}
                      </h3>

                      <p>
                        {related.excerpt}
                      </p>

                    </div>

                  </Link>
                )
              )}

            </div>

          </div>

        </section>
      )}

      {/* =================================================
          CTA
      ================================================= */}

      <section className="article-bottom-cta">

        <div className="article-container">

          <div className="article-cta-box">

            <span>
              PHONEHUB
            </span>

            <h2>
              Ready to simplify
              your shop?
            </h2>

            <p>
              Manage billing, inventory,
              repairs and daily business
              operations from one place.
            </p>

            <Link to="/">
              Explore PhoneHub ↗
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}