import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setMessage("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Login successful") {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", data.name);
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("userEmail", formData.email);
            localStorage.setItem("isAdmin", formData.email === "admin@versevault.com" ? "true" : "false");
            setMessage("Login successful!");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            setMessage(data.message);
          }
        })
        .catch((err) => {
          console.error("Login error:", err);
          setMessage("Login failed. Please try again.");
        });
    }
  };

  return (
    <div className="login-container">
      {/* Ripple background */}
      <div className="circle xxlarge shade5"></div>
      <div className="circle xlarge shade4"></div>
      <div className="circle large shade3"></div>
      <div className="circle medium shade2"></div>
      <div className="circle small shade1"></div>

      <div className="login-card">
        <h2>Login</h2>
        {message && (
          <p className={message.includes("successful") ? "success-msg" : "error-msg"}>
            {message}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="login-button">Login</button>

          <p className="redirect-signup">
            Don't have an account? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
