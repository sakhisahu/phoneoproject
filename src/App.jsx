import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PhoneHub from './components/PhoneHub';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ComparePage from './pages/ComparePage';
import PricingPage from './pages/PricingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
        <PhoneHub />
      </div>
    </BrowserRouter>
  );
}

export default App;
