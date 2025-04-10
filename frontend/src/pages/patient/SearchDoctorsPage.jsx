import React from 'react';
import DoctorList from '../../components/patient/DoctorList';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const SearchDoctorsPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="patient" />
      <main className="dashboard-content">
        <h2>Find a Doctor</h2>
        <DoctorList />
      </main>
    </>
  );
};

export default SearchDoctorsPage;