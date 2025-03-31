const Prescription = require("../models/Prescription");

class PrescriptionService {
  async createPrescription(data) {
    try {
      return await Prescription.create(data);
    } catch (error) {
      throw new Error("Error creating prescription: " + error.message);
    }
  }

  async getPrescriptionByPatientId(patientId) {
    try {
      return await Prescription.findOne({ patientId });
    } catch (error) {
      throw new Error("Error retrieving prescription: " + error.message);
    }
  }

  async updatePrescription(prescriptionId, updatedData) {
    try {
      return await Prescription.findByIdAndUpdate(prescriptionId, updatedData, { new: true });
    } catch (error) {
      throw new Error("Error updating prescription: " + error.message);
    }
  }
}

module.exports = new PrescriptionService();