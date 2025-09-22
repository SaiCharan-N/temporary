import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { toast } from 'sonner@2.0.3';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Activity,
  TrendingUp,
  Clock,
  FileText,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  ArrowLeft,
  Heart,
  Leaf,
  AlertCircle,
  CheckCircle,
  Users,
  MessageSquare,
  Send,
  Prescription,
  Bell,
  Star,
  ThermometerSun,
  Zap,
  Brain,
  Shield,
  ChevronRight,
  Calendar as CalendarIcon,
  PillBottle,
  Stethoscope,
  UserCheck,
  Timer,
  Target,
  BookOpen,
  LineChart,
  BarChart3,
  AlertTriangle,
  FileEdit,
  Download,
  Upload,
  Camera,
  Video,
  ExternalLink,
  Clipboard,
  Copy
} from 'lucide-react';

interface PatientManagementProps {
  onPageChange: (page: string) => void;
}

// Enhanced mock data with comprehensive patient information
const allPatients = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: '/placeholder-avatar.jpg',
    age: 34,
    gender: 'Female',
    phone: '+91 98765 43210',
    email: 'priya.sharma@email.com',
    address: '123 MG Road, Bangalore, Karnataka',
    status: 'active',
    progress: 75,
    dosha: 'Vata-Pitta',
    joinDate: '2024-10-15',
    lastSession: new Date(2024, 11, 13),
    nextSession: new Date(2024, 11, 15),
    assignedTherapy: 'Abhyanga',
    totalSessions: 12,
    completedSessions: 9,
    medicalHistory: 'Chronic stress, mild anxiety, digestive issues',
    currentCondition: 'Significant improvement in stress levels and digestion',
    allergies: 'None known',
    medications: 'Ashwagandha supplements, Brahmi tablets',
    notes: 'Responding very well to treatment. Patient reports better sleep and reduced stress.',
    emergencyContact: {
      name: 'Rajesh Sharma',
      relationship: 'Husband',
      phone: '+91 98765 43211'
    },
    sessionHistory: [
      { date: '2024-12-13', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Good response', rating: 5 },
      { date: '2024-12-10', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Stress levels improving', rating: 4 },
      { date: '2024-12-07', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Patient feeling relaxed', rating: 5 }
    ],
    vitalSigns: {
      bloodPressure: '120/80',
      heartRate: 72,
      weight: 58,
      height: 165,
      bmi: 21.3,
      lastUpdated: '2024-12-13'
    },
    treatmentGoals: [
      { goal: 'Stress Reduction', target: 80, current: 75, status: 'on-track' },
      { goal: 'Sleep Quality', target: 90, current: 85, status: 'ahead' },
      { goal: 'Digestive Health', target: 85, current: 80, status: 'on-track' }
    ],
    prescriptions: [
      {
        id: 1,
        medication: 'Ashwagandha',
        dosage: '300mg twice daily',
        frequency: 'Morning and Evening',
        duration: '30 days',
        instructions: 'Take with warm milk',
        dateIssued: '2024-12-01',
        status: 'active'
      },
      {
        id: 2,
        medication: 'Brahmi',
        dosage: '250mg once daily',
        frequency: 'Morning',
        duration: '15 days',
        instructions: 'Take on empty stomach',
        dateIssued: '2024-12-01',
        status: 'active'
      }
    ],
    messages: [
      {
        id: 1,
        type: 'received',
        content: 'Doctor, I\'m feeling much better after yesterday\'s session. Thank you!',
        timestamp: '2024-12-14 09:30',
        read: true
      },
      {
        id: 2,
        type: 'sent',
        content: 'That\'s wonderful to hear! Continue with the prescribed routine and we\'ll see you for the next session.',
        timestamp: '2024-12-14 10:15',
        read: true
      }
    ],
    lastActivity: '2 hours ago',
    compliance: 85,
    riskLevel: 'low'
  },
  {
    id: 2,
    name: 'Raj Patel',
    avatar: '/placeholder-avatar.jpg',
    age: 42,
    gender: 'Male',
    phone: '+91 87654 32109',
    email: 'raj.patel@email.com',
    address: '456 Park Street, Mumbai, Maharashtra',
    status: 'needs-attention',
    progress: 45,
    dosha: 'Pitta-Kapha',
    joinDate: '2024-11-01',
    lastSession: new Date(2024, 11, 8),
    nextSession: new Date(2024, 11, 15),
    assignedTherapy: 'Shirodhara',
    totalSessions: 10,
    completedSessions: 4,
    medicalHistory: 'High blood pressure, insomnia, work-related stress',
    currentCondition: 'Some improvement in sleep patterns, BP still elevated',
    allergies: 'Peanuts',
    medications: 'BP medication (Amlodipine), Melatonin, Arjuna extract',
    notes: 'Reported some side effects initially. Adjusting treatment intensity. Requires close monitoring.',
    emergencyContact: {
      name: 'Sunita Patel',
      relationship: 'Wife',
      phone: '+91 87654 32110'
    },
    sessionHistory: [
      { date: '2024-12-08', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'Mild discomfort reported', rating: 3 },
      { date: '2024-12-05', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'Better sleep reported', rating: 4 },
      { date: '2024-12-01', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'First session, baseline established', rating: 4 }
    ],
    vitalSigns: {
      bloodPressure: '145/90',
      heartRate: 78,
      weight: 82,
      height: 175,
      bmi: 26.8,
      lastUpdated: '2024-12-08'
    },
    treatmentGoals: [
      { goal: 'Blood Pressure Control', target: 120, current: 145, status: 'behind' },
      { goal: 'Sleep Quality', target: 80, current: 60, status: 'behind' },
      { goal: 'Stress Management', target: 75, current: 45, status: 'behind' }
    ],
    prescriptions: [
      {
        id: 3,
        medication: 'Arjuna Extract',
        dosage: '500mg twice daily',
        frequency: 'Morning and Evening',
        duration: '45 days',
        instructions: 'Take before meals',
        dateIssued: '2024-11-15',
        status: 'active'
      }
    ],
    messages: [
      {
        id: 3,
        type: 'received',
        content: 'I experienced some dizziness after yesterday\'s session. Is this normal?',
        timestamp: '2024-12-09 14:22',
        read: false
      }
    ],
    lastActivity: '1 day ago',
    compliance: 65,
    riskLevel: 'medium'
  },
  {
    id: 3,
    name: 'Meera Singh',
    avatar: '/placeholder-avatar.jpg',
    age: 28,
    gender: 'Female',
    phone: '+91 76543 21098',
    email: 'meera.singh@email.com',
    address: '789 Lake Road, Pune, Maharashtra',
    status: 'active',
    progress: 90,
    dosha: 'Vata',
    joinDate: '2024-09-20',
    lastSession: new Date(2024, 11, 12),
    nextSession: new Date(2024, 11, 15),
    assignedTherapy: 'Panchakarma',
    totalSessions: 14,
    completedSessions: 12,
    medicalHistory: 'Chronic fatigue, digestive disorders, hormonal imbalance',
    currentCondition: 'Excellent progress, energy levels normalized, digestion improved',
    allergies: 'Shellfish',
    medications: 'Herbal supplements as prescribed, Shatavari',
    notes: 'Outstanding response to treatment. Near completion of therapy cycle.',
    emergencyContact: {
      name: 'Vikram Singh',
      relationship: 'Brother',
      phone: '+91 76543 21099'
    },
    sessionHistory: [
      { date: '2024-12-12', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Excellent progress', rating: 5 },
      { date: '2024-12-09', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Energy levels high', rating: 5 },
      { date: '2024-12-06', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Digestion improving', rating: 4 }
    ],
    vitalSigns: {
      bloodPressure: '115/75',
      heartRate: 68,
      weight: 55,
      height: 160,
      bmi: 21.5,
      lastUpdated: '2024-12-12'
    },
    treatmentGoals: [
      { goal: 'Energy Levels', target: 85, current: 90, status: 'ahead' },
      { goal: 'Digestive Health', target: 80, current: 85, status: 'ahead' },
      { goal: 'Hormonal Balance', target: 75, current: 80, status: 'ahead' }
    ],
    prescriptions: [
      {
        id: 4,
        medication: 'Shatavari',
        dosage: '500mg twice daily',
        frequency: 'Morning and Evening',
        duration: '60 days',
        instructions: 'Take with warm water',
        dateIssued: '2024-11-01',
        status: 'active'
      }
    ],
    messages: [
      {
        id: 4,
        type: 'received',
        content: 'Thank you for the wonderful care! I feel so much better now.',
        timestamp: '2024-12-13 11:45',
        read: true
      },
      {
        id: 5,
        type: 'sent',
        content: 'I\'m so happy to hear about your progress! You\'ve been very dedicated to the treatment.',
        timestamp: '2024-12-13 12:30',
        read: true
      }
    ],
    lastActivity: '5 hours ago',
    compliance: 95,
    riskLevel: 'low'
  }
];

export function PatientManagement({ onPageChange }: PatientManagementProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isEditingNotes, setIsEditingNotes] = React.useState(false);
  const [newNote, setNewNote] = React.useState('');
  const [isMessageDialogOpen, setIsMessageDialogOpen] = React.useState(false);
  const [isPrescriptionDialogOpen, setIsPrescriptionDialogOpen] = React.useState(false);
  const [messageText, setMessageText] = React.useState('');
  const [prescriptionData, setPrescriptionData] = React.useState({
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    instructions: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'needs-attention': return 'bg-red-100 text-red-800 border-red-200';
      case 'on treatment': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'completed': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskLevelColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getGoalStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'text-green-600 bg-green-100';
      case 'on-track': return 'text-blue-600 bg-blue-100';
      case 'behind': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredPatients = allPatients.filter(patient => {
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    const matchesSearch = searchTerm === '' || 
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.assignedTherapy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.dosha.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const handleAddNote = () => {
    if (newNote.trim() && selectedPatient) {
      console.log('Adding note for patient:', selectedPatient.id, newNote);
      toast.success('Note added successfully');
      setNewNote('');
      setIsEditingNotes(false);
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedPatient) {
      console.log('Sending message to patient:', selectedPatient.id, messageText);
      toast.success('Message sent successfully');
      setMessageText('');
      setIsMessageDialogOpen(false);
    }
  };

  const handleSendPrescription = () => {
    if (prescriptionData.medication && prescriptionData.dosage && selectedPatient) {
      console.log('Sending prescription to patient:', selectedPatient.id, prescriptionData);
      toast.success('Prescription sent as notification to patient');
      setPrescriptionData({
        medication: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: ''
      });
      setIsPrescriptionDialogOpen(false);
    }
  };

  const getUnreadMessageCount = (patient: any) => {
    return patient.messages ? patient.messages.filter((msg: any) => msg.type === 'received' && !msg.read).length : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Patient Management</h1>
            <p className="text-emerald-600 text-lg">Comprehensive patient care, progress tracking, and communication hub</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Patient
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

        {/* Enhanced Search and Filter Controls */}
        <Card className="bg-white/95 backdrop-blur-sm border-emerald-200 mb-8 shadow-xl">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search patients, therapy, dosha, or condition..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-96"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="needs-attention">Needs Attention</SelectItem>
                      <SelectItem value="on treatment">On Treatment</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
                    <Users className="w-4 h-4 mr-1" />
                    {filteredPatients.length} Patients
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 px-4 py-2">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    {filteredPatients.filter(p => p.status === 'needs-attention').length} Need Attention
                  </Badge>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-green-600">Avg Progress</p>
                      <p className="font-bold text-green-900">
                        {Math.round(filteredPatients.reduce((acc, p) => acc + p.progress, 0) / filteredPatients.length)}%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600">Sessions Today</p>
                      <p className="font-bold text-blue-900">
                        {filteredPatients.filter(p => p.nextSession && new Date(p.nextSession).toDateString() === new Date().toDateString()).length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-600">Unread Messages</p>
                      <p className="font-bold text-purple-900">
                        {filteredPatients.reduce((acc, p) => acc + getUnreadMessageCount(p), 0)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-600">High Risk</p>
                      <p className="font-bold text-orange-900">
                        {filteredPatients.filter(p => p.riskLevel === 'high').length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Patients Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="bg-white/95 backdrop-blur-sm border-emerald-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Patient Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-14 h-14 border-2 border-emerald-200">
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {getUnreadMessageCount(patient) > 0 && (
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {getUnreadMessageCount(patient)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{patient.name}</h3>
                        <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getStatusColor(patient.status)} variant="outline">
                            {patient.status}
                          </Badge>
                          <Badge className={getRiskLevelColor(patient.riskLevel)} variant="outline">
                            {patient.riskLevel} risk
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Last Active</p>
                      <p className="text-sm font-medium">{patient.lastActivity}</p>
                    </div>
                  </div>

                  {/* Progress and Stats */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Treatment Progress</span>
                        <span className={`text-sm font-medium ${getProgressColor(patient.progress)}`}>
                          {patient.progress}%
                        </span>
                      </div>
                      <Progress value={patient.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">{patient.assignedTherapy}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-600 text-xs">Sessions</p>
                        <p className="font-bold text-blue-900">{patient.completedSessions}/{patient.totalSessions}</p>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-green-600 text-xs">Compliance</p>
                        <p className="font-bold text-green-900">{patient.compliance}%</p>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-purple-600 text-xs">Dosha</p>
                        <p className="font-bold text-purple-900 text-xs">{patient.dosha}</p>
                      </div>
                    </div>

                    {/* Quick Vital Signs */}
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-700 flex items-center">
                          <Activity className="w-4 h-4 mr-1 text-red-500" />
                          Latest Vitals
                        </h4>
                        <span className="text-xs text-gray-500">{patient.vitalSigns.lastUpdated}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-600">BP: </span>
                          <span className="font-medium">{patient.vitalSigns.bloodPressure}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">HR: </span>
                          <span className="font-medium">{patient.vitalSigns.heartRate} bpm</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Weight: </span>
                          <span className="font-medium">{patient.vitalSigns.weight} kg</span>
                        </div>
                        <div>
                          <span className="text-gray-600">BMI: </span>
                          <span className="font-medium">{patient.vitalSigns.bmi}</span>
                        </div>
                      </div>
                    </div>

                    {/* Next Session */}
                    {patient.nextSession && (
                      <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <CalendarIcon className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-900">Next Session</span>
                        </div>
                        <p className="text-sm text-emerald-700">
                          {patient.nextSession.toLocaleDateString('en-US', { 
                            weekday: 'short',
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPatient(patient);
                          setIsMessageDialogOpen(true);
                        }}
                        className="text-blue-600 border-blue-300 hover:bg-blue-50"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`tel:${patient.phone}`);
                        }}
                        className="text-green-600 border-green-300 hover:bg-green-50"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPatient(patient);
                          setIsPrescriptionDialogOpen(true);
                        }}
                        className="text-purple-600 border-purple-300 hover:bg-purple-50"
                      >
                        <PillBottle className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => setSelectedPatient(patient)}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Patient Details Dialog */}
        <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-emerald-200">
                    <AvatarImage src={selectedPatient?.avatar} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {selectedPatient?.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold">{selectedPatient?.name}</h2>
                    <div className="flex items-center space-x-4 mt-1">
                      <p className="text-sm text-gray-600">{selectedPatient?.age} years, {selectedPatient?.gender}</p>
                      <Badge className={selectedPatient ? getStatusColor(selectedPatient.status) : ''} variant="outline">
                        {selectedPatient?.status}
                      </Badge>
                      <Badge className={selectedPatient ? getRiskLevelColor(selectedPatient.riskLevel) : ''} variant="outline">
                        {selectedPatient?.riskLevel} risk
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsMessageDialogOpen(true);
                    }}
                    className="text-blue-600 border-blue-300 hover:bg-blue-50"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsPrescriptionDialogOpen(true);
                    }}
                    className="text-purple-600 border-purple-300 hover:bg-purple-50"
                  >
                    <PillBottle className="w-4 h-4 mr-2" />
                    Prescribe
                  </Button>
                </div>
              </DialogTitle>
            </DialogHeader>

            {selectedPatient && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="medical">Medical</TabsTrigger>
                  <TabsTrigger value="sessions">Sessions</TabsTrigger>
                  <TabsTrigger value="goals">Goals</TabsTrigger>
                  <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  {/* Simplified Overview - Current Progress and Status Only */}
                  <div className="space-y-6">
                    {/* Current Status Banner */}
                    <Card className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-emerald-200">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center justify-between">
                          <div className="flex items-center">
                            <Target className="w-6 h-6 mr-3 text-emerald-600" />
                            <span>Current Status Overview</span>
                          </div>
                          <Badge className={getStatusColor(selectedPatient.status)} variant="outline">
                            {selectedPatient.status}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {/* Overall Progress */}
                          <div className="text-center p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
                            <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                            <p className="text-sm text-emerald-600 mb-1">Overall Progress</p>
                            <p className={`text-2xl font-bold ${getProgressColor(selectedPatient.progress)}`}>
                              {selectedPatient.progress}%
                            </p>
                            <Progress value={selectedPatient.progress} className="mt-2 h-2" />
                          </div>

                          {/* Session Progress */}
                          <div className="text-center p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <p className="text-sm text-blue-600 mb-1">Session Progress</p>
                            <p className="text-2xl font-bold text-blue-900">
                              {selectedPatient.completedSessions}/{selectedPatient.totalSessions}
                            </p>
                            <Progress value={(selectedPatient.completedSessions / selectedPatient.totalSessions) * 100} className="mt-2 h-2" />
                          </div>

                          {/* Compliance Rate */}
                          <div className="text-center p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <p className="text-sm text-green-600 mb-1">Compliance</p>
                            <p className="text-2xl font-bold text-green-900">{selectedPatient.compliance}%</p>
                            <Progress value={selectedPatient.compliance} className="mt-2 h-2" />
                          </div>

                          {/* Risk Level */}
                          <div className="text-center p-4 bg-white rounded-xl border border-orange-200 shadow-sm">
                            <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                            <p className="text-sm text-orange-600 mb-1">Risk Level</p>
                            <Badge className={getRiskLevelColor(selectedPatient.riskLevel)} variant="outline">
                              {selectedPatient.riskLevel.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Current Treatment Information */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Stethoscope className="w-5 h-5 mr-2 text-green-600" />
                            Current Treatment
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label className="text-sm text-gray-600">Assigned Therapy</Label>
                            <p className="font-medium text-lg text-green-900">{selectedPatient.assignedTherapy}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-600">Dosha Constitution</Label>
                            <p className="font-medium flex items-center">
                              <ThermometerSun className="w-4 h-4 mr-2 text-orange-500" />
                              {selectedPatient.dosha}
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-600">Last Session</Label>
                            <p className="font-medium">{selectedPatient.lastSession.toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}</p>
                          </div>
                          {selectedPatient.nextSession && (
                            <div>
                              <Label className="text-sm text-gray-600">Next Session</Label>
                              <p className="font-medium text-emerald-700">{selectedPatient.nextSession.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                month: 'long', 
                                day: 'numeric',
                                year: 'numeric'
                              })}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Current Condition */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-blue-600" />
                            Current Condition
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <p className="text-blue-900">{selectedPatient.currentCondition}</p>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <Label className="text-sm text-gray-600">Last Activity</Label>
                            <p className="font-medium">{selectedPatient.lastActivity}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Treatment Goals Progress */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Target className="w-5 h-5 mr-2 text-purple-600" />
                          Treatment Goals Progress
                        </CardTitle>
                        <CardDescription>Current progress towards specific treatment objectives</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {selectedPatient.treatmentGoals.map((goal: any, index: number) => (
                            <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-purple-200">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-purple-900">{goal.goal}</h4>
                                <Badge className={getGoalStatusColor(goal.status)} variant="outline">
                                  {goal.status}
                                </Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-purple-600">Current</span>
                                  <span className="font-bold text-purple-900">{goal.current}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-purple-600">Target</span>
                                  <span className="font-medium text-purple-700">{goal.target}</span>
                                </div>
                                <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                                <p className="text-xs text-purple-600 text-center">
                                  {Math.round((goal.current / goal.target) * 100)}% of target achieved
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="medical" className="mt-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-blue-600" />
                          Medical History
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                          {selectedPatient.medicalHistory}
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                            Allergies
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 bg-red-50 p-4 rounded-lg border border-red-200">
                            {selectedPatient.allergies}
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <PillBottle className="w-5 h-5 mr-2 text-purple-600" />
                            Current Medications
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 bg-purple-50 p-4 rounded-lg border border-purple-200">
                            {selectedPatient.medications}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sessions" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-green-600" />
                          Session History
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {selectedPatient.sessionHistory.length} Sessions Completed
                        </Badge>
                      </CardTitle>
                      <CardDescription>Complete record of all therapy sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.sessionHistory.map((session: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                              <div className="bg-green-100 p-3 rounded-xl">
                                <Calendar className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{session.date}</p>
                                <p className="text-sm text-gray-600">{session.therapy} • {session.duration} minutes</p>
                                <p className="text-sm text-gray-700 mt-1">{session.notes}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(session.status)} variant="outline">
                                {session.status}
                              </Badge>
                              <div className="flex items-center space-x-1 mt-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">{session.rating}/5</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-6" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export Session History
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="goals" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Target className="w-5 h-5 mr-2 text-purple-600" />
                        Treatment Goals & Progress
                      </CardTitle>
                      <CardDescription>Track progress towards specific treatment objectives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {selectedPatient.treatmentGoals.map((goal: any, index: number) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-gray-900">{goal.goal}</h4>
                              <Badge className={getGoalStatusColor(goal.status)} variant="outline">
                                {goal.status}
                              </Badge>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">{goal.current}/{goal.target}</span>
                              </div>
                              <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                              <p className="text-xs text-gray-500">
                                {Math.round((goal.current / goal.target) * 100)}% towards target
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prescriptions" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            <PillBottle className="w-5 h-5 mr-2 text-purple-600" />
                            Active Prescriptions
                          </CardTitle>
                          <CardDescription>Current medications and supplements</CardDescription>
                        </div>
                        <Button
                          onClick={() => setIsPrescriptionDialogOpen(true)}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          New Prescription
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.prescriptions.map((prescription: any) => (
                          <div key={prescription.id} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="font-medium text-purple-900">{prescription.medication}</h4>
                                <p className="text-sm text-purple-700">{prescription.dosage}</p>
                              </div>
                              <Badge className={prescription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                                {prescription.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-purple-600">Frequency:</span>
                                <p className="font-medium">{prescription.frequency}</p>
                              </div>
                              <div>
                                <span className="text-purple-600">Duration:</span>
                                <p className="font-medium">{prescription.duration}</p>
                              </div>
                            </div>
                            <div className="mt-3">
                              <span className="text-purple-600 text-sm">Instructions:</span>
                              <p className="text-sm text-purple-800 mt-1">{prescription.instructions}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-purple-200">
                              <span className="text-xs text-purple-600">Issued: {prescription.dateIssued}</span>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="text-purple-600 border-purple-300">
                                  <Edit className="w-3 h-3 mr-1" />
                                  Edit
                                </Button>
                                <Button size="sm" variant="outline" className="text-purple-600 border-purple-300">
                                  <Download className="w-3 h-3 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notes" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg flex items-center">
                            <FileEdit className="w-5 h-5 mr-2 text-emerald-600" />
                            Clinical Notes
                          </CardTitle>
                          <CardDescription>Clinical observations and treatment notes</CardDescription>
                        </div>
                        <Button
                          onClick={() => setIsEditingNotes(true)}
                          variant="outline"
                          size="sm"
                          className="border-emerald-300 text-emerald-700"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Note
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {isEditingNotes ? (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="note-type">Note Type</Label>
                            <Select defaultValue="general">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Observation</SelectItem>
                                <SelectItem value="treatment">Treatment Response</SelectItem>
                                <SelectItem value="side-effect">Side Effect</SelectItem>
                                <SelectItem value="progress">Progress Update</SelectItem>
                                <SelectItem value="concern">Clinical Concern</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="clinical-note">Clinical Note</Label>
                            <Textarea
                              id="clinical-note"
                              placeholder="Enter your clinical observations and notes..."
                              value={newNote}
                              onChange={(e) => setNewNote(e.target.value)}
                              rows={6}
                            />
                          </div>
                          <div className="flex space-x-3">
                            <Button onClick={handleAddNote} className="bg-emerald-600 hover:bg-emerald-700">
                              <FileEdit className="w-4 h-4 mr-2" />
                              Save Note
                            </Button>
                            <Button variant="outline" onClick={() => setIsEditingNotes(false)}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-medium text-emerald-900">Current Treatment Notes</h4>
                              <span className="text-xs text-emerald-600">Last updated: {new Date().toLocaleDateString()}</span>
                            </div>
                            <p className="text-emerald-800">{selectedPatient.notes}</p>
                            <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-emerald-200">
                              <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-300">
                                <Edit className="w-3 h-3 mr-1" />
                                Edit
                              </Button>
                              <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-300">
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </Button>
                              <Button size="sm" variant="outline" className="text-emerald-600 border-emerald-300">
                                <Download className="w-3 h-3 mr-1" />
                                Export
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </DialogContent>
        </Dialog>

        {/* Message Dialog */}
        <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>Send Message to {selectedPatient?.name}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {/* Message History */}
              {selectedPatient?.messages && selectedPatient.messages.length > 0 && (
                <div>
                  <Label className="text-sm text-gray-600">Recent Messages</Label>
                  <ScrollArea className="h-32 w-full border rounded-lg p-3 mt-2">
                    <div className="space-y-2">
                      {selectedPatient.messages.map((message: any) => (
                        <div key={message.id} className={`p-2 rounded-lg text-sm ${
                          message.type === 'sent' 
                            ? 'bg-blue-100 text-blue-900 ml-8' 
                            : 'bg-gray-100 text-gray-900 mr-8'
                        }`}>
                          <p>{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
              
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="flex space-x-3">
                <Button onClick={handleSendMessage} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Prescription Dialog */}
        <Dialog open={isPrescriptionDialogOpen} onOpenChange={setIsPrescriptionDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3">
                <PillBottle className="w-5 h-5 text-purple-600" />
                <span>Create Prescription for {selectedPatient?.name}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="medication">Medication/Supplement</Label>
                  <Input
                    id="medication"
                    placeholder="e.g., Ashwagandha"
                    value={prescriptionData.medication}
                    onChange={(e) => setPrescriptionData(prev => ({ ...prev, medication: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g., 300mg"
                    value={prescriptionData.dosage}
                    onChange={(e) => setPrescriptionData(prev => ({ ...prev, dosage: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={prescriptionData.frequency} onValueChange={(value) => 
                    setPrescriptionData(prev => ({ ...prev, frequency: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Once daily">Once daily</SelectItem>
                      <SelectItem value="Twice daily">Twice daily</SelectItem>
                      <SelectItem value="Three times daily">Three times daily</SelectItem>
                      <SelectItem value="Morning only">Morning only</SelectItem>
                      <SelectItem value="Evening only">Evening only</SelectItem>
                      <SelectItem value="As needed">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select value={prescriptionData.duration} onValueChange={(value) => 
                    setPrescriptionData(prev => ({ ...prev, duration: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7 days">7 days</SelectItem>
                      <SelectItem value="15 days">15 days</SelectItem>
                      <SelectItem value="30 days">30 days</SelectItem>
                      <SelectItem value="45 days">45 days</SelectItem>
                      <SelectItem value="60 days">60 days</SelectItem>
                      <SelectItem value="90 days">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    placeholder="e.g., Take with warm milk, avoid during fever"
                    value={prescriptionData.instructions}
                    onChange={(e) => setPrescriptionData(prev => ({ ...prev, instructions: e.target.value }))}
                    rows={3}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4">
              <Button onClick={handleSendPrescription} className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Bell className="w-4 h-4 mr-2" />
                Send as Notification
              </Button>
              <Button variant="outline" onClick={() => setIsPrescriptionDialogOpen(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}