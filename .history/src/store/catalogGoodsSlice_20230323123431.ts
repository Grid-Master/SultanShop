import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { catalogGoods, IGood } from '../data/goods'




const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: catalogGoods as IGood[],
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {
            state.filter(good => good.careType.includes(action.payload))
        }
    }
})

export default catalogGoodsSlice.reducer