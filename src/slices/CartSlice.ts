import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrderItem} from '../@types/IOrderItem';
import {ELocalStorageKeys} from '../@types/ELocalStorageKeys';
import {RootState} from "../store.ts";

export interface CartState {
  items: IOrderItem[];
  street: string;
  house: string;
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
  street: '',
  house: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<IOrderItem>) {
      if (state.items.map(x => x.item.id).includes(action.payload.item.id)) {
        const index = state.items.findIndex(x => x.item.id === action.payload.item.id);
        state.items[index].count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }
      saveToLocalStorage(state.items);
    },
    removeItem(state, action: PayloadAction<IOrderItem>) {
      const index = state.items.findIndex(x => x.item.id === action.payload.item.id);
      if (index !== -1) {
        state.items[index].count -= action.payload.count;
        if (state.items[index].count <= 0) {
          state.items.splice(index, 1);
        }
      }
      saveToLocalStorage(state.items);
    },
    streetChange(state, action: PayloadAction<string>) {
      state.street = action.payload;
    },
    houseChange(state, action: PayloadAction<string>) {
      state.house = action.payload;
    },
    placeAnOrder(state) {
      // Instead of api call
      console.log(`Order placed:\n${state.items.map(x => {
        return `${x.item.meal} x${x.count}`
      }).join('\n')}\nTo: ${state.street} ${state.house}`);

      state.house = '';
      state.street = '';
      state.items = [];
      saveToLocalStorage(state.items);
    }
  },
});

export const {addItem, removeItem, streetChange, houseChange, placeAnOrder} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

function saveToLocalStorage(items: IOrderItem[]) {
  localStorage.setItem(ELocalStorageKeys.CART, JSON.stringify(items));
}

export const itemCountSelector = (state: RootState) => {
  return (state.cart.items || []).reduce((acc, item) => acc + item.count, 0);
}