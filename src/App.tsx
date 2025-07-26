import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/homepage/Index";
import Dashboard from "./pages/application/Dashboard";
import CreateAlbum from "./pages/application/CreateAlbum";
import AlbumDetail from "./pages/application/AlbumDetail";
import Profile from "./pages/application/Profile";
import About from "./pages/homepage/About";
import Blog from "./pages/homepage/Blog";
import Terms from "./pages/homepage/Terms";
import Pricing from "./pages/homepage/Pricing";
import Contact from "./pages/homepage/Contact";
import Features from "./pages/homepage/Features";
import Career from "./pages/homepage/Career";
import Privacy from "./pages/homepage/Privacy";
import Help from "./pages/homepage/Help";
import Security from "./pages/homepage/Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/terms-condtions" element={<Terms />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/features" element={<Features />} />
                <Route path="/career" element={<Career />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/help-center" element={<Help />} />
                <Route path="/security" element={<Security />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/create-album"
                    element={
                      <ProtectedRoute>
                        <CreateAlbum />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/album/:id"
                    element={
                      <ProtectedRoute>
                        <AlbumDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </TooltipProvider>
        </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
