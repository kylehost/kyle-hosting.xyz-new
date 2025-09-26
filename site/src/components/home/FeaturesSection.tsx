
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuresConfig, getEnabledItems, shouldShowDiscordCta, siteConfig, contentConfig } from "../../../siteconfig";
import * as Icons from "lucide-react";

const FeaturesSection = () => {
  const enabledFeatures = getEnabledItems(featuresConfig.whyChooseUs.features);

  if (!featuresConfig.whyChooseUs.enabled || enabledFeatures.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/50">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            {featuresConfig.whyChooseUs.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {featuresConfig.whyChooseUs.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {enabledFeatures.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <Card key={feature.id} className="text-center bg-slate-800/80 border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in hover:bg-slate-700/80" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full group-hover:from-purple-400/40 group-hover:to-blue-400/40 transition-all duration-300 transform group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">{feature.title}</CardTitle>
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

        {/* Discord CTA in Features */}
        {shouldShowDiscordCta('home', 'features') && siteConfig.socialMedia.discord.enabled && (
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <p className="text-lg text-gray-300 mb-4">{contentConfig.discordCta.features.title} {contentConfig.discordCta.features.subtitle}</p>
              <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 transform hover:scale-105 transition-all duration-300">
                  <Icons.MessageCircle className="mr-2 h-4 w-4" />
                  {contentConfig.discordCta.features.buttonText}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
