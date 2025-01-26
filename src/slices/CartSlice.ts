import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrderItem} from '../@types/IOrderItem';
import {ELocalStorageKeys} from '../@types/ELocalStorageKeys';
import {RootState} from "../store.ts";

export interface CartState {
  items: IOrderItem[];
}

const getInitialCartState = (): IOrderItem[] => {
  try {
    const savedCart = localStorage.getItem(ELocalStorageKeys.CART);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
};

const initialState: CartState = {
  items: getInitialCartState(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<IOrderItem>) {
      state.items.push(action.payload);
      saveToLocalStorage(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
      saveToLocalStorage(state.items);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

function saveToLocalStorage(items: IOrderItem[]) {
  localStorage.setItem(ELocalStorageKeys.CART, JSON.stringify(items));
}

export const itemCountSelector = (state: RootState) => {
  return (state.cart.items || []).reduce((acc, item) => acc + item.count, 0);
}