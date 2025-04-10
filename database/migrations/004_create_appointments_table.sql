CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    doctor_id INT REFERENCES doctors(id),
    appointment_time TIMESTAMP,
    status VARCHAR(20) DEFAULT 'scheduled'
);