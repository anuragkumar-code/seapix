import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Star, Clock, Bell } from "lucide-react";

interface MobileAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileAppModal = ({ isOpen, onClose }: MobileAppModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                    <Clock className="h-3 w-3 mr-1" />
                    Soon
                  </Badge>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Album Social Space</h3>
                <p className="text-sm text-muted-foreground">Mobile App</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Coming Soon Message */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Under Development</span>
            </div>
            <p className="text-muted-foreground">
              We're crafting an amazing mobile experience for your memories. 
              Get ready to capture and share moments on the go!
            </p>
          </div>

          {/* Features Preview */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Coming Features:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded">
                <Star className="h-3 w-3 text-primary" />
                <span>Instant Upload</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded">
                <Download className="h-3 w-3 text-primary" />
                <span>Offline Access</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded">
                <Bell className="h-3 w-3 text-primary" />
                <span>Smart Notifications</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-secondary/50 rounded">
                <Smartphone className="h-3 w-3 text-primary" />
                <span>Native Experience</span>
              </div>
            </div>
          </div>

          {/* Store Buttons */}
          <div className="space-y-3">
            <p className="text-center text-sm font-medium">Launching Soon On:</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-secondary/20">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">App</span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">App Store</p>
                  <p className="text-xs text-muted-foreground">iOS</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-secondary/20">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Play</span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">Google Play</p>
                  <p className="text-xs text-muted-foreground">Android</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notify Button */}
          <div className="space-y-3">
            <Button className="w-full" variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Notify Me When Ready
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Be the first to know when our mobile app launches
            </p>
          </div>

          <Button onClick={onClose} className="w-full">
            Continue on Web
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};