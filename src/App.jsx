import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PhoneHub from "./components/PhoneHub";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ComparePage from "./pages/ComparePage";
import CompareDetailPage from "./pages/CompareDetailPage";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />

          <Route path="/compare" element={<ComparePage />} />
          <Route path="/compare/:id" element={<CompareDetailPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <PhoneHub />
    </div>
  );
}

export default App;