import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGood } from '../data/goods';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as IGood[]
    },
    reducers: {
        addGood(state, action: PayloadAction<IGood>) {
            state.cart.push(action.payload)
        }
    }
})