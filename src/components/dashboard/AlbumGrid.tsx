import { Link } from 'react-router-dom';
import { Calendar, Image, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Album {
  id: number;
  title: string;
  photoCount: number;
  coverImage: string;
  createdAt: string;
}

interface AlbumGridProps {
  albums: Album[];
}

const AlbumGrid = ({ albums }: AlbumGridProps) => {
  return (
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
  );
};

export default AlbumGrid; 