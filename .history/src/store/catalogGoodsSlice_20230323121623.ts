import {createSlice} from '@reduxjs/toolkit'
import { IGood } from '../data/goods'



const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: [] as IGood[],
    reducers: {

    }
})

export default catalogGoodsSlice.reducer