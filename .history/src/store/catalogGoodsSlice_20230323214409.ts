import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { catalogGoods, IGood } from '../data/goods'




const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: catalogGoods as IGood[],
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {
            state = state.filter(good => good.careType.includes(action.payload))
        },
        clearGoods(state, action:PayloadAction<number>) {
            state = []
        },
        removeGood(state, action: PayloadAction<number>) {
            state = state.filter(good => good.id !== action.payload)
        }
    }
})

export const {filterGoods, clearGoods, removeGood} = catalogGoodsSlice.actions

export default catalogGoodsSlice.reducer