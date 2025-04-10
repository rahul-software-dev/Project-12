import React from 'react';
import DailyPatientList from '../../components/doctor/DailyPatientList';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const DailyPatientsPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="doctor" />
      <main className="dashboard-content">
        <h2>Today's Patients</h2>
        <DailyPatientList />
      </main>
    </>
  );
};

export default DailyPatientsPage;