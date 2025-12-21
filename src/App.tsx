import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Branding from "./components/project/BrandingProjectDetails";
import SocialMedia from "./components/project/SocialMediaProjectDetails";
import Photography from "./components/project/MobilePhotographyProjectDetails";
import WebDesign from "./components/project/WebDesignProjectDetails";
import VideoReel from "./components/project/VideoProjectDetails";
import MarketingAssets from "./components/project/MarketingAssetsProjectDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/projects/branding" element={<Branding />} />
             <Route path="/projects/social-media" element={<SocialMedia />} />
              <Route path="/projects/photography" element={<Photography />} />
              <Route path="/projects/web-design" element={<WebDesign />} />
              <Route path="/projects/video-reel" element={<VideoReel />} />
              <Route path="/projects/marketing-assets" element={<MarketingAssets />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
