import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import {
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Heart,
  Brain
} from 'lucide-react';

interface PractitionerDashboardProps {
  onPageChange: (page: string) => void;
}

export function PractitionerDashboard({ onPageChange }: PractitionerDashboardProps) {
  const todaySchedule = [
    {
      id: 1,
      time: '9:00 AM',
      patient: 'Priya Sharma',
      therapy: 'Abhyanga',
      duration: '60 min',
      status: 'confirmed',
      notes: 'First session, monitor closely'
    },
    {
      id: 2,
      time: '10:30 AM',
      patient: 'Raj Kumar',
      therapy: 'Swedana',
      duration: '45 min',
      status: 'in-progress',
      notes: 'Day 8, showing good progress'
    },
    {
      id: 3,
      time: '2:00 PM',
      patient: 'Anjali Nair',
      therapy: 'Panchakarma',
      duration: '90 min',
      status: 'upcoming',
      notes: 'Special dietary requirements'
    },
    {
      id: 4,
      time: '4:00 PM',
      patient: 'Suresh Menon',
      therapy: 'Abhyanga',
      duration: '60 min',
      status: 'upcoming',
      notes: 'Follow-up session'
    }
  ];

  const patientAlerts = [
    {
      patient: 'Priya Sharma',
      alert: 'Reported mild nausea after yesterday\'s session',
      priority: 'high',
      time: '2 hours ago'
    },
    {
      patient: 'Raj Kumar',
      alert: 'Missed morning medication reminder',
      priority: 'medium',
      time: '4 hours ago'
    },
    {
      patient: 'Anjali Nair',
      alert: 'Excellent feedback on energy levels',
      priority: 'low',
      time: '6 hours ago'
    }
  ];

  const recentFeedback = [
    {
      patient: 'Priya Sharma',
      therapy: 'Abhyanga',
      rating: 5,
      comment: 'Felt very relaxed and energized',
      date: 'Today'
    },
    {
      patient: 'Raj Kumar',
      therapy: 'Swedana',
      rating: 4,
      comment: 'Slight discomfort but overall good',
      date: 'Yesterday'
    },
    {
      patient: 'Anjali Nair',
      therapy: 'Panchakarma',
      rating: 5,
      comment: 'Amazing experience, feeling balanced',
      date: '2 days ago'
    }
  ];

  const stats = {
    totalPatients: 24,
    activeTreatments: 18,
    todaysSessions: 6,
    avgRating: 4.7,
    completionRate: 92
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Good morning, Dr. Kamal!</h1>
            <p className="text-indigo-100 mb-6">You have 6 sessions scheduled today. Let's make it a healing day.</p>
          </div>
          <div className="text-right">
            <p className="text-indigo-200">Today's Date</p>
            <p className="text-2xl font-bold">Sept 20, 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Total Patients</p>
            <p className="text-2xl font-bold">{stats.totalPatients}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Active Treatments</p>
            <p className="text-2xl font-bold">{stats.activeTreatments}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Today's Sessions</p>
            <p className="text-2xl font-bold">{stats.todaysSessions}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Avg Rating</p>
            <p className="text-2xl font-bold">{stats.avgRating}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <p className="text-white/90 text-sm">Completion Rate</p>
            <p className="text-2xl font-bold">{stats.completionRate}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span>Today's Schedule</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onPageChange('schedule')}
                  className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                >
                  View Full Schedule
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {todaySchedule.map((session) => (
                <div key={session.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="font-medium text-indigo-900">{session.time}</p>
                        <p className="text-sm text-indigo-600">{session.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{session.patient}</h3>
                        <p className="text-sm text-gray-600">{session.therapy}</p>
                        <p className="text-xs text-gray-500 mt-1">{session.notes}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        className={
                          session.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                          session.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }
                      >
                        {session.status}
                      </Badge>
                      {session.status === 'in-progress' && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-indigo-200 text-indigo-600">
                      View Patient
                    </Button>
                    <Button size="sm" variant="outline" className="border-indigo-200 text-indigo-600">
                      Session Notes
                    </Button>
                    {session.status === 'upcoming' && (
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                        Start Session
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Insights Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                <span>AI Treatment Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Treatment Effectiveness</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Abhyanga Therapy</span>
                        <span>94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Swedana Therapy</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Panchakarma</span>
                        <span>96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">Patient Outcomes</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-700">18</p>
                      <p className="text-sm text-green-600">Improved</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-700">4</p>
                      <p className="text-sm text-blue-600">In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-medium text-indigo-900 mb-2">AI Recommendation</h4>
                <p className="text-sm text-indigo-700">
                  Consider increasing Abhyanga session duration for Vata-dominant patients. 
                  Current data shows 15% better outcomes with extended sessions.
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => onPageChange('ai-recommendations')}
                  className="mt-3 border-indigo-200 text-indigo-600"
                >
                  View All Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Patient Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <span>Patient Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {patientAlerts.map((alert, index) => (
                <div key={index} className="p-4 border-l-4 border-l-orange-400 bg-orange-50 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-orange-900">{alert.patient}</p>
                      <p className="text-sm text-orange-700 mt-1">{alert.alert}</p>
                      <p className="text-xs text-orange-600 mt-2">{alert.time}</p>
                    </div>
                    <Badge 
                      className={
                        alert.priority === 'high' ? 'bg-red-100 text-red-700' :
                        alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }
                    >
                      {alert.priority}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Recent Patient Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-indigo-600" />
                <span>Recent Feedback</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentFeedback.map((feedback, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{feedback.patient}</p>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{feedback.therapy} - {feedback.date}</p>
                  <p className="text-sm text-gray-700 mt-2 italic">"{feedback.comment}"</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                onClick={() => onPageChange('patients')}
                className="w-full justify-start space-x-3 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                <Users className="w-5 h-5" />
                <span>View All Patients</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onPageChange('ai-insights')}
                className="w-full justify-start space-x-3 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Analytics Dashboard</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start space-x-3 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
              >
                <Calendar className="w-5 h-5" />
                <span>Add New Appointment</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}