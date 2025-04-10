import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const AdminDashboardPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="admin" />
      <main className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome, Admin! Use the sidebar to manage users, view logs, and oversee the system.</p>
      </main>
    </>
  );
};

export default AdminDashboardPage;