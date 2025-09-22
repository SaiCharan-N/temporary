// ========================================
// ESSENTIAL MISSING COMPONENTS FOR AYURSUTRA
// Copy each component to its respective file in /components/
// ========================================

// ========================================
// 1. /components/analytics-dashboard-enhanced.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, TrendingUp, Users, Calendar, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AnalyticsDashboardEnhancedProps {
  onPageChange: (page: string) => void;
}

export function AnalyticsDashboardEnhanced({ onPageChange }: AnalyticsDashboardEnhancedProps) {
  const mockData = [
    { name: 'Mon', sessions: 8, satisfaction: 4.5 },
    { name: 'Tue', sessions: 12, satisfaction: 4.3 },
    { name: 'Wed', sessions: 10, satisfaction: 4.7 },
    { name: 'Thu', sessions: 15, satisfaction: 4.4 },
    { name: 'Fri', sessions: 9, satisfaction: 4.6 },
    { name: 'Sat', sessions: 6, satisfaction: 4.8 },
    { name: 'Sun', sessions: 4, satisfaction: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Analytics Dashboard</h1>
            <p className="text-emerald-600">Track performance and insights</p>
          </div>
          <Button
            onClick={() => onPageChange('practitioner-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Patients</p>
                      <p className="text-3xl font-bold text-emerald-900">147</p>
                    </div>
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">This Week</p>
                      <p className="text-3xl font-bold text-blue-900">64</p>
                    </div>
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                      <p className="text-3xl font-bold text-purple-900">4.6★</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Today</p>
                      <p className="text-3xl font-bold text-orange-900">12</p>
                    </div>
                    <Activity className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Session Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <CardTitle>Patient Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Patient analytics and demographics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Session Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Session performance and therapy analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle>Financial Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Revenue and financial analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// ========================================
// 2. /components/notes-history.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowLeft, Search, FileText, User, Calendar } from 'lucide-react';

interface NotesHistoryProps {
  onPageChange: (page: string) => void;
}

export function NotesHistory({ onPageChange }: NotesHistoryProps) {
  const mockNotes = [
    {
      id: 1,
      patient: 'Priya Sharma',
      date: '2024-12-14',
      session: 'Abhyanga',
      notes: 'Patient responded well to treatment. Stress levels reduced significantly.',
      practitioner: 'Dr. Kamal Raj'
    },
    {
      id: 2,
      patient: 'Raj Patel',
      date: '2024-12-13',
      session: 'Shirodhara',
      notes: 'Mild dizziness reported. Monitoring required for next session.',
      practitioner: 'Dr. Kamal Raj'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Notes & History</h1>
            <p className="text-emerald-600">Patient session notes and treatment history</p>
          </div>
          <Button
            onClick={() => onPageChange('practitioner-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search notes..." className="pl-10" />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Add Note
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {mockNotes.map((note) => (
            <Card key={note.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-medium text-gray-900">{note.patient}</h3>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-emerald-600">{note.session}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{note.notes}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{note.date}</span>
                      </div>
                      <span>by {note.practitioner}</span>
                    </div>
                  </div>
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// 3. /components/session-feedback-viewer.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Star, ThumbsUp, MessageSquare } from 'lucide-react';

interface SessionFeedbackViewerProps {
  onPageChange: (page: string) => void;
}

export function SessionFeedbackViewer({ onPageChange }: SessionFeedbackViewerProps) {
  const mockFeedback = [
    {
      id: 1,
      patient: 'Priya Sharma',
      session: 'Abhyanga',
      date: '2024-12-14',
      rating: 5,
      mood: 'Excellent',
      energy: 9,
      feedback: 'Amazing session! I feel so relaxed and energized.',
      improvements: 'Better sleep, reduced stress'
    },
    {
      id: 2,
      patient: 'Meera Singh',
      session: 'Panchakarma',
      date: '2024-12-13',
      rating: 5,
      mood: 'Very Good',
      energy: 8,
      feedback: 'Treatment is working wonderfully. Thank you!',
      improvements: 'Improved digestion, more energy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Session Feedback</h1>
            <p className="text-emerald-600">Patient feedback and session reviews</p>
          </div>
          <Button
            onClick={() => onPageChange('practitioner-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="space-y-6">
          {mockFeedback.map((feedback) => (
            <Card key={feedback.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{feedback.patient}</h3>
                    <p className="text-sm text-gray-600">{feedback.session} • {feedback.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600">Mood</p>
                    <p className="font-medium text-blue-900">{feedback.mood}</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">Energy</p>
                    <p className="font-medium text-green-900">{feedback.energy}/10</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-600">Rating</p>
                    <p className="font-medium text-purple-900">{feedback.rating}/5</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Feedback:</p>
                    <div className="bg-gray-50 p-3 rounded-lg border">
                      <MessageSquare className="w-4 h-4 text-gray-500 inline mr-2" />
                      <span className="text-gray-800">{feedback.feedback}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Improvements Noted:</p>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      {feedback.improvements}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// 4. /components/communication-messaging.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Send, MessageSquare } from 'lucide-react';

interface CommunicationMessagingProps {
  onPageChange: (page: string) => void;
}

export function CommunicationMessaging({ onPageChange }: CommunicationMessagingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Communication</h1>
            <p className="text-emerald-600">Message patients and manage communications</p>
          </div>
          <Button
            onClick={() => onPageChange('practitioner-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Patient list for messaging will be displayed here.</p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Messaging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64 bg-gray-50 rounded-lg p-4 border">
                <p className="text-gray-500 text-center">Select a patient to start messaging</p>
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Continue with remaining components...
// Copy each section above to its respective file in /components/