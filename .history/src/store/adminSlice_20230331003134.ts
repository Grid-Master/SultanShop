import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { catalogGoods, IGood } from '../data/goods';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    goods: catalogGoods as IGood[],
  },
  reducers: {
    addGood: (state, action: PayloadAction<IGood>) => {
      state.goods.push(action.payload);
    },
    removeGood(state, action: PayloadAction<number>) {
      state.goods = state.goods.filter((good) => good.id !== action.payload);
    },
    editGood(state, action: PayloadAction<IGood>) {
      let good = state.goods.find((good) => good.id === action.payload.id);
      if (good) {
        good = { ...action.payload };
        state.goods = state.goods.filter((good) => good.id !== action.payload.id);
        state.goods.push(good);
      }
    },
    editTypeCare(state, action: PayloadAction<string[]>) {
      let good = state.goods.find((good) => good.id === +action.payload[0]); // [0] == id
      if (good) {
        good = { ...good, careType: [...action.payload.slice(1)] };
        state.goods = state.goods.filter((good) => good.id !== +action.payload[0]);
        state.goods.push(good);
      }
    },
  },
});

export const { actions: adminActions } = adminSlice;
export default adminSlice;
