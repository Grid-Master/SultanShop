import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { catalogGoods, IGood } from '../data/goods'




const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: [] as IGood[],
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {
            state = state.filter(good => good.careType.includes(action.payload))
        },
        addGoods(state, action) {
            state = catalogGoods
        }
    }
})

export const {filterGoods, addGoods} = catalogGoodsSlice.actions

export default catalogGoodsSlice.reducer