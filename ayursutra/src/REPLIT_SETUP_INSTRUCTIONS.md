# AyurSutra - Replit Setup Instructions

## Quick Setup for Replit

### Step 1: Create Replit Project
1. Go to Replit.com
2. Create new project with "React" template
3. Name it "AyurSutra"

### Step 2: Copy Essential Files

I'll provide you with the core files. Copy them in this order:

#### 1. Main Application Files
- Copy `App.tsx` (already provided above)
- Copy `styles/globals.css` (already provided above)

#### 2. Essential Components
I've already provided these key components:
- `navigation-updated.tsx`
- `login.tsx` 
- `patient-dashboard.tsx`
- Parts of `practitioner-dashboard-enhanced.tsx`
- Parts of `schedule-management-simplified.tsx`
- Parts of `patient-management-redesigned.tsx`

### Step 3: Create Remaining Components

For the remaining components referenced in App.tsx, you can either:

**Option A: Use Simplified Versions**
Create placeholder components that return basic JSX:

```jsx
// Example for missing components
export function ComponentName({ onPageChange }) {
  return (
    <div className="p-6">
      <h1>Component Name</h1>
      <p>This component is under development</p>
      <button onClick={() => onPageChange('dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
}
```

**Option B: Request Specific Components**
Let me know which specific components you need most urgently and I'll provide them.

### Step 4: Install Dependencies

Add to your `package.json`:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "latest",
    "recharts": "^2.8.0",
    "sonner": "^2.0.3",
    "react-hook-form": "^7.55.0",
    "@tailwindcss/typography": "latest"
  }
}
```

### Step 5: Backend Integration Points

When ready for backend integration, focus on these areas:

#### Authentication System
```javascript
// Replace in login.tsx
const handleLogin = async (credentials) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

#### Data Fetching
```javascript
// Replace mock data with API calls
const fetchPatients = async () => {
  try {
    const response = await fetch('/api/patients', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch patients:', error);
  }
};
```

#### WebSocket for Real-time Updates
```javascript
// Add to main app for real-time notifications
useEffect(() => {
  const ws = new WebSocket('ws://localhost:3001');
  
  ws.onmessage = (event) => {
    const notification = JSON.parse(event.data);
    // Handle real-time notifications
  };
  
  return () => ws.close();
}, []);
```

### Step 6: Database Schema

Use this schema for your backend:

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'patient' or 'practitioner'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patients table
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  age INTEGER,
  gender VARCHAR(50),
  phone VARCHAR(50),
  dosha_type VARCHAR(100),
  medical_history TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id),
  practitioner_id INTEGER REFERENCES users(id),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  therapy_type VARCHAR(255),
  status VARCHAR(50) DEFAULT 'scheduled',
  room VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  appointment_id INTEGER REFERENCES appointments(id),
  feedback_data JSONB,
  vitals JSONB,
  progress_notes TEXT,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 7: Environment Variables

Create `.env` file:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Step 8: API Routes Structure

```
/api
  /auth
    POST /login
    POST /register
    POST /logout
  /patients
    GET /
    POST /
    GET /:id
    PUT /:id
  /appointments
    GET /
    POST /
    PUT /:id
    DELETE /:id
  /sessions
    GET /
    POST /
    PUT /:id
  /notifications
    GET /
    POST /
```

## Quick Start Commands

1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. `npm run build` - Build for production

## What's Included

✅ Complete UI framework with Tailwind CSS
✅ Patient and Practitioner dashboards
✅ Authentication system (frontend)
✅ Responsive design
✅ Component library (shadcn/ui)
✅ Navigation system
✅ Mock data for testing

## What Needs Backend Integration

🔄 User authentication and sessions
🔄 Real database operations
🔄 File upload functionality
🔄 Real-time notifications
🔄 Email/SMS notifications
🔄 Payment processing (if needed)
🔄 Report generation

## Support

If you need specific components or have issues, let me know which parts you need help with!