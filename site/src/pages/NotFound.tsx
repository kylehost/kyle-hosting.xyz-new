
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Gamepad2 } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Homepage", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Game Hosting", path: "/games", icon: <Gamepad2 className="h-4 w-4" /> },
    { name: "VPS Solutions", path: "/vps", icon: <Search className="h-4 w-4" /> },
    { name: "Support Center", path: "/support", icon: <Search className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
              <div className="text-6xl mb-6">🎮</div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Game Over - Page Not Found
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Looks like this page has respawned somewhere else! The URL you're looking for doesn't exist on our server.
            </p>

            {/* Current Path Display */}
            <div className="bg-slate-100 rounded-lg p-4 mb-8">
              <p className="text-sm text-slate-500 mb-1">You tried to access:</p>
              <code className="text-slate-800 font-mono">{location.pathname}</code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Homepage
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.path}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Still having trouble? Contact our{" "}
                <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">
                  support team
                </Link>{" "}
                for assistance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
