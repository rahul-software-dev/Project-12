// backend/controllers/analyticsController.js

exports.getSystemAnalytics = (req, res) => {
    // Example response
    res.json({
      totalUsers: 150,
      totalDoctors: 40,
      totalPatients: 110,
      appointmentsToday: 12
    });
  };
  
  exports.getDoctorAnalytics = (req, res) => {
    const { doctorId } = req.params;
    res.json({
      doctorId,
      patientsSeen: 35,
      prescriptionsGiven: 20
    });
  };
  
  exports.getPatientAnalytics = (req, res) => {
    const { patientId } = req.params;
    res.json({
      patientId,
      totalVisits: 8,
      lastVisit: "2025-03-20"
    });
  };
  
  exports.getPrescriptionTrends = (req, res) => {
    res.json({
      topMedications: ["Paracetamol", "Amoxicillin"],
      weeklyTrends: [5, 10, 7, 12, 9, 11, 6]
    });
  };