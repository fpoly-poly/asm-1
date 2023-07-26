import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = { products: { id: string; name: string }[]; isLoading: boolean };

const initialState: InitialState = {
    products: [],
    isLoading: false,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
    const res = await axios.get("http://localhost:8000/products");

    return res.data;
});
export const addProduct = createAsyncThunk("product/addProduct", async (data: any) => {
    await axios.post("http://localhost:8000/products", data);

    const res = await axios.get("http://localhost:8000/products");
    return res.data;
});
export const updatePoduct = createAsyncThunk("product/updatePoduct", async (data: any) => {
    const res = await axios.put("http://localhost:8000/products/" + data.id, data);

    return res.data;
});
export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id: string) => {
    const res = await axios.delete("http://localhost:8000/products/" + id);

    return res.data;
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(updatePoduct.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export default productSlice.reducer;
