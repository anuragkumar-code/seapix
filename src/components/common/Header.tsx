import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, Menu, X } from 'lucide-react';
import LoginModal from '../homepage/LoginModal';
import RegisterModal from '../homepage/RegisterModal';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins text-foreground">PhotoVault</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </Link>
            <Link to="/about-us" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/contact-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => setIsLoginOpen(true)}
              className="font-medium hover:bg-secondary"
            >
              Log in
            </Button>
            <Button 
              onClick={() => setIsRegisterOpen(true)}
              className="font-medium bg-primary hover:bg-hover-forest-green shadow-soft"
            >
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">Home</Link>
                <Link to="/features" className="text-foreground hover:text-primary transition-colors font-medium py-2">Features</Link>
                <Link to="/about-us" className="text-foreground hover:text-primary transition-colors font-medium py-2">About</Link>
                <Link to="/contact-us" className="text-foreground hover:text-primary transition-colors font-medium py-2">Contact</Link>
              </nav>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="justify-start font-medium"
                >
                  Log in
                </Button>
                <Button 
                  onClick={() => {
                    setIsRegisterOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="justify-start font-medium bg-primary hover:bg-hover-forest-green"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </>
  );
};

export default Header;