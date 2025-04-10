import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            return setError("All fields are required.");
        }

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match.");
        }

        try {
            await onSignup(formData);
        } catch (err) {
            setError(err.message || "Signup failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <h2>Sign Up</h2>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            {error && <p className="error">{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default SignupForm;