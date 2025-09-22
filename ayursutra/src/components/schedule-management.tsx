import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
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
  CalendarDays
} from 'lucide-react';
// Using built-in Date methods instead of date-fns for compatibility

interface ScheduleManagementProps {
  onPageChange: (page: string) => void;
}

// Mock data for detailed sessions
const allSessions = [
  {
    id: 1,
    date: new Date(2024, 11, 15),
    time: '09:00',
    duration: 60,
    patient: {
      name: 'Priya Sharma',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com'
    },
    therapy: 'Abhyanga',
    status: 'confirmed',
    notes: 'First session of the treatment cycle',
    priority: 'medium'
  },
  {
    id: 2,
    date: new Date(2024, 11, 15),
    time: '10:30',
    duration: 45,
    patient: {
      name: 'Raj Patel',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 87654 32109',
      email: 'raj.patel@email.com'
    },
    therapy: 'Shirodhara',
    status: 'pending',
    notes: 'Follow-up session after initial consultation',
    priority: 'high'
  },
  {
    id: 3,
    date: new Date(2024, 11, 15),
    time: '14:00',
    duration: 90,
    patient: {
      name: 'Meera Singh',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 76543 21098',
      email: 'meera.singh@email.com'
    },
    therapy: 'Panchakarma',
    status: 'confirmed',
    notes: 'Intensive detox session - day 3 of 7',
    priority: 'high'
  },
  {
    id: 4,
    date: new Date(2024, 11, 16),
    time: '09:30',
    duration: 30,
    patient: {
      name: 'Amit Kumar',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 65432 10987',
      email: 'amit.kumar@email.com'
    },
    therapy: 'Yoga Therapy',
    status: 'rescheduled',
    notes: 'Rescheduled from previous week',
    priority: 'low'
  },
  {
    id: 5,
    date: new Date(2024, 11, 17),
    time: '11:00',
    duration: 75,
    patient: {
      name: 'Sunita Verma',
      avatar: '/placeholder-avatar.jpg',
      phone: '+91 54321 09876',
      email: 'sunita.verma@email.com'
    },
    therapy: 'Abhyanga',
    status: 'confirmed',
    notes: 'Regular maintenance session',
    priority: 'medium'
  }
];

