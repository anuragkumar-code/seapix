import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const DashboardFooter = () => {
  return (
    <footer className="bg-secondary-light-mint border-t border-border">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
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

        {/* Center: Copyright */}
        <div className="text-muted-foreground text-sm text-center md:text-base">
          © {new Date().getFullYear()} PhotoVault. All rights reserved.
        </div>

        {/* Right: Quote */}
        <div className="text-muted-foreground text-xs md:text-sm text-right max-w-xs md:max-w-md">
          "Photography is the story I fail to put into words."
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter; 