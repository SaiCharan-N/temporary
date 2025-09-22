import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Eye,
  Bell,
  Activity,
  MessageSquare,
  CheckSquare,
  FileText,
  Timer,
  ChevronRight,
  StarIcon,
  AlertCircle,
  Info,
  CheckCircle2,
  ExternalLink,
  Stethoscope,
  Calendar as CalendarIcon,
  BrainCircuit,
  HeartHandshake,
  Sparkles,
  Target,
  UserCheck,
  BookOpen
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PractitionerDashboardProps {
  onPageChange: (page: string) => void;
}

// Mock data
const todaysSessions = [
  { id: 1, time: '09:00', patient: 'Priya Sharma', therapy: 'Abhyanga', status: 'confirmed', duration: '60 min', room: 'Room A', avatar: '/avatar1.jpg' },
  { id: 2, time: '10:30', patient: 'Raj Patel', therapy: 'Shirodhara', status: 'pending', duration: '45 min', room: 'Room B', avatar: '/avatar2.jpg' },
  { id: 3, time: '14:00', patient: 'Meera Singh', therapy: 'Panchakarma', status: 'confirmed', duration: '90 min', room: 'Room C', avatar: '/avatar3.jpg' },
  { id: 4, time: '16:00', patient: 'Amit Kumar', therapy: 'Yoga Therapy', status: 'rescheduled', duration: '30 min', room: 'Studio 1', avatar: '/avatar4.jpg' }
];

const notifications = [
  {
    id: 1,
    type: 'urgent',
    category: 'patient-alert',
    title: 'Adverse Reaction Report',
    message: 'Raj Patel submitted an adverse reaction report for yesterday\'s Shirodhara session. Immediate review required.',
    time: '15 minutes ago',
    priority: 'urgent',
    actionRequired: true,
    patient: 'Raj Patel',
    icon: AlertTriangle
  },
  {
    id: 2,
    type: 'appointment',
    category: 'schedule',
    title: 'Session Reschedule Request',
    message: 'Meera Singh has requested to reschedule today\'s 2:00 PM Panchakarma session to tomorrow.',
    time: '30 minutes ago',
    priority: 'high',
    actionRequired: true,
    patient: 'Meera Singh',
    icon: Calendar
  },
  {
    id: 3,
    type: 'completion',
    category: 'treatment',
    title: 'Treatment Plan Milestone',
    message: 'Priya Sharma has completed 75% of her Abhyanga treatment plan. Consider scheduling follow-up consultation.',
    time: '1 hour ago',
    priority: 'medium',
    actionRequired: false,
    patient: 'Priya Sharma',
    icon: Target
  },
  {
    id: 4,
    type: 'feedback',
    category: 'patient-feedback',
    title: 'Excellent Session Feedback',
    message: 'Amit Kumar rated his last yoga therapy session 5 stars with positive comments about improved flexibility.',
    time: '2 hours ago',
    priority: 'low',
    actionRequired: false,
    patient: 'Amit Kumar',
    icon: StarIcon
  },
  {
    id: 5,
    type: 'system',
    category: 'reminder',
    title: 'Treatment Protocol Update',
    message: 'New Panchakarma guidelines have been published. Please review and update your practice protocols.',
    time: '3 hours ago',
    priority: 'medium',
    actionRequired: true,
    patient: null,
    icon: BookOpen
  },
  {
    id: 6,
    type: 'wellness',
    category: 'patient-progress',
    title: 'Significant Improvement Detected',
    message: 'AI analysis shows significant stress reduction patterns in Priya Sharma\'s recent vitals and feedback.',
    time: '4 hours ago',
    priority: 'low',
    actionRequired: false,
    patient: 'Priya Sharma',
    icon: BrainCircuit
  },
  {
    id: 7,
    type: 'missed',
    category: 'attendance',
    title: 'Missed Session Alert',
    message: 'Raj Patel missed his scheduled Shirodhara session yesterday without prior notice.',
    time: '1 day ago',
    priority: 'high',
    actionRequired: true,
    patient: 'Raj Patel',
    icon: XCircle
  },
  {
    id: 8,
    type: 'success',
    category: 'achievement',
    title: 'Treatment Goal Achieved',
    message: 'Meera Singh has successfully completed her initial detoxification phase. Ready for next treatment stage.',
    time: '1 day ago',
    priority: 'medium',
    actionRequired: false,
    patient: 'Meera Singh',
    icon: CheckCircle2
  }
];

