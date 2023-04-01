import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as IGood[],
  },
  reducers: {
    addGood(state, action: PayloadAction<IGood>) {
      state.cart.push(action.payload);
    },
    removeGood(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addGood, removeGood } = cartSlice.actions;

export default cartSlice.reducer;
