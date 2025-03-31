const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Register a new patient
router.post("/register", patientController.registerPatient);

// Get patient details by ID
router.get("/:patientId", patientController.getPatientById);

// Retrieve all prescriptions for a patient
router.get("/:patientId/prescriptions", patientController.getPrescriptions);

module.exports = router;