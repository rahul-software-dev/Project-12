const Appointment = require("../models/Appointment");

// Book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { patientId, doctorId, date } = req.body;
        if (!patientId || !doctorId || !date) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newAppointment = new Appointment({ patientId, doctorId, date });
        await newAppointment.save();

        res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: "Error booking appointment", error: error.message });
    }
};