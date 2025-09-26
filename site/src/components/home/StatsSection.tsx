
import { featuresConfig, getEnabledItems } from "../../../siteconfig";
import * as Icons from "lucide-react";

const StatsSection = () => {
  const enabledStats = getEnabledItems(featuresConfig.stats.items);

  if (!featuresConfig.stats.enabled || enabledStats.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.4),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {enabledStats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <div key={index} className="text-center animate-fade-in transform hover:scale-105 transition-all duration-300 bg-slate-800/30 p-6 rounded-lg border border-slate-600/50" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-full backdrop-blur-sm">
                    <IconComponent className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
