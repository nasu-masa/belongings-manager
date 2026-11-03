import api from '../lib/axios';

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const registerUser = async (input: RegisterInput): Promise<void> => {
  await api.get('/sanctum/csrf-cookie');
  await api.post('/register', input);
};

export type LoginInput = {
  email: string;
  password: string;
};

export const loginUser = async (input: LoginInput): Promise<void> => {
  await api.get('/sanctum/csrf-cookie');
  await api.post('/login', input);
};

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<User>('/api/user');

  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/logout');
};

export const resendVerificationEmail = async (): Promise<void> => {
  await api.post('/email/verification-notification');
};
