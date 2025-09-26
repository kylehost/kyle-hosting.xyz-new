
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  gamesConfig,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const GarrysMod = () => {
  const gmodGame = gamesConfig.games.find(game => game.id === 'gmod');
  const gmodPlans = gmodGame?.plans || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      {isSectionEnabled('gamePages', 'hero') && (
        <section className="relative bg-gradient-to-br from-purple-900 via-slate-800 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(126,34,206,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6 animate-bounce">{gmodGame?.icon || '🎮'}</div>
            <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/50">
              Sandbox Gaming Hosting
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Garry's Mod Server Hosting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {gmodGame?.description || 'Create endless possibilities with our optimized Garry\'s Mod servers supporting all game modes.'}
            </p>
          </div>
        </section>
      )}

      {/* GMod Plans */}
      {gmodPlans.length > 0 && isSectionEnabled('gamePages', 'plans') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Garry's Mod Hosting Plans
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gmodPlans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative bg-slate-800/80 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-300 mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div>{plan.ram}</div>
                      <div>{plan.cpu}</div>
                      <div>{plan.storage}</div>
                      <div>{plan.players}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Icons.CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GarrysMod;