const patients = [
  { 
    id: 1, 
    name: 'Priya Sharma', 
    avatar: '/placeholder-avatar.jpg', 
    status: 'active', 
    progress: 75, 
    lastSession: '2 days ago',
    nextSession: 'Today 9:00 AM',
    therapy: 'Abhyanga',
    notes: 'Responding well to treatment',
    totalSessions: 12,
    completedSessions: 9
  },
  { 
    id: 2, 
    name: 'Raj Patel', 
    avatar: '/placeholder-avatar.jpg', 
    status: 'needs-attention', 
    progress: 45, 
    lastSession: '1 week ago',
    nextSession: 'Today 10:30 AM',
    therapy: 'Shirodhara',
    notes: 'Some side effects reported',
    totalSessions: 10,
    completedSessions: 4
  },
  { 
    id: 3, 
    name: 'Meera Singh', 
    avatar: '/placeholder-avatar.jpg', 
    status: 'active', 
    progress: 90, 
    lastSession: '3 days ago',
    nextSession: 'Today 2:00 PM',
    therapy: 'Panchakarma',
    notes: 'Excellent progress',
    totalSessions: 14,
    completedSessions: 12
  }
];

const weeklyData = [
  { name: 'Mon', sessions: 8, satisfaction: 4.5, efficiency: 85 },
  { name: 'Tue', sessions: 12, satisfaction: 4.3, efficiency: 78 },
  { name: 'Wed', sessions: 10, satisfaction: 4.7, efficiency: 92 },
  { name: 'Thu', sessions: 15, satisfaction: 4.4, efficiency: 88 },
  { name: 'Fri', sessions: 9, satisfaction: 4.6, efficiency: 90 },
  { name: 'Sat', sessions: 6, satisfaction: 4.8, efficiency: 95 },
  { name: 'Sun', sessions: 4, satisfaction: 4.9, efficiency: 98 }
];

const taskReminders = [
  { id: 1, task: 'Review Raj Patel\'s adverse reaction report', completed: false, priority: 'urgent', dueDate: 'Today', category: 'patient-care' },
  { id: 2, task: 'Prepare detailed progress report for Meera Singh', completed: false, priority: 'high', dueDate: 'Today', category: 'documentation' },
  { id: 3, task: 'Update treatment protocols per new guidelines', completed: false, priority: 'medium', dueDate: 'Tomorrow', category: 'compliance' },
  { id: 4, task: 'Schedule follow-up consultation with Priya Sharma', completed: true, priority: 'medium', dueDate: 'Yesterday', category: 'scheduling' },
  { id: 5, task: 'Complete continuing education module on Panchakarma', completed: false, priority: 'low', dueDate: 'This Week', category: 'education' }
];

