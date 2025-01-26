import {configureStore} from '@reduxjs/toolkit';
import {cartReducer} from "./slices/CartSlice.ts";
import {authReducer} from "./slices/AuthSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;