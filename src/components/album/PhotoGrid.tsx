interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick?: (index: number) => void;
}

const PhotoGrid = ({ photos, onPhotoClick }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer group"
          onClick={onPhotoClick ? () => onPhotoClick(index) : undefined}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid; 