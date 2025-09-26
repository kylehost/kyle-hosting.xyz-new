
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Users, Server, Globe, HelpCircle } from "lucide-react";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
      pages: [
        { name: "Homepage", path: "/", description: "Main landing page with hero section and features" },
        { name: "Games Overview", path: "/games", description: "Complete list of supported games and servers" },
        { name: "Minecraft Hosting", path: "/minecraft", description: "Dedicated Minecraft server hosting solutions" },
        { name: "VPS Solutions", path: "/vps", description: "Virtual Private Server hosting options" },
        { name: "Web Hosting", path: "/web-hosting", description: "Professional web hosting services" }
      ]
    },
    {
      category: "Support & Information", 
      icon: <HelpCircle className="h-5 w-5 text-green-500" />,
      pages: [
        { name: "Support Center", path: "/support", description: "Help center with FAQ and contact options" },
        { name: "Specs & Pricing", path: "/specs", description: "Detailed server specifications and pricing" }
      ]
    },
    {
      category: "Company",
      icon: <Users className="h-5 w-5 text-purple-500" />,
      pages: [
        { name: "About Us", path: "/about", description: "Our story, team, and company values" },
        { name: "Careers", path: "/careers", description: "Job opportunities and company culture" },
        { name: "Partners", path: "/partners", description: "Partnership opportunities and current partners" }
      ]
    },
    {
      category: "Legal Documents",
      icon: <FileText className="h-5 w-5 text-red-500" />,
      pages: [
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions for using our services" },
        { name: "Privacy Policy", path: "/privacy", description: "How we collect, use, and protect your data" },
        { name: "Acceptable Use Policy", path: "/acceptable-use", description: "Guidelines for acceptable use of our services" }
      ]
    }
  ];

  const externalLinks = [
    { name: "Knowledge Base", url: "#", description: "Comprehensive guides and tutorials" },
    { name: "Community Forum", url: "#", description: "Connect with other GameHost Pro users" },
    { name: "Status Page", url: "#", description: "Real-time service status and uptime" },
    { name: "Blog", url: "#", description: "Latest news and gaming insights" }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Server className="h-16 w-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete overview of all pages and sections on the GameHost Pro website. 
            Find exactly what you're looking for quickly and easily.
          </p>
        </div>
      </section>

      {/* Main Site Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-3">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-slate-900">{section.category}</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.pages.map((page, pageIndex) => (
                  <Card key={pageIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link 
                          to={page.path}
                          className="text-slate-900 hover:text-blue-600 transition-colors flex items-center"
                        >
                          {page.name}
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm">{page.description}</p>
                      <div className="mt-3">
                        <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">
                          {page.path}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* External Resources */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-3">
              <ExternalLink className="h-5 w-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-slate-900">External Resources</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalLinks.map((link, linkIndex) => (
              <Card key={linkIndex} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                    {link.name}
                    <ExternalLink className="h-4 w-4 ml-2 text-slate-400" />
                  </h3>
                  <p className="text-slate-600 text-sm">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Website Statistics */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Website Overview
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-slate-600">Total Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-slate-600">Main Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-slate-600">Legal Documents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-slate-600">Mobile Responsive</div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-blue-700 mb-4">
              Our support team is here to help you navigate our website and find the information you need.
            </p>
            <Link 
              to="/support"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact Support
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
