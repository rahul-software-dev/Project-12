import React from 'react';
import UserProfile from '../../components/profile/UserProfile';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="dashboard-content">
        <h2>Your Profile</h2>
        <UserProfile />
      </main>
    </>
  );
};

export default ProfilePage;