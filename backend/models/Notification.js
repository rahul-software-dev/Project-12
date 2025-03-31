const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["Reminder", "Alert", "General"], required: true },
    status: { type: String, enum: ["Sent", "Pending"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", notificationSchema);