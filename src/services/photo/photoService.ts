import api from '../axiosInstance';
import { Photo } from './types';

export const getPhotos = (albumId: string) => {
  return api.get<Photo[]>(`/album/${albumId}/photos`);
};
