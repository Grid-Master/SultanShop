import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

interface ICartGood extends IGood {
  count: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [] as ICartGood[],
    sum: 0 as number,
  },
  reducers: {
    addGood(state, action: PayloadAction<ICartGood>) {
      console.log(11);
      if (state.cart.some((item) => item.id === action.payload.id)) {
        console.log(1);
        state.cart.push(action.payload);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + action.payload.count }
            : item,
        );
      }
    },
    removeGood(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addGood, removeGood } = cartSlice.actions;

export default cartSlice.reducer;
