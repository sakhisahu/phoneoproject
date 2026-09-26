import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog.css';

export default function BlogCard({ article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={article.image} alt={article.title} />
        <span className="blog-category">{article.category}</span>
      </div>

      <div className="blog-card-content">
        <h3 className="blog-card-title">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{article.excerpt}</p>

        <div className="blog-card-meta">
          <span className="author">By {article.author}</span>
          <span className="separator">•</span>
          <span className="date">{formattedDate}</span>
          <span className="separator">•</span>
          <span className="read-time">{article.readTime} min read</span>
        </div>

        <Link to={`/blog/${article.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
}