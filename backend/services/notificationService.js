const Notification = require("../models/Notification");

class NotificationService {
  async sendNotification(notificationData) {
    try {
      return await Notification.create(notificationData);
    } catch (error) {
      throw new Error("Error sending notification: " + error.message);
    }
  }

  async getNotificationsForPatient(patientId) {
    try {
      return await Notification.find({ patientId });
    } catch (error) {
      throw new Error("Error fetching notifications: " + error.message);
    }
  }

  async markNotificationAsRead(notificationId) {
    try {
      return await Notification.findByIdAndUpdate(notificationId, { isRead: true }, { new: true });
    } catch (error) {
      throw new Error("Error marking notification as read: " + error.message);
    }
  }
}

module.exports = new NotificationService();