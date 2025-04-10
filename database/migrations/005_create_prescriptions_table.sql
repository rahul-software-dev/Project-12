CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    appointment_id INT REFERENCES appointments(id),
    doctor_id INT REFERENCES doctors(id),
    patient_id INT REFERENCES patients(id),
    description TEXT,
    prescribed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);