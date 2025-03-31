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

// Get doctor's daily patient list
exports.getDailyPatients = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ doctorId: req.params.doctorId })
            .populate("dailyPatients", "name age gender")
            .select("name specialization dailyPatients");

        if (!doctor) return res.status(404).json({ message: "Doctor not found." });

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient list", error: error.message });
    }
};