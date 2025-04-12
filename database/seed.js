const { Pool } = require('pg');

// 🔧 PostgreSQL connection configuration
const pool = new Pool({
  user: 'rahul',                 // Your PostgreSQL username
  host: 'localhost',             // Local database host
  database: 'healthcare',        // Correct database name
  password: '',                  // Add your password if set
  port: 5432                     // Default PostgreSQL port
});

async function seed() {
  try {
    // Insert users
    await pool.query(`
      INSERT INTO users (name, email, password, role)
      VALUES
      ('Dr. Devanshi', 'doctor@example.com', 'hashed_pass_1', 'doctor'),
      ('Rahul', 'patient@example.com', 'hashed_pass_2', 'patient'),
      ('Admin User', 'admin@example.com', 'hashed_pass_3', 'admin')
    `);

    // Insert doctor profile
    await pool.query(`
      INSERT INTO doctors (user_id, specialization, license_number, experience_years)
      VALUES (1, 'Cardiology', 'DOC123456', 10)
    `);

    // Insert patient profile
    await pool.query(`
      INSERT INTO patients (user_id, age, gender, blood_group)
      VALUES (2, 29, 'Female', 'O+')
    `);

    console.log('✅ Sample data inserted');
  } catch (err) {
    console.error('❌ Seed error:', err);
  } finally {
    await pool.end(); // Close DB connection
  }
}

seed();