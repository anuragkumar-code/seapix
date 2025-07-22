import { useState, useEffect, useRef, useCallback } from 'react';
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
import AlbumGridSkeleton from '@/components/dashboard/AlbumGridSkeleton';
import { getAlbumsPaginated } from '@/services/album/albumService';

const PAGE_SIZE = 8;

const Dashboard = () => {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Initial load
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getAlbumsPaginated({ page: 1, limit: PAGE_SIZE })
      .then((res) => {
        if (isMounted) {
          setAlbums(res.albums);
          setHasMore(res.hasMore);
          setPage(2);
        }
      })
      .catch(() => setError('Failed to load albums.'))
      .finally(() => setLoading(false));
    return () => { isMounted = false; };
  }, []);

  // Load more handler
  const loadMore = useCallback(() => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);
    getAlbumsPaginated({ page, limit: PAGE_SIZE })
      .then((res) => {
        setAlbums((prev) => [...prev, ...res.albums]);
        setHasMore(res.hasMore);
        setPage((p) => p + 1);
      })
      .catch(() => setError('Failed to load more albums.'))
      .finally(() => setLoadingMore(false));
  }, [hasMore, loadingMore, page]);

  // Intersection Observer for infinite scroll
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
        {/* Albums Grid or Skeleton */}
        {loading ? <AlbumGridSkeleton /> : <AlbumGrid albums={albums} />}
        {/* Infinite Scroll Sentinel */}
        {!loading && hasMore && (
          <div ref={observerRef} className="h-8 w-full flex items-center justify-center" />
        )}
        {/* Loading More Skeleton */}
        {loadingMore && <AlbumGridSkeleton />}
        {/* Manual Load More Button */}
        {!loading && hasMore && !loadingMore && (
          <div className="flex justify-center mt-4">
            <Button onClick={loadMore} variant="outline">
              Load More
            </Button>
          </div>
        )}
        {/* Empty State */}
        {!loading && albums.length === 0 && (
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
        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 mt-4">
            {error} <Button onClick={loadMore} variant="link">Retry</Button>
          </div>
        )}
      </main>
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;