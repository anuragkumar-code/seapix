export interface Album {
  id: string;
  title: string;
  description?: string;
  // Add other album fields as needed
} 


export interface CreateAlbumPayload {
  title: string;
  description?: string;
  tags?: string[];
  type?: string;
  location?: string;
  cover_photo?: string;
  privacy_settings?: {
    allow_comments: boolean;
    allow_downloads: boolean;
    password_protected: boolean;
  };
}


export interface CreateAlbumResponse {
  success: boolean;
  data: Album;
  message: string;
}