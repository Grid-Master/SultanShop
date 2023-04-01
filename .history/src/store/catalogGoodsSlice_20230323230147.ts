import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { catalogGoods, IGood } from '../data/goods'




const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: {
        goods: catalogGoods as IGood[]
    },
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {
            state.goods = state.goods.filter(good => good.careType.includes(action.payload))
        },
        sortGoodsByPrice(state) {
            state.goods = state.goods.sort((a,b) => a.price - b.price)
        },
        reloadGoods(state) {
            state.goods = catalogGoods
        },
        removeGood(state, action: PayloadAction<number>) {
            state.goods = state.goods.filter(good => good.id !== action.payload)
        }
    }
})

export const {filterGoods, reloadGoods, removeGood, sortGoodsByPrice} = catalogGoodsSlice.actions

export default catalogGoodsSlice.reducer