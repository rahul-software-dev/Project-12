import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!credentials.email || !credentials.password) {
            return setError("Please fill in all fields.");
        }

        try {
            await onLogin(credentials); // passed as prop
        } catch (err) {
            setError(err.message || "Login failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;