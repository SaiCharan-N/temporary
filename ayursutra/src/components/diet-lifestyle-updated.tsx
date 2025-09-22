import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Utensils, Clock, Droplets, Sun, Moon, Thermometer, Leaf, Apple, Coffee, AlertTriangle, CheckCircle } from 'lucide-react';

interface DietLifestyleProps {
  onPageChange: (page: string) => void;
}

export function DietLifestyle({ onPageChange }: DietLifestyleProps) {
  const doshaType = 'Vata-Pitta';
  
  const dietaryRecommendations = {
    beneficial: [
      { food: 'Warm, cooked grains (rice, quinoa)', category: 'Grains', dosha: 'Vata' },
      { food: 'Sweet, juicy fruits (mango, grapes)', category: 'Fruits', dosha: 'Both' },
      { food: 'Cooling vegetables (cucumber, leafy greens)', category: 'Vegetables', dosha: 'Pitta' },
      { food: 'Ghee and coconut oil', category: 'Fats', dosha: 'Both' },
      { food: 'Milk, yogurt (room temperature)', category: 'Dairy', dosha: 'Vata' },
      { food: 'Almonds and dates', category: 'Nuts/Seeds', dosha: 'Both' }
    ],
    avoid: [
      { food: 'Cold, raw foods', category: 'General', dosha: 'Vata' },
      { food: 'Spicy, hot foods', category: 'General', dosha: 'Pitta' },
      { food: 'Caffeine and alcohol', category: 'Beverages', dosha: 'Both' },
      { food: 'Processed and refined foods', category: 'General', dosha: 'Both' }
    ]
  };

  const mealPlan = {
    breakfast: {
      time: '7:00 - 8:00 AM',
      items: ['Warm oatmeal with ghee and dates', 'Herbal tea (ginger or chamomile)', 'Soaked almonds (5-6)'],
      tips: 'Start with warm water and lemon. Eat mindfully and chew well.'
    },
    lunch: {
      time: '12:00 - 1:00 PM',
      items: ['Rice with dal (moong preferred)', 'Steamed vegetables', 'Small portion of yogurt', 'Cucumber salad'],
      tips: 'This should be your largest meal. Include all six tastes if possible.'
    },
    dinner: {
      time: '6:00 - 7:00 PM',
      items: ['Light soup or kitchadi', 'Herbal tea', 'Avoid raw foods'],
      tips: 'Keep dinner light and finish 3 hours before sleep.'
    }
  };

  const lifestyleGuidelines = [
    {
      category: 'Daily Routine',
      icon: Clock,
      recommendations: [
        'Wake up before 6 AM during Vata time',
        'Regular meal times to balance Vata',
        'Avoid overexertion during Pitta hours (10 AM - 2 PM)',
        'Sleep by 10 PM for optimal rest'
      ]
    },
    {
      category: 'Hydration',
      icon: Droplets,
      recommendations: [
        'Drink warm water throughout the day',
        'Add lemon to morning water for Pitta',
        'Avoid ice-cold beverages',
        'Herbal teas: ginger, chamomile, mint'
      ]
    },
    {
      category: 'Exercise',
      icon: Sun,
      recommendations: [
        'Gentle, regular exercise for Vata',
        'Avoid intense workouts during hot weather',
        'Yoga and walking are ideal',
        'Exercise during cooler parts of the day'
      ]
    },
    {
      category: 'Sleep',
      icon: Moon,
      recommendations: [
        'Maintain regular sleep schedule',
        'Create calming bedtime routine',
        'Avoid screens 1 hour before bed',
        'Keep bedroom cool and dark'
      ]
    }
  ];

  const currentSeasonTips = {
    season: 'Winter',
    vataAdvice: [
      'Increase warm, oily foods to counter dry cold',
      'Use heating spices: ginger, cinnamon, cardamom',
      'Practice oil massage (Abhyanga) daily',
      'Stay warm and avoid cold drafts'
    ],
    pittaAdvice: [
      'Moderate heating foods - not too spicy',
      'Include sweet, bitter tastes',
      'Avoid excessive heating practices',
      'Maintain regular routine despite season'
    ]
  };

  const supplements = [
    { name: 'Triphala', purpose: 'Digestion and detox', timing: 'Before sleep', status: 'recommended' },
    { name: 'Ashwagandha', purpose: 'Stress and energy', timing: 'With warm milk', status: 'current' },
    { name: 'Brahmi', purpose: 'Mental clarity', timing: 'Morning', status: 'current' },
    { name: 'Chyawanprash', purpose: 'Immunity', timing: 'Morning', status: 'recommended' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">Diet & Lifestyle Guidance</h1>
            <p className="text-emerald-600">Personalized recommendations for your {doshaType} constitution</p>
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

        {/* Dosha Overview */}
        <Card className="mb-8 bg-gradient-to-r from-orange-50 to-purple-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-orange-900 mb-2">Your Constitution: {doshaType}</h2>
                <p className="text-orange-700 mb-4">
                  You have a dual constitution combining the qualities of both Vata (Air + Space) and Pitta (Fire + Water).
                  This requires balancing cooling and warming practices.
                </p>
                <div className="flex space-x-2">
                  <Badge className="bg-purple-100 text-purple-800">Vata: Movement & Creativity</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Pitta: Metabolism & Transformation</Badge>
                </div>
              </div>
              <Thermometer className="w-16 h-16 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="diet" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="diet">Diet Plan</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal Tips</TabsTrigger>
            <TabsTrigger value="supplements">Supplements</TabsTrigger>
          </TabsList>

          <TabsContent value="diet" className="space-y-6">
            {/* Dietary Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Beneficial Foods</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dietaryRecommendations.beneficial.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <div>
                          <p className="font-medium text-green-900">{item.food}</p>
                          <p className="text-sm text-green-600">{item.category}</p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                          {item.dosha}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-700">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Foods to Minimize</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dietaryRecommendations.avoid.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <p className="font-medium text-red-900">{item.food}</p>
                          <p className="text-sm text-red-600">{item.category}</p>
                        </div>
                        <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
                          {item.dosha}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Meal Plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Utensils className="w-5 h-5 text-emerald-600" />
                  <span>Today's Meal Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(mealPlan).map(([meal, details]) => (
                    <div key={meal} className="p-4 border border-emerald-200 rounded-xl bg-emerald-50">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <h3 className="font-medium text-emerald-900 capitalize">{meal}</h3>
                      </div>
                      <p className="text-sm text-emerald-600 mb-3">{details.time}</p>
                      <ul className="space-y-2 mb-4">
                        {details.items.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="p-3 bg-white rounded-lg border border-emerald-200">
                        <p className="text-xs text-emerald-700 font-medium">💡 Tip:</p>
                        <p className="text-xs text-emerald-600 mt-1">{details.tips}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lifestyleGuidelines.map((guideline, index) => {
                const Icon = guideline.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon className="w-5 h-5 text-emerald-600" />
                        <span>{guideline.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {guideline.recommendations.map((rec, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-emerald-900">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="seasonal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-blue-600" />
                  <span>{currentSeasonTips.season} Season Guidance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <h3 className="font-medium text-purple-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      Vata-Specific Tips
                    </h3>
                    <div className="space-y-2">
                      {currentSeasonTips.vataAdvice.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-purple-800">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <h3 className="font-medium text-orange-900 mb-3 flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      Pitta-Specific Tips
                    </h3>
                    <div className="space-y-2">
                      {currentSeasonTips.pittaAdvice.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-orange-800">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supplements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Apple className="w-5 h-5 text-green-600" />
                  <span>Ayurvedic Supplements & Herbs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supplements.map((supplement, index) => (
                    <div key={index} className={`p-4 rounded-xl border ${
                      supplement.status === 'current' 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{supplement.name}</h3>
                        <Badge className={
                          supplement.status === 'current' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }>
                          {supplement.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{supplement.purpose}</p>
                      <p className="text-xs text-gray-500">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Best time: {supplement.timing}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <p className="text-sm font-medium text-yellow-900">Important Note</p>
                  </div>
                  <p className="text-sm text-yellow-800">
                    Please consult with your practitioner before starting any new supplements. 
                    Individual needs may vary based on your current treatment phase and health status.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}