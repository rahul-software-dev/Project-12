const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const authMiddleware = require("../middlewares/authMiddleware");

// Register a new patient (Only Admins can register patients)
router.post("/register", patientController.registerPatient);

// Get patient details by ID (Any authenticated user can view the details)
router.get("/:patientId", authMiddleware(), patientController.getPatientById);

// Retrieve all prescriptions for a patient (Only the patient themselves or an admin can access this)
router.get("/:patientId/prescriptions", authMiddleware(), patientController.getPatientPrescriptions);

module.exports = router;