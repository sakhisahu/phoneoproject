import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ article }) {
  const category = article.category
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  const date = new Date(
    article.publishedAt
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="blog-card">

      <Link
        to={`/blogs/${article.slug}`}
        className="blog-card-image"
      >

        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
        />

        <div className="blog-image-overlay"></div>

        <span className="blog-card-category">
          {category}
        </span>

        {article.featured && (
          <span className="blog-featured-badge">
            ★ Featured
          </span>
        )}

        <span className="blog-card-arrow">
          ↗
        </span>

      </Link>

      <div className="blog-card-content">

        <div className="blog-card-meta">

          <span>{date}</span>

          <span className="meta-dot"></span>

          <span>
            {article.readTime} min read
          </span>

        </div>

        <h3>
          <Link to={`/blogs/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p>
          {article.excerpt}
        </p>

        <div className="blog-card-footer">

          <div className="blog-author">

            <div className="author-avatar">
              {article.author
                ? article.author.charAt(0)
                : "P"}
            </div>

            <div>
              <strong>
                {article.author || "PhoneHub"}
              </strong>

              <span>
                PhoneHub Insights
              </span>
            </div>

          </div>

          <Link
            to={`/blogs/${article.slug}`}
            className="read-more"
          >
            Read
            <span>↗</span>
          </Link>

        </div>

      </div>

    </article>
  );
}