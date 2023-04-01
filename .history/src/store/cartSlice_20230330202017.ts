import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

export interface ICartGood extends IGood {
  count: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as ICartGood[],
  },
  reducers: {
    addGood(state, action: PayloadAction<ICartGood>) {
      if (state.cart.some((item) => item.id === action.payload.id)) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + action.payload.count }
            : item,
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeGood(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    changeCount(state, action: PayloadAction<[string, number]>) {
      if (action.payload[0] === '-') {
        state.cart = state.cart.map((item) =>
          item.id === action.payload[1] ? { ...item, count: item.count - 1 } : item,
        );
      } else if (action.payload[0] === '+') {
        state.cart = state.cart.map((item) =>
          item.id === action.payload[1] ? { ...item, count: item.count + 1 } : item,
        );
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addGood, removeGood, changeCount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
