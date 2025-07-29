import React, { useEffect, useState } from "react";
import './MyPoems.css';


const MyPoems = () => {
  const userId = localStorage.getItem("userId");
  const [poems, setPoems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setError("User not logged in. Please log in again.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/api/poems/user/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch poems");
        }
        return res.json();
      })
      .then((data) => {
        setPoems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching poems:", err);
        setError("Something went wrong while fetching your poems.");
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="my-poems-container">
      <h2>My Submitted Poems</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && poems.length === 0 && (
        <p className="no-poems">You haven't submitted any poems yet.</p>
      )}
      {!loading && !error && poems.length > 0 && (
        <ul className="poem-list">
          {poems.map((poem) => (
            <li key={poem._id} className="poem-item">
              <h4>{poem.title}</h4>
              <p><strong>Category:</strong> {poem.category}</p>
              <p><strong>Tags:</strong> {poem.tags.join(", ")}</p>
              <p>{poem.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPoems;
