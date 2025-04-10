import React from 'react';
import BookAppointmentForm from '../../components/patient/BookAppointmentForm';
import Sidebar from '../../components/common/Sidebar';
import Navbar from '../../components/common/Navbar';

const BookAppointmentPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar role="patient" />
      <main className="dashboard-content">
        <h2>Book an Appointment</h2>
        <BookAppointmentForm />
      </main>
    </>
  );
};

export default BookAppointmentPage;