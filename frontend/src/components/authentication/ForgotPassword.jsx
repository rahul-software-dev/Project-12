import React, { useState } from "react";

const ForgotPassword = ({ onRequestReset }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!email) return setError("Email is required.");

        try {
            await onRequestReset(email);
            setMessage("Reset link sent to your email.");
        } catch (err) {
            setError(err.message || "Failed to send reset link.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {error && <p className="error">{error}</p>}
            {message && <p className="success">{message}</p>}
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;