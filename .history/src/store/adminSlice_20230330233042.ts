import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    goods: [] as IGood[],
  },
  reducers: {
    addGood: (state, action: PayloadAction<IGood>) => {
      state.goods.push(action.payload);
    },
  },
});

export const { actions: adminActions } = adminSlice;
export default adminSlice;
