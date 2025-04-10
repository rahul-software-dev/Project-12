import React from 'react';
import { useParams } from 'react-router-dom';
import PrescriptionViewer from '../../components/patient/PrescriptionViewer';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const ViewPrescriptionPage = () => {
  const { patientId } = useParams();

  return (
    <>
      <Navbar />
      <Sidebar role="patient" />
      <main className="dashboard-content">
        <h2>My Prescription</h2>
        <PrescriptionViewer patientId={patientId} />
      </main>
    </>
  );
};

export default ViewPrescriptionPage;