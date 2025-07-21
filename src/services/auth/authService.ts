import api from '../axiosInstance';
import { RegisterPayload, RegisterResponse } from './types';
import { LoginPayload, LoginResponse } from './types';

export const login = (payload: LoginPayload) => {
  return api.post<LoginResponse>('/auth/login', payload);
};

export const register = async (payload: RegisterPayload) => {
  try {
    const response = await api.post<RegisterResponse>('/auth/register', payload);
    return response.data;
  } catch (error: any) {
    // Throw the full error response so the component can access errors array
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw { message: error.message || 'Registration failed. Please try again.' };
  }
};

export const loginUser = async (payload: LoginPayload) => {
  try {
    const response = await api.post<LoginResponse>('/auth/login', payload);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw { message: error.message || 'Login failed. Please try again.' };
  }
}; 