
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  featuresConfig,
  contentConfig,
  gamesConfig,
  getEnabledItems,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const Minecraft = () => {
  const enabledFeatures = getEnabledItems(featuresConfig.whyChooseUs.features);
  const minecraftGame = gamesConfig.games.find(game => game.id === 'minecraft');
  const minecraftPlans = minecraftGame?.plans || [];

  const minecraftFeatures = [
    {
      icon: <Icons.Zap className="h-8 w-8 text-yellow-500" />,
      title: "Instant Setup",
      description: "Your Minecraft server is ready in under 60 seconds with one-click installation"
    },
    {
      icon: <Icons.Download className="h-8 w-8 text-blue-500" />,
      title: "One-Click Modpacks",
      description: "Install popular modpacks like FTB, Tekkit, and custom packs with a single click"
    },
    {
      icon: <Icons.Settings className="h-8 w-8 text-green-500" />,
      title: "Plugin Management",
      description: "Easy plugin installation from our library of thousands of verified plugins"
    },
    {
      icon: <Icons.Shield className="h-8 w-8 text-red-500" />,
      title: "Advanced Security",
      description: "DDoS protection, regular backups, and secure FTP access included"
    },
    {
      icon: <Icons.Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Network",
      description: "Multiple server locations worldwide for the best connection quality"
    },
    {
      icon: <Icons.Users className="h-8 w-8 text-indigo-500" />,
      title: "Multi-Version Support",
      description: "Support for all Minecraft versions from legacy to the latest releases"
    }
  ];

  const popularMods = [
    { name: "OptiFine", category: "Performance", downloads: "50M+" },
    { name: "JEI", category: "Utility", downloads: "30M+" },
    { name: "Biomes O' Plenty", category: "World Gen", downloads: "25M+" },
    { name: "Tinkers' Construct", category: "Tools", downloads: "20M+" },
    { name: "Applied Energistics", category: "Tech", downloads: "15M+" },
    { name: "Twilight Forest", category: "Adventure", downloads: "12M+" }
  ];

  const serverVersions = [
    { name: "Vanilla", description: "Pure Minecraft experience" },
    { name: "Bukkit/Spigot", description: "Plugin support for enhanced gameplay" },
    { name: "Paper", description: "High-performance Spigot fork" },
    { name: "Forge", description: "Mod support for custom content" },
    { name: "Fabric", description: "Lightweight modding platform" },
    { name: "Bedrock", description: "Cross-platform compatibility" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-900">
      {/* Hero Section */}
      {isSectionEnabled('minecraft', 'hero') && (
        <section 
          className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6 animate-bounce">{minecraftGame?.icon || '🟫'}</div>
              <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/50 animate-scale-in delay-200">
                #1 Minecraft Hosting Provider
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-fade-in delay-300">
                {minecraftGame ? `${minecraftGame.name} Server Hosting` : 'Minecraft Server Hosting'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
                {minecraftGame?.description || 'Create the ultimate Minecraft experience with our high-performance servers, instant modpack installation, and 24/7 expert support.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
                <Link to="/games">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Plans
                    <Icons.ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                  <Icons.Play className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                ✅ 7-day free trial • ✅ No setup fees • ✅ 99.9% uptime guarantee
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Minecraft Block Plans */}
      {isSectionEnabled('minecraft', 'pricing') && minecraftPlans.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Minecraft Block Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose your perfect server plan inspired by Minecraft blocks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {minecraftPlans.map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                      <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-white group-hover:text-green-400 transition-colors duration-300">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4">
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
                        <li key={featureIndex} className="flex items-center text-sm transform hover:translate-x-2 transition-transform duration-300">
                          <Icons.CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full transform hover:scale-105 transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white hover:shadow-lg'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {isSectionEnabled('minecraft', 'features') && (
        <section className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Everything You Need for Minecraft
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From vanilla servers to complex modpacks, we've got you covered with powerful features and easy management tools.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {minecraftFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white group-hover:text-green-400 transition-colors duration-300">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Server Types */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Choose Your Server Type
            </h2>
            <p className="text-xl text-gray-300">
              We support all popular Minecraft server software and versions
            </p>
          </div>

          <Tabs defaultValue="versions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800 border-slate-600">
              <TabsTrigger value="versions" className="data-[state=active]:bg-green-600">Server Software</TabsTrigger>
              <TabsTrigger value="mods" className="data-[state=active]:bg-green-600">Popular Mods</TabsTrigger>
            </TabsList>
            
            <TabsContent value="versions">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serverVersions.map((version, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {version.name}
                      </h3>
                      <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{version.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mods">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularMods.map((mod, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white">{mod.name}</h3>
                        <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/50">{mod.category}</Badge>
                      </div>
                      <p className="text-gray-300 text-sm">{mod.downloads} downloads</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      {isSectionEnabled('minecraft', 'cta') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="text-6xl mb-6 animate-bounce">⛏️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              {contentConfig.cta.title}
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in delay-300">
              Join over 500,000 Minecraft players who trust GameHost Pro for their server hosting. 
              Start your adventure today with our 7-day free trial!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <Link to="/games">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                  Start Your Server
                </Button>
              </Link>
              <Link to={contentConfig.cta.secondaryButton.target}>
                <Button size="lg" className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-slate-500 hover:border-slate-400 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {contentConfig.cta.secondaryButton.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Minecraft;
