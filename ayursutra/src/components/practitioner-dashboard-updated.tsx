import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  Plus,
  Eye,
  Filter,
  FileText,
  MessageSquare,
  CheckSquare,
  Upload,
  Download,
  Bell,
  Activity,
  Heart,
  Leaf,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar as CalendarIcon,
  Search
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PractitionerDashboardProps {
  onPageChange: (page: string) => void;
}

// Mock data
const todaysSessions = [
  { id: 1, time: '09:00', patient: 'Priya Sharma', therapy: 'Abhyanga', status: 'confirmed', duration: '60 min' },
  { id: 2, time: '10:30', patient: 'Raj Patel', therapy: 'Shirodhara', status: 'pending', duration: '45 min' },
  { id: 3, time: '14:00', patient: 'Meera Singh', therapy: 'Panchakarma', status: 'confirmed', duration: '90 min' },
  { id: 4, time: '16:00', patient: 'Amit Kumar', therapy: 'Yoga Therapy', status: 'rescheduled', duration: '30 min' }
];

const urgentAlerts = [
  { id: 1, type: 'missed', message: 'Priya Sharma missed yesterday\'s session', priority: 'high', time: '2 hours ago' },
  { id: 2, type: 'report', message: 'Raj Patel submitted adverse reaction report', priority: 'urgent', time: '30 min ago' },
  { id: 3, type: 'follow-up', message: 'Meera Singh needs follow-up consultation', priority: 'medium', time: '1 hour ago' }
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
    notes: 'Responding well to treatment'
  },
  { 
    id: 2, 
    name: 'Raj Patel', 
    avatar: '/placeholder-avatar.jpg', 
    status: 'on treatment', 
    progress: 45, 
    lastSession: '1 week ago',
    nextSession: 'Today 10:30 AM',
    therapy: 'Shirodhara',
    notes: 'Some side effects reported'
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
    notes: 'Excellent progress'
  }
];

const weeklyData = [
  { name: 'Mon', sessions: 8, improvement: 85 },
  { name: 'Tue', sessions: 12, improvement: 78 },
  { name: 'Wed', sessions: 10, improvement: 82 },
  { name: 'Thu', sessions: 15, improvement: 88 },
  { name: 'Fri', sessions: 9, improvement: 75 },
  { name: 'Sat', sessions: 6, improvement: 80 },
  { name: 'Sun', sessions: 4, improvement: 92 }
];

const therapyDistribution = [
  { name: 'Abhyanga', value: 35, color: '#10b981' },
  { name: 'Shirodhara', value: 25, color: '#3b82f6' },
  { name: 'Panchakarma', value: 20, color: '#8b5cf6' },
  { name: 'Yoga Therapy', value: 20, color: '#f59e0b' }
];

const taskReminders = [
  { id: 1, task: 'Review Patient X report', completed: false, priority: 'high', dueDate: 'Today' },
  { id: 2, task: 'Prepare diet chart for Meera Singh', completed: true, priority: 'medium', dueDate: 'Yesterday' },
  { id: 3, task: 'Follow up with Raj Patel', completed: false, priority: 'urgent', dueDate: 'Today' },
  { id: 4, task: 'Update treatment protocols', completed: false, priority: 'low', dueDate: 'Tomorrow' }
];

