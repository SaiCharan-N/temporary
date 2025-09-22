import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, TrendingUp, Activity, Heart, Droplets, Calendar, Target, Star, BarChart3 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

interface ProgressVisualizationProps {
  onPageChange: (page: string) => void;
}

export function ProgressVisualization({ onPageChange }: ProgressVisualizationProps) {
  // Mock data for progress visualization
  const treatmentProgress = {
    overallProgress: 75,
    completedSessions: 9,
    totalSessions: 12,
    daysInTreatment: 18,
    totalTreatmentDays: 21
  };

  const vitalTrends = [
    { date: 'Week 1', stress: 8, energy: 4, sleep: 5, digestion: 6 },
    { date: 'Week 2', stress: 6, energy: 6, sleep: 7, digestion: 7 },
    { date: 'Week 3', stress: 4, energy: 8, sleep: 8, digestion: 8 },
    { date: 'Current', stress: 3, energy: 9, sleep: 9, digestion: 9 }
  ];

  const doshaBalance = [
    { name: 'Vata', value: 35, color: '#8B5CF6' },
    { name: 'Pitta', value: 40, color: '#F59E0B' },
    { name: 'Kapha', value: 25, color: '#10B981' }
  ];

  const sessionFeedback = [
    { session: 'Session 1', rating: 3, mood: 'Fair' },
    { session: 'Session 2', rating: 3, mood: 'Fair' },
    { session: 'Session 3', rating: 4, mood: 'Good' },
    { session: 'Session 4', rating: 4, mood: 'Good' },
    { session: 'Session 5', rating: 5, mood: 'Excellent' },
    { session: 'Session 6', rating: 4, mood: 'Good' },
    { session: 'Session 7', rating: 5, mood: 'Excellent' },
    { session: 'Session 8', rating: 5, mood: 'Excellent' },
    { session: 'Session 9', rating: 5, mood: 'Excellent' }
  ];

  const healthMetrics = [
    { 
      metric: 'Stress Level', 
      current: 25, 
      target: 20, 
      improvement: 75, 
      status: 'improving',
      color: 'bg-red-500'
    },
    { 
      metric: 'Energy Level', 
      current: 90, 
      target: 85, 
      improvement: 85, 
      status: 'excellent',
      color: 'bg-green-500'
    },
    { 
      metric: 'Sleep Quality', 
      current: 85, 
      target: 80, 
      improvement: 80, 
      status: 'excellent',
      color: 'bg-blue-500'
    },
    { 
      metric: 'Digestion', 
      current: 88, 
      target: 85, 
      improvement: 82, 
      status: 'excellent',
      color: 'bg-purple-500'
    }
  ];

  const milestones = [
    { milestone: 'First Session Completed', date: 'Nov 28, 2024', achieved: true },
    { milestone: 'Stress Reduction 50%', date: 'Dec 5, 2024', achieved: true },
    { milestone: 'Sleep Quality Improved', date: 'Dec 8, 2024', achieved: true },
    { milestone: 'Energy Levels Normalized', date: 'Dec 12, 2024', achieved: true },
    { milestone: 'Treatment Completion', date: 'Dec 18, 2024', achieved: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Progress Visualization</h1>
            <p className="text-emerald-600">Track your wellness journey and treatment outcomes</p>
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

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium">Overall Progress</p>
                  <p className="text-3xl font-bold text-emerald-900">{treatmentProgress.overallProgress}%</p>
                  <p className="text-xs text-emerald-500 mt-1">Day {treatmentProgress.daysInTreatment} of {treatmentProgress.totalTreatmentDays}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Sessions</p>
                  <p className="text-3xl font-bold text-blue-900">{treatmentProgress.completedSessions}/{treatmentProgress.totalSessions}</p>
                  <p className="text-xs text-blue-500 mt-1">3 remaining</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Avg. Rating</p>
                  <p className="text-3xl font-bold text-purple-900">4.6★</p>
                  <p className="text-xs text-purple-500 mt-1">Excellent progress</p>
                </div>
                <Star className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Improvement</p>
                  <p className="text-3xl font-bold text-orange-900">85%</p>
                  <p className="text-xs text-orange-500 mt-1">Since start</p>
                </div>
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="wellness" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="wellness">Wellness Trends</TabsTrigger>
            <TabsTrigger value="sessions">Session Progress</TabsTrigger>
            <TabsTrigger value="dosha">Dosha Balance</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          <TabsContent value="wellness" className="space-y-6">
            {/* Health Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {healthMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">{metric.metric}</p>
                        <Badge 
                          variant="outline" 
                          className={
                            metric.status === 'excellent' ? 'bg-green-50 text-green-700 border-green-200' :
                            metric.status === 'improving' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }
                        >
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current: {metric.current}%</span>
                          <span>Target: {metric.target}%</span>
                        </div>
                        <Progress value={metric.current} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Wellness Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Wellness Trends Over Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={vitalTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="stress" stroke="#ef4444" strokeWidth={2} name="Stress (lower is better)" />
                    <Line type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={2} name="Energy Level" />
                    <Line type="monotone" dataKey="sleep" stroke="#3b82f6" strokeWidth={2} name="Sleep Quality" />
                    <Line type="monotone" dataKey="digestion" stroke="#8b5cf6" strokeWidth={2} name="Digestion" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                  <span>Session Feedback Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sessionFeedback}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="session" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Bar dataKey="rating" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sessionFeedback.slice(-3).map((session, index) => (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-gray-900 mb-2">{session.session}</h3>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{session.mood}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dosha" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-teal-600" />
                  <span>Current Dosha Balance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={doshaBalance}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {doshaBalance.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    {doshaBalance.map((dosha, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{dosha.name}</span>
                          <span className="text-sm text-gray-600">{dosha.value}%</span>
                        </div>
                        <Progress value={dosha.value} className="h-3" />
                        <p className="text-xs text-gray-500">
                          {dosha.name === 'Vata' && 'Air + Space - Movement, creativity, nervous system'}
                          {dosha.name === 'Pitta' && 'Fire + Water - Metabolism, digestion, transformation'}
                          {dosha.name === 'Kapha' && 'Earth + Water - Structure, immunity, stability'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <span>Treatment Milestones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border-l-4 ${
                      milestone.achieved 
                        ? 'bg-green-50 border-l-green-500 border border-green-200' 
                        : 'bg-gray-50 border-l-gray-300 border border-gray-200'
                    }`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        milestone.achieved ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {milestone.achieved ? (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        ) : (
                          <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${milestone.achieved ? 'text-green-900' : 'text-gray-700'}`}>
                          {milestone.milestone}
                        </h3>
                        <p className={`text-sm ${milestone.achieved ? 'text-green-600' : 'text-gray-500'}`}>
                          {milestone.date}
                        </p>
                      </div>
                      {milestone.achieved && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Completed
                        </Badge>
                      )}
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