import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <section className="hero">
          <h1>Welcome to the Digital Healthcare System</h1>
          <p>Secure, efficient, and accessible healthcare services at your fingertips.</p>
        </section>
        <section className="features">
          <ul>
            <li>🩺 Easy Doctor Appointments</li>
            <li>💊 Digital Prescriptions</li>
            <li>📁 Secure Medical Records</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;