const Appointment = require("../models/Appointment");

class AppointmentService {
  async bookAppointment(appointmentData) {
    try {
      return await Appointment.create(appointmentData);
    } catch (error) {
      throw new Error("Error booking appointment: " + error.message);
    }
  }

  async getAppointmentsForDoctor(doctorId) {
    try {
      return await Appointment.find({ doctorId });
    } catch (error) {
      throw new Error("Error fetching appointments: " + error.message);
    }
  }

  async getAppointmentsForPatient(patientId) {
    try {
      return await Appointment.find({ patientId });
    } catch (error) {
      throw new Error("Error fetching patient appointments: " + error.message);
    }
  }
}

module.exports = new AppointmentService();