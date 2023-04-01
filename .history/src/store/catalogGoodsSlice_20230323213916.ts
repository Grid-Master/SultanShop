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
        }
    }
})

export const {filterGoods, clearGoods} = catalogGoodsSlice.actions

export default catalogGoodsSlice.reducer