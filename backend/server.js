require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const hpp = require('hpp'); // Protect against HTTP parameter pollution
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const connectDB = require('./config/db'); // Database connection
const logger = require('./utils/Logger'); // Custom logging utility
const errorHandler = require('./middlewares/errorHandler'); // Central error handler

// Importing routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const cloudStorageRoutes = require('./routes/cloudStorageRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// 🌐 Security & Performance Middleware
app.use(helmet({ 
    contentSecurityPolicy: false // Allow API requests
})); 
app.use(cors({ 
    origin: process.env.CLIENT_URL || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(compression()); // Enable gzip compression for responses
app.use(hpp()); // Prevent HTTP parameter pollution
app.use(express.json({ limit: '10mb' })); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('combined')); // HTTP request logging

// 🚀 API Rate Limiter (Prevents Abuse)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

// 🛠 Database Connection Check
(async () => {
    try {
        await connectDB();
        logger.info('✅ Database connected successfully');
    } catch (error) {
        logger.error('❌ Database connection failed:', error);
        process.exit(1); // Exit if DB connection fails
    }
})();

// 📌 API Routes
app.get('/', (req, res) => res.json({ success: true, message: 'Digital Healthcare System API is running.' }));

app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/cloud-storage', cloudStorageRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/auth', authRoutes);

// 🔥 Central Error Handling
app.use(errorHandler);

// 🚀 Start Express Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => logger.info(`🚀 Server running on port ${PORT}`));

// 🛑 Graceful Shutdown & Cleanup
process.on('SIGINT', async () => {
    logger.warn('⚠️  Server is shutting down...');
    server.close(() => {
        logger.info('✅ Server shut down successfully.');
        process.exit(0);
    });
});

// 🛑 Handle Uncaught Exceptions & Rejections
process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection:', err);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    process.exit(1);
});