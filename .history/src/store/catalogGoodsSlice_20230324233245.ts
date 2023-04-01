import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { catalogGoods, IGood } from '../data/goods'

interface IPriceRange {
    
}


const catalogGoodsSlice = createSlice({
    name: 'catalogGoods',
    initialState: {
        goods: catalogGoods as IGood[]
    },
    reducers: {
        filterGoods(state, action:PayloadAction<string>) {
            state.goods = state.goods.filter(good => good.careType.includes(action.payload))
        },
        filterPriceRangeGoods(state, action: PayloadAction<[number | string, number | string]>) {
                state.goods = state.goods.filter(good => {
                    if(typeof action.payload[0] ==='number' && typeof action.payload[1] === 'number') {
                        if(good.price >= action.payload[0] && good.price <= action.payload[1]) return true
                        else return false
                    } else if (typeof action.payload[0] ==='string') {
                        if(good.price <= action.payload[1]) return true
                        else return false
                    } else if(typeof action.payload[1] ==='string') {
                        if(good.price >= action.payload[0]) return true
                        else return false
                    }
                })
        },
        sortGoodsByPrice(state, action: PayloadAction<string>) {
            switch(action.payload) {
                case '+': state.goods = state.goods.sort((a,b) => a.price - b.price) 
                break
                case '-': state.goods = state.goods.sort((a,b) => b.price - a.price)
                break
            }  
        },
        sortGoodsByTitle(state, action: PayloadAction<string>) {
            switch(action.payload) {
                case '+': state.goods = state.goods.sort((a,b) => a.title.localeCompare(b.title)) 
                break
                case '-': state.goods = state.goods.sort((a,b) => b.title.localeCompare(a.title)) 
                break
            }  
        },
        reloadGoods(state) {
            state.goods = catalogGoods
        },
        removeGood(state, action: PayloadAction<number>) {
            state.goods = state.goods.filter(good => good.id !== action.payload)
        }
    }
})

export const {filterGoods, reloadGoods, removeGood, sortGoodsByPrice, sortGoodsByTitle, filterPriceRangeGoods} = catalogGoodsSlice.actions

export default catalogGoodsSlice.reducer