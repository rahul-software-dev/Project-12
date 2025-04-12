const cloudStorageService = require("../services/cloudStorageService");

// Upload prescription to cloud
exports.uploadPrescription = async (req, res) => {
    try {
        const { patientId, prescriptionFile } = req.body;
        if (!patientId || !prescriptionFile) {
            return res.status(400).json({ message: "Patient ID and file are required." });
        }

        const fileUrl = await cloudStorageService.uploadFile(prescriptionFile, patientId);
        res.status(200).json({ message: "File uploaded successfully", fileUrl });
    } catch (error) {
        res.status(500).json({ message: "Error uploading file", error: error.message });
    }
};

// Retrieve prescription from cloud
exports.retrievePrescription = async (req, res) => {
    try {
        const { prescriptionId } = req.params;

        const fileData = await cloudStorageService.getFile(prescriptionId);
        if (!fileData) {
            return res.status(404).json({ message: "Prescription not found." });
        }

        res.status(200).json({ message: "Prescription retrieved successfully", fileData });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving file", error: error.message });
    }
};

// Delete prescription from cloud
exports.deletePrescription = async (req, res) => {
    try {
        const { prescriptionId } = req.params;

        const result = await cloudStorageService.deleteFile(prescriptionId);
        if (!result) {
            return res.status(404).json({ message: "Prescription not found." });
        }

        res.status(200).json({ message: "Prescription deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting file", error: error.message });
    }
};