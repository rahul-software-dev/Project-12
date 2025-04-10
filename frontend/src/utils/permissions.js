export const canViewPrescription = (user, prescription) =>
    user.role === 'doctor' || user.id === prescription.patientId;
  
  export const canEditProfile = (user, profileOwnerId) =>
    user.id === profileOwnerId || user.role === 'admin';