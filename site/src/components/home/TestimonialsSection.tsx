
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonialsConfig, getEnabledItems } from "../../../siteconfig";
import * as Icons from "lucide-react";

const TestimonialsSection = () => {
  const enabledTestimonials = getEnabledItems(testimonialsConfig.testimonials);

  if (!testimonialsConfig.section.enabled || enabledTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-cyan-600/20 text-cyan-300 border-cyan-500/50">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {testimonialsConfig.section.title}
          </h2>
          <p className="text-xl text-gray-300">
            {testimonialsConfig.section.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enabledTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-slate-800/80 border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group animate-fade-in hover:bg-slate-700/80" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <CardTitle className="text-white group-hover:text-cyan-300 transition-colors duration-300">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
