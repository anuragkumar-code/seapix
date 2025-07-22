const skeletons = Array.from({ length: 8 });

const AlbumGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm"
        >
          {/* Album Cover Skeleton */}
          <div className="aspect-square relative overflow-hidden bg-secondary animate-pulse" />

          {/* Album Info Skeleton */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
              <div className="h-6 w-6 bg-muted rounded-full animate-pulse" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-muted rounded mr-2 animate-pulse" />
                <div className="h-3 w-1/3 bg-muted rounded animate-pulse" />
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-muted rounded mr-2 animate-pulse" />
                <div className="h-3 w-1/4 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumGridSkeleton; 