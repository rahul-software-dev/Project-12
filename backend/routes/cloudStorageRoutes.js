const express = require("express");
const router = express.Router();
const cloudStorageController = require("../controllers/cloudStorageController");

// Upload prescription to cloud storage
router.post("/upload", cloudStorageController.uploadPrescription);

// Retrieve prescription from cloud storage
router.get("/retrieve/:prescriptionId", cloudStorageController.retrievePrescription);

// Delete a prescription from cloud storage
router.delete("/delete/:prescriptionId", cloudStorageController.deletePrescription);

module.exports = router;