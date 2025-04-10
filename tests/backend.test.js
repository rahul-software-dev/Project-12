const request = require('supertest');
const app = require('../backend/app'); // Adjust path based on actual structure

describe('✅ Backend API Integration Tests', () => {
  describe('🩺 Health Check', () => {
    it('should return 200 and status ok', async () => {
      const res = await request(app).get('/api/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject({ status: 'ok' });
    });
  });

  describe('🔐 Auth Routes', () => {
    it('should return 200 and token for valid login', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com', password: 'test1234' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'wrong@example.com', password: 'wrongpass' });

      expect(res.statusCode).toBe(401);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('👨‍⚕️ Doctor Routes', () => {
    it('should fetch list of doctors', async () => {
      const res = await request(app).get('/api/doctors');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  // Additional tests for patients, appointments, prescriptions, etc. add karna hai nahi
});