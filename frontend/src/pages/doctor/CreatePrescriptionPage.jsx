import React from 'react';
import PrescriptionEditor from '../../components/doctor/PrescriptionEditor';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const CreatePrescriptionPage = () => {
  const { patientId } = useParams();

  return (
    <>
      <Navbar />
      <Sidebar role="doctor" />
      <main className="dashboard-content">
        <h2>Create Prescription</h2>
        <PrescriptionEditor patientId={patientId} />
      </main>
    </>
  );
};

export default CreatePrescriptionPage;