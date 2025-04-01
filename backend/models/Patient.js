const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    patientId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0, max: 120 },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    contactNumber: { type: String, required: true, match: [/^\d{10}$/, "Invalid phone number"] },
    email: { type: String, trim: true, lowercase: true, match: [/.+@.+\..+/, "Invalid email"] },
    medicalHistory: [{ type: String }], // Array of previous conditions
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Patient", patientSchema);