export function ScheduleManagement({ onPageChange }: ScheduleManagementProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [viewType, setViewType] = React.useState<'day' | 'week' | 'month'>('day');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSession, setSelectedSession] = React.useState<any>(null);
  const [isRescheduleOpen, setIsRescheduleOpen] = React.useState(false);
  const [rescheduleData, setRescheduleData] = React.useState({
    date: '',
    time: '',
    reason: ''
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
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
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
      session.therapy.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesDate = true;
    if (viewType === 'day') {
      matchesDate = isSameDay(session.date, currentDate);
    } else if (viewType === 'week') {
      const weekStart = getWeekStart(currentDate);
      const weekEnd = getWeekEnd(currentDate);
      matchesDate = session.date >= weekStart && session.date <= weekEnd;
    } else if (viewType === 'month') {
      matchesDate = isSameMonth(session.date, currentDate);
    }

    return matchesStatus && matchesSearch && matchesDate;
  });

  const handleSessionAction = (sessionId: number, action: string) => {
    console.log(`${action} session ${sessionId}`);
    if (action === 'reschedule') {
      const session = allSessions.find(s => s.id === sessionId);
      setSelectedSession(session);
      setIsRescheduleOpen(true);
    }
  };

  const handleReschedule = () => {
    console.log('Rescheduling session:', selectedSession?.id, rescheduleData);
    setIsRescheduleOpen(false);
    setRescheduleData({ date: '', time: '', reason: '' });
    setSelectedSession(null);
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
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900 mb-2">Schedule Management</h1>
            <p className="text-emerald-600">Manage appointments and therapy sessions</p>
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

        {/* Controls */}
        <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* View Type Tabs */}
              <Tabs value={viewType} onValueChange={(value: any) => setViewType(value)} className="w-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Date Navigation */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateDate('prev')}
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div className="text-center min-w-[200px]">
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

              {/* Search and Filter */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search patients or therapy..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
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
            </div>
          </CardContent>
        </Card>

        {/* Sessions List */}
        <div className="space-y-4">
          {filteredSessions.length === 0 ? (
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200">
              <CardContent className="p-12 text-center">
                <CalendarDays className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
                <p className="text-gray-600">No sessions match your current filters for the selected time period.</p>
              </CardContent>
            </Card>
          ) : (
            filteredSessions.map((session) => (
              <Card key={session.id} className={`bg-white/90 backdrop-blur-sm border-l-4 ${getPriorityColor(session.priority)}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Time */}
                      <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-2 rounded-lg">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <div className="text-center">
                          <p className="font-medium text-emerald-900">{session.time}</p>
                          <p className="text-xs text-emerald-600">{session.duration} min</p>
                        </div>
                      </div>

                      {/* Patient Info */}
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={session.patient.avatar} />
                          <AvatarFallback className="bg-teal-100 text-teal-700">
                            {session.patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{session.patient.name}</p>
                          <p className="text-sm text-gray-600">{session.patient.phone}</p>
                          <p className="text-xs text-gray-500">{session.patient.email}</p>
                        </div>
                      </div>

                      {/* Therapy & Details */}
                      <div>
                        <p className="font-medium text-gray-900">{session.therapy}</p>
                        <p className="text-sm text-gray-600">{session.notes}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(session.status)}>
                            {session.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {session.priority} priority
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
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
                        onClick={() => handleSessionAction(session.id, 'reschedule')}
                        className="text-blue-600 border-blue-300 hover:bg-blue-50"
                      >
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Reschedule
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleSessionAction(session.id, 'cancel')}
                        className="text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedSession(session)}
                        className="text-gray-600 border-gray-300 hover:bg-gray-50"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
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
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">{selectedSession.patient.name}</p>
                  <p className="text-sm text-gray-600">{selectedSession.therapy}</p>
                  <p className="text-xs text-gray-500">
                    Current: {selectedSession.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {selectedSession.time}
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
                  <Label htmlFor="reschedule-reason">Reason (Optional)</Label>
                  <Input 
                    id="reschedule-reason"
                    placeholder="Reason for rescheduling..."
                    value={rescheduleData.reason}
                    onChange={(e) => setRescheduleData(prev => ({ ...prev, reason: e.target.value }))}
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

        {/* Session Details Dialog */}
        <Dialog open={!!selectedSession && !isRescheduleOpen} onOpenChange={() => setSelectedSession(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Session Details</DialogTitle>
            </DialogHeader>
            {selectedSession && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={selectedSession.patient.avatar} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {selectedSession.patient.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedSession.patient.name}</h3>
                    <p className="text-sm text-gray-600">{selectedSession.patient.phone}</p>
                    <p className="text-sm text-gray-600">{selectedSession.patient.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Date & Time</Label>
                    <p className="text-sm">
                      {selectedSession.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedSession.time}
                    </p>
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <p className="text-sm">{selectedSession.duration} minutes</p>
                  </div>
                  <div>
                    <Label>Therapy</Label>
                    <p className="text-sm">{selectedSession.therapy}</p>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Badge className={getStatusColor(selectedSession.status)}>
                      {selectedSession.status}
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label>Notes</Label>
                  <p className="text-sm text-gray-600 mt-1">{selectedSession.notes}</p>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    onClick={() => handleSessionAction(selectedSession.id, 'approve')}
                    className="flex-1"
                    disabled={selectedSession.status === 'confirmed'}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {selectedSession.status === 'confirmed' ? 'Approved' : 'Approve'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedSession(selectedSession);
                      setIsRescheduleOpen(true);
                    }}
                    className="flex-1"
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reschedule
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