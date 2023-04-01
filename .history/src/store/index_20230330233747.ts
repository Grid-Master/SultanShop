import { configureStore } from '@reduxjs/toolkit';
import catalogGoodsReducer from './catalogGoodsSlice';
import cartReducer from './cartSlice';
import adminSlice from './adminSlice';

const store = configureStore({
  reducer: {
    catalogGoods: catalogGoodsReducer,
    cartReducer,
    adminReducer: adminSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
