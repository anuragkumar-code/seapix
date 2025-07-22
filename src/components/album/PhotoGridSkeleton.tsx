const skeletons = Array.from({ length: 12 });

const PhotoGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {skeletons.map((_, idx) => (
        <div
          key={idx}
          className="aspect-square bg-muted rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
};

export default PhotoGridSkeleton; 