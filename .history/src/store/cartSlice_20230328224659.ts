import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as IGood[],
    sum: 0 as number
  },
  reducers: {
    addGood(state, action: PayloadAction<IGood>) {
      state.cart.push(action.payload);
    },
    removeGood(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    priceSum(state) {
      state.sum =  state.cart.reduce((sum, item) => {
        return sum + item.price;
      }, 0),
    }
  },
});

export const { addGood, removeGood, priceSum } = cartSlice.actions;

export default cartSlice.reducer;
