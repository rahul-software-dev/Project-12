import React, { useState } from "react";

const EditProfileForm = ({ user, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({
        name: user.name || "",
        age: user.age || "",
        gender: user.gender || ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.age || !formData.gender) {
            return setError("All fields are required.");
        }

        try {
            await onUpdate(formData);
        } catch (err) {
            setError("Update failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="edit-profile-form">
            <h3>Edit Profile</h3>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            {error && <p className="error">{error}</p>}
            <div className="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default EditProfileForm;