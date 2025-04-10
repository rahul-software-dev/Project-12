CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    age INT,
    gender VARCHAR(10),
    blood_group VARCHAR(5)
);