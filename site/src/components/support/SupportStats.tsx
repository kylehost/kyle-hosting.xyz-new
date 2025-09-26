
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap } from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface SupportStatsProps {
  stats: Stat[];
}

const SupportStats = ({ stats }: SupportStatsProps) => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap
    };
    return iconMap[iconName] || MessageCircle;
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = getIconComponent(stat.icon);
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
  );
};

export default SupportStats;
