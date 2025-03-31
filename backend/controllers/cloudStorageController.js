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