import React, { useState, useEffect } from "react";
import "./submit.css";
import { useNavigate } from "react-router-dom";

const SubmitPoem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please login to submit a poem.");
      navigate("/login");
    }
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    tags: "",
    termsAccepted: false,
  });

  const [showPreview, setShowPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    { value: "", label: "Select Category" },
    { value: "love", label: "Love & Romance" },
    { value: "nature", label: "Nature & Seasons" },
    { value: "life", label: "Life & Philosophy" },
    { value: "sadness", label: "Melancholy & Loss" },
    { value: "motivation", label: "Inspiration & Hope" },
    { value: "haiku", label: "Haiku" },
    { value: "freeverse", label: "Free Verse" },
    { value: "sonnet", label: "Sonnet" },
    { value: "spiritual", label: "Spiritual & Faith" },
    { value: "family", label: "Family & Friends" },
    { value: "memories", label: "Memories & Nostalgia" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Please provide a title for your poem";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Please write your poem";
    } else if (formData.content.trim().length < 10) {
      newErrors.content = "Your poem seems too short";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.termsAccepted) {
      newErrors.terms = "Please confirm this is your original work";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userId = localStorage.getItem("userId");
      fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId }), 
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          setSubmitted(true);

          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              title: "",
              author: "",
              category: "",
              content: "",
              tags: "",
              termsAccepted: false,
            });
            setShowPreview(false);
          }, 3000);
        })
        .catch((err) => {
          console.error("Poem submission failed:", err);
          alert("Poem submission failed");
        });
    }
  };

  const handlePreview = () => {
    if (formData.content.trim()) {
      setShowPreview(!showPreview);
    }
  };

  if (submitted) {
    return (
      <div className="submit-container">
        <div className="success-message">
          <div className="success-icon"></div>
          <h2>Thank You!</h2>
          <p>Your poem has been submitted successfully.</p>
          <p>It will be reviewed and published soon.</p>
          <div className="loading-dots"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="submit-container">
      <div className="submit-header">
        <h1>Submit Your Poem</h1>
        <p className="disclaimer">
          💡{" "}
          <em>
            Please ensure your poem is original. Offensive or plagiarized
            content will not be published.
          </em>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="submit-form">
        <div className="form-group">
          <label htmlFor="title">Poem Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Give your poem a beautiful title..."
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Your name or pen name (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={errors.category ? "error" : ""}
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="error-message">{errors.category}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="content">Your Poem *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows="12"
            placeholder="Write your poem here...&#10;&#10;Let your words flow like ink on parchment,&#10;Each line a brushstroke of your soul..."
            className={errors.content ? "error" : ""}
          ></textarea>
          {errors.content && (
            <span className="error-message">{errors.content}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="rain, hope, memories, sunset (separate with commas)"
          />
          <small>Help others discover your poem with relevant tags</small>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>I confirm this is my original
            work and I agree to the terms of submission *
          </label>
          {errors.terms && (
            <span className="error-message">{errors.terms}</span>
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={handlePreview}
            className="preview-btn"
            disabled={!formData.content.trim()}
          >
            {showPreview ? "Hide Preview" : "Preview Poem"}
          </button>
          <button type="submit" className="submit-btn">
            Submit Poem ✨
          </button>
        </div>
      </form>

      {showPreview && formData.content.trim() && (
        <div className="preview-section">
          <h3>Preview</h3>
          <div className="poem-preview">
            <h4>{formData.title || "Untitled"}</h4>
            {formData.author && <p className="author">by {formData.author}</p>}
            <div className="poem-content">
              {formData.content.split("\n").map((line, index) => (
                <p key={index}>{line || "\u00A0"}</p>
              ))}
            </div>
            {formData.tags && (
              <div className="tags">
                {formData.tags.split(",").map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitPoem;
