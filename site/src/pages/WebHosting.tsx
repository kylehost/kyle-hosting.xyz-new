import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Shield, Zap, Database, Mail, ArrowRight, Server, Clock, HardDrive, Monitor, TrendingUp, HeadphonesIcon, Lock, PenTool, Building, ShoppingCart, Image } from "lucide-react";
import { webHostingConfig, getEnabledItems } from "../../siteconfig";

const WebHosting = () => {
  const enabledPlans = getEnabledItems(webHostingConfig.plans);
  const enabledFeatures = getEnabledItems(webHostingConfig.features);
  const enabledStats = getEnabledItems(webHostingConfig.stats);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      HardDrive, Shield, Globe, Database, Mail, Monitor, Zap, TrendingUp, 
      HeadphonesIcon, Lock, PenTool, Building, ShoppingCart, Image, Clock, Server
    };
    return iconMap[iconName] || Globe;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      {webHostingConfig.hero.enabled && (
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <Globe className="h-16 w-16 mx-auto mb-6 text-blue-400 animate-bounce" />
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50 animate-scale-in delay-200">
                {webHostingConfig.hero.subtitle}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in delay-300">
                {webHostingConfig.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
                {webHostingConfig.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {webHostingConfig.hero.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {webHostingConfig.hero.secondaryCtaText && (
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                    {webHostingConfig.hero.secondaryCtaText}
                  </Button>
                )}
              </div>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto animate-fade-in delay-1000">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">30-day money back</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">Free migration</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-gray-300">24/7 expert support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our web hosting platform includes all the tools and features needed to build and grow your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enabledFeatures.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon);
              return (
                <Card 
                  key={feature.id} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-slate-700 rounded-full group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-blue-400" />
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Web Hosting Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your website needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enabledPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-3 group animate-fade-in ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105 animate-pulse' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {plan.description}
                  </CardDescription>
                  <div className="text-sm text-gray-400 mt-2">
                    {plan.specs.websites} • {plan.specs.storage} • {plan.specs.bandwidth}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm transform hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transform hover:scale-105 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/50">
                <Clock className="mr-2 h-4 w-4" />
                Performance Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Lightning Fast Performance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our optimized servers deliver exceptional performance with industry-leading load times and 99.9% uptime guarantee.
              </p>
              <div className="space-y-6">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Page Load Speed</span>
                    <span className="text-green-400 font-bold">0.8s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out animate-pulse" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Server Uptime</span>
                    <span className="text-blue-400 font-bold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Customer Satisfaction</span>
                    <span className="text-purple-400 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out animate-pulse delay-500" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-blue-400" />
                    <span className="font-semibold">Server Analytics</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 animate-pulse">Active</Badge>
                </div>
                <div className="space-y-4">
                  {enabledStats.map((stat, index) => {
                    const IconComponent = getIconComponent(stat.icon);
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-300">{stat.label}</span>
                        </div>
                        <span className="text-white font-semibold">{stat.number}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect for Any Website Type
            </h2>
            <p className="text-xl text-gray-300">
              Our hosting solutions work great for all kinds of websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webHostingConfig.websiteTypes.map((type, index) => {
              const IconComponent = getIconComponent(type.icon);
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-slate-700 rounded-full group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-bounce delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Globe className="h-16 w-16 mx-auto mb-6 text-white animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in delay-300">
            Join thousands of website owners who trust GameHost Pro for reliable web hosting. 
            Start with our 30-day money-back guarantee!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              View All Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;
