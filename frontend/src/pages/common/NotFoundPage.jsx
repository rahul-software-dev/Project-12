import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <main className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
        <Link to="/">Go back home</Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;