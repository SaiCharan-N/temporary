# AyurSutra - Complete Codebase Guide

## Overview
This is your complete AyurSutra Panchakarma patient management software. Below is the structure and all essential files needed for Replit backend integration.

## Project Structure
```
AyurSutra/
├── App.tsx                          # Main application entry point
├── styles/
│   └── globals.css                  # Global CSS with Tailwind v4 configuration
├── components/
│   ├── navigation-updated.tsx       # Main navigation component
│   ├── login.tsx                   # Login/registration component
│   ├── patient-dashboard.tsx       # Patient dashboard
│   ├── practitioner-dashboard-enhanced.tsx  # Practitioner dashboard
│   ├── schedule-management-simplified.tsx   # Schedule management
│   ├── patient-management-redesigned.tsx    # Patient management
│   ├── analytics-dashboard-enhanced.tsx     # Analytics dashboard
│   ├── ayurveda-chatbot.tsx        # AI chatbot component
│   ├── notes-history.tsx           # Session notes and history
│   ├── session-feedback-viewer.tsx # Session feedback viewer
│   ├── communication-messaging.tsx # Communication system
│   ├── task-reminders.tsx          # Task and reminders
│   ├── resource-sharing.tsx        # Resource sharing
│   ├── patient-feedback-enhanced.tsx # Patient feedback system
│   ├── transportation-assistance.tsx # Transportation assistance
│   ├── yoga-guidance.tsx           # Yoga guidance system
│   ├── progress-visualization.tsx  # Progress tracking
│   ├── diet-lifestyle-updated.tsx  # Diet and lifestyle guidance
│   ├── ai-recommendations.tsx      # AI recommendations
│   ├── sessions.tsx                # Patient sessions view
│   ├── documents.tsx               # Document management
│   ├── notifications.tsx           # Notifications system
│   ├── settings.tsx                # Settings page
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Image component with fallback
│   └── ui/                         # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── [all other UI components]
└── guidelines/
    └── Guidelines.md               # Project guidelines

```

## Key Features Implemented

### Core Features ✅
- ✅ Patient and Practitioner Management
- ✅ Automated Therapy Scheduling
- ✅ Pre/Post-procedure Notifications
- ✅ Feedback Capture System
- ✅ Session History Tracking
- ✅ Role-based Navigation

### Advanced Features ✅
- ✅ Therapy Progress Visualization
- ✅ AI-powered Feedback Insights (AyurBot)
- ✅ Practitioner Analytics Dashboard
- ✅ Document Upload System
- ✅ Diet/Lifestyle Guidance
- ✅ E-prescription System (mockup)
- ✅ Yoga Guidance with Pose Detection (mockup)
- ✅ Gamification Elements

### UI/UX ✅
- ✅ Soothing emerald/teal color scheme
- ✅ Soft gradients throughout
- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Comprehensive navigation

## Backend Integration Points

When converting to Replit for backend integration, focus on these areas:

### 1. Authentication (login.tsx)
- Replace mock login with real authentication
- Add JWT token handling
- Implement proper user sessions

### 2. Data Management
- Replace mock data with API calls
- Implement CRUD operations for:
  - Patients
  - Appointments/Sessions
  - Notes and Feedback
  - Documents
  - Analytics data

### 3. Real-time Features
- WebSocket integration for notifications
- Live chat functionality
- Real-time appointment updates

### 4. File Handling
- Document upload functionality
- Image storage for avatars
- Lab report processing

### 5. API Endpoints Needed
```
GET/POST /api/auth/login
GET/POST /api/patients
GET/POST /api/appointments
GET/POST /api/sessions
GET/POST /api/feedback
GET/POST /api/documents
GET/POST /api/notifications
GET /api/analytics
```

## Environment Setup for Replit

1. **Package.json dependencies:**
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "latest",
    "recharts": "latest",
    "sonner": "2.0.3",
    "react-hook-form": "7.55.0"
  }
}
```

2. **Backend Framework Suggestions:**
- Node.js with Express
- Supabase for database
- Firebase for real-time features
- Cloudinary for image/document storage

## Getting Started in Replit

1. Create new Replit project with React template
2. Copy all component files to `/src/components/`
3. Copy globals.css to `/src/styles/`
4. Replace App.tsx with the provided version
5. Install required dependencies
6. Set up backend API routes
7. Configure environment variables

## Database Schema Suggestions

### Users Table
- id, email, password, role (patient/practitioner)
- profile_data (name, avatar, specialization, etc.)

### Patients Table
- id, user_id, dosha_type, medical_history
- current_treatment_plan, progress_data

### Appointments Table
- id, patient_id, practitioner_id, date, time
- therapy_type, status, room, notes

### Sessions Table
- id, appointment_id, feedback_data
- vitals, progress_notes, completed_at

### Documents Table
- id, patient_id, file_url, file_type
- uploaded_at, description

## Next Steps

1. Set up Replit environment
2. Configure backend database
3. Replace mock data with real API calls
4. Implement authentication
5. Add real-time features
6. Deploy and test

This codebase provides a solid foundation for a production-ready Panchakarma management system with modern React practices and comprehensive features.