
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Award, Globe, Users, ArrowRight, CheckCircle } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading tech companies that power our infrastructure",
      partners: [
        { name: "Amazon Web Services", logo: "☁️", description: "Cloud infrastructure and global reach" },
        { name: "Cloudflare", logo: "🛡️", description: "DDoS protection and CDN services" },
        { name: "Intel", logo: "⚡", description: "High-performance server processors" },
        { name: "NVIDIA", logo: "🎮", description: "GPU computing for game servers" }
      ]
    },
    {
      title: "Game Publishers",
      description: "Official partnerships with major game developers",
      partners: [
        { name: "Mojang Studios", logo: "🟫", description: "Official Minecraft server partner" },
        { name: "Valve Corporation", logo: "🎯", description: "Steam game server integration" },
        { name: "Epic Games", logo: "🎪", description: "Unreal Engine game hosting" },
        { name: "Riot Games", logo: "⚔️", description: "Competitive gaming infrastructure" }
      ]
    },
    {
      title: "Community Partners",
      description: "Gaming communities and content creators we support",
      partners: [
        { name: "Gaming YouTubers", logo: "📺", description: "Content creator sponsorships" },
        { name: "Esports Teams", logo: "🏆", description: "Professional gaming team support" },
        { name: "Gaming Communities", logo: "👥", description: "Large community server hosting" },
        { name: "Streamers", logo: "📡", description: "Live streaming server infrastructure" }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Global Reach",
      description: "Access to our worldwide network of data centers and customers"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Community Access",
      description: "Connect with our 500K+ active gaming community members"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Technical Excellence",
      description: "Collaborate with industry-leading technical expertise"
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-500" />,
      title: "Mutual Growth",
      description: "Grow together through strategic partnerships and collaboration"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Integration",
      description: "Integrate your tools and services with our platform",
      features: ["API access", "White-label options", "Technical support", "Joint marketing"]
    },
    {
      title: "Reseller Program",
      description: "Become an authorized GameHost Pro reseller",
      features: ["Competitive margins", "Sales training", "Marketing materials", "Dedicated support"]
    },
    {
      title: "Affiliate Program",
      description: "Earn commissions by referring customers to us",
      features: ["Generous commissions", "Real-time tracking", "Marketing resources", "Monthly payouts"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders and gaming communities to deliver 
              the best possible hosting experience for gamers worldwide.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-600">
              Join forces with the leading game hosting platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-slate-100 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Partner Ecosystem
            </h2>
            <p className="text-xl text-slate-600">
              Trusted by industry leaders and gaming communities
            </p>
          </div>

          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-slate-600">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{partner.logo}</div>
                      <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-slate-600 text-sm">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-slate-600">
              Multiple ways to collaborate and grow together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900">{type.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-slate-600">
              Real results from our partnership collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">300% Growth</h3>
                <p className="text-slate-600 mb-4">
                  "Our partnership with GameHost Pro helped us scale our Minecraft server network 
                  from 10,000 to 30,000 active players in just 6 months."
                </p>
                <div className="text-sm text-slate-500">
                  - Major Gaming Community
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Zero Downtime</h3>
                <p className="text-slate-600 mb-4">
                  "GameHost Pro's infrastructure partnership ensured our esports tournaments 
                  ran flawlessly with zero server issues during critical matches."
                </p>
                <div className="text-sm text-slate-500">
                  - Professional Esports League
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">$50K Revenue</h3>
                <p className="text-slate-600 mb-4">
                  "As a GameHost Pro reseller, we've generated over $50,000 in additional 
                  revenue while providing excellent service to our customers."
                </p>
                <div className="text-sm text-slate-500">
                  - Technology Reseller
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Handshake className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore how we can work together to create amazing gaming experiences 
            and grow our businesses together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Apply for Partnership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
