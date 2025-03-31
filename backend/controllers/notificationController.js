const NotificationService = require("../services/NotificationService");

// Send prescription update notification
exports.sendPrescriptionNotification = async (req, res) => {
    try {
        const { patientId, message } = req.body;
        if (!patientId || !message) {
            return res.status(400).json({ message: "Patient ID and message are required." });
        }

        await NotificationService.sendNotification(patientId, message);
        res.status(200).json({ message: "Notification sent successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error sending notification", error: error.message });
    }
};