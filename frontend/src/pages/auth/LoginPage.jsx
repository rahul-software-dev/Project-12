import React from 'react';
import LoginForm from '../../components/authentication/LoginForm';
import './AuthPages.css'; // Optional: Shared auth page styles

const LoginPage = () => {
  return (
    <div className="auth-page-container">
      <h2>Login to Your Account</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;