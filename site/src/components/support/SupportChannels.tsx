
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap } from "lucide-react";

interface Channel {
  title: string;
  description: string;
  availability: string;
  responseTime: string;
  action: string;
  icon: string;
}

interface SupportChannelsProps {
  channels: Channel[];
}

const SupportChannels = ({ channels }: SupportChannelsProps) => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap
    };
    return iconMap[iconName] || MessageCircle;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Support Channel
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multiple ways to get help when you need it most
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel, index) => {
            const IconComponent = getIconComponent(channel.icon);
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-slate-700 rounded-full group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">{channel.title}</CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {channel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-green-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-blue-400">{channel.responseTime}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {channel.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;
