// export interface LoginPayload {
//   username: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     // Add other user fields as needed
//   };
// }

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  data: {
    user: {
      is_verified: boolean;
      is_active: boolean;
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      mobile: string;
      provider: string;
      updatedAt: string;
      createdAt: string;
      last_login: string;
    };
    token: string;
  };
  message: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      mobile: string;
      google_id?: string | null;
      facebook_id?: string | null;
      provider: string;
      is_verified: boolean;
      is_active: boolean;
      last_login: string;
      profile_picture?: string | null;
      createdAt: string;
      updatedAt: string;
      deletedAt?: string | null;
    };
    token: string;
  };
  message: string;
  errors?: { type: string; value: string; msg: string; path: string; location: string }[];
} 