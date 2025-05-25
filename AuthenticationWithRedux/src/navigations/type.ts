import { Product } from '../redux/home/homeType';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  HomeDetails: { product: Product };
};
