import React from "react";
import PropTypes from "prop-types";
import "./PrescriptionCard.css"; // Optional CSS

const PrescriptionCard = ({ prescription, onViewDetails }) => {
    const { doctorName, dateIssued, summary } = prescription;

    return (
        <div className="prescription-card">
            <h3>{doctorName || "Doctor"}</h3>
            <p><strong>Date:</strong> {new Date(dateIssued).toLocaleDateString()}</p>
            <p><strong>Summary:</strong> {summary}</p>
            <button onClick={() => onViewDetails(prescription)}>View Details</button>
        </div>
    );
};

PrescriptionCard.propTypes = {
    prescription: PropTypes.shape({
        doctorName: PropTypes.string,
        dateIssued: PropTypes.string.isRequired,
        summary: PropTypes.string,
    }).isRequired,
    onViewDetails: PropTypes.func.isRequired,
};

export default PrescriptionCard;