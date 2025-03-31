const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Send a notification to a patient
router.post("/send", notificationController.sendNotification);

// Get all notifications for a patient
router.get("/patient/:patientId", notificationController.getNotificationsForPatient);

// Mark notification as read
router.put("/:notificationId/read", notificationController.markNotificationAsRead);

module.exports = router;