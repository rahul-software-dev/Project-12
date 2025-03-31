const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Register a new doctor
router.post("/register", doctorController.registerDoctor);

// Get doctor details by ID
router.get("/:doctorId", doctorController.getDoctorById);

// Get daily patient list for a doctor
router.get("/:doctorId/daily-patients", doctorController.getDailyPatients);

// Add a patient to the daily list
router.post("/:doctorId/add-patient/:patientId", doctorController.addPatientToDailyList);

module.exports = router;