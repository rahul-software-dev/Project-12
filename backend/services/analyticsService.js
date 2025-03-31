const Prescription = require("../models/Prescription");
const Doctor = require("../models/Doctor");

class AnalyticsService {
  async getSystemAnalytics() {
    try {
      const totalPrescriptions = await Prescription.countDocuments();
      const totalDoctors = await Doctor.countDocuments();
      return { totalPrescriptions, totalDoctors };
    } catch (error) {
      throw new Error("Error fetching analytics: " + error.message);
    }
  }

  async getDoctorAnalytics(doctorId) {
    try {
      const prescriptions = await Prescription.countDocuments({ doctorId });
      return { doctorId, prescriptions };
    } catch (error) {
      throw new Error("Error fetching doctor analytics: " + error.message);
    }
  }
}

module.exports = new AnalyticsService();