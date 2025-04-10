import React, { useState } from "react";

const ResetPassword = ({ onReset, token }) => {
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.password || !formData.confirmPassword) {
            return setError("All fields are required.");
        }

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match.");
        }

        try {
            await onReset(token, formData.password);
            setSuccess("Password reset successfully.");
        } catch (err) {
            setError(err.message || "Reset failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Reset Password</h2>
            <input type="password" name="password" placeholder="New Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm New Password" value={formData.confirmPassword} onChange={handleChange} required />
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;