import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';
import Loader from '../../components/common/Loader';

const ManageDoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/admin/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        console.error('Failed to fetch doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar role="admin" />
      <main className="dashboard-content">
        <h2>Manage Doctors</h2>
        {loading ? <Loader /> : (
          <ul>
            {doctors.map((doc) => (
              <li key={doc._id}>
                {doc.name} ({doc.specialization}) - {doc.email}
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default ManageDoctorsPage;