export function PractitionerDashboard({ onPageChange }: PractitionerDashboardProps) {
  const [selectedFilter, setSelectedFilter] = React.useState('today');
  const [notificationFilter, setNotificationFilter] = React.useState('all');
  const [showAllNotifications, setShowAllNotifications] = React.useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rescheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPatientStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'needs-attention': return 'bg-red-100 text-red-800 border-red-200';
      case 'on-treatment': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'urgent': return AlertTriangle;
      case 'appointment': return Calendar;
      case 'completion': return CheckCircle2;
      case 'feedback': return StarIcon;
      case 'system': return Info;
      case 'wellness': return BrainCircuit;
      case 'missed': return XCircle;
      case 'success': return CheckCircle;
      default: return Bell;
    }
  };

  const handleSessionAction = (sessionId: number, action: string) => {
    console.log(`${action} session ${sessionId}`);
  };

  const handleNotificationAction = (notificationId: number, action: string) => {
    console.log(`${action} notification ${notificationId}`);
  };

  const toggleTask = (taskId: number) => {
    console.log(`Toggle task ${taskId}`);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (notificationFilter === 'all') return true;
    if (notificationFilter === 'urgent') return notification.priority === 'urgent';
    if (notificationFilter === 'high') return notification.priority === 'high';
    if (notificationFilter === 'action-required') return notification.actionRequired;
    return notification.category === notificationFilter;
  });

  const displayedNotifications = showAllNotifications 
    ? filteredNotifications 
    : filteredNotifications.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-emerald-900 mb-2">Practitioner Dashboard</h1>
              <div className="flex items-center space-x-4">
                <p className="text-emerald-600 text-lg">Welcome back, Dr. Kamal Raj</p>
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                  <Stethoscope className="w-4 h-4 mr-1" />
                  Ayurveda Specialist
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-emerald-200 shadow-lg">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-xs text-emerald-600">Today</p>
                    <p className="font-medium text-emerald-900">
                      {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium">Today's Sessions</p>
                  <p className="text-3xl font-bold text-emerald-900">{todaysSessions.length}</p>
                  <p className="text-xs text-emerald-500 mt-1">
                    {todaysSessions.filter(s => s.status === 'confirmed').length} confirmed
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-2xl">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-600 text-sm font-medium">Active Patients</p>
                  <p className="text-3xl font-bold text-teal-900">{patients.length}</p>
                  <p className="text-xs text-teal-500 mt-1">
                    {patients.filter(p => p.status === 'needs-attention').length} need attention
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-4 rounded-2xl">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-600 text-sm font-medium">Pending Actions</p>
                  <p className="text-3xl font-bold text-cyan-900">
                    {taskReminders.filter(t => !t.completed && (t.priority === 'urgent' || t.priority === 'high')).length}
                  </p>
                  <p className="text-xs text-cyan-500 mt-1">Urgent tasks due</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-4 rounded-2xl">
                  <CheckSquare className="w-8 h-8 text-cyan-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Notifications</p>
                  <p className="text-3xl font-bold text-orange-900">
                    {notifications.filter(n => n.actionRequired).length}
                  </p>
                  <p className="text-xs text-orange-500 mt-1">Require action</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl">
                  <Bell className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Enhanced Schedule */}
          <Card className="xl:col-span-2 bg-white/95 backdrop-blur-sm border-emerald-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-emerald-900 text-xl">Today's Schedule</CardTitle>
                  <CardDescription className="text-emerald-600">
                    Manage your appointments and sessions
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-32 border-emerald-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    onClick={() => onPageChange('schedule')}
                    variant="outline"
                    size="sm"
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View All
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysSessions.map((session) => (
                  <div key={session.id} className="bg-gradient-to-r from-gray-50 to-emerald-50 border border-emerald-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <Clock className="w-5 h-5 text-emerald-600" />
                        </div>
                        <Avatar className="w-12 h-12 border-2 border-emerald-200">
                          <AvatarImage src={session.avatar} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700">
                            {session.patient.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <p className="font-bold text-gray-900">{session.time}</p>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </div>
                          <p className="font-medium text-gray-900">{session.patient}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{session.therapy}</span>
                            <span>•</span>
                            <span>{session.duration}</span>
                            <span>•</span>
                            <span>{session.room}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSessionAction(session.id, 'approve')}
                          className="text-green-600 border-green-300 hover:bg-green-50"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSessionAction(session.id, 'reschedule')}
                          className="text-blue-600 border-blue-300 hover:bg-blue-50"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSessionAction(session.id, 'cancel')}
                          className="text-red-600 border-red-300 hover:bg-red-50"
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Notifications Center */}
          <Card className="bg-white/95 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-900 flex items-center">
                  <Bell className="w-6 h-6 mr-2" />
                  Notifications Center
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-700">
                  {notifications.filter(n => n.actionRequired).length} Action Required
                </Badge>
              </div>
              <CardDescription className="text-blue-600">
                Stay updated with patient care and system alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select value={notificationFilter} onValueChange={setNotificationFilter}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="Filter notifications" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Notifications</SelectItem>
                    <SelectItem value="urgent">Urgent Only</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="action-required">Action Required</SelectItem>
                    <SelectItem value="patient-alert">Patient Alerts</SelectItem>
                    <SelectItem value="schedule">Schedule Changes</SelectItem>
                    <SelectItem value="patient-feedback">Patient Feedback</SelectItem>
                  </SelectContent>
                </Select>

                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {displayedNotifications.map((notification) => {
                      const IconComponent = notification.icon;
                      return (
                        <div key={notification.id} className={`p-4 rounded-xl border-l-4 hover:shadow-md transition-all duration-200 ${
                          notification.priority === 'urgent' ? 'bg-red-50 border-l-red-500 border border-red-200' :
                          notification.priority === 'high' ? 'bg-orange-50 border-l-orange-500 border border-orange-200' :
                          notification.priority === 'medium' ? 'bg-yellow-50 border-l-yellow-500 border border-yellow-200' :
                          'bg-green-50 border-l-green-500 border border-green-200'
                        }`}>
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${
                              notification.priority === 'urgent' ? 'bg-red-100' :
                              notification.priority === 'high' ? 'bg-orange-100' :
                              notification.priority === 'medium' ? 'bg-yellow-100' :
                              'bg-green-100'
                            }`}>
                              <IconComponent className={`w-4 h-4 ${
                                notification.priority === 'urgent' ? 'text-red-600' :
                                notification.priority === 'high' ? 'text-orange-600' :
                                notification.priority === 'medium' ? 'text-yellow-600' :
                                'text-green-600'
                              }`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                                <Badge className={getPriorityColor(notification.priority)} variant="outline">
                                  {notification.priority}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                  <Timer className="w-3 h-3" />
                                  <span>{notification.time}</span>
                                  {notification.patient && (
                                    <>
                                      <span>•</span>
                                      <UserCheck className="w-3 h-3" />
                                      <span>{notification.patient}</span>
                                    </>
                                  )}
                                </div>
                                {notification.actionRequired && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleNotificationAction(notification.id, 'view')}
                                    className="text-xs px-2 py-1 h-6"
                                  >
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    Action
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>

                {filteredNotifications.length > 6 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAllNotifications(!showAllNotifications)}
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    {showAllNotifications ? 'Show Less' : `View All ${filteredNotifications.length} Notifications`}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Patient Overview & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Enhanced Patient Management */}
          <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-emerald-900 text-xl">Patient Overview</CardTitle>
                  <CardDescription className="text-emerald-600">
                    Monitor patient progress and status
                  </CardDescription>
                </div>
                <Button 
                  onClick={() => onPageChange('patients')}
                  variant="outline"
                  size="sm"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patients.map((patient) => (
                  <div key={patient.id} className="bg-gradient-to-r from-gray-50 to-emerald-50 border border-emerald-100 rounded-xl p-4 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 border-2 border-emerald-200">
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{patient.name}</p>
                          <p className="text-sm text-gray-600">{patient.therapy}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getPatientStatusColor(patient.status)} variant="outline">
                              {patient.status}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {patient.completedSessions}/{patient.totalSessions} sessions
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm text-gray-600">Progress:</span>
                          <span className="text-sm font-medium">{patient.progress}%</span>
                        </div>
                        <Progress value={patient.progress} className="w-24 mb-1" />
                        <p className="text-xs text-gray-500">{patient.nextSession}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Analytics Preview */}
          <Card className="bg-white/95 backdrop-blur-sm border-purple-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-purple-900 text-xl">Performance Analytics</CardTitle>
                  <CardDescription className="text-purple-600">
                    Track your practice performance and trends
                  </CardDescription>
                </div>
                <Button 
                  onClick={() => onPageChange('analytics')}
                  variant="outline"
                  size="sm"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Full Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="sessions" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sessions">Sessions</TabsTrigger>
                  <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
                </TabsList>
                <TabsContent value="sessions" className="space-y-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="name" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip />
                        <Bar dataKey="sessions" fill="#10b981" radius={4} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                <TabsContent value="satisfaction" className="space-y-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="name" className="text-xs" />
                        <YAxis domain={[4, 5]} className="text-xs" />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="satisfaction" 
                          stroke="#8b5cf6" 
                          strokeWidth={3}
                          dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Task Management */}
        <Card className="bg-white/95 backdrop-blur-sm border-blue-200 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-blue-900 text-xl flex items-center">
                  <CheckSquare className="w-6 h-6 mr-2" />
                  Task Management
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Stay organized with your daily tasks and reminders
                </CardDescription>
              </div>
              <Button 
                onClick={() => onPageChange('tasks')}
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <FileText className="w-4 h-4 mr-1" />
                View All Tasks
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                {taskReminders.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-200">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.task}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getPriorityColor(task.priority)} variant="outline">
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-gray-500">{task.dueDate}</span>
                        <span className="text-xs text-blue-600">#{task.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {taskReminders.slice(3).map((task) => (
                  <div key={task.id} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-200">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.task}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={getPriorityColor(task.priority)} variant="outline">
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-gray-500">{task.dueDate}</span>
                        <span className="text-xs text-blue-600">#{task.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}