const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    doctorId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    specialization: { type: String, required: true },
    contactNumber: { type: String, required: true, match: [/^\d{10}$/, "Invalid phone number"] },
    email: { type: String, trim: true, lowercase: true, match: [/.+@.+\..+/, "Invalid email"] },
    dailyPatients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Doctor", doctorSchema);