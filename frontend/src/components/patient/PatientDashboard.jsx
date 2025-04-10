import React from "react";
import PrescriptionViewer from "./PrescriptionViewer";
import DoctorList from "./DoctorList";
import "./PatientDashboard.css";

const PatientDashboard = ({ patient }) => {
    return (
        <div className="patient-dashboard">
            <h2>Welcome, {patient.name}</h2>
            <div className="dashboard-section">
                <h3>Your Prescription</h3>
                <PrescriptionViewer patientId={patient._id} />
            </div>
            <div className="dashboard-section">
                <h3>Available Doctors</h3>
                <DoctorList />
            </div>
        </div>
    );
};

export default PatientDashboard;