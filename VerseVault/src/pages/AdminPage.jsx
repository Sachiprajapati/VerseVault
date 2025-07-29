import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminPage.css'; 

const AdminPage = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    // Redirect non-admin users
    if (userEmail !== "admin@versevault.com") {
      alert("Access denied. You are not authorized to view this page.");
      navigate("/");
    }
  }, [userEmail, navigate]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/unapproved-poems")
      .then((res) => res.json())
      .then((data) => {
        setPoems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch poems", err);
        setLoading(false);
      });
  }, []);

  const handleAction = (poemId, approve) => {
    fetch(`http://localhost:5000/api/admin/poems/${poemId}/approve`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: approve }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setPoems((prev) => prev.filter((poem) => poem._id !== poemId));
      })
      .catch((err) => {
        console.error("Approval error:", err);
        setMessage("Action failed");
      });
  };

  return (
    <div className="admin-page-container">
      <h2>Admin - Approve/Reject Poems</h2>

      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : poems.length === 0 ? (
        <p className="empty-message">No pending poems.</p>
      ) : (
        poems.map((poem) => (
          <div key={poem._id} className="poem-card">
            <h4>{poem.title}</h4>
            <p><strong>Author:</strong> {poem.author}</p>
            <p><strong>Category:</strong> {poem.category}</p>
            <p>{poem.content}</p>
            <div className="button-group">
              <button onClick={() => handleAction(poem._id, true)}>Approve</button>
              <button onClick={() => handleAction(poem._id, false)}>Reject</button>
            </div>
          </div>
        ))
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AdminPage;