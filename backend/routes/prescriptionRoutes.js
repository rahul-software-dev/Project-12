const express = require("express");
const router = express.Router();
const prescriptionController = require("../controllers/prescriptionController");

// Create a new prescription
router.post("/create", prescriptionController.createPrescription);

// Get a prescription by patient ID
router.get("/:patientId", prescriptionController.getPrescriptionByPatientId);

// Update an existing prescription
router.put("/:prescriptionId/update", prescriptionController.updatePrescription);

module.exports = router;