export function PractitionerDashboard({ onPageChange }: PractitionerDashboardProps) {
  const [selectedFilter, setSelectedFilter] = React.useState('today');
  const [showAllAlerts, setShowAllAlerts] = React.useState(false);
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = React.useState(false);
  const [newAppointment, setNewAppointment] = React.useState({
    patient: '',
    therapy: '',
    date: '',
    time: '',
    priority: 'medium'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rescheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const handleCreateAppointment = () => {
    console.log('Creating appointment:', newAppointment);
    setIsNewAppointmentOpen(false);
    setNewAppointment({ patient: '', therapy: '', date: '', time: '', priority: 'medium' });
  };

  const handleSessionAction = (sessionId: number, action: string) => {
    console.log(`${action} session ${sessionId}`);
  };

  const toggleTask = (taskId: number) => {
    console.log(`Toggle task ${taskId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-emerald-900 mb-2">Practitioner Dashboard</h1>
              <p className="text-emerald-600">Welcome back, Dr. Kamal Raj</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium">Today's Sessions</p>
                  <p className="text-2xl font-bold text-emerald-900">{todaysSessions.length}</p>
                </div>
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-teal-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-600 text-sm font-medium">Active Patients</p>
                  <p className="text-2xl font-bold text-teal-900">{patients.length}</p>
                </div>
                <div className="bg-teal-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-cyan-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-600 text-sm font-medium">Pending Approvals</p>
                  <p className="text-2xl font-bold text-cyan-900">
                    {todaysSessions.filter(s => s.status === 'pending').length}
                  </p>
                </div>
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Urgent Alerts</p>
                  <p className="text-2xl font-bold text-orange-900">
                    {urgentAlerts.filter(a => a.priority === 'urgent').length}
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* View Schedule */}
          <Card className="lg:col-span-2 bg-white/90 backdrop-blur-sm border-emerald-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-emerald-900">Today's Schedule</CardTitle>
                  <CardDescription className="text-emerald-600">
                    Manage your appointments and sessions
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-32">
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
                  <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Clock className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{session.time}</p>
                        <p className="text-sm text-gray-600">{session.duration}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{session.patient}</p>
                        <p className="text-sm text-gray-600">{session.therapy}</p>
                      </div>
                      <Badge className={getStatusColor(session.status)}>
                        {session.status}
                      </Badge>
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
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts Section */}
          <Card className="bg-white/90 backdrop-blur-sm border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Urgent Alerts
              </CardTitle>
              <CardDescription className="text-orange-600">
                Notifications requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {urgentAlerts.slice(0, showAllAlerts ? urgentAlerts.length : 3).map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg border ${getPriorityColor(alert.priority)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs mt-1 opacity-75">{alert.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {alert.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
                {urgentAlerts.length > 3 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAllAlerts(!showAllAlerts)}
                    className="w-full mt-3"
                  >
                    {showAllAlerts ? 'Show Less' : 'View All Alerts'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Quick Actions - New Appointment */}
          <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-emerald-600">
                Manage appointments and patient care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Dialog open={isNewAppointmentOpen} onOpenChange={setIsNewAppointmentOpen}>
                  <DialogTrigger asChild>
                    <Button className="h-20 bg-emerald-600 hover:bg-emerald-700 flex flex-col items-center justify-center">
                      <Plus className="w-6 h-6 mb-1" />
                      New Appointment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Create New Appointment</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="patient">Patient Name</Label>
                        <Select value={newAppointment.patient} onValueChange={(value) => 
                          setNewAppointment(prev => ({ ...prev, patient: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select patient" />
                          </SelectTrigger>
                          <SelectContent>
                            {patients.map(patient => (
                              <SelectItem key={patient.id} value={patient.name}>
                                {patient.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="therapy">Therapy Type</Label>
                        <Select value={newAppointment.therapy} onValueChange={(value) => 
                          setNewAppointment(prev => ({ ...prev, therapy: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select therapy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="abhyanga">Abhyanga</SelectItem>
                            <SelectItem value="shirodhara">Shirodhara</SelectItem>
                            <SelectItem value="panchakarma">Panchakarma</SelectItem>
                            <SelectItem value="yoga">Yoga Therapy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Date</Label>
                          <Input 
                            type="date" 
                            value={newAppointment.date}
                            onChange={(e) => setNewAppointment(prev => ({ ...prev, date: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Time</Label>
                          <Input 
                            type="time" 
                            value={newAppointment.time}
                            onChange={(e) => setNewAppointment(prev => ({ ...prev, time: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select value={newAppointment.priority} onValueChange={(value) => 
                          setNewAppointment(prev => ({ ...prev, priority: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex space-x-3 pt-4">
                        <Button onClick={handleCreateAppointment} className="flex-1">
                          Save
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsNewAppointmentOpen(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button 
                  onClick={() => onPageChange('patients')}
                  variant="outline"
                  className="h-20 border-teal-300 text-teal-700 hover:bg-teal-50 flex flex-col items-center justify-center"
                >
                  <Users className="w-6 h-6 mb-1" />
                  Patient Management
                </Button>

                <Button 
                  onClick={() => onPageChange('analytics')}
                  variant="outline"
                  className="h-20 border-blue-300 text-blue-700 hover:bg-blue-50 flex flex-col items-center justify-center"
                >
                  <TrendingUp className="w-6 h-6 mb-1" />
                  Analytics
                </Button>

                <Button 
                  onClick={() => onPageChange('feedback-viewer')}
                  variant="outline"
                  className="h-20 border-purple-300 text-purple-700 hover:bg-purple-50 flex flex-col items-center justify-center"
                >
                  <MessageSquare className="w-6 h-6 mb-1" />
                  Session Feedback
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Task Reminders */}
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center">
                <CheckSquare className="w-5 h-5 mr-2" />
                Task Reminders
              </CardTitle>
              <CardDescription className="text-blue-600">
                Your daily checklist and reminders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {taskReminders.map((task) => (
                  <div key={task.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.task}
                      </p>
                      <p className="text-xs text-gray-500">{task.dueDate}</p>
                    </div>
                    <Badge className={getPriorityColor(task.priority)} variant="outline">
                      {task.priority}
                    </Badge>
                  </div>
                ))}
                <Button 
                  onClick={() => onPageChange('tasks')}
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-3"
                >
                  View All Tasks
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient Overview & Analytics Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Management Preview */}
          <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-emerald-900">Recent Patients</CardTitle>
                  <CardDescription className="text-emerald-600">
                    Quick overview of patient status
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
                {patients.slice(0, 3).map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={patient.avatar} />
                        <AvatarFallback className="bg-emerald-100 text-emerald-700">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-600">{patient.therapy}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            variant="outline" 
                            className={patient.status === 'active' ? 'border-green-300 text-green-700' : 'border-orange-300 text-orange-700'}
                          >
                            {patient.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-600">Progress:</span>
                        <span className="text-sm font-medium">{patient.progress}%</span>
                      </div>
                      <Progress value={patient.progress} className="w-20" />
                      <p className="text-xs text-gray-500 mt-1">{patient.nextSession}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analytics Preview */}
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-blue-900">Weekly Performance</CardTitle>
                  <CardDescription className="text-blue-600">
                    Sessions and patient improvement trends
                  </CardDescription>
                </div>
                <Button 
                  onClick={() => onPageChange('analytics')}
                  variant="outline"
                  size="sm"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  View Analytics
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="improvement" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}