import React, { useState } from "react";
import PropTypes from "prop-types";

const PrescriptionForm = ({ onSubmit, initialData = {}, isEditing = false }) => {
    const [formData, setFormData] = useState({
        patientId: initialData.patientId || "",
        doctorId: initialData.doctorId || "",
        prescriptionData: initialData.prescriptionData || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="prescription-form">
            {!isEditing && (
                <>
                    <label>Patient ID</label>
                    <input
                        type="text"
                        name="patientId"
                        value={formData.patientId}
                        onChange={handleChange}
                        required
                    />
                    <label>Doctor ID</label>
                    <input
                        type="text"
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        required
                    />
                </>
            )}

            <label>Prescription</label>
            <textarea
                name="prescriptionData"
                value={formData.prescriptionData}
                onChange={handleChange}
                rows={5}
                required
            ></textarea>

            <button type="submit">{isEditing ? "Update" : "Create"} Prescription</button>
        </form>
    );
};

PrescriptionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        patientId: PropTypes.string,
        doctorId: PropTypes.string,
        prescriptionData: PropTypes.string,
    }),
    isEditing: PropTypes.bool,
};

export default PrescriptionForm;