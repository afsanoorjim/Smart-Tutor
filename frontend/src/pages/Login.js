import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!username || !password) {
      setError("Email and Password are required");
      return;
    }

    setLoading(true); // Set loading to true
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("https://psychic-spork-wrrvqwjqg967f765-8000.app.github.dev/api/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store tokens in localStorage
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/"); // Redirect to homepage
        console.log("Login successful:", data);
      } else {
        setError(data.error || "Login failed!"); // Show error message
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button> {/* Show loading state */}
        </form>
        <p className={styles.link}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
