import React, { useState, useEffect, useMemo } from "react";
import PoemCard from "./PoemCard";
import "./Poems.css";

const Poems = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Love",
    "Nature",
    "Motivation",
    "Life",
    "Haiku",
    "Sad",
  ];  

  useEffect(() => {
    fetch("http://localhost:5000/api/poems")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load poems");
        }
        return res.json();
      })
      .then((data) => {
        setPoems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Unable to load poems. Please try again later.");
        setLoading(false);
      });
  }, []);

  const filteredPoems = useMemo(() => {
    return poems.filter((poem) => {
      const matchesSearch =
        poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || poem.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [poems, searchTerm, selectedCategory]);

  return (
    <div className="poems-container">
      <div className="poems-header">
        <h1 className="poems-title">Our Poetry Collection!</h1>
        <p className="poems-subtitle">
          Discover beautiful verses that touch the soul
        </p>
        <button className="submit-poem-btn"> + Submit Your Poem</button>
      </div>

      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search poems by title, author, or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-tags">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`category-tag ${
                selectedCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading && <p>Loading poems...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="results-info">
        <p>
          Showing {filteredPoems.length} poem
          {filteredPoems.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="poems-grid">
        {filteredPoems.length > 0 ? (
          filteredPoems.map((poem) => <PoemCard key={poem._id} poem={poem} />)
        ) : (
          <p>No poems match your criteria.</p>
        )}
      </div>

      <div className="bottom-submit">
        <button className="submit-poem-btn secondary">Share Your Poetry</button>
      </div>
    </div>
  );
};

export default Poems;
