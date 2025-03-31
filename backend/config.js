require('dotenv').config(); // Load environment variables

// 🚀 Utility function to ensure required env variables are set
const requiredEnv = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        console.error(`❌ ERROR: Missing required environment variable: ${key}`);
        process.exit(1); // Exit process if a required variable is missing
    }
});

const config = {
    env: process.env.NODE_ENV || 'development', // Environment type

    // 🖥 Server Configuration
    server: {
        port: parseInt(process.env.PORT, 10) || 5000,
    },

    // 🛢 Database Configuration
    database: {
        uri: process.env.MONGO_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
    },

    // 🔐 Authentication & Security (Optional for Future)
    auth: {
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: process.env.JWT_EXPIRATION || '24h', // Default expiry
        bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,
    },

    // ☁️ Cloud Storage Configuration (Auto-Detect Provider)
    cloudStorage: (() => {
        const provider = process.env.CLOUD_PROVIDER || 'aws'; // Default: AWS
        switch (provider) {
            case 'aws':
                return {
                    provider: 'aws',
                    bucketName: process.env.AWS_BUCKET_NAME || '',
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
                    region: process.env.AWS_REGION || 'us-east-1',
                };
            case 'gcp':
                return {
                    provider: 'gcp',
                    bucketName: process.env.GCP_BUCKET_NAME || '',
                    credentialsPath: process.env.GCP_CREDENTIALS_PATH || '',
                };
            case 'azure':
                return {
                    provider: 'azure',
                    containerName: process.env.AZURE_CONTAINER_NAME || '',
                    connectionString: process.env.AZURE_CONNECTION_STRING || '',
                };
            default:
                console.warn(`⚠️ WARNING: Unknown cloud provider "${provider}", defaulting to AWS.`);
                return {};
        }
    })(),

    // 📧 Email Configuration (Optional)
    email: {
        service: process.env.EMAIL_SERVICE || 'gmail',
        user: process.env.EMAIL_USER || '',
        password: process.env.EMAIL_PASSWORD || '',
    },

    // 📊 Logging & Monitoring
    logging: {
        level: process.env.LOG_LEVEL || 'info', // Levels: error, warn, info, debug
        enableFileLogging: process.env.ENABLE_FILE_LOGGING === 'true', // Log to files if true
    },

    // 🚦 Rate Limiting (Optional for Future)
    rateLimit: {
        maxRequests: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100, // Max requests per window
        windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000, // Default: 15 min
    },
};

module.exports = config;