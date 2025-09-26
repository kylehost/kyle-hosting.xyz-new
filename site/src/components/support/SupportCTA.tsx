
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const SupportCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <HelpCircle className="h-16 w-16 mx-auto mb-6 text-white animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Still Need Help?
        </h2>
        <p className="text-xl mb-8 opacity-90 animate-fade-in delay-300">
          Our expert support team is ready to help you succeed. Get in touch and experience the GameHost Pro difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Support
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Browse Knowledge Base
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
