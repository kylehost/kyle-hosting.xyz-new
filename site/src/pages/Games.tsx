
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  gamesConfig,
  getEnabledItems,
  isSectionEnabled 
} from "../../siteconfig";
import { CheckCircle, ArrowRight } from "lucide-react";

const Games = () => {
  const enabledGames = getEnabledItems(gamesConfig.games);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      {isSectionEnabled('games', 'hero') && (
        <section className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6 animate-bounce">🎮</div>
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50">
              Game Hosting Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Game Server Hosting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our wide selection of optimized game servers. Fast deployment, 
              reliable performance, and 24/7 support for all your gaming needs.
            </p>
          </div>
        </section>
      )}

      {/* Games Grid */}
      {enabledGames.length > 0 && isSectionEnabled('games', 'gamesList') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {gamesConfig.section.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {gamesConfig.section.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enabledGames.map((game, index) => (
                <Card 
                  key={game.id} 
                  className={`relative bg-slate-800/80 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                    game.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {game.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{game.icon}</div>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{game.name}</CardTitle>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {game.price}
                    </div>
                    <CardDescription className="text-gray-300 mb-4">
                      {game.description}
                    </CardDescription>
                    <div className="text-sm text-gray-400 mb-4">
                      {game.players}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {game.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={`/${game.id}`}>
                      <Button className={`w-full ${game.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                        Choose {game.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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

export default Games;
