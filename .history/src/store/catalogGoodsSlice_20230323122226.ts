import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IGood } from '../data/goods'



const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: [] as IGood[],
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {

        }
    }
})

export default catalogGoodsSlice.reducer