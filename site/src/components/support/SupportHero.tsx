
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

interface SupportHeroProps {
  hero: {
    enabled: boolean;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
  };
}

const SupportHero = ({ hero }: SupportHeroProps) => {
  if (!hero.enabled) return null;

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-blue-400 animate-bounce" />
          <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/50 animate-scale-in delay-200">
            {hero.subtitle}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in delay-300">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {hero.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 max-w-2xl mx-auto animate-fade-in delay-1000">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-gray-300">24/7 availability</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-gray-300">Expert technicians</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-gray-300">Multiple languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
