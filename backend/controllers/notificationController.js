// backend/controllers/notificationController.js

// Simulated in-memory notifications list (replace with DB logic later)
let notifications = [];

const sendNotification = (req, res) => {
  const { recipientId, message } = req.body;

  if (!recipientId || !message) {
    return res.status(400).json({ message: "Recipient ID and message are required." });
  }

  const newNotification = {
    id: notifications.length + 1,
    recipientId,
    message,
    read: false,
    timestamp: new Date()
  };

  notifications.push(newNotification);
  res.status(200).json({ message: "Notification sent successfully", data: newNotification });
};

const getNotificationsForPatient = (req, res) => {
  const { patientId } = req.params;
  const patientNotifications = notifications.filter(n => n.recipientId == patientId);
  res.status(200).json({ notifications: patientNotifications });
};

const markNotificationAsRead = (req, res) => {
  const { notificationId } = req.params;
  const notification = notifications.find(n => n.id == notificationId);
  if (!notification) {
    return res.status(404).json({ message: "Notification not found" });
  }

  notification.read = true;
  res.status(200).json({ message: "Notification marked as read", data: notification });
};

module.exports = {
  sendNotification,
  getNotificationsForPatient,
  markNotificationAsRead
};