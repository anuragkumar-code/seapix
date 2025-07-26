import { useState } from "react";
import { Link } from 'react-router-dom';

import { Camera, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { DesktopAppModal } from "@/components/common/DesktopAppModal";
import { MobileAppModal } from "@/components/common/MobileAppModal";

const Footer = () => {
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-secondary-light-mint border-t border-border">
        <div className="container mx-auto px-4 pt-6 pb-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-poppins text-foreground">PhotoVault</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your digital memories, beautifully preserved and easily shared. 
                Create stunning photo albums that tell your story.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold font-poppins text-foreground">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><button onClick={() => setIsDesktopModalOpen(true)} className="text-muted-foreground hover:text-primary transition-colors">Desktop App</button></li>
                <li><button onClick={() => setIsMobileModalOpen(true)} className="text-muted-foreground hover:text-primary transition-colors">Mobile App</button></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold font-poppins text-foreground">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold font-poppins text-foreground">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/help-center" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-condtions" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} PhotoVault. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <p className="text-muted-foreground text-sm">
                Photography is the story I fail to put into words.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <DesktopAppModal 
        isOpen={isDesktopModalOpen}
        onClose={() => setIsDesktopModalOpen(false)}
        onSwitchToLogin={() => {
          console.log("Switch to Login");
          setIsDesktopModalOpen(false);
        }}
        onSwitchToRegister={() => {
          console.log("Switch to Register");
          setIsDesktopModalOpen(false);
        }}
      />
      <MobileAppModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
      />
    </>
  );
};

export default Footer;