import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Image, MoreVertical } from 'lucide-react';
import DashboardHeader from '@/components/common/DashboardHeader';
import DashboardNavbar from '@/components/common/DashboardNavbar';
import DashboardFooter from '@/components/common/DashboardFooter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AlbumGrid from '@/components/dashboard/AlbumGrid';

// Mock data for albums
const mockAlbums = [
  {
    id: 1,
    title: 'Summer Vacation 2024',
    photoCount: 45,
    coverImage: '/placeholder.svg',
    createdAt: '2024-07-15',
  },
  {
    id: 2,
    title: 'Family Gathering',
    photoCount: 23,
    coverImage: '/placeholder.svg',
    createdAt: '2024-06-20',
  },
  {
    id: 3,
    title: 'Nature Photography',
    photoCount: 67,
    coverImage: '/placeholder.svg',
    createdAt: '2024-05-10',
  },
  {
    id: 4,
    title: 'Wedding Memories',
    photoCount: 89,
    coverImage: '/placeholder.svg',
    createdAt: '2024-04-25',
  },
  {
    id: 5,
    title: 'City Life',
    photoCount: 34,
    coverImage: '/placeholder.svg',
    createdAt: '2024-03-12',
  },
  {
    id: 6,
    title: 'Food Adventures',
    photoCount: 56,
    coverImage: '/placeholder.svg',
    createdAt: '2024-02-08',
  },
];
// const mockAlbums = [];

const Dashboard = () => {
  const [albums] = useState(mockAlbums);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-poppins text-foreground mb-2">
            My Albums
          </h1>
          <p className="text-muted-foreground">
            {albums.length} albums • Organize and share your precious memories
          </p>
        </div>

        {/* Albums Grid */}
        <AlbumGrid albums={albums} />

        {/* Empty State */}
        {albums.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Image className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No albums yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Create your first album to start organizing your photos
            </p>
            <Link to="/create-album">
              <Button className="bg-primary hover:bg-hover-forest-green">
                Create Album
              </Button>
            </Link>
          </div>
        )}
      </main>

      <DashboardFooter />
    </div>
  );
};

export default Dashboard;