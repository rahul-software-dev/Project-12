const Prescription = require("../models/Prescription");

// Get total prescriptions count
exports.getTotalPrescriptions = async (req, res) => {
    try {
        const count = await Prescription.countDocuments();
        res.status(200).json({ totalPrescriptions: count });
    } catch (error) {
        res.status(500).json({ message: "Error fetching total prescriptions", error: error.message });
    }
};