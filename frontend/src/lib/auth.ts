import api from '../lib/axios';

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
