import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { getBlogArticles, getBlogByCategory } from '../data/blogData';
import '../styles/blog.css';

export default function BlogPage() {
  const allArticles = getBlogArticles();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(allArticles.map(a => a.category))];
  
  const filteredArticles = selectedCategory === 'all' 
    ? allArticles 
    : getBlogByCategory(selectedCategory);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Phoneo Blog</h1>
        <p>Practical guides on mobile shop software, billing, inventory, and business management</p>
      </div>

      <div className="blog-container">
        {/* Sidebar with Filters */}
        <aside className="blog-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <ul>
              {allArticles.slice(0, 5).map((article) => (
                <li key={article.id}>
                  <a href={`/blog/${article.slug}`}>{article.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search posts..."
              className="search-input"
            />
          </div>
        </aside>

        {/* Main Blog Grid */}
        <main className="blog-main">
          <div className="blog-grid">
            {filteredArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-results">
              <p>No articles found in this category.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}