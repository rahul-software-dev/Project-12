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