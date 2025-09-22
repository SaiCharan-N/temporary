import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  ArrowLeft,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar as CalendarIcon,
  BarChart3,
  PieChart,
  FileText,
  Filter
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

interface AnalyticsDashboardProps {
  onPageChange: (page: string) => void;
}

// Mock data for analytics
const weeklyData = [
  { week: 'Week 1', sessions: 45, improvement: 72, satisfaction: 4.2 },
  { week: 'Week 2', sessions: 52, improvement: 78, satisfaction: 4.3 },
  { week: 'Week 3', sessions: 48, improvement: 81, satisfaction: 4.5 },
  { week: 'Week 4', sessions: 56, improvement: 85, satisfaction: 4.4 },
  { week: 'Week 5', sessions: 62, improvement: 88, satisfaction: 4.6 },
  { week: 'Week 6', sessions: 58, improvement: 90, satisfaction: 4.7 },
  { week: 'Week 7', sessions: 65, improvement: 92, satisfaction: 4.8 }
];

const monthlyData = [
  { month: 'Jan', revenue: 45000, patients: 120, sessions: 180 },
  { month: 'Feb', revenue: 52000, patients: 135, sessions: 205 },
  { month: 'Mar', revenue: 48000, patients: 128, sessions: 192 },
  { month: 'Apr', revenue: 58000, patients: 142, sessions: 220 },
  { month: 'May', revenue: 62000, patients: 155, sessions: 240 },
  { month: 'Jun', revenue: 55000, patients: 148, sessions: 225 },
  { month: 'Jul', revenue: 68000, patients: 165, sessions: 258 },
  { month: 'Aug', revenue: 72000, patients: 172, sessions: 275 },
  { month: 'Sep', revenue: 69000, patients: 168, sessions: 265 },
  { month: 'Oct', revenue: 75000, patients: 180, sessions: 285 },
  { month: 'Nov', revenue: 78000, patients: 185, sessions: 295 },
  { month: 'Dec', revenue: 82000, patients: 195, sessions: 310 }
];

const therapyDistribution = [
  { name: 'Abhyanga', value: 35, count: 245, color: '#10b981' },
  { name: 'Shirodhara', value: 28, count: 196, color: '#3b82f6' },
  { name: 'Panchakarma', value: 22, count: 154, color: '#8b5cf6' },
  { name: 'Yoga Therapy', value: 15, count: 105, color: '#f59e0b' }
];

const patientProgressData = [
  { 
    id: 1, 
    name: 'Priya Sharma', 
    initialScore: 45, 
    currentScore: 85, 
    improvement: 89, 
    sessions: 12,
    therapy: 'Abhyanga',
    status: 'Excellent'
  },
  { 
    id: 2, 
    name: 'Raj Patel', 
    initialScore: 38, 
    currentScore: 65, 
    improvement: 71, 
    sessions: 8,
    therapy: 'Shirodhara',
    status: 'Good'
  },
  { 
    id: 3, 
    name: 'Meera Singh', 
    initialScore: 42, 
    currentScore: 88, 
    improvement: 110, 
    sessions: 15,
    therapy: 'Panchakarma',
    status: 'Excellent'
  },
  { 
    id: 4, 
    name: 'Amit Kumar', 
    initialScore: 35, 
    currentScore: 58, 
    improvement: 66, 
    sessions: 6,
    therapy: 'Yoga Therapy',
    status: 'Moderate'
  },
  { 
    id: 5, 
    name: 'Sunita Verma', 
    initialScore: 48, 
    currentScore: 82, 
    improvement: 71, 
    sessions: 10,
    therapy: 'Abhyanga',
    status: 'Good'
  }
];

const kpiData = {
  totalPatients: 195,
  activePatients: 168,
  totalSessions: 1280,
  avgImprovement: 84.5,
  patientSatisfaction: 4.6,
  revenue: 782000
};

