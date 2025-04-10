import React from "react";
import PropTypes from "prop-types";
import "./PatientCard.css";

const PatientCard = ({ patient }) => {
  return (
    <div className="patient-card">
      <h4>{patient.name}</h4>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
    </div>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default PatientCard;