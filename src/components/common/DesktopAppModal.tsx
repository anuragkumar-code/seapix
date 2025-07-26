import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Heart, Zap, Shield, Users, Camera } from "lucide-react";

interface DesktopAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
}

export const DesktopAppModal = ({ isOpen, onClose, onSwitchToLogin, onSwitchToRegister }: DesktopAppModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-3xl flex items-center justify-center shadow-lg">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Badge className="text-xs px-2 py-1 bg-green-500 hover:bg-green-500">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></div>
                    Live
                  </Badge>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Welcome to Album Social Space
                </h3>
                <p className="text-muted-foreground mt-1">Your memories deserve a beautiful home</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Message */}
          <div className="text-center space-y-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="font-semibold">Start Building Memories Today</span>
              <Heart className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-sm text-muted-foreground">
              Join thousands who are already preserving their precious moments in beautiful albums
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Camera className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Unlimited Albums</p>
                <p className="text-xs text-muted-foreground">Organize freely</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Lightning Fast</p>
                <p className="text-xs text-muted-foreground">Instant access</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Secure Storage</p>
                <p className="text-xs text-muted-foreground">Your privacy first</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Easy Sharing</p>
                <p className="text-xs text-muted-foreground">Connect & share</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={onSwitchToLogin}
                variant="outline" 
                className="h-12"
              >
                <span className="font-semibold">Login</span>
              </Button>
              <Button 
                onClick={onSwitchToRegister}
                className="h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <span className="font-semibold">Sign Up Free</span>
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                ✨ <strong>Free forever</strong> • No credit card required • <strong>Start in 30 seconds</strong> ✨
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center py-3 border-t">
            <p className="text-xs text-muted-foreground">
              Join <span className="font-semibold text-primary">10,000+</span> users who trust us with their memories
            </p>
            <div className="flex justify-center items-center gap-1 mt-2">
              {[1,2,3,4,5].map((star) => (
                <span key={star} className="text-yellow-400 text-sm">⭐</span>
              ))}
              <span className="text-xs text-muted-foreground ml-2">4.9/5 rating</span>
            </div>
          </div>

          <Button onClick={onClose} variant="ghost" className="w-full text-xs">
            Continue browsing website
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};