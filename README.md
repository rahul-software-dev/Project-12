# Project-12
Digital Healthcare System for MNIT Jaipur

📦 healthcare_system/  
│  
├── 📂 backend/                    # Backend APIs & Logic  
│   ├── 📂 controllers/            # Request handling logic  
│   ├── 📂 models/                 # Database schemas  
│   ├── 📂 routes/                 # API endpoints  
│   ├── 📂 services/               # Business logic (prescription handling)  
│   ├── 📂 middlewares/            # Future security or access control  
│   ├── 📂 utils/                  # Helper functions  
│   ├── 📜 server.js               # Main backend entry point  
│   ├── 📜 config.js               # Configurations (DB, cloud storage)  
│   ├── 📜 package.json            # Dependencies & scripts  
│   └── 📜 .env                     # Environment variables  
│  
├── 📂 frontend/                   # User Interface (React.js or Next.js)  
│   ├── 📂 src/  
│   │   ├── 📂 components/         # Reusable UI elements  
│   │   ├── 📂 pages/              # Screens (Doctor's Dashboard, Patient Interface)  
│   │   ├── 📂 hooks/              # Custom React hooks  
│   │   ├── 📂 context/            # Global state management  
│   │   ├── 📂 utils/              # Utility functions  
│   │   ├── 📂 assets/             # Images, icons  
│   │   ├── 📜 App.js              # Main entry point  
│   │   ├── 📜 index.js            # ReactDOM rendering  
│   │   ├── 📜 routes.js           # Page routing  
│   ├── 📜 package.json            # Frontend dependencies  
│   ├── 📜 .env                     # Environment variables  
│   └── 📜 vite.config.js           # (If using Vite)  
│  
├── 📂 database/                   # Database setup  
│   ├── 📜 schema.sql              # SQL database schema (if using MySQL/PostgreSQL)  
│   ├── 📜 seed.js                 # Test data population  
│   ├── 📜 migrations/             # Database migration files  
│  
├── 📂 cloud_storage/              # Cloud-based prescription storage  
│   ├── 📜 upload.js               # File upload logic  
│   ├── 📜 retrieve.js             # Prescription retrieval logic  
│  
├── 📂 docs/                       # Project documentation  
│   ├── 📜 API_DOCS.md             # API Documentation  
│   ├── 📜 ARCHITECTURE.md         # System design documentation  
│  
├── 📂 tests/                      # Unit & Integration tests  
│   ├── 📜 backend.test.js         # Backend API testing  
│   ├── 📜 frontend.test.js        # Frontend component testing  
│  
├── 📂 deployment/                 # CI/CD & Deployment files  
│   ├── 📜 docker-compose.yml      # Docker setup for dev environment  
│   ├── 📜 kubernetes.yaml         # Kubernetes deployment config  
│  
├── 📜 README.md                   # Project Overview  
└── 📜 .gitignore                   # Git ignored files  










├── images/
│   ├── logo.png                     # App/brand logo
│   ├── default-avatar.png           # Placeholder user profile image
│   ├── doctor-illustration.png      # Homepage doctor illustration
│   ├── patient-illustration.png     # Homepage patient illustration
│   ├── hospital-building.jpg        # Background image or hero section
│   └── not-found.png                # 404 page image

├── icons/
│   ├── login-icon.svg               # Icon for login button or form
│   ├── signup-icon.svg              # Icon for sign up
│   ├── dashboard-icon.svg           # Sidebar/dashboard icon
│   ├── appointment-icon.svg         # Appointment section icon
│   ├── prescription-icon.svg        # Prescription section icon
│   ├── upload-icon.svg              # File upload icon
│   └── logout-icon.svg              # Logout button icon

├── logos/
│   ├── favicon.ico                  # Website favicon
│   ├── logo-dark.png                # Dark-mode logo
│   └── logo-light.png               # Light-mode logo

├── illustrations/
│   ├── medical-team.svg             # Vector illustration for landing/about page
│   ├── secure-data.svg              # Used for privacy or security section
│   └── digital-health.svg           # For ABHA or digital records info

├── backgrounds/
│   ├── auth-bg.jpg                  # Background for login/signup pages
│   └── dashboard-bg.jpg             # Optional background for dashboards

├── style/
│   └── custom-theme.scss            # Optional global SCSS overrides or theming variables










/ai/
├── SmartPrescriptionHelper.jsx // AI-powered prescription assistant
├── OCRUpload.jsx               // For uploading and parsing prescriptions

/__mocks__/
├── sampleDoctorData.js
├── samplePatientData.js

