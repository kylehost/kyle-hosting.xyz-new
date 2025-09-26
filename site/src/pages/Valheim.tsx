
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  gamesConfig,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const Valheim = () => {
  const valheimGame = gamesConfig.games.find(game => game.id === 'valheim');
  const valheimPlans = valheimGame?.plans || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      {isSectionEnabled('gamePages', 'hero') && (
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/80"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6 animate-bounce">{valheimGame?.icon || '⚔️'}</div>
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50">
                Viking Survival Hosting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Valheim Server Hosting
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {valheimGame?.description || 'Embark on epic Viking adventures with friends on our optimized Valheim servers.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Valheim Plans */}
      {valheimPlans.length > 0 && isSectionEnabled('gamePages', 'plans') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Valheim Hosting Plans
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {valheimPlans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
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
                    
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
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

export default Valheim;
