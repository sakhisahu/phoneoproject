import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, getBlogByCategory } from '../data/blogData';
import '../styles/blog.css';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = getBlogBySlug(slug);
  const relatedArticles = article ? getBlogByCategory(article.category).filter(a => a.id !== article.id) : [];

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="blog-detail-page">
      <article className="blog-article">
        <div className="article-header">
          <span className="article-category">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span className="author">By {article.author}</span>
            <span className="separator">•</span>
            <span className="date">{formattedDate}</span>
            <span className="separator">•</span>
            <span className="read-time">{article.readTime} min read</span>
          </div>
        </div>

        <img src={article.image} alt={article.title} className="article-image" />

        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className="article-footer">
          <div className="share-section">
            <p>Share this article:</p>
            <div className="share-buttons">
              <button className="share-btn facebook">Facebook</button>
              <button className="share-btn twitter">Twitter</button>
              <button className="share-btn whatsapp">WhatsApp</button>
              <button className="share-btn linkedin">LinkedIn</button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="related-articles">
          <h2>Related Articles</h2>
          <div className="related-grid">
            {relatedArticles.slice(0, 3).map((related) => (
              <div key={related.id} className="related-card">
                <h4>
                  <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                </h4>
                <p>{related.excerpt}</p>
                <Link to={`/blog/${related.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="article-cta">
        <h2>Try Phoneo Today</h2>
        <p>See how Phoneo can help manage your mobile shop</p>
        <button className="btn btn-primary btn-large">Start Free Trial</button>
      </div>
    </div>
  );
}