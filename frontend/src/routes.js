const routes = {
    auth: {
      login: "/auth/login",
      signup: "/auth/signup",
      forgotPassword: "/auth/forgot-password",
      resetPassword: "/auth/reset-password",
    },
  
    common: {
      home: "/",
      about: "/about",
      contact: "/contact",
      profile: "/profile",
      notFound: "*",
    },
  
    doctor: {
      dashboard: "/doctor/dashboard",
      dailyPatients: "/doctor/daily-patients",
      viewPatient: (id = ":id") => `/doctor/patient/${id}`,
      createPrescription: (id = ":id") => `/doctor/prescribe/${id}`,
      uploadDocuments: "/doctor/upload-docs",
    },
  
    patient: {
      dashboard: "/patient/dashboard",
      viewPrescription: (id = ":id") => `/patient/prescription/${id}`,
      bookAppointment: "/patient/book-appointment",
      searchDoctors: "/patient/search-doctors",
      uploadDocuments: "/patient/upload-docs",
    },
  
    admin: {
      dashboard: "/admin/dashboard",
      manageDoctors: "/admin/manage-doctors",
      managePatients: "/admin/manage-patients",
      systemLogs: "/admin/system-logs",
    },
  };
  
  export default routes;