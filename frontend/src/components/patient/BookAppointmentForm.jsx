import React, { useState } from "react";
import axios from "axios";

const BookAppointmentForm = ({ doctor, onClose }) => {
    const [patientId, setPatientId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/doctors/${doctor._id}/add-patient/${patientId}`);
            setMessage("Appointment booked successfully!");
        } catch (err) {
            setMessage("Failed to book appointment.");
        }
    };

    return (
        <div className="book-appointment-form">
            <h4>Book Appointment with Dr. {doctor.name}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="patientId">Your Patient ID:</label>
                <input
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    required
                />
                <button type="submit">Book</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookAppointmentForm;