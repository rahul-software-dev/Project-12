import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientCard from "./PatientCard";
import AddPatientButton from "./AddPatientButton";
import PropTypes from "prop-types";
import "./DailyPatientList.css";

const DailyPatientList = ({ doctorId }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    try {
      const { data } = await axios.get(`/api/doctors/${doctorId}/daily-patients`);
      setPatients(data.patients);
    } catch (error) {
      console.error("Failed to fetch patients:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [doctorId]);

  return (
    <div className="daily-patient-list">
      <h3>Today's Patients</h3>
      {loading ? (
        <p>Loading...</p>
      ) : patients.length === 0 ? (
        <p>No patients for today.</p>
      ) : (
        patients.map((patient) => (
          <PatientCard key={patient._id} patient={patient} />
        ))
      )}
      <AddPatientButton onPatientAdded={fetchPatients} doctorId={doctorId} />
    </div>
  );
};

DailyPatientList.propTypes = {
  doctorId: PropTypes.string.isRequired,
};

export default DailyPatientList;