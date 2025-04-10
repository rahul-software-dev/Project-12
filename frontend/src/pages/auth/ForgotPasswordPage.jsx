import React from 'react';
import ForgotPassword from '../../components/authentication/ForgotPassword';
import './AuthPages.css';

const ForgotPasswordPage = () => {
  return (
    <div className="auth-page-container">
      <h2>Forgot Password</h2>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;