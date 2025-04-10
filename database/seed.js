const { Pool } = require('pg');
const pool = new Pool();

async function seed() {
  await pool.query(`
    INSERT INTO users (name, email, password, role)
    VALUES
    ('Dr. John Doe', 'doctor@example.com', 'hashed_pass_1', 'doctor'),
    ('Jane Patient', 'patient@example.com', 'hashed_pass_2', 'patient'),
    ('Admin User', 'admin@example.com', 'hashed_pass_3', 'admin')
  `);

  await pool.query(`
    INSERT INTO doctors (user_id, specialization, license_number, experience_years)
    VALUES (1, 'Cardiology', 'DOC123456', 10)
  `);

  await pool.query(`
    INSERT INTO patients (user_id, age, gender, blood_group)
    VALUES (2, 29, 'Female', 'O+')
  `);

  console.log('✅ Sample data inserted');
  await pool.end();
}

seed().catch(err => console.error('❌ Seed error:', err));