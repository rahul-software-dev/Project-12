import React, { useEffect, useState } from "react";
import axios from "axios";

const PrescriptionViewer = ({ patientId }) => {
    const [prescription, setPrescription] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrescription = async () => {
            try {
                const res = await axios.get(`/api/prescriptions/${patientId}`);
                setPrescription(res.data);
            } catch (err) {
                console.error("Error fetching prescription:", err);
            } finally {
                setLoading(false);
            }
        };

        if (patientId) fetchPrescription();
    }, [patientId]);

    if (loading) return <p>Loading prescription...</p>;
    if (!prescription) return <p>No prescription found.</p>;

    return (
        <div className="prescription-viewer">
            <h4>Prescribed By: Dr. {prescription.doctorId}</h4>
            <pre>{JSON.stringify(prescription.prescriptionData, null, 2)}</pre>
        </div>
    );
};

export default PrescriptionViewer;