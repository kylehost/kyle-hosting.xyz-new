
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { contentConfig, siteConfig, shouldShowDiscordCta } from "../../../siteconfig";
import * as Icons from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Icons.Gamepad2 className="h-16 w-16 mx-auto mb-6 text-cyan-400 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          {contentConfig.cta.title}
        </h2>
        <p className="text-xl mb-8 text-gray-300 animate-fade-in delay-300">
          {contentConfig.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Link to="/games">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
              Explore Plans
            </Button>
          </Link>
          <Link to={contentConfig.cta.secondaryButton.target}>
            <Button size="lg" className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border-slate-500 hover:border-slate-400 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {contentConfig.cta.secondaryButton.text}
            </Button>
          </Link>
          {shouldShowDiscordCta('home', 'cta') && siteConfig.socialMedia.discord.enabled && (
            <a href={siteConfig.socialMedia.discord.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0">
                <Icons.MessageCircle className="mr-2 h-5 w-5" />
                {contentConfig.discordCta.cta.title}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
