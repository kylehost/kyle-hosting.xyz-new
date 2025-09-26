
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap } from "lucide-react";

interface FaqCategory {
  title: string;
  description: string;
  count: string;
  icon: string;
}

interface SupportKnowledgeBaseProps {
  faqCategories: FaqCategory[];
}

const SupportKnowledgeBase = ({ faqCategories }: SupportKnowledgeBaseProps) => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      MessageCircle, Phone, Mail, Clock, Star, Globe, BookOpen, Users, Shield, Zap
    };
    return iconMap[iconName] || MessageCircle;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to common questions and learn how to get the most out of your servers
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faqCategories.map((category, index) => {
            const IconComponent = getIconComponent(category.icon);
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300 transform group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/50">
                      {category.count}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Browse All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportKnowledgeBase;
