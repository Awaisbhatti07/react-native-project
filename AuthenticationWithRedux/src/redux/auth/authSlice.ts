import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState } from './authType';

/*

createSlice Redux Toolkit ka function hai jo automatically:
Reducer banata hai
Actions banata hai
Initial state manage karta hai

*/

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = {...state.user, ...action.payload};
      }
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
