import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./AddPatientButton.css";

const AddPatientButton = ({ doctorId, onPatientAdded }) => {
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddPatient = async () => {
    if (!patientId.trim()) return;

    try {
      setLoading(true);
      await axios.post(`/api/doctors/${doctorId}/add-patient/${patientId}`);
      onPatientAdded();
      setPatientId("");
    } catch (error) {
      console.error("Failed to add patient:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-patient-button">
      <input
        type="text"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleAddPatient} disabled={loading}>
        {loading ? "Adding..." : "Add Patient"}
      </button>
    </div>
  );
};

AddPatientButton.propTypes = {
  doctorId: PropTypes.string.isRequired,
  onPatientAdded: PropTypes.func.isRequired,
};

export default AddPatientButton;