
export const pagesConfig = {
  // Page Visibility and Configuration
  pages: {
    home: { enabled: true, title: "Home -  Pro" },
    games: { enabled: true, title: "Game Hosting - Kyle Hosting Pro" },
    minecraft: { enabled: false, title: "Minecraft Hosting - Kyle Hosting Pro" },
    cs2: { enabled: true, title: "Counter-Strike 2 Hosting - Kyle Hosting Pro" },
    rust: { enabled: true, title: "Rust Hosting - Kyle Hosting Pro" },
    ark: { enabled: true, title: "ARK Hosting - Kyle Hosting Pro" },
    valheim: { enabled: true, title: "Valheim Hosting - Kyle Hosting Pro" },
    gmod: { enabled: true, title: "Garry's Mod Hosting - Kyle Hosting Pro" },
    vps: { enabled: true, title: "VPS Solutions - Kyle Hosting Pro" },
    webHosting: { enabled: true, title: "Web Hosting - Kyle Hosting Pro" },
    support: { enabled: true, title: "Support - Kyle Hosting Pro" },
    about: { enabled: true, title: "About Us - Kyle Hosting Pro" },
    partners: { enabled: true, title: "Partners - Kyle Hosting Pro" },
    sitemap: { enabled: true, title: "Sitemap - Kyle Hosting Pro" },
    terms: { enabled: true, title: "Terms of Service - Kyle Hosting Pro" },
    privacy: { enabled: true, title: "Privacy Policy - Kyle Hosting Pro" },
    acceptableUse: { enabled: true, title: "Acceptable Use Policy - Kyle Hosting Pro" }
  },
  
  // Page Sections Visibility - Controls what appears on each page
  sections: {
    // Homepage sections
    home: {
      hero: { enabled: true },
      features: { enabled: true },
      stats: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        hero: { enabled: true },
        features: { enabled: true },
        cta: { enabled: true }
      }
    },
    
    // About page sections
    about: {
      hero: { enabled: true },
      story: { enabled: true },
      values: { enabled: true },
      contact: { enabled: true },
      discordCta: {
        hero: { enabled: true },
        story: { enabled: true },
        contact: { enabled: true }
      }
    },
    
    // Games page sections
    games: {
      hero: { enabled: true },
      gamesList: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: false },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Individual game page sections
    gamePages: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: false },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // VPS page sections
    vps: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: false },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Web hosting page sections
    webHosting: {
      hero: { enabled: true },
      plans: { enabled: true },
      features: { enabled: true },
      testimonials: { enabled: true },
      cta: { enabled: true },
      discordCta: {
        features: { enabled: true }
      }
    },
    
    // Support page sections
    support: {
      hero: { enabled: true },
      contactMethods: { enabled: true },
      faq: { enabled: true },
      resources: { enabled: true },
      discordCta: {
        hero: { enabled: true }
      }
    }
  }
};
