import React, { useEffect, useState } from "react";
import EditProfileForm from "./EditProfileForm";

const UserProfile = ({ userId, fetchProfile, updateProfile }) => {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userData = await fetchProfile(userId);
                setUser(userData);
            } catch (err) {
                setError("Failed to load user profile.");
            }
        };

        loadUser();
    }, [userId, fetchProfile]);

    const handleUpdate = async (updatedData) => {
        try {
            const updated = await updateProfile(userId, updatedData);
            setUser(updated);
            setEditing(false);
        } catch (err) {
            setError("Profile update failed.");
        }
    };

    if (!user) return <p>Loading profile...</p>;

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {error && <p className="error">{error}</p>}
            {!editing ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <button onClick={() => setEditing(true)}>Edit Profile</button>
                </>
            ) : (
                <EditProfileForm user={user} onUpdate={handleUpdate} onCancel={() => setEditing(false)} />
            )}
        </div>
    );
};

export default UserProfile;