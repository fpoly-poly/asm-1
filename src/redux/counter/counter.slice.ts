import { createSlice } from "@reduxjs/toolkit";

const initialState: { count: number } = {
    count: 10,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action) => {
            console.log(action);
            state.count += action.payload;
        },
    },
});

export const { increase } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export default counterReducer;
