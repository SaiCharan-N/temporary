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
  Users
} from 'lucide-react';

interface PatientManagementProps {
  onPageChange: (page: string) => void;
}

// Extended mock data for patients
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
    completedSessions: 8,
    medicalHistory: 'Chronic stress, mild anxiety, digestive issues',
    currentCondition: 'Significant improvement in stress levels and digestion',
    allergies: 'None known',
    medications: 'Ashwagandha supplements',
    notes: 'Responding very well to treatment. Patient reports better sleep and reduced stress.',
    emergencyContact: {
      name: 'Rajesh Sharma',
      relationship: 'Husband',
      phone: '+91 98765 43211'
    },
    sessionHistory: [
      { date: '2024-12-13', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Good response' },
      { date: '2024-12-10', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Stress levels improving' },
      { date: '2024-12-07', therapy: 'Abhyanga', duration: 60, status: 'completed', notes: 'Patient feeling relaxed' }
    ]
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
    status: 'on treatment',
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
    medications: 'BP medication (Amlodipine), Melatonin',
    notes: 'Reported some side effects initially. Adjusting treatment intensity.',
    emergencyContact: {
      name: 'Sunita Patel',
      relationship: 'Wife',
      phone: '+91 87654 32110'
    },
    sessionHistory: [
      { date: '2024-12-08', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'Mild discomfort reported' },
      { date: '2024-12-05', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'Better sleep reported' },
      { date: '2024-12-01', therapy: 'Shirodhara', duration: 45, status: 'completed', notes: 'First session, baseline established' }
    ]
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
    medications: 'Herbal supplements as prescribed',
    notes: 'Outstanding response to treatment. Near completion of therapy cycle.',
    emergencyContact: {
      name: 'Vikram Singh',
      relationship: 'Brother',
      phone: '+91 76543 21099'
    },
    sessionHistory: [
      { date: '2024-12-12', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Excellent progress' },
      { date: '2024-12-09', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Energy levels high' },
      { date: '2024-12-06', therapy: 'Panchakarma', duration: 90, status: 'completed', notes: 'Digestion improving' }
    ]
  },
  {
    id: 4,
    name: 'Amit Kumar',
    avatar: '/placeholder-avatar.jpg',
    age: 36,
    gender: 'Male',
    phone: '+91 65432 10987',
    email: 'amit.kumar@email.com',
    address: '321 Garden Avenue, Delhi',
    status: 'inactive',
    progress: 25,
    dosha: 'Kapha',
    joinDate: '2024-11-20',
    lastSession: new Date(2024, 10, 28),
    nextSession: null,
    assignedTherapy: 'Yoga Therapy',
    totalSessions: 8,
    completedSessions: 2,
    medicalHistory: 'Obesity, joint pain, lethargy',
    currentCondition: 'Treatment paused due to scheduling conflicts',
    allergies: 'None',
    medications: 'Anti-inflammatory as needed',
    notes: 'Patient needs to reschedule. Follow up required.',
    emergencyContact: {
      name: 'Pooja Kumar',
      relationship: 'Wife',
      phone: '+91 65432 10988'
    },
    sessionHistory: [
      { date: '2024-11-28', therapy: 'Yoga Therapy', duration: 30, status: 'completed', notes: 'Basic poses introduced' },
      { date: '2024-11-25', therapy: 'Yoga Therapy', duration: 30, status: 'completed', notes: 'Initial assessment' }
    ]
  }
];

export function PatientManagement({ onPageChange }: PatientManagementProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isEditingNotes, setIsEditingNotes] = React.useState(false);
  const [newNote, setNewNote] = React.useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
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
      setNewNote('');
      setIsEditingNotes(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900 mb-2">Patient Management</h1>
            <p className="text-emerald-600">Comprehensive patient care and progress tracking</p>
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

        {/* Search and Filter Controls */}
        <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search patients, therapy, or dosha..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="on treatment">On Treatment</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-4">
                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1">
                  <Users className="w-4 h-4 mr-1" />
                  {filteredPatients.length} Patients
                </Badge>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Patient
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patients Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="bg-white/90 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">{patient.name}</h3>
                      <p className="text-sm text-gray-600">{patient.age} years, {patient.gender}</p>
                      <p className="text-xs text-gray-500">{patient.dosha} Dosha</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(patient.status)} variant="outline">
                    {patient.status}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className={`text-sm font-medium ${getProgressColor(patient.progress)}`}>
                        {patient.progress}%
                      </span>
                    </div>
                    <Progress value={patient.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-600">Therapy</p>
                      <p className="font-medium text-gray-900">{patient.assignedTherapy}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Sessions</p>
                      <p className="font-medium text-gray-900">
                        {patient.completedSessions}/{patient.totalSessions}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="text-gray-600">Last Session</p>
                    <p className="font-medium text-gray-900">
                      {patient.lastSession.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>

                  {patient.nextSession && (
                    <div className="text-sm">
                      <p className="text-gray-600">Next Session</p>
                      <p className="font-medium text-emerald-700">
                        {patient.nextSession.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600 mb-2">Current Notes</p>
                    <p className="text-sm text-gray-800 line-clamp-2">{patient.notes}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`tel:${patient.phone}`)}
                      className="text-blue-600 border-blue-300 hover:bg-blue-50"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`mailto:${patient.email}`)}
                      className="text-green-600 border-green-300 hover:bg-green-50"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setSelectedPatient(patient)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Patient Details Dialog */}
        <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedPatient?.avatar} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700">
                    {selectedPatient?.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{selectedPatient?.name}</h2>
                  <p className="text-sm text-gray-600">{selectedPatient?.age} years, {selectedPatient?.gender}</p>
                </div>
              </DialogTitle>
            </DialogHeader>

            {selectedPatient && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="medical">Medical History</TabsTrigger>
                  <TabsTrigger value="sessions">Session History</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{selectedPatient.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{selectedPatient.email}</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                          <span className="text-sm">{selectedPatient.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">Joined: {selectedPatient.joinDate}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Treatment Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label className="text-sm text-gray-600">Dosha Type</Label>
                          <p className="font-medium">{selectedPatient.dosha}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Assigned Therapy</Label>
                          <p className="font-medium">{selectedPatient.assignedTherapy}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Progress</Label>
                          <div className="flex items-center space-x-3 mt-1">
                            <Progress value={selectedPatient.progress} className="flex-1" />
                            <span className="font-medium">{selectedPatient.progress}%</span>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Sessions Completed</Label>
                          <p className="font-medium">{selectedPatient.completedSessions} of {selectedPatient.totalSessions}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Status</Label>
                          <Badge className={getStatusColor(selectedPatient.status)} variant="outline">
                            {selectedPatient.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Emergency Contact</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <Label className="text-sm text-gray-600">Name</Label>
                          <p className="font-medium">{selectedPatient.emergencyContact.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Relationship</Label>
                          <p className="font-medium">{selectedPatient.emergencyContact.relationship}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{selectedPatient.emergencyContact.phone}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Current Condition</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700">{selectedPatient.currentCondition}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="medical" className="mt-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Medical History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-700">{selectedPatient.medicalHistory}</p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Allergies</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">{selectedPatient.allergies}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Current Medications</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-700">{selectedPatient.medications}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="sessions" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Session History</CardTitle>
                      <CardDescription>Complete record of all therapy sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedPatient.sessionHistory.map((session: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="bg-emerald-100 p-2 rounded-lg">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{session.date}</p>
                                <p className="text-sm text-gray-600">{session.therapy} - {session.duration} min</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(session.status)} variant="outline">
                                {session.status}
                              </Badge>
                              <p className="text-sm text-gray-600 mt-1">{session.notes}</p>
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
                          <CardTitle className="text-lg">Practice Notes</CardTitle>
                          <CardDescription>Clinical observations and treatment notes</CardDescription>
                        </div>
                        <Button
                          onClick={() => setIsEditingNotes(true)}
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Add Note
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {isEditingNotes ? (
                        <div className="space-y-4">
                          <Textarea
                            placeholder="Enter your clinical notes..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            rows={4}
                          />
                          <div className="flex space-x-3">
                            <Button onClick={handleAddNote}>Save Note</Button>
                            <Button variant="outline" onClick={() => setIsEditingNotes(false)}>
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900">Current Notes</h4>
                              <span className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm text-gray-700">{selectedPatient.notes}</p>
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
      </div>
    </div>
  );
}