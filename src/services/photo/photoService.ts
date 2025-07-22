import api from '../axiosInstance';
import { Photo } from './types';

// Mock photo data 
const allMockPhotos: Photo[] = Array.from({ length: 60 }).map((_, i) => ({
  id: String(i + 1),
  albumId: '1',
  src: '/placeholder.svg', // changed from url to src
  title: `Mock Photo ${i + 1}`,
}));

export interface PaginatedPhotos {
  photos: Photo[];
  hasMore: boolean;
}

export async function getPhotosPaginated({ page, limit }: { page: number; limit: number }): Promise<PaginatedPhotos> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800));
  const start = (page - 1) * limit;
  const end = start + limit;
  const photos = allMockPhotos.slice(start, end);
  return {
    photos,
    hasMore: end < allMockPhotos.length,
  };
}
