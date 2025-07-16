import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Download, Share2, MoreVertical } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardNavbar from '@/components/DashboardNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data for album photos
const mockPhotos = [
  { id: 1, src: '/placeholder.svg', alt: 'Photo 1', title: 'Beach sunset' },
  { id: 2, src: '/placeholder.svg', alt: 'Photo 2', title: 'Mountain view' },
  { id: 3, src: '/placeholder.svg', alt: 'Photo 3', title: 'City lights' },
  { id: 4, src: '/placeholder.svg', alt: 'Photo 4', title: 'Forest path' },
  { id: 5, src: '/placeholder.svg', alt: 'Photo 5', title: 'Ocean waves' },
  { id: 6, src: '/placeholder.svg', alt: 'Photo 6', title: 'Desert dunes' },
  { id: 7, src: '/placeholder.svg', alt: 'Photo 7', title: 'Garden flowers' },
  { id: 8, src: '/placeholder.svg', alt: 'Photo 8', title: 'Snow peaks' },
];

const mockAlbum = {
  id: 1,
  title: 'Summer Vacation 2024',
  description: 'Amazing memories from our summer trip to the coast and mountains.',
  photoCount: mockPhotos.length,
  createdAt: '2024-07-15',
  tags: ['vacation', 'summer', 'family'],
};

const AlbumDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photos] = useState(mockPhotos);
  const [album] = useState(mockAlbum);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handlePhotoClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleUploadPhotos = () => {
    // Handle photo upload logic
    console.log('Upload photos');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6 p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Albums
        </Button>

        {/* Album Header */}
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
              onClick={handleUploadPhotos}
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
                <DropdownMenuItem>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Album
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </DropdownMenuItem>
                <DropdownMenuItem>Edit Album</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  Delete Album
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Photos Grid */}
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handlePhotoClick(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No photos yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start building your album by uploading your first photos
            </p>
            <Button
              onClick={handleUploadPhotos}
              className="bg-primary hover:bg-hover-forest-green"
            >
              Upload Photos
            </Button>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={photos.map(photo => ({ src: photo.src, alt: photo.alt }))}
        />
      </main>

      <Footer />
    </div>
  );
};

export default AlbumDetail;