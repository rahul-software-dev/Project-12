require('dotenv').config({ path: './backend/.env' }); // adjust if running from root
console.log('[ENV] MONGO_URI:', process.env.MONGO_URI); // debug print

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

// Handle Fatal Errors
process.on("uncaughtException", (err) => {
    console.error("[FATAL ERROR] Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("[FATAL ERROR] Unhandled Rejection:", reason);
    process.exit(1);
});

//  Security & Performance Middleware
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(compression());
app.use(hpp());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// 🚀 API Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

// 🛠 Database Connection Check
(async () => {
    try {
        await connectDB();
        logger.info(' Database connected successfully');
    } catch (error) {
        logger.error(' Database connection failed:', error);
        process.exit(1);
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

//  Central Error Handling
app.use(errorHandler);

//  Start Server with Port Fallback Logic
const BASE_PORT = parseInt(process.env.PORT, 10) || 5000;

function startServer(port) {
    const server = app.listen(port, () => {
        logger.info(` Server running on port ${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            logger.warn(` Port ${port} is already in use. Trying port ${port + 1}...`);
            startServer(port + 1);
        } else {
            logger.error(' Server failed to start:', err);
            process.exit(1);
        }
    });

    //  Graceful Shutdown
    process.on('SIGINT', async () => {
        logger.warn(' Server is shutting down...');
        server.close(() => {
            logger.info(' Server shut down successfully.');
            process.exit(0);
        });
    });
}

startServer(BASE_PORT);