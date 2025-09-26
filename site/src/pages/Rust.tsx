
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  gamesConfig,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const Rust = () => {
  const rustGame = gamesConfig.games.find(game => game.id === 'rust');
  const rustPlans = rustGame?.plans || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
      {/* Hero Section */}
      {isSectionEnabled('gamePages', 'hero') && (
        <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-orange-900/80"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6 animate-bounce">{rustGame?.icon || '⚙️'}</div>
              <Badge className="mb-4 bg-orange-600/20 text-orange-300 border-orange-500/50">
                Rust Survival Hosting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Rust Server Hosting
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {rustGame?.description || 'Survive, craft, and build in the ultimate Rust survival experience with our optimized servers.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Rust Plans */}
      {rustPlans.length > 0 && isSectionEnabled('gamePages', 'plans') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Rust Hosting Plans
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rustPlans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group ${
                    plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-white group-hover:text-orange-400 transition-colors">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
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
                    
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
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

export default Rust;
