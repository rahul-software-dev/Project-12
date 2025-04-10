import React from 'react';
import { useParams } from 'react-router-dom';
import PatientCard from '../../components/doctor/PatientCard';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const ViewPatientPage = () => {
  const { patientId } = useParams();

  return (
    <>
      <Navbar />
      <Sidebar role="doctor" />
      <main className="dashboard-content">
        <h2>Patient Details</h2>
        <PatientCard patientId={patientId} />
      </main>
    </>
  );
};

export default ViewPatientPage;