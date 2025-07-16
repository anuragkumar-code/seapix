import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Image, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import RegisterModal from './RegisterModal';

const HeroSection = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <section id="home" className="min-h-screen pt-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-light-mint border border-primary/20">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Preserve Your Precious Memories</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-foreground leading-tight">
                  Your Digital
                  <span className="text-primary block">Photo Albums</span>
                  Made Beautiful
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground font-merriweather leading-relaxed">
                  Create stunning digital albums, organize your memories, and share them with loved ones. 
                  PhotoVault makes it easy to keep your precious moments safe and beautifully presented.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsRegisterOpen(true)}
                  className="bg-primary hover:bg-hover-forest-green font-semibold shadow-hover group px-8 py-4 text-base"
                >
                  Start Creating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:bg-secondary group px-8 py-4 text-base"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Photos Stored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={heroImage} 
                  alt="Beautiful family memories and photo albums" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-soft p-4 animate-fade-in delay-300">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Share with Family</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-soft p-4 animate-fade-in delay-500">
                <div className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-accent-steel-blue" />
                  <span className="text-sm font-medium">Organize Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default HeroSection;