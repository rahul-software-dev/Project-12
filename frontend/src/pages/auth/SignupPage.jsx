import React from 'react';
import SignupForm from '../../components/authentication/SignupForm';
import './AuthPages.css';

const SignupPage = () => {
  return (
    <div className="auth-page-container">
      <h2>Create a New Account</h2>
      <SignupForm />
    </div>
  );
};

export default SignupPage;