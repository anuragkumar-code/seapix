import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Upload, Download, Share2, MoreVertical } from 'lucide-react';

interface AlbumHeaderProps {
  album: {
    title: string;
    description: string;
    photoCount: number;
    createdAt: string;
    tags: string[];
  };
  onUploadPhotos: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

const AlbumHeader = ({ album, onUploadPhotos, onEdit, onDelete, onShare, onDownload }: AlbumHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
      <div className="mb-4 lg:mb-0">
        <h1 className="text-3xl font-bold font-poppins text-foreground mb-2">
          {album.title}
        </h1>
        <p className="text-muted-foreground mb-3">
          {album.description}
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>{album.photoCount} photos</span>
          <span>Created {new Date(album.createdAt).toLocaleDateString()}</span>
          <div className="flex space-x-2">
            {album.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        <Button
          onClick={onUploadPhotos}
          className="bg-primary hover:bg-hover-forest-green"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Photos
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share Album
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onEdit}>Edit Album</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive" onClick={onDelete}>
              Delete Album
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AlbumHeader; 