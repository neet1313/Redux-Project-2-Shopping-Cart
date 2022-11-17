import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showProduct: false };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        toggleProduct(state) { state.showProduct = !state.showProduct }
    }
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
