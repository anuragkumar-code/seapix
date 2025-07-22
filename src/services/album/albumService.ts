import api from '../axiosInstance';
import { Album } from './types';
 
// Mock album data 
const allMockAlbums: Album[] = Array.from({ length: 50 }).map((_, i) => ({
  id: String(i + 1),
  title: `Mock Album ${i + 1}`,
  description: `Description for album ${i + 1}`,
  coverImage: '/placeholder.svg',
  createdAt: `2024-07-${(i % 28) + 1}`,
  photoCount: Math.floor(Math.random() * 100) + 1,
}));

export interface PaginatedAlbums {
  albums: Album[];
  hasMore: boolean;
}

export async function getAlbumsPaginated({ page, limit }: { page: number; limit: number }): Promise<PaginatedAlbums> {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 800));
  const start = (page - 1) * limit;
  const end = start + limit;
  const albums = allMockAlbums.slice(start, end);
  return {
    albums,
    hasMore: end < allMockAlbums.length,
  };
} 