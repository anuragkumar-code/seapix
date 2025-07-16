import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Image, MoreVertical } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Album Cover */}
              <Link to={`/album/${album.id}`}>
                <div className="aspect-square relative overflow-hidden bg-secondary">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                </div>
              </Link>

              {/* Album Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Link to={`/album/${album.id}`}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {album.title}
                    </h3>
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Album</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    {album.photoCount} photos
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(album.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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