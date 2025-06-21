export const ENV = 'dev'; // or 'prod'

export const BASE_URL =
  ENV === 'dev' ? 'https://dummyjson.com' : '';

export const ENDPOINTS = {
  LOGIN: '/auth/login',
  PRODUCTS: '/products',
  USERS: '/users',
};