import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      const storedName = localStorage.getItem("userName");
      const isAdmin = localStorage.getItem("isAdmin");
      if (isLoggedIn === "true" && storedName) {
        setUser({
          name: storedName,
          avatar: "👤",
          isAdmin: isAdmin === "true",
        });
      }
    };

    updateUser();

    window.addEventListener("userNameUpdated", updateUser);

    return () => window.removeEventListener("userNameUpdated", updateUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setUser(null);
    setShowDropdown(false);
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <h1>VerseVault</h1>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/poems">Poems</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {user?.isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/submit" className="btn-submit">
              Submit
            </Link>
          </li>

          {!user ? (
            <li>
              <Link to="/login" className="btn-login">
                Login
              </Link>
            </li>
          ) : (
            <li className="user-profile">
              <div
                className="user-info"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="user-avatar">{user.avatar}</div>
                <span className="user-name">Welcome, {user.name}</span>
                <svg
                  className={`dropdown-arrow ${showDropdown ? "open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              {showDropdown && (
                <div className="user-dropdown">
                  <Link to="/profile" onClick={() => setShowDropdown(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 9a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z"
                        fill="currentColor"
                      />
                    </svg>
                    My Profile
                  </Link>
                  <Link to="/my-poems" onClick={() => setShowDropdown(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 3v1h6V5H5zm0 2v1h6V7H5zm0 2v1h4V9H5z"
                        fill="currentColor"
                      />
                    </svg>
                    My Poems
                  </Link>
                  <Link to="/settings" onClick={() => setShowDropdown(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                        fill="currentColor"
                      />
                      <path d="..." fill="currentColor" />
                    </svg>
                    Settings
                  </Link>
                  <hr />
                  <button onClick={handleLogout} className="logout-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path
                        d="M6 2a1 1 0 0 0-1 1v1H4V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5 8.5L8 11l-.5-.5 2-2H2V7h7.5l-2-2L8 4.5l2.5 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
