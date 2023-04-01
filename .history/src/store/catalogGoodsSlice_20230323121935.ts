import {createSlice} from '@reduxjs/toolkit'
import { IGood } from '../data/goods'



const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: [] as IGood[],
    reducers: {
        filterGoods(state, action) {
            
        }
    }
})

export default catalogGoodsSlice.reducer