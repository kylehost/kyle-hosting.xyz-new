
import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig, navigationConfig, getEnabledItems } from "../../siteconfig";

const Footer = () => {
  // Get enabled footer navigation items
  const enabledServices = getEnabledItems(navigationConfig.footerNavigation.services);
  const enabledCompany = getEnabledItems(navigationConfig.footerNavigation.company);
  const enabledLegal = getEnabledItems(navigationConfig.footerNavigation.legal);

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {siteConfig.logo.url ? (
                <img 
                  src={siteConfig.logo.url} 
                  alt={siteConfig.logo.alt}
                  className="h-8 w-8 object-contain rounded-md"
                  onError={(e) => {
                    // Fallback to SVG icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <Gamepad2 className={`h-8 w-8 text-blue-500 ${siteConfig.logo.url ? 'hidden' : ''}`} />
              <span className="text-xl font-bold text-white">{siteConfig.siteName}</span>
            </div>
            <p className="text-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialMedia.twitter.enabled && (
                <a href={siteConfig.socialMedia.twitter.url} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig.socialMedia.facebook.enabled && (
                <a href={siteConfig.socialMedia.facebook.url} target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig.socialMedia.instagram.enabled && (
                <a href={siteConfig.socialMedia.instagram.url} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              )}
              {siteConfig.socialMedia.youtube.enabled && (
                <a href={siteConfig.socialMedia.youtube.url} target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          {enabledServices.length > 0 && (
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {enabledServices.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company */}
          {enabledCompany.length > 0 && (
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {enabledCompany.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal */}
          {enabledLegal.length > 0 && (
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {enabledLegal.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 {siteConfig.siteName}. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
