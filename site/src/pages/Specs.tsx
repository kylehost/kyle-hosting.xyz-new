
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  pricingConfig,
  getVpsPlans,
  getWebHostingPlans,
  isSectionEnabled 
} from "../../siteconfig";
import * as Icons from "lucide-react";

const Specs = () => {
  const vpsPlans = getVpsPlans();
  const webHostingPlans = getWebHostingPlans();

  const serverFeatures = [
    {
      icon: <Icons.Cpu className="h-8 w-8 text-blue-500" />,
      title: "High-Performance CPUs",
      description: "Intel Xeon processors with high clock speeds for optimal gaming performance"
    },
    {
      icon: <Icons.HardDrive className="h-8 w-8 text-green-500" />,
      title: "NVMe SSD Storage",
      description: "Lightning-fast NVMe SSDs for rapid world loading and minimal lag"
    },
    {
      icon: <Icons.Zap className="h-8 w-8 text-yellow-500" />,
      title: "DDR4 RAM",
      description: "High-speed DDR4 memory for smooth server operations and plugin support"
    },
    {
      icon: <Icons.Shield className="h-8 w-8 text-red-500" />,
      title: "DDoS Protection",
      description: "Enterprise-grade DDoS protection to keep your server online 24/7"
    },
    {
      icon: <Icons.Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Network",
      description: "Multiple data centers worldwide for optimal latency and performance"
    },
    {
      icon: <Icons.Clock className="h-8 w-8 text-indigo-500" />,
      title: "99.9% Uptime",
      description: "Guaranteed uptime with redundant infrastructure and monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 animate-bounce">⚡</div>
          <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50">
            Server Specifications
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Enterprise-Grade Hardware
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cutting-edge infrastructure delivers unmatched performance for your gaming servers and applications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Powers Our Servers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every component is carefully selected for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serverFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      {(vpsPlans.length > 0 || webHostingPlans.length > 0) && isSectionEnabled('specs', 'pricing') && (
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From VPS to web hosting, we have the perfect solution for your needs
              </p>
            </div>

            <Tabs defaultValue="vps" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800 border-slate-600">
                <TabsTrigger value="vps" className="data-[state=active]:bg-blue-600">VPS Plans</TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-blue-600">Web Hosting</TabsTrigger>
              </TabsList>
              
              {vpsPlans.length > 0 && (
                <TabsContent value="vps">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vpsPlans.map((plan, index) => (
                      <Card 
                        key={plan.id} 
                        className={`relative bg-slate-800/80 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                          plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">Most Popular</Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center">
                          <CardTitle className="text-white group-hover:text-blue-400 transition-colors">{plan.name}</CardTitle>
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                          </div>
                          <CardDescription className="text-gray-300 mb-4">
                            {plan.description}
                          </CardDescription>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div>{plan.specs.ram}</div>
                            <div>{plan.specs.cpu}</div>
                            <div>{plan.specs.storage}</div>
                            <div>{plan.specs.bandwidth}</div>
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
                          
                          <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                            {plan.buttonText}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )}
              
              {webHostingPlans.length > 0 && (
                <TabsContent value="web">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webHostingPlans.map((plan, index) => (
                      <Card 
                        key={plan.id} 
                        className={`relative bg-slate-800/80 border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                          plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">Most Popular</Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center">
                          <CardTitle className="text-white group-hover:text-purple-400 transition-colors">{plan.name}</CardTitle>
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                            {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                          </div>
                          <CardDescription className="text-gray-300 mb-4">
                            {plan.description}
                          </CardDescription>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div>{plan.specs.storage}</div>
                            <div>{plan.specs.bandwidth}</div>
                            <div>{plan.specs.websites}</div>
                            <div>{plan.specs.email}</div>
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
                          
                          <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                            {plan.buttonText}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {isSectionEnabled('specs', 'cta') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="text-6xl mb-6 animate-bounce">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Experience the Power?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of satisfied customers who trust our enterprise-grade infrastructure for their critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/games">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Specs;
