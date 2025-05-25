import apiClient from '../apiClient';
import {ENDPOINTS} from '../../constants/urlConstants';

export const loginUser = async (username: string, password: string) => {
  const payload = {
    username,
    password,
    expiresInMins: 30,
  };

  const response = await apiClient.post(ENDPOINTS.LOGIN, payload);
  return response.data;
};
