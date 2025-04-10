import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <h1>About Us</h1>
        <p>
          We are building a next-gen digital healthcare platform to connect patients, doctors, and healthcare providers securely.
        </p>
        <p>
          Our mission is to simplify access to quality healthcare and empower users to take control of their health data.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;