import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  siteConfig, 
  contentConfig, 
  navigationConfig,
  isSectionEnabled,
  shouldShowDiscordCta
} from "../../siteconfig";
import * as Icons from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {isSectionEnabled('about', 'hero') && (
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50 animate-scale-in">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              {contentConfig.about.hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-300">
              {contentConfig.about.hero.subtitle}
            </p>
            
            {/* Discord CTA in Hero */}
            {shouldShowDiscordCta('about', 'hero') && siteConfig.socialMedia.discord.enabled && (
              <div className="mt-8 animate-fade-in delay-500">
                <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                    <Icons.MessageCircle className="mr-2 h-5 w-5" />
                    {contentConfig.discordCta.hero.buttonText}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Story Section */}
      {isSectionEnabled('about', 'story') && (
        <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/50">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                How We Started
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {contentConfig.about.story.map((paragraph, index) => (
                <div key={index} className="mb-8 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Discord CTA in Story */}
            {shouldShowDiscordCta('about', 'story') && siteConfig.socialMedia.discord.enabled && (
              <div className="text-center mt-12 animate-fade-in">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                  <p className="text-lg text-gray-300 mb-4">{contentConfig.discordCta.story.title} {contentConfig.discordCta.story.subtitle}</p>
                  <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-300">
                      <Icons.MessageCircle className="mr-2 h-4 w-4" />
                      {contentConfig.discordCta.story.buttonText}
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Values Section */}
      {isSectionEnabled('about', 'values') && (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contentConfig.about.values.map((value, index) => {
                const IconComponent = Icons[value.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in bg-gradient-to-br from-white/10 to-purple-900/20 backdrop-blur-sm border border-white/10" style={{ animationDelay: `${index * 150}ms` }}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full group-hover:from-purple-400/30 group-hover:to-blue-400/30 transition-all duration-300 transform group-hover:scale-110 backdrop-blur-sm">
                          <IconComponent className="h-8 w-8 text-purple-400" />
                        </div>
                      </div>
                      <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {isSectionEnabled('about', 'contact') && (
        <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-cyan-600/20 text-cyan-300 border-cyan-500/50 animate-scale-in">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              Connect With Us
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in delay-300">
              Have questions about {siteConfig.siteName}? We'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '400ms' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.Mail className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">{siteConfig.contact.email}</p>
              </div>
              <div className="text-center animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '500ms' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.Phone className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-300">{siteConfig.contact.phone}</p>
              </div>
              <div className="text-center animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '600ms' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icons.MapPin className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2 text-white">Address</h3>
                <p className="text-gray-300">{siteConfig.contact.address}</p>
              </div>
            </div>

            {/* Enhanced CTA with Discord prominence */}
            <div className="space-y-6 animate-fade-in delay-700">
              {shouldShowDiscordCta('about', 'contact') && siteConfig.socialMedia.discord.enabled && (
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/30 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{contentConfig.discordCta.contact.title}</h3>
                  <p className="text-gray-300 mb-4">{contentConfig.discordCta.contact.subtitle}</p>
                  <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                      <Icons.MessageCircle className="mr-2 h-5 w-5" />
                      {contentConfig.discordCta.contact.buttonText}
                    </Button>
                  </a>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={navigationConfig.ctaButtons.secondary.target}>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                    {navigationConfig.ctaButtons.secondary.text}
                  </Button>
                </Link>
                <Link to="/specs">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
                    Explore Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
