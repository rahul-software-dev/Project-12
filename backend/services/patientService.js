const Patient = require("../models/Patient");
const Prescription = require("../models/Prescription");

class PatientService {
  async registerPatient(patientData) {
    try {
      return await Patient.create(patientData);
    } catch (error) {
      throw new Error("Error registering patient: " + error.message);
    }
  }

  async getPatientById(patientId) {
    try {
      return await Patient.findById(patientId);
    } catch (error) {
      throw new Error("Patient not found: " + error.message);
    }
  }

  async getPrescriptions(patientId) {
    try {
      return await Prescription.find({ patientId });
    } catch (error) {
      throw new Error("Error fetching prescriptions: " + error.message);
    }
  }
}

module.exports = new PatientService();