import api from '../axiosInstance';
import { Album } from './types';

export const getAlbums = () => {
  return api.get<Album[]>('/album');
}; 