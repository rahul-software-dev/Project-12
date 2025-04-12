const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");

// Register a new doctor (Only Admins can register doctors)
router.post("/register", authMiddleware('admin'), doctorController.registerDoctor);

// Get doctor details by ID (Any authenticated user can view the details)
router.get("/:doctorId", authMiddleware(), doctorController.getDoctorById);

// Get daily patient list for a doctor (Only the doctor themselves can access this)
router.get("/:doctorId/daily-patients", authMiddleware('doctor'), doctorController.getDailyPatients);

// Add a patient to the daily list (Only the doctor can add patients to their list)
router.post("/:doctorId/add-patient/:patientId", authMiddleware('doctor'), doctorController.addPatientToDailyList);

// Remove a patient from the daily list (Only the doctor can remove patients from their list)
router.delete("/:doctorId/remove-patient/:patientId", authMiddleware('doctor'), doctorController.removePatientFromDailyList);

module.exports = router;