const Doctor = require("../models/Doctor");

class DoctorService {
  async registerDoctor(doctorData) {
    try {
      return await Doctor.create(doctorData);
    } catch (error) {
      throw new Error("Error registering doctor: " + error.message);
    }
  }

  async getDoctorById(doctorId) {
    try {
      return await Doctor.findById(doctorId);
    } catch (error) {
      throw new Error("Doctor not found: " + error.message);
    }
  }

  async getDailyPatients(doctorId) {
    try {
      const doctor = await Doctor.findById(doctorId).populate("dailyPatients");
      return doctor ? doctor.dailyPatients : [];
    } catch (error) {
      throw new Error("Error fetching daily patients: " + error.message);
    }
  }

  async addPatientToDailyList(doctorId, patientId) {
    try {
      return await Doctor.findByIdAndUpdate(doctorId, { $push: { dailyPatients: patientId } }, { new: true });
    } catch (error) {
      throw new Error("Error adding patient to daily list: " + error.message);
    }
  }
}

module.exports = new DoctorService();