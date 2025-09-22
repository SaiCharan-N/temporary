import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  RotateCcw,
  Plus,
  Eye,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Edit2,
  Trash2,
  Bell,
  User,
  FileText,
  Timer,
  ChevronDown,
  ChevronUp,
  Star,
  MessageSquare,
  Activity,
  ThermometerSun
} from 'lucide-react';

interface ScheduleManagementProps {
  onPageChange: (page: string) => void;
}

// Extended mock data with more upcoming appointments
const allSessions = [
  {
    id: 1,
    date: new Date(2024, 11, 15),
    time: '09:00',
    endTime: '10:00',
    duration: 60,
    patient: {
      name: 'Priya Sharma',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
      age: 32,
      dosha: 'Vata-Pitta'
    },
    therapy: 'Abhyanga',
    status: 'confirmed',
    notes: 'First session of the treatment cycle. Focus on stress relief.',
    priority: 'medium',
    room: 'Room A',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 1,
    totalSessions: 12,
    preparations: ['Light meal 2 hours before', 'Wear comfortable clothes'],
    specialInstructions: 'Patient has sensitive skin, use gentle pressure'
  },
  {
    id: 2,
    date: new Date(2024, 11, 15),
    time: '10:30',
    endTime: '11:15',
    duration: 45,
    patient: {
      name: 'Raj Patel',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 87654 32109',
      email: 'raj.patel@email.com',
      age: 45,
      dosha: 'Kapha'
    },
    therapy: 'Shirodhara',
    status: 'pending',
    notes: 'Follow-up session after initial consultation. Monitor blood pressure.',
    priority: 'high',
    room: 'Room B',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 3,
    totalSessions: 8,
    preparations: ['Avoid heavy meals', 'Come relaxed'],
    specialInstructions: 'Check vital signs before starting'
  },
  {
    id: 3,
    date: new Date(2024, 11, 15),
    time: '14:00',
    endTime: '15:30',
    duration: 90,
    patient: {
      name: 'Meera Singh',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 76543 21098',
      email: 'meera.singh@email.com',
      age: 38,
      dosha: 'Pitta'
    },
    therapy: 'Panchakarma',
    status: 'confirmed',
    notes: 'Intensive detox session - day 3 of 7. Patient responding well.',
    priority: 'high',
    room: 'Room C',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 3,
    totalSessions: 7,
    preparations: ['Fasting required', 'Bring extra clothes'],
    specialInstructions: 'Full detox protocol, monitor closely'
  },
  {
    id: 4,
    date: new Date(2024, 11, 16),
    time: '09:30',
    endTime: '10:00',
    duration: 30,
    patient: {
      name: 'Amit Kumar',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 65432 10987',
      email: 'amit.kumar@email.com',
      age: 29,
      dosha: 'Vata'
    },
    therapy: 'Yoga Therapy',
    status: 'rescheduled',
    notes: 'Rescheduled from previous week due to patient illness.',
    priority: 'low',
    room: 'Studio 1',
    practitioner: 'Dr. Anjali Nair',
    sessionNumber: 5,
    totalSessions: 10,
    preparations: ['Bring yoga mat', 'Comfortable clothing'],
    specialInstructions: 'Focus on breathing exercises'
  },
  {
    id: 5,
    date: new Date(2024, 11, 16),
    time: '11:00',
    endTime: '12:15',
    duration: 75,
    patient: {
      name: 'Sunita Verma',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 54321 09876',
      email: 'sunita.verma@email.com',
      age: 42,
      dosha: 'Kapha-Vata'
    },
    therapy: 'Abhyanga',
    status: 'confirmed',
    notes: 'Regular maintenance session. Patient prefers moderate pressure.',
    priority: 'medium',
    room: 'Room A',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 8,
    totalSessions: 12,
    preparations: ['Light breakfast', 'Hydrate well'],
    specialInstructions: 'Use warm sesame oil'
  },
  {
    id: 6,
    date: new Date(2024, 11, 17),
    time: '08:30',
    endTime: '09:30',
    duration: 60,
    patient: {
      name: 'Vikram Agarwal',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 43210 98765',
      email: 'vikram.agarwal@email.com',
      age: 35,
      dosha: 'Pitta-Vata'
    },
    therapy: 'Nasya',
    status: 'confirmed',
    notes: 'Nasal therapy for sinus issues. New patient consultation completed.',
    priority: 'medium',
    room: 'Room B',
    practitioner: 'Dr. Anjali Nair',
    sessionNumber: 1,
    totalSessions: 5,
    preparations: ['Empty stomach', 'No nasal medications'],
    specialInstructions: 'First session, explain procedure thoroughly'
  },
  {
    id: 7,
    date: new Date(2024, 11, 17),
    time: '15:00',
    endTime: '16:00',
    duration: 60,
    patient: {
      name: 'Kavya Reddy',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 32109 87654',
      email: 'kavya.reddy@email.com',
      age: 27,
      dosha: 'Vata'
    },
    therapy: 'Shirodhara',
    status: 'pending',
    notes: 'Stress and anxiety management. Patient works in high-stress job.',
    priority: 'high',
    room: 'Room C',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 2,
    totalSessions: 6,
    preparations: ['Avoid caffeine', 'Come relaxed'],
    specialInstructions: 'Focus on mental relaxation techniques'
  },
  {
    id: 8,
    date: new Date(2024, 11, 18),
    time: '10:00',
    endTime: '11:30',
    duration: 90,
    patient: {
      name: 'Ramesh Gupta',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 21098 76543',
      email: 'ramesh.gupta@email.com',
      age: 55,
      dosha: 'Kapha'
    },
    therapy: 'Panchakarma',
    status: 'confirmed',
    notes: 'Weight management program. Patient has diabetes, monitor closely.',
    priority: 'high',
    room: 'Room A',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 5,
    totalSessions: 14,
    preparations: ['Check blood sugar', 'Light breakfast only'],
    specialInstructions: 'Monitor vitals throughout session'
  },
  {
    id: 9,
    date: new Date(2024, 11, 19),
    time: '09:00',
    endTime: '09:45',
    duration: 45,
    patient: {
      name: 'Anita Joshi',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 10987 65432',
      email: 'anita.joshi@email.com',
      age: 31,
      dosha: 'Pitta'
    },
    therapy: 'Udvartana',
    status: 'confirmed',
    notes: 'Herbal powder massage for skin health and weight management.',
    priority: 'medium',
    room: 'Room B',
    practitioner: 'Dr. Anjali Nair',
    sessionNumber: 4,
    totalSessions: 8,
    preparations: ['Shower before coming', 'Comfortable clothes'],
    specialInstructions: 'Use cooling herbs due to Pitta constitution'
  },
  {
    id: 10,
    date: new Date(2024, 11, 20),
    time: '16:30',
    endTime: '17:30',
    duration: 60,
    patient: {
      name: 'Deepak Sharma',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 09876 54321',
      email: 'deepak.sharma@email.com',
      age: 40,
      dosha: 'Vata-Kapha'
    },
    therapy: 'Karna Purana',
    status: 'pending',
    notes: 'Ear therapy for hearing issues and tinnitus. Requires specialist attention.',
    priority: 'high',
    room: 'Room C',
    practitioner: 'Dr. Kamal Raj',
    sessionNumber: 2,
    totalSessions: 7,
    preparations: ['Clean ears gently', 'No ear drops'],
    specialInstructions: 'Check for ear infections before treatment'
  }
];

export function ScheduleManagement({ onPageChange }: ScheduleManagementProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [viewType, setViewType] = React.useState<'day' | 'week' | 'month' | 'upcoming'>('upcoming');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSession, setSelectedSession] = React.useState<any>(null);
  const [isRescheduleOpen, setIsRescheduleOpen] = React.useState(false);
  const [isEditOpen, setIsEditOpen] = React.useState(false);
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = React.useState(false);
  const [expandedSession, setExpandedSession] = React.useState<number | null>(null);
  const [rescheduleData, setRescheduleData] = React.useState({
    date: '',
    time: '',
    reason: ''
  });
  const [editData, setEditData] = React.useState({
    notes: '',
    specialInstructions: '',
    room: '',
    duration: ''
  });
  const [newAppointment, setNewAppointment] = React.useState({
    patient: '',
    therapy: '',
    date: '',
    time: '',
    duration: '60',
    room: '',
    priority: 'medium',
    notes: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rescheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-300 bg-gray-50';
    }
  };

  const getRoomColor = (room: string) => {
    switch (room) {
      case 'Room A': return 'bg-blue-100 text-blue-800';
      case 'Room B': return 'bg-purple-100 text-purple-800';
      case 'Room C': return 'bg-emerald-100 text-emerald-800';
      case 'Studio 1': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.toDateString() === date2.toDateString();
  };

  const isSameMonth = (date1: Date, date2: Date) => {
    return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  const getWeekStart = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
  };

  const getWeekEnd = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + 6;
    return new Date(d.setDate(diff));
  };

  const filteredSessions = allSessions.filter(session => {
    const matchesStatus = filterStatus === 'all' || session.status === filterStatus;
    const matchesSearch = searchTerm === '' || 
      session.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.therapy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.room.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesDate = true;
    if (viewType === 'day') {
      matchesDate = isSameDay(session.date, currentDate);
    } else if (viewType === 'week') {
      const weekStart = getWeekStart(currentDate);
      const weekEnd = getWeekEnd(currentDate);
      matchesDate = session.date >= weekStart && session.date <= weekEnd;
    } else if (viewType === 'month') {
      matchesDate = isSameMonth(session.date, currentDate);
    } else if (viewType === 'upcoming') {
      matchesDate = session.date >= new Date();
    }

    return matchesStatus && matchesSearch && matchesDate;
  }).sort((a, b) => {
    // Sort by date first, then by time
    const dateCompare = a.date.getTime() - b.date.getTime();
    if (dateCompare === 0) {
      return a.time.localeCompare(b.time);
    }
    return dateCompare;
  });

  const handleSessionAction = (sessionId: number, action: string) => {
    console.log(`${action} session ${sessionId}`);
    const session = allSessions.find(s => s.id === sessionId);
    
    if (action === 'reschedule') {
      setSelectedSession(session);
      setIsRescheduleOpen(true);
    } else if (action === 'edit') {
      setSelectedSession(session);
      setEditData({
        notes: session?.notes || '',
        specialInstructions: session?.specialInstructions || '',
        room: session?.room || '',
        duration: session?.duration.toString() || ''
      });
      setIsEditOpen(true);
    } else if (action === 'cancel') {
      // Handle cancellation - would update session status
      console.log('Cancelling session:', sessionId);
    } else if (action === 'approve') {
      // Handle approval - would update session status
      console.log('Approving session:', sessionId);
    }
  };

  const handleReschedule = () => {
    console.log('Rescheduling session:', selectedSession?.id, rescheduleData);
    setIsRescheduleOpen(false);
    setRescheduleData({ date: '', time: '', reason: '' });
    setSelectedSession(null);
  };

  const handleEdit = () => {
    console.log('Editing session:', selectedSession?.id, editData);
    setIsEditOpen(false);
    setEditData({ notes: '', specialInstructions: '', room: '', duration: '' });
    setSelectedSession(null);
  };

  const handleNewAppointment = () => {
    console.log('Creating new appointment:', newAppointment);
    setIsNewAppointmentOpen(false);
    setNewAppointment({
      patient: '',
      therapy: '',
      date: '',
      time: '',
      duration: '60',
      room: '',
      priority: 'medium',
      notes: ''
    });
  };

  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    if (viewType === 'day') {
      setCurrentDate(prev => addDays(prev, direction === 'next' ? 1 : -1));
    } else if (viewType === 'week') {
      setCurrentDate(prev => addDays(prev, direction === 'next' ? 7 : -7));
    } else if (viewType === 'month') {
      setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + (direction === 'next' ? 1 : -1), 1));
    }
  };

  const formatDate = (date: Date, type: 'full' | 'short' | 'month') => {
    const options: Intl.DateTimeFormatOptions = {};
    if (type === 'full') {
      options.weekday = 'long';
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
    } else if (type === 'short') {
      options.month = 'short';
      options.day = 'numeric';
    } else if (type === 'month') {
      options.year = 'numeric';
      options.month = 'long';
    }
    return date.toLocaleDateString('en-US', options);
  };

  const getDateRangeText = () => {
    if (viewType === 'day') {
      return formatDate(currentDate, 'full');
    } else if (viewType === 'week') {
      const weekStart = getWeekStart(currentDate);
      const weekEnd = getWeekEnd(currentDate);
      return `${formatDate(weekStart, 'short')} - ${formatDate(weekEnd, 'short')}, ${weekEnd.getFullYear()}`;
    } else if (viewType === 'month') {
      return formatDate(currentDate, 'month');
    } else if (viewType === 'upcoming') {
      return 'All Upcoming Appointments';
    }
    return '';
  };

  const isUpcoming = viewType === 'upcoming';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Schedule Management</h1>
            <p className="text-emerald-600 text-lg">Manage appointments and therapy sessions with comprehensive controls</p>
          </div>
          <div className="flex items-center space-x-4">
            <Dialog open={isNewAppointmentOpen} onOpenChange={setIsNewAppointmentOpen}>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Appointment</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="patient">Patient Name</Label>
                      <Input
                        id="patient"
                        placeholder="Enter patient name"
                        value={newAppointment.patient}
                        onChange={(e) => setNewAppointment(prev => ({ ...prev, patient: e.target.value }))}
                      />
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
                          <SelectItem value="nasya">Nasya</SelectItem>
                          <SelectItem value="udvartana">Udvartana</SelectItem>
                          <SelectItem value="karna-purana">Karna Purana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input 
                          id="date"
                          type="date" 
                          value={newAppointment.date}
                          onChange={(e) => setNewAppointment(prev => ({ ...prev, date: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input 
                          id="time"
                          type="time" 
                          value={newAppointment.time}
                          onChange={(e) => setNewAppointment(prev => ({ ...prev, time: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Duration (min)</Label>
                        <Select value={newAppointment.duration} onValueChange={(value) => 
                          setNewAppointment(prev => ({ ...prev, duration: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="75">75 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="room">Room</Label>
                        <Select value={newAppointment.room} onValueChange={(value) => 
                          setNewAppointment(prev => ({ ...prev, room: value }))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Room A">Room A</SelectItem>
                            <SelectItem value="Room B">Room B</SelectItem>
                            <SelectItem value="Room C">Room C</SelectItem>
                            <SelectItem value="Studio 1">Studio 1</SelectItem>
                          </SelectContent>
                        </Select>
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
                    <div>
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Additional notes..."
                        value={newAppointment.notes}
                        onChange={(e) => setNewAppointment(prev => ({ ...prev, notes: e.target.value }))}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleNewAppointment} className="flex-1">
                    Create Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsNewAppointmentOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
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

        {/* Enhanced Controls */}
        <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 mb-8 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              {/* View Type Tabs */}
              <div className="flex items-center justify-between">
                <Tabs value={viewType} onValueChange={(value: any) => setViewType(value)} className="w-auto">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="day">Day</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Date Navigation - Hidden for Upcoming view */}
                {!isUpcoming && (
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateDate('prev')}
                      className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div className="text-center min-w-[250px]">
                      <p className="font-medium text-emerald-900">{getDateRangeText()}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateDate('next')}
                      className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date())}
                      className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    >
                      Today
                    </Button>
                  </div>
                )}
              </div>

              {/* Search and Filter */}
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search patients, therapy, or room..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rescheduled">Rescheduled</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{filteredSessions.length} sessions</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Sessions List */}
        <div className="space-y-4">
          {filteredSessions.length === 0 ? (
            <Card className="bg-white/95 backdrop-blur-sm border-gray-200 shadow-xl">
              <CardContent className="p-12 text-center">
                <CalendarDays className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No sessions found</h3>
                <p className="text-gray-600 mb-6">No sessions match your current filters for the selected time period.</p>
                <Button onClick={() => setIsNewAppointmentOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule New Appointment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Group sessions by date for upcoming view */}
              {isUpcoming ? (
                (() => {
                  const groupedSessions = filteredSessions.reduce((groups: any, session) => {
                    const dateKey = session.date.toDateString();
                    if (!groups[dateKey]) {
                      groups[dateKey] = [];
                    }
                    groups[dateKey].push(session);
                    return groups;
                  }, {});

                  return Object.entries(groupedSessions).map(([dateKey, sessions]: [string, any]) => (
                    <div key={dateKey} className="space-y-4">
                      <div className="flex items-center space-x-3 pt-6 pb-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <h3 className="text-lg font-medium text-emerald-900">
                          {formatDate(new Date(dateKey), 'full')}
                        </h3>
                        <div className="flex-1 h-px bg-emerald-200"></div>
                        <Badge className="bg-emerald-100 text-emerald-700">
                          {(sessions as any[]).length} sessions
                        </Badge>
                      </div>
                      {(sessions as any[]).map((session) => (
                        <SessionCard 
                          key={session.id} 
                          session={session} 
                          expandedSession={expandedSession}
                          setExpandedSession={setExpandedSession}
                          handleSessionAction={handleSessionAction}
                          getPriorityColor={getPriorityColor}
                          getStatusColor={getStatusColor}
                          getRoomColor={getRoomColor}
                        />
                      ))}
                    </div>
                  ));
                })()
              ) : (
                filteredSessions.map((session) => (
                  <SessionCard 
                    key={session.id} 
                    session={session} 
                    expandedSession={expandedSession}
                    setExpandedSession={setExpandedSession}
                    handleSessionAction={handleSessionAction}
                    getPriorityColor={getPriorityColor}
                    getStatusColor={getStatusColor}
                    getRoomColor={getRoomColor}
                  />
                ))
              )}
            </>
          )}
        </div>

        {/* Reschedule Dialog */}
        <Dialog open={isRescheduleOpen} onOpenChange={setIsRescheduleOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Reschedule Session</DialogTitle>
            </DialogHeader>
            {selectedSession && (
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Avatar>
                      <AvatarImage src={selectedSession.patient.avatar} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">
                        {selectedSession.patient.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedSession.patient.name}</p>
                      <p className="text-sm text-gray-600">{selectedSession.therapy}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Current: {selectedSession.date.toLocaleDateString('en-US', { 
                      weekday: 'short',
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} at {selectedSession.time} - {selectedSession.endTime}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reschedule-date">New Date</Label>
                    <Input 
                      id="reschedule-date"
                      type="date" 
                      value={rescheduleData.date}
                      onChange={(e) => setRescheduleData(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reschedule-time">New Time</Label>
                    <Input 
                      id="reschedule-time"
                      type="time" 
                      value={rescheduleData.time}
                      onChange={(e) => setRescheduleData(prev => ({ ...prev, time: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reschedule-reason">Reason for Rescheduling</Label>
                  <Textarea 
                    id="reschedule-reason"
                    placeholder="Explain why this session needs to be rescheduled..."
                    value={rescheduleData.reason}
                    onChange={(e) => setRescheduleData(prev => ({ ...prev, reason: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleReschedule} className="flex-1">
                    Confirm Reschedule
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsRescheduleOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit Session Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Session Details</DialogTitle>
            </DialogHeader>
            {selectedSession && (
              <div className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={selectedSession.patient.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {selectedSession.patient.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedSession.patient.name}</p>
                      <p className="text-sm text-gray-600">{selectedSession.therapy}</p>
                      <p className="text-xs text-gray-500">
                        {selectedSession.date.toLocaleDateString('en-US', { 
                          weekday: 'short',
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })} at {selectedSession.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="edit-room">Room Assignment</Label>
                      <Select value={editData.room} onValueChange={(value) => 
                        setEditData(prev => ({ ...prev, room: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Room A">Room A</SelectItem>
                          <SelectItem value="Room B">Room B</SelectItem>
                          <SelectItem value="Room C">Room C</SelectItem>
                          <SelectItem value="Studio 1">Studio 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="edit-duration">Duration (minutes)</Label>
                      <Select value={editData.duration} onValueChange={(value) => 
                        setEditData(prev => ({ ...prev, duration: value }))
                      }>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="75">75 minutes</SelectItem>
                          <SelectItem value="90">90 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="edit-notes">Session Notes</Label>
                      <Textarea
                        id="edit-notes"
                        placeholder="Add session notes..."
                        value={editData.notes}
                        onChange={(e) => setEditData(prev => ({ ...prev, notes: e.target.value }))}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-instructions">Special Instructions</Label>
                      <Textarea
                        id="edit-instructions"
                        placeholder="Special care instructions..."
                        value={editData.specialInstructions}
                        onChange={(e) => setEditData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleEdit} className="flex-1">
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// Separate SessionCard component for better organization
function SessionCard({ 
  session, 
  expandedSession, 
  setExpandedSession, 
  handleSessionAction, 
  getPriorityColor, 
  getStatusColor, 
  getRoomColor 
}: any) {
  const isExpanded = expandedSession === session.id;

  return (
    <Card className={`bg-white/95 backdrop-blur-sm border-l-4 ${getPriorityColor(session.priority)} shadow-lg hover:shadow-xl transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Main Session Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Time Block */}
              <div className="flex items-center space-x-2 bg-emerald-100 px-4 py-3 rounded-xl border border-emerald-200">
                <Clock className="w-5 h-5 text-emerald-600" />
                <div className="text-center">
                  <p className="font-bold text-emerald-900">{session.time}</p>
                  <p className="text-xs text-emerald-600">{session.duration} min</p>
                </div>
              </div>

              {/* Patient Info */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 border-2 border-emerald-200">
                  <AvatarImage src={session.patient.avatar} />
                  <AvatarFallback className="bg-teal-100 text-teal-700">
                    {session.patient.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{session.patient.name}</p>
                  <p className="text-sm text-gray-600">{session.therapy}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={getStatusColor(session.status)}>
                      {session.status}
                    </Badge>
                    <Badge className={getRoomColor(session.room)} variant="outline">
                      {session.room}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Session Progress */}
              <div className="text-center">
                <p className="text-sm text-gray-600">Session Progress</p>
                <p className="font-medium">{session.sessionNumber}/{session.totalSessions}</p>
                <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(session.sessionNumber / session.totalSessions) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSessionAction(session.id, 'approve')}
                className="text-green-600 border-green-300 hover:bg-green-50"
                disabled={session.status === 'confirmed'}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                {session.status === 'confirmed' ? 'Approved' : 'Approve'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSessionAction(session.id, 'edit')}
                className="text-blue-600 border-blue-300 hover:bg-blue-50"
              >
                <Edit2 className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSessionAction(session.id, 'reschedule')}
                className="text-orange-600 border-orange-300 hover:bg-orange-50"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reschedule
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Cancel
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center space-x-2 text-red-600">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Cancel Session</span>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to cancel this session with {session.patient.name}? 
                      This action cannot be undone and the patient will be notified.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Session</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleSessionAction(session.id, 'cancel')}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Yes, Cancel Session
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setExpandedSession(isExpanded ? null : session.id)}
                className="text-gray-600 border-gray-300 hover:bg-gray-50"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Patient Details */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-600" />
                    Patient Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3 h-3 text-gray-400" />
                      <span>{session.patient.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3 h-3 text-gray-400" />
                      <span>{session.patient.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-3 h-3 text-gray-400" />
                      <span>Age: {session.patient.age}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ThermometerSun className="w-3 h-3 text-gray-400" />
                      <span>Dosha: {session.patient.dosha}</span>
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-green-600" />
                    Session Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Timer className="w-3 h-3 text-gray-400" />
                      <span>Duration: {session.duration} minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span>Location: {session.room}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-gray-400" />
                      <span>Practitioner: {session.practitioner}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-gray-400" />
                      <span>Priority: {session.priority}</span>
                    </div>
                  </div>
                </div>

                {/* Preparations & Instructions */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <Bell className="w-4 h-4 mr-2 text-orange-600" />
                    Preparations
                  </h4>
                  <div className="space-y-2">
                    {session.preparations.map((prep: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{prep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Notes and Special Instructions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-purple-600" />
                    Session Notes
                  </h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{session.notes}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2 text-red-600" />
                    Special Instructions
                  </h4>
                  <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg border border-red-200">{session.specialInstructions}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}