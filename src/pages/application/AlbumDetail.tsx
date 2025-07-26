import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Download, Share2, MoreVertical } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import DashboardHeader from '@/components/common/DashboardHeader';
import DashboardNavbar from '@/components/common/DashboardNavbar';
import DashboardFooter from '@/components/common/DashboardFooter';
import { Button } from '@/components/ui/button';

import PhotoGrid from '@/components/album/PhotoGrid';
import AlbumHeader from '@/components/album/AlbumHeader';
import PhotoGridSkeleton from '@/components/album/PhotoGridSkeleton';
import { getPhotosPaginated } from '@/services/photo/photoService';

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

const PAGE_SIZE = 12;

const AlbumDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [album] = useState(mockAlbum);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getPhotosPaginated({ page: 1, limit: PAGE_SIZE })
      .then((res) => {
        if (isMounted) {
          setPhotos(res.photos);
          setHasMore(res.hasMore);
          setPage(2);
        }
      })
      .catch(() => setError('Failed to load photos.'))
      .finally(() => setLoading(false));
    return () => { isMounted = false; };
  }, []);

  const loadMore = useCallback(() => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);
    getPhotosPaginated({ page, limit: PAGE_SIZE })
      .then((res) => {
        setPhotos((prev) => [...prev, ...res.photos]);
        setHasMore(res.hasMore);
        setPage((p) => p + 1);
      })
      .catch(() => setError('Failed to load more photos.'))
      .finally(() => setLoadingMore(false));
  }, [hasMore, loadingMore, page]);

  useEffect(() => {
    if (!hasMore || loading || loadingMore) return;
    const node = observerRef.current;
    if (!node) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          loadMore();
        }, 200);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [hasMore, loading, loadingMore, loadMore]);

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
          className="hidden mb-6 p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Albums
        </Button>

        {/* Album Header */}
        <AlbumHeader album={album} onUploadPhotos={handleUploadPhotos} />

        {/* Photos Grid or Skeleton */}
        {loading ? (
          <PhotoGridSkeleton />
        ) : photos.length > 0 ? (
          <PhotoGrid photos={photos} onPhotoClick={handlePhotoClick} />
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
        {/* Infinite Scroll Sentinel */}
        {!loading && hasMore && (
          <div ref={observerRef} className="h-8 w-full flex items-center justify-center" />
        )}
        {/* Loading More Skeleton */}
        {loadingMore && <PhotoGridSkeleton />}
        {/* Manual Load More Button */}
        {!loading && hasMore && !loadingMore && (
          <div className="flex justify-center mt-4">
            <Button onClick={loadMore} variant="outline">
              Load More
            </Button>
          </div>
        )}
        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 mt-4">
            {error} <Button onClick={loadMore} variant="link">Retry</Button>
          </div>
        )}
        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={photos.map(photo => ({ src: photo.url, alt: photo.title }))}
        />
      </main>

      <DashboardFooter />
    </div>
  );
};

export default AlbumDetail;