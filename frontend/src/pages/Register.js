import React, { useState } from "react";
import styles from "../styles/Register.module.css"; // Importing the CSS module
import {useNavigate } from "react-router-dom";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://psychic-spork-wrrvqwjqg967f765-8000.app.github.dev/api/user/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Registration Successful:", data);
            navigate("/login");
        } else {
            console.error("Registration Failed:", data);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Register</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
