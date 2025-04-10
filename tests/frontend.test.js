import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../frontend/src/components/authentication/LoginForm';
import SignupForm from '../frontend/src/components/authentication/SignupForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('🎨 Frontend Component Tests', () => {
  describe('🔐 LoginForm Component', () => {
    beforeEach(() => {
      render(
        <Router>
          <LoginForm />
        </Router>
      );
    });

    it('renders login fields and button', () => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    it('shows validation error on empty submit', async () => {
      fireEvent.click(screen.getByRole('button', { name: /login/i }));
      expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    });

    it('accepts user input', () => {
      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
      expect(emailInput.value).toBe('user@example.com');
    });
  });

  describe('📝 SignupForm Component', () => {
    it('renders and accepts input', () => {
      render(
        <Router>
          <SignupForm />
        </Router>
      );
      const emailField = screen.getByLabelText(/email/i);
      fireEvent.change(emailField, { target: { value: 'test@demo.com' } });
      expect(emailField.value).toBe('test@demo.com');
    });
  });

  // Future: Add tests for Navbar, Dashboard, Prescriptions, etc. sochna hai.
});