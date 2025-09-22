import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { ArrowLeft, Calendar, Clock, FileText, User, CheckCircle, Star, Activity } from 'lucide-react';

interface SessionsProps {
  onPageChange: (page: string) => void;
}

export function Sessions({ onPageChange }: SessionsProps) {
  const upcomingSessions = [
    {
      id: 1,
      therapy: 'Abhyanga',
      date: 'Today',
      time: '2:00 PM',
      practitioner: 'Dr. Kamal Raj',
      status: 'confirmed',
      room: 'Room A',
      sessionNumber: 10,
      notes: 'Regular stress relief session'
    },
    {
      id: 2,
      therapy: 'Swedana',
      date: 'Tomorrow',
      time: '10:00 AM',
      practitioner: 'Dr. Anjali Nair',
      status: 'confirmed',
      room: 'Room B',
      sessionNumber: 11,
      notes: 'Steam therapy for detoxification'
    },
    {
      id: 3,
      therapy: 'Panchakarma Consultation',
      date: 'Dec 18, 2024',
      time: '11:00 AM',
      practitioner: 'Dr. Kamal Raj',
      status: 'scheduled',
      room: 'Consultation Room',
      sessionNumber: 12,
      notes: 'Final consultation and progress review'
    }
  ];

  const completedSessions = [
    {
      id: 9,
      therapy: 'Abhyanga',
      date: 'Dec 13, 2024',
      time: '2:00 PM',
      practitioner: 'Dr. Kamal Raj',
      rating: 5,
      feedback: 'Excellent session, feeling very relaxed',
      notes: 'Patient showed significant improvement'
    },
    {
      id: 8,
      therapy: 'Shirodhara',
      date: 'Dec 11, 2024',
      time: '1:00 PM',
      practitioner: 'Dr. Anjali Nair',
      rating: 4,
      feedback: 'Very calming, helped with sleep issues',
      notes: 'Positive response to treatment'
    },
    {
      id: 7,
      therapy: 'Abhyanga',
      date: 'Dec 9, 2024',
      time: '2:00 PM',
      practitioner: 'Dr. Kamal Raj',
      rating: 5,
      feedback: 'Amazing as always!',
      notes: 'Continued progress with stress reduction'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">My Sessions</h1>
            <p className="text-emerald-600">Track your therapy sessions and progress</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <span>Upcoming Sessions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-4 border border-emerald-200 rounded-xl bg-emerald-50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-emerald-900">{session.therapy}</h3>
                          <p className="text-sm text-emerald-700">Session #{session.sessionNumber}</p>
                        </div>
                        <Badge className={getStatusColor(session.status)} variant="outline">
                          {session.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-emerald-700">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{session.practitioner}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4" />
                          <span>{session.room}</span>
                        </div>
                      </div>

                      {session.notes && (
                        <div className="mt-3 p-3 bg-white rounded-lg border border-emerald-200">
                          <p className="text-xs text-emerald-600">{session.notes}</p>
                        </div>
                      )}

                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          Join Session
                        </Button>
                        <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-600">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Session History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Session History</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-4">
                  {completedSessions.map((session) => (
                    <div key={session.id} className="p-4 border border-blue-200 rounded-xl bg-blue-50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-blue-900">{session.therapy}</h3>
                          <p className="text-sm text-blue-700">Session #{session.id}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-blue-700 mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{session.practitioner}</span>
                        </div>
                      </div>

                      {session.feedback && (
                        <div className="p-3 bg-white rounded-lg border border-blue-200 mb-3">
                          <p className="text-sm text-blue-800 mb-1">
                            <strong>Your Feedback:</strong>
                          </p>
                          <p className="text-xs text-blue-700">{session.feedback}</p>
                        </div>
                      )}

                      {session.notes && (
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-800 mb-1">
                            <strong>Practitioner Notes:</strong>
                          </p>
                          <p className="text-xs text-gray-600">{session.notes}</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Session Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-900 mb-1">9</div>
              <div className="text-sm text-emerald-600">Completed Sessions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-900 mb-1">3</div>
              <div className="text-sm text-blue-600">Upcoming Sessions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-900 mb-1">4.6★</div>
              <div className="text-sm text-purple-600">Average Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-900 mb-1">75%</div>
              <div className="text-sm text-orange-600">Treatment Progress</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}