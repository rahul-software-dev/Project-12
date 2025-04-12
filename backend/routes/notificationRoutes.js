const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
// Route to send a notification to a patient
router.post("/send", notificationController.sendNotification);

// Route to get all notifications for a specific patient
router.get("/patient/:patientId", notificationController.getNotificationsForPatient);

// Route to mark a specific notification as read
router.put("/:notificationId/read", notificationController.markNotificationAsRead);

module.exports = router;