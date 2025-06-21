import apiClient from '../apiClient';
import { ENDPOINTS } from '../../constants/urlConstants';

export const getProducts = async () => {
  const response = await apiClient.get(ENDPOINTS.PRODUCTS);
  return response.data;
};
