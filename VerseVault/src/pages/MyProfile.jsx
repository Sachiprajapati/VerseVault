import React, { useState, useEffect } from "react";
import './MyProfile.css';

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return;

    fetch(`http://localhost:5000/api/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name || "");
        setEmail(data.email || "");
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, []);

  const handleSave = () => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:5000/api/user/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        localStorage.setItem("userName", data.name);
        window.dispatchEvent(new Event("userNameUpdated")); 
        setEditMode(false);
        window.location.reload();
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update name.");
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="field">
          <label>Name:</label>
          {editMode ? (
            <input value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <span>{name}</span>
          )}
        </div>

        <div className="field">
          <label>Email:</label>
          <span>{email}</span>
        </div>

        <div>
          <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit Name"}
          </button>
          {editMode && (
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
