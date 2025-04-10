import React from "react";
import PrescriptionCard from "./PrescriptionCard";
import PropTypes from "prop-types";

const PrescriptionList = ({ prescriptions, onViewDetails }) => {
    if (!prescriptions.length) {
        return <p>No prescriptions found.</p>;
    }

    return (
        <div className="prescription-list">
            {prescriptions.map((prescription) => (
                <PrescriptionCard
                    key={prescription._id}
                    prescription={prescription}
                    onViewDetails={onViewDetails}
                />
            ))}
        </div>
    );
};

PrescriptionList.propTypes = {
    prescriptions: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            doctorName: PropTypes.string,
            dateIssued: PropTypes.string.isRequired,
            summary: PropTypes.string,
        })
    ).isRequired,
    onViewDetails: PropTypes.func.isRequired,
};

export default PrescriptionList;