import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"; // Import CSS Module

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Smart Tutor</h1>
      <p className={styles.description}>
        The best platform for managing your students efficiently.
      </p>

      <div>
        <Link to="/login">
          <button className={styles.button}>Login</button>
        </Link>
        <Link to="/register">
          <button className={styles.button}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
