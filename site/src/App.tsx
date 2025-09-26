
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Minecraft from "./pages/Minecraft";
import CS2 from "./pages/CS2";
import Rust from "./pages/Rust";
import ARK from "./pages/ARK";
import Valheim from "./pages/Valheim";
import GarrysMod from "./pages/GarrysMod";
import VPS from "./pages/VPS";
import WebHosting from "./pages/WebHosting";
import Support from "./pages/Support";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Sitemap from "./pages/Sitemap";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AcceptableUse from "./pages/AcceptableUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/games" element={<Games />} />
              <Route path="/minecraft" element={<Minecraft />} />
              <Route path="/cs2" element={<CS2 />} />
              <Route path="/rust" element={<Rust />} />
              <Route path="/ark" element={<ARK />} />
              <Route path="/valheim" element={<Valheim />} />
              <Route path="/gmod" element={<GarrysMod />} />
              <Route path="/vps" element={<VPS />} />
              <Route path="/web-hosting" element={<WebHosting />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/acceptable-use" element={<AcceptableUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
