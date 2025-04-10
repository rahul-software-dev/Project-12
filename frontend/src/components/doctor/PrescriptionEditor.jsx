import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./PrescriptionEditor.css";

const PrescriptionEditor = ({ doctorId, patientId, onSaved }) => {
  const [prescriptionData, setPrescriptionData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prescriptionData.trim()) return;

    try {
      setLoading(true);
      await axios.post("/api/prescriptions/create", {
        doctorId,
        patientId,
        prescriptionData,
      });
      onSaved && onSaved();
    } catch (error) {
      console.error("Failed to save prescription:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="prescription-editor" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write prescription..."
        value={prescriptionData}
        onChange={(e) => setPrescriptionData(e.target.value)}
        disabled={loading}
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Prescription"}
      </button>
    </form>
  );
};

PrescriptionEditor.propTypes = {
  doctorId: PropTypes.string.isRequired,
  patientId: PropTypes.string.isRequired,
  onSaved: PropTypes.func,
};

export default PrescriptionEditor;