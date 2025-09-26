
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  vpsConfig,
  getEnabledItems,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const VPS = () => {
  const enabledPlans = getEnabledItems(vpsConfig.plans);
  const enabledFeatures = getEnabledItems(vpsConfig.features);
  const enabledStats = getEnabledItems(vpsConfig.stats);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      {vpsConfig.hero.enabled && (
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <Icons.Monitor className="h-16 w-16 mx-auto mb-6 text-blue-400 animate-bounce" />
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50 animate-scale-in delay-200">
                VPS Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in delay-300">
                {vpsConfig.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
                {vpsConfig.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
                <Link to={vpsConfig.hero.ctaTarget}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {vpsConfig.hero.ctaText}
                    <Icons.ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to={vpsConfig.hero.secondaryCtaTarget}>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                    {vpsConfig.hero.secondaryCtaText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VPS Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VPS Hosting Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful virtual private servers with dedicated resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enabledPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
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
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div>{plan.specs.cpu}</div>
                    <div>{plan.specs.ram}</div>
                    <div>{plan.specs.storage}</div>
                    <div>{plan.specs.bandwidth}</div>
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
                  
                  <Link to={plan.buttonTarget}>
                    <Button 
                      className={`w-full transform hover:scale-105 transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white hover:shadow-lg'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VPS Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for powerful virtual private servers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enabledFeatures.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Icons.Zap;
              return (
                <Card 
                  key={feature.id} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-blue-400" />
                      </div>
                      <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enabledStats.map((stat, index) => {
              const IconComponent = (Icons as any)[stat.icon] || Icons.Zap;
              return (
                <Card key={index} className="text-center bg-gradient-to-br from-slate-800/90 to-purple-800/90 border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our VPS solutions are ideal for various use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsConfig.useCases.map((useCase, index) => {
              const IconComponent = (Icons as any)[useCase.icon] || Icons.Zap;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPS;
