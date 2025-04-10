import React from 'react';
import ResetPassword from '../../components/authentication/ResetPassword';
import { useParams } from 'react-router-dom';
import './AuthPages.css';

const ResetPasswordPage = () => {
  const { token } = useParams();

  return (
    <div className="auth-page-container">
      <h2>Reset Your Password</h2>
      <ResetPassword token={token} />
    </div>
  );
};

export default ResetPasswordPage;