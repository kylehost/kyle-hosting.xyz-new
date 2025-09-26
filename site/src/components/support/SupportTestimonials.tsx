
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  rating: number;
  content: string;
  avatar: string;
  name: string;
  role: string;
}

interface SupportTestimonialsProps {
  testimonials: Testimonial[];
}

const SupportTestimonials = ({ testimonials }: SupportTestimonialsProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">
            Real feedback from real customers about our support experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTestimonials;
