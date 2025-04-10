CREATE TABLE uploads (
    id SERIAL PRIMARY KEY,
    file_name VARCHAR(255),
    file_path TEXT,
    patient_id INT REFERENCES patients(id),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);