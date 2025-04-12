const express = require("express");
const router = express.Router();
const cloudStorageController = require("../controllers/cloudStorageController");

// Ensure controller methods are defined before registering routes
if (
  typeof cloudStorageController.uploadPrescription === 'function' &&
  typeof cloudStorageController.retrievePrescription === 'function' &&
  typeof cloudStorageController.deletePrescription === 'function'
) {
  // Upload prescription to cloud storage
  router.post("/upload", cloudStorageController.uploadPrescription);

  // Retrieve prescription from cloud storage
  router.get("/retrieve/:prescriptionId", cloudStorageController.retrievePrescription);

  // Delete a prescription from cloud storage
  router.delete("/delete/:prescriptionId", cloudStorageController.deletePrescription);
} else {
  console.error("❌ One or more cloudStorageController methods are undefined. Please check cloudStorageController.js");
}

module.exports = router;