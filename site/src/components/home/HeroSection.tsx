
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { contentConfig, siteConfig, shouldShowDiscordCta } from "../../../siteconfig";
import * as Icons from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50 animate-scale-in delay-200 hover:bg-blue-500/30 transition-all duration-300">
            Professional Gaming Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in delay-300">
            {contentConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
            {contentConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Link to="/games">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                Explore Plans
              </Button>
            </Link>
            {shouldShowDiscordCta('home', 'hero') && siteConfig.socialMedia.discord.enabled && (
              <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                  <Icons.MessageCircle className="mr-2 h-5 w-5" />
                  {contentConfig.discordCta.hero.buttonText}
                </Button>
              </a>
            )}
          </div>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto animate-fade-in delay-1000">
            {contentConfig.hero.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                <Icons.CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
