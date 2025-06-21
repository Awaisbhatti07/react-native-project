import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productsReducer from './home/homeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
