const Patient = require("../models/Patient");
const Prescription = require("../models/Prescription");
const User = require("../models/User"); // Assuming User model exists for the users table

// Register a new patient
exports.registerPatient = async (req, res) => {
    try {
        const { name, age, gender, blood_group, contactNumber, userId } = req.body;

        if (!name || !age || !gender || !blood_group || !contactNumber || !userId) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the user already exists in the users table
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: "User not found." });
        }

        // Check if a patient is already registered for the user
        const existingPatient = await Patient.findOne({ user_id: userId });
        if (existingPatient) {
            return res.status(400).json({ message: "Patient already exists for this user." });
        }

        // Create a new patient
        const newPatient = new Patient({
            user_id: userId,
            age,
            gender,
            blood_group,
            contact_number: contactNumber, // Ensure the contact number is handled correctly
        });

        await newPatient.save();

        res.status(201).json({ message: "Patient registered successfully", patient: newPatient });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get patient details by ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findOne({ user_id: req.params.patientId }).select("-__v");
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient details", error: error.message });
    }
};

// Get prescription history of a patient
exports.getPatientPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find({ patient_id: req.params.patientId })
            .select("-__v")
            .populate("doctor_id", "name specialization") // Optional: Include doctor details
            .populate("patient_id", "name age gender blood_group"); // Optional: Include patient details

        if (!prescriptions.length) {
            return res.status(404).json({ message: "No prescriptions found for this patient." });
        }

        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching prescriptions", error: error.message });
    }
};