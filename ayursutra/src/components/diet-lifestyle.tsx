import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Checkbox } from './ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import {
  Leaf,
  Clock,
  CheckCircle,
  AlertCircle,
  Coffee,
  Utensils,
  Moon,
  Sun,
  Droplets,
  ThermometerSun,
  Ban,
  Plus,
  BookOpen,
  Eye,
  Snowflake,
  Flower,
  TreePine,
  Flame
} from 'lucide-react';

interface DietLifestyleProps {
  onPageChange: (page: string) => void;
}

export function DietLifestyle({ onPageChange }: DietLifestyleProps) {
  const [selectedRecipe, setSelectedRecipe] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState('meals');
  const dailySchedule = {
    morning: [
      { time: '6:00 AM', activity: 'Warm water with lemon', completed: true },
      { time: '6:30 AM', activity: 'Morning meditation (10 min)', completed: true },
      { time: '7:00 AM', activity: 'Light yoga or stretching', completed: false },
      { time: '8:00 AM', activity: 'Herbal tea (Triphala)', completed: false }
    ],
    afternoon: [
      { time: '12:00 PM', activity: 'Main meal (lunch)', completed: false },
      { time: '1:00 PM', activity: '10-minute walk', completed: false },
      { time: '3:00 PM', activity: 'Coconut water', completed: false }
    ],
    evening: [
      { time: '6:00 PM', activity: 'Light dinner', completed: false },
      { time: '8:00 PM', activity: 'Herbal tea (Chamomile)', completed: false },
      { time: '9:30 PM', activity: 'Oil massage (self)', completed: false },
      { time: '10:00 PM', activity: 'Prepare for sleep', completed: false }
    ]
  };

  const doshaFoods = {
    recommended: [
      { 
        name: 'Warm Cooked Grains',
        items: ['Quinoa', 'Oats', 'Brown rice', 'Barley'],
        reason: 'Balances Vata, easy to digest',
        category: 'Grains'
      },
      { 
        name: 'Warm Spices',
        items: ['Ginger', 'Turmeric', 'Cumin', 'Coriander'],
        reason: 'Stimulates digestion, reduces inflammation',
        category: 'Spices'
      },
      { 
        name: 'Cooked Vegetables',
        items: ['Sweet potato', 'Carrots', 'Beets', 'Leafy greens'],
        reason: 'Nourishing and grounding for Vata',
        category: 'Vegetables'
      },
      { 
        name: 'Healthy Fats',
        items: ['Ghee', 'Sesame oil', 'Coconut oil', 'Almonds'],
        reason: 'Lubricates tissues, calms Vata',
        category: 'Fats'
      }
    ],
    avoid: [
      { 
        name: 'Cold Foods',
        items: ['Ice cream', 'Cold drinks', 'Raw vegetables', 'Frozen foods'],
        reason: 'Aggravates Vata, weakens digestion'
      },
      { 
        name: 'Processed Foods',
        items: ['Fast food', 'Refined sugar', 'White bread', 'Packaged snacks'],
        reason: 'Creates toxins, imbalances all doshas'
      },
      { 
        name: 'Stimulants',
        items: ['Coffee', 'Black tea', 'Alcohol', 'Energy drinks'],
        reason: 'Increases Vata and Pitta, disrupts sleep'
      }
    ]
  };

  const [todayMeals, setTodayMeals] = React.useState([
    {
      id: 1,
      time: 'Breakfast (8:00 AM)',
      meal: 'Warm oatmeal with ghee, almonds, and honey',
      benefits: ['Nourishing', 'Grounding', 'Easy to digest'],
      eaten: true
    },
    {
      id: 2,
      time: 'Lunch (12:00 PM)',
      meal: 'Quinoa bowl with steamed vegetables and turmeric',
      benefits: ['Balancing', 'Protein-rich', 'Anti-inflammatory'],
      eaten: false
    },
    {
      id: 3,
      time: 'Snack (3:30 PM)',
      meal: 'Warm herbal tea with dates',
      benefits: ['Hydrating', 'Natural sweetness', 'Energy boost'],
      eaten: false
    },
    {
      id: 4,
      time: 'Dinner (6:30 PM)',
      meal: 'Mung dal soup with ginger and cumin',
      benefits: ['Light', 'Detoxifying', 'Easy to digest'],
      eaten: false
    }
  ]);

  const [lifestyleHabits, setLifestyleHabits] = React.useState([
    {
      category: 'Sleep',
      icon: Moon,
      habits: [
        { id: 1, text: 'Sleep by 10:00 PM', completed: false },
        { id: 2, text: 'Wake up before sunrise', completed: true },
        { id: 3, text: 'Avoid screens 1 hour before bed', completed: false }
      ]
    },
    {
      category: 'Exercise',
      icon: Sun,
      habits: [
        { id: 4, text: 'Daily yoga practice', completed: true },
        { id: 5, text: 'Regular walks in nature', completed: true },
        { id: 6, text: 'Breathing exercises', completed: false }
      ]
    },
    {
      category: 'Hydration',
      icon: Droplets,
      habits: [
        { id: 7, text: 'Drink warm water throughout day', completed: true },
        { id: 8, text: 'Herbal teas between meals', completed: false },
        { id: 9, text: 'Avoid cold drinks', completed: true }
      ]
    },
    {
      category: 'Stress Management',
      icon: Leaf,
      habits: [
        { id: 10, text: 'Daily meditation practice', completed: true },
        { id: 11, text: 'Regular oil massage', completed: false },
        { id: 12, text: 'Maintain regular routine', completed: true }
      ]
    }
  ]);

  const weeklyProgress = {
    dietCompliance: 85,
    lifestyleScore: 78,
    energyLevel: 82,
    digestiveHealth: 88
  };

  const recipeLibrary = [
    {
      id: 1,
      name: 'Quinoa Khichdi',
      category: 'Main Course',
      doshaType: 'Vata-Pitta',
      cookTime: '30 minutes',
      difficulty: 'Easy',
      benefits: ['Balancing', 'Digestive', 'Nourishing'],
      ingredients: [
        '1 cup quinoa',
        '1/2 cup yellow moong dal',
        '2 tsp ghee',
        '1 tsp cumin seeds',
        '1 inch ginger',
        '1 tsp turmeric',
        'Salt to taste',
        '4 cups water',
        'Fresh coriander leaves'
      ],
      instructions: [
        'Wash quinoa and moong dal thoroughly',
        'Heat ghee in a pressure cooker, add cumin seeds',
        'Add ginger and sauté for 1 minute',
        'Add quinoa, dal, turmeric, and salt',
        'Add water and pressure cook for 3 whistles',
        'Garnish with coriander and serve warm'
      ]
    },
    {
      id: 2,
      name: 'Golden Milk Latte',
      category: 'Beverage',
      doshaType: 'All Doshas',
      cookTime: '10 minutes',
      difficulty: 'Easy',
      benefits: ['Anti-inflammatory', 'Calming', 'Immunity boost'],
      ingredients: [
        '1 cup almond milk',
        '1/2 tsp turmeric powder',
        '1/4 tsp ginger powder',
        '1 pinch black pepper',
        '1 tsp honey',
        '1/4 tsp cinnamon',
        '1 pinch cardamom'
      ],
      instructions: [
        'Heat almond milk in a saucepan',
        'Add turmeric, ginger, cinnamon, cardamom',
        'Whisk until well combined',
        'Add black pepper and simmer for 2 minutes',
        'Remove from heat, add honey when cool',
        'Serve warm before bedtime'
      ]
    },
    {
      id: 3,
      name: 'Ayurvedic Oatmeal',
      category: 'Breakfast',
      doshaType: 'Vata-Pitta',
      cookTime: '15 minutes',
      difficulty: 'Easy',
      benefits: ['Grounding', 'Nourishing', 'Sustained energy'],
      ingredients: [
        '1/2 cup rolled oats',
        '1 cup warm milk',
        '1 tbsp ghee',
        '1 tbsp chopped almonds',
        '1 tsp honey',
        '1/4 tsp cinnamon',
        '2-3 dates, chopped'
      ],
      instructions: [
        'Heat ghee in a pan, add oats',
        'Roast oats for 2-3 minutes until fragrant',
        'Add warm milk and cinnamon',
        'Cook for 8-10 minutes, stirring occasionally',
        'Add chopped dates and almonds',
        'Serve warm with honey drizzled on top'
      ]
    }
  ];

  const herbalTeas = [
    {
      name: 'Triphala Tea',
      benefits: ['Digestive health', 'Detoxification', 'Gentle cleansing'],
      doshaType: 'All Doshas',
      bestTime: 'Before bed',
      preparation: 'Steep 1 tsp powder in hot water for 5 minutes',
      description: 'A traditional blend of three fruits that supports natural detoxification and digestive health.'
    },
    {
      name: 'Ginger-Turmeric Tea',
      benefits: ['Anti-inflammatory', 'Digestive fire', 'Immunity'],
      doshaType: 'Vata-Kapha',
      bestTime: 'Morning or before meals',
      preparation: 'Boil fresh ginger and turmeric root for 10 minutes',
      description: 'A warming blend that stimulates digestion and reduces inflammation.'
    },
    {
      name: 'Chamomile Tea',
      benefits: ['Relaxation', 'Better sleep', 'Nervous system'],
      doshaType: 'Pitta-Vata',
      bestTime: 'Evening',
      preparation: 'Steep dried flowers in hot water for 5-7 minutes',
      description: 'A gentle, calming tea that promotes relaxation and restful sleep.'
    },
    {
      name: 'Fennel-Coriander Tea',
      benefits: ['Cooling', 'Digestive', 'Hydrating'],
      doshaType: 'Pitta',
      bestTime: 'After meals',
      preparation: 'Boil equal parts fennel and coriander seeds for 8 minutes',
      description: 'A cooling digestive tea that helps balance Pitta and aids digestion.'
    }
  ];

  const seasonalGuidelines = [
    {
      season: 'Spring',
      icon: Flower,
      duration: 'March - May',
      dosha: 'Kapha Season',
      characteristics: ['Wet', 'Cool', 'Heavy'],
      recommendations: [
        'Eat lighter, warming foods',
        'Increase physical activity',
        'Practice detoxification',
        'Favor bitter and pungent tastes',
        'Wake up early (before 6 AM)',
        'Avoid dairy and cold foods'
      ],
      avoid: ['Heavy, oily foods', 'Excessive sleep', 'Cold drinks', 'Sweet foods']
    },
    {
      season: 'Summer',
      icon: Sun,
      duration: 'June - August',
      dosha: 'Pitta Season',
      characteristics: ['Hot', 'Sharp', 'Intense'],
      recommendations: [
        'Eat cooling, sweet foods',
        'Stay hydrated with room temperature water',
        'Practice gentle, cooling exercises',
        'Favor sweet, bitter, and astringent tastes',
        'Avoid excessive heat and sun',
        'Include coconut, cucumber, and mint'
      ],
      avoid: ['Spicy foods', 'Excessive exercise', 'Alcohol', 'Sour foods']
    },
    {
      season: 'Monsoon',
      icon: Droplets,
      duration: 'September - October',
      dosha: 'Vata-Pitta Season',
      characteristics: ['Humid', 'Variable', 'Changeable'],
      recommendations: [
        'Eat fresh, easily digestible foods',
        'Boost immunity with ginger and turmeric',
        'Maintain regular routines',
        'Favor warm, cooked foods',
        'Practice gentle yoga',
        'Keep body warm and dry'
      ],
      avoid: ['Street food', 'Raw vegetables', 'Excessive cold foods', 'Irregular schedules']
    },
    {
      season: 'Winter',
      icon: Snowflake,
      duration: 'November - February',
      dosha: 'Vata Season',
      characteristics: ['Cold', 'Dry', 'Light'],
      recommendations: [
        'Eat warming, nourishing foods',
        'Increase healthy fats and oils',
        'Practice oil massage (abhyanga)',
        'Favor sweet, sour, and salty tastes',
        'Maintain warm body temperature',
        'Follow regular sleep schedule'
      ],
      avoid: ['Cold foods and drinks', 'Excessive raw foods', 'Irregular meals', 'Cold, windy exposure']
    }
  ];

  const toggleMealEaten = (mealId: number) => {
    setTodayMeals(meals => 
      meals.map(meal => 
        meal.id === mealId ? { ...meal, eaten: !meal.eaten } : meal
      )
    );
  };

  const toggleHabitCompleted = (categoryIndex: number, habitId: number) => {
    setLifestyleHabits(habits => 
      habits.map((category, catIndex) => 
        catIndex === categoryIndex 
          ? {
              ...category,
              habits: category.habits.map(habit => 
                habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
              )
            }
          : category
      )
    );
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Diet & Lifestyle Guidance</h1>
          <p className="text-green-100 mb-6">
            Personalized nutrition and lifestyle recommendations for your Vata-Pitta constitution
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Utensils className="w-8 h-8 mx-auto mb-2" />
              <p className="text-green-100">Diet Compliance</p>
              <p className="text-2xl font-bold">{weeklyProgress.dietCompliance}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Leaf className="w-8 h-8 mx-auto mb-2" />
              <p className="text-green-100">Lifestyle Score</p>
              <p className="text-2xl font-bold">{weeklyProgress.lifestyleScore}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Sun className="w-8 h-8 mx-auto mb-2" />
              <p className="text-green-100">Energy Level</p>
              <p className="text-2xl font-bold">{weeklyProgress.energyLevel}%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <ThermometerSun className="w-8 h-8 mx-auto mb-2" />
              <p className="text-green-100">Digestive Health</p>
              <p className="text-2xl font-bold">{weeklyProgress.digestiveHealth}%</p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754493930441-2550a605e805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtZWRpY2luZSUyMGF5dXJ2ZWRhfGVufDF8fHx8MTc1ODM4NTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Herbal medicine" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Diet & Lifestyle Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="meals">Today's Meals</TabsTrigger>
          <TabsTrigger value="recipes">Recipe Library</TabsTrigger>
          <TabsTrigger value="teas">Herbal Teas</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Guide</TabsTrigger>
        </TabsList>

        {/* Today's Meals Tab */}
        <TabsContent value="meals" className="space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-8">
              {/* Today's Meal Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Utensils className="w-5 h-5 text-green-600" />
                    <span>Today's Meal Plan</span>
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    Customized for your treatment phase and dosha balance
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayMeals.map((meal) => (
                    <div key={meal.id} className={`border rounded-xl p-6 ${
                      meal.eaten ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:border-green-200'
                    } transition-colors`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Checkbox 
                              checked={meal.eaten}
                              onCheckedChange={() => toggleMealEaten(meal.id)}
                              className="mt-1"
                            />
                            <h3 className="font-medium text-gray-900">{meal.time}</h3>
                            {meal.eaten && (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-gray-700 mb-3 ml-7">{meal.meal}</p>
                          <div className="flex flex-wrap gap-2 ml-7">
                            {meal.benefits.map((benefit, idx) => (
                              <Badge key={idx} className="bg-green-100 text-green-700">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 ml-7">
                        <Button 
                          size="sm" 
                          onClick={() => toggleMealEaten(meal.id)}
                          className={meal.eaten ? "bg-gray-600 hover:bg-gray-700" : "bg-green-600 hover:bg-green-700"}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {meal.eaten ? 'Mark as Not Eaten' : 'Mark as Eaten'}
                        </Button>
                        <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                          View Recipe
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

          {/* Daily Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Daily Routine Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(dailySchedule).map(([period, activities]) => (
                  <div key={period} className="space-y-3">
                    <h3 className="font-medium text-gray-900 capitalize flex items-center space-x-2">
                      {period === 'morning' && <Sun className="w-4 h-4 text-yellow-500" />}
                      {period === 'afternoon' && <ThermometerSun className="w-4 h-4 text-orange-500" />}
                      {period === 'evening' && <Moon className="w-4 h-4 text-purple-500" />}
                      <span>{period}</span>
                    </h3>
                    <div className="space-y-2">
                      {activities.map((activity, index) => (
                        <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                          activity.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              activity.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`}></div>
                            <span className="text-sm font-medium text-gray-700">{activity.time}</span>
                            <span className="text-sm text-gray-600">{activity.activity}</span>
                          </div>
                          {!activity.completed && (
                            <Button size="sm" variant="outline" className="border-green-200 text-green-600 text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Done
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dosha-Based Food Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span>Vata-Pitta Food Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Recommended Foods */}
                <div>
                  <h3 className="font-medium text-green-900 mb-4 flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Recommended Foods</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doshaFoods.recommended.map((category, index) => (
                      <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">{category.name}</h4>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {category.items.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-green-300 text-green-700">
                              {item}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-green-700">{category.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Foods to Avoid */}
                <div>
                  <h3 className="font-medium text-red-900 mb-4 flex items-center space-x-2">
                    <Ban className="w-4 h-4" />
                    <span>Foods to Avoid</span>
                  </h3>
                  <div className="space-y-3">
                    {doshaFoods.avoid.map((category, index) => (
                      <div key={index} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-medium text-red-900 mb-2">{category.name}</h4>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {category.items.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-red-300 text-red-700">
                              {item}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-red-700">{category.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Lifestyle Habits Tracker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Lifestyle Habits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {lifestyleHabits.map((category, categoryIndex) => {
                    const Icon = category.icon;
                    const completed = category.habits.filter(h => h.completed).length;
                    const total = category.habits.length;

                    return (
                      <div key={categoryIndex} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Icon className="w-5 h-5 text-green-600" />
                            <span className="font-medium">{category.category}</span>
                          </div>
                          <span className="text-sm text-gray-600">{completed}/{total}</span>
                        </div>
                        
                        <div className="space-y-2">
                          {category.habits.map((habit) => (
                            <div key={habit.id} className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                              habit.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                            }`}>
                              <Checkbox 
                                checked={habit.completed}
                                onCheckedChange={() => toggleHabitCompleted(categoryIndex, habit.id)}
                              />
                              <span className={`text-sm flex-1 ${
                                habit.completed ? 'text-green-800 line-through' : 'text-gray-700'
                              }`}>
                                {habit.text}
                              </span>
                              {habit.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

          {/* Daily Reminders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Today's Reminders</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">Pre-meal Routine</span>
                </div>
                <p className="text-xs text-amber-800">
                  Take 5 deep breaths before each meal to activate digestive fire
                </p>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Hydration Goal</span>
                </div>
                <p className="text-xs text-blue-800">
                  Drink warm water 30 minutes before meals, avoid during eating
                </p>
              </div>

              <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Moon className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Evening Routine</span>
                </div>
                <p className="text-xs text-purple-800">
                  Begin winding down by 8 PM for optimal sleep quality
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Diet Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start space-x-3 border-green-200 text-green-700 hover:bg-green-50">
                <BookOpen className="w-5 h-5" />
                <span>Recipe Library</span>
              </Button>
              <Button variant="outline" className="w-full justify-start space-x-3 border-green-200 text-green-700 hover:bg-green-50">
                <Coffee className="w-5 h-5" />
                <span>Herbal Tea Guide</span>
              </Button>
              <Button variant="outline" className="w-full justify-start space-x-3 border-green-200 text-green-700 hover:bg-green-50">
                <Leaf className="w-5 h-5" />
                <span>Seasonal Guidelines</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}