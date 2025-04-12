exports.bookAppointment = (req, res) => {
    const { patientId, doctorId, time } = req.body;
    res.json({
      message: "Appointment booked successfully",
      appointment: { patientId, doctorId, time }
    });
  };
  
  exports.getAppointmentsForDoctor = (req, res) => {
    const { doctorId } = req.params;
    res.json({
      doctorId,
      appointments: [
        { patientId: 2, time: "2025-04-01T10:00:00Z" },
        { patientId: 3, time: "2025-04-01T11:00:00Z" }
      ]
    });
  };
  
  exports.getAppointmentsForPatient = (req, res) => {
    const { patientId } = req.params;
    res.json({
      patientId,
      appointments: [
        { doctorId: 1, time: "2025-04-01T10:00:00Z" },
        { doctorId: 4, time: "2025-04-02T09:30:00Z" }
      ]
    });
  };
  
  exports.cancelAppointment = (req, res) => {
    const { appointmentId } = req.params;
    res.json({ message: `Appointment ${appointmentId} cancelled successfully.` });
  };