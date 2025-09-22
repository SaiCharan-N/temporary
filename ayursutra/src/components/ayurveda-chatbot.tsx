import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import {
  MessageCircle,
  Send,
  Bot,
  User,
  X,
  Minimize2,
  Maximize2,
  Leaf,
  Clock,
  Heart,
  Coffee,
  Utensils,
  Moon,
  Sun,
  Droplets
} from 'lucide-react';

interface AyurvedaChatbotProps {
  isVisible?: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const quickQuestions = [
  { icon: Utensils, text: "Diet tips for my dosha", category: "diet" },
  { icon: Clock, text: "Pre-session preparation", category: "preparation" },
  { icon: Droplets, text: "Post-treatment care", category: "aftercare" },
  { icon: Moon, text: "Sleep & lifestyle advice", category: "lifestyle" },
  { icon: Heart, text: "Stress management tips", category: "wellness" },
  { icon: Coffee, text: "Daily routine guidance", category: "routine" }
];

const botResponses = {
  greeting: {
    text: "🙏 Namaste! I'm AyurBot, your Ayurvedic wellness assistant. I'm here to help you with diet tips, lifestyle guidance, and pre/post-treatment care. How can I assist you today?",
    suggestions: ["Diet tips for my dosha", "Pre-session preparation", "Post-treatment care", "Daily routine guidance"]
  },
  diet: {
    text: "🌿 For optimal healing during your Panchakarma journey:\n\n• **Vata Dosha**: Warm, cooked foods like kitchadi, soups, and herbal teas\n• **Pitta Dosha**: Cooling foods like cucumber, mint, coconut water, and sweet fruits\n• **Kapha Dosha**: Light, spicy foods like ginger tea, steamed vegetables, and legumes\n\nAvoid: Cold drinks, processed foods, and heavy meals 2-3 hours before treatments.",
    suggestions: ["What should I avoid eating?", "Best herbs for my dosha", "Meal timing recommendations"]
  },
  preparation: {
    text: "🧘 Pre-treatment preparation guidelines:\n\n• **2-3 hours before**: Light meal, avoid heavy/oily foods\n• **1 hour before**: Stop eating, drink warm water\n• **30 minutes before**: Arrive early, use restroom, relax\n• **Clothing**: Wear comfortable, loose clothing\n• **Mental state**: Practice deep breathing, set positive intentions\n\n💡 Avoid alcohol, caffeine, and strenuous exercise before sessions.",
    suggestions: ["What to wear?", "Mental preparation tips", "Should I shower before?"]
  },
  aftercare: {
    text: "🌸 Post-treatment care for optimal benefits:\n\n• **First 2 hours**: Rest quietly, avoid cold environments\n• **Hydration**: Sip warm water or herbal tea\n• **Avoid**: Cold showers, vigorous activity, heavy meals\n• **Gentle activities**: Light walking, meditation, reading\n• **Evening**: Early dinner, warm bath with Epsom salts\n\n⚠️ Some mild fatigue is normal - listen to your body!",
    suggestions: ["How long should I rest?", "What if I feel tired?", "When can I exercise again?"]
  },
  lifestyle: {
    text: "🌅 Daily Ayurvedic lifestyle recommendations:\n\n**Morning (6-10 AM - Kapha time)**:\n• Wake before sunrise\n• Warm water with lemon\n• Gentle yoga/meditation\n\n**Midday (10 AM-2 PM - Pitta time)**:\n• Main meal of the day\n• Mental activities\n\n**Evening (2-6 PM - Vata time)**:\n• Light activities\n• Creative pursuits\n\n**Night (6-10 PM - Kapha time)**:\n• Light dinner\n• Calming activities\n• Sleep by 10 PM",
    suggestions: ["Best sleep schedule", "Morning routine tips", "Evening wind-down"]
  },
  wellness: {
    text: "🧠 Stress management through Ayurveda:\n\n**Breathing (Pranayama)**:\n• 4-7-8 breathing: Inhale 4, hold 7, exhale 8\n• Alternate nostril breathing\n\n**Herbs for calm**:\n• Ashwagandha for stress\n• Brahmi for mental clarity\n• Jatamansi for anxiety\n\n**Daily practices**:\n• Oil massage (Abhyanga)\n• Meditation 10-20 minutes\n• Nature walks\n• Gratitude journaling",
    suggestions: ["Breathing exercises", "Natural stress relievers", "Meditation techniques"]
  },
  routine: {
    text: "⏰ Ideal daily routine (Dinacharya):\n\n**5:30-6:00 AM**: Wake up\n**6:00-7:00 AM**: Oral hygiene, warm water, elimination\n**7:00-8:00 AM**: Exercise/Yoga\n**8:00-9:00 AM**: Meditation, oil massage\n**9:00-10:00 AM**: Breakfast\n**12:00-1:00 PM**: Lunch (main meal)\n**3:00-4:00 PM**: Light snack if needed\n**6:00-7:00 PM**: Light dinner\n**9:00-10:00 PM**: Wind down, prepare for sleep\n**10:00 PM**: Sleep time",
    suggestions: ["Adjust routine for my schedule", "Weekend routine", "Travel routine tips"]
  }
};

export function AyurvedaChatbot({ isVisible = true }: AyurvedaChatbotProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputMessage, setInputMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    // Welcome message when chat is first opened
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: botResponses.greeting.text,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: botResponses.greeting.suggestions
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('diet') || input.includes('food') || input.includes('eat') || input.includes('dosha')) {
      return botResponses.diet;
    } else if (input.includes('before') || input.includes('preparation') || input.includes('prepare') || input.includes('session')) {
      return botResponses.preparation;
    } else if (input.includes('after') || input.includes('post') || input.includes('care') || input.includes('treatment')) {
      return botResponses.aftercare;
    } else if (input.includes('sleep') || input.includes('lifestyle') || input.includes('daily') || input.includes('routine')) {
      if (input.includes('stress') || input.includes('anxiety') || input.includes('calm')) {
        return botResponses.wellness;
      } else if (input.includes('routine') || input.includes('schedule') || input.includes('time')) {
        return botResponses.routine;
      }
      return botResponses.lifestyle;
    } else if (input.includes('stress') || input.includes('anxiety') || input.includes('worry') || input.includes('calm')) {
      return botResponses.wellness;
    } else if (input.includes('routine') || input.includes('schedule') || input.includes('day')) {
      return botResponses.routine;
    } else {
      return {
        text: "I understand you're looking for guidance. I can help you with:\n\n🍃 Diet & nutrition for your dosha\n🧘 Pre & post-treatment care\n🌅 Daily lifestyle routines\n🧠 Stress management techniques\n\nWhat specific area would you like to explore?",
        suggestions: ["Diet guidance", "Treatment preparation", "Daily routine", "Stress relief"]
      };
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Widget */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </Button>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <Bot className="w-3 h-3 text-white" />
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[32rem]'
        }`}>
          <Card className="bg-white shadow-2xl border-emerald-200 h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">AyurBot</CardTitle>
                    <CardDescription className="text-emerald-100 text-sm">
                      Your Ayurvedic Assistant
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <>
                {/* Quick Questions */}
                {messages.length <= 1 && (
                  <div className="p-4 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickQuestions.slice(0, 4).map((question, index) => {
                        const Icon = question.icon;
                        return (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => sendMessage(question.text)}
                            className="text-xs h-auto py-2 justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                          >
                            <Icon className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{question.text}</span>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-64 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="flex items-start space-x-2 mb-2">
                              {message.sender === 'bot' && (
                                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                                  <Bot className="w-3 h-3 text-white" />
                                </div>
                              )}
                              {message.sender === 'user' && (
                                <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center flex-shrink-0">
                                  <User className="w-3 h-3 text-white" />
                                </div>
                              )}
                              <div className="flex-1">
                                <p className="text-sm whitespace-pre-line">{message.text}</p>
                                <p className={`text-xs mt-1 ${
                                  message.sender === 'user' ? 'text-emerald-200' : 'text-gray-500'
                                }`}>
                                  {formatTime(message.timestamp)}
                                </p>
                              </div>
                            </div>

                            {/* Suggestions */}
                            {message.suggestions && message.sender === 'bot' && (
                              <div className="mt-3 space-y-1">
                                {message.suggestions.map((suggestion, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="w-full text-xs h-6 justify-start border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                                  >
                                    {suggestion}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                                <Bot className="w-3 h-3 text-white" />
                              </div>
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about diet, lifestyle, or treatments..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          sendMessage(inputMessage);
                        }
                      }}
                      className="flex-1 border-emerald-200 focus:border-emerald-400"
                    />
                    <Button
                      onClick={() => sendMessage(inputMessage)}
                      disabled={!inputMessage.trim() || isTyping}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    💡 I provide general Ayurvedic guidance. Consult your practitioner for personalized advice.
                  </p>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
}