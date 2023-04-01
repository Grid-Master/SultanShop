import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { catalogGoods, IGood } from '../data/goods';
import adminSlice, { adminActions } from './adminSlice';

const catalogGoodsSlice = createSlice({
  name: 'catalogGoods',
  initialState: {
    goods: catalogGoods as IGood[],
  },
  reducers: {
    filterGoods(state, action: PayloadAction<string>) {
      state.goods = state.goods.filter((good) => good.careType.includes(action.payload));
    },
    filterPriceRangeGoods(state, action: PayloadAction<[string, string]>) {
      state.goods = state.goods.filter((good) => {
        if (action.payload[0] && action.payload[1]) {
          if (good.price >= +action.payload[0] && good.price <= +action.payload[1]) return true;
          else return false;
        } else if (action.payload[0]) {
          if (good.price >= +action.payload[0]) return true;
          else return false;
        } else if (action.payload[1]) {
          if (good.price <= +action.payload[1]) return true;
          else return false;
        }
      });
    },
    filterManufacturerGoods(state, action: PayloadAction<string[]>) {
      state.goods = state.goods.filter((good) => {
        for (let manufacturer of action.payload) {
          if (good.manufacturer.toLocaleLowerCase() === manufacturer.toLocaleLowerCase())
            return true;
        }
      });
    },
    sortGoodsByPrice(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case '+':
          state.goods = state.goods.sort((a, b) => a.price - b.price);
          break;
        case '-':
          state.goods = state.goods.sort((a, b) => b.price - a.price);
          break;
      }
    },
    sortGoodsByTitle(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case '+':
          state.goods = state.goods.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case '-':
          state.goods = state.goods.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
    },
    reloadGoods(state) {
      state.goods = catalogGoods;
    },
    removeGood(state, action: PayloadAction<number>) {
      state.goods = state.goods.filter((good) => good.id !== action.payload);
    },
    setGoods: (state, action: PayloadAction<IGood>) => {
      state.goods.push(action.payload);
    },
    editGood(state, action: PayloadAction<IGood>) {
      let good = state.goods.find((good) => good.id === action.payload.id);
      if (good) {
        good = { ...action.payload };
        state.goods = state.goods.filter((good) => good.id !== action.payload.id);
        state.goods.push(good);
      }
    },
  },
});

export const {
  filterGoods,
  reloadGoods,
  setGoods,
  editGood,
  removeGood,
  sortGoodsByPrice,
  sortGoodsByTitle,
  filterPriceRangeGoods,
  filterManufacturerGoods,
} = catalogGoodsSlice.actions;

export default catalogGoodsSlice.reducer;

export const addGoodFromAdmin = (good: IGood) => (dispatch: any) => {
  dispatch(adminActions.addGood(good));
  dispatch(setGoods(good));
};

export const removeGoodFromAdmin = (id: number) => (dispatch: any) => {
  dispatch(adminActions.removeGood(id));
  dispatch(removeGood(id));
};

export const editGoodFromAdmin = (good: IGood) => (dispatch: any) => {
  dispatch(adminActions.editGood(good));
  dispatch(editGood(good));
};
