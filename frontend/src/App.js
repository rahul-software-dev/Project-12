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
import HomePage from './pages/common/HomePage';
import AboutPage from './pages/common/AboutPage';
import ContactPage from './pages/common/ContactPage';
import NotFoundPage from './pages/common/NotFoundPage';
import ProfilePage from './pages/common/ProfilePage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Doctor Pages
import DoctorDashboardPage from './pages/doctor/DoctorDashboardPage';
import DailyPatientsPage from './pages/doctor/DailyPatientsPage';
import ViewPatientPage from './pages/doctor/ViewPatientPage';
import CreatePrescriptionPage from './pages/doctor/CreatePrescriptionPage';
import UploadDocumentsPage from './pages/doctor/UploadDocumentsPage';

// Patient Pages
import PatientDashboardPage from './pages/patient/PatientDashboardPage';
import ViewPrescriptionPage from './pages/patient/ViewPrescriptionPage';
import BookAppointmentPage from './pages/patient/BookAppointmentPage';
import SearchDoctorsPage from './pages/patient/SearchDoctorsPage';
import UploadHealthDocsPage from './pages/patient/UploadHealthDocsPage';

// Admin Pages
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageDoctorsPage from './pages/admin/ManageDoctorsPage';
import ManagePatientsPage from './pages/admin/ManagePatientsPage';
import SystemLogsPage from './pages/admin/SystemLogsPage';

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