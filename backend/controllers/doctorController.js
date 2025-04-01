const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

// Register a new doctor
exports.registerDoctor = async (req, res) => {
    try {
        const { doctorId, name, specialization } = req.body;

        if (!doctorId || !name || !specialization) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingDoctor = await Doctor.findOne({ doctorId });
        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor ID already exists." });
        }

        const newDoctor = new Doctor({ doctorId, name, specialization, dailyPatients: [] });
        await newDoctor.save();

        res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Get doctor details by ID
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ doctorId: req.params.doctorId }).select("-__v");
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctor details", error: error.message });
    }
};

// Get doctor's daily patient list
exports.getDailyPatients = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ doctorId: req.params.doctorId })
            .populate("dailyPatients", "name age gender")
            .select("name specialization dailyPatients");

        if (!doctor) return res.status(404).json({ message: "Doctor not found." });

        res.status(200).json({ doctor, patients: doctor.dailyPatients });
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient list", error: error.message });
    }
};

// Add a patient to a doctor's daily list
exports.addPatientToDailyList = async (req, res) => {
    try {
        const { doctorId, patientId } = req.params;

        const doctor = await Doctor.findOne({ doctorId });
        if (!doctor) return res.status(404).json({ message: "Doctor not found." });

        const patient = await Patient.findOne({ _id: patientId });
        if (!patient) return res.status(404).json({ message: "Patient not found." });

        if (!doctor.dailyPatients.includes(patientId)) {
            doctor.dailyPatients.push(patientId);
            await doctor.save();
        }

        res.status(200).json({ message: "Patient added to doctor's daily list", doctor });
    } catch (error) {
        res.status(500).json({ message: "Error adding patient", error: error.message });
    }
};

// Remove a patient from a doctor's daily list
exports.removePatientFromDailyList = async (req, res) => {
    try {
        const { doctorId, patientId } = req.params;

        const doctor = await Doctor.findOne({ doctorId });
        if (!doctor) return res.status(404).json({ message: "Doctor not found." });

        doctor.dailyPatients = doctor.dailyPatients.filter(id => id.toString() !== patientId);
        await doctor.save();

        res.status(200).json({ message: "Patient removed from doctor's list", doctor });
    } catch (error) {
        res.status(500).json({ message: "Error removing patient", error: error.message });
    }
};