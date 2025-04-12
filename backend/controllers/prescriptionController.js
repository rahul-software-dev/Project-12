const Prescription = require("../models/Prescription");
const Doctor = require("../models/Doctor");

// Create a new prescription
exports.createPrescription = async (req, res) => {
  try {
    const { patientId, prescriptionData } = req.body;

    // Extract doctor ID from the JWT (authenticated user)
    const doctorId = req.user.id;

    if (!patientId || !prescriptionData) {
      return res.status(400).json({ message: "Patient ID and prescription data are required." });
    }

    const newPrescription = new Prescription({
      patientId,
      doctorId,
      prescriptionData
    });

    await newPrescription.save();

    // Add patient to doctor's daily list (ensure dailyPatients exists in schema)
    await Doctor.findByIdAndUpdate(
      doctorId,
      { $addToSet: { dailyPatients: patientId } },
      { new: true }
    );

    res.status(201).json({
      message: "Prescription created successfully",
      prescription: newPrescription
    });
  } catch (error) {
    console.error("[createPrescription]", error);
    res.status(500).json({
      message: "Error creating prescription",
      error: error.message
    });
  }
};

// Retrieve prescriptions by patient ID
exports.getPrescriptionByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;

    const prescriptions = await Prescription.find({ patientId }).select("-__v");

    if (!prescriptions.length) {
      return res.status(404).json({ message: "No prescriptions found." });
    }

    res.status(200).json(prescriptions);
  } catch (error) {
    console.error("[getPrescriptionByPatientId]", error);
    res.status(500).json({
      message: "Error fetching prescriptions",
      error: error.message
    });
  }
};

// Update an existing prescription
exports.updatePrescription = async (req, res) => {
  try {
    const { prescriptionId } = req.params;
    const updateData = req.body;

    const updatedPrescription = await Prescription.findByIdAndUpdate(
      prescriptionId,
      updateData,
      { new: true }
    );

    if (!updatedPrescription) {
      return res.status(404).json({ message: "Prescription not found." });
    }

    res.status(200).json({
      message: "Prescription updated successfully",
      prescription: updatedPrescription
    });
  } catch (error) {
    console.error("[updatePrescription]", error);
    res.status(500).json({
      message: "Error updating prescription",
      error: error.message
    });
  }
};