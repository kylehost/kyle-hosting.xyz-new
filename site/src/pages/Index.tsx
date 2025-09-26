
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { isPageEnabled, isSectionEnabled } from "../../siteconfig";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      {isPageEnabled('home') && isSectionEnabled('home', 'hero') && <HeroSection />}

      {/* Features Section */}
      {isSectionEnabled('home', 'features') && <FeaturesSection />}

      {/* Stats Section */}
      {isSectionEnabled('home', 'stats') && <StatsSection />}

      {/* Testimonials Section */}
      {isSectionEnabled('home', 'testimonials') && <TestimonialsSection />}

      {/* CTA Section */}
      {isSectionEnabled('home', 'cta') && <CTASection />}
    </div>
  );
};

export default Index;