export function AnalyticsDashboard({ onPageChange }: AnalyticsDashboardProps) {
  const [selectedTab, setSelectedTab] = React.useState('overview');
  const [dateRange, setDateRange] = React.useState('last7days');
  const [selectedPatient, setSelectedPatient] = React.useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Poor': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleExport = (type: 'pdf' | 'excel') => {
    console.log(`Exporting analytics as ${type}`);
    // In a real implementation, this would generate and download the file
    alert(`Exporting analytics as ${type.toUpperCase()}...`);
  };

  const calculateTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous * 100).toFixed(1);
    return {
      percentage: Math.abs(parseFloat(change)),
      isPositive: parseFloat(change) > 0
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900 mb-2">Analytics Dashboard</h1>
            <p className="text-emerald-600">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="last3months">Last 3 Months</SelectItem>
                <SelectItem value="last6months">Last 6 Months</SelectItem>
                <SelectItem value="lastyear">Last Year</SelectItem>
              </SelectContent>
            </Select>
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

        {/* Export Options */}
        <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="font-medium text-emerald-900">Export Reports</h3>
                <Badge className="bg-emerald-100 text-emerald-800">
                  Data Range: {dateRange.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => handleExport('pdf')}
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-50"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Export PDF
                </Button>
                <Button
                  onClick={() => handleExport('excel')}
                  variant="outline"
                  size="sm"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Export Excel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Analysis</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
            <TabsTrigger value="patients">Patient Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-emerald-600">Total Patients</p>
                      <p className="text-2xl font-bold text-emerald-900">{kpiData.totalPatients}</p>
                    </div>
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+12% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-teal-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-teal-600">Active Patients</p>
                      <p className="text-2xl font-bold text-teal-900">{kpiData.activePatients}</p>
                    </div>
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+8% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600">Total Sessions</p>
                      <p className="text-2xl font-bold text-blue-900">{kpiData.totalSessions}</p>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+15% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-600">Avg Improvement</p>
                      <p className="text-2xl font-bold text-purple-900">{kpiData.avgImprovement}%</p>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-full">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+3.2% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-orange-600">Satisfaction</p>
                      <p className="text-2xl font-bold text-orange-900">{kpiData.patientSatisfaction}/5</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded-full">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+0.3 from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Revenue</p>
                      <p className="text-2xl font-bold text-green-900">₹{(kpiData.revenue / 1000).toFixed(0)}K</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-full">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">+18% from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Therapy Distribution */}
            <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-900">Therapy Distribution</CardTitle>
                <CardDescription>Breakdown of therapy types and their usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={therapyDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {therapyDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {therapyDistribution.map((therapy, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: therapy.color }}
                          />
                          <span className="font-medium text-gray-900">{therapy.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{therapy.count} sessions</p>
                          <p className="text-sm text-gray-600">{therapy.value}% of total</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-900">Weekly Performance Trends</CardTitle>
                <CardDescription>Session count, improvement rates, and satisfaction scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={2} name="Sessions" />
                      <Line type="monotone" dataKey="improvement" stroke="#10b981" strokeWidth={2} name="Improvement %" />
                      <Line type="monotone" dataKey="satisfaction" stroke="#8b5cf6" strokeWidth={2} name="Satisfaction (x20)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-900">Monthly Trends</CardTitle>
                <CardDescription>Revenue, patient count, and session volume over the year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="revenue" fill="#10b981" name="Revenue (₹)" />
                      <Bar dataKey="patients" fill="#3b82f6" name="Patients" />
                      <Bar dataKey="sessions" fill="#f59e0b" name="Sessions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-emerald-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-emerald-900">Patient-wise Analytics</CardTitle>
                    <CardDescription>Individual patient progress and improvement metrics</CardDescription>
                  </div>
                  <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Patients</SelectItem>
                      {patientProgressData.map(patient => (
                        <SelectItem key={patient.id} value={patient.name}>
                          {patient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patientProgressData
                    .filter(patient => selectedPatient === 'all' || patient.name === selectedPatient)
                    .map((patient) => (
                    <div key={patient.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{patient.name}</h4>
                          <p className="text-sm text-gray-600">{patient.therapy} • {patient.sessions} sessions</p>
                        </div>
                        <Badge className={getStatusColor(patient.status)} variant="outline">
                          {patient.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm text-gray-600">Initial Score</Label>
                          <p className="text-lg font-medium text-gray-900">{patient.initialScore}/100</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Current Score</Label>
                          <p className="text-lg font-medium text-gray-900">{patient.currentScore}/100</p>
                        </div>
                        <div>
                          <Label className="text-sm text-gray-600">Improvement</Label>
                          <div className="flex items-center space-x-2">
                            <p className="text-lg font-medium text-green-600">+{patient.improvement}%</p>
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}