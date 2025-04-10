import React from 'react';
import PatientDashboard from '../../components/patient/PatientDashboard';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const PatientDashboardPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="patient" />
      <main className="dashboard-content">
        <PatientDashboard />
      </main>
    </>
  );
};

export default PatientDashboardPage;