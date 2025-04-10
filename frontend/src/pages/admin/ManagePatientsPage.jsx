import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';
import Loader from '../../components/common/Loader';

const ManagePatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/admin/patients');
        const data = await response.json();
        setPatients(data);
      } catch (err) {
        console.error('Failed to fetch patients:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar role="admin" />
      <main className="dashboard-content">
        <h2>Manage Patients</h2>
        {loading ? <Loader /> : (
          <ul>
            {patients.map((pat) => (
              <li key={pat._id}>
                {pat.name} - {pat.email}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default ManagePatientsPage;