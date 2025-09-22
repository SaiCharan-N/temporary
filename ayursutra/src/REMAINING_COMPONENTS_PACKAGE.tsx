// ========================================
// REMAINING ESSENTIAL COMPONENTS FOR AYURSUTRA
// Copy each component to its respective file in /components/
// ========================================

// ========================================
// 5. /components/task-reminders.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, CheckSquare, Clock, AlertTriangle } from 'lucide-react';

interface TaskRemindersProps {
  onPageChange: (page: string) => void;
}

export function TaskReminders({ onPageChange }: TaskRemindersProps) {
  const mockTasks = [
    { id: 1, task: 'Review Raj Patel\'s adverse reaction report', completed: false, priority: 'urgent', dueDate: 'Today' },
    { id: 2, task: 'Prepare progress report for Meera Singh', completed: false, priority: 'high', dueDate: 'Today' },
    { id: 3, task: 'Update treatment protocols', completed: true, priority: 'medium', dueDate: 'Yesterday' },
    { id: 4, task: 'Schedule follow-up with Priya Sharma', completed: false, priority: 'low', dueDate: 'Tomorrow' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Tasks & Reminders</h1>
            <p className="text-emerald-600">Manage your daily tasks and reminders</p>
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

        <div className="space-y-4">
          {mockTasks.map((task) => (
            <Card key={task.id} className={task.completed ? 'opacity-60' : ''}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Checkbox checked={task.completed} />
                    <div>
                      <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.task}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)} variant="outline">
                      {task.priority}
                    </Badge>
                    {task.priority === 'urgent' && <AlertTriangle className="w-4 h-4 text-red-500" />}
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
// 6. /components/resource-sharing.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, FileText, Download, Upload, Share2 } from 'lucide-react';

interface ResourceSharingProps {
  onPageChange: (page: string) => void;
}

export function ResourceSharing({ onPageChange }: ResourceSharingProps) {
  const mockResources = [
    { id: 1, title: 'Panchakarma Guidelines 2024', type: 'PDF', size: '2.4 MB', shared: true },
    { id: 2, title: 'Dosha Diet Chart', type: 'Image', size: '1.2 MB', shared: false },
    { id: 3, title: 'Treatment Protocols', type: 'Document', size: '856 KB', shared: true },
    { id: 4, title: 'Patient Education Videos', type: 'Video', size: '45 MB', shared: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Resource Sharing</h1>
            <p className="text-emerald-600">Share educational materials and resources</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Upload className="w-4 h-4 mr-2" />
              Upload Resource
            </Button>
            <Button
              onClick={() => onPageChange('practitioner-dashboard')}
              variant="outline"
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResources.map((resource) => (
            <Card key={resource.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-8 h-8 text-emerald-600" />
                  <Badge variant={resource.shared ? 'default' : 'secondary'}>
                    {resource.shared ? 'Shared' : 'Private'}
                  </Badge>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{resource.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
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
// 7. /components/patient-feedback-enhanced.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Slider } from './ui/slider';
import { ArrowLeft, Star, Send, ThumbsUp, MessageSquare } from 'lucide-react';

interface PatientFeedbackEnhancedProps {
  onPageChange: (page: string) => void;
}

export function PatientFeedbackEnhanced({ onPageChange }: PatientFeedbackEnhancedProps) {
  const [rating, setRating] = React.useState(0);
  const [energyLevel, setEnergyLevel] = React.useState([7]);
  const [moodRating, setMoodRating] = React.useState([7]);
  const [feedback, setFeedback] = React.useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Session Feedback</h1>
            <p className="text-emerald-600">Share your experience and help improve care</p>
          </div>
          <Button
            onClick={() => onPageChange('patient-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-emerald-600" />
              Today's Session: Abhyanga Therapy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overall Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Overall Session Rating
              </label>
              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-8 h-8 cursor-pointer transition-colors ${
                      i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 hover:text-yellow-200'
                    }`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {rating > 0 ? `${rating}/5` : 'Click to rate'}
                </span>
              </div>
            </div>

            {/* Energy Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Energy Level After Session: {energyLevel[0]}/10
              </label>
              <Slider
                value={energyLevel}
                onValueChange={setEnergyLevel}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Very Low</span>
                <span>Excellent</span>
              </div>
            </div>

            {/* Mood Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Mood Rating: {moodRating[0]}/10
              </label>
              <Slider
                value={moodRating}
                onValueChange={setMoodRating}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            {/* Written Feedback */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Comments
              </label>
              <Textarea
                placeholder="Share your experience, any improvements you noticed, or suggestions..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <Badge className="bg-emerald-100 text-emerald-800">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Your feedback helps improve care
              </Badge>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Previous Feedback */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Previous Session Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">Abhyanga Session</p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">Great session! Feeling much more relaxed and energized.</p>
                <p className="text-xs text-gray-500 mt-2">2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ========================================
// 8. /components/transportation-assistance.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Car, MapPin, Clock, Phone } from 'lucide-react';

interface TransportationAssistanceProps {
  onPageChange: (page: string) => void;
}

export function TransportationAssistance({ onPageChange }: TransportationAssistanceProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Transportation</h1>
            <p className="text-emerald-600">Book rides and manage transportation</p>
          </div>
          <Button
            onClick={() => onPageChange('patient-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="w-6 h-6 mr-2 text-emerald-600" />
                Book Transportation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">From: Your Location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">To: AyurSutra Wellness Center</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">Next Appointment: Today 2:00 PM</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Book Ride for Appointment
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Transportation Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Center Shuttle</p>
                      <p className="text-sm text-gray-600">Free shuttle service</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Free</Badge>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Partner Taxi</p>
                      <p className="text-sm text-gray-600">Discounted rates</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">₹150</Badge>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ride Share</p>
                      <p className="text-sm text-gray-600">Uber/Ola booking</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">₹180</Badge>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Center for Assistance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">To Wellness Center</p>
                  <p className="text-sm text-gray-600">Dec 12, 2024 • 1:45 PM</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">Completed</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">From Wellness Center</p>
                  <p className="text-sm text-gray-600">Dec 10, 2024 • 3:15 PM</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">Completed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ========================================
// 9. /components/ai-recommendations.tsx
// ========================================

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Brain, TrendingUp, Target, Lightbulb } from 'lucide-react';

interface AIRecommendationsProps {
  onPageChange: (page: string) => void;
}

export function AIRecommendations({ onPageChange }: AIRecommendationsProps) {
  const mockRecommendations = [
    {
      id: 1,
      type: 'treatment',
      title: 'Optimize Abhyanga Duration',
      description: 'Based on patient feedback, consider extending session time by 15 minutes for better results.',
      confidence: 85,
      impact: 'high'
    },
    {
      id: 2,
      type: 'scheduling',
      title: 'Peak Performance Hours',
      description: 'Schedule Priya Sharma\'s sessions between 9-11 AM for optimal response.',
      confidence: 78,
      impact: 'medium'
    },
    {
      id: 3,
      type: 'dietary',
      title: 'Customize Diet Plan',
      description: 'Vata-Pitta patients show 23% better outcomes with warm, cooked foods.',
      confidence: 92,
      impact: 'high'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">AI Recommendations</h1>
            <p className="text-emerald-600">Intelligent insights for better patient care</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockRecommendations.map((rec) => (
            <Card key={rec.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    {rec.title}
                  </CardTitle>
                  <Badge variant={rec.impact === 'high' ? 'destructive' : rec.impact === 'medium' ? 'default' : 'secondary'}>
                    {rec.impact} impact
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Confidence: {rec.confidence}%</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Apply</Button>
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
// SIMPLE PLACEHOLDER COMPONENTS
// Create these for the remaining imports in App.tsx
// ========================================

// /components/yoga-guidance.tsx
export function YogaGuidance({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Yoga Guidance</h1>
      <p>Yoga guidance component will be implemented here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/progress-visualization.tsx
export function ProgressVisualization({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Progress Visualization</h1>
      <p>Progress visualization charts will be displayed here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/diet-lifestyle-updated.tsx
export function DietLifestyle({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Diet & Lifestyle</h1>
      <p>Diet and lifestyle guidance will be displayed here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/sessions.tsx
export function Sessions({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Sessions</h1>
      <p>Session history and upcoming sessions will be displayed here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/documents.tsx
export function Documents({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Documents</h1>
      <p>Patient documents and lab reports will be displayed here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/notifications.tsx
export function Notifications({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p>All notifications will be displayed here.</p>
      <Button onClick={() => onPageChange('patient-dashboard')} className="mt-4">Back</Button>
    </div>
  );
}

// /components/settings.tsx
export function Settings({ onPageChange, onLogout, userType }: { 
  onPageChange: (page: string) => void;
  onLogout: () => void;
  userType: 'patient' | 'practitioner';
}) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>User settings and preferences will be displayed here.</p>
      <div className="space-x-4 mt-4">
        <Button onClick={() => onPageChange(userType === 'patient' ? 'patient-dashboard' : 'practitioner-dashboard')}>
          Back to Dashboard
        </Button>
        <Button onClick={onLogout} variant="destructive">Logout</Button>
      </div>
    </div>
  );
}