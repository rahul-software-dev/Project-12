import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context Providers
import GlobalStateProvider from './context/GlobalStateProvider';

// Common Layout Components
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Notification from './components/common/Notification';
import Loader from './components/common/Loader';

// Pages
import HomePage from '../components/pages/common/HomePage';
import AboutPage from '../components/pages/common/AboutPage';
import ContactPage from '../components/pages/common/ContactPage';
import NotFoundPage from '../components/pages/common/NotFoundPage';
import ProfilePage from '../components/pages/common/ProfilePage';

// Auth Pages
import LoginPage from '../components/pages/auth/LoginPage';
import SignupPage from '../components/pages/auth/SignupPage';
import ForgotPasswordPage from '../components/pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../components/pages/auth/ResetPasswordPage';

// Doctor Pages
import DoctorDashboardPage from '../components/pages/doctor/DoctorDashboardPage';
import DailyPatientsPage from '../components/pages/doctor/DailyPatientsPage';
import ViewPatientPage from '../components/pages/doctor/ViewPatientPage';
import CreatePrescriptionPage from '../components/pages/doctor/CreatePrescriptionPage';
import UploadDocumentsPage from '../components/pages/doctor/UploadDocumentsPage';

// Patient Pages
import PatientDashboardPage from '../components/pages/patient/PatientDashboardPage';
import ViewPrescriptionPage from '../components/pages/patient/ViewPrescriptionPage';
import BookAppointmentPage from '../components/pages/patient/BookAppointmentPage';
import SearchDoctorsPage from '../components/pages/patient/SearchDoctorsPage';
import UploadHealthDocsPage from '../components/pages/patient/UploadHealthDocsPage';

// Admin Pages
import AdminDashboardPage from '../components/pages/admin/AdminDashboardPage';
import ManageDoctorsPage from '../components/pages/admin/ManageDoctorsPage';
import ManagePatientsPage from '../components/pages/admin/ManagePatientsPage';
import SystemLogsPage from '../components/pages/admin/SystemLogsPage';

// Protected Routes
import ProtectedRoute from './components/common/ProtectedRoute';

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <Navbar />
        <Sidebar />

        <main className="main-content">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Authentication */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

            {/* Profile (Protected) */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            {/* Doctor Routes (Protected) */}
            <Route
              path="/doctor/dashboard"
              element={
                <ProtectedRoute role="doctor">
                  <DoctorDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/daily-patients"
              element={
                <ProtectedRoute role="doctor">
                  <DailyPatientsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/view-patient/:patientId"
              element={
                <ProtectedRoute role="doctor">
                  <ViewPatientPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/create-prescription"
              element={
                <ProtectedRoute role="doctor">
                  <CreatePrescriptionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/upload-documents"
              element={
                <ProtectedRoute role="doctor">
                  <UploadDocumentsPage />
                </ProtectedRoute>
              }
            />

            {/* Patient Routes (Protected) */}
            <Route
              path="/patient/dashboard"
              element={
                <ProtectedRoute role="patient">
                  <PatientDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/view-prescription/:id"
              element={
                <ProtectedRoute role="patient">
                  <ViewPrescriptionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/book-appointment"
              element={
                <ProtectedRoute role="patient">
                  <BookAppointmentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/search-doctors"
              element={
                <ProtectedRoute role="patient">
                  <SearchDoctorsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patient/upload-docs"
              element={
                <ProtectedRoute role="patient">
                  <UploadHealthDocsPage />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes (Protected) */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-doctors"
              element={
                <ProtectedRoute role="admin">
                  <ManageDoctorsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-patients"
              element={
                <ProtectedRoute role="admin">
                  <ManagePatientsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/system-logs"
              element={
                <ProtectedRoute role="admin">
                  <SystemLogsPage />
                </ProtectedRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <Notification />
        <Loader />
      </Router>
    </GlobalStateProvider>
  );
};

export default App;