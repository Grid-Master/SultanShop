import { configureStore } from "@reduxjs/toolkit";
import catalogGoodsReducer from './catalogGoodsSlice'

const store = configureStore({
    reducer: {
        catalogGoods: catalogGoodsReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch