CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('admin', 'doctor', 'patient')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    specialization VARCHAR(100),
    license_number VARCHAR(50),
    experience_years INT
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    age INT,
    gender VARCHAR(10),
    blood_group VARCHAR(5)
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id) ON DELETE CASCADE,
    doctor_id INT REFERENCES doctors(id) ON DELETE CASCADE,
    appointment_time TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled'
);

CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    appointment_id INT REFERENCES appointments(id) ON DELETE CASCADE,
    doctor_id INT REFERENCES doctors(id),
    patient_id INT REFERENCES patients(id),
    description TEXT,
    prescribed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medical_records (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    record_type VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE uploads (
    id SERIAL PRIMARY KEY,
    file_name VARCHAR(255),
    file_path TEXT,
    patient_id INT REFERENCES patients(id),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles_permissions (
    id SERIAL PRIMARY KEY,
    role VARCHAR(20),
    permission VARCHAR(100)
);