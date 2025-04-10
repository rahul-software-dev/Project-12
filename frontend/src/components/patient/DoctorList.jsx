import React, { useEffect, useState } from "react";
import axios from "axios";
import BookAppointmentForm from "./BookAppointmentForm";

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get("/api/doctors");
                setDoctors(res.data);
            } catch (err) {
                console.error("Failed to fetch doctors", err);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="doctor-list">
            <ul>
                {doctors.map((doc) => (
                    <li key={doc._id}>
                        <strong>{doc.name}</strong> ({doc.specialization})
                        <button onClick={() => setSelectedDoctor(doc)}>Book</button>
                    </li>
                ))}
            </ul>
            {selectedDoctor && (
                <BookAppointmentForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
            )}
        </div>
    );
};

export default DoctorList;