import { Home, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const DashboardNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">

        <div className="flex items-center space-x-1">
          <Link to="/dashboard">
            <Button 
              variant={isActive('/dashboard') ? 'secondary' : 'ghost'}
              size="sm"
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">Home</span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button 
              variant={isActive('/profile') ? 'secondary' : 'ghost'}
              size="sm"
              className="flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span className="hidden md:inline">Profile</span>
            </Button>
          </Link>
        </div>

        <Link to="/create-album">
          <Button className="bg-primary hover:bg-hover-forest-green">
            <Plus className="w-4 h-4 mr-2" />
            Add Album
          </Button>
        </Link>
        
      </div>
    </nav>
  );
};

export default DashboardNavbar;