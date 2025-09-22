import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { ArrowLeft, Bell, Calendar, User, Clock, AlertTriangle, CheckCircle, Info, MessageSquare, Star, Activity } from 'lucide-react';

interface NotificationsProps {
  onPageChange: (page: string) => void;
}

export function Notifications({ onPageChange }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'appointment',
      category: 'reminder',
      title: 'Upcoming Session Reminder',
      message: 'Your Abhyanga session is scheduled for today at 2:00 PM. Please arrive 15 minutes early.',
      timestamp: '2 hours ago',
      priority: 'high',
      read: false,
      actionRequired: true,
      relatedTo: 'session',
      icon: Calendar
    },
    {
      id: 2,
      type: 'diet',
      category: 'guidance',
      title: 'Pre-Session Diet Reminder',
      message: 'Remember to have a light meal 2-3 hours before your session. Avoid cold drinks and heavy foods.',
      timestamp: '3 hours ago',
      priority: 'medium',
      read: false,
      actionRequired: false,
      relatedTo: 'diet',
      icon: Info
    },
    {
      id: 3,
      type: 'feedback',
      category: 'request',
      title: 'Session Feedback Request',
      message: 'Please provide feedback for your last Abhyanga session to help us improve your care.',
      timestamp: '1 day ago',
      priority: 'medium',
      read: true,
      actionRequired: true,
      relatedTo: 'feedback',
      icon: MessageSquare
    },
    {
      id: 4,
      type: 'achievement',
      category: 'progress',
      title: 'Milestone Achieved!',
      message: 'Congratulations! You have completed 75% of your treatment plan. Keep up the great work!',
      timestamp: '2 days ago',
      priority: 'low',
      read: true,
      actionRequired: false,
      relatedTo: 'progress',
      icon: Star
    },
    {
      id: 5,
      type: 'document',
      category: 'update',
      title: 'Lab Results Available',
      message: 'Your recent blood test results have been uploaded to your documents. Dr. Kamal will discuss them in your next session.',
      timestamp: '3 days ago',
      priority: 'high',
      read: false,
      actionRequired: true,
      relatedTo: 'documents',
      icon: CheckCircle
    },
    {
      id: 6,
      type: 'wellness',
      category: 'tip',
      title: 'Daily Wellness Tip',
      message: 'Winter season tip: Increase warm, oily foods and practice daily oil massage (Abhyanga) to balance Vata dosha.',
      timestamp: '4 days ago',
      priority: 'low',
      read: true,
      actionRequired: false,
      relatedTo: 'lifestyle',
      icon: Info
    },
    {
      id: 7,
      type: 'system',
      category: 'update',
      title: 'Treatment Plan Updated',
      message: 'Dr. Kamal has updated your treatment plan based on your progress. View the updated plan in your documents.',
      timestamp: '5 days ago',
      priority: 'medium',
      read: true,
      actionRequired: true,
      relatedTo: 'treatment',
      icon: Activity
    },
    {
      id: 8,
      type: 'appointment',
      category: 'confirmation',
      title: 'Session Confirmed',
      message: 'Your Panchakarma consultation session on Dec 18, 2024 at 11:00 AM has been confirmed.',
      timestamp: '1 week ago',
      priority: 'medium',
      read: true,
      actionRequired: false,
      relatedTo: 'appointment',
      icon: CheckCircle
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment': return 'bg-blue-50 border-l-blue-500';
      case 'diet': return 'bg-green-50 border-l-green-500';
      case 'feedback': return 'bg-purple-50 border-l-purple-500';
      case 'achievement': return 'bg-yellow-50 border-l-yellow-500';
      case 'document': return 'bg-orange-50 border-l-orange-500';
      case 'wellness': return 'bg-emerald-50 border-l-emerald-500';
      case 'system': return 'bg-gray-50 border-l-gray-500';
      default: return 'bg-white border-l-gray-300';
    }
  };

  const handleNotificationAction = (notification: any) => {
    switch (notification.relatedTo) {
      case 'session':
      case 'appointment':
        onPageChange('sessions');
        break;
      case 'feedback':
        onPageChange('feedback');
        break;
      case 'documents':
        onPageChange('documents');
        break;
      case 'progress':
        onPageChange('progress');
        break;
      case 'diet':
      case 'lifestyle':
        onPageChange('diet-lifestyle');
        break;
      default:
        break;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const highPriorityCount = notifications.filter(n => n.priority === 'high' && !n.read).length;
  const actionRequiredCount = notifications.filter(n => n.actionRequired && !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Notifications</h1>
            <p className="text-emerald-600">Stay updated with your treatment progress and important updates</p>
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

        {/* Notification Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-900 mb-1">{notifications.length}</div>
              <div className="text-sm text-blue-600">Total Notifications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-900 mb-1">{unreadCount}</div>
              <div className="text-sm text-orange-600">Unread</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-900 mb-1">{highPriorityCount}</div>
              <div className="text-sm text-red-600">High Priority</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-900 mb-1">{actionRequiredCount}</div>
              <div className="text-sm text-purple-600">Action Required</div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-emerald-600" />
                <span>All Notifications</span>
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Mark All Read
                </Button>
                <Button variant="outline" size="sm">
                  Clear All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              <div className="space-y-4">
                {notifications.map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <div 
                      key={notification.id} 
                      className={`p-4 rounded-xl border-l-4 transition-all hover:shadow-md ${
                        getTypeColor(notification.type)
                      } ${!notification.read ? 'border border-gray-300' : 'opacity-75'}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${
                          notification.priority === 'high' ? 'bg-red-100' :
                          notification.priority === 'medium' ? 'bg-yellow-100' :
                          'bg-green-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            notification.priority === 'high' ? 'text-red-600' :
                            notification.priority === 'medium' ? 'text-yellow-600' :
                            'text-green-600'
                          }`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                              {!notification.read && (
                                <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                              )}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(notification.priority)} variant="outline">
                                {notification.priority}
                              </Badge>
                              {notification.actionRequired && (
                                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                                  <AlertTriangle className="w-3 h-3 mr-1" />
                                  Action
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className={`text-sm mb-3 ${!notification.read ? 'text-gray-800' : 'text-gray-600'}`}>
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timestamp}</span>
                              <span>•</span>
                              <span className="capitalize">{notification.category}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {notification.actionRequired && (
                                <Button 
                                  size="sm"
                                  onClick={() => handleNotificationAction(notification)}
                                  className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                  Take Action
                                </Button>
                              )}
                              {!notification.read && (
                                <Button variant="outline" size="sm">
                                  Mark Read
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Appointment reminders</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Lab results and documents</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Daily wellness tips</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Treatment updates</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Push Notifications</h3>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Session reminders (1 hour before)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>High priority alerts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Progress milestones</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Daily check-ins</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Save Preferences
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}