import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store.ts";
import {ELocalStorageKeys} from "../@types/ELocalStorageKeys.ts";

interface UserState {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: UserState | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem(ELocalStorageKeys.USER) || '{}'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      localStorage.setItem(ELocalStorageKeys.USER, JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem(ELocalStorageKeys.USER);
    },
  },
});

export const { saveUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const userSelector = (state: RootState) => {
  return state.auth.user;
}