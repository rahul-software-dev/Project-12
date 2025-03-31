const Patient = require("../models/Patient");
const Prescription = require("../models/Prescription");

// Register a new patient
exports.registerPatient = async (req, res) => {
    try {
        const { patientId, name, age, gender } = req.body;

        if (!patientId || !name || !age || !gender) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingPatient = await Patient.findOne({ patientId });
        if (existingPatient) {
            return res.status(400).json({ message: "Patient ID already exists." });
        }

        const newPatient = new Patient({ patientId, name, age, gender });
        await newPatient.save();

        res.status(201).json({ message: "Patient registered successfully", patient: newPatient });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get patient details by ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findOne({ patientId: req.params.patientId }).select("-__v");
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient details", error: error.message });
    }
};

// Get prescription history of a patient
exports.getPatientPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find({ patientId: req.params.patientId }).select("-__v");
        if (!prescriptions.length) return res.status(404).json({ message: "No prescriptions found for this patient." });

        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching prescriptions", error: error.message });
    }
};