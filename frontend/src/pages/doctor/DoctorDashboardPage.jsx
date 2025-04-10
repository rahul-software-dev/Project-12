import React from 'react';
import DoctorDashboard from '../../components/doctor/DoctorDashboard';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const DoctorDashboardPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="doctor" />
      <main className="dashboard-content">
        <DoctorDashboard />
      </main>
    </>
  );
};

export default DoctorDashboardPage;