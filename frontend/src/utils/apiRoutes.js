const API_BASE = '/api';

export const apiRoutes = {
  auth: {
    login: `${API_BASE}/auth/login`,
    signup: `${API_BASE}/auth/signup`,
    forgotPassword: `${API_BASE}/auth/forgot-password`,
    resetPassword: `${API_BASE}/auth/reset-password`,
    profile: `${API_BASE}/auth/profile`,
  },
  doctor: {
    dashboard: `${API_BASE}/doctor/dashboard`,
    patientsToday: `${API_BASE}/doctor/patients/today`,
    prescription: `${API_BASE}/doctor/prescriptions`,
    uploadDocs: `${API_BASE}/doctor/uploads`,
  },
  patient: {
    dashboard: `${API_BASE}/patient/dashboard`,
    prescriptions: `${API_BASE}/patient/prescriptions`,
    appointments: `${API_BASE}/patient/appointments`,
    searchDoctors: `${API_BASE}/doctors/search`,
    uploadDocs: `${API_BASE}/patient/uploads`,
  },
  admin: {
    dashboard: `${API_BASE}/admin/dashboard`,
    manageDoctors: `${API_BASE}/admin/doctors`,
    managePatients: `${API_BASE}/admin/patients`,
    systemLogs: `${API_BASE}/admin/logs`,
  },
};

export default apiRoutes;