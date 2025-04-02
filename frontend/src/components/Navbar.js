import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Import CSS Module

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Smart Tutor</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navItem}>Home</Link>
        </li>
        <li>
          <Link to="/login" className={styles.navItem}>Login</Link>
        </li>
        <li>
          <Link to="/register" className={styles.navItem}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
