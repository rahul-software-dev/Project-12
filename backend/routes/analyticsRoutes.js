const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

// Get system-wide analytics
router.get("/overview", analyticsController.getSystemAnalytics);

// Get analytics for a specific doctor
router.get("/doctor/:doctorId", analyticsController.getDoctorAnalytics);

// Get analytics for a specific patient
router.get("/patient/:patientId", analyticsController.getPatientAnalytics);

// Get prescription trends
router.get("/prescriptions/trends", analyticsController.getPrescriptionTrends);

module.exports = router;