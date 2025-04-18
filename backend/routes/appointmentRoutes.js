const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// Book appointment
router.post("/book", appointmentController.bookAppointment);

// Get all appointments for a doctor
router.get("/doctor/:doctorId", appointmentController.getAppointmentsForDoctor);

// Get all appointments for a patient
router.get("/patient/:patientId", appointmentController.getAppointmentsForPatient);

// Cancel an appointment
router.delete("/cancel/:appointmentId", appointmentController.cancelAppointment);

module.exports